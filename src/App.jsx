import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Cursor from './components/Cursor';
import BackToTop from './components/BackToTop';
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

  useEffect(() => {
    if (isTouchDevice || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const interactiveElements = Array.from(document.querySelectorAll('.magnetic, .tilt-card'));
    const cleanups = interactiveElements.map((element) => {
      const onMove = (event) => {
        const rect = element.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const normalizedX = (offsetX / rect.width - 0.5) * 2;
        const normalizedY = (offsetY / rect.height - 0.5) * 2;

        element.style.setProperty('--pointer-x', `${offsetX}px`);
        element.style.setProperty('--pointer-y', `${offsetY}px`);
        element.style.setProperty('--pointer-xp', `${(offsetX / rect.width) * 100}%`);
        element.style.setProperty('--pointer-yp', `${(offsetY / rect.height) * 100}%`);

        if (element.classList.contains('magnetic')) {
          element.style.setProperty('--magnetic-x', `${normalizedX * 8}px`);
          element.style.setProperty('--magnetic-y', `${normalizedY * 8}px`);
        }

        if (element.classList.contains('tilt-card')) {
          element.style.setProperty('--tilt-rotate-x', `${normalizedY * -5}deg`);
          element.style.setProperty('--tilt-rotate-y', `${normalizedX * 7}deg`);
          element.style.setProperty('--tilt-shift-x', `${normalizedX * 10}px`);
          element.style.setProperty('--tilt-shift-y', `${normalizedY * 10}px`);
        }
      };

      const onLeave = () => {
        element.style.removeProperty('--pointer-x');
        element.style.removeProperty('--pointer-y');
        element.style.removeProperty('--pointer-xp');
        element.style.removeProperty('--pointer-yp');
        element.style.removeProperty('--magnetic-x');
        element.style.removeProperty('--magnetic-y');
        element.style.removeProperty('--tilt-rotate-x');
        element.style.removeProperty('--tilt-rotate-y');
        element.style.removeProperty('--tilt-shift-x');
        element.style.removeProperty('--tilt-shift-y');
      };

      element.addEventListener('mousemove', onMove);
      element.addEventListener('mouseleave', onLeave);

      return () => {
        element.removeEventListener('mousemove', onMove);
        element.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [isTouchDevice]);

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
      <BackToTop />
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
