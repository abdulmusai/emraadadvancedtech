import { useState, useEffect, useRef } from 'react';
import './Contact.css';

const services = [
  'Artificial Intelligence & Machine Learning',
  'Blockchain & Distributed Systems',
  'Enterprise Software Development',
  'Cybersecurity & Cloud Infrastructure',
  'Digital Transformation Consulting',
  'Multiple / Not Sure',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:'', org:'', email:'', phone:'', service:'', message:'' });
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="contact-inner">
        <div className="section-tag centered reveal">Get In Touch</div>
        <h2 className="section-h2 reveal" style={{ textAlign:'center' }}>
          Start Your <em>Digital Transformation</em>
        </h2>
        <p className="section-sub reveal" style={{ textAlign:'center', margin:'0 auto 3rem' }}>
          Request a strategic consultation. Our team will analyse your organization's needs and design a tailored technology roadmap.
        </p>

        {submitted ? (
          <div className="success-msg reveal">
            <span className="success-icon">✓</span>
            <h3>Request Submitted</h3>
            <p>Our team will be in touch with you shortly to schedule your strategic consultation.</p>
          </div>
        ) : (
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label>Full Name</label>
                <input name="name" type="text" placeholder="Dr. Amina Ibrahim" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label>Organization</label>
                <input name="org" type="text" placeholder="Ministry of Finance" value={form.org} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label>Email Address</label>
                <input name="email" type="email" placeholder="a.ibrahim@organization.gov.ng" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label>Phone / WhatsApp</label>
                <input name="phone" type="tel" placeholder="+234 800 000 0000" value={form.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="form-field">
              <label>Service Interest</label>
              <select name="service" value={form.service} onChange={handleChange} required>
                <option value="">Select a service area...</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-field">
              <label>Brief Requirements</label>
              <textarea name="message" rows={4} placeholder="Describe your digital challenge or transformation goal..." value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="form-submit">
              Request Strategic Consultation →
            </button>
          </form>
        )}

        <p className="contact-footer-note">A DIVISION OF EMRAAD INVESTMENTS LTD · NIGERIA</p>
      </div>
    </section>
  );
}
