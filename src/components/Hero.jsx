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
          <motion.div className="section-kicker" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="section-line" />
            <span>01</span>
          </motion.div>
          <motion.p className="hero-overline" variants={fadeUp} initial="hidden" animate="show" custom={0.1}>
            {personal.heroTitle} / {personal.locationShort}
          </motion.p>

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
            <a className="ghost-button interactive" href="/qadir-salman-cv.txt" download>
              Download CV
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeUp} initial="hidden" animate="show" custom={0.82}>
            {hero.stats.map((item) => (
              <div key={item} className="hero-stat">
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-glow" aria-hidden="true" />
          <motion.div className="qs-card" variants={fadeUp} initial="hidden" animate="show" custom={0.3}>
            <div className="qs-card-noise" aria-hidden="true" />
            <div className="qs-card-top">
              <span>Senior Engineer / Est. 2019</span>
              <strong>QS</strong>
            </div>
            <div className="qs-card-bottom">
              <p>{personal.title}</p>
              <div>
                <span>{personal.name}</span>
                <span>{personal.experience}</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="floating-cards" variants={fadeUp} initial="hidden" animate="show" custom={0.5}>
            {hero.cards.map((card) => (
              <article key={card.label} className="floating-info-card">
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </article>
            ))}
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
