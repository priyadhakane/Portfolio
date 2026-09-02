import {
  FiBookOpen,
  FiCode,
  FiZap,
  FiTarget,
  FiGlobe,
} from 'react-icons/fi';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { profile } from '../data/portfolioData.js';
import './About.css';

/**
 * Five short "pillars" shown as a hub-and-spoke diagram.
 * Each line is deliberately one scannable phrase.
 */
const pillars = [
  {
    key: 'education',
    label: 'Education',
    icon: <FiBookOpen aria-hidden="true" />,
    text: 'B.E. Computer Engineering · 83.88%',
  },
  {
    key: 'focus',
    label: 'Current Focus',
    icon: <FiCode aria-hidden="true" />,
    text: 'Java, Spring Boot & Django',
  },
  {
    key: 'strengths',
    label: 'Strengths',
    icon: <FiZap aria-hidden="true" />,
    text: 'Problem-solving · Teamwork',
  },
  {
    key: 'objective',
    label: 'Career Objective',
    icon: <FiTarget aria-hidden="true" />,
    text: 'Grow into a well-rounded engineer',
  },
  {
    key: 'languages',
    label: 'Languages',
    icon: <FiGlobe aria-hidden="true" />,
    text: profile.languages.join(' · '),
  },
];

// Line end-points (in a 0–100 box) that match the CSS node positions below.
const nodePoints = [
  [50, 12],
  [86, 40],
  [70, 88],
  [30, 88],
  [14, 40],
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="About Me"
      subtitle="A quick snapshot of who I am and what I bring to a team."
    >
      <Reveal className="about__intro">
        <p>{profile.summary}</p>
      </Reveal>

      <Reveal className="pillars reveal--static">
        <svg
          className="pillars__links"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {nodePoints.map(([x, y]) => (
            <line
              key={`${x}-${y}`}
              className="pillars__link"
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              pathLength="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        <div className="pillars__hub">
          <span className="pillars__hub-initials">{profile.initials}</span>
          <span className="pillars__hub-label">Computer Engineer</span>
        </div>

        <ul className="pillars__list">
          {pillars.map((pillar, index) => (
            <li
              key={pillar.key}
              className="pillars__node"
              style={{ '--i': index }}
            >
              <span className="pillars__badge">{pillar.icon}</span>
              <div className="pillars__body">
                <h3>{pillar.label}</h3>
                <p>{pillar.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
