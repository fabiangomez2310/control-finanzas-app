import React from "react";
import { Routes, Route } from "react-router-dom";


import MainLayout from "../layout/MainLayout";
import ListaMovimientos from "../pages/ListaMovimientos";
import NuevoMovimiento from "../pages/NuevoMovimiento";
import EditarMovimiento from "../pages/EditarMovimiento";
import ResumenFinanciero from "../pages/ResumenFinanciero";

const AppRouter = ({movimientos, agregarMovimiento, eliminarMovimiento}) => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ListaMovimientos movimientos={movimientos} eliminarMovimiento={eliminarMovimiento} />} />
        <Route path="nuevo" element={<NuevoMovimiento agregarMovimiento={agregarMovimiento} />} />
        <Route path="editar/:id" element={<EditarMovimiento movimientos={movimientos} />} />
        <Route path="resumen" element={<ResumenFinanciero movimientos={movimientos} />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
