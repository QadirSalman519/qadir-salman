import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: 'easeOut' },
  }),
};

function About({ data }) {
  const { personal, about } = data;
  const bioParts = personal.bio.split('\n\n');

  return (
    <section id="about" className="section-block">
      <div className="container-shell">
        <motion.div
          className="section-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.07 }}
          variants={reveal}
        >
          <span className="ghost-number">02</span>
          <div className="section-intro-copy">
            <p className="eyebrow-label">About</p>
            <h2>{about.heading}</h2>
            <p>{about.subtext}</p>
          </div>
        </motion.div>

        <div className="about-grid">
          <motion.article
            className="about-panel about-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.07 }}
            variants={reveal}
            custom={0.08}
          >
            <div className="about-gridlines" aria-hidden="true" />
            <div className="about-mono">QS</div>
            <div className="about-left-content">
              <h3>
                Qadir <span className="accent-italic">Salman</span>
              </h3>
              <p className="role-tag">{personal.title}</p>
              <span className="availability-chip">Available for Hire / 2025</span>
            </div>
          </motion.article>

          <motion.article
            className="about-panel about-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.07 }}
            variants={reveal}
            custom={0.16}
          >
            <div className="about-copy">
              {bioParts.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="quote-card">
              <p>{about.quote}</p>
            </blockquote>

            <div className="pill-row">
              {about.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>

            <div className="about-stats-grid">
              {about.stats.map((item) => (
                <div key={item.label} className="about-stat-cell">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default About;
