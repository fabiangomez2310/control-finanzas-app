import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL no está definida. Revisa tu archivo .env");
}

// Obtener todos los movimientos
export const getMovements = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error al obtener movimientos", error);
    throw error;
  }
};

// Obtener un solo movimiento por ID
export const getMovementById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error al obtener movimiento con ID ${id}`, error);
    throw error;
  }
};

// Crear un nuevo movimiento
export const createMovement = async (movement) => {
  try {
    const res = await axios.post(API_URL, movement);
    return res.data;
  } catch (error) {
    console.error("Error al crear movimiento", error);
    throw error;
  }
};

// Actualizar un movimiento existente
export const updateMovement = async (id, movement) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, movement);
    return res.data;
  } catch (error) {
    console.error(`Error al actualizar movimiento con ID ${id}`, error);
    throw error;
  }
};

// Eliminar un movimiento
export const deleteMovement = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error al eliminar movimiento con ID ${id}`, error);
    throw error;
  }
};
