import { useState } from 'react';
import { BedDouble, Bath, Ruler, Heart } from 'lucide-react';
import './PropertyCard.css';

export default function PropertyCard({ property }) {
  const [saved, setSaved] = useState(false);
  const { image, isNew, price, agency, address, beds, baths, sqft } = property;

  return (
    <article className="property-card">
      <div className="property-card-media">
        <img src={image} alt={address} />

        {isNew && <span className="property-card-badge">New</span>}

        <button
          type="button"
          onClick={() => setSaved((s) => !s)}
          aria-pressed={saved}
          aria-label="Save property"
          className={`property-card-favorite${saved ? ' is-saved' : ''}`}
        >
          <Heart size={16} />
        </button>
      </div>

      <div className="property-card-body">
        <p className="property-card-price">{price}</p>
        <a href="#" className="property-card-agency">
          {agency}
        </a>
        <p className="property-card-address">{address}</p>

        <div className="property-card-meta">
          <span className="property-card-meta-item">
            <BedDouble size={16} /> {beds} Bed
          </span>
          <span className="property-card-meta-item">
            <Bath size={16} /> {baths} Bath
          </span>
          <span className="property-card-meta-item">
            <Ruler size={16} /> {sqft} sqft
          </span>
        </div>
      </div>
    </article>
  );
}
