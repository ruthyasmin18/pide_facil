import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación
import './EmptyCart.css';

// Este es un componente SVG para la ilustración.
// Puedes reemplazarlo por cualquier otro SVG o una imagen <img>.
const EmptyCartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.2998 5H22L20 12H8.2998" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.2998 5L4.2998 3H1" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.2998 12L5.2998 17H20" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8.5" cy="20.5" r="1.5" stroke="#E0E0E0" strokeWidth="2"/>
    <circle cx="17.5" cy="20.5" r="1.5" stroke="#E0E0E0" strokeWidth="2"/>
  </svg>
);


const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <div className="empty-cart-icon">
        <EmptyCartIcon />
      </div>
      <h2>¡Tu carrito está esperando!</h2>
      <p>Aún no has añadido ningún producto. ¡Anímate a explorar nuestro catálogo!</p>
      <Link to="/abarrotes" className="start-shopping-btn">
        Explorar Productos
      </Link>
    </div>
  );
};

export default EmptyCart;