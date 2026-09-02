import { FiArrowRight, FiDownload, FiPhone, FiAward } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { profile, contact } from '../data/portfolioData.js';
import { scrollToHash } from '../utils/motion.js';
import RotatingText from './RotatingText.jsx';
import './Hero.css';

const heroSkills = ['Java', 'Spring Boot', 'Python', 'Django', 'JavaScript', 'SQL'];

export default function Hero() {
  const goTo = (href) => (event) => {
    event.preventDefault();
    scrollToHash(href);
  };

  return (
    <section id="home" className="hero">
      <span className="blob blob--violet hero__blob hero__blob--1" aria-hidden="true" />
      <span className="blob blob--pink hero__blob hero__blob--2" aria-hidden="true" />

      <div className="container hero__inner">
        <p className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          Available for Opportunities
        </p>

        <h1 className="hero__name">{profile.name}</h1>

        <p className="hero__role">
          <RotatingText items={profile.roles} />
        </p>

        <p className="hero__summary">{profile.tagline}</p>

        <ul className="hero__tech" aria-label="Core technologies">
          {heroSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects" onClick={goTo('#projects')}>
            View My Work <FiArrowRight aria-hidden="true" />
          </a>
          <a
            className="btn btn--outline btn--download"
            href={profile.resumeUrl}
            download
          >
            <FiDownload aria-hidden="true" /> Download Resume
          </a>
        </div>

        <div className="hero__socials">
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
          <a href={`mailto:${contact.email}`} aria-label="Send an email">
            <HiOutlineMail aria-hidden="true" />
          </a>
        </div>

        <ul className="hero__pills" aria-label="Quick facts">
          <li>
            <FiPhone aria-hidden="true" /> {contact.phone}
          </li>
          <li>
            <FiAward aria-hidden="true" /> B.E. Computer Engineering &middot; 83.88%
          </li>
        </ul>
      </div>
    </section>
  );
}
