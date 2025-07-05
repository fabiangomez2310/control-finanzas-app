import React from 'react'

import styles from "./DateInput.module.css";

const DateInput = ({
    label,
    name,
    value,
    onChange,
    required = false,
    min,
    max
}) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name}>{label}</label>
      <input 
        type="date" 
        name={name} 
        id={name} 
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        max={max}
        />
    </div>
  )
}

export default DateInput
