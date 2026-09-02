import { useEffect, useState } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js';
import './RotatingText.css';

/**
 * Cycles through a short list of role labels with a quiet cross-fade.
 * Screen readers get the full list once; the visible cycling text is decorative.
 * Falls back to the first item when reduced motion is preferred.
 */
export default function RotatingText({ items, interval = 2800 }) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || items.length < 2) return undefined;
    const id = window.setInterval(() => {
      if (!document.hidden) {
        setIndex((current) => (current + 1) % items.length);
      }
    }, interval);
    return () => window.clearInterval(id);
  }, [reduced, items, interval]);

  return (
    <span className="rotating-text">
      <span className="visually-hidden">{items.join(', ')}</span>
      <span key={index} className="rotating-text__item" aria-hidden="true">
        {items[reduced ? 0 : index]}
      </span>
    </span>
  );
}
