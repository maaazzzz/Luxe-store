import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page fade-in">
      <div className="container">
        <header style={{ textAlign: 'center', padding: '60px 0 40px' }}>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', marginBottom: 16 }}>Get in <span className="gradient-text">touch</span></h1>
          <p style={{ fontSize: 17, color: 'var(--gray-500)', maxWidth: 600, margin: '0 auto' }}>
            Have a question or feedback? We'd love to hear from you.
          </p>
        </header>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-info-card">
              <Mail size={20} />
              <div>
                <h4>Email us</h4>
                <p>hello@luxe.store</p>
                <p>support@luxe.store</p>
              </div>
            </div>
            <div className="contact-info-card">
              <Phone size={20} />
              <div>
                <h4>Call us</h4>
                <p>Mon-Fri: 9am - 6pm</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-info-card">
              <MapPin size={20} />
              <div>
                <h4>Visit us</h4>
                <p>123 Fashion Avenue</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a message</h2>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input className="form-input" required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" rows="6" required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>

            <button type="submit" className="btn btn-primary contact-submit">
              {sent ? 'Message Sent ✓' : <><Send size={16} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
