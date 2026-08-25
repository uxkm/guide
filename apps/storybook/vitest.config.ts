import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      allowExternal: true,
      include: [path.join(dirname, '../react/src/components/**/*.{js,jsx}')],
      exclude: [path.join(dirname, '../react/src/components/**/*.test.jsx')],
      reporter: ['text', 'html', 'lcov', 'json'],
      reportsDirectory: './coverage/storybook',
      thresholds: {
        statements: 100,
        functions: 100,
        lines: 100,
        branches: 94
      }
    },
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }]
          }
        }
      }
    ]
  }
});
