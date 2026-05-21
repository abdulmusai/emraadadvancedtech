import { useState, useEffect } from 'react';
import './Navbar.css';

const LogoMark = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <defs>
      <linearGradient id="lg1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1a72f5"/><stop offset="1" stopColor="#00c9b1"/>
      </linearGradient>
      <linearGradient id="lg2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1a72f5" stopOpacity="0.5"/><stop offset="1" stopColor="#00c9b1" stopOpacity="0.5"/>
      </linearGradient>
      <linearGradient id="lg3" x1="11" y1="9" x2="29" y2="27" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1a72f5"/><stop offset="1" stopColor="#00c9b1"/>
      </linearGradient>
    </defs>
    <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="none" stroke="url(#lg1)" strokeWidth="1.5"/>
    <polygon points="20,8 32,14.5 32,27.5 20,34 8,27.5 8,14.5" fill="none" stroke="url(#lg2)" strokeWidth="0.8" opacity="0.5"/>
    <text x="11" y="27" fontFamily="sans-serif" fontWeight="800" fontSize="18" fill="url(#lg3)">E</text>
    <circle cx="20" cy="2"  r="2"   fill="#1a72f5"/>
    <circle cx="38" cy="11" r="1.5" fill="#00c9b1"/>
    <circle cx="2"  cy="11" r="1.5" fill="#00c9b1"/>
    <circle cx="38" cy="29" r="1.5" fill="#1a72f5" opacity="0.6"/>
    <circle cx="2"  cy="29" r="1.5" fill="#1a72f5" opacity="0.6"/>
    <circle cx="20" cy="38" r="2"   fill="#00c9b1" opacity="0.8"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo" onClick={e => handleNavClick(e, 'hero')}>
        <div className="logo-mark"><LogoMark /></div>
        <div className="logo-text">
          <span className="logo-name">Emraad</span>
          <span className="logo-sub">Advanced Technologies</span>
        </div>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {[['about','About'],['services','Services'],['why','Why Us'],['industries','Industries']].map(([id,label]) => (
          <li key={id}><a href={`#${id}`} onClick={e => handleNavClick(e, id)}>{label}</a></li>
        ))}
        <li><a href="#contact" className="nav-cta" onClick={e => handleNavClick(e,'contact')}>Consult</a></li>
      </ul>

      <button className="menu-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </button>
    </nav>
  );
}
