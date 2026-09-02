import {
  FiCheckCircle,
  FiZap,
  FiUsers,
  FiTarget,
} from 'react-icons/fi';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { certifications, competencies } from '../data/portfolioData.js';
import './Certifications.css';

const competencyIcons = {
  bulb: <FiTarget aria-hidden="true" />,
  spark: <FiZap aria-hidden="true" />,
  users: <FiUsers aria-hidden="true" />,
};

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Training & Strengths"
      title="Certifications & Core Competencies"
      subtitle="Programmes I have completed and the strengths I bring to a team."
      alt
    >
      <div className="certs__layout">
        <div className="certs__col">
          <h3 className="certs__col-title">Professional Training</h3>
          <div className="certs__list">
            {certifications.map((item, index) => (
              <Reveal
                key={item.name}
                className="certs__card card"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span className="certs__icon" aria-hidden="true">
                  <FiCheckCircle />
                </span>
                <div>
                  <h4>{item.name}</h4>
                  <p className="certs__org">{item.organization}</p>
                  <span className="badge">{item.domain}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="certs__col">
          <h3 className="certs__col-title">Core Competencies</h3>
          <div className="certs__competencies">
            {competencies.map((item, index) => (
              <Reveal
                key={item.name}
                className="certs__competency"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span className="certs__competency-icon" aria-hidden="true">
                  {competencyIcons[item.icon]}
                </span>
                <span>{item.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
