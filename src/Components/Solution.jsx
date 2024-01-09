import React from 'react';
import SolutionTable from './solutionTable';
import '../Styles/Solution.css';

function Solution({ solution, hasSolved }) {
  const solutionFound = solution.length > 0;

  return (
    <div className="solution-container">
      {hasSolved && !solutionFound ? <p className="no-solution">No solution found.</p> : null}
      {solutionFound ? <SolutionTable solution={solution} /> : null}
    </div>
  );
}

export default Solution;