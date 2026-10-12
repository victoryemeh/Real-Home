import { Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import './TestimonialsSection.css';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';
import person5 from '../assets/person5.jpg';
import person6 from '../assets/person6.jpg';
import person7 from '../assets/person7.jpg';
import person8 from "../assets/person8.jpg";
import avatar1 from '../assets/avatar5.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar4 from '../assets/avatar4.jpg';
import avatar5 from '../assets/avatar1.jpg';
import avatar6 from '../assets/avatar6.jpg';



const TESTIMONIALS = [
  { name: 'Chris Traeger', image: person7, avatar: avatar1, rating: 5.0 },
  { name: 'Duke Silver', image: person8, avatar: avatar2, rating: 5.0 },
  { name: 'Tsukasa Aoi', image: person3, avatar: avatar3, rating: 5.0 },
  { name: 'Freida Varnes', image: person1, avatar: avatar4, rating: 5.0 },
  { name: 'Carl Lorthner', image: person5, avatar: avatar5, rating: 5.0 },
  { name: 'Marci Senter', image: person6, avatar: avatar6, rating: 5.0 },
];

const AVATAR_STACK = [avatar1, avatar2, avatar3];

function TestimonialCard({ name, image, avatar, rating }) {
  return (
    <div className="testimonial-card">
      <img className="testimonial-photo" src={image} alt={name} />
      <div className="testimonial-card-scrim">
        <div className="testimonial-card-rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} color="var(--color-star)" fill="var(--color-star)" />
          ))}
          <span className="testimonial-card-rating-value">{rating.toFixed(1)}</span>
        </div>
        <p className="testimonial-card-name">{name}</p>
      </div>
      <img className="testimonial-card-avatar" src={avatar} alt="" />
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container-page">
        <div className="testimonials-header">
          <SectionHeading
            eyebrow="Our Customers"
            title="We Help 1000+ Family Find Their True Home"
            actionLabel="View All Stories"
          />
        </div>

        <div className="testimonials-avatars">
          {AVATAR_STACK.map((src) => (
            <img key={src} src={src} alt="" className="testimonials-avatar" />
          ))}
          <span className="testimonials-avatar-count">99+</span>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
