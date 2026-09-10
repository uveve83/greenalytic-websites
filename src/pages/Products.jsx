import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Footer, WhatsAppFloat } from '../components/Sections';
import useInView from '../hooks/useInView';
import styles from './Products.module.css';

const TRICYCLES = [
  {
    icon: '🛺',
    name: 'Standard Electric Cargo Tricycle',
    tagline: 'Practical electric mobility for goods transportation',
    price: '5,500,000 RWF',
    model: 'Purchase',
    color: '#7B3F00',
    applications: [
      'Transportation of agricultural produce',
      'Farm-to-market transportation',
      'Local commercial deliveries',
      'Small-business logistics',
      'Last-mile goods transportation',
    ],
    customers: ['Farmers', 'Farmer cooperatives', 'Agribusinesses', 'Produce traders', 'Food distributors', 'SMEs'],
  },
  {
    icon: '❄️',
    name: 'Refrigerated Electric Cargo Tricycle',
    tagline: 'Temperature-controlled transport for perishables',
    price: '8,500,000 RWF',
    model: 'Purchase',
    color: '#1a5e8a',
    applications: [
      'Fresh produce transportation',
      'Perishable food transportation',
      'Cold-chain delivery',
      'Farm-to-market distribution',
      'Local food distribution',
    ],
    customers: ['Agribusinesses', 'Food distributors', 'Fresh produce businesses', 'Restaurants', 'Cold-chain businesses'],
  },
  {
    icon: '🥛',
    name: 'Milk Collection Electric Cargo Tricycle',
    tagline: 'Purpose-built for dairy value chains',
    price: '9,500,000 RWF',
    model: 'Purchase',
    color: '#2e7d32',
    applications: [
      'Farm-to-collection-centre milk transport',
      'Milk collection from farmers',
      'Transportation between collection centres',
      'Dairy product distribution',
      'Cooperative milk collection',
    ],
    customers: ['Dairy farmers', 'Dairy cooperatives', 'Milk collection centres', 'Dairy processors', 'Milk distributors'],
  },
];

const MOBIKA_FEATURES = [
  { icon: '📍', title: 'Fleet Tracking & Security', desc: 'GPS tracking, trip history, geofencing, speed monitoring, unauthorized-use alerts and vehicle inactivity monitoring.' },
  { icon: '📋', title: 'Compliance Management', desc: 'Track insurance, inspection, taxes, permits, fines and document expiry dates with smart reminders before deadlines.' },
  { icon: '⚖️', title: 'Fines & Compliance Visibility', desc: 'Monitor paid and unpaid fines, outstanding obligations and compliance-related actions across your fleet.' },
  { icon: '👥', title: 'Vehicle & Operator Management', desc: 'Manage vehicle profiles, driver assignments, fleet grouping, ownership records and user roles in one place.' },
  { icon: '💳', title: 'Payment & Repayment Management', desc: 'Track daily, weekly, monthly payments, lease payments, loan repayments, outstanding balances and overdue payments.' },
  { icon: '🔔', title: 'Alerts & Notifications', desc: 'Stay ahead with alerts for compliance expiry, upcoming payments, speed violations, geofence breaches and unusual activity.' },
  { icon: '📊', title: 'Fleet Intelligence & Analytics', desc: 'Turn fleet activity into useful insights — utilization, compliance status, payment performance, reports and analytics.' },
  { icon: '🏦', title: 'Mobility Data & Financial Visibility', desc: 'Build structured operational and payment histories that can support vehicle financing, insurance and financial services.' },
];

