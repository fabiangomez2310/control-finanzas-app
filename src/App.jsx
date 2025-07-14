import React, { useEffect, useState } from "react";
import AppRouter from "./router/AppRouter";

import {
  getMovements,
  createMovement,
  updateMovement,
  deleteMovement,
} from "./services/movementsService";

const App = () => {
  const [movimientos, setMovimientos] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovements();
        setMovimientos(data);
      } catch (error) {
        console.error("Error al cargar movimientos desde el servidor", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const agregarMovimiento = async (nuevo) => {
    try {
      const data = await createMovement(nuevo);
      setMovimientos([...movimientos, data]);
    } catch (error) {
      console.error("Error al agregar movimiento", error);
    }
  };

  const eliminarMovimiento = async (id) => {
    try {
      await deleteMovement(id);
      setMovimientos(movimientos.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Error al eliminar movimiento", error);
    }
  };

  const editarMovimiento = async (editado) => {
    try {
      const data = await updateMovement(editado.id, editado);
      setMovimientos(
        movimientos.map((m) => (m.id === data.id ? data : m))
      );
    } catch (error) {
      console.error("Error al editar movimiento", error);
    }
  };

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Cargando movimientos...</p>;
  }

  return (
    <AppRouter
      movimientos={movimientos}
      agregarMovimiento={agregarMovimiento}
      eliminarMovimiento={eliminarMovimiento}
      editarMovimiento={editarMovimiento}
    />
  );
};

export default App;