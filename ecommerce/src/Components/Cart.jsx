import React, { useEffect, useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(stored);
    setTotal(
      stored.reduce((sum, item) => sum + (item.price || 0), 0)
    );
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#fdf0e1',
        color: '#4a2c2a',
        padding: 20,
        minHeight: '100vh',
      }}
    >
      <h1 style={{ color: '#b37a59' }}>Votre Panier</h1>

      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                border: '1px solid #e0c4b0',
                borderRadius: 15,
                marginBottom: 20,
                padding: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 20,
              }}
            >
              <img
                src={`/images/${item.image}`}
                alt={item.name}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 10,
                  objectFit: 'cover',
                }}
              />
              <div style={{ flexGrow: 1, textAlign: 'left' }}>
                <h3 style={{ color: '#b37a59' }}>{item.name}</h3>
                <p style={{ fontSize: 18, color: '#261a13' }}>
                  {item.description}
                </p>
              </div>
              <div>
                <strong>
                  {item.price
                    ? `${item.price.toLocaleString('fr-DZ')} DA`
                    : 'N/A'}
                </strong>
              </div>
            </div>
          ))}

          <div
            style={{
              fontSize: '1.5em',
              marginTop: 30,
              color: '#b37a59',
              textAlign: 'center',
            }}
          >
            Total : {total.toLocaleString('fr-DZ')} DA
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
