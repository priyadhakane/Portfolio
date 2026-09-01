import useScrollReveal from '../hooks/useScrollReveal.js';

/**
 * Wraps children in a scroll-triggered fade-in.
 * `as` lets the caller pick the rendered element (div by default).
 */
export default function Reveal({ as: Tag = 'div', className = '', style, children }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
