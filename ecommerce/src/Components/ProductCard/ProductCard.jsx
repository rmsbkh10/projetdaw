import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button className="add-to-cart-btn">Ajouter au panier</button>
    </div>
  );
};

export default ProductCard;
