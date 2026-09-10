import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoMark}>G</div>
          <span className={styles.logoText}>
            Green<span className={styles.logoAccent}>alytic</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className={`${styles.link} ${pathname === l.to ? styles.active : ''} ${l.highlight ? styles.mobikaLink : ''}`}
              >
                {l.label}
                {l.highlight && <span className={styles.mobikaTag}>New</span>}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/login" className={styles.loginBtn}>
              Login <i className="fas fa-arrow-right" />
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className={`${styles.mobileLink} ${pathname === l.to ? styles.mobileLinkActive : ''}`}
          >
            {l.label}
          </Link>
        ))}
        <Link to="/login" className={styles.mobileLinkCta}>
          Login →
        </Link>
      </div>
    </nav>
  );
}
