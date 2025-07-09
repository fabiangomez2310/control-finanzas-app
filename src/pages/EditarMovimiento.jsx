import React, {useState, useEffect} from 'react'


import styles from './EditarMovimiento.module.css';

import { useParams, useNavigate } from 'react-router-dom'

import TextInput from "../components/ui/TextInput";
import AmountInput from "../components/ui/AmountInput";
import SelecInput from "../components/ui/SelectInput";
import DateInput from "../components/ui/DateInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";

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


  if(!movimiento) return <p>Movimiento no encontrado</p>

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
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Editar Movimiento</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Descripcion"
          name='description'
          value={form.description}
          onChange={handleChange}
          placeholder='Ej: Pasaje en bus'
          required
        />

        <AmountInput 
            label="Monto $"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder='Ej: 3000'
            required
          />
        
        
        <SelecInput 
            label="Tipo de movimiento"
            name="type"
            value={form.type}
            onChange={handleChange}
            options={[
              {value: "INGRESO", label: "INGRESO"},
              {value: "EGRESO", label: "EGRESO"},
            ]}
            required
          />
        <SelecInput
            label="Categoria"
            name="category"
            value={form.category}
            onChange={handleChange}
            options={[
              {value: 'COMIDA', label: 'Comida'},
              {value: 'TRANSPORTE', label: 'Transporte'},
              {value: 'SERVICIOS', label: 'Servicios'},
              {value: 'SALARIO', label: 'Salario'},
              {value: 'HONORARIOS', label: 'Honorarios'},
              {value: 'OTROS', label: 'Otros'}

            ]}
          />
        <DateInput 
            label="Fecha"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        <div className={styles.buttonGroup}>
            <PrimaryButton type='submit'>Guardar</PrimaryButton>
            <SecondaryButton onClick={handleCancel}>Cancelar</SecondaryButton>
          </div>
      </form>
    </div>
  )
}

export default EditarMovimiento
