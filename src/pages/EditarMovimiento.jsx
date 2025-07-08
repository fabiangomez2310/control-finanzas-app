import React, {useState, useEffect} from 'react'

import { useParams, useNavigate } from 'react-router-dom'


const EditarMovimiento = ({movimientos, editarMovimiento}) => {

  const {id} = useParams();
  const navigate = useNavigate();


  const movimiento = movimientos.find((m) => m.id === Number(id))


  const [form, setForm] = useState({
    description : "",
    amount : "",
    type : "",
    category : "",
    date: "",
  });

  useEffect(() => {
    if(movimiento) {
      setForm({
        description : movimiento.description,
        amount : movimiento.amount.toString(),
        type: movimiento.type,
        category: movimiento.category,
        date : movimiento.date.slice(0,10)
      });
    }
  }, [movimiento])


  if(!movimiento) return <p>Movimiento no enocontrado</p>

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const movimientoEditado = {
      id: movimiento.id,
      ...form,
      amount : parseFloat(form.amount),
      date : new Date(form.date).toISOString(),
    }

    editarMovimiento(movimientoEditado)
    navigate("/")

  }

  const handleCancel = () => {
    navigate("/")
  }
  
  return (
    <div>
      <h2>Editar Movimiento</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descripción"
          required
        />
        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          placeholder="Monto"
          required
        />
        <select name="type" value={form.type} onChange={handleChange} required>
          <option value="">Seleccione tipo</option>
          <option value="ingreso">Ingreso</option>
          <option value="egreso">Egreso</option>
        </select>
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Seleccione categoría</option>
          <option value="comida">Comida</option>
          <option value="transporte">Transporte</option>
          <option value="servicios">Servicios</option>
        </select>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Guardar Cambios</button>
        <button type="button" onClick={handleCancel}>
          Cancelar
        </button>
      </form>
    </div>
  )
}

export default EditarMovimiento
