import { profile } from '../../data/portfolio';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Available for interviews and technical conversations</h2>
          <p className="section-copy">
            I am open to roles where practical software delivery matters: building, deploying and maintaining real systems with clear engineering ownership.
          </p>
        </div>

        <div className="contact-block">
          <p>
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p>
            <span>Role focus</span>
            <strong>{profile.role}</strong>
          </p>
          <p>
            <span>Location</span>
            <strong>{profile.location}</strong>
          </p>
          <p>
            <span>Availability</span>
            <strong>{profile.availability}</strong>
          </p>

          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}?subject=Interview%20Opportunity`}>
              Contact
            </a>
            <a className="button button-secondary" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              View CV
            </a>
            <a className="button button-secondary" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="button button-secondary" href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
