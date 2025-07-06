import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.container}>
      {/* NAV SUPERIOR */}
      <header className={styles.header}>
        <h1>Control Finanzas</h1>
      </header>

      <div className={styles.body}>
        {/* SIDEBAR IZQUIERDO */}
        <aside className={styles.sidebar}>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Movimientos</NavLink>
              </li>
              <li>
                <NavLink to="/nuevo" className={({ isActive }) => isActive ? styles.active : ""}>Nuevo</NavLink>
              </li>
              <li>
                <NavLink to="/resumen" className={({ isActive }) => isActive ? styles.active : ""}>Resumen</NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
