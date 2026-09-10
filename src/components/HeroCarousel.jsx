import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SLIDES, STATS } from '../data';
import styles from './HeroCarousel.module.css';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(next, 5800);
    return () => clearInterval(timerRef.current);
  }, [next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // Touch / swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  const slide = SLIDES[current];

  return (
    <>
      {/* ── CAROUSEL ── */}
      <div
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background with ken-burns */}
        <div
          key={`bg-${animKey}`}
          className={styles.bg}
          style={{ backgroundImage: `url(${slide.bg})` }}
        />

        {/* Dark overlay */}
        <div className={styles.overlay} />

        {/* Slide content */}
        <div key={`content-${animKey}`} className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            {slide.badge}
          </div>

          <h1 className={styles.headline}>
            {slide.lines.map((line, i) => (
              <span
                key={i}
                className={i === slide.accentLine ? styles.accentLine : styles.normalLine}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                {line}
                {i < slide.lines.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className={styles.sub} style={{ animationDelay: '0.32s' }}>
            {slide.sub}
          </p>

          <div className={styles.btns} style={{ animationDelay: '0.44s' }}>
            <Link to={slide.cta1.to} className={styles.btnPrimary}>
              {slide.cta1.label}
            </Link>
            <Link to={slide.cta2.to} className={styles.btnOutline}>
              {slide.cta2.icon && <i className={`fas ${slide.cta2.icon}`} />}
              {slide.cta2.label}
            </Link>
          </div>
        </div>

        {/* Arrows */}
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
          <i className="fas fa-chevron-left" />
        </button>
        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
          <i className="fas fa-chevron-right" />
        </button>

        {/* Dots */}
        <div className={styles.dots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot2} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className={styles.counter}>
          {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className={styles.statsBar}>
        {STATS.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
