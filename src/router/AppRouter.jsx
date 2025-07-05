import React from 'react'
import {Routes, Route} from 'react-router-dom';
import ListaMovimientos from '../pages/ListaMovimientos';
import NuevoMovimiento from '../pages/NuevoMovimiento';
import EditarMovimiento from '../pages/EditarMovimiento';
import ResumenFinanciero from '../pages/ResumenFinanciero';



const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<ListaMovimientos/>} />
        <Route path='/nuevo' element={<NuevoMovimiento/>} />
        <Route path='/editar/:id' element={<EditarMovimiento/>} />
        <Route path='/resumen' element={<ResumenFinanciero/>} />
    </Routes>
  )
}

export default AppRouter
