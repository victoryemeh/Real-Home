import SearchBar from './SearchBar';
import './Hero.css';
import HeroImg from '../assets/hero-img.avif';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container-page hero-grid">
        <div>
          <h1 className="hero-title">Find a place where you can be yourself.</h1>
          <p className="hero-subtitle">
            If you're looking for a place where you can be yourself, don't give up. Keep
            searching until you find a place that feels like home.
          </p>
        </div>

        <div className="hero-image">
          {/* Swap for your own building photo */}
          <img src={HeroImg} alt="Modern apartment building" />
        </div>
      </div>

      <div className="container-page hero-search-wrap">
        <SearchBar />
      </div>
    </section>
  );
}
