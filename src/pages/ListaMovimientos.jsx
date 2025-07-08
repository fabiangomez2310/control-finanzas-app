import React from "react";
import { useNavigate } from "react-router-dom"; // Importar navigate
import styles from "./ListaMovimientos.module.css";

const ListaMovimientos = ({ movimientos, eliminarMovimiento }) => {
  const navigate = useNavigate(); // Hook para navegar

  if (!movimientos.length)
    return <p className={styles.noData}>No hay movimientos...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Movimientos</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Tipo</th>
            <th>Categoría</th>
            <th>Acciones</th>
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
              <td>
                <button onClick={() => eliminarMovimiento(mov.id)}>❌</button>
                <button onClick={() => navigate(`/editar/${mov.id}`)}>✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaMovimientos;