const MOBIKA_PRICING = [
  {
    vehicle: 'Motorcycle',
    icon: '🏍️',
    device: '50,000 RWF',
    monthly: '5,000 RWF/month',
    desc: 'For motorcycle and taxi operators',
  },
  {
    vehicle: 'Car / Other Vehicle',
    icon: '🚗',
    device: '80,000 RWF',
    monthly: '10,000 RWF/month',
    desc: 'For vehicle and fleet operators',
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

export default function Products() {
  const [activeTab, setActiveTab] = useState('tricycles');
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.heroLabel}>Our products</p>
            <h1 className={styles.heroTitle}>Two core solutions. <span>One connected ecosystem.</span></h1>
            <p className={styles.heroSub}>
              Electric Cargo Tricycles for practical goods transportation, and Mobika for intelligent vehicle and fleet management — together supporting a more efficient African mobility ecosystem.
            </p>
            <div className={styles.heroTabs}>
              <button
                className={`${styles.heroTab} ${activeTab === 'tricycles' ? styles.heroTabActive : ''}`}
                onClick={() => setActiveTab('tricycles')}
              >
                🛺 Electric Cargo Tricycles
              </button>
              <button
                className={`${styles.heroTab} ${activeTab === 'mobika' ? styles.heroTabActive : ''}`}
                onClick={() => setActiveTab('mobika')}
              >
                📱 Mobika Platform
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── TRICYCLES SECTION ── */}
      {activeTab === 'tricycles' && (
        <>
          {/* Intro */}
          <section className={styles.section}>
            <div className={styles.container}>
              <FadeIn>
                <div className={styles.introBox}>
                  <p className={styles.sectionLabel}>Electric Cargo Tricycles</p>
                  <h2 className={styles.sectionTitle}>Practical electric mobility for goods transportation</h2>
                  <p className={styles.bodyText}>
                    Greenalytic Motors' electric cargo tricycles are designed to provide practical and accessible transportation for goods. Our initial market focus is agribusiness and commercial goods transportation — helping farmers, cooperatives, traders, and businesses move products between farms, collection points, markets, warehouses, and customers.
                  </p>
                </div>
              </FadeIn>

              {/* 3 tricycle cards */}
              <div className={styles.tricycleGrid}>
                {TRICYCLES.map((t, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className={styles.tricycleCard}>
                      <div className={styles.tricycleTop} style={{ borderTop: `4px solid ${t.color}` }}>
                        <div className={styles.tricycleIcon}>{t.icon}</div>
                        <div>
                          <h3>{t.name}</h3>
                          <p className={styles.tricycleTagline}>{t.tagline}</p>
                        </div>
                      </div>

                      <div className={styles.tricyclePrice}>
                        <strong>{t.price}</strong>
                        <span>{t.model}</span>
                      </div>

                      <div className={styles.tricycleSection}>
                        <p className={styles.tricycleSectionLabel}>Key applications</p>
                        <ul>
                          {t.applications.map((a, j) => (
                            <li key={j}><span className={styles.check}>✓</span> {a}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.tricycleSection}>
                        <p className={styles.tricycleSectionLabel}>Ideal customers</p>
                        <div className={styles.customerTags}>
                          {t.customers.map((c, j) => (
                            <span key={j} className={styles.customerTag}>{c}</span>
                          ))}
                        </div>
                      </div>

                      <a href="/contact" className={styles.tricycleCta}>Request a quote →</a>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Rental box */}
              <FadeIn delay={0.2}>
                <div className={styles.rentalBox}>
                  <div className={styles.rentalLeft}>
                    <span className={styles.rentalIcon}>🔄</span>
                    <div>
                      <h3>Monthly Rental Option</h3>
                      <p>Not ready to purchase outright? Access electric cargo transportation through our monthly rental — reducing the initial financial commitment while giving your business full access to the tricycle.</p>
                      <div className={styles.rentalFor}>
                        <span>✓ Businesses with limited upfront capital</span>
                        <span>✓ Seasonal agricultural activities</span>
                        <span>✓ Businesses testing electric cargo</span>
                        <span>✓ Customers who prefer monthly costs</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rentalRight}>
                    <strong>350,000 RWF</strong>
                    <span>per month</span>
                    <a href="/contact" className={styles.rentalCta}>Enquire now</a>
                  </div>
                </div>
              </FadeIn>

              {/* Pricing table */}
              <FadeIn delay={0.1}>
                <div className={styles.pricingTable}>
                  <h3>Pricing Overview</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Solution</th>
                        <th>Commercial Model</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Standard Electric Cargo Tricycle</td><td>Purchase</td><td><strong>5,500,000 RWF</strong></td></tr>
                      <tr><td>Refrigerated Electric Cargo Tricycle</td><td>Purchase</td><td><strong>8,500,000 RWF</strong></td></tr>
                      <tr><td>Milk Collection Electric Cargo Tricycle</td><td>Purchase</td><td><strong>9,500,000 RWF</strong></td></tr>
                      <tr><td>Electric Cargo Tricycle Rental</td><td>Monthly rental</td><td><strong>350,000 RWF/month</strong></td></tr>
                    </tbody>
                  </table>
                </div>
              </FadeIn>
            </div>
          </section>
        </>
      )}

      {/* ── MOBIKA SECTION ── */}
      {activeTab === 'mobika' && (
        <>
          <section className={styles.section}>
            <div className={styles.container}>

              {/* Mobika intro */}
              <FadeIn>
                <div className={styles.mobikaHero}>
                  <div className={styles.mobikaHeroText}>
                    <p className={styles.sectionLabel}>Mobika — Mobility Management Platform</p>
                    <h2 className={styles.sectionTitle}>Move Smarter. Stay Compliant. Grow Faster.</h2>
                    <p className={styles.bodyText}>
                      Mobika is Greenalytic Motors' intelligent mobility management and compliance platform designed to help vehicle owners, fleet operators, transport companies, cooperatives, and financial institutions manage vehicles and mobility operations from one platform.
                    </p>
                    <p className={styles.bodyText}>
                      Vehicle owners and fleet operators often manage critical information across different systems, spreadsheets, and manual records — making it difficult to know if vehicles are compliant, payments are up to date, or assets are secure. Mobika brings all of this together.
                    </p>
                  </div>
                  <div className={styles.mobikaHeroStats}>
                    {[
                      { label: 'GPS tracking', icon: '📍' },
                      { label: 'Compliance management', icon: '📋' },
                      { label: 'Payment monitoring', icon: '💳' },
                      { label: 'Fleet intelligence', icon: '📊' },
                    ].map((s, i) => (
                      <div key={i} className={styles.mobikaStatCard}>
                        <span>{s.icon}</span>
                        <p>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* 8 feature cards */}
              <FadeIn delay={0.1}>
                <h3 className={styles.subHeading}>Platform capabilities</h3>
              </FadeIn>
              <div className={styles.featuresGrid}>
                {MOBIKA_FEATURES.map((f, i) => (
                  <FadeIn key={i} delay={i * 0.06}>
                    <div className={styles.featureCard}>
                      <div className={styles.featureIcon}>{f.icon}</div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* GPS Pricing */}
              <FadeIn delay={0.1}>
                <h3 className={styles.subHeading}>GPS Solution & Pricing</h3>
                <p className={styles.bodyText} style={{ marginBottom: 28 }}>
                  GPS tracking is integrated into the Mobika platform. The commercial model combines a one-time GPS device & installation fee with a recurring monthly platform subscription.
                </p>
              </FadeIn>

              <div className={styles.pricingCards}>
                {MOBIKA_PRICING.map((p, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className={styles.pricingCard}>
                      <div className={styles.pricingIcon}>{p.icon}</div>
                      <h3>{p.vehicle}</h3>
                      <p className={styles.pricingDesc}>{p.desc}</p>
                      <div className={styles.pricingRow}>
                        <div>
                          <span className={styles.pricingLabel}>GPS device & installation</span>
                          <strong>{p.device} one-time</strong>
                        </div>
                        <div className={styles.pricingPlus}>+</div>
                        <div>
                          <span className={styles.pricingLabel}>Monthly subscription</span>
                          <strong>{p.monthly}</strong>
                        </div>
                      </div>
                      <a href="/contact" className={styles.pricingCta}>Get started →</a>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Full pricing table */}
              <FadeIn delay={0.1}>
                <div className={styles.pricingTable}>
                  <h3>Full Portfolio Pricing</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Product / Solution</th>
                        <th>Target Market</th>
                        <th>Model</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Standard Electric Cargo Tricycle</td><td>Agribusiness & commercial users</td><td>Purchase</td><td><strong>5,500,000 RWF</strong></td></tr>
                      <tr><td>Refrigerated Electric Cargo Tricycle</td><td>Food & cold-chain</td><td>Purchase</td><td><strong>8,500,000 RWF</strong></td></tr>
                      <tr><td>Milk Collection Tricycle</td><td>Dairy farmers & cooperatives</td><td>Purchase</td><td><strong>9,500,000 RWF</strong></td></tr>
                      <tr><td>Tricycle Rental</td><td>Farmers, businesses & cooperatives</td><td>Monthly rental</td><td><strong>350,000 RWF/month</strong></td></tr>
                      <tr><td>Mobika — Motorcycle GPS</td><td>Motorcycle & taxi operators</td><td>Device + subscription</td><td><strong>50,000 RWF + 5,000 RWF/month</strong></td></tr>
                      <tr><td>Mobika — Car / Other Vehicle GPS</td><td>Vehicle & fleet operators</td><td>Device + subscription</td><td><strong>80,000 RWF + 10,000 RWF/month</strong></td></tr>
                      <tr><td>Mobika — Fleet Platform</td><td>Fleet owners, transport cos, cooperatives</td><td>Platform subscription</td><td><strong>Contact us for pricing</strong></td></tr>
                    </tbody>
                  </table>
                </div>
              </FadeIn>
            </div>
          </section>
        </>
      )}

      {/* How the two solutions connect */}
      <div className={styles.connectBanner}>
        <FadeIn>
          <p className={styles.connectLabel}>How our two solutions connect</p>
          <div className={styles.connectFlow}>
            <div className={styles.connectCard}>
              <span>🛺</span>
              <strong>Electric Cargo Tricycles</strong>
              <p>Move Goods</p>
            </div>
            <div className={styles.connectArrow}>+</div>
            <div className={styles.connectCard}>
              <span>📱</span>
              <strong>Mobika Platform</strong>
              <p>Monitor & Manage Vehicles</p>
            </div>
            <div className={styles.connectArrow}>=</div>
            <div className={`${styles.connectCard} ${styles.connectCardAccent}`}>
              <span>🌍</span>
              <strong>Connected Mobility</strong>
              <p>Move → Monitor → Manage → Secure → Comply → Grow</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <FadeIn>
          <h2>Ready to get started?</h2>
          <p>Contact our team to discuss the right solution for your business — whether you need electric cargo transport, fleet management, or both.</p>
          <div className={styles.ctaBtns}>
            <a href="/contact" className={styles.ctaWhite}>Request a quote</a>
            <a href="https://wa.me/250796895138" target="_blank" rel="noreferrer" className={styles.ctaOutline}>💬 WhatsApp us</a>
          </div>
        </FadeIn>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
