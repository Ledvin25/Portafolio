// Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm Ledvin!</p>
          <h1 className="hero-title">SOFTWARE ENGINEER</h1>
          <div className="hero-buttons">
            <button className="btn btn-resume">Resume</button>
            <button className="btn btn-portfolio">Portafolio</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/poto.webp"
            alt="Ledvin"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
