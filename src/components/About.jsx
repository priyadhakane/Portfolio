import {
  FiTarget,
  FiCode,
  FiBookOpen,
  FiGlobe,
} from 'react-icons/fi';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { profile } from '../data/portfolioData.js';
import './About.css';

const highlights = [
  {
    icon: <FiBookOpen aria-hidden="true" />,
    title: 'Education',
    text: 'B.E. in Computer Engineering from Zeal College of Engineering and Research, Pune (83.88%), following a Diploma in Computer Engineering.',
  },
  {
    icon: <FiCode aria-hidden="true" />,
    title: 'Current focus',
    text: 'Full-stack development with Java and Spring Boot on the backend, and Django for rapid web applications.',
  },
  {
    icon: <FiTarget aria-hidden="true" />,
    title: 'Career objective',
    text: 'To join a team where I can contribute to real projects, keep learning, and grow into a well-rounded software engineer.',
  },
  {
    icon: <FiGlobe aria-hidden="true" />,
    title: 'Languages',
    text: profile.languages.join(', '),
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="About Me"
      subtitle="A short introduction to my background, interests and goals."
    >
      <div className="about__grid">
        <Reveal className="about__intro">
          <p>{profile.summary}</p>
          <p>
            I completed a Diploma in Computer Engineering before my degree, which
            gave me an early, hands-on start with programming fundamentals. I am
            currently a Software Engineer Intern at LiteCode Software, where I
            contribute to real business applications and completed the BillBook
            ERP System. Alongside this I have finished training programmes in Java
            full-stack, Python and Django, and built academic and group projects
            that put those skills into practice.
          </p>

          <div className="about__strengths">
            <h3>Strengths</h3>
            <ul className="chip-list">
              {profile.strengths.map((item) => (
                <li key={item} className="badge">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="about__cards">
          {highlights.map((item, index) => (
            <Reveal
              key={item.title}
              className="about__card"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <span className="about__card-icon">{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
