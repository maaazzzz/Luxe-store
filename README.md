# LUXE — Modern Fashion E-Commerce

A complete fashion e-commerce frontend built with React, Vite, and React Router.

🔗 **Live demo:** [https://luxe-store-maaz.netlify.app/product/1](https://luxe-store-maaz.netlify.app/product/1)

## Features

- 🛍️ Browse products by gender (Women, Men, All)
- 🔍 Filter by category, price, size, color, and sort by various criteria
- 👜 Add to cart with size/color variants, persistent across sessions
- 💖 Wishlist with one-click add/remove
- 🔐 Sign up / Login (demo authentication)
- 👤 User account page with order stats
- 💳 3-step checkout flow (info → shipping → payment)
- ⭐ Product reviews and ratings
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Modern, vibrant design with gradients

## Tech Stack

- **React 18** — UI library
- **Vite** — Build tool & dev server
- **React Router** — Client-side routing
- **Context API** — State management for cart, auth, wishlist
- **localStorage** — Data persistence
- **Lucide React** — Icons
- **Plain CSS** — Custom styling with CSS variables

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/luxe-store.git
cd luxe-store

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Project Structure

```
src/
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
├── index.css            # Global styles & design tokens
├── data/
│   └── products.js      # Product database & helpers
├── context/             # State management
│   ├── CartContext.jsx
│   ├── AuthContext.jsx
│   └── WishlistContext.jsx
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── CartDrawer.jsx
│   └── Filters.jsx
└── pages/               # Route pages
    ├── Home.jsx
    ├── Shop.jsx
    ├── ProductDetail.jsx
    ├── Cart.jsx
    ├── Checkout.jsx
    ├── Login.jsx
    ├── Signup.jsx
    ├── Account.jsx
    ├── Wishlist.jsx
    ├── About.jsx
    └── Contact.jsx
```

## Demo Credentials

The auth is mocked for demo purposes:
- **Email:** any valid email
- **Password:** any 4+ characters

## License

MIT
