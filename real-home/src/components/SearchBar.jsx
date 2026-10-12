import { Building2, MapPin, Search, ChevronDown } from 'lucide-react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <form className="search-bar">
      <Field label="Want to" icon={<ChevronDown size={16} color="var(--color-ink-400)" />}>
        <select>
          <option>Buy</option>
          <option>Rent</option>
          <option>Sell</option>
        </select>
      </Field>

      <Field label="Property type" icon={<Building2 size={16} color="var(--color-ink-400)" />}>
        <select>
          <option>Any</option>
          <option>Apartment</option>
          <option>Townhome</option>
          <option>Villa</option>
        </select>
      </Field>

      <Field label="Location" icon={<MapPin size={16} color="var(--color-ink-400)" />}>
        <input type="text" placeholder="Street, City, Zip..." />
      </Field>

      <button type="submit" className="search-submit">
        <Search size={16} />
        Search
      </button>
    </form>
  );
}

function Field({ label, icon, children }) {
  return (
    <div className="search-field">
      <div className="search-field-content">
        <span className="search-field-label">{label}</span>
        {children}
      </div>
      {icon}
    </div>
  );
}
