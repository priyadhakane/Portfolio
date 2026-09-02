import { FiArrowUp } from 'react-icons/fi';
import { useScrolledPast } from '../hooks/useScroll.js';
import { scrollToTop } from '../utils/motion.js';
import './BackToTop.css';

/** Appears after a reasonable scroll distance; returns the user to the top. */
export default function BackToTop() {
  const visible = useScrolledPast(600);

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  );
}
