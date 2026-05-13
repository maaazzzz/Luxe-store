import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import { PRODUCTS } from '../data/products';
import './Shop.css';

export default function Shop() {
  const { gender } = useParams(); // 'women', 'men', or 'all'
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: null,
    sizes: [],
    colors: [],
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter & sort logic
  const filtered = useMemo(() => {
    let result = PRODUCTS;

    // Gender
    if (gender && gender !== 'all') result = result.filter(p => p.gender === gender);

    // Category
    if (filters.category !== 'All') result = result.filter(p => p.category === filters.category);

    // Price
    if (filters.priceRange) {
      result = result.filter(p => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max);
    }

    // Sizes
    if (filters.sizes.length > 0) {
      result = result.filter(p => filters.sizes.some(s => p.sizes.includes(s)));
    }

    // Colors
    if (filters.colors.length > 0) {
      result = result.filter(p => filters.colors.some(c => p.colors.includes(c)));
    }

    // Sort
    const sorted = [...result];
    if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') sorted.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'newest') sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

    return sorted;
  }, [gender, filters, sortBy]);

  // Available sizes/colors from current set (smarter filtering)
  const availableSizes = useMemo(() => {
    const set = new Set();
    PRODUCTS.filter(p => !gender || gender === 'all' || p.gender === gender).forEach(p => p.sizes.forEach(s => set.add(s)));
    return Array.from(set);
  }, [gender]);

  const availableColors = useMemo(() => {
    const set = new Set();
    PRODUCTS.filter(p => !gender || gender === 'all' || p.gender === gender).forEach(p => p.colors.forEach(c => set.add(c)));
    return Array.from(set);
  }, [gender]);

  const pageTitle = gender === 'women' ? "Women's Collection" : gender === 'men' ? "Men's Collection" : 'All Products';

  return (
    <div className="shop fade-in">
      <div className="container">
        <header className="shop-header">
          <h1>{pageTitle}</h1>
          <p>{filtered.length} {filtered.length === 1 ? 'product' : 'products'}</p>
        </header>

        <div className="shop-toolbar">
          <button className="mobile-filters-btn" onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}>
            <SlidersHorizontal size={16} /> Filters
          </button>
          <select className="sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Best Rated</option>
          </select>
        </div>

        <div className="shop-layout">
          <div className={`shop-filters ${mobileFiltersOpen ? 'shop-filters-open' : ''}`}>
            <Filters
              filters={filters}
              setFilters={setFilters}
              availableSizes={availableSizes}
              availableColors={availableColors}
            />
          </div>

          <div className="shop-products">
            {filtered.length === 0 ? (
              <div className="shop-empty">
                <h3>No products match your filters</h3>
                <p>Try adjusting your selection</p>
              </div>
            ) : (
              <div className="products-grid">
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
