import vue from '@vitejs/plugin-vue';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const uxkmAliases = Object.fromEntries(
  Object.entries(pkg.exports).map(([subpath, target]) => [
    subpath === '.' ? '@uxkm/vue' : `@uxkm/vue/${subpath.replace(/^\.\//, '')}`,
    fileURLToPath(new URL(target, import.meta.url)),
  ]),
);

export default defineConfig({
  plugins: [vue()],
  publicDir: 'public',
  resolve: {
    alias: uxkmAliases,
  },
});
