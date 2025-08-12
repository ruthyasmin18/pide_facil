import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // 1. Importar el Router
import { CartProvider } from './context/CartContext'; // 2. Importar el CartProvider
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 3. Envolver la aplicación con el Router y el Provider */}
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </StrictMode>
);