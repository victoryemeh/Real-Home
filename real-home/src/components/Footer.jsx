import { Home, Facebook, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const QUICK_LINKS = ['Home', 'Buy', 'Sell', 'Rent'];
const SUPPORT_LINKS = ['About us', 'Contact us', 'Privacy Policy', 'Terms & Conditions'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-page footer-grid">
        <div>
          <a href="/" className="footer-logo">
            <Home size={20} strokeWidth={2.5} />
            RealHome
          </a>
          <p className="footer-blurb">
            Lorem ipsum dolor sit amet consectetur. Non bibendum sit non congue pharetra pulvinar
            leo. Sed ut amet ipsum.
          </p>
        </div>

        <FooterColumn title="Quick link" links={QUICK_LINKS} />
        <FooterColumn title="Support" links={SUPPORT_LINKS} />

        <div>
          <h3 className="footer-heading">Get in touch</h3>
          <p className="footer-contact-line">hello@realhome.com</p>
          <p className="footer-contact-line">4140 Parker Rd. Allentown, New Mexico 31134</p>
          <div className="footer-social">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">Copyright {new Date().getFullYear()} RealHome. Website by Veecodes.</div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="footer-heading">{title}</h3>
      <ul className="footer-links">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
