import React, { useEffect, useState } from "react";
import movementsService from "../services/movementsService";
import styles from "./ResumenFinanciero.module.css";

const ResumenFinanciero = () => {
  const [ingresos, setIngresos] = useState(0);
  const [egresos, setEgresos] = useState(0);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    movementsService().then((data) => {
      const totalIngresos = data
        .filter((m) => m.type === "ingreso")
        .reduce((sum, m) => sum + m.amount, 0);

      const totalEgresos = data
        .filter((m) => m.type === "egreso")
        .reduce((sum, m) => sum + m.amount, 0);

      setIngresos(totalIngresos);
      setEgresos(totalEgresos);
      setSaldo(totalIngresos - totalEgresos);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resumen Financiero</h2>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.ingreso}`}>
          <h3>Ingresos</h3>
          <p>${ingresos.toLocaleString()}</p>
        </div>
        <div className={`${styles.card} ${styles.egreso}`}>
          <h3>Egresos</h3>
          <p>${egresos.toLocaleString()}</p>
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
