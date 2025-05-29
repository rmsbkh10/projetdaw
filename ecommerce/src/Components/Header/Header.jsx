import React from 'react';
import './Header.css';
import logo from '../../Assets/logo.jpg';
import { FaShoppingCart } from 'react-icons/fa'; 
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img id="logo" src={logo} alt="logo" />
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Produits</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="cart-icon">
        <FaShoppingCart size={28} />
        <span className="cart-count">0</span>
      </div>
    </header>
  );
};

export default Header;
