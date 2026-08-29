import { createHash } from 'node:crypto';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as sass from 'sass';
import { resolveAssetBase } from '../packages/assets/src/url.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const stylesRoot = join(root, 'packages/styles');
const applicationTargets = ['html', 'gulp', 'vue', 'react', 'nuxt', 'next', 'svelte', 'solid', 'qwik', 'remix', 'astro', 'angular', 'storybook'].map(
  (app) => join(root, `apps/${app}/public/styles/uxkm.css`)
);
const targets = [
  ...applicationTargets,
  join(root, 'apps/websquare/WebContent/cm/css/uxkm.css')
];
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

async function loadViteEnv(directory) {
  const values = {};
  for (const fileName of ['.env', `.env.${mode}`, '.env.local']) {
    try {
      const source = await readFile(join(directory, fileName), 'utf8');
      for (const line of source.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const match = trimmed.match(/^(VITE_[A-Z0-9_]+)\s*=\s*(.*)$/);
        if (!match) continue;
        let value = match[2].trim();
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }
        values[match[1]] = value;
      }
    } catch {
      // optional env file
    }
  }
  return values;
}

const env = {
  ...(await loadViteEnv(join(root, 'apps/guidebook'))),
  ...(await loadViteEnv(join(root, 'apps/storybook'))),
  ...process.env,
};

const cdnUrl = resolveAssetBase({
  base: mode === 'development' ? '/' : env.VITE_ASSET_BASE,
  siteUrl: env.VITE_SITE_URL || 'https://guide.uxkm.io',
  isDev: mode === 'development',
});

const entry = `@use "shared/cdn-url" with ($cdn-url: ${JSON.stringify(cdnUrl)});
@use "index";
`;

const result = await sass.compileStringAsync(entry, {
  loadPaths: [stylesRoot],
  style: 'expanded',
  url: pathToFileURL(join(stylesRoot, 'build-entry.scss')),
});
const hash = createHash('sha256').update(result.css).digest('hex');
const css = `/* Generated from packages/styles/index.scss. Do not edit. */\n/* source-hash: ${hash} */\n/* asset-base: ${cdnUrl || '/'} */\n${result.css}`;

for (const target of targets) {
  await mkdir(dirname(target), { recursive: true });
  const temporaryTarget = `${target}.tmp`;
  await writeFile(temporaryTarget, css);
  await rename(temporaryTarget, target);
}

console.log(
  `공통 스타일 빌드 완료: ${targets.length}개 CSS, asset-base ${cdnUrl || '/'}, sha256 ${hash.slice(0, 12)}`
);
