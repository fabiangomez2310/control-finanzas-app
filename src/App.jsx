import React, { useEffect, useState } from 'react'
import AppRouter from './router/AppRouter'

const App = () => {

  const [movimientos, setMovimientos] = useState([]);

  useEffect(()=> {
    const guardados = localStorage.getItem("movimientosLocal");

    if (guardados) setMovimientos(JSON.parse(guardados))
  }, []);


  useEffect(()=>{
    localStorage.setItem("movimientosLocal", JSON.stringify(movimientos))
  },[movimientos])

  const agregarMovimiento = (movimiento) => {
    setMovimientos([...movimientos, movimiento])
  }

  const eliminarMovimiento = (id) => {
    setMovimientos(movimientos.filter((t) => t.id !== id))
  }

  const editarMovimiento = (movimientoEditado) => {
    setMovimientos(movimientos.map(m => m.id === movimientoEditado.id ? movimientoEditado:m ))
  }
  

  return (
    <>
      <AppRouter 
        movimientos={movimientos}
        agregarMovimiento={agregarMovimiento} 
        eliminarMovimiento={eliminarMovimiento} 
        editarMovimiento={editarMovimiento} />
    </>
  )
}

export default App
