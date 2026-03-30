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
  const frameRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const updateActiveCategory = () => {
      const cards = Array.from(stepsRef.current?.querySelectorAll('[data-stack-step]') || []);
      if (!cards.length) return;

      const viewportAnchor = window.innerHeight * 0.42;
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
  }, []);

  const currentCategory = useMemo(
    () => data.categories.find((category) => category.name === activeCategory) || data.categories[0],
    [activeCategory, data.categories],
  );

  return (
    <section id="stack" className="section-block stack-section">
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
          <div className="stack-spotlight">
            <div className="stack-spotlight-inner">
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
                      <p>{data.subtext}</p>
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

          <div ref={stepsRef} className="stack-steps">
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
        </div>
      </div>
    </section>
  );
}

export default TechStack;
