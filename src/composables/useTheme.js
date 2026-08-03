import { ref, onMounted, onUnmounted, watch } from 'vue';

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
  const theme = ref('light');
  let mediaQuery;

  function onSystemThemeChange() {
    if (!getStoredTheme()) {
      applyTheme(getSystemTheme(), false);
    }
  }

  function applyTheme(next, persist = false) {
    theme.value = next;
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
    applyTheme(theme.value === 'dark' ? 'light' : 'dark', true);
  }

  onMounted(() => {
    const initialTheme = document.documentElement.getAttribute('data-theme');
    applyTheme(initialTheme || getStoredTheme() || getSystemTheme(), false);
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', onSystemThemeChange);
  });

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', onSystemThemeChange);
  });

  watch(theme, (value) => {
    document.documentElement.setAttribute('data-theme', value);
  });

  return { theme, toggleTheme, applyTheme };
}
