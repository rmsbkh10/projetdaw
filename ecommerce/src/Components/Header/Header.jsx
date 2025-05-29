import React from 'react';
import './Header.css';
import logo from '../../Assets/logo.jpg';
import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext'; 

const Header = () => {
  const { cart } = useCart(); 

  return (
    <header className="header">
      <div className="logo">
        <img id="logo" src={logo} alt="logo" />
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="cart-icon">
        <Link to="/cart">
          <FaShoppingCart size={28} />
        </Link>
        <span className="cart-count">{cart.length}</span> 
      </div>
    </header>
  );
};

export default Header;
