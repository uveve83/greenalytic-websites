import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

export default function Login() {
  const [tab, setTab] = useState('admin');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.page}>

      {/* Top bar */}
      <div className={styles.topbar}>
        <div className={styles.brand}>
          <div className={styles.logoMark}>G</div>
          <span>Green<span className={styles.accent}>alytic</span></span>
        </div>
        <Link to="/" className={styles.backBtn}>
          ← Back to website
        </Link>
      </div>

      {/* Main */}
      <div className={styles.wrapper}>
        <div className={styles.card}>

          {/* Header */}
          <div className={styles.cardHeader}>
            <div className={styles.cardLogoMark}>G</div>
            <h1>Welcome back</h1>
            <p>Sign in to your Greenalytic account</p>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${tab === 'admin' ? styles.tabActive : ''}`}
              onClick={() => setTab('admin')}
            >
              🛡 Admin
            </button>
            <button
              className={`${styles.tab} ${tab === 'user' ? styles.tabActive : ''}`}
              onClick={() => setTab('user')}
            >
              👤 User
            </button>
          </div>

          {/* Form */}
          <form action="/access/config.php" method="POST" className={styles.form}>
            <div className={styles.formGroup}>
              <label>Phone number</label>
              <div className={styles.inputWrap}>
                <i className={styles.inputIcon}>📞</i>
                <input
                  type="text"
                  name="phone"
                  placeholder="+250 7XX XXX XXX"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Password</label>
              <div className={styles.inputWrap}>
                <i className={styles.inputIcon}>🔒</i>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className={styles.forgot}>
              <a href="#">Forgot password?</a>
            </div>

            <button
              type="submit"
              name={tab}
              className={styles.submitBtn}
            >
              Sign in as {tab === 'admin' ? 'Admin' : 'User'}
            </button>
          </form>

          {/* Divider */}
          <div className={styles.divider}><span>or</span></div>

          {/* Guest check */}
          <button
            className={styles.guestBtn}
            onClick={() => setShowModal(true)}
          >
            🚗 Check device measurements without login
          </button>

          <p className={styles.contactLine}>
            Need access? <a href="mailto:info@greenalytic.rw">Contact our team</a>
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span>🚗 Check device</span>
              <button onClick={() => setShowModal(false)} className={styles.modalClose}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <p>Enter your car plate or device serial number</p>
              <form action="/access/config.php" method="POST">
                <input
                  type="search"
                  name="value"
                  placeholder="e.g. RAB 123A or GNA-00001"
                  required
                  className={styles.modalInput}
                />
                <div className={styles.modalBtns}>
                  <button type="submit" name="check" className={styles.modalSubmit}>
                    Check
                  </button>
                  <button
                    type="button"
                    className={styles.modalCancel}
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
