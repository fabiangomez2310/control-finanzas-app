import React from "react";
import styles from "./ResumenFinanciero.module.css";

const ResumenFinanciero = ({movimientos}) => {
  
      const ingresos = movimientos.filter((m) => m.type === "ingreso");
      const egresos = movimientos.filter((m) => m.type === "egreso");

      const totalIngresos = ingresos.reduce((sum, m) => sum + m.amount, 0 )
      const totalEgresos = egresos.reduce((sum, m) => sum + m.amount, 0 )
      const saldo = totalIngresos - totalEgresos;
      
 

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resumen Financiero</h2>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.ingreso}`}>
          <h3>Ingresos</h3>
          <p>${totalIngresos.toLocaleString()}</p>
        </div>
        <div className={`${styles.card} ${styles.egreso}`}>
          <h3>Egresos</h3>
          <p>${totalEgresos.toLocaleString()}</p>
        </div>
        <div className={`${styles.card} ${styles.saldo}`}>
          <h3>Saldo</h3>
          <p>${saldo.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumenFinanciero;
