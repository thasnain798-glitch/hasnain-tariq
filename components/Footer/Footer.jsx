import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span>Portfolio</span>
        </div>
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/projects" className="footer-link">Projects</a></li>
            <li><a href="/links" className="footer-link">Links</a></li>
            <li><a href="/faq" className="footer-link">FAQ</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </nav>
        <div className="footer-contact">
          <p>hasnain@example.com</p>
        </div>
        <div className="social-icons">
          <div className="social-icon">FB</div>
          <div className="social-icon">TW</div>
          <div className="social-icon">IG</div>
          <div className="social-icon">LI</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;