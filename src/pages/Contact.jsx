import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Footer, WhatsAppFloat } from '../components/Sections';
import useInView from '../hooks/useInView';
import styles from './Contact.module.css';

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
    }}>
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect to your PHP backend here
    // fetch('/access/contact.php', { method: 'POST', body: new FormData(e.target) })
    setSent(true);
  };

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.heroLabel}>Get in touch</p>
            <h1 className={styles.heroTitle}>We'd love to <span>hear from you.</span></h1>
            <p className={styles.heroSub}>Whether you're a partner, investor, client, or just curious — reach out and let's connect.</p>
          </FadeIn>
        </div>
      </div>

      {/* Main content */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* Contact info */}
            <FadeIn>
              <div className={styles.infoCol}>
                <p className={styles.sectionLabel}>Contact info</p>
                <h2 className={styles.sectionTitle}>Let's start a conversation</h2>
                <p className={styles.bodyText}>Ready to explore clean mobility solutions or discuss partnership opportunities? We're here to help.</p>

                <div className={styles.infoCards}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>📍</div>
                    <div>
                      <strong>Our location</strong>
                      <span>KN 3Rd, Kicukiro, Kigali, Rwanda</span>
                    </div>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>📞</div>
                    <div>
                      <strong>Phone & WhatsApp</strong>
                      <a href="tel:+250796895138">+250 796 895 138</a>
                    </div>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>✉️</div>
                    <div>
                      <strong>Email address</strong>
                      <a href="mailto:info@greenalytic.rw">info@greenalytic.rw</a>
                    </div>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>🕐</div>
                    <div>
                      <strong>Business hours</strong>
                      <span>Mon–Fri: 9AM – 5PM</span>
                      <span>Sat: 9AM – 2PM</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp quick button */}
                <a href="https://wa.me/250796895138" target="_blank" rel="noreferrer" className={styles.waBtn}>
                  💬 Start WhatsApp Chat
                </a>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.15}>
              <div className={styles.formCard}>
                <h3>Send us a message</h3>
                <p>We'll get back to you within 24 hours.</p>

                {sent ? (
                  <div className={styles.successMsg}>
                    <span>✅</span>
                    <strong>Message sent!</strong>
                    <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Full name *</label>
                        <input
                          type="text" name="name" required
                          placeholder="Your full name"
                          value={form.name} onChange={handleChange}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Email address *</label>
                        <input
                          type="email" name="email" required
                          placeholder="your@email.com"
                          value={form.email} onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Subject</label>
                      <input
                        type="text" name="subject"
                        placeholder="What is this about?"
                        value={form.subject} onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Message *</label>
                      <textarea
                        name="message" required rows={5}
                        placeholder="Tell us how we can help..."
                        value={form.message} onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                      Send message →
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
