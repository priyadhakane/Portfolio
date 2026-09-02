import { FiCpu, FiLayout, FiServer, FiDatabase, FiTool } from 'react-icons/fi';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { skills, education } from '../data/portfolioData.js';
import skillIcon from '../utils/skillIcons.jsx';
import './Skills.css';

const categoryIcons = {
  'Programming Languages': <FiCpu aria-hidden="true" />,
  Frontend: <FiLayout aria-hidden="true" />,
  'Backend & Frameworks': <FiServer aria-hidden="true" />,
  Databases: <FiDatabase aria-hidden="true" />,
  'Tools & Productivity': <FiTool aria-hidden="true" />,
};

// Pull the headline academic figures straight from the education entries.
const shortLabels = [
  { match: /bachelor|b\.e\./i, label: 'B.E.' },
  { match: /diploma/i, label: 'Diploma' },
  { match: /ssc/i, label: 'SSC' },
];

const academicStats = shortLabels
  .map(({ match, label }) => {
    const entry = education.find((e) => match.test(e.degree));
    return entry
      ? { label, value: entry.score.replace(/Percentage:\s*/i, '') }
      : null;
  })
  .filter(Boolean);

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Arsenal"
      title="Technical Skills"
      subtitle="Languages, frameworks and tools I use to build and ship software."
      alt
    >
      <div className="skills__grid">
        {skills.map((group, index) => (
          <Reveal
            as="article"
            key={group.category}
            className="skills__card"
            style={{ '--cat': group.accent, transitionDelay: `${index * 70}ms` }}
          >
            <header className="skills__card-head">
              <span className="skills__cat-icon">
                {categoryIcons[group.category] || <FiTool aria-hidden="true" />}
              </span>
              <div>
                <h3>{group.category}</h3>
                <p>{group.subtitle}</p>
              </div>
              <span className="skills__count">{group.items.length}</span>
            </header>

            <ul className="skills__items">
              {group.items.map((item) => (
                <li key={item} className="skills__item">
                  <span className="skills__item-icon">{skillIcon(item)}</span>
                  <span className="skills__item-name">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="skills__academics">
        {academicStats.map((stat) => (
          <span key={stat.label}>
            <strong>{stat.value}</strong> {stat.label}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
