// Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm Ledvin!</p>
          <h1 className="hero-title">SOFTWARE ENGINEER</h1>
          <div className="hero-buttons">
            <button className="btn btn-resume" onClick={openResume}>Resume</button>
            <button className="btn btn-portfolio" onClick={scrollToProjects}>Portafolio</button>
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
