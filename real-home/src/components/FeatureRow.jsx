import { CheckCircle2 } from 'lucide-react';
import './FeatureRow.css';

export default function FeatureRow({ image, title, description, bullets, imageSide = 'left' }) {
  return (
    <div className={`feature-row image-${imageSide}`}>
      <div className="feature-row-image">
        <img src={image} alt={title} />
      </div>

      <div className="feature-row-content">
        <h2 className="feature-row-title">{title}</h2>
        <p className="feature-row-description">{description}</p>

        <ul className="feature-row-bullets">
          {bullets.map((bullet) => (
            <li key={bullet} className="feature-row-bullet">
              <CheckCircle2 size={16} />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
