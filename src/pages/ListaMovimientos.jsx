import React, { useEffect, useState } from "react";
import movementsService from "../services/movementsService";
import styles from "./ListaMovimientos.module.css";

const ListaMovimientos = () => {
  const [movimientos, setMovimientos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    movementsService()
      .then((data) => setMovimientos(data))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p className={styles.noData}>Cargando movimientos...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Movimientos</h2>

      {movimientos.length === 0 ? (
        <p className={styles.noData}>No hay movimientos registrados.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Monto</th>
              <th>Tipo</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {movimientos.map((mov) => (
              <tr key={mov.id}>
                <td>{mov.date}</td>
                <td>{mov.description}</td>
                <td>${mov.amount.toLocaleString()}</td>
                <td>{mov.type}</td>
                <td>{mov.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaMovimientos;
