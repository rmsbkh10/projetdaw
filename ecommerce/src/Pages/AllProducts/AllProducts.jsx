import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard'; 
import products from '../../Data/Products'; 
import './AllProducts.css'; 

const AllProducts = () => {
  return (
    <div className="all-products">
      <h1 className="title">Tous les Produits</h1>
      <div className="product-grid">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
