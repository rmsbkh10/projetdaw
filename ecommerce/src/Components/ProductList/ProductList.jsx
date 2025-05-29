import React from 'react';
import products from '../../Data/Products';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ category }) => {
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
