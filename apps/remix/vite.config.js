import { vitePlugin as remix } from '@remix-run/dev';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const appDirectory = dirname(fileURLToPath(import.meta.url));
const monorepoRoot = resolve(appDirectory, '../..');

export default defineConfig({
  plugins: [remix()],
  server: {
    port: 6111,
    host: '0.0.0.0',
    fs: {
      allow: [monorepoRoot]
    }
  },
  resolve: {
    dedupe: ['react', 'react-dom']
  }
});
