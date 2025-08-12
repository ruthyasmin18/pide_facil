import React from 'react';
import { Toaster } from 'react-hot-toast'; // 1. Se importa el componente Toaster
// import { BrowserRouter as Router } from 'react-router-dom'; // 2. Ya no se necesita el Router aquí
import Navbar from './componentes/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import './App.css';

const App = () => {
  return (
    <>
      {/* 3. Se añade el componente que mostrará las notificaciones */}
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />

      <Navbar />
      <main className="content">
        <AppRoutes />
      </main>
    </>
  );
};

export default App;