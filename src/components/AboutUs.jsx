import { useEffect, useRef } from 'react';
import '<div className="" />
<AboutUs></AboutUs>.css';

const points = [
  { icon: '🏛️', title: 'Enterprise & Institutional Focus', desc: 'We target government bodies, financial institutions, and enterprise clients who demand precision, security, and scale.' },
  { icon: '🌍', title: 'Africa-First, Globally Competitive', desc: 'Positioned to become a leading African technology powerhouse delivering world-class digital infrastructure.' },
  { icon: '⚡', title: 'AI & Blockchain-Driven Innovation', desc: 'Every solution is built on advanced technological foundations — not legacy processes or generic tooling.' },
];

export default function AboutUs() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-glow"/>
      <div className="section-tag reveal">Who We Are</div>
      <div className="about-grid">
        <div className="reveal">
          <h2 className="section-h2">A Technology Arm Built for <em>Tomorrow</em></h2>
          <p className="section-sub">
            Emraad Advanced Technologies delivers intelligent, secure, and scalable digital systems.
            We are the technology arm of Emraad Investments Ltd, built to serve African markets at global standards.
          </p>
          <div className="about-points">
            {points.map(({ icon, title, desc }) => (
              <div className="about-point" key={title}>
                <div className="point-icon">{icon}</div>
                <div className="point-text">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual reveal">
          <div className="hex-ring r1"/>
          <div className="hex-ring r2"/>
          <div className="hex-ring r3"/>
          <div className="hex-center">
            <span className="e-letter">E</span>
            <span className="e-sub">ADV. TECH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
