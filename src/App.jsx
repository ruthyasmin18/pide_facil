import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar'; // Tu componente Navbar
import AppRoutes from './routes/AppRoutes'; // Tu nuevo componente de rutas
import './App.css'; // Si tienes un CSS global para la app

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Tu navbar que contiene los links */}
      <main className="content"> {/* Contenedor para el contenido de la página */}
        <AppRoutes /> {/* Aquí se renderizarán los componentes de tus rutas */}
      </main>
      {/* Posiblemente un Footer aquí */}
    </Router>
  );
};

export default App;