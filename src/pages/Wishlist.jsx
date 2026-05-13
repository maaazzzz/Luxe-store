import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const { wishlist } = useWishlist();
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="container fade-in" style={{ padding: '40px 20px 60px' }}>
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>My Wishlist</h1>
        <p style={{ color: 'var(--gray-500)', marginTop: 4 }}>{items.length} {items.length === 1 ? 'item' : 'items'}</p>
      </header>

      {items.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <Heart size={64} style={{ color: 'var(--gray-300)', margin: '0 auto 16px' }} />
          <h3 style={{ marginBottom: 8, fontSize: 22 }}>Your wishlist is empty</h3>
          <p style={{ color: 'var(--gray-500)', marginBottom: 24 }}>Save your favorite items here</p>
          <Link to="/shop/all" className="btn btn-primary">Discover products</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
          {items.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
