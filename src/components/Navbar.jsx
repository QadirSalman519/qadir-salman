import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar({ sections, activeSection, personal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-shell navbar-inner">
        <button type="button" className="logo-block interactive" onClick={() => scrollToSection('home')}>
          <span className="logo-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="logo-text">{personal.shortName}</span>
        </button>

        <nav className="navbar-links" aria-label="Primary navigation">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`nav-link interactive ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="navbar-cta">
          <div className="availability-pill">
            <span className="availability-pulse" aria-hidden="true" />
            <span>{personal.available === 'Yes' ? 'Available' : personal.available}</span>
          </div>
          <button type="button" className="hire-button interactive" onClick={() => scrollToSection('contact')}>
            Hire Me
          </button>
          <button
            type="button"
            className={`menu-toggle interactive ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`mobile-nav-link interactive ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
