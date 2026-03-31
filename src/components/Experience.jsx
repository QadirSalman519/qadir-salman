import { motion } from 'framer-motion';

function Experience({ data }) {
  return (
    <section id="experience" className="section-block experience-section">
      <div className="container-shell">
        <motion.div
          className="section-intro"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.07 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className="ghost-number">05</span>
          <div className="section-intro-copy">
            <p className="eyebrow-label">Experience</p>
            <h2>{data.heading}</h2>
            <p>{data.subtext}</p>
          </div>
        </motion.div>

        <div className="timeline">
          {data.items.map((item, index) => (
            <motion.article
              key={item.company}
              className={`timeline-entry interactive ${item.badge.toLowerCase().includes('current') ? 'timeline-entry-current' : ''}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.07 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: 'easeOut' }}
            >
              <div className="timeline-bullet" aria-hidden="true" />
              <div className="timeline-period-wrap">
                <span className="timeline-period">{item.period}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header-row">
                  <span className="timeline-company">{item.company}</span>
                  <span className="timeline-badge">{item.badge}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
