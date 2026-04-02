import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: 'easeOut' },
  }),
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function About({ data }) {
  const { personal, about } = data;
  const bioParts = personal.bio.split('\n\n');
  const primaryBio = bioParts[0];
  const featuredStats = about.stats.slice(0, 3);

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
            className="about-stage tilt-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.07 }}
            variants={reveal}
            custom={0.1}
          >
            <div className="about-gridlines" aria-hidden="true" />
            <div className="about-orb" aria-hidden="true" />

            <div className="about-stage-layout">
              <div className="about-stage-intro">
                <span className="about-panel-kicker">Why It Matters</span>
                <p className="about-lead">{about.lead}</p>
                <div className="about-copy">
                  <p>{primaryBio}</p>
                </div>
                <p className="about-left-note">{about.quote}</p>
              </div>

              <aside className="about-side-rail">
                <motion.div
                  className="about-proof-grid"
                  variants={staggerGroup}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {about.highlights.map((item) => (
                    <motion.article
                      key={item.label}
                      className="about-highlight-card"
                      variants={cardReveal}
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="about-highlight-label">{item.label}</span>
                      <p>{item.text}</p>
                    </motion.article>
                  ))}
                </motion.div>

                <motion.div
                  className="about-stats-grid"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  {featuredStats.map((item) => (
                    <div key={item.label} className="about-stat-cell">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </motion.div>
              </aside>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default About;
