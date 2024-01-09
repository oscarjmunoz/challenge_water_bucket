import React from 'react';
import '../Styles/InputField.css';

function InputField({ label, value, onChange }) {
  return (
    <div className="input-field-container" >
      <label>{label}:</label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}

export default InputField;