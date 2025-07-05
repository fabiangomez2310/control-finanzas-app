import React from "react";

import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({
  type = "button",
  onClick,
  children,
  disabled = false,
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
  );
};

export default PrimaryButton;
