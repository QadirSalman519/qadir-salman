import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolioData';

const sectionIds = ['home', 'about', 'stack', 'work', 'experience', 'testimonials', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.22,
  });

  useEffect(() => {
    const touchCapable =
      window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCapable);
    document.body.classList.toggle('custom-cursor-enabled', !touchCapable);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const navbarOffset = 140;
      const scrollAnchor = window.scrollY + navbarOffset;
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      let nextActive = sectionIds[0];

      sections.forEach((section) => {
        if (section.offsetTop <= scrollAnchor) {
          nextActive = section.id;
        }
      });

      const pageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 8;
      if (pageBottom) {
        nextActive = sectionIds[sectionIds.length - 1];
      }

      setActiveSection((current) => (current === nextActive ? current : nextActive));
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const sections = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'stack', label: 'Stack' },
      { id: 'work', label: 'Work' },
      { id: 'experience', label: 'Experience' },
      { id: 'testimonials', label: 'Voices' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  );

  return (
    <>
      {!isTouchDevice && <Cursor />}
      <motion.div className="site-progress" style={{ scaleX: progressScale }} />
      <div className="site-shell">
        <div className="site-ambient" aria-hidden="true">
          <span className="site-ambient-orb site-ambient-orb-a" />
          <span className="site-ambient-orb site-ambient-orb-b" />
          <span className="site-ambient-grid" />
          <span className="site-ambient-noise" />
        </div>
        <Navbar sections={sections} activeSection={activeSection} personal={portfolioData.personal} />
        <main>
          <Hero data={portfolioData} />
          <Ticker items={portfolioData.ticker} />
          <About data={portfolioData} />
          <TechStack data={portfolioData.techStack} />
          <Projects data={portfolioData.projects} />
          <Experience data={portfolioData.experience} />
          <Testimonials data={portfolioData.testimonials} />
          <Contact data={portfolioData} />
        </main>
        <Footer personal={portfolioData.personal} />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#111c16',
            color: '#e2efe8',
            border: '1px solid rgba(0,229,160,0.22)',
            borderRadius: '12px',
            fontSize: '12px',
          },
        }}
      />
    </>
  );
}

export default App;
