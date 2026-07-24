import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { copyFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import {
  createInternalAliasPlugin,
  uiScssOptions,
  uiViteAliases,
  writeCdnUrlScss,
} from '@uxkm/ui/vite-alias';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const guideSrc = path.resolve(__dirname, 'src');

const isProd = process.env.NODE_ENV === 'production';
const deployBase = process.env.GUIDE_BASE || '/vue/';
const deployOrigin = 'https://guide.uxkm.io';

function resolveCdnUrl() {
  if (process.env.CDN_URL) {
    return process.env.CDN_URL.replace(/\/$/, '');
  }
  return isProd ? `${deployOrigin}${deployBase.replace(/\/$/, '')}` : '.';
}

writeCdnUrlScss(resolveCdnUrl());

export default defineConfig({
  plugins: [
    createInternalAliasPlugin(guideSrc),
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
        const indexPath = path.resolve(__dirname, 'dist/index.html');
        if (!existsSync(indexPath)) return;
        copyFileSync(indexPath, path.resolve(__dirname, 'dist/404.html'));
      },
    },
  ],
  base: isProd ? deployBase : '/',
  resolve: {
    alias: uiViteAliases(),
  },
  css: {
    preprocessorOptions: {
      scss: uiScssOptions(path.resolve(__dirname, 'node_modules')),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
