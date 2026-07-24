import path from 'node:path';
import { existsSync, writeFileSync } from 'node:fs';
import {
  uiRoot,
  uiScssOptions,
  writeCdnUrlScss,
  createInternalAliasPlugin,
} from '../../../packages/ui/vite-alias.js';
import {
  uiReactRoot,
  createUiReactAliasPlugin,
  uiReactViteAliases,
} from '../../../packages/ui-react/vite-alias.js';

const storybookDir = path.resolve(process.cwd());
const monorepoRoot = path.resolve(storybookDir, '../..');
const guideSrcRoot = path.resolve(storybookDir, '../../apps/guide/src');
const guideDocDataRoot = path.resolve(guideSrcRoot, 'doc/data');
const storybookBase = process.env.STORYBOOK_BASE ?? '/';
const storybookCdnUrl = process.env.STORYBOOK_CDN_URL ?? '.';

writeCdnUrlScss(storybookCdnUrl);

function resolveAliasTarget(basePath) {
  const extensions = ['', '.js', '.jsx', '.ts', '.tsx', '.json'];
  for (const ext of extensions) {
    const file = `${basePath}${ext}`;
    if (existsSync(file)) return file;
  }
  for (const ext of ['.js', '.jsx']) {
    const file = path.join(basePath, `index${ext}`);
    if (existsSync(file)) return file;
  }
  return basePath;
}

function createGuideDataAliasPlugin() {
  return {
    name: 'guide-data-alias',
    enforce: 'pre',
    resolveId(source) {
      if (source.startsWith('@/doc/data/') || source.startsWith('@doc-data/')) {
        const rel = source.startsWith('@/doc/data/')
          ? source.slice('@/doc/data/'.length)
          : source.slice('@doc-data/'.length);
        return resolveAliasTarget(path.join(guideDocDataRoot, rel));
      }
      if (source === '@/doc/data' || source === '@doc-data') {
        return guideDocDataRoot;
      }
      if (source.startsWith('@doc-data/')) {
        const rel = source.slice('@doc-data/'.length);
        return resolveAliasTarget(path.join(guideDocDataRoot, rel));
      }
      return null;
    },
  };
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  staticDirs: ['../public'],

  title: 'UXKM Guide',

  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/ui-react/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(viteConfig) {
    const { mergeConfig } = await import('vite');
    const react = (await import('@vitejs/plugin-react')).default;

    return mergeConfig(viteConfig, {
      base: storybookBase,
      plugins: [
        react(),
        createInternalAliasPlugin(guideSrcRoot),
        createUiReactAliasPlugin(),
        createGuideDataAliasPlugin(),
        {
          name: 'scss-cdn-url',
          buildStart() {
            writeCdnUrlScss(storybookCdnUrl);
          },
        },
        {
          name: 'html-lang-ko',
          transformIndexHtml(html) {
            return html.replace(/lang="en"/g, 'lang="ko"');
          },
        },
      ],
      resolve: {
        alias: {
          ...uiReactViteAliases(),
          '@doc-data': guideDocDataRoot,
          '@/doc/data': guideDocDataRoot,
        },
        dedupe: ['react', 'react-dom'],
      },
      server: {
        fs: {
          allow: [
            ...(viteConfig.server?.fs?.allow ?? []),
            storybookDir,
            monorepoRoot,
            uiRoot,
            uiReactRoot,
            guideSrcRoot,
          ],
        },
      },
      css: {
        preprocessorOptions: {
          scss: uiScssOptions(path.resolve(storybookDir, 'node_modules')),
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
