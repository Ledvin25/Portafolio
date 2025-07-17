"use client"

import { useEffect, useRef, useState } from "react"
import "./Projects.css"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "PDF Chatbot",
      subtitle: "AI-powered chatbot for PDF document queries",
      description:
        "A demo project showcasing a chatbot built with OpenAI to read and answer questions from a preloaded PDF. Developed without LangChain, featuring custom chunking and query handling.",
      features: ["PDF CHUNKING", "CUSTOM QUERY HANDLING", "AI-POWERED RESPONSES"],
      image: "/projects/chat_bot.webp",
      link: "https://pdf-reader-weld.vercel.app/",
      codeLink: "https://github.com/Ledvin25/PDF-Reader",
      codePrivate: false, // Code is public
      tech: ["React", "Python", "FastAPI", "Docker", "OpenAI", "Vercel", "Render"],
    },
    {
      title: "Avant Glamping",
      subtitle: "TO REST FOR YOU OR A NEW VENTURE FOR RENT",
      description:
        "Full-stack application developed with React, Python, and Flask. Allows users to quote and purchase pods, a new and original idea for glamping.",
      features: ["QUOTE YOUR POD", "APPLY FOR JOBS", "RESERVATION SYSTEM"],
      image: "/projects/avant.webp",
      link: "https://avantglamping.com",
      codeLink: "",
      codePrivate: false, // Code is public
      tech: ["React", "Python", "Flask"],
    },
    {
      title: "VEL Space",
      subtitle: "First aerospace startup for launches in Costa Rica",
      description:
        "Responsive website created with React, React Router, CSS3, and Python. Showcases architectural designs, projects, and contact forms.",
      features: ["RESPONSIVE DESIGN", "PROJECT GALLERY", "CONTACT FORMS", "JOB APPLICATION"],
      image: "/projects/vel.webp",
      link: "https://velspacecr.com",
      codeLink: "",
      codePrivate: true, // Code is private
      tech: ["Docker", "Nginx", "React", "React Router", "CSS3", "Python", "Flask"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className={`projects-title ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}>
            Featured <span className="projects-title-accent">Projects</span>
          </h2>
          <div
            className={`projects-underline animate-delay-200 ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}
          ></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectItem({ project, isVisible, index }: { project: any; isVisible: boolean; index: number }) {
  return (
    <div
      className={`projects-card ${isVisible ? "animate-slide-in-scale" : "scale-element"}`}
      style={{
        animationDelay: `${300 + index * 200}ms`,
      }}
    >
      <div className="projects-image-container">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="projects-image" />
        <div className="projects-image-overlay"></div>
      </div>
      <div className="projects-content">
        <h3 className="projects-card-title">{project.title}</h3>
        <p className="projects-card-subtitle">{project.subtitle}</p>
        <p className="projects-card-description">{project.description}</p>

        <div className="projects-tech-tags">
          {project.tech.map((tech: string, techIndex: number) => (
            <span key={techIndex} className="projects-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="projects-features">
          {project.features.map((feature: string, featureIndex: number) => (
            <span key={featureIndex} className="projects-feature-tag">
              {feature}
            </span>
          ))}
        </div>

        <a
          className="projects-button"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault()
            window.open(project.link, "_blank", "noopener,noreferrer")
          }}
        >
          VIEW PROJECT
        </a>
        {project.codePrivate ? ( // Render a disabled button if the code is private
          <button className="projects-button projects-button-secondary disabled" disabled>
            VIEW CODE
          </button>
        ) : (
          project.codeLink && (
            <a
              className="projects-button projects-button-secondary"
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault()
                window.open(project.codeLink, "_blank", "noopener,noreferrer")
              }}
            >
              VIEW CODE
            </a>
          )
        )}
      </div>
    </div>
  )
}
