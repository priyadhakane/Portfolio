import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion.js';

const STORAGE_KEY = 'portfolio-theme';

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* localStorage unavailable — fall through */
  }
  // Dark is the designed default; light is opt-in via the toggle.
  return 'dark';
}

/**
 * Light/dark theme with localStorage persistence and a system-preference default.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore write failures (private mode, blocked storage) */
    }
  }, [theme]);

  const toggle = () => {
    // Briefly enable colour transitions just for the switch, then remove them
    // so they never cost anything during normal interaction.
    if (!prefersReducedMotion()) {
      const root = document.documentElement;
      root.classList.add('theme-switching');
      window.setTimeout(() => root.classList.remove('theme-switching'), 320);
    }
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggle };
}
