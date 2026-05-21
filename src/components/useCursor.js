import { useEffect, useRef } from 'react';

export default function useCursor() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);
  const mouse     = useRef({ x: 0, y: 0 });
  const ring      = useRef({ x: 0, y: 0 });
  const raf       = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ringEl = ringRef.current;
    if (!cursor || !ringEl) return;

    const onMove = e => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      ringEl.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
      raf.current = requestAnimationFrame(animate);
    };

    const addHover = () => ringEl.classList.add('hovered');
    const rmHover  = () => ringEl.classList.remove('hovered');

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a,button,.service-card,.why-item,.ind-chip').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', rmHover);
    });

    raf.current = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return { cursorRef, ringRef };
}
