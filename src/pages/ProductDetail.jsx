import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Truck, Shield, RotateCcw, ChevronLeft } from 'lucide-react';
import { PRODUCTS, getReviewsForProduct } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('description');

  if (!product) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/shop/all" className="btn btn-primary" style={{ marginTop: 24 }}>Back to shop</Link>
      </div>
    );
  }

  const reviews = getReviewsForProduct(product.id);
  const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!size) return alert('Please select a size');
    if (!color) return alert('Please select a color');
    addToCart(product, size, color, qty);
    alert('Added to cart!');
  };

  return (
    <div className="product-detail fade-in">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-link">
          <ChevronLeft size={16} /> Back
        </button>

        <div className="pd-main">
          {/* Image gallery */}
          <div className="pd-gallery">
            <div className="pd-main-image">
              <img src={product.images[activeImg] || product.image} alt={product.name} />
            </div>
            {product.images.length > 1 && (
              <div className="pd-thumbs">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className={`pd-thumb ${activeImg === i ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="pd-info">
            <p className="pd-category">{product.category}</p>
            <h1 className="pd-title">{product.name}</h1>

            <div className="pd-rating">
              <div className="pd-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14}
                    fill={i < Math.floor(product.rating) ? '#f59e0b' : 'none'}
                    color={i < Math.floor(product.rating) ? '#f59e0b' : '#d1d5db'} />
                ))}
              </div>
              <span>{product.rating} · {product.reviewCount} reviews</span>
            </div>

            <div className="pd-price">
              <span className="pd-price-current">${product.price}</span>
              {product.oldPrice && (
                <>
                  <span className="pd-price-old">${product.oldPrice}</span>
                  <span className="pd-price-save">Save ${product.oldPrice - product.price}</span>
                </>
              )}
            </div>

            <p className="pd-desc">{product.description}</p>

            {/* Color */}
            <div className="pd-option">
              <label>Color: <strong>{color || 'Select a color'}</strong></label>
              <div className="pd-options-grid">
                {product.colors.map(c => (
                  <button
                    key={c}
                    className={`pd-option-btn ${color === c ? 'active' : ''}`}
                    onClick={() => setColor(c)}
                  >{c}</button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="pd-option">
              <label>Size: <strong>{size || 'Select a size'}</strong></label>
              <div className="pd-options-grid pd-options-sizes">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    className={`pd-option-btn ${size === s ? 'active' : ''}`}
                    onClick={() => setSize(s)}
                  >{s}</button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="pd-option">
              <label>Quantity</label>
              <div className="pd-qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="pd-actions">
              <button onClick={handleAddToCart} className="btn btn-primary pd-add-btn">
                <ShoppingBag size={16} /> Add to Cart — ${(product.price * qty).toFixed(2)}
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`pd-wishlist-btn ${inWishlist ? 'active' : ''}`}
              >
                <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Trust */}
            <div className="pd-trust">
              <div><Truck size={16} /> Free shipping over $100</div>
              <div><RotateCcw size={16} /> 30-day returns</div>
              <div><Shield size={16} /> Secure checkout</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="pd-tabs">
          <div className="pd-tab-headers">
            <button className={tab === 'description' ? 'active' : ''} onClick={() => setTab('description')}>Description</button>
            <button className={tab === 'reviews' ? 'active' : ''} onClick={() => setTab('reviews')}>Reviews ({product.reviewCount})</button>
            <button className={tab === 'shipping' ? 'active' : ''} onClick={() => setTab('shipping')}>Shipping</button>
          </div>
          <div className="pd-tab-content">
            {tab === 'description' && (
              <div>
                <p>{product.description}</p>
                <ul>
                  <li>Premium quality materials</li>
                  <li>Designed for everyday wear</li>
                  <li>Care: machine wash cold, lay flat to dry</li>
                  <li>Imported</li>
                </ul>
              </div>
            )}
            {tab === 'reviews' && (
              <div className="pd-reviews">
                {reviews.map(r => (
                  <div key={r.id} className="pd-review">
                    <div className="pd-review-header">
                      <strong>{r.name}</strong>
                      <span className="pd-review-date">{r.date}</span>
                      {r.verified && <span className="pd-review-verified">✓ Verified</span>}
                    </div>
                    <div className="pd-stars" style={{ marginBottom: 8 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12}
                          fill={i < r.rating ? '#f59e0b' : 'none'}
                          color={i < r.rating ? '#f59e0b' : '#d1d5db'} />
                      ))}
                    </div>
                    <p>{r.text}</p>
                  </div>
                ))}
              </div>
            )}
            {tab === 'shipping' && (
              <div>
                <h4>Shipping Information</h4>
                <p>Standard shipping (5-7 business days): Free over $100, otherwise $8</p>
                <p>Express shipping (2-3 business days): $18</p>
                <p>Overnight: $35</p>
                <br />
                <h4>Returns</h4>
                <p>30-day free returns. Items must be unworn and have original tags attached.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="pd-related">
            <h2>You may also like</h2>
            <div className="products-grid">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
