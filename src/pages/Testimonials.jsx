import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Footer, WhatsAppFloat } from '../components/Sections';
import useInView from '../hooks/useInView';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    initials: 'TM',
    name: 'Transport Manager',
    company: 'Kigali Logistics Company',
    category: 'Fleet Monitoring',
    rating: 5,
    text: "Greenalytic's monitoring system helped us achieve regulatory compliance and identify vehicle issues we didn't even know existed. A complete game-changer for our fleet operations.",
  },
  {
    initials: 'AC',
    name: 'Agricultural Cooperative',
    company: 'Southern Province, Rwanda',
    category: 'Electric Tricycles',
    rating: 5,
    text: 'The electric tricycles transformed our rural deliveries. Zero emissions, very low maintenance costs, and the Greenalytic team support has been exceptional from day one.',
  },
  {
    initials: 'EO',
    name: 'Environmental Officer',
    company: 'Government Agency',
    category: 'Analytics',
    rating: 5,
    text: 'Real-time emissions data made compliance reporting dramatically easier. Greenalytic understands the local context and regulations better than anyone we have worked with.',
  },
  {
    initials: 'JK',
    name: 'Jean Kalisa',
    company: 'Kigali Transport SACCO',
    category: 'Fleet Monitoring',
    rating: 5,
    text: 'We now have full visibility into our entire fleet emissions from one dashboard. The automated reports save our team hours every week and keep us fully compliant.',
  },
  {
    initials: 'MN',
    name: 'Marie Nzeyimana',
    company: 'Rwanda Development Board',
    category: 'IoT Dashboard',
    rating: 5,
    text: 'The IoT fleet management platform is incredibly intuitive. Our team adopted it within days and we immediately started seeing efficiency gains across our vehicle operations.',
  },
  {
    initials: 'PB',
    name: 'Patrick Bizimana',
    company: 'Northern Province Cooperative',
    category: 'Electric Tricycles',
    rating: 5,
    text: 'We deployed 3 electric tricycles for farm produce delivery. The cost savings on fuel alone paid back our investment faster than expected. Highly recommend Greenalytic.',
  },
];

const CATEGORIES = ['All', 'Fleet Monitoring', 'Electric Tricycles', 'IoT Dashboard', 'Analytics'];

const STATS = [
  { value: '100%', label: 'Client satisfaction' },
  { value: '15+', label: 'Organisations served' },
  { value: '4+', label: 'Years of trust' },
  { value: '24/7', label: 'Ongoing support' },
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

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? TESTIMONIALS : TESTIMONIALS.filter(t => t.category === active);

  return (
    <>
      <TopBar />
      <Navbar />

      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.heroLabel}>Testimonials</p>
            <h1 className={styles.heroTitle}>What our clients <span>say about us.</span></h1>
            <p className={styles.heroSub}>Don't just take our word for it — here's what organisations across Rwanda say about working with Greenalytic.</p>
          </FadeIn>
        </div>
      </div>

      <div className={styles.statsBar}>
        {STATS.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.filters}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className={styles.grid}>
            {filtered.map((t, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={styles.card}>
                  <div className={styles.quoteIcon}>"</div>
                  <Stars count={t.rating} />
                  <p className={styles.cardText}>{t.text}</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.avatar}>{t.initials}</div>
                    <div className={styles.authorInfo}>
                      <strong>{t.name}</strong>
                      <span>{t.company}</span>
                    </div>
                    <span className={styles.categoryTag}>{t.category}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.cta}>
        <FadeIn>
          <h2>Ready to join them?</h2>
          <p>Become one of our satisfied clients and start monitoring your fleet emissions today.</p>
          <div className={styles.ctaBtns}>
            <a href="/contact" className={styles.ctaWhite}>Get started</a>
            <a href="https://wa.me/250796895138" target="_blank" rel="noreferrer" className={styles.ctaOutline}>💬 WhatsApp us</a>
          </div>
        </FadeIn>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
