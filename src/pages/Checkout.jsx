import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Check, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '', zip: '', country: 'United States',
    shippingMethod: 'standard',
    card: '', expiry: '', cvc: '', cardName: '',
  });
  const [placed, setPlaced] = useState(false);

  if (cart.length === 0 && !placed) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <p style={{ color: 'var(--gray-500)', marginTop: 8 }}>Add some products before checking out</p>
        <Link to="/shop/all" className="btn btn-primary" style={{ marginTop: 24 }}>Continue Shopping</Link>
      </div>
    );
  }

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const shipping = form.shippingMethod === 'overnight' ? 35 : form.shippingMethod === 'express' ? 18 : (cartTotal > 100 ? 0 : 8);
  const tax = Math.round(cartTotal * 0.08 * 100) / 100;
  const total = cartTotal + shipping + tax;

  const placeOrder = () => {
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <div className="container fade-in" style={{ padding: '80px 20px', textAlign: 'center', maxWidth: 600 }}>
        <div className="checkout-success-icon"><Check size={32} /></div>
        <p style={{ color: 'var(--gray-500)', marginBottom: 8 }}>Order #{Math.floor(Math.random() * 90000) + 10000}</p>
        <h1 style={{ marginBottom: 16 }}>Order Confirmed!</h1>
        <p style={{ color: 'var(--gray-700)', marginBottom: 32 }}>
          Thank you for your purchase. We've sent a confirmation email with your order details.
        </p>
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout fade-in">
      <div className="container">
        <h1 className="checkout-title">Checkout</h1>

        {/* Stepper */}
        <div className="checkout-stepper">
          {['Information', 'Shipping', 'Payment'].map((label, i) => (
            <div key={i} className={`checkout-step ${i <= step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
              <div className="checkout-step-circle">{i < step ? <Check size={14} /> : i + 1}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="checkout-layout">
          <div className="checkout-form">
            {step === 0 && (
              <>
                <h3>Contact</h3>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" value={form.email} onChange={e => update('email', e.target.value)} />
                </div>

                <h3 style={{ marginTop: 32 }}>Shipping Address</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input className="form-input" value={form.firstName} onChange={e => update('firstName', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input className="form-input" value={form.lastName} onChange={e => update('lastName', e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input className="form-input" value={form.address} onChange={e => update('address', e.target.value)} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input className="form-input" value={form.city} onChange={e => update('city', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">ZIP Code</label>
                    <input className="form-input" value={form.zip} onChange={e => update('zip', e.target.value)} />
                  </div>
                </div>

                <button className="btn btn-primary checkout-next" onClick={() => setStep(1)}>Continue to Shipping</button>
              </>
            )}

            {step === 1 && (
              <>
                <h3>Shipping Method</h3>
                {[
                  { id: 'standard', name: 'Standard', detail: '5-7 business days', price: cartTotal > 100 ? 0 : 8 },
                  { id: 'express', name: 'Express', detail: '2-3 business days', price: 18 },
                  { id: 'overnight', name: 'Overnight', detail: 'Next business day', price: 35 },
                ].map(opt => (
                  <label key={opt.id} className={`shipping-option ${form.shippingMethod === opt.id ? 'active' : ''}`}>
                    <input type="radio" checked={form.shippingMethod === opt.id} onChange={() => update('shippingMethod', opt.id)} />
                    <div>
                      <strong>{opt.name}</strong>
                      <p>{opt.detail}</p>
                    </div>
                    <span>{opt.price === 0 ? 'Free' : `$${opt.price}`}</span>
                  </label>
                ))}

                <div className="form-actions">
                  <button className="btn btn-ghost" onClick={() => setStep(0)}>Back</button>
                  <button className="btn btn-primary" onClick={() => setStep(2)}>Continue to Payment</button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3><Lock size={16} style={{ verticalAlign: 'middle' }} /> Payment</h3>
                <div className="form-group">
                  <label className="form-label">Card Number</label>
                  <input className="form-input" placeholder="1234 5678 9012 3456" value={form.card} onChange={e => update('card', e.target.value)} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Expiry</label>
                    <input className="form-input" placeholder="MM/YY" value={form.expiry} onChange={e => update('expiry', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">CVC</label>
                    <input className="form-input" placeholder="123" value={form.cvc} onChange={e => update('cvc', e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Name on Card</label>
                  <input className="form-input" value={form.cardName} onChange={e => update('cardName', e.target.value)} />
                </div>

                <p className="checkout-demo-notice">⚠️ Demo only. No real payment will be processed.</p>

                <div className="form-actions">
                  <button className="btn btn-ghost" onClick={() => setStep(1)}>Back</button>
                  <button className="btn btn-primary" onClick={placeOrder}>Place Order — ${total.toFixed(2)}</button>
                </div>
              </>
            )}
          </div>

          <aside className="checkout-summary">
            <h3>Order Summary</h3>
            <div className="checkout-summary-items">
              {cart.map(item => (
                <div key={item.key} className="checkout-summary-item">
                  <div className="checkout-summary-img">
                    <img src={item.image} alt={item.name} />
                    <span className="checkout-summary-qty">{item.qty}</span>
                  </div>
                  <div className="checkout-summary-info">
                    <strong>{item.name}</strong>
                    <p>{item.color} · {item.size}</p>
                  </div>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="checkout-totals">
              <div><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
              <div><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
              <div><span>Tax</span><span>${tax.toFixed(2)}</span></div>
              <div className="checkout-grand-total"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
