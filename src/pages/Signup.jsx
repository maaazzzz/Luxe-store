import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = signup(name, email, password);
    if (result.success) navigate('/account');
    else setError(result.error);
  };

  return (
    <div className="auth-page fade-in">
      <div className="auth-card">
        <h1>Create account</h1>
        <p className="auth-subtitle">Join LUXE and get 10% off your first order</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" required value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="password-wrapper">
              <input
                type={showPass ? 'text' : 'password'} className="form-input" required minLength={4}
                value={password} onChange={e => setPassword(e.target.value)}
                placeholder="At least 4 characters"
              />
              <button type="button" className="password-toggle" onClick={() => setShowPass(!showPass)}>
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="btn btn-primary auth-submit">Create account</button>
        </form>

        <div className="auth-divider"><span>or</span></div>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
