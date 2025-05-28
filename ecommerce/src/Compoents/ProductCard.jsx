function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price.toFixed(2)} €</p>
      <button>Ajouter au panier</button>
    </div>
  );
}
export default ProductCard;