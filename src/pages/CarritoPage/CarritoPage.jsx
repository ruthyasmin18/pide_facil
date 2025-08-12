import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import EmptyCart from '../EmptyCart/EmptyCart'; // 1. Importa el nuevo componente
import './CarritoPage.css';

const CarritoPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculamos el total (esta lógica no cambia)
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Mi Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        // 2. Reemplaza el mensaje de texto simple por el componente <EmptyCart />
        <EmptyCart />
      ) : (
        <div className="cart-content">
          <div className="cart-items-list">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">Precio: S/ {item.price.toFixed(2)}</p>
                  <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                </div>
                <button 
                  className="cart-item-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Resumen de Compra</h2>
            <div className="summary-total">
              <span>Total:</span>
              <span>S/ {total.toFixed(2)}</span>
            </div>
            <button className="buy-now-btn">
              Comprar Ahora
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarritoPage;