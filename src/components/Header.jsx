import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className={`header ${isNavActive ? 'active' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">Aura</Link>

        <nav className={`navbar ${isNavActive ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li><Link to="/" className="navbar-link" onClick={() => setIsNavActive(false)}>Home</Link></li>
            <li><Link to="/shop" className="navbar-link" onClick={() => setIsNavActive(false)}>Shop</Link></li>
            <li><Link to="/blog" className="navbar-link" onClick={() => setIsNavActive(false)}>Blog</Link></li>
            <li><Link to="/portfolio" className="navbar-link" onClick={() => setIsNavActive(false)}>Portfolio</Link></li>
          </ul>

          <button className="cart-btn">
            <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
            <span className="span">Cart (0)</span>
          </button>

          <Link to="/contact" className="btn" onClick={() => setIsNavActive(false)}>Contact Us</Link>
        </nav>

        <button className="nav-open-btn" aria-label="toggle menu" onClick={toggleNav}>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
    </header>
  );
};

export default Header;