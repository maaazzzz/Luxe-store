import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_user');
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });

  useEffect(() => {
    if (user) localStorage.setItem('luxe_user', JSON.stringify(user));
    else localStorage.removeItem('luxe_user');
  }, [user]);

  // FAKE login — in a real app, this would call your backend API
  const login = (email, password) => {
    // Pretend we validated credentials
    if (email && password.length >= 4) {
      const userData = {
        email,
        name: email.split('@')[0],
        joinedAt: new Date().toISOString(),
      };
      setUser(userData);
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const signup = (name, email, password) => {
    if (name && email && password.length >= 4) {
      const userData = { email, name, joinedAt: new Date().toISOString() };
      setUser(userData);
      return { success: true };
    }
    return { success: false, error: 'All fields required, password 4+ chars' };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}
