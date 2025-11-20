import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Design from './components/Design';
import Technology from './components/Technology';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Marquee from './components/Marquee';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Technology />
      <Gallery />
      <Design />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
