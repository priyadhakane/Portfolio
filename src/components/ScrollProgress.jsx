import { useScrollProgress } from '../hooks/useScroll.js';
import './ScrollProgress.css';

/** Thin reading-progress bar pinned to the very top of the page. */
export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div
        className="scroll-progress__bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
