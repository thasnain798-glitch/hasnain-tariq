import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-description">
          I am Hasnain Tariq, a web designer, coder, graphic designer, and automation expert.
        </p>
        <button className="hero-cta">Explore My Work</button>
      </div>
    </section>
  );
};

export default Hero;