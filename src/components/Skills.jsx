import { motion } from 'framer-motion';

function SkillColumn({ title, items }) {
  return (
    <div className="skills-column">
      <h3>{title}</h3>
      <div className="skills-list">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            className="skill-row"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.07 }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: 'easeOut' }}
          >
            <div className="skill-meta">
              <span>{item.label}</span>
              <strong>{item.value}%</strong>
            </div>
            <div className="skill-track">
              <motion.div
                className="skill-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true, amount: 0.07 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Skills({ data }) {
  return (
    <section className="section-block">
      <div className="container-shell skills-shell">
        <SkillColumn title={data.leftTitle} items={data.left} />
        <SkillColumn title={data.rightTitle} items={data.right} />
      </div>
    </section>
  );
}

export default Skills;
