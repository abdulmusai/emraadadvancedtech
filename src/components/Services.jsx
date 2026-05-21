import { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    num:'01', icon:'🧠', title:'Artificial Intelligence & Machine Learning',
    desc:'Intelligent systems that learn, predict, and automate critical business decisions with precision and scale.',
    tags:['Predictive Analytics','AI Automation','Computer Vision','Decision Systems'], wide:false,
  },
  {
    num:'02', icon:'⛓️', title:'Blockchain & Distributed Systems',
    desc:'Decentralized infrastructure for trust, transparency, and tamper-proof data exchange across institutions.',
    tags:['Smart Contracts','Digital Identity','Tokenization','Secure Exchange'], wide:false,
  },
  {
    num:'03', icon:'💻', title:'Enterprise Software Development',
    desc:'Custom-built platforms, SaaS systems, and integrated architectures engineered for enterprise scale.',
    tags:['Web Platforms','SaaS','ERP & CRM','API Architecture'], wide:false,
  },
  {
    num:'04', icon:'🔐', title:'Cybersecurity & Cloud Infrastructure',
    desc:'Security-first architecture protecting critical data, systems, and digital assets from advanced threats.',
    tags:['Security Architecture','Cloud DevOps','Encryption','Hardening'], wide:false,
  },
  {
    num:'05', icon:'🔄', title:'Digital Transformation Consulting',
    desc:'Strategic advisory and hands-on implementation to modernize legacy systems and drive organization-wide digital change. We partner with leadership to align technology investment with measurable institutional outcomes.',
    tags:['Process Automation','System Modernization','Technology Strategy','Change Management'], wide:true,
  },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="services-section" ref={ref}>
      <div className="services-header reveal">
        <div className="section-tag">Core Service Areas</div>
        <h2 className="section-h2">Full-Spectrum <em>Digital Capabilities</em></h2>
        <p className="section-sub">Five integrated domains of advanced technology, deployed as standalone solutions or end-to-end digital transformation programs.</p>
      </div>

      <div className="services-grid reveal">
        {services.map(({ num, icon, title, desc, tags, wide }) => (
          <div className={`service-card ${wide ? 'wide' : ''}`} key={num} onClick={scrollToContact}>
            <div className="service-num">{num} / CAPABILITY</div>
            <span className="service-icon">{icon}</span>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{desc}</p>
            <div className="service-tags">
              {tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="service-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}
