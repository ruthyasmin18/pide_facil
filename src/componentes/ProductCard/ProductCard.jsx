import React, { useContext } from 'react';         // 1. Importa useContext de React
import { CartContext } from '../../context/CartContext'; // 2. Importa nuestro contexto del carrito
import './ProductCard.css';

// 3. Ahora recibe el objeto 'product' completo para tener todos sus datos
const ProductCard = ({ product }) => {
  // 4. Obtiene la función addToCart desde el contexto
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-image-container">
        {/* 5. Usa los datos del objeto 'product' */}
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">S/ {product.price.toFixed(2)}</p>
      </div>
      {/* 6. El botón ahora llama a la función addToCart del contexto */}
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        🛒 Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;