import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Testimonials({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data.items[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % data.items.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [data.items.length]);

  const goToSlide = (index) => setActiveIndex(index);
  const goToPrevious = () => setActiveIndex((current) => (current - 1 + data.items.length) % data.items.length);
  const goToNext = () => setActiveIndex((current) => (current + 1) % data.items.length);

  return (
    <section id="testimonials" className="section-block testimonials-section">
      <div className="container-shell">
        <motion.div
          className="section-intro"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.07 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className="ghost-number">06</span>
          <div className="section-intro-copy">
            <p className="eyebrow-label">Testimonials</p>
            <h2>{data.heading}</h2>
            <p>{data.subtext}</p>
          </div>
        </motion.div>

        <motion.div
          className="testimonials-slider"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.07 }}
          transition={{ duration: 0.65, delay: 0.04, ease: 'easeOut' }}
        >
          <div className="testimonials-slider-pattern" aria-hidden="true" />

          <div className="testimonials-slider-side">
            <p className="testimonials-side-kicker">
              <span className="testimonials-side-dot" aria-hidden="true" />
              Client Feedback Highlights
            </p>
            <div className="testimonials-side-score">
              <strong>{data.summary.score}</strong>
              <span>Client confidence</span>
            </div>
            <p className="testimonials-side-copy">{data.summary.note}</p>

            <div className="testimonials-trust-row">
              <div className="testimonials-avatar-stack">
                {data.items.slice(0, 3).map((item) => (
                  <span key={item.name} className="testimonial-avatar-chip" aria-hidden="true">
                    {item.name.charAt(0)}
                  </span>
                ))}
                <span className="testimonial-avatar-chip testimonial-avatar-chip-accent" aria-hidden="true">
                  +
                </span>
              </div>
              <div className="testimonials-trust-copy">
                <strong>{data.summary.trustLine}</strong>
                <span>{data.summary.note}</span>
              </div>
            </div>

            <div className="testimonials-signal-row">
              {data.signals.map((signal) => (
                <span key={signal} className="testimonials-signal-pill">
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="testimonials-slider-main">
            <div className="testimonials-slider-controls">
              <button type="button" className="testimonials-arrow interactive" onClick={goToPrevious} aria-label="Previous review">
                <span aria-hidden="true">←</span>
              </button>
              <button type="button" className="testimonials-arrow interactive" onClick={goToNext} aria-label="Next review">
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.name}
                className="testimonial-slide"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.38, ease: 'easeOut' }}
              >
                <div className="testimonial-slide-top">
                  <div className="testimonial-card-labels">
                    <span className="testimonial-chip">{activeItem.project}</span>
                    <small>{activeItem.emphasis}</small>
                  </div>
                  <span className="testimonial-stars">{activeItem.rating}</span>
                </div>

                <p className="testimonial-slide-quote">{activeItem.quote}</p>

                <div className="testimonial-slide-footer">
                  <div className="testimonial-slide-author">
                    <span className="testimonial-slide-avatar">{activeItem.name.charAt(0)}</span>
                    <div>
                      <strong>{activeItem.name}</strong>
                      <span>
                        {activeItem.role} / {activeItem.company}
                      </span>
                    </div>
                  </div>
                  <small>{activeItem.outcome}</small>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="testimonials-dots" role="tablist" aria-label="Testimonial slides">
              {data.items.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={`testimonials-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Show review ${index + 1}`}
                  aria-selected={index === activeIndex}
                  role="tab"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
