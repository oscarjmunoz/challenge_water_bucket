import React from 'react';
import Algorithm from './components/Algorithm';
import Form from './Components/JugForm';
import Solution from './components/Solution';

function App() {
  const {
    solution,
    hasSolved,
    hasCleared,
    solveWaterJugChallenge,
    handleClear,
  } = Algorithm();

  return (
    <div className="App">
      <h1>Water Jug Challenge</h1>
      <Form onSolve={solveWaterJugChallenge} onClear={handleClear} />
      <Solution solution={solution} hasSolved={hasSolved} hasCleared={hasCleared} />
    </div>
  );
}

export default App;