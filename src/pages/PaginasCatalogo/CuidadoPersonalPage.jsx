import React from 'react';
import ProductCard from '../../componentes/ProductCard/ProductCard'; 
import './CatalogPage.css';


import imgPapelParacas from '../../assets/papelParacas.jpg';
import imgPrestobarba from '../../assets/prestobarbaGillete.jpg';
import imgJabonRexona from '../../assets/jabonRexona.jpg';
import imgShampooHS from '../../assets/HS.jpg';
import imgJabonMoncler from '../../assets/jabonMoncler.jpg';
import imgPapelNoble from '../../assets/papelNoble.jpg';

const cuidadoPersonalProducts = [
  // 2. Usa la variable de la imagen importada
  { id: 1, name: 'Papel Higienico Paracas', price: 7.00, image: imgPapelParacas },
  { id: 2, name: 'Prestobarba Gillete 3', price: 4.00, image: imgPrestobarba },
  { id: 3, name: 'Jabón de tocador Rexona', price: 3.50, image: imgJabonRexona },
  { id: 4, name: 'Shampoo H&S 33ml', price: 1.50, image: imgShampooHS },
  { id: 5, name: 'Jabon Moncler 145g', price: 4.50, image: imgJabonMoncler },
  { id: 6, name: 'Papel Higienico Noble', price: 1.50, image: imgPapelNoble },
];

const CuidadoPersonalPage = () => {
  return (
    <div className="catalog-page">
      <h1>Cuidado Personal</h1>
      <div className="product-grid">
        {cuidadoPersonalProducts.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CuidadoPersonalPage;