import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyGrid from './components/PropertyGrid';
import RenovationSection from './components/RenovationSection';
import VideoBanner from './components/VideoBanner';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PropertyGrid />
      <RenovationSection />
      <VideoBanner onPlay={() => console.log('play video')} />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
