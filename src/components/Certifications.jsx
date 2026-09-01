import { FiCheckCircle } from 'react-icons/fi';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { certifications } from '../data/portfolioData.js';
import './Certifications.css';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Training"
      title="Certifications & Training"
      subtitle="Training programmes and workshops I have completed."
      alt
    >
      <div className="certs__grid">
        {certifications.map((item, index) => (
          <Reveal
            key={item.name}
            className="certs__card card"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <span className="certs__icon" aria-hidden="true">
              <FiCheckCircle />
            </span>
            <h3>{item.name}</h3>
            <p className="certs__org">{item.organization}</p>
            <span className="badge">{item.domain}</span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
