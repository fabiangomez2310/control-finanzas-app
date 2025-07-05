import React from 'react'

import styles from './SelectInput.module.css';

const SelectInput = ({
    label,
    name,
    value,
    onChange,
    options = [],
    required = false
}) => {
  return (
    <div className={styles.selectGroup}>
      <label htmlFor={name}>{label}</label>
      <select 
        id={name}
        name={name} 
        value={value}
        onChange={onChange}
        required={required}
        >
            <option value="">-- Selecciona una opción --</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
      </select>
    </div>
  )
}

export default SelectInput
