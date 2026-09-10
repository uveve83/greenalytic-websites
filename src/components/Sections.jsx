import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import { SERVICES, STATS, DASH_FEATURES, PARTNERS, TESTIMONIALS, ABOUT_CHECKS } from '../data';
import styles from './Sections.module.css';

/* ── ABOUT ──────────────────────────────────────────────── */
export function About() {
  const [ref, visible] = useInView();
  return (
    <section className={`${styles.section} ${styles.about}`}>
      <div className={`${styles.container} ${styles.reveal} ${visible ? styles.visible : ''}`} ref={ref}>
        <div className={styles.aboutGrid}>

          {/* Image */}
          <div className={styles.aboutImgWrap}>
            <img
              src="/images/ceo.jpg"
              alt="Greenalytic team"
              className={styles.aboutImg}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className={styles.imgBadge}>
              <span className={styles.imgBadgeIcon}>🌿</span>
              <div>
                <strong>Clean tech, locally built</strong>
                <span>Kigali, Rwanda since 2022</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={styles.aboutText}>
            <p className={styles.sectionLabel}>About Greenalytic</p>
            <h2 className={styles.sectionTitle}>Rwanda's cleantech partner for smarter transport</h2>
            <p className={styles.bodyText}>
              Greenalytic Motors Ltd is a Rwanda-based cleantech company reducing air pollution across African cities and rural areas through smart, locally engineered technology.
            </p>
            <p className={styles.bodyText}>
              We combine IoT sensors, real-time data analytics, and electric vehicle innovation to give fleet owners, government agencies, and cooperatives the tools they need.
            </p>
            <ul className={styles.checklist}>
              {ABOUT_CHECKS.map((item, i) => (
                <li key={i}>
                  <i className="fas fa-circle-check" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className={styles.btnGreen}>Learn more about us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ───────────────────────────────────────────── */
export function Services() {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section className={`${styles.section} ${styles.sectionGray}`}>
      <div className={styles.container} ref={ref}>
        <div className={`${styles.sectionHeader} ${styles.reveal} ${visible ? styles.visible : ''}`}>
          <p className={styles.sectionLabel}>What we do</p>
          <h2 className={`${styles.sectionTitle} ${styles.centered}`}>Solutions for every part of your fleet</h2>
          <p className={`${styles.sectionSub} ${styles.centered}`}>
            From real-time monitoring to full electrification — choose the right level for your operations.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`${styles.serviceCard} ${hovered === i ? styles.serviceCardHovered : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className={styles.cardAccent} />
              <div className={styles.serviceIcon}>
                <i className={`fas ${s.icon}`} />
              </div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── STATS BAND ─────────────────────────────────────────── */
export function StatsBand() {
  const [ref, visible] = useInView();
  return (
    <div className={styles.statsBand} ref={ref}>
      {STATS.map((s, i) => (
        <div
          key={i}
          className={`${styles.statItem} ${styles.reveal} ${visible ? styles.visible : ''}`}
          style={{ transitionDelay: `${i * 0.12}s` }}
        >
          <strong>{s.value}</strong>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ── DASHBOARD ──────────────────────────────────────────── */
export function Dashboard() {
  const [ref, visible] = useInView();
  return (
    <section className={`${styles.section} ${styles.dashboard}`}>
      <div className={`${styles.container} ${styles.reveal} ${visible ? styles.visible : ''}`} ref={ref}>
        <div className={styles.dashGrid}>
          <div className={styles.dashText}>
            <p className={styles.sectionLabel}>IoT Dashboard</p>
            <h2 className={styles.sectionTitle}>Full visibility into your fleet's emissions</h2>
            <p className={styles.bodyText}>
              Our cloud-based dashboard gives fleet owners and regulators instant access to live emissions data, device status, historical trends, and automated alerts — all in one place.
            </p>
            <div className={styles.featuresGrid}>
              {DASH_FEATURES.map((f, i) => (
                <div key={i} className={styles.featureItem}>
                  <i className="fas fa-circle-check" /> {f}
                </div>
              ))}
            </div>
            <a href="/access/login.php" className={styles.btnGreen}>
              Access dashboard <i className="fas fa-arrow-right" />
            </a>
          </div>

          <div className={styles.dashImgWrap}>
            <img
              src="/images/dashbord.JPG"
              alt="Greenalytic IoT Dashboard"
              className={styles.dashImg}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className={styles.dashPlaceholder}>
              <i className="fas fa-chart-line" style={{ fontSize: 48, color: 'var(--green)', opacity: 0.4 }} />
              <span>Dashboard Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//* ── PARTNERS ───────────────────────────────────────────── */
export function Partners() {
  const [ref, visible] = useInView();
  return (
    <section className={`${styles.partnersSection} ${styles.sectionGray}`}>
      <div className={styles.container} ref={ref}>
        <p className={`${styles.partnersLabel} ${styles.reveal} ${visible ? styles.visible : ''}`}>
          Trusted by leading organisations in Rwanda
        </p>
        <div className={`${styles.partnersMarquee} ${styles.reveal} ${visible ? styles.visible : ''}`}
          style={{ transitionDelay: '0.1s' }}>
          <div className={styles.partnersTrack}>
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} className={styles.partnerLogo}>
                <img
                  src={p.logo}
                  alt={p.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span style={{ display: 'none' }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ───────────────────────────────────────── */
export function Testimonials() {
  const [ref, visible] = useInView();
  return (
    <section className={styles.section}>
      <div className={styles.container} ref={ref}>
        <div className={`${styles.reveal} ${visible ? styles.visible : ''}`}>
          <p className={styles.sectionLabel}>Testimonials</p>
          <h2 className={styles.sectionTitle}>What our clients say</h2>
        </div>
        <div className={styles.testiGrid}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`${styles.testiCard} ${styles.reveal} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.quoteIcon}>"</div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testiText}>{t.text}</p>
              <div className={styles.testiAuthor}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA BANNER ─────────────────────────────────────────── */
export function CTABanner() {
  const [ref, visible] = useInView();
  return (
    <div
      className={`${styles.ctaBanner} ${styles.reveal} ${visible ? styles.visible : ''}`}
      ref={ref}
    >
      <h2>Ready to clean up your fleet?</h2>
      <p>Join 15+ organisations across Rwanda using Greenalytic to monitor emissions and drive toward a cleaner future.</p>
      <div className={styles.ctaBtns}>
        <Link to="/contact" className={styles.ctaBtnWhite}>Request a demo</Link>
        <a href="https://wa.me/250796895138" target="_blank" rel="noreferrer" className={styles.ctaBtnOutline}>
          <i className="fab fa-whatsapp" /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ── FOOTER ─────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>

        {/* Brand */}
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            <div className={styles.footerLogoMark}>G</div>
            <span>Green<span style={{ color: 'var(--accent)' }}>alytic</span></span>
          </div>
          <p>Clean mobility solutions built in Rwanda for Africa. Emissions monitoring, IoT fleet management, and zero-emission transport.</p>
          <div className={styles.footerSocials}>
            {[
              { icon: 'fa-instagram', href: 'https://www.instagram.com/greenalytic_/' },
              { icon: 'fa-twitter', href: 'https://twitter.com/greenalytic' },
              { icon: 'fa-whatsapp', href: 'https://wa.me/250796895138' },
              { icon: 'fa-facebook-f', href: '#' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className={styles.socialIcon}>
                <i className={`fab ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className={styles.footerCol}>
          <h4>Quick links</h4>
          <ul>
            {['Home', 'About us', 'Services', 'Projects', 'Products', 'Contact'].map((l) => (
              <li key={l}><Link to={`/${l === 'Home' ? '' : l.toLowerCase().replace(' ', '-')}`}>{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.footerCol}>
          <h4>Services</h4>
          <ul>
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.title}><Link to="/services">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.footerCol}>
          <h4>Contact us</h4>
          <div className={styles.footerContact}>
            <span><i className="fas fa-map-marker-alt" /> KN 3Rd, Kicukiro, Kigali</span>
            <a href="tel:+250796895138"><i className="fas fa-phone" /> +250 796 895 138</a>
            <a href="mailto:info@greenalytic.rw"><i className="fas fa-envelope" /> info@greenalytic.rw</a>
            <span><i className="fas fa-clock" /> Mon–Fri 9AM–5PM · Sat 9AM–2PM</span>
          </div>
          <div className={styles.newsletter}>
            <p>Stay updated</p>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" />
              <button type="button"><i className="fas fa-paper-plane" /></button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© 2026 Greenalytic Motors Ltd. All rights reserved.</span>
        <span>
          <Link to="/privacy">Privacy Policy</Link>
          <span style={{ margin: '0 8px', opacity: 0.4 }}>·</span>
          <Link to="/terms">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}

/* ── WHATSAPP FLOAT ─────────────────────────────────────── */
export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/250796895138"
      target="_blank"
      rel="noreferrer"
      className={styles.waFloat}
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp" />
    </a>
  );
}
