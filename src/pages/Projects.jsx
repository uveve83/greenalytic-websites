import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Footer, WhatsAppFloat } from '../components/Sections';
import useInView from '../hooks/useInView';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    category: 'Clean Transport|Agritech',
    title: 'Electric Cargo Tricycles for Agricultural Produce',
    desc: 'Greenalytic designs and deploys electric cargo tricycles tailored for transporting agricultural produce in rural and peri-urban areas. Features long-range battery (up to 250 km per charge), multi-purpose compartments, low operational cost, and adaptation for rural terrain.',
    tags: ['Electric', 'Agriculture', 'Clean Transport'],
    status: 'ONGOING',
    year: '2024',
    images: ['/img/rural3.jpg', '/img/rural2.jpg', '/img/rural1.jpg'],
  },
  {
    category: 'Environmental Compliance|automative services',
    title: 'Vehicle Emissions Testing & Repair Services',
    desc: 'Greenalytic provides professional emissions testing and repair services to ensure vehicles meet environmental standards. Includes exhaust emissions testing (NOx, PM, CO levels), diagnostics for engine-related pollution issues, repair and tuning to reduce emissions, and compliance support for regulatory inspections.',
    tags: ['Testing', 'Repair', 'Compliance'],
    status: 'ONGOING',
    year: '2024',
    images: ['/img/four.jpg'],
  },
  {
    category: 'Mobility Tech',
    title: 'Vehicle Fleet Management Solution',
    desc: 'A smart digital platform that enables real-time tracking and management of vehicles and fleets. Features GPS tracking and route playback, revenue and usage monitoring, insurance and tax tracking, remote vehicle control (engine cut-off), and reporting analytics dashboard.',
    tags: ['IoT', 'SaaS', 'Fleet Management'],
    status: 'ONGOING',
    year: '2024',
    images: ['/img/one.jpg'],
  },
  {
    category: 'Embedded Systems',
    title: 'IoT Systems Development',
    desc: 'Greenalytic develops customized IoT and embedded systems for environmental monitoring, mobility, and industrial applications. Capabilities include sensor integration (air quality, energy, vehicle data), real-time data transmission and dashboards, hardware and firmware development, and scalable system design.',
    tags: ['IoT', 'Embedded', 'Smart Technology'],
    status: 'ONGOING',
    year: '2024',
    images: ['/img/three.jpg'],
  },
];

// Auto-slide carousel component with status badge
function AutoSlideCarousel({ images, title, status }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className={styles.cardImg} style={{ backgroundImage: `url(${images[0]})` }}>
        <span className={`${styles.status} ${status === 'ONGOING' ? styles.statusOngoing : styles.statusDone}`}>
          {status}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.slideContainer}>
      <div className={styles.cardImg} style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <span className={`${styles.status} ${status === 'ONGOING' ? styles.statusOngoing : styles.statusDone}`}>
          {status}
        </span>
        <div className={styles.slideDots}>
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.slideDot} ${idx === currentIndex ? styles.slideDotActive : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const CATEGORIES = ['All', ...new Set(PROJECTS.map(p => p.category))];

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

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <>
      <TopBar />
      <Navbar />

      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.heroLabel}>Our projects</p>
            <h1 className={styles.heroTitle}>Real impact, <span>real results.</span></h1>
            <p className={styles.heroSub}>From electric cargo tricycles to IoT systems — here's what we're building across Rwanda.</p>
          </FadeIn>
        </div>
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
            {filtered.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={styles.card}>
                  <AutoSlideCarousel images={p.images} title={p.title} status={p.status} />
                  <div className={styles.cardBody}>
                    <p className={styles.cardCategory}>{p.category} · {p.year}</p>
                    <h3>{p.title}</h3>
                    <p className={styles.cardDesc}>{p.desc}</p>
                    <div className={styles.tags}>
                      {p.tags.map((t, j) => (
                        <span key={j} className={styles.tag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.cta}>
        <FadeIn>
          <h2>Have a project in mind?</h2>
          <p>Let's work together to build clean mobility solutions for your organisation.</p>
          <div className={styles.ctaBtns}>
            <a href="/contact" className={styles.ctaWhite}>Start a conversation</a>
            <a href="https://wa.me/250796895138" target="_blank" rel="noreferrer" className={styles.ctaOutline}>💬 WhatsApp us</a>
          </div>
        </FadeIn>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}