import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { profile, contact, navLinks } from '../data/portfolioData.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (event, href) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', href);
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__role">{profile.title}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
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
          <a href={`mailto:${contact.email}`} aria-label="Send an email">
            <HiOutlineMail aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
