"use client"

import { useEffect, useRef, useState } from "react"
import "./Contact.css"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className={`contact-title ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}>
            Get In <span className="contact-title-accent">Touch</span>
          </h2>
          <div
            className={`contact-underline animate-delay-200 ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}
          ></div>
        </div>

        <div className="contact-content-wrapper">
          <div className={`contact-card animate-delay-300 ${isVisible ? "animate-slide-in-scale" : "scale-element"}`}>
            <div className="contact-content">
              <div className={`contact-item animate-delay-400 ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}>
                <div className="contact-icon">
                  <svg className="contact-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a href="mailto:ledvin25@hotmail.com" className="contact-link">
                  ledvin25@hotmail.com
                </a>
              </div>

              <div className={`contact-item animate-delay-500 ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}>
                <div className="contact-icon">
                  <svg className="contact-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="contact-text">Heredia - Costa Rica</span>
              </div>

              <div className={`contact-cta animate-delay-600 ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}>
                <p className="contact-description">Let's build something amazing together!</p>
                <a
                  className="contact-button"
                  href="http://wa.me/+447521647235"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`contact-footer animate-delay-700 ${isVisible ? "animate-fade-in-up" : "fade-in-element"}`}>
          <p className="contact-footer-text">
            © 2025, <span className="contact-footer-highlight">Ledvin Leiva</span> - Crafted with passion
          </p>
        </div>
      </div>
    </section>
  )
}
