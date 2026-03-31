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
  const avatarInitial = (name) =>
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('');

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
            <div className="testimonials-side-score">
              <strong>{data.summary.score}</strong>
              <span>Client confidence</span>
            </div>

            <div className="testimonials-side-author">
              <span className="testimonial-slide-avatar">
                <span>{avatarInitial(activeItem.name)}</span>
              </span>
              <div>
                <strong>{activeItem.name}</strong>
                <span>
                  {activeItem.role} / {activeItem.company}
                </span>
              </div>
            </div>

            <div className="testimonials-side-controls">
              <div className="testimonials-slider-controls">
                <button type="button" className="testimonials-arrow interactive" onClick={goToPrevious} aria-label="Previous review">
                  <span aria-hidden="true">{'<'}</span>
                </button>
                <button type="button" className="testimonials-arrow interactive" onClick={goToNext} aria-label="Next review">
                  <span aria-hidden="true">{'>'}</span>
                </button>
              </div>

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
          </div>

          <div className="testimonials-slider-main">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.name}
                className="testimonial-slide"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.38, ease: 'easeOut' }}
              >
                <span className="testimonial-quote-icon" aria-hidden="true">
                  <svg viewBox="0 0 64 64">
                    <path fill="currentColor" d="M8 14h22v20c0 11.2-7.4 18-18.2 20v-9.8c5.1-1.3 8.2-4.3 8.8-9.4H8V14Zm26 0h22v20c0 11.2-7.4 18-18.2 20v-9.8c5.1-1.3 8.2-4.3 8.8-9.4H34V14Z" />
                  </svg>
                </span>
                <p className="testimonial-slide-quote">{activeItem.quote}</p>
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
