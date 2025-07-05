import React from "react";
import styles from './AmountInput.module.css';

const AmountInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  min = "0",
  step = "100",
}) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name}>{label}</label>
      <input 
      type="number" 
      id={name} 
      name={name} 
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      min={min}
      step={step}
      
      />
    </div>
  );
};

export default AmountInput;
