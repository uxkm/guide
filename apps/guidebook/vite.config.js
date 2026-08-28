import { defineConfig } from 'vite';
import { readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

function collectInputs(directory, inputs = {}) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === 'dist' || entry.name === 'node_modules') continue;
    const target = join(directory, entry.name);
    if (entry.isDirectory()) collectInputs(target, inputs);
    else if (entry.name === 'index.html') inputs[relative(import.meta.dirname, target) || 'index'] = target;
  }
  return inputs;
}

export default defineConfig({
  base: './',
  publicDir: resolve(import.meta.dirname, '../../packages/assets/public'),
  build: {
    target: 'es2015',
    cssTarget: 'ios12',
    rollupOptions: {
      input: collectInputs(import.meta.dirname)
    }
  }
});
