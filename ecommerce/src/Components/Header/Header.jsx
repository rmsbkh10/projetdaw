import React from 'react';
import './Header.css';
import logo from '../../Assets/logo.jpg';
import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img id="logo" src={logo} alt="logo" />
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </nav>

      <div className="cart-icon">
       <Link to="/cart"> <FaShoppingCart size={28} /> </Link>
        <span className="cart-count">0</span>
      </div>
    </header>
  );
};

export default Header;
