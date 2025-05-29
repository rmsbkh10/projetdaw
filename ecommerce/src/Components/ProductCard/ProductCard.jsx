import React from 'react';
import { useCart } from '../../CartContext'; 
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); 

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button className="add-to-cart-btn" onClick={() => {
        addToCart(product);
        alert('Produit ajouté au panier !');
      }}>
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductCard;
