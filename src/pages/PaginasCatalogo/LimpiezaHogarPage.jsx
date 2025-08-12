import React from 'react';
import ProductCard from '../../componentes/ProductCard/ProductCard'; 
import './CatalogPage.css';

import imgDetergenteDoffi from '../../assets/detergenteDoffi.jpg';
import imgJabonBolivar from '../../assets/jabonBolivar.jpg';

const limpiezaHogarProducts = [
  // 2. Usa la variable de la imagen importada
  { id: 1, name: 'Detergente Doffi 140g', price: 1.00, image: imgDetergenteDoffi },
  { id: 2, name: 'Jabón Bolivar de 190g', price: 3.00, image: imgJabonBolivar },
];

const LimpiezaHogarPage = () => {
  return (
    <div className="catalog-page">
      <h1>Limpieza del Hogar</h1>
      <div className="product-grid">
        {limpiezaHogarProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default LimpiezaHogarPage;