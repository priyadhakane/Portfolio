/**
 * True when the user has asked the OS to minimise motion.
 * Checked at call time so it always reflects the current setting.
 */
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** Scroll to an element by hash, honouring the reduced-motion preference. */
export function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (!target) return;
  target.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
  if (typeof history.replaceState === 'function') {
    history.replaceState(null, '', hash);
  }
}

/** Scroll back to the top of the page, honouring reduced motion. */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
}
