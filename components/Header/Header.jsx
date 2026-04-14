import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>Portfolio</span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/projects" className="nav-link">Projects</a></li>
          <li><a href="/links" className="nav-link">Links</a></li>
          <li><a href="/faq" className="nav-link">FAQ</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <button className="cta-button">Work With Us</button>
    </header>
  );
};

export default Header;