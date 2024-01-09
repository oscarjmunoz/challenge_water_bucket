import React from 'react';
import './css/InputField.css';

const InputField = ({ label, value, onChange }) => (
    <div className="input-field-container">
      <label>{label}:</label>
      <input 
        type="number" 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );

export default InputField;
