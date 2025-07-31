import { useParams } from 'react-router-dom';
import '../styles/ProductPage.css';

// Dummy product data (in a real app, you'd fetch this)
const dummyProducts = [
  { id: 1, name: "Urban Jacket", price: "220.00", description: "A stylish and versatile urban jacket, perfect for any season. Made with high-quality, breathable fabric.", image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Minimalist Watch", price: "180.00", description: "Elegant minimalist watch with a sleek design. Features a durable stainless steel case and genuine leather strap.", image: "https://images.unsplash.com/photo-1543163521-1bf539c1756b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Modern Sneakers", price: "150.00", description: "Comfortable and trendy sneakers for everyday wear. Lightweight design with superior cushioning.", image: "https://images.unsplash.com/photo-1588872657578-7efd1f155551?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Elegant Dress", price: "290.00", description: "A sophisticated dress perfect for special occasions. Made from luxurious fabric with a flattering silhouette.", image: "https://images.unsplash.com/photo-1591047139829-d91ae64efea2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "Chic Handbag", price: "195.00", description: "A versatile and chic handbag, ideal for daily use. Features multiple compartments and a durable finish.", image: "https://images.unsplash.com/photo-1571875257727-26391677b242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Sporty Shoes", price: "130.00", description: "High-performance sporty shoes designed for comfort and agility. Perfect for running or casual wear.", image: "https://images.unsplash.com/photo-1542291026-7eec264c655f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = dummyProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container product-not-found">Product not found.</div>;
  }

  return (
    <section className="section product-detail-page" aria-label="product-detail">
      <div className="container product-detail-grid">
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        <div className="product-info">
          <h1 className="h2 product-detail-title">{product.name}</h1>
          <p className="product-detail-price">${product.price}</p>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-actions">
            <button className="btn btn-primary">
              <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
              <span className="span">Add to Cart</span>
            </button>
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
