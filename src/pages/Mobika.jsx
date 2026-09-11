import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Footer, WhatsAppFloat } from '../components/Sections';
import useInView from '../hooks/useInView';
import styles from './Mobika.module.css';

const FEATURES = [
  {
    icon: '📋',
    title: 'Compliance Management',
    desc: 'Track insurance, vehicle inspection, operating permits, traffic fines, taxes and document expiry dates. Get reminders before deadlines to avoid fines and downtime.',
  },
  {
    icon: '📍',
    title: 'Fleet Tracking & Security',
    desc: 'Real-time GPS tracking, trip history, geofencing, speed monitoring, unauthorized-use alerts and remote vehicle immobilization where supported.',
  },
  {
    icon: '👥',
    title: 'Vehicle & Operator Management',
    desc: 'Manage vehicle profiles, driver assignments, fleet grouping, ownership records, user roles and full operator activity history — all in one place.',
  },
  {
    icon: '💳',
    title: 'Payment & Repayment Management',
    desc: 'Track daily, weekly or monthly driver payments, lease payments, loan repayments, outstanding balances and overdue payments with full payment history.',
  },
  {
    icon: '🔔',
    title: 'Smart Alerts & Notifications',
    desc: 'Stay informed with alerts for compliance expiry, upcoming payments, speed violations, geofence breaches, unauthorized movement and vehicle inactivity.',
  },
  {
    icon: '📊',
    title: 'Fleet Intelligence',
    desc: 'One dashboard for fleet status, vehicle utilization, driver activity, compliance status, payment performance and full analytics — make decisions from data.',
  },
];

const WHO = [
  { icon: '🏍️', title: 'Motorcycle & Taxi Operators', desc: 'Manage compliance, payments, vehicle security, and operational performance from one platform.' },
  { icon: '🚌', title: 'Fleet Owners', desc: 'Monitor multiple vehicles, drivers, payments, compliance, and utilization from one dashboard.' },
  { icon: '🚛', title: 'Transport Companies', desc: 'Manage buses, school buses, taxis, delivery fleets, logistics vehicles, trucks, and commercial fleets.' },
  { icon: '🏦', title: 'Banks & Financial Institutions', desc: 'Monitor financed vehicles, repayment performance, and asset activity with customer authorization.' },
  { icon: '🤝', title: 'Cooperatives & Mobility Orgs', desc: 'Manage members, vehicles, compliance records, payments, and fleet performance centrally.' },
];

const HOW = [
  { step: '01', title: 'Connect Your Vehicle', desc: 'Register your vehicle or fleet and connect supported tracking hardware where required.' },
  { step: '02', title: 'Add Your Information', desc: 'Add vehicle details, drivers, compliance requirements, expiry dates, payment schedules and operational info.' },
  { step: '03', title: 'Monitor Everything', desc: 'View location, compliance, payments, alerts and vehicle activity from your Mobika dashboard.' },
  { step: '04', title: 'Take Action', desc: 'Receive alerts, generate reports, manage compliance, monitor payments and make better decisions.' },
];

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

