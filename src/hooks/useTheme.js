import { useEffect, useState } from 'react';

const STORAGE_KEY = 'guide-theme';
const DEFAULT_THEME = 'light';

function getStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch {
    return null;
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  function applyTheme(next, persist = false) {
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
    }
  }

  function toggleTheme() {
    applyTheme(theme === 'dark' ? 'light' : 'dark', true);
  }

  useEffect(() => {
    const documentTheme = document.documentElement.getAttribute('data-theme');
    applyTheme(getStoredTheme() || documentTheme || DEFAULT_THEME, false);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, toggleTheme, applyTheme };
}
