"use client"

import { useEffect, useRef, useState } from "react"
import "./About.css"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const technologies = [
    { name: "HTML5", img: "/tech/html5.webp" },
    { name: "CSS3", img: "/tech/css3.webp" },
    { name: "React", img: "/tech/react.webp" },
    { name: "Python", img: "/tech/python.webp" },
    { name: "C++", img: "/tech/c.webp" },
    { name: "Node.js", img: "/tech/nodejs.webp" },
    { name: "PostgreSQL", img: "/tech/postgresql.webp" },
    { name: "MySQL", img: "/tech/mysql.webp" },
    { name: "SQL", img: "/tech/sql.webp" },
    { name: "MongoDB", img: "/tech/mongodb.webp" },
    { name: "Docker", img: "/tech/docker.webp" },
  ]

  const education = [
    {
      degree: "Computer Engineering",
      institution: "Tecnológico de Costa Rica",
      period: "2023 - 2026",
    },
    {
      degree: "Physics",
      institution: "Universidad de Costa Rica",
      period: "2024 - 2027",
    },
    {
      degree: "Math",
      institution: "Universidad de Costa Rica",
      period: "2023 - 2026",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current)
          }
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
    <section ref={sectionRef} id="about" className="about-section">
      <div className="about-container">
        {/* About Section */}
        <div className="about-content-block">
          <h2 className={`about-section-title ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}>About</h2>
          <p className={`about-description animate-delay-200 ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}>
            As a <span className="about-highlight">Software Engineer</span>, I specialize in developing scalable and
            efficient software solutions, with expertise in backend development, API design, and full-stack web
            applications. Committed to continuous learning, I thrive in dynamic, collaborative environments.
          </p>
        </div>

        {/* Technologies Section */}
        <div className="about-content-block">
          <h2
            className={`about-section-title ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}
          >
            Technologies
          </h2>
          <div className="about-tech-grid">
            {technologies.map((tech: { name: string; img: string }, index: number) => (
              <div
                key={index}
                className={`about-tech-item ${isVisible ? "animate-slide-in-scale" : "scale-element"}`}
                style={{
                  animationDelay: `${400 + index * 100}ms`,
                }}
              >
                <span className="about-tech-icon">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    loading="lazy"
                    style={{ width: 40, height: 40 }}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2
            className={`about-section-title animate-delay-500 ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}
          >
            Education
          </h2>
          <div className="about-education-grid">
            {education.map((edu: { degree: string; institution: string; period: string }, index: number) => (
              <div
                key={index}
                className={`about-education-item ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <div className="about-education-header">
                  <div className="about-education-dot"></div>
                  <h3 className="about-education-degree">{edu.degree}</h3>
                </div>
                <p className="about-education-institution">{edu.institution}</p>
                <p className="about-education-period">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
