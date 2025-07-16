"use client"

import { useEffect, useState } from "react"
import "./Hero.css"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="hero-section">
      {/* Animated background elements */}
      <div className="hero-background-elements">
        <div className="hero-floating-dot hero-floating-dot-1"></div>
        <div className="hero-floating-dot hero-floating-dot-2"></div>
        <div className="hero-floating-dot hero-floating-dot-3"></div>
        <div className="hero-floating-dot hero-floating-dot-4"></div>
        <div className="hero-floating-dot hero-floating-dot-5"></div>
        <div className="hero-floating-dot hero-floating-dot-6"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className={`hero-title ${isVisible ? "animate-fade-in-left" : "fade-in-left-element"}`}>
              Hi, I'm <span className="hero-title-accent">Ledvin!</span>
            </h1>
            <h2
              className={`hero-subtitle animate-delay-300 ${
                isVisible ? "animate-fade-in-left" : "fade-in-left-element"
              }`}
            >
              SOFTWARE ENGINEER
            </h2>
            <div className={`hero-buttons animate-delay-500 ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}>
              <a
                className="hero-button hero-button-primary"
                href="https://ledvin.dev/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <button
                className="hero-button hero-button-secondary"
                onClick={() => {
                  const section = document.getElementById("projects");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Portfolio
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div
              className={`hero-image-container animate-delay-400 ${
                isVisible ? "animate-fade-in-right" : "fade-in-right-element"
              }`}
            >
              <img src="/poto.webp" alt="Ledvin Leiva" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
