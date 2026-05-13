import { createContext, useContext, useState, useEffect } from 'react';

// Create a Context — this lets ANY component access cart data without prop drilling
const CartContext = createContext();

// Custom hook so other components can do: const { cart, addToCart } = useCart();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  // Load cart from localStorage on first render
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('luxe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('luxe_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, size, color, qty = 1) => {
    const key = `${product.id}-${size}-${color}`;
    setCart(prev => {
      const existing = prev.find(item => item.key === key);
      if (existing) {
        return prev.map(item => item.key === key ? { ...item, qty: item.qty + qty } : item);
      }
      return [...prev, { key, id: product.id, name: product.name, price: product.price, image: product.image, size, color, qty }];
    });
  };

  const updateQty = (key, delta) => {
    setCart(prev => prev
      .map(item => item.key === key ? { ...item, qty: Math.max(0, item.qty + delta) } : item)
      .filter(item => item.qty > 0)
    );
  };

  const removeFromCart = (key) => setCart(prev => prev.filter(item => item.key !== key));
  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}
