import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const introReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

function TechStack({ data }) {
  const [activeCategory, setActiveCategory] = useState(data.categories[0]?.name || '');
  const [isCompactStackNav, setIsCompactStackNav] = useState(false);
  const frameRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    const syncCompactLayout = () => setIsCompactStackNav(mediaQuery.matches);

    syncCompactLayout();
    mediaQuery.addEventListener('change', syncCompactLayout);

    return () => mediaQuery.removeEventListener('change', syncCompactLayout);
  }, []);

  useEffect(() => {
    const updateActiveCategory = () => {
      if (isCompactStackNav) {
        const section = sectionRef.current;
        if (!section || !data.categories.length) return;

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const travel = rect.height - viewportHeight * 0.45;

        if (travel <= 0) {
          setActiveCategory(data.categories[0]?.name || '');
          return;
        }

        const progress = Math.min(Math.max((viewportHeight * 0.2 - rect.top) / travel, 0), 0.999);
        const nextIndex = Math.min(data.categories.length - 1, Math.floor(progress * data.categories.length));
        const nextCategory = data.categories[nextIndex]?.name || data.categories[0]?.name || '';
        setActiveCategory((current) => (current === nextCategory ? current : nextCategory));
        return;
      }

      const cards = Array.from(sectionRef.current?.querySelectorAll('[data-stack-step]') || []);
      if (!cards.length) return;

      const viewportAnchor = isCompactStackNav ? window.innerHeight * 0.48 : window.innerHeight * 0.42;
      let closestCard = cards[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportAnchor);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestCard = card;
        }
      });

      const nextCategory = closestCard.getAttribute('data-stack-step') || '';
      setActiveCategory((current) => (current === nextCategory ? current : nextCategory));
    };

    const onScroll = () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(updateActiveCategory);
    };

    updateActiveCategory();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [data.categories, isCompactStackNav]);

  const currentCategory = useMemo(
    () => data.categories.find((category) => category.name === activeCategory) || data.categories[0],
    [activeCategory, data.categories],
  );

  const scrollToStep = (categoryName) => {
    if (isCompactStackNav && sectionRef.current) {
      const categoryIndex = data.categories.findIndex((category) => category.name === categoryName);
      const viewportHeight = window.innerHeight;
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight;
      const travel = Math.max(sectionHeight - viewportHeight * 0.45, 1);
      const ratio = data.categories.length > 1 ? categoryIndex / (data.categories.length - 1) : 0;
      const targetTop = sectionTop + travel * ratio - viewportHeight * 0.2;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }

    setActiveCategory(categoryName);
  };

  return (
    <section id="stack" ref={sectionRef} className="section-block stack-section">
      <div className="container-shell">
        <motion.div
          className="section-intro stack-section-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.07 }}
          variants={introReveal}
        >
          <span className="ghost-number stack-ghost-number">03</span>
          <div className="section-intro-copy stack-intro-copy">
            <p className="eyebrow-label">Stack</p>
            <h2>{data.heading}</h2>
            <p>{data.subtext}</p>
          </div>
        </motion.div>

        <div className="stack-story">
          {!isCompactStackNav ? (
            <div className="stack-spotlight">
              <div className="stack-spotlight-inner tilt-card">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCategory.name}
                    className="stack-spotlight-content"
                    initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="stack-spotlight-top">
                      <span className="stack-spotlight-kicker">Active Capability</span>
                      <span className="stack-spotlight-count">{currentCategory.tools.length} tools</span>
                    </div>

                    <div className="stack-hero-row">
                      <span className="stack-icon-box stack-icon-box-large">{currentCategory.icon}</span>
                      <div>
                        <h3>{currentCategory.name}</h3>
                      </div>
                    </div>

                    <div className="stack-spotlight-line" />

                    <div className="stack-tool-cloud">
                      {currentCategory.tools.map((toolName, toolIndex) => (
                        <motion.span
                          key={toolName}
                          className="stack-tool-pill"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.24, delay: toolIndex * 0.018, ease: 'easeOut' }}
                        >
                          {toolName}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : null}

          <div className="stack-process-rail" aria-label="Stack categories">
            {data.categories.map((category, index) => {
              const isActive = currentCategory.name === category.name;

              return (
                <div key={category.name} className={`stack-process-step ${isActive ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="stack-process-node interactive"
                    onClick={() => scrollToStep(category.name)}
                    aria-pressed={isActive}
                    aria-label={`${category.name} capability`}
                  >
                    {category.icon}
                  </button>
                  {index < data.categories.length - 1 ? <div className="stack-process-line" /> : null}
                </div>
              );
            })}
          </div>

          <div className="stack-steps">
            {data.categories.map((category, index) => {
              const isActive = currentCategory.name === category.name;

              return (
                <motion.article
                  key={category.name}
                  className={`stack-step-card ${isActive ? 'active' : ''}`}
                  data-stack-step={category.name}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.05, ease: 'easeOut' }}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="stack-step-header">
                    <span className="stack-step-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="stack-step-name">{category.name}</span>
                    <span className="stack-step-badge">{category.tools.length} tools</span>
                  </div>

                  <div className="stack-step-preview">
                    {category.tools.slice(0, 4).map((tool) => (
                      <span key={tool} className="stack-step-preview-pill">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          {isCompactStackNav ? (
            <div className="stack-spotlight stack-spotlight-compact">
              <div className="stack-spotlight-inner tilt-card">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCategory.name}
                    className="stack-spotlight-content"
                    initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="stack-spotlight-top">
                      <span className="stack-spotlight-kicker">Active Capability</span>
                      <span className="stack-spotlight-count">{currentCategory.tools.length} tools</span>
                    </div>

                    <div className="stack-hero-row">
                      <span className="stack-icon-box stack-icon-box-large">{currentCategory.icon}</span>
                      <div>
                        <h3>{currentCategory.name}</h3>
                      </div>
                    </div>

                    <div className="stack-spotlight-line" />

                    <div className="stack-tool-cloud">
                      {currentCategory.tools.map((toolName, toolIndex) => (
                        <motion.span
                          key={toolName}
                          className="stack-tool-pill"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.24, delay: toolIndex * 0.018, ease: 'easeOut' }}
                        >
                          {toolName}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
