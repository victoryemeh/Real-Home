import { ArrowUpRight } from 'lucide-react';
import './SectionHeading.css';

export default function SectionHeading({ eyebrow, title, description, actionLabel, actionHref = '#' }) {
  return (
    <div className="section-heading">
      <div className="section-heading-text">
        {eyebrow && <span className="section-heading-eyebrow">{eyebrow}</span>}
        <h2 className="section-heading-title">{title}</h2>
        {description && <p className="section-heading-description">{description}</p>}
      </div>

      {actionLabel && (
        <a href={actionHref} className="section-heading-action">
          {actionLabel}
          <ArrowUpRight size={16} />
        </a>
      )}
    </div>
  );
}
