import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="gradient-text">LUXE</h3>
            <p>Modern fashion for everyone. Crafted with quality and care.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <Link to="/shop/women">Women</Link>
            <Link to="/shop/men">Men</Link>
            <Link to="/shop/all">All Products</Link>
            <Link to="/shop/all">New Arrivals</Link>
          </div>

          <div className="footer-col">
            <h4>Help</h4>
            <Link to="/contact">Contact Us</Link>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
            <a href="#">Size Guide</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Sustainability</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 LUXE. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
