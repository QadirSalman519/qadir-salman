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
            className="about-stage"
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
              </div>

              <aside className="about-side-rail">
                <p className="about-proof-note">{about.quote}</p>

                <div className="about-proof-grid">
                  {about.highlights.map((item) => (
                    <article key={item.label} className="about-highlight-card">
                      <span className="about-highlight-label">{item.label}</span>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>

                <div className="about-stats-grid">
                  {featuredStats.map((item) => (
                    <div key={item.label} className="about-stat-cell">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default About;
