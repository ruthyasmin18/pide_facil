import React from 'react';
import './ProductCard.css'; // Su propio archivo de estilos

// El componente recibe props para ser reutilizable
const ProductCard = ({ image, name, price }) => {

  const handleAddToCart = () => {
    // Aquí iría la lógica para añadir al carrito
    console.log(`Añadido al carrito: ${name}`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">S/{price.toFixed(2)}</p>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        🛒 Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;