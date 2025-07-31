import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage'; // Example for a single product page
import ContactPage from './pages/ContactPage';
import './styles/App.css'; // Component-specific styles or main layout styles

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} /> {/* Example route */}
          <Route path="/contact" element={<ContactPage />} />
          {/* Add more routes as needed for Portfolio, Blog, etc. */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
