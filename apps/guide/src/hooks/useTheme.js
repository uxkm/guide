import { useEffect, useState } from 'react';

const STORAGE_KEY = 'guide-theme';

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch {
    return null;
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || getSystemTheme(),
  );

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
    applyTheme(getStoredTheme() || getSystemTheme(), false);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (!getStoredTheme()) {
        applyTheme(getSystemTheme(), false);
      }
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, toggleTheme, applyTheme };
}