export default function Mobika() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <TopBar />
      <Navbar />

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              A Greenalytic Product
            </div>
            <h1 className={styles.heroTitle}>
              Move Smarter.<br />
              <span>Stay Compliant.</span><br />
              Grow Faster.
            </h1>
            <p className={styles.heroSub}>
              Mobika is an intelligent mobility management and compliance platform helping African vehicle owners, fleet operators, transport companies, and financial institutions manage vehicles, compliance, security, operations, and financial visibility — all from one platform.
            </p>
            <div className={styles.heroBtns}>
              <a href="https://mobika.africa" target="_blank" rel="noreferrer" className={styles.btnPrimary}>
                Visit Mobika Website →
              </a>
              <a href="/contact" className={styles.btnOutline}>
                Request a Demo
              </a>
            </div>
          </FadeIn>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <span className={styles.heroCardDot} style={{ background: '#ff5f57' }} />
              <span className={styles.heroCardDot} style={{ background: '#febc2e' }} />
              <span className={styles.heroCardDot} style={{ background: '#28c840' }} />
              <span className={styles.heroCardTitle}>Mobika Dashboard</span>
            </div>
            <div className={styles.heroCardBody}>
              {[
                { label: 'Active Vehicles', value: '48', color: '#4ade80' },
                { label: 'Compliance Rate', value: '94%', color: '#60a5fa' },
                { label: 'Alerts Today', value: '3', color: '#fb923c' },
                { label: 'Payments Due', value: '12', color: '#f472b6' },
              ].map((item, i) => (
                <div key={i} className={styles.heroStat}>
                  <span style={{ color: item.color, fontSize: '1.6rem', fontWeight: 800, fontFamily: 'Syne, sans-serif' }}>{item.value}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.heroCardBar}>
              <div className={styles.barLabel}>Fleet compliance</div>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: '94%' }} /></div>
              <span>94%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.introBox}>
              <h2>One Platform. Complete Mobility Control.</h2>
              <p>Managing vehicles should not mean juggling paperwork, spreadsheets, GPS applications, payment records, and compliance deadlines. Mobika brings everything together — whether you manage motorcycles, taxis, buses, school buses, delivery vehicles, trucks, or financed vehicles.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHead}>
              <p className={styles.sectionLabel}>What Mobika does</p>
              <h2 className={styles.sectionTitle}>Six powerful capabilities in one platform</h2>
            </div>
          </FadeIn>
          <div className={styles.featuresGrid}>
            {FEATURES.map((f, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div
                  className={`${styles.featureCard} ${hovered === i ? styles.featureCardHovered : ''}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={styles.featureAccent} />
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHead} style={{ textAlign: 'center' }}>
              <p className={styles.sectionLabelLight}>Who it serves</p>
              <h2 className={styles.sectionTitleLight}>Built for every part of African mobility</h2>
            </div>
          </FadeIn>
          <div className={styles.whoGrid}>
            {WHO.map((w, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={styles.whoCard}>
                  <div className={styles.whoIcon}>{w.icon}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHead}>
              <p className={styles.sectionLabel}>How it works</p>
              <h2 className={styles.sectionTitle}>Up and running in four steps</h2>
            </div>
          </FadeIn>
          <div className={styles.howGrid}>
            {HOW.map((h, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={styles.howCard}>
                  <div className={styles.howStep}>{h.step}</div>
                  <h3>{h.title}</h3>
                  <p>{h.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCIAL ── */}
      <section className={`${styles.section} ${styles.sectionPale}`}>
        <div className={styles.container}>
          <div className={styles.finGrid}>
            <FadeIn>
              <div>
                <p className={styles.sectionLabel}>Financial visibility</p>
                <h2 className={styles.sectionTitle}>Building financial profiles beyond traditional credit</h2>
                <p className={styles.bodyText}>Many transport operators generate income every day but have limited structured financial and operational records. Mobika helps build structured operational and payment histories that — with appropriate customer consent — can support better assessment by financial institutions.</p>
                <p className={styles.bodyText}>This creates opportunities for vehicle financing, insurance, asset financing, working capital and other mobility-focused financial services.</p>
                <div className={styles.finTags}>
                  {['Vehicle Financing', 'Insurance', 'Asset Financing', 'Working Capital', 'Mobility Services'].map((t, i) => (
                    <span key={i} className={styles.finTag}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className={styles.visionBox}>
                <div className={styles.visionIcon}>🌍</div>
                <h3>Our Vision</h3>
                <p>Building Africa's Trusted Mobility Management, Compliance & Financial Infrastructure.</p>
                <p>We envision an Africa where every commercial vehicle can operate safely, remain compliant, protect its value, and build a trusted digital operational and financial history.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className={styles.cta}>
        <FadeIn>
          <p className={styles.ctaTag}>Your Vehicles. Your Operations. Your Compliance.</p>
          <h2>Take control with Mobika.</h2>
          <p className={styles.ctaSub}>One platform for mobility management, compliance, security, and financial visibility across Africa.</p>
          <div className={styles.ctaBtns}>
            <a href="https://mobika.africa" target="_blank" rel="noreferrer" className={styles.ctaWhite}>
              Visit Mobika.rw →
            </a>
            <a href="/contact" className={styles.ctaOutline}>
              Talk to our team
            </a>
          </div>
        </FadeIn>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
