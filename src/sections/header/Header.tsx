"use client"

import { useState } from "react"
import "./Header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header-section">
      <nav className="header-nav-container">
        <div className="header-nav-content">
          <div>
            <span className="header-logo">
              Led<span className="header-logo-accent">vin</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="header-nav-desktop">
            <div className="header-nav-links">
              <button onClick={() => scrollToSection("home")} className="header-nav-button">
                HOME
                <span className="header-nav-underline"></span>
              </button>
              <button onClick={() => scrollToSection("about")} className="header-nav-button">
                ABOUT ME
                <span className="header-nav-underline"></span>
              </button>
              <button onClick={() => scrollToSection("projects")} className="header-nav-button">
                PROJECTS
                <span className="header-nav-underline"></span>
              </button>
              <button onClick={() => scrollToSection("contact")} className="header-nav-button">
                CONTACT
                <span className="header-nav-underline"></span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="header-mobile-menu-button">
              <svg className="header-mobile-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="header-mobile-menu">
            <button onClick={() => scrollToSection("home")} className="header-nav-button">
              HOME
            </button>
            <button onClick={() => scrollToSection("about")} className="header-nav-button">
              ABOUT ME
            </button>
            <button onClick={() => scrollToSection("projects")} className="header-nav-button">
              PROJECTS
            </button>
            <button onClick={() => scrollToSection("contact")} className="header-nav-button">
              CONTACT
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
