import { FiDownload, FiArrowRight, FiBriefcase } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { profile, contact } from '../data/portfolioData.js';
import './Hero.css';

const heroSkills = ['Java', 'Spring Boot', 'Python', 'Django', 'JavaScript', 'SQL'];

export default function Hero() {
  const scrollTo = (href) => (event) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', href);
  };

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">Hi, I&rsquo;m</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.title}</p>
          <p className="hero__summary">{profile.tagline}</p>

          <ul className="hero__tech" aria-label="Core technologies">
            {heroSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects" onClick={scrollTo('#projects')}>
              View My Work <FiArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn--outline" href={profile.resumeUrl} download>
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

        <aside className="hero__card" aria-hidden="true">
          <div className="hero__avatar">{profile.initials}</div>
          <p className="hero__card-name">{profile.name}</p>
          <p className="hero__card-role">B.E. Computer Engineering</p>
          <p className="hero__card-loc">
            <FiBriefcase /> Software Engineer Intern, LiteCode Software
          </p>
          <div className="hero__card-stats">
            <div>
              <span>B.E.</span>
              <small>2023 – 2026</small>
            </div>
            <div>
              <span>83.88%</span>
              <small>Degree aggregate</small>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
