import { aboutCopy, education, technologies } from '../../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <p className="eyebrow">About</p>
        <h2 className="section-title">{aboutCopy.title}</h2>
        <p className="section-copy">{aboutCopy.description}</p>

        <div className="about-grid">
          <article className="about-panel">
            <h3>Execution approach</h3>
            <ol>
              {aboutCopy.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>

          <article className="about-panel">
            <h3>Core stack</h3>
            <ul className="about-tech-list">
              {technologies.map((tech) => (
                <li key={tech.name}>
                  {tech.icon && <img src={tech.icon} alt={tech.name} loading="lazy" />}
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>

            <h4>Education</h4>
            <ul className="about-education-list">
              {education.map((item) => (
                <li key={`${item.degree}-${item.period}`}>
                  <strong>{item.degree}</strong>
                  <span>{item.institution}</span>
                  <span>{item.period}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
