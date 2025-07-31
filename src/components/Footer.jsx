import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">Aura</Link>
            <p className="footer-text">
              Discover unique styles and quality products that elevate your everyday.
            </p>
            <ul className="social-list">
              <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
              <li><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>
          </div>

          <ul className="footer-list">
            <li><p className="footer-list-title title">Contact Info</p></li>
            <li><address className="footer-text">123 Modern Ave, Fashion City, FC 12345</address></li>
            <li><a href="mailto:info@aurashop.com" className="email">ashikshaheed4@gmail.com</a></li>
            <li><a href="tel:+1234567890" className="call">+9477 558 9559</a></li>
          </ul>

          <div className="footer-list">
            <p className="footer-list-title title">Subscribe Newsletter</p>
            <input type="email" name="email_address" placeholder="Enter your email address" required autoComplete="off" className="input-field" />
            <button className="btn btn-secondary">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="wrapper">
            <div className="link-wrapper">
              <Link to="/shop" className="footer-bottom-link">Shop</Link>
              <Link to="/about" className="footer-bottom-link">About Us</Link>
              <Link to="/faq" className="footer-bottom-link">FAQ</Link>
              <Link to="/returns" className="footer-bottom-link">Returns</Link>
            </div>
            <div className="link-wrapper">
              <Link to="/terms" className="footer-bottom-link">Terms & Conditions</Link>
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            </div>
          </div>
          <p className="copyright">&copy; 2023 Aura, Developed by Ashik</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
