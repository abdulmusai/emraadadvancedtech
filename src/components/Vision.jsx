import { useEffect, useRef } from 'react';
import './Vision.css';

export default function Vision() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="vision" className="vision-section" ref={ref}>
      <div className="vision-watermark">EMRAAD</div>
      <div className="section-tag reveal">Purpose & Direction</div>
      <h2 className="section-h2 reveal" style={{ maxWidth:'500px' }}>
        What Drives <em>Everything</em> We Build
      </h2>

      <div className="vm-grid reveal">
        <div className="vm-card">
          <div className="vm-type">Vision Statement</div>
          <div className="vm-text">
            To become a leading African technology powerhouse delivering intelligent, secure, and transformative digital systems.
          </div>
        </div>
        <div className="vm-card">
          <div className="vm-type">Mission Statement</div>
          <div className="vm-text">
            To design advanced, scalable, and impactful technology solutions that empower businesses, institutions, and communities.
          </div>
        </div>
      </div>
    </section>
  );
}
