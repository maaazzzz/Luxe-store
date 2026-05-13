import { CATEGORIES, PRICE_RANGES } from '../data/products';
import './Filters.css';

export default function Filters({ filters, setFilters, availableSizes, availableColors }) {
  const updateFilter = (key, value) => setFilters({ ...filters, [key]: value });

  const toggleArrayFilter = (key, value) => {
    const current = filters[key];
    const next = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
    setFilters({ ...filters, [key]: next });
  };

  const reset = () => setFilters({ category: 'All', priceRange: null, sizes: [], colors: [] });

  return (
    <aside className="filters">
      <div className="filters-header">
        <h3>Filters</h3>
        <button onClick={reset} className="filters-reset">Reset</button>
      </div>

      <div className="filter-group">
        <h4>Category</h4>
        <div className="filter-options">
          {CATEGORIES.map(cat => (
            <label key={cat} className="filter-radio">
              <input
                type="radio" name="category"
                checked={filters.category === cat}
                onChange={() => updateFilter('category', cat)}
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>Price</h4>
        <div className="filter-options">
          <label className="filter-radio">
            <input
              type="radio" name="price"
              checked={filters.priceRange === null}
              onChange={() => updateFilter('priceRange', null)}
            />
            <span>Any price</span>
          </label>
          {PRICE_RANGES.map((range, i) => (
            <label key={i} className="filter-radio">
              <input
                type="radio" name="price"
                checked={filters.priceRange?.label === range.label}
                onChange={() => updateFilter('priceRange', range)}
              />
              <span>{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>Size</h4>
        <div className="filter-chips">
          {availableSizes.map(size => (
            <button
              key={size}
              className={`filter-chip ${filters.sizes.includes(size) ? 'active' : ''}`}
              onClick={() => toggleArrayFilter('sizes', size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>Color</h4>
        <div className="filter-chips">
          {availableColors.map(color => (
            <button
              key={color}
              className={`filter-chip ${filters.colors.includes(color) ? 'active' : ''}`}
              onClick={() => toggleArrayFilter('colors', color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
