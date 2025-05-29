import React, { useState } from 'react';
import allProducts from '../../Data/Products';
import './AllProducts.css';

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all-products-container">
      <h1>Nos Produits</h1>

      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price.toLocaleString()} DA</p>
            </div>
          ))
        ) : (
          <p className="no-result">Aucun produit trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;