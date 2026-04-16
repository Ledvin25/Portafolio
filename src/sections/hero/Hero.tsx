import { profile } from '../../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <h1 className="hero-title">{profile.headline}</h1>
          <p className="hero-subtitle">{profile.subheadline}</p>
          <p className="hero-supporting">{profile.supporting}</p>

          <div className="hero-cta-grid">
            <div className="hero-meta">
              <span>{profile.location}</span>
              <span>{profile.availability}</span>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects
              </a>
              <a className="button button-secondary" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
              <a className="button button-secondary" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <figure className="hero-portrait-frame">
            <img src="/poto.webp" alt="Ledvin Leiva" className="hero-portrait" />
          </figure>
        </div>
      </div>
    </section>
  );
}
