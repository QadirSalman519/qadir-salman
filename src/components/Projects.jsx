import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const listReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const rowReveal = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function Projects({ data }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0, renderLeft: false });
  const currentRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0, renderLeft: false });

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return data.items;
    return data.items.filter((project) => (project.filterGroup || project.category) === activeFilter);
  }, [activeFilter, data.items]);

  useEffect(() => {
    let frameId;

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.1;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.1;
      setPreviewPosition({
        x: currentRef.current.x,
        y: currentRef.current.y,
        renderLeft: targetRef.current.renderLeft,
      });
      frameId = window.requestAnimationFrame(animate);
    };

    animate();
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleMouseMove = (event) => {
    const renderLeft = event.clientX > window.innerWidth - 360;
    targetRef.current = {
      x: event.clientX + (renderLeft ? -320 : 26),
      y: event.clientY - 36,
      renderLeft,
    };
  };

  return (
    <section id="work" className="section-block projects-section">
      <div className="container-shell projects-shell">
        <motion.div
          className="section-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.07 }}
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
          }}
        >
          <span className="ghost-number">04</span>
          <div className="section-intro-copy">
            <p className="eyebrow-label">Selected Work</p>
            <h2>{data.heading}</h2>
            <p>{data.subtext}</p>
          </div>
        </motion.div>

        <div className="filter-tabs">
          {data.filters.map((filterName) => (
            <button
              key={filterName}
              type="button"
              className={`filter-tab interactive ${activeFilter === filterName ? 'active' : ''}`}
              onClick={() => setActiveFilter(filterName)}
            >
              {filterName}
            </button>
          ))}
        </div>

        <motion.div
          className="projects-list"
          variants={listReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              className="project-row interactive tilt-card"
              variants={rowReveal}
              whileHover={{ y: -4 }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={handleMouseMove}
            >
              <span className="project-bar" aria-hidden="true" />
              <div className="project-main">
                <div className="project-title-block">
                  <span className="project-category">
                    {project.category} / {project.type}
                  </span>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-pills">
                  {project.stack.map((tag) => (
                    <span key={tag} className="project-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <span className="project-link-arrow" aria-hidden="true">
                ↗
              </span>
            </motion.article>
          ))}
        </motion.div>

      </div>

      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            className={`project-preview ${previewPosition.renderLeft ? 'left' : ''}`}
            initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              x: previewPosition.x,
              y: previewPosition.y,
            }}
            exit={{ opacity: 0, scale: 0.92, rotate: -1 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="preview-visual">
              <span className="preview-accent-tag">{hoveredProject.accent || hoveredProject.category}</span>
              <img className="preview-image" src={hoveredProject.previewImage} alt={`${hoveredProject.title} preview`} />
            </div>
            <div className="preview-meta">
              <strong>{hoveredProject.title}</strong>
              <span>{hoveredProject.category}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
