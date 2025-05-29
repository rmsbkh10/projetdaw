import { useCart } from './CartContext';

function Cart() {
  const { cart } = useCart();
  const totalPrice = cart.reduce((sum, item) => {
    const price = Number(item.price);
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <div style={{ backgroundColor: '#fdf0e1', minHeight: '100vh', padding: '40px', color: '#4a2c2a' }}>
      <h1 style={{ color: '#b37a59' }}>Votre Panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item, index) => (
              <li key={index} style={{
                borderBottom: '1px solid #d8b89c',
                padding: '10px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span>{item.name}</span>
                <span style={{ fontWeight: 'bold' }}>
                  {Number(item.price).toLocaleString()} DA
                </span>
              </li>
            ))}
          </ul>

          <h2 style={{ marginTop: '30px', color: '#b37a59' }}>
            Total : {totalPrice.toLocaleString()} DA
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;
