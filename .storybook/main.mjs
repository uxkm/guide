import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const storybookBase = process.env.STORYBOOK_BASE ?? '/';

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  staticDirs: [{ from: '../src/images', to: '/images' }],

  title: 'UXKM Guide',

  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/html-vite',
    options: {},
  },

  async viteFinal(viteConfig) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(viteConfig, {
      base: storybookBase,
      plugins: [
        {
          name: 'html-lang-ko',
          transformIndexHtml(html) {
            return html.replace(/lang="en"/g, 'lang="ko"');
          },
        },
      ],
      resolve: {
        alias: {
          '@src': path.resolve(rootDir, 'src'),
        },
      },
      server: {
        fs: {
          allow: [
            ...(viteConfig.server?.fs?.allow ?? []),
            rootDir,
          ],
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler',
            loadPaths: [path.resolve(rootDir, 'src/scss')],
          },
        },
      },
    });
  },

  features: {
    actions: false,
    interactions: false,
    controls: true,
    sidebarOnboardingChecklist: false,
  },
};

export default config;
