import { useEffect, useRef } from 'react';
import './Industries.css';

const chips = [
  { icon:'🏛️', label:'Government & Public Sector' },
  { icon:'🏦', label:'Financial Services' },
  { icon:'🌾', label:'Agriculture & AgriTech' },
  { icon:'🎓', label:'Education' },
  { icon:'🚀', label:'SMEs & Startups' },
  { icon:'🏥', label:'Healthcare' },
  { icon:'⚡', label:'Energy & Utilities' },
  { icon:'🌐', label:'Telecoms & Media' },
];

export default function Industries() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const doubled = [...chips, ...chips];

  return (
    <section id="industries" className="industries-section" ref={ref}>
      <div className="section-tag centered reveal">Industries Served</div>
      <h2 className="section-h2 reveal" style={{ textAlign:'center', marginBottom:'0.5rem' }}>
        Sectors We <em>Transform</em>
      </h2>
      <p className="section-sub reveal" style={{ textAlign:'center', margin:'0 auto 1rem' }}>
        From government to agritech, we deliver digital solutions that create lasting institutional impact.
      </p>

      <div className="ind-track-wrap">
        <div className="ind-track">
          {doubled.map(({ icon, label }, i) => (
            <div className="ind-chip" key={i}>
              <span className="chip-icon">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
