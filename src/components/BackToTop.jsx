import { motion, useScroll, useTransform } from 'framer-motion';

function BackToTop() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [280, 520], [0, 1]);
  const y = useTransform(scrollY, [280, 520], [18, 0]);
  const scale = useTransform(scrollY, [280, 520], [0.92, 1]);
  const pointerEvents = useTransform(scrollY, [280, 281], ['none', 'auto']);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      type="button"
      className="back-to-top interactive magnetic"
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{ opacity, y, scale, pointerEvents }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="back-to-top-ring" aria-hidden="true" />
      <span className="back-to-top-arrow" aria-hidden="true">
        ↑
      </span>
      <span className="back-to-top-label">Top</span>
    </motion.button>
  );
}

export default BackToTop;
