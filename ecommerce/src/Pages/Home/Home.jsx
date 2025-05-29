import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import photo1home from '../../Assets/photo1home.jpg';
import photo2home from '../../Assets/photo2home.jpg';

function Home() {
  const navigate = useNavigate();

  const handleClick = (section) => {
    navigate(`/products/${section}`);
  };

  return (
    <div className="home-container">
      <h1>"Embrace the Art of Beauty"</h1>

      <div className="card-wrapper">
        <div className="card" onClick={() => handleClick('skincare')}>
          <div
            className="card-image"
            style={{ backgroundImage: `url(${photo2home})` }}
          ></div>
          <div className="card-content">
            <h2>Skincare</h2>
            <p>Discover our gentle skincare for a radiant complexion</p>
          </div>
        </div>

        <div className="card" onClick={() => handleClick('makeup')}>
          <div
            className="card-image"
            style={{ backgroundImage: `url(${photo1home})` }}
          ></div>
          <div className="card-content">
            <h2>Makeup</h2>
            <p>Palettes, lipsticks, foundations, and more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
