import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: 'easeOut' },
  }),
};

function Hero({ data }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const personal = data.personal;
  const hero = data.hero;
  const hasProfileImage = Boolean(hero.profileImage?.enabled && hero.profileImage?.src);
  const proofPoints = [
    { label: 'Experience', value: personal.experience },
    { label: 'Location', value: personal.locationShort },
    { label: 'Focus', value: 'Production systems' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrame;
    let width = 0;
    let height = 0;

    const createParticles = () =>
      Array.from({ length: 55 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        r: 0.5 + Math.random() * 1.5,
      }));

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    resize();
    let particles = createParticles();

    const drawLine = (x1, y1, x2, y2, alpha) => {
      context.strokeStyle = `rgba(0,229,160,${alpha})`;
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
    };

    const render = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= height) particle.vy *= -1;

        context.fillStyle = 'rgba(0,229,160,0.5)';
        context.beginPath();
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();

        for (let i = index + 1; i < particles.length; i += 1) {
          const other = particles[i];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 110) {
            drawLine(particle.x, particle.y, other.x, other.y, 0.14 * (1 - distance / 110));
          }
        }

        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const mouseDistance = Math.hypot(particle.x - mouseRef.current.x, particle.y - mouseRef.current.y);
          if (mouseDistance < 150) {
            drawLine(
              particle.x,
              particle.y,
              mouseRef.current.x,
              mouseRef.current.y,
              0.18 * (1 - mouseDistance / 150),
            );
          }
        }
      });

      animationFrame = window.requestAnimationFrame(render);
    };

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const onLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    const onResize = () => {
      resize();
      particles = createParticles();
    };

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);
    render();

    return () => {
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-radial" aria-hidden="true" />
      <div className="container-shell hero-grid">
        <div className="hero-copy">
          <motion.div className="hero-kicker" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="hero-kicker-label">Intro</span>
            <span className="hero-kicker-divider" aria-hidden="true" />
            <span className="hero-kicker-index">01</span>
          </motion.div>

          <div className="hero-headline-wrap">
            {hero.headline.map((line, index) => (
              <motion.h1
                key={line.text}
                className={`hero-headline ${line.accentDim ? 'dim' : ''}`}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.14 + index * 0.15}
              >
                {line.accentWord ? (
                  <>
                    {line.text.replace(line.accentWord, '')}
                    <span className="accent-italic">{line.accentWord}</span>
                  </>
                ) : line.accent ? (
                  <span className="accent-italic">{line.text}</span>
                ) : (
                  line.text
                )}
              </motion.h1>
            ))}
          </div>

          <motion.p className="hero-tagline" variants={fadeUp} initial="hidden" animate="show" custom={0.58}>
            {hero.tagline}
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="show" custom={0.72}>
            <button
              type="button"
              className="primary-button interactive"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <a className="ghost-button cv-button interactive" href="/qadir-salman-cv.txt" download>
              <span className="cv-button-icon" aria-hidden="true">
                ↓
              </span>
              Download CV
            </a>
          </motion.div>

          <motion.div className="hero-proof-strip" variants={fadeUp} initial="hidden" animate="show" custom={0.86}>
            {proofPoints.map((item) => (
              <div key={item.label} className="hero-proof-chip">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </motion.div>

          {/* <motion.div className="hero-metric-grid" variants={fadeUp} initial="hidden" animate="show" custom={0.98}>
            {hero.cards.map((card, index) => (
              <motion.article
                key={card.label}
                className="hero-metric-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.02 + index * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
              >
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </motion.article>
            ))}
          </motion.div> */}
        </div>

        <div className="hero-visual">
          <div className="hero-visual-glow" aria-hidden="true" />
          <motion.div className="hero-visual-stage" variants={fadeUp} initial="hidden" animate="show" custom={0.3}>
            <motion.div
              className="hero-floating-card hero-floating-card-top"
              animate={{ y: [0, -14, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span>Trusted Stack</span>
              <strong>{hero.cards[0].value}</strong>
            </motion.div>

            <motion.div
              className="hero-floating-card hero-floating-card-bottom"
              animate={{ y: [0, 12, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            >
              <span>Built For</span>
              <strong>Scale, stability, and ownership</strong>
            </motion.div>

            {hasProfileImage ? (
              <div className="profile-figure-wrap">
                <div className="profile-halo-ring profile-halo-ring-a" aria-hidden="true" />
                <div className="profile-halo-ring profile-halo-ring-b" aria-hidden="true" />
                <div className="profile-frame-outline" aria-hidden="true" />
                <div className="profile-figure">
                  <img
                    className="profile-image"
                    src={hero.profileImage.src}
                    alt={hero.profileImage.alt || `${personal.name} profile image`}
                  />
                  <div className="profile-image-overlay" aria-hidden="true" />
                </div>
                <div className="profile-badge-chip">{hero.profileImage.badge}</div>
              </div>
            ) : (
              <div className="profile-figure profile-figure-placeholder">
                <span>{personal.shortName}</span>
              </div>
            )}

            <div className="hero-image-caption">
              <span>{personal.name}</span>
              <small>{personal.heroTitle}</small>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        className="scroll-indicator interactive"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 1.08, ease: 'easeOut' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="scroll-line" />
        <span>SCROLL</span>
      </motion.button>
    </section>
  );
}

export default Hero;
