import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShopPage.css';

// Reusing some product images for demonstration
const productImages = [
  "https://i.pinimg.com/1200x/f4/b6/7d/f4b67da61a247963c2dd4aac4f42d382.jpg",
  "https://i.pinimg.com/736x/a2/6a/5a/a26a5aabc4b280cfdc98c19da263f6e2.jpg",
  "https://i.pinimg.com/1200x/ef/75/5e/ef755ecff3283420737c6ea490d76f07.jpg",
  "https://i.pinimg.com/736x/a7/67/19/a76719608e31a4e040847b6705d67309.jpg",
  "https://i.pinimg.com/736x/f3/06/04/f30604b2a2a607cacfe4641eaf60bb8c.jpg",
  "https://i.pinimg.com/1200x/2a/c3/4a/2ac34a5c57e7895b1747cb06a4fe3a8c.jpg",
  "https://i.pinimg.com/1200x/50/6d/c4/506dc4516908f51411dbe9912e4b59ea.jpg", // Generic product
  "https://i.pinimg.com/1200x/1f/f8/22/1ff822bf8cc16df45420be5e507ee8ba.jpg", // Headphones
];

const allProducts = [
  { id: 1, name: "Urban Jacket", price: "220.00", image: productImages[0] },
  { id: 2, name: "Minimalist Watch", price: "180.00", image: productImages[1] },
  { id: 3, name: "Modern Sneakers", price: "150.00", image: productImages[2] },
  { id: 4, name: "Elegant Dress", price: "290.00", image: productImages[3] },
  { id: 5, name: "Chic Handbag", price: "195.00", image: productImages[4] },
  { id: 6, name: "Sporty Shoes", price: "130.00", image: productImages[5] },
  { id: 7, name: "Classic Sunglasses", price: "95.00", image: productImages[6] },
  { id: 8, name: "Premium Headphones", price: "350.00", image: productImages[7] },
];

const ShopPage = () => {
  return (
    <section className="section shop-page" aria-label="shop">
      <div className="container">
        <h1 className="h2 section-title title text-center">Our Full Collection</h1>
        <ul className="product-grid">
          {allProducts.map(product => (
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
  );
};

export default ShopPage;
