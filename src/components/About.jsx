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
  const supportingBio = bioParts[1];
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
            className="about-panel about-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.07 }}
            variants={reveal}
            custom={0.08}
          >
            <div className="about-gridlines" aria-hidden="true" />
            <div className="about-orb" aria-hidden="true" />

            <div className="about-value-shell">
              <span className="about-panel-kicker">Why Clients Keep Reading</span>
              <h3 className="about-selling-headline">Not just another intro block. This is where trust should start.</h3>
              <p className="about-selling-copy">{about.lead}</p>

              <div className="about-proof-grid">
                {about.highlights.map((item) => (
                  <article key={item.label} className="about-highlight-card">
                    <span className="about-highlight-label">{item.label}</span>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
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
            <div className="about-right-top">
              <span className="about-right-kicker">What You Actually Get</span>
              <p className="about-lead">A hands-on engineer who thinks beyond delivery and makes the product feel safer to grow.</p>
            </div>

            <div className="about-copy">
              <p>{primaryBio}</p>
              <p className="about-supporting-copy">{supportingBio}</p>
            </div>

            <blockquote className="quote-card">
              <span className="quote-mark" aria-hidden="true">
                "
              </span>
              <p>{about.quote}</p>
            </blockquote>

            <div className="about-stats-grid">
              {featuredStats.map((item) => (
                <div key={item.label} className="about-stat-cell">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="pill-row">
              {about.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default About;
