import { useEffect, useMemo, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolioData';

const sectionIds = ['home', 'about', 'stack', 'work', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

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
      { id: 'contact', label: 'Contact' },
    ],
    [],
  );

  return (
    <>
      {!isTouchDevice && <Cursor />}
      <div className="site-shell">
        <Navbar sections={sections} activeSection={activeSection} personal={portfolioData.personal} />
        <main>
          <Hero data={portfolioData} />
          <Ticker items={portfolioData.ticker} />
          <About data={portfolioData} />
          <TechStack data={portfolioData.techStack} />
          <Projects data={portfolioData.projects} />
          <Experience data={portfolioData.experience} />
          <Contact data={portfolioData} />
        </main>
        <Footer data={portfolioData.footer} />
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
