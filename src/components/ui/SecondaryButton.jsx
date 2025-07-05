import React from 'react'
import styles from './SecondaryButton.module.css';

const SecondaryButton = ({
    type = "button",
    onClick,
    children,
    disabled = false
}) => {
  return (
    <button
        type={type}
        onClick={onClick}
        className={styles.button}
        disabled={disabled}
    >
        {children}
    </button>
  )
}

export default SecondaryButton;
