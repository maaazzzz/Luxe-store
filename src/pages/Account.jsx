import { Link, Navigate } from 'react-router-dom';
import { User, Package, Heart, MapPin, CreditCard, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import './Account.css';

export default function Account() {
  const { user, logout, isAuthenticated } = useAuth();
  const { wishlist } = useWishlist();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const stats = [
    { icon: Package, label: 'Orders', value: 0 },
    { icon: Heart, label: 'Wishlist', value: wishlist.length, link: '/wishlist' },
    { icon: MapPin, label: 'Addresses', value: 1 },
    { icon: CreditCard, label: 'Saved Cards', value: 0 },
  ];

  return (
    <div className="account-page fade-in">
      <div className="container">
        <div className="account-header">
          <div className="account-avatar">
            <User size={36} />
          </div>
          <div>
            <h1>Hi, {user.name}!</h1>
            <p>{user.email}</p>
          </div>
          <button onClick={logout} className="btn btn-ghost account-logout">
            <LogOut size={16} /> Sign out
          </button>
        </div>

        <div className="account-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const content = (
              <>
                <Icon size={24} />
                <div className="account-stat-info">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </>
            );
            return stat.link
              ? <Link key={i} to={stat.link} className="account-stat-card">{content}</Link>
              : <div key={i} className="account-stat-card">{content}</div>;
          })}
        </div>

        <div className="account-sections">
          <section className="account-section">
            <h2>Recent Orders</h2>
            <div className="account-empty">
              <Package size={48} />
              <p>No orders yet</p>
              <Link to="/shop/all" className="btn btn-primary">Start shopping</Link>
            </div>
          </section>

          <section className="account-section">
            <h2>Account Settings</h2>
            <div className="account-info">
              <div className="account-info-row">
                <span>Name</span>
                <strong>{user.name}</strong>
              </div>
              <div className="account-info-row">
                <span>Email</span>
                <strong>{user.email}</strong>
              </div>
              <div className="account-info-row">
                <span>Member since</span>
                <strong>{new Date(user.joinedAt).toLocaleDateString()}</strong>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
