"use client"

import { useEffect, useRef, useState } from "react"
import "./Projects.css"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "AVANT GLAMPING",
      subtitle: "TO REST FOR YOU OR A NEW VENTURE FOR RENT",
      description:
        "Full-stack application built with React, Python and Flask. Features pod booking system and job application portal.",
      features: ["QUOTE YOUR POD", "JOB APPLY", "BOOKING SYSTEM"],
      image: "/projects/avant.webp",
      link: "#",
      tech: ["React", "Python", "Flask"],
    },
    {
      title: "VEL Space",
      subtitle: "First Aerospace Startup in Venezuela",
      description:
        "Responsive website developed with React and React Router showcasing architectural designs and projects.",
      features: ["RESPONSIVE DESIGN", "PORTFOLIO GALLERY", "CONTACT FORMS"],
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      tech: ["React", "React Router", "CSS3"],
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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`projects-card ${isVisible ? "animate-slide-in-scale" : "scale-element"}`}
      style={{
        animationDelay: `${300 + index * 200}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          {project.tech.map((tech, techIndex) => (
            <span key={techIndex} className="projects-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="projects-features">
          {project.features.map((feature, featureIndex) => (
            <span key={featureIndex} className="projects-feature-tag">
              {feature}
            </span>
          ))}
        </div>

        <button className="projects-button">VIEW PROJECT</button>
      </div>
    </div>
  )
}
