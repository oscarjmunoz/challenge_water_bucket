import { useReducer } from 'react';

const initialState = {
  solution: [],
  hasSolved: false,
  hasCleared: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SOLUTION':
      return { ...state, solution: action.payload, hasSolved: true, hasCleared: false };
    case 'CLEAR_SOLUTION':
      return { ...state, solution: [], hasSolved: false, hasCleared: true };
    default:
      return state;
  }
};

function Algorithm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const solveWaterJugChallenge = (x, y, z) => {
    const visitedStates = new Set();
    const queue = [{ state: [0, 0], steps: [] }];
    let solutionFound = false;

    while (queue.length > 0) {
      const { state, steps } = queue.shift();
      const [jugX, jugY] = state;

      if (jugX === z || jugY === z) {
        dispatch({ type: 'SET_SOLUTION', payload: steps });
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
      dispatch({ type: 'SET_SOLUTION', payload: [] });
    }

    dispatch({ type: 'CLEAR_SOLUTION' });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR_SOLUTION' });
  };

  return {
    ...state,
    solveWaterJugChallenge,
    handleClear,
  };
}

export default Algorithm;
