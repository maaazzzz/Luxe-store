import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.success) navigate('/account');
    else setError(result.error);
  };

  return (
    <div className="auth-page fade-in">
      <div className="auth-card">
        <h1>Welcome back</h1>
        <p className="auth-subtitle">Sign in to your LUXE account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email" className="form-input" required
              value={email} onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="password-wrapper">
              <input
                type={showPass ? 'text' : 'password'} className="form-input" required
                value={password} onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <button type="button" className="password-toggle" onClick={() => setShowPass(!showPass)}>
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <Link to="#" className="auth-forgot">Forgot password?</Link>

          <button type="submit" className="btn btn-primary auth-submit">Sign in</button>
        </form>

        <div className="auth-divider"><span>or</span></div>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>

        <p className="auth-demo-notice">
          Demo: use any email + password (4+ chars)
        </p>
      </div>
    </div>
  );
}
