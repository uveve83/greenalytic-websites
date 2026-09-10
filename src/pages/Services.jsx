import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Footer, WhatsAppFloat } from '../components/Sections';
import useInView from '../hooks/useInView';
import styles from './Services.module.css';

const TRICYCLE_SERVICES = [
  {
    icon: '🛺',
    title: 'Standard Electric Cargo Tricycle',
    desc: 'Practical electric mobility for agricultural produce, commercial goods, and last-mile logistics.',
    features: ['Farm-to-market transportation', 'Local commercial deliveries', 'Small-business logistics', 'Last-mile goods transportation'],
  },
  {
    icon: '❄️',
    title: 'Refrigerated Electric Cargo Tricycle',
    desc: 'Temperature-controlled transport for perishables, fresh produce, and cold-chain delivery.',
    features: ['Fresh produce transportation', 'Cold-chain delivery', 'Perishable food transport', 'Agricultural distribution'],
  },
  {
    icon: '🥛',
    title: 'Milk Collection Tricycle',
    desc: 'Purpose-built for dairy value chains — farm-to-collection-centre milk transportation.',
    features: ['Farm milk collection', 'Cooperative operations', 'Dairy product distribution', 'Collection centre logistics'],
  },
  {
    icon: '🔄',
    title: 'Monthly Rental Option',
    desc: 'Flexible access to electric cargo transportation without a full upfront purchase commitment.',
    features: ['No large upfront cost', 'Seasonal flexibility', 'Test before purchasing', '350,000 RWF/month'],
  },
];

const MOBIKA_SERVICES = [
  {
    icon: '📍',
    title: 'Fleet Tracking & Security',
    desc: 'Real-time GPS tracking, trip history, geofencing, speed monitoring and unauthorized-use alerts.',
    features: ['Live GPS tracking', 'Trip history & routes', 'Geofencing alerts', 'Speed monitoring'],
  },
  {
    icon: '📋',
    title: 'Compliance Management',
    desc: 'Track insurance, inspection, taxes, permits, fines and document expiry with smart reminders.',
    features: ['Insurance tracking', 'Inspection reminders', 'Permit management', 'Fine monitoring'],
  },
  {
    icon: '👥',
    title: 'Vehicle & Operator Management',
    desc: 'Centralize vehicle profiles, driver assignments, fleet grouping and operator information.',
    features: ['Vehicle profiles', 'Driver management', 'Fleet grouping', 'Role-based access'],
  },
  {
    icon: '💳',
    title: 'Payment & Repayment Monitoring',
    desc: 'Track daily, weekly, monthly payments, lease payments, loan repayments and overdue balances.',
    features: ['Daily payment tracking', 'Loan repayments', 'Outstanding balances', 'Payment history'],
  },
  {
    icon: '🔔',
    title: 'Smart Alerts & Notifications',
    desc: 'Proactive alerts for compliance expiry, upcoming payments, speed violations and unusual activity.',
    features: ['Compliance alerts', 'Payment reminders', 'Speed violations', 'Geofence breaches'],
  },
  {
    icon: '📊',
    title: 'Fleet Intelligence & Analytics',
    desc: 'Turn fleet activity into actionable insights — utilization, compliance, payments, reports.',
    features: ['Fleet status reports', 'Vehicle utilization', 'Compliance analytics', 'Custom dashboards'],
  },
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

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.heroLabel}>Our services</p>
            <h1 className={styles.heroTitle}>
              Sustainable Mobility.<br /><span>Smart Technology.</span>
            </h1>
            <p className={styles.heroSub}>
              Greenalytic Motors delivers two core solutions — Electric Cargo Tricycles for practical goods transportation, and Mobika for intelligent vehicle and fleet management.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Electric Tricycles */}
      <section className={styles.section}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHead}>
              <p className={styles.sectionLabel}>Solution 1</p>
              <h2 className={styles.sectionTitle}>Electric Cargo Tricycles</h2>
              <p className={styles.sectionSub}>Practical electric mobility for goods transportation — serving farmers, cooperatives, traders, and businesses across Rwanda.</p>
            </div>
          </FadeIn>
          <div className={styles.grid}>
            {TRICYCLE_SERVICES.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className={`${styles.card} ${hovered === `t${i}` ? styles.cardHovered : ''}`}
                  onMouseEnter={() => setHovered(`t${i}`)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={styles.cardAccent} />
                  <div className={styles.icon}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className={styles.features}>
                    {s.features.map((f, j) => (
                      <li key={j}><span className={styles.check}>✓</span> {f}</li>
                    ))}
                  </ul>
                  <a href="/products" className={styles.cardBtn}>See pricing →</a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mobika */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHead}>
              <p className={styles.sectionLabel}>Solution 2</p>
              <h2 className={styles.sectionTitle}>Mobika — Mobility Management Platform</h2>
              <p className={styles.sectionSub}>Move Smarter. Stay Compliant. Grow Faster. One platform for vehicle tracking, compliance, payments, and fleet intelligence.</p>
            </div>
          </FadeIn>
          <div className={styles.grid}>
            {MOBIKA_SERVICES.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className={`${styles.card} ${hovered === `m${i}` ? styles.cardHovered : ''}`}
                  onMouseEnter={() => setHovered(`m${i}`)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={styles.cardAccent} />
                  <div className={styles.icon}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className={styles.features}>
                    {s.features.map((f, j) => (
                      <li key={j}><span className={styles.check}>✓</span> {f}</li>
                    ))}
                  </ul>
                  <a href="/mobika" className={styles.cardBtn}>Learn more →</a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className={styles.cta}>
        <FadeIn>
          <h2>Not sure which solution fits you?</h2>
          <p>Talk to our team and we will recommend the right solution for your needs.</p>
          <div className={styles.ctaBtns}>
            <a href="/contact" className={styles.ctaWhite}>Contact us</a>
            <a href="https://wa.me/250796895138" target="_blank" rel="noreferrer" className={styles.ctaOutline}>💬 WhatsApp us</a>
          </div>
        </FadeIn>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
