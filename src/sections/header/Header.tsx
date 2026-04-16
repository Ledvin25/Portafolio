import { useState } from 'react';
import { navItems, profile } from '../../data/portfolio';
import './Header.css';

function scrollToSection(sectionId: string, closeMenu?: () => void): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  closeMenu?.();
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-section">
      <div className="container header-row">
        <button className="header-brand" onClick={() => scrollToSection('home')}>
          {profile.name}
        </button>

        <nav className="header-nav desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className="header-link">
              {item.label}
            </button>
          ))}
        </nav>

        <a className="button button-secondary header-cv" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
          CV
        </a>

        <button className="header-menu-toggle" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
          Menu
        </button>
      </div>

      {menuOpen && (
        <div className="header-mobile">
          <div className="container header-mobile-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, () => setMenuOpen(false))}
                className="header-link"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
