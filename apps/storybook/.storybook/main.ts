import path from 'node:path';
import { existsSync, writeFileSync } from 'node:fs';

const storybookDir = path.resolve(process.cwd());
const monorepoRoot = path.resolve(storybookDir, '../..');
const uiRoot = path.resolve(storybookDir, '../../packages/ui/src');
const guideSrcRoot = path.resolve(storybookDir, '../../apps/guide/src');
const guideDocDataRoot = path.resolve(guideSrcRoot, 'doc/data');
const cdnUrlScssPath = path.resolve(uiRoot, 'scss/_cdn-url.scss');
const storybookBase = process.env.STORYBOOK_BASE ?? '/';
const storybookCdnUrl = process.env.STORYBOOK_CDN_URL ?? '.';

function writeCdnUrlScss(cdnUrl = '.') {
  writeFileSync(
    cdnUrlScssPath,
    `// CDN/정적 에셋 베이스 URL — url(#{$cdn-url}/…) 에서 사용\n$cdn-url: "${cdnUrl}";\n`,
  );
}

function resolveAliasTarget(basePath) {
  const extensions = ['', '.js', '.vue', '.jsx', '.ts', '.json'];
  for (const ext of extensions) {
    const file = `${basePath}${ext}`;
    if (existsSync(file)) return file;
  }
  for (const ext of ['.js', '.vue']) {
    const file = path.join(basePath, `index${ext}`);
    if (existsSync(file)) return file;
  }
  return basePath;
}

function createInternalAliasPlugin() {
  return {
    name: 'internal-alias',
    enforce: 'pre',
    resolveId(source, importer) {
      if (source.startsWith('@/doc/data/')) {
        const rel = source.slice('@/doc/data/'.length);
        return resolveAliasTarget(path.join(guideDocDataRoot, rel));
      }
      if (source === '@/doc/data') {
        return guideDocDataRoot;
      }
      if (!source.startsWith('@/')) return null;
      const target = source.slice(2);
      if (importer?.includes(`${path.sep}packages${path.sep}ui${path.sep}`)) {
        return resolveAliasTarget(path.resolve(uiRoot, target));
      }
      if (importer?.includes(guideSrcRoot)) {
        return resolveAliasTarget(path.resolve(guideSrcRoot, target));
      }
      return null;
    },
  };
}

writeCdnUrlScss(storybookCdnUrl);

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  staticDirs: ['../public'],

  title: 'UXKM Guide',

  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  async viteFinal(viteConfig) {
    const { mergeConfig } = await import('vite');
    const vue = (await import('@vitejs/plugin-vue')).default;

    return mergeConfig(viteConfig, {
      base: storybookBase,
      plugins: [
        vue(),
        createInternalAliasPlugin(),
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
          '@uxkm/ui': uiRoot,
          '@images': path.resolve(uiRoot, 'assets/images'),
          '@doc-data': guideDocDataRoot,
          '@/doc/data': guideDocDataRoot,
        },
        dedupe: ['vue'],
      },
      server: {
        fs: {
          // Storybook 기본 allow 목록을 유지하고 모노레포 경로만 추가
          // (덮어쓰면 node_modules의 mocker-runtime 등이 404가 됨)
          allow: [
            ...(viteConfig.server?.fs?.allow ?? []),
            storybookDir,
            monorepoRoot,
            uiRoot,
            guideSrcRoot,
          ],
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler',
            loadPaths: [
              path.resolve(uiRoot, 'scss'),
              path.resolve(storybookDir, 'node_modules'),
            ],
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
