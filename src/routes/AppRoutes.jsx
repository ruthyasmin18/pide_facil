import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa tus componentes de página
import HomePage from '../pages/HomePage/HomePage';
// --- RUTAS CORREGIDAS ---
import AbarrotesPage from '../pages/PaginasCatalogo/AbarrotesPage';
import CuidadoPersonalPage from '../pages/PaginasCatalogo/CuidadoPersonalPage';
import LimpiezaHogarPage from '../pages/PaginasCatalogo/LimpiezaHogarPage';
// --- FIN DE CORRECCIÓN ---
import CarritoPage from '../pages/CarritoPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/abarrotes" element={<AbarrotesPage />} />
      <Route path="/cuidado-personal" element={<CuidadoPersonalPage />} />
      <Route path="/limpieza-hogar" element={<LimpiezaHogarPage />} />
      <Route path="/carrito" element={<CarritoPage />} />

      {/* Ruta para capturar cualquier otra ruta no definida (404) */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;