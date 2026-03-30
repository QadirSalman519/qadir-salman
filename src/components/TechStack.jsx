import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

function TechStack({ data }) {
  return (
    <section id="stack" className="section-block">
      <div className="container-shell">
        <motion.div
          className="section-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.07 }}
          variants={item}
        >
          <span className="ghost-number">03</span>
          <div className="section-intro-copy">
            <p className="eyebrow-label">Stack</p>
            <h2>{data.heading}</h2>
            <p>{data.subtext}</p>
          </div>
        </motion.div>

        <motion.div
          className="stack-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.07 }}
          variants={container}
        >
          {data.categories.map((category) => (
            <motion.article key={category.name} className="stack-category" variants={item}>
              <div className="stack-header">
                <div className="stack-title-wrap">
                  <span className="stack-icon-box">{category.icon}</span>
                  <div>
                    <h3>{category.name}</h3>
                    <span>{category.tools.length} tools</span>
                  </div>
                </div>
                <div className="stack-line" />
              </div>

              <div className="tool-grid">
                {category.tools.map((toolName, index) => (
                  <motion.div
                    key={toolName}
                    className="tool-card interactive"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.07 }}
                    transition={{ duration: 0.55, delay: index * 0.05, ease: 'easeOut' }}
                  >
                    <span className="tool-dot" />
                    <span className="tool-emoji">{category.icon}</span>
                    <small>{toolName}</small>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;
