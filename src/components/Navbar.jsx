import { useEffect, useState } from 'react';
import { FiDownload, FiSun, FiMoon } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { navLinks, profile, contact } from '../data/portfolioData.js';
import useTheme from '../hooks/useTheme.js';
import { useScrolledPast } from '../hooks/useScroll.js';
import { scrollToHash } from '../utils/motion.js';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const scrolled = useScrolledPast(8);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setOpen(false);
    scrollToHash(href);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Primary">
        <a
          href="#home"
          className="navbar__brand"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          Supriya<span>.dev</span>
        </a>

        <ul id="primary-menu" className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? 'is-active' : ''}
                aria-current={active === link.href ? 'page' : undefined}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="navbar__mobile-actions">
            <button
              type="button"
              className="navbar__theme"
              onClick={toggle}
              aria-label={
                theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
              }
            >
              {theme === 'dark' ? (
                <FiSun aria-hidden="true" />
              ) : (
                <FiMoon aria-hidden="true" />
              )}
            </button>
            <div className="navbar__socials">
              {contact.github && (
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                >
                  <FaGithub aria-hidden="true" />
                </a>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>
              )}
            </div>
            <a
              className="btn btn--primary btn--download navbar__resume"
              href={profile.resumeUrl}
              download
            >
              <FiDownload aria-hidden="true" /> Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar__toggle-box" aria-hidden="true">
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
          </span>
        </button>
      </nav>
    </header>
  );
}
