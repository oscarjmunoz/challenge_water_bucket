import React from 'react';
import SolutionTable from './SolutionTable';
import './css/Solution.css';

const Solution = ({ solution, hasSolved }) => (
  <div className="solution-container">
    {hasSolved && !solution.length && <p className="no-solution">No solution found.</p>}
    {solution.length > 0 && <SolutionTable solution={solution} />}
  </div>
);

export default Solution;
