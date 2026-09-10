import React from 'react';
import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.inner}>
        <div className={styles.contactInfo}>
          <a href="mailto:info@greenalytic.rw">
            <i className="fas fa-envelope" /> info@greenalytic.rw
          </a>
          <a href="tel:+250796895138">
            <i className="fas fa-phone" /> +250 796 895 138
          </a>
          <span>
            <i className="fas fa-map-marker-alt" /> Kicukiro, Kigali, Rwanda
          </span>
        </div>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/greenalytic_/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://twitter.com/greenalytic" target="_blank" rel="noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://wa.me/250796895138" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
}
