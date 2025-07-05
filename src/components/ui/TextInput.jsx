import React from "react";

import styles from './TextInput.module.css';

const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
}) => {
  return (
    <div className={styles.inputGroup} >
        <label htmlFor={name}>{label}</label>
        <input
            type="text"
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
        />
    </div>
  )
};

export default TextInput;
