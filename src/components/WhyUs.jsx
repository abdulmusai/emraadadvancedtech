import { useState, useEffect, useRef } from 'react';
import './WhyUs.css';

const details = [
  { icon:'🎯', title:'Advanced Technical Expertise', text:'Our team operates at the frontier of AI, blockchain, and enterprise systems. We bring deep, specialized knowledge that enables us to architect solutions most technology firms cannot — combining academic rigor with production-grade implementation.' },
  { icon:'🔐', title:'Enterprise-Grade Security', text:'Security is not a feature, it is our foundation. Every system we build is architected with security-by-design principles, zero-trust models, and compliance frameworks suited for government and financial sector requirements.' },
  { icon:'📐', title:'Scalable Architecture', text:'We architect for the future. Systems built by Emraad are designed to scale horizontally and vertically, handling everything from startup pilot deployments to national infrastructure with no re-architecture required.' },
  { icon:'🔄', title:'Strategic Digital Transformation', text:'We are not just vendors. We partner with leadership teams to design and execute comprehensive digital transformation strategies that align technology investments with institutional objectives and measurable outcomes.' },
  { icon:'🌍', title:'African Market Intelligence', text:'We understand the unique infrastructural, regulatory, and cultural realities of the African market. This allows us to build systems that are technically sound, contextually appropriate, and operationally resilient.' },
];

export default function WhyUs() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSelect = (i) => { setActive(i); setAnimKey(k => k + 1); };

  return (
    <section id="why" className="why-section" ref={ref}>
      <div className="section-tag reveal">Competitive Advantage</div>
      <div className="why-grid">
        <div className="reveal">
          <h2 className="section-h2">Why Organizations Choose <em>Emraad</em></h2>
          <div className="why-list">
            {details.map((d, i) => (
              <div
                key={i}
                className={`why-item ${active === i ? 'active' : ''}`}
                onClick={() => handleSelect(i)}
              >
                <span className="why-num">0{i + 1}</span>
                <span className="why-label">{d.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="why-detail reveal" key={animKey}>
          <div className="why-detail-icon">{details[active].icon}</div>
          <div className="why-detail-title">{details[active].title}</div>
          <div className="why-detail-text">{details[active].text}</div>
        </div>
      </div>
    </section>
  );
}
