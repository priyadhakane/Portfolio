import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { projects } from '../data/portfolioData.js';
import './Projects.css';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Projects"
      subtitle="Academic and personal projects where I applied web development and programming skills."
      alt
    >
      <div className="projects__grid">
        {projects.map((project, index) => (
          <Reveal
            as="article"
            key={project.name}
            className="projects__card card"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <div className="projects__top">
              <span className="badge">{project.tag}</span>
            </div>

            <h3 className="projects__name">{project.name}</h3>
            <p className="projects__desc">{project.description}</p>

            <p className="projects__problem">
              <strong>Problem it solves:</strong> {project.problem}
            </p>

            <div className="projects__features">
              <h4>Key features</h4>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            {project.tech.length > 0 && (
              <div className="projects__tech">
                <h4>Tech stack</h4>
                <ul className="chip-list">
                  {project.tech.map((tech) => (
                    <li key={tech} className="badge">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(project.github || project.demo) && (
              <div className="projects__actions">
                {project.github && (
                  <a
                    className="btn btn--outline"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FiGithub aria-hidden="true" /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    className="btn btn--primary"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FiExternalLink aria-hidden="true" /> Live Demo
                  </a>
                )}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
