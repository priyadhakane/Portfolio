import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { experience } from '../data/portfolioData.js';
import './Experience.css';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional Experience"
      subtitle="My professional experience to date. I am open to full-time software engineering roles."
    >
      <ol className="timeline">
        {experience.map((item, index) => (
          <Reveal
            as="li"
            key={`${item.role}-${item.company}`}
            className="timeline__item"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <div className="timeline__marker" aria-hidden="true" />
            <article className="timeline__card card">
              <header className="timeline__head">
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline__org">
                    {item.company}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>
                </div>
                {item.period && (
                  <span className="timeline__period">{item.period}</span>
                )}
              </header>
              <ul className="timeline__points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {item.tech.length > 0 && (
                <ul className="chip-list timeline__tech">
                  {item.tech.map((tech) => (
                    <li key={tech} className="badge">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
