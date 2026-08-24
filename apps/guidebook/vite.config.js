import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const pagePaths = ['', 'quick-start', 'html', 'html/semantic', 'html/accessibility', 'gulp', 'gulp/tasks', 'gulp/templates', 'vue', 'vue/reactivity', 'vue/nuxt', 'react', 'react/state', 'react/next'];

export default defineConfig({
  base: './',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: Object.fromEntries(pagePaths.map((pagePath) => [pagePath || 'index', resolve(import.meta.dirname, pagePath, 'index.html')]))
    }
  }
});
