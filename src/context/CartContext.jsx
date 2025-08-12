// src/context/CartContext.jsx (Actualizado)
import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast'; // 1. Importa la función toast

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.id === product.id);
      if (itemInCart) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    // 2. Llama a la notificación justo después de añadir el producto
    toast.success('¡Se agregó al carrito exitosamente!');
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    // Opcional: También puedes añadir una notificación de eliminación
    toast.error('Producto eliminado del carrito');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};