import './styles/globals.css';
import useCursor from './components/useCursor';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Services   from './components/Services';
import WhyUs      from './components/WhyUs';
import Industries from './components/Industries';
import Vision     from './components/Vision';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  const { cursorRef, ringRef } = useCursor();

  return (
    <>
      {/* Custom cursor elements */}
      <div className="cursor"      ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef}   />

      {/* Page sections */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Industries />
      <Vision />
      <Contact />
      <Footer />
    </>
  );
}
