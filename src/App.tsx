import './App.css';
import Topbar from './sections/Topbar';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Programs from './sections/Programs';
import Features from './sections/Features';
import LiveClasses from './sections/LiveClasses';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Features />
        <LiveClasses />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
