import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

// Suggested Unsplash images (replace with actual URLs)
const heroBanner = "https://images.unsplash.com/photo-1563545712546-34de145f484c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
const product1 = "https://images.unsplash.com/photo-1575747436806-d32181129d86?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const product2 = "https://images.unsplash.com/photo-1638095562082-449d8c5a47b4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const product3 = "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Modern sneakers
const product4 = "https://images.unsplash.com/photo-1545194827-db87df1649d9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Elegant dress
const product5 = "https://images.unsplash.com/photo-1591567462127-1f25099900ab?q=80&w=833&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Chic handbag
const product6 = "https://images.unsplash.com/photo-1561808843-7adeb9606939?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Sporty shoes
const offerBg = "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Abstract background for offer

const HomePage = () => {
  const products = [
    { id: 1, name: "Urban Jacket", price: "220.00", image: product1 },
    { id: 2, name: "Minimalist Watch", price: "180.00", image: product2 },
    { id: 3, name: "Modern Sneakers", price: "150.00", image: product3 },
    { id: 4, name: "Elegant Dress", price: "290.00", image: product4 },
    { id: 5, name: "Chic Handbag", price: "195.00", image: product5 },
    { id: 6, name: "Sporty Shoes", price: "130.00", image: product6 },
  ];

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle title">New Arrivals</p>
            <h1 className="h1 hero-title title">Elevate Your <br /> Style</h1>
            <p className="hero-text">
              Discover curated collections that blend modern aesthetics with timeless elegance.
            </p>
            <Link to="/shop" className="btn btn-primary">
              <span className="span">Shop Now</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </Link>
          </div>
          <div className="hero-banner">
            <figure className="img-holder" style={{ '--width': 704, '--height': 700 }}>
              <img src={heroBanner} width="704" height="700" alt="Modern fashion" className="img-cover" />
            </figure>
          </div>
        </div>
      </div>

      {/* PRODUCT */}
      <section className="section product" aria-label="product">
        <div className="container">
          <h2 className="h2 section-title title text-center">Explore Our Latest Drops</h2>
          <ul className="product-list has-scrollbar">
            {products.slice(0, 3).map(product => (
              <li className="scrollbar-item" key={product.id}>
                <div className="product-card text-center">
                  <div className="card-banner">
                    <figure className="product-banner img-holder" style={{ '--width': 448, '--height': 470 }}>
                      <img src={product.image} width="448" height="470" loading="lazy" alt={product.name} className="img-cover" />
                    </figure>
                    <Link to={`/product/${product.id}`} className="btn product-btn">
                      <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
                      <span className="span">Add To Cart</span>
                    </Link>
                  </div>
                  <div className="card-content">
                    <h3 className="h4 title">
                      <Link to={`/product/${product.id}`} className="card-title">{product.name}</Link>
                    </h3>
                    <span className="price">${product.price}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURE */}
      <section className="section feature" aria-label="feature-label">
        <div className="container">
          <h2 className="h2 section-title title text-center" id="feature-label">Featured Collections</h2>
          <ul className="feature-list">
            {products.slice(3, 6).map(product => (
              <li key={product.id}>
                <div className="product-card text-center">
                  <div className="card-banner">
                    <figure className="product-banner img-holder" style={{ '--width': 448, '--height': 470 }}>
                      <img src={product.image} width="448" height="470" loading="lazy" alt={product.name} className="img-cover" />
                    </figure>
                    <Link to={`/product/${product.id}`} className="btn product-btn">
                      <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
                      <span className="span">Add To Cart</span>
                    </Link>
                  </div>
                  <div className="card-content">
                    <h3 className="h3 title">
                      <Link to={`/product/${product.id}`} className="card-title">{product.name}</Link>
                    </h3>
                    <span className="price">${product.price}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/shop" className="btn btn-secondary">View All Products</Link>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer has-bg-image" style={{ backgroundImage: `url(${offerBg})` }}>
        <div className="container">
          <div className="offer-card">
            <h2 className="title card-title">Up to 40% Off</h2>
            <p className="card-text">
              Don't miss out on our limited-time offers. Shop now and save big on your favorite items!
            </p>
            <Link to="/shop" className="btn btn-secondary">
              <span className="span">Shop Now</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
