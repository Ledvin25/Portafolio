import { projects, type Project } from '../../data/portfolio';
import './Projects.css';

const mainProjects = projects.filter((project) => project.tier === 'main');
const secondaryProjects = projects.filter((project) => project.tier === 'secondary');
const otherProjects = projects.filter((project) => project.tier === 'other');

function ProjectCard({
  title,
  tier,
  image,
  imagePosition,
  summary,
  problem,
  built,
  live,
  reliability,
  stack,
  ctaLabel,
  ctaUrl,
  codeLabel,
  codeUrl,
  note,
}: Project) {
  const tierLabel = tier === 'main' ? 'Main case' : tier === 'secondary' ? 'Secondary case' : 'Other case';

  return (
    <article className={`projects-card projects-card-${tier}`}>
      <div className="projects-image-shell">
        <span className="projects-tier-chip">{tierLabel}</span>
        <span className="projects-image-overlay" aria-hidden="true" />
        {image ? (
          <img
            src={image}
            alt={title}
            className="projects-image"
            style={{ objectPosition: imagePosition }}
            loading="lazy"
          />
        ) : (
          <div className="projects-image-placeholder">
            <span>{title}</span>
          </div>
        )}
      </div>

      <div className="projects-content">
        <h3>{title}</h3>
        <p className="projects-summary">{summary}</p>

        <div className="projects-case-grid">
          <p>
            <strong>Problem</strong>
            {problem}
          </p>
          <p>
            <strong>Built</strong>
            {built}
          </p>
          <p>
            <strong>Running state</strong>
            {live}
          </p>
          <p>
            <strong>Reliability signal</strong>
            {reliability}
          </p>
        </div>

        <p className="projects-stack">{stack.join(' | ')}</p>
        {note && <p className="projects-note">{note}</p>}

        {(ctaUrl || (codeLabel && codeUrl)) && (
          <div className="projects-actions">
            {ctaUrl && (
              <a className="button button-primary" href={ctaUrl} target="_blank" rel="noopener noreferrer">
                {ctaLabel}
              </a>
            )}
            {codeLabel && codeUrl && (
              <a className="button button-secondary" href={codeUrl} target="_blank" rel="noopener noreferrer">
                {codeLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function ProjectGroup({ title, items }: { title: string; items: Project[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="projects-group">
      <h3 className="projects-group-title">{title}</h3>
      <div className="projects-grid">
        {items.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Case-driven work, not just screenshots</h2>
        <p className="section-copy">
          Selected projects focused on practical implementation, functional delivery and reliable operation in real contexts.
        </p>

        <ProjectGroup title="Main projects" items={mainProjects} />
        <ProjectGroup title="Secondary projects" items={secondaryProjects} />
        <ProjectGroup title="Other" items={otherProjects} />
      </div>
    </section>
  );
}
