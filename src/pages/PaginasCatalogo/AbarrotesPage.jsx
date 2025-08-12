import React from 'react';
import ProductCard from '../../componentes/ProductCard/ProductCard'; 
import './CatalogPage.css'; // Importamos el estilo de la página

// 1. Importa cada imagen desde la carpeta 'assets'
import imgGelatinaFresa from '../../assets/gelatinaFresa.jpg';
import imgCervezaPilsen from '../../assets/cervezaPilsen.jpg';
import imgLecheGloria from '../../assets/lecheGloria.jpg';
import imgGelatinaNaranja from '../../assets/gelatinaNaranja.jpg';

// Datos de ejemplo actualizados
const abarrotesProducts = [
  // 2. Usa la variable de la imagen importada
  { id: 1, name: 'Gelatina Universal Fresa', price: 3.50, image: imgGelatinaFresa },
  { id: 2, name: 'Cerveza Pilsen Sixpack', price: 30.00, image: imgCervezaPilsen },
  { id: 3, name: 'Leche Gloria', price: 4.10, image: imgLecheGloria },
  { id: 4, name: 'Gelatina Universal Naranja', price: 3.50, image: imgGelatinaNaranja },
];

const AbarrotesPage = () => {
  return (
    <div className="catalog-page">
      <h1>Abarrotes</h1>
      <div className="product-grid">
        {abarrotesProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default AbarrotesPage;