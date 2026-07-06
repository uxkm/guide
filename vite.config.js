import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { copyFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cdnUrlScssPath = path.resolve(__dirname, 'src/scss/_cdn-url.scss');

const isProd = process.env.NODE_ENV === 'production';
const deployBase = '/vue/';
const deployOrigin = 'https://guide.uxkm.io';

function resolveCdnUrl() {
  if (process.env.CDN_URL) {
    return process.env.CDN_URL.replace(/\/$/, '');
  }
  return isProd ? `${deployOrigin}${deployBase.replace(/\/$/, '')}` : '.';
}

function writeCdnUrlScss(cdnUrl) {
  writeFileSync(
    cdnUrlScssPath,
    `// CDN/정적 에셋 베이스 URL — url(#{$cdn-url}/…) 에서 사용\n// 배포: ${deployOrigin}${deployBase}\n$cdn-url: "${cdnUrl}";\n`,
  );
}

writeCdnUrlScss(resolveCdnUrl());

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'scss-cdn-url',
      buildStart() {
        writeCdnUrlScss(resolveCdnUrl());
      },
    },
    {
      name: 'spa-404-fallback',
      closeBundle() {
        copyFileSync(path.resolve(__dirname, 'dist/index.html'), path.resolve(__dirname, 'dist/404.html'));
      },
    },
  ],
  base: isProd ? deployBase : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        loadPaths: [
          path.resolve(__dirname, 'src/scss'),
          path.resolve(__dirname, 'node_modules'),
        ],
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
