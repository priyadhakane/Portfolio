import { useState } from 'react';
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
  FiGrid,
  FiList,
  FiFileText,
  FiMapPin,
  FiShoppingCart,
  FiLayers,
  FiTruck,
} from 'react-icons/fi';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { projects } from '../data/portfolioData.js';
import './Projects.css';

const projectIcons = {
  'BillBook ERP System': <FiFileText aria-hidden="true" />,
  'Places Explore – Jharkhand Tourism': <FiMapPin aria-hidden="true" />,
  'E-Commerce Website (Fruits & Vegetables)': <FiShoppingCart aria-hidden="true" />,
  'ERP Management System': <FiLayers aria-hidden="true" />,
  'Driving School Data Management System': <FiTruck aria-hidden="true" />,
};

export default function Projects() {
  const [view, setView] = useState('grid');

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Projects"
      subtitle="Academic, group and internship projects where I applied these skills."
      alt
    >
      <div className="projects__toolbar" role="group" aria-label="Project layout">
        <button
          type="button"
          className={`projects__view ${view === 'grid' ? 'is-active' : ''}`}
          aria-pressed={view === 'grid'}
          onClick={() => setView('grid')}
        >
          <FiGrid aria-hidden="true" /> Grid
        </button>
        <button
          type="button"
          className={`projects__view ${view === 'list' ? 'is-active' : ''}`}
          aria-pressed={view === 'list'}
          onClick={() => setView('list')}
        >
          <FiList aria-hidden="true" /> List
        </button>
      </div>

      <div className={`projects__grid projects__grid--${view}`}>
        {projects.map((project, index) => {
          const hasLinks = Boolean(project.github || project.demo);
          return (
            <Reveal
              as="article"
              key={project.name}
              className="projects__card"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="projects__head" aria-hidden="true">
                <span className="projects__icon">
                  {projectIcons[project.name] || <FiLayers />}
                </span>
              </div>

              <div className="projects__body">
                <span className="badge projects__tag">{project.tag}</span>
                <h3 className="projects__name">
                  {project.name}
                  {hasLinks && (
                    <FiArrowUpRight
                      className="projects__name-arrow"
                      aria-hidden="true"
                    />
                  )}
                </h3>
                <p className="projects__summary">
                  {project.summary || project.description}
                </p>

                {project.tech.length > 0 && (
                  <ul className="chip-list projects__tech">
                    {project.tech.map((tech) => (
                      <li key={tech} className="badge">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                {hasLinks && (
                  <div className="projects__actions">
                    {project.github && (
                      <a
                        className="btn btn--outline"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FiGithub aria-hidden="true" /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        className="btn btn--primary"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FiExternalLink aria-hidden="true" /> Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
