import './Hero.css';

const HeroVisualSVG = () => (
  <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
    <defs>
      <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#1a72f5" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#1a72f5" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="nodeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a72f5"/>
        <stop offset="100%" stopColor="#00c9b1"/>
      </linearGradient>
    </defs>
    <circle cx="250" cy="250" r="200" fill="url(#glow1)"/>
    <circle cx="250" cy="250" r="180" stroke="#1a72f5" strokeWidth="0.5" strokeDasharray="8 4" opacity="0.3"/>
    <circle cx="250" cy="250" r="140" stroke="#00c9b1" strokeWidth="0.5" opacity="0.2"/>
    {[['250','70','400','200'],['250','70','100','200'],['400','200','350','380'],
      ['100','200','150','380'],['350','380','150','380']].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i<2?'#1a72f5':'#00c9b1'} strokeWidth="0.8" opacity="0.4"/>
    ))}
    {[['250','70','400','200'],['250','70','100','200'],['250','70','350','380'],['250','70','150','380']].map(([,,,x2,y2],i) => null)}
    <line x1="250" y1="250" x2="250" y2="70"  stroke="#1a72f5" strokeWidth="0.5" opacity="0.3"/>
    <line x1="250" y1="250" x2="400" y2="200" stroke="#1a72f5" strokeWidth="0.5" opacity="0.3"/>
    <line x1="250" y1="250" x2="100" y2="200" stroke="#1a72f5" strokeWidth="0.5" opacity="0.3"/>
    <line x1="250" y1="250" x2="350" y2="380" stroke="#00c9b1" strokeWidth="0.5" opacity="0.3"/>
    <line x1="250" y1="250" x2="150" y2="380" stroke="#00c9b1" strokeWidth="0.5" opacity="0.3"/>
    <circle cx="250" cy="70"  r="10" fill="url(#nodeGrad)" opacity="0.9"/>
    <circle cx="400" cy="200" r="8"  fill="#1a72f5" opacity="0.8"/>
    <circle cx="100" cy="200" r="8"  fill="#1a72f5" opacity="0.8"/>
    <circle cx="350" cy="380" r="8"  fill="#00c9b1" opacity="0.8"/>
    <circle cx="150" cy="380" r="8"  fill="#00c9b1" opacity="0.8"/>
    <circle cx="250" cy="250" r="50" fill="#071428" stroke="url(#nodeGrad)" strokeWidth="1.5"/>
    <circle cx="250" cy="250" r="35" fill="#0a1f3d" opacity="0.8"/>
    <text x="237" y="265" fontFamily="sans-serif" fontWeight="800" fontSize="28" fill="url(#nodeGrad)">E</text>
    <circle cx="310" cy="150" r="5" fill="#1a72f5" opacity="0.6"/>
    <circle cx="190" cy="330" r="5" fill="#00c9b1" opacity="0.6"/>
    <circle cx="370" cy="300" r="4" fill="#1a72f5" opacity="0.5"/>
    <circle cx="130" cy="140" r="4" fill="#00c9b1" opacity="0.5"/>
  </svg>
);

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <div className="hero-bg"/>
      <div className="grid-overlay"/>

      <div className="hero-content">
        <div className="hero-tag">
          <span className="tag-dot"/>
          A Division of Emraad Investments Ltd
        </div>

        <h1 className="hero-h1">
          <span className="line">Engineering the</span>
          <span className="line accent">Future with</span>
          <span className="line">Intelligence</span>
        </h1>

        <p className="hero-sub">
          Advanced AI, Blockchain, and Enterprise Systems for Government, Business, and the African Digital Economy.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Request Consultation →
          </button>
          <button className="btn-outline" onClick={() => scrollTo('services')}>
            View Capabilities
          </button>
        </div>

        <div className="hero-stats">
          {[['5+','Core Tech Domains'],['AI','Driven Innovation'],['360°','Digital Transformation']].map(([num,label]) => (
            <div className="stat-item" key={label}>
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <HeroVisualSVG />
      </div>
    </section>
  );
}
