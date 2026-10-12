import { Home } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = ['Home', 'Rent', 'Sell', 'Buy', 'About'];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container-page navbar-inner">
        <a href="/" className="navbar-logo">
          <Home size={20} strokeWidth={2.5} />
          RealHome
        </a>

        <nav className="navbar-links">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className={`navbar-link${i === 0 ? ' is-active' : ''}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href="/login" className="navbar-login">
            Login
          </a>
          <a href="/get-started" className="navbar-cta">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
