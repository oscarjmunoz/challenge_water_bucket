import React from 'react';

function SolutionTable({ solution }) {
  if (solution.length === 0) {
    return null;
  }

  return (
    <table className="solution-table">
      <thead>
        <tr>
          <th>Bucket x</th>
          <th>Bucket y</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        {solution.map((step, index) => (
          <tr key={index}>
            <td>{step.bucketX}</td>
            <td>{step.bucketY}</td>
            <td>{step.explanation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SolutionTable;