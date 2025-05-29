import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../Components/ProductList';

const ProductPage = () => {
  const { category } = useParams();

  return (
    <div>
      <h2>Produits - {category}</h2>
      <ProductList category={category} />
    </div>
  );
};

export default ProductPage;
