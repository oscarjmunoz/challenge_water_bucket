import { useState } from 'react';

function Algorithm() {
  const [solution, setSolution] = useState([]);
  const [hasSolved, setHasSolved] = useState(false);
  const [hasCleared, setHasCleared] = useState(false);

  const solveWaterJugChallenge = (x, y, z) => {
    const visitedStates = new Set();
    const queue = [{ state: [0, 0], steps: [] }];
    let solutionFound = false;

    while (queue.length > 0) {
      const { state, steps } = queue.shift();
      const [jugX, jugY] = state;

      if (jugX === z || jugY === z) {
        setSolution(steps);
        setHasSolved(true);
        solutionFound = true;
        break;
      }

      visitedStates.add(`${jugX}-${jugY}`);

      const nextStateOptions = [
        [x, jugY],
        [jugX, y],
        [0, jugY],
        [jugX, 0],
        [Math.max(jugX - (y - jugY), 0), Math.min(jugY + jugX, y)],
        [Math.min(jugX + jugY, x), Math.max(jugY - (x - jugX), 0)],
      ];

      for (const nextState of nextStateOptions) {
        const [nextX, nextY] = nextState;
        const nextStateString = `${nextX}-${nextY}`;

        if (!visitedStates.has(nextStateString)) {
          queue.push({
            state: nextState,
            steps: [...steps, { bucketX: nextX, bucketY: nextY, explanation: `Fill bucket x` }],
          });
        }
      }
    }

    if (!solutionFound) {
      setSolution([]);
      setHasSolved(true);
    }

    setHasCleared(false);
  };

  const handleClear = () => {
    setSolution([]);
    setHasCleared(true);
    setHasSolved(false);
  };

  return {
    solution,
    hasSolved,
    hasCleared,
    solveWaterJugChallenge,
    handleClear,
  };
}

export default Algorithm;