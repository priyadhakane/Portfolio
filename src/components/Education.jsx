import { FiAward } from 'react-icons/fi';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { education } from '../data/portfolioData.js';
import './Education.css';

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education"
      subtitle="My academic background, most recent first."
    >
      <div className="education__list">
        {education.map((item, index) => (
          <Reveal
            key={item.degree}
            className="education__card card"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <span className="education__icon" aria-hidden="true">
              <FiAward />
            </span>
            <div className="education__body">
              <div className="education__row">
                <h3>{item.degree}</h3>
                <span className="education__period">{item.period}</span>
              </div>
              <p className="education__inst">{item.institution}</p>
              <p className="education__score">{item.score}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
