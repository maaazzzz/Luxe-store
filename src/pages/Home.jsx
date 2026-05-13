import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import './Home.css';

export default function Home() {
  const featured = PRODUCTS.slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="home fade-in">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-pill"><Sparkles size={14} /> New Season 2026</span>
          <h1 className="hero-title">
            Fashion that <span className="gradient-text">moves</span> you forward
          </h1>
          <p className="hero-subtitle">
            Discover thoughtfully designed pieces for the modern wardrobe.
            Free shipping on orders over $100.
          </p>
          <div className="hero-actions">
            <Link to="/shop/women" className="btn btn-primary">Shop Women <ArrowRight size={16} /></Link>
            <Link to="/shop/men" className="btn btn-outline">Shop Men</Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container categories-section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <p>Browse our curated collections</p>
        </div>
        <div className="categories-grid">
          <Link to="/shop/women" className="category-card category-women">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800" alt="Women" />
            <div className="category-overlay">
              <span>Women</span>
              <ArrowRight size={20} />
            </div>
          </Link>
          <Link to="/shop/men" className="category-card category-men">
            <img src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800" alt="Men" />
            <div className="category-overlay">
              <span>Men</span>
              <ArrowRight size={20} />
            </div>
          </Link>
          <Link to="/shop/all" className="category-card category-accessories">
            <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800" alt="Accessories" />
            <div className="category-overlay">
              <span>Accessories</span>
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container featured-section">
        <div className="section-header">
          <h2>Featured Pieces</h2>
          <Link to="/shop/all" className="section-link">View all <ArrowRight size={14} /></Link>
        </div>
        <div className="products-grid">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="container features-grid">
          <div className="feature-item">
            <Truck size={28} />
            <h4>Free Shipping</h4>
            <p>On orders over $100</p>
          </div>
          <div className="feature-item">
            <RefreshCw size={28} />
            <h4>Easy Returns</h4>
            <p>30-day return policy</p>
          </div>
          <div className="feature-item">
            <ShieldCheck size={28} />
            <h4>Secure Payments</h4>
            <p>Encrypted & safe</p>
          </div>
          <div className="feature-item">
            <Sparkles size={28} />
            <h4>Premium Quality</h4>
            <p>Hand-picked materials</p>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="container featured-section">
        <div className="section-header">
          <h2>New Arrivals</h2>
          <Link to="/shop/all" className="section-link">View all <ArrowRight size={14} /></Link>
        </div>
        <div className="products-grid">
          {newArrivals.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <h2>Join the LUXE community</h2>
            <p>Get 10% off your first order and stay updated on new arrivals</p>
            <form className="newsletter-form" onSubmit={e => { e.preventDefault(); alert('Subscribed! (demo)'); }}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
