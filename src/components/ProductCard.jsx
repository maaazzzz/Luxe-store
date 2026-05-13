import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-card-badges">
          {product.isNew && <span className="badge badge-new">New</span>}
          {product.onSale && <span className="badge badge-sale">Sale</span>}
        </div>
      </Link>

      <button
        className={`product-card-wishlist ${inWishlist ? 'active' : ''}`}
        onClick={() => toggleWishlist(product.id)}
        aria-label="Add to wishlist"
      >
        <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
      </button>

      <div className="product-card-info">
        <p className="product-card-category">{product.category}</p>
        <Link to={`/product/${product.id}`} className="product-card-name">
          {product.name}
        </Link>

        <div className="product-card-rating">
          <Star size={12} fill="#f59e0b" color="#f59e0b" />
          <span>{product.rating}</span>
          <span className="product-card-reviews">({product.reviewCount})</span>
        </div>

        <div className="product-card-price">
          <span className="price-current">${product.price}</span>
          {product.oldPrice && <span className="price-old">${product.oldPrice}</span>}
        </div>
      </div>
    </div>
  );
}
