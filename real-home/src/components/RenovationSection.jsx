import FeatureRow from './FeatureRow';
import './RenovationSection.css';
import house5 from '../assets/house5.webp';
import house4 from '../assets/house4.webp';

const BULLETS = ['Smart Home', 'Beautiful Scene Around', 'Exceptional lifestyle', 'Complete 24/7 Security'];

const COPY =
  "Looking to renovate your home to reflect your style and personality? Look no further than our team of experts who specialize in quality home renovations to transform your space into a dream home you'll love. From design to execution.";

export default function RenovationSection() {
  return (
    <section className="renovation-section">
      <div className="container-page">
        <FeatureRow
          image={house4}
          title="We Specialize In Quality Home Renovations"
          description={COPY}
          bullets={BULLETS}
          imageSide="left"
        />
        <FeatureRow
          image={house5}
          title="We Are Experts In Historic Home Renovations"
          description={COPY}
          bullets={BULLETS}
          imageSide="right"
        />
      </div>
    </section>
  );
}
