import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, updateQty, removeFromCart, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart-drawer" onClick={e => e.stopPropagation()}>
        <header className="cart-header">
          <h2>Your Cart ({cart.length})</h2>
          <button onClick={onClose} className="cart-close"><X size={22} /></button>
        </header>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={48} />
              <h3>Your cart is empty</h3>
              <p>Add some products to get started</p>
              <Link to="/shop/all" onClick={onClose} className="btn btn-primary">Browse Products</Link>
            </div>
          ) : (
            <ul className="cart-items">
              {cart.map(item => (
                <li key={item.key} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="cart-item-meta">{item.color} · {item.size}</p>
                    <div className="cart-item-bottom">
                      <div className="qty-control">
                        <button onClick={() => updateQty(item.key, -1)}><Minus size={14} /></button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQty(item.key, 1)}><Plus size={14} /></button>
                      </div>
                      <span className="cart-item-price">${item.price * item.qty}</span>
                    </div>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeFromCart(item.key)}>
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <footer className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>
            <p className="cart-note">Shipping & taxes calculated at checkout</p>
            <Link to="/checkout" onClick={onClose} className="btn btn-primary cart-checkout-btn">
              Checkout
            </Link>
          </footer>
        )}
      </aside>
    </div>
  );
}
