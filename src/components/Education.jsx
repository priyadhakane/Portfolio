import { FiAward } from 'react-icons/fi';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { education } from '../data/portfolioData.js';
import './Education.css';

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academic Journey"
      title="Education"
      subtitle="Consistent academic performance with a strong technical foundation."
    >
      <Reveal as="ol" className="edu reveal--static">
        {education.map((item, index) => (
          <Reveal
            as="li"
            key={item.degree}
            className="edu__item"
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <span className="edu__marker" aria-hidden="true">
              <FiAward />
            </span>
            <article className="edu__card card">
              <div className="edu__row">
                <h3>{item.degree}</h3>
                <span className="edu__period">{item.period}</span>
              </div>
              <p className="edu__inst">{item.institution}</p>
              <p className="edu__score">{item.score}</p>
            </article>
          </Reveal>
        ))}
      </Reveal>
    </Section>
  );
}
