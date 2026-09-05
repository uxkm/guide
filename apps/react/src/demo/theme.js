import { DEMO_CATEGORIES, THEME_STORAGE_KEY } from './categories.js';

export { DEMO_CATEGORIES, THEME_STORAGE_KEY };

export function getStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'dark' || stored === 'light' ? stored : 'light';
  } catch {
    return 'light';
  }
}

export function applyTheme(theme) {
  const next = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', next === 'dark' ? '#0f1419' : '#f4f6f9');
  return next;
}

export function initTheme() {
  return applyTheme(getStoredTheme());
}
