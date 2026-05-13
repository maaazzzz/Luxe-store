import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Providers
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Wishlist from './pages/Wishlist';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Navbar onCartOpen={() => setCartOpen(true)} />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop/:gender" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/account" element={<Account />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
          <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}
