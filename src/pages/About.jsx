import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Footer, WhatsAppFloat } from '../components/Sections';
import useInView from '../hooks/useInView';
import styles from './About.module.css';

const TEAM = [
  { 
    img: '/images/founder1.jpg', 
    name: 'Tuyizere Emmanuel', 
    role: 'CEO & Founder',
    description: 'Leading Greenalytic Motors with vision for zero-emission mobility in Rwanda. Oversees strategic direction, partnerships, and company growth.'
  },
  { 
    img: '/images/aimee.jpg', 
    name: 'Niyigena Aimee', 
    role: 'Business Development Officer',
    description: 'Drives partnerships, client acquisition, and market expansion. Connects fleet operators with Greenalytic\'s emissions monitoring solutions.'
  },
  { 
    img: '/images/eric.jpg', 
    name: 'Ndayambaje Eric', 
    role: 'Embedded Systems Engineer',
    description: 'Embedded Systems Engineer handling PCB design, firmware testing, hardware integration, field deployment, technical training, and cross-functional collaboration.'
  },
  { 
    img: '/images/kalisa.jpg', 
    name: 'Dr.Kalisa Egide', 
    role: 'Environmental Research Advisor',
    description: 'Provides scientific guidance on air quality monitoring and climate change adaptation. Advises on environmental health impact assessment and policy development.'
  },
  { 
    img: '/images/innocent.jpg', 
    name: 'Dr. Innocent Nkurikiyimfura', 
    role: 'Climate Innovation Advisor',
    description: 'Guides sustainable technology development and renewable energy integration. Advises on climate-resilient innovations and greenhouse gas inventory methodologies.'
  },
];

const VALUES = [
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'We design cutting-edge clean mobility solutions that suit local contexts and address real-world African challenges.',
  },
  {
    icon: '🌍',
    title: 'Impact',
    desc: 'We aim for real change by empowering communities through green transport solutions that make a measurable difference.',
  },
  {
    icon: '♻️',
    title: 'Sustainability',
    desc: 'Our technologies are built for long-term ecological and economic resilience across African markets.',
  },
  {
    icon: '🤝',
    title: 'Partnership',
    desc: 'We work closely with governments, cooperatives and institutions to deliver solutions that last beyond a project.',
  },
];

const MILESTONES = [
  { year: '2022', event: 'Greenalytic Motors Ltd founded in Kigali, Rwanda' },
  { year: '2022', event: 'First emissions monitoring device installed on a fleet vehicle' },
  { year: '2023', event: 'Partnered with NCST Rwanda and 250 Startups' },
  { year: '2023', event: 'Launched first electric cargo tricycle prototype' },
  { year: '2024', event: 'Reached 15+ strategic partners across Rwanda' },
  { year: '2025', event: 'Expanded IoT fleet management to rural cooperatives' },
];

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.heroLabel}>About us</p>
            <h1 className={styles.heroTitle}>
              Driving change through<br />
              <span>innovation</span>
            </h1>
            <p className={styles.heroSub}>
              Greenalytic Motors Ltd is a Rwanda-based cleantech company established in 2022,
              focused on reducing air pollution in African cities and rural areas.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── MISSION (Fixed - removed duplicate sentence) ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <FadeIn>
              <div className={styles.missionText}>
                <p className={styles.sectionLabel}>Our mission</p>
                <h2 className={styles.sectionTitle}>Built in Rwanda, designed for Africa</h2>
                <p className={styles.bodyText}>
                  We combine IoT sensors, real-time data analytics, and electric vehicle innovation
                  to give fleet owners, government agencies, and cooperatives the tools they need
                  to monitor, manage, and reduce emissions.
                </p>
                <p className={styles.bodyText}>
                  All sectors of Rwandan society value and undertake sound environmental management
                  and rational use of natural resources — and we are here to make that easier.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className={styles.statsBox}>
                {[
                  { value: '2022', label: 'Year founded' },
                  { value: '15+', label: 'Strategic partners' },
                  { value: '100%', label: 'Local engineering' },
                  { value: '24/7', label: 'Real-time monitoring' },
                ].map((s, i) => (
                  <div key={i} className={styles.statCard}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>What drives us</p>
              <h2 className={styles.sectionTitle}>Our core values</h2>
              <p className={styles.sectionSub}>
                Our values guide every decision we make and every solution we build.
              </p>
            </div>
          </FadeIn>
          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>Our journey</p>
              <h2 className={styles.sectionTitle}>Key milestones</h2>
            </div>
          </FadeIn>
          <div className={styles.timeline}>
            {MILESTONES.map((m, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{m.year}</div>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineEvent}>{m.event}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM (Fixed - with descriptions) ── */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <FadeIn>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>Our people</p>
              <h2 className={styles.sectionTitle}>Meet the team</h2>
              <p className={styles.sectionSub}>
                A diverse team of engineers, developers, and sustainability experts working
                together to transform African mobility.
              </p>
            </div>
          </FadeIn>
          <div className={styles.teamGrid}>
            {TEAM.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={styles.teamCard}>
                  <img src={t.img} alt={t.name} className={styles.teamAvatar}
                    onError={e => { e.target.style.background='var(--green-pale)'; e.target.style.minHeight='200px'; }} />
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                  <p className={styles.teamDescription}>{t.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <FadeIn>
        <div className={styles.cta}>
          <h2>Want to work with us?</h2>
          <p>Join Rwanda's leading clean mobility platform and help drive Africa toward a greener future.</p>
          <div className={styles.ctaBtns}>
            <a href="/contact" className={styles.ctaBtnWhite}>Contact us</a>
            <a href="https://wa.me/250796895138" target="_blank" rel="noreferrer" className={styles.ctaBtnOutline}>
              💬 WhatsApp us
            </a>
          </div>
        </div>
      </FadeIn>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}