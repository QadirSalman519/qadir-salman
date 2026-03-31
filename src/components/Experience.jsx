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
            <p className="eyebrow-label">Career Path</p>
            <h2>{data.heading}</h2>
            <p>{data.subtext}</p>
          </div>
        </motion.div>

        <div className="experience-list">
          {data.items.map((item, index) => (
            <motion.article
              key={item.company}
              className={`experience-card interactive ${item.badge.toLowerCase().includes('current') ? 'experience-card-current' : ''}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.07 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: 'easeOut' }}
            >
              <div className="experience-card-side">
                <span className="experience-card-label">
                  {item.badge.toLowerCase().includes('current') ? 'Current Chapter' : 'Previous Chapter'}
                </span>
                <span className="experience-card-period">{item.period}</span>
                <span className="experience-card-company">{item.company}</span>
                <span className="experience-card-focus">{item.focus}</span>
              </div>

              <div className="experience-card-main">
                <div className="experience-card-head">
                  <h3>{item.title}</h3>
                  <span className="timeline-badge">{item.badge}</span>
                </div>
                <p>{item.description}</p>
                <div className="timeline-highlights" aria-label={`${item.company} highlights`}>
                  {item.highlights.map((highlight) => (
                    <span key={highlight} className="timeline-highlight-chip">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
