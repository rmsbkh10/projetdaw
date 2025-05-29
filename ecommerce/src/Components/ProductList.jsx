import Products from '../Data/Products';


import ProductCard from "./ProductCard/ProductCard";

function ProductList() {
  return (
    <div className="product-list">
      {Products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
export default ProductList;
