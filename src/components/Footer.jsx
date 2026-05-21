import './Footer.css';

const LogoMarkSmall = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <defs>
      <linearGradient id="fl1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1a72f5"/><stop offset="1" stopColor="#00c9b1"/>
      </linearGradient>
      <linearGradient id="fl2" x1="11" y1="9" x2="29" y2="27" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1a72f5"/><stop offset="1" stopColor="#00c9b1"/>
      </linearGradient>
    </defs>
    <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="none" stroke="url(#fl1)" strokeWidth="1.5"/>
    <text x="11" y="27" fontFamily="sans-serif" fontWeight="800" fontSize="18" fill="url(#fl2)">E</text>
  </svg>
);

const navTo = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <LogoMarkSmall />
            <div className="logo-text">
              <span className="logo-name">Emraad Advanced Technologies</span>
              <span className="logo-sub">A Division of Emraad Investments Ltd</span>
            </div>
          </div>
          <p>Intelligent, secure, and scalable digital systems for African markets and global standards. Engineering the future with intelligence.</p>
          <div className="social-links">
            <a href="#" className="social-link" title="LinkedIn">in</a>
            <a href="#" className="social-link" title="Twitter/X">𝕏</a>
            <a href="#" className="social-link" title="WhatsApp">💬</a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            {['AI & Machine Learning','Blockchain Systems','Enterprise Software','Cybersecurity','Digital Transformation'].map(s => (
              <li key={s}><a href="#services" onClick={e => { e.preventDefault(); navTo('services'); }}>{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            {[['about','About Us'],['why','Why Emraad'],['industries','Industries'],['vision','Vision & Mission'],['contact','Contact']].map(([id,label]) => (
              <li key={id}><a href={`#${id}`} onClick={e => { e.preventDefault(); navTo(id); }}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:emraadinvest@gmail.com<">emraadinvest@gmail.com</a></li>
            <li><a href="tel:+234000000000">+234 (9) 037 162 179</a></li>
            <li><a href="#">Nigeria · West Africa</a></li>
            <li><a href="#contact" onClick={e => { e.preventDefault(); navTo('contact'); }}>Request Consultation</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 EMRAAD ADVANCED TECHNOLOGIES · ALL RIGHTS RESERVED</span>
        <span>ENGINEERED WITH PRECISION IN NIGERIA</span>
      </div>
    </footer>
  );
}
