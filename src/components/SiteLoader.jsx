import { motion } from 'framer-motion';

function SiteLoader() {
  return (
    <motion.div
      className="site-loader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <div className="site-loader-scene" aria-hidden="true">
        <span className="site-loader-glow site-loader-glow-a" />
        <span className="site-loader-glow site-loader-glow-b" />
        <span className="site-loader-grid" />
        <span className="site-loader-vignette" />
      </div>

      <div className="site-loader-core">
        <motion.div
          className="site-loader-mark"
          initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <span className="loader-ring loader-ring-outer" />
          <span className="loader-ring loader-ring-middle" />
          <span className="loader-ring loader-ring-inner" />
          <span className="loader-pulse" />
          <span className="loader-node loader-node-a" />
          <span className="loader-node loader-node-b" />

          <div className="loader-emblem" aria-label="Abstract brand emblem">
            <span className="loader-emblem-beam loader-emblem-beam-a" />
            <span className="loader-emblem-beam loader-emblem-beam-b" />
            <span className="loader-emblem-frame loader-emblem-frame-a" />
            <span className="loader-emblem-frame loader-emblem-frame-b" />
            <span className="loader-emblem-core" />
            <span className="loader-emblem-core-ring" />
            <span className="loader-emblem-trace loader-emblem-trace-a" />
            <span className="loader-emblem-trace loader-emblem-trace-b" />
          </div>
        </motion.div>

        <motion.div
          className="site-loader-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.14, ease: 'easeOut' } }}
        >
          <span className="site-loader-kicker">Initializing Portfolio</span>
          <strong className="site-loader-title">Loading experience</strong>
          <p className="site-loader-subtitle">A focused showcase of systems, products, and production-grade engineering.</p>
          <div className="site-loader-bars" aria-hidden="true">
            <span className="site-loader-bar site-loader-bar-a" />
            <span className="site-loader-bar site-loader-bar-b" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SiteLoader;
