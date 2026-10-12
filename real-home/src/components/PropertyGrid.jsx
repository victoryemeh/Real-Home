import SectionHeading from './SectionHeading';
import PropertyCard from './PropertyCard';
import './PropertyGrid.css';
import House1 from '../assets/house1.avif';
import House2 from '../assets/house2.avif';
import House3 from '../assets/house3.webp';
import House4 from '../assets/house4.webp';

const SAMPLE_PROPERTIES = [
  {
    image: House1,
    isNew: true,
    price: '$710.68',
    agency: 'COVA Home Realty',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    beds: 3,
    baths: 2,
    sqft: 1430,
  },
  {
    image: House2,
    price: '$630.44',
    agency: 'Exit Realty',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    beds: 5,
    baths: 4,
    sqft: 1630,
  },
  {
    image: House3,
    price: '$475.22',
    agency: 'The Real Estate Group',
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    beds: 8,
    baths: 5,
    sqft: 1240,
  },
  {
    image: House4,
    price: '$576.28',
    agency: '757 Realty',
    address: '4140 Parker Rd. Allentown, New Mexico 31134',
    beds: 6,
    baths: 6,
    sqft: 1260,
  },
];

export default function PropertyGrid() {
  return (
    <section className="property-grid-section">
      <div className="container-page">
        <SectionHeading
          title="Best home in your city"
          description="Lorem ipsum dolor sit amet consectetur. In quisque scelerisque eget id facilis. Aliquam in libero egestas at."
          actionLabel="Explore more"
        />

        <div className="property-grid">
          {SAMPLE_PROPERTIES.map((property) => (
            <PropertyCard key={property.address} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
