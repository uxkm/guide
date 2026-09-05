import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));

const aliases = Object.fromEntries(
  Object.entries(pkg.exports).map(([subpath, target]) => [
    subpath === '.' ? '@uxkm/react' : `@uxkm/react/${subpath.slice(2)}`,
    resolve(root, target),
  ]),
);

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  resolve: { alias: aliases },
});
