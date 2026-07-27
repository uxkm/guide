import '../src/scss/main.scss';
import '../src/js/ripple.js';

function initGuideTheme() {
  try {
    const stored = localStorage.getItem('storybook-theme');
    const theme = stored === 'light' || stored === 'dark' ? stored : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

initGuideTheme();

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['소개', '설치 및 사용', '디자인 토큰', 'Components'],
      },
    },
  },
  decorators: [
    (story) => {
      const el = story();
      requestAnimationFrame(() => {
        if (typeof window.markAutoRippleTargets === 'function') {
          window.markAutoRippleTargets(document);
        }
      });
      return el;
    },
  ],
};

export default preview;
