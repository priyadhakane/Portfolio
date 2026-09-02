import { useSyncExternalStore } from 'react';

/**
 * A single shared, rAF-throttled scroll/resize listener that every scroll-aware
 * component subscribes to. Avoids each component adding its own listener.
 */

let scrollY = 0;
let progress = 0;
let frame = 0;
const listeners = new Set();

function measure() {
  frame = 0;
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  scrollY = window.scrollY || doc.scrollTop || 0;
  progress = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
  listeners.forEach((fn) => fn());
}

function onScroll() {
  if (!frame) frame = requestAnimationFrame(measure);
}

function subscribe(callback) {
  if (listeners.size === 0) {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    measure();
  }
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
    if (listeners.size === 0) {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    }
  };
}

/** Current vertical scroll offset in pixels. */
export function useScrollY() {
  return useSyncExternalStore(
    subscribe,
    () => scrollY,
    () => 0
  );
}

/** Reading progress from 0 to 1. */
export function useScrollProgress() {
  return useSyncExternalStore(
    subscribe,
    () => progress,
    () => 0
  );
}

/** Boolean: has the page scrolled more than `px` pixels down. */
export function useScrolledPast(px) {
  return useSyncExternalStore(
    subscribe,
    () => scrollY > px,
    () => false
  );
}
