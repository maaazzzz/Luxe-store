import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

export default function Navbar({ onCartOpen }) {
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <button className="navbar-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="navbar-logo">
          <span className="gradient-text">LUXE</span>
        </Link>

        <nav className={`navbar-nav ${mobileOpen ? 'navbar-nav-open' : ''}`}>
          <NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
          <NavLink to="/shop/women" onClick={() => setMobileOpen(false)}>Women</NavLink>
          <NavLink to="/shop/men" onClick={() => setMobileOpen(false)}>Men</NavLink>
          <NavLink to="/shop/all" onClick={() => setMobileOpen(false)}>All</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>
        </nav>

        <div className="navbar-icons">
          <button className="icon-btn" onClick={() => navigate('/shop/all')}>
            <Search size={20} />
          </button>

          <Link to="/wishlist" className="icon-btn icon-btn-badge">
            <Heart size={20} />
            {wishlist.length > 0 && <span className="badge-count">{wishlist.length}</span>}
          </Link>

          <div className="user-menu-wrapper">
            <button className="icon-btn" onClick={() => setUserMenuOpen(!userMenuOpen)}>
              <User size={20} />
            </button>
            {userMenuOpen && (
              <div className="user-menu" onMouseLeave={() => setUserMenuOpen(false)}>
                {isAuthenticated ? (
                  <>
                    <div className="user-menu-header">
                      <strong>Hi, {user.name}</strong>
                      <span>{user.email}</span>
                    </div>
                    <Link to="/account" onClick={() => setUserMenuOpen(false)}>My Account</Link>
                    <Link to="/wishlist" onClick={() => setUserMenuOpen(false)}>My Wishlist</Link>
                    <button onClick={() => { logout(); setUserMenuOpen(false); }}>
                      <LogOut size={14} /> Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setUserMenuOpen(false)}>Sign in</Link>
                    <Link to="/signup" onClick={() => setUserMenuOpen(false)}>Create account</Link>
                  </>
                )}
              </div>
            )}
          </div>

          <button className="icon-btn icon-btn-badge" onClick={onCartOpen}>
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
