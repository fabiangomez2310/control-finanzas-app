import React, { lazy, useState } from 'react'

import styles from './NuevoMovimiento.module.css';

import { useNavigate } from 'react-router-dom'

import TextInput from "../components/ui/TextInput";
import AmountInput from "../components/ui/AmountInput";
import SelecInput from "../components/ui/SelectInput";
import DateInput from "../components/ui/DateInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";

const NuevoMovimiento = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    description: "",
    amount : "",
    type : "",
    category : "",
    date : "",
  })


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movimiento registrado:". form);
    // guardar 
    navigate("/");
  }

  const handleCancel = () => {
    navigate("/");
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Registrar nuevo movimiento</h2>
      <form onSubmit={handleSubmit}>
          <TextInput
            label="Descripción"
            name="description"
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
              {value: "ingreso", label: "Ingreso"},
              {value: "egreso", label: "Egreso"},
            ]}
            required
          />
          <SelecInput
            label="Categoria"
            name="category"
            value={form.category}
            onChange={handleChange}
            options={[
              {value: 'comida', label: 'Comida'},
              {value: 'transporte', label: 'Transporte'},
              {value: 'servicios', label: 'Servicios'}
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

export default NuevoMovimiento
