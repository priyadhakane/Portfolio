import Reveal from './Reveal.jsx';

/**
 * Standard section shell: id anchor, spacing, optional alt background,
 * and a consistent eyebrow / title / subtitle header.
 */
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  alt = false,
  children,
}) {
  return (
    <section id={id} className={`section ${alt ? 'section--alt' : ''}`.trim()}>
      <div className="container">
        <Reveal className="section__head">
          {eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
