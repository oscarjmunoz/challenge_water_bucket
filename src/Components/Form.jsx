import React, { useState } from 'react';
import InputField from './InputField';
import './css/JugForm.css';

const validateInputs = (x, y, z) => {
  if (![x, y, z].every(value => value.trim())) {
    return 'Please fill in all fields.';
  }

  const parsedX = parseInt(x);
  const parsedY = parseInt(y);
  const parsedZ = parseInt(z);

  if ([parsedX, parsedY, parsedZ].some(isNaN)) {
    return 'Values must be integers.';
  }

  if (parsedX <= 0 || parsedY <= 0 || parsedZ <= 0) {
    return 'Values must be greater than zero.';
  }

  return '';
};

const JugForm = ({ onSolve, onClear }) => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');
  const [error, setError] = useState('');

  const handleSolve = () => {
    const validationError = validateInputs(x, y, z);
    validationError ? setError(validationError) : onSolve(parseInt(x), parseInt(y), parseInt(z));
  };

  const handleClear = () => {
    setX('');
    setY('');
    setZ('');
    setError('');
    onClear();
  };

  return (
    <div className="jug-form-container">
      <InputField label="X-gallon Jug" value={x} onChange={(e) => setX(e.target.value)} />
      <InputField label="Y-gallon Jug" value={y} onChange={(e) => setY(e.target.value)} />
      <InputField label="Z gallons" value={z} onChange={(e) => setZ(e.target.value)} />
      <div className="buttons-container">
        <button className="solve-button" onClick={handleSolve}>Solve</button>
        <button className="clear-button" onClick={handleClear}>Clear</button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default JugForm;
