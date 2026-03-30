import { useEffect, useRef } from 'react';

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let animationFrame;
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pointer.x, y: pointer.y };

    const setHoverState = (hovering) => {
      if (!ringRef.current) return;
      ringRef.current.style.width = hovering ? '52px' : '32px';
      ringRef.current.style.height = hovering ? '52px' : '32px';
      ringRef.current.style.borderColor = hovering ? 'rgba(0,229,160,0.78)' : 'rgba(0,229,160,0.3)';
    };

    const onMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;

      const target = event.target.closest(
        'a, button, input, textarea, label, .interactive, [data-cursor="hover"], [role="button"]',
      );
      setHoverState(Boolean(target));
    };

    const animate = () => {
      ring.x += (pointer.x - ring.x) * 0.11;
      ring.y += (pointer.y - ring.y) * 0.11;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

export default Cursor;
