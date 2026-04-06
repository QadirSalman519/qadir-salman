import { motion } from 'framer-motion';

function SiteLoader({ progress = 1 }) {
  const displayProgress = Math.max(1, Math.min(100, Math.round(progress)));

  return (
    <motion.div
      className="site-loader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <div className="site-loader-scene" aria-hidden="true">
        <span className="site-loader-glow site-loader-glow-a" />
        <span className="site-loader-glow site-loader-glow-b" />
        <span className="site-loader-grid" />
        <span className="site-loader-vignette" />
      </div>

      <motion.div
        className="site-loader-shell"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <span className="site-loader-mark-min">QS</span>
        <span className="site-loader-kicker">Loading Portfolio</span>
        <div className="site-loader-headline-row">
          <span className="site-loader-percent-min">{displayProgress}%</span>
        </div>

        <div className="site-loader-progress-min" aria-label={`Loading ${displayProgress}%`}>
          <div className="site-loader-progress-track-min">
            <motion.span
              className="site-loader-progress-fill-min"
              initial={{ width: '1%' }}
              animate={{ width: `${displayProgress}%` }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="site-loader-progress-meta" aria-hidden="true">
            <span>01</span>
            <span>100</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SiteLoader;
