import {
  FiCpu,
  FiLayout,
  FiServer,
  FiTool,
} from 'react-icons/fi';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { skills } from '../data/portfolioData.js';
import './Skills.css';

const categoryIcons = {
  'Programming Languages': <FiCpu aria-hidden="true" />,
  Frontend: <FiLayout aria-hidden="true" />,
  'Backend & Frameworks': <FiServer aria-hidden="true" />,
  'Tools & Productivity': <FiTool aria-hidden="true" />,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical Skills"
      subtitle="Languages, frameworks and tools I work with, grouped by area."
      alt
    >
      <div className="skills__grid">
        {skills.map((group, index) => (
          <Reveal
            key={group.category}
            className="skills__card card"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <div className="skills__card-head">
              <span className="skills__icon">
                {categoryIcons[group.category] || <FiTool aria-hidden="true" />}
              </span>
              <h3>{group.category}</h3>
            </div>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
