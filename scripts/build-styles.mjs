import { createHash } from 'node:crypto';
import { mkdir, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as sass from 'sass';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'packages/styles/src/index.scss');
const applicationTargets = ['html', 'gulp', 'vue', 'react', 'nuxt', 'next'].map(
  (app) => join(root, `apps/${app}/public/styles/uxkm.css`)
);
const packageTarget = join(root, 'packages/styles/dist/uxkm.css');
const targets = [packageTarget, ...applicationTargets];

const result = await sass.compileAsync(source, {
  loadPaths: [join(root, 'packages/styles/src')],
  style: 'expanded'
});
const hash = createHash('sha256').update(result.css).digest('hex');
const css = `/* Generated from packages/styles/src/index.scss. Do not edit. */\n/* source-hash: ${hash} */\n${result.css}`;

for (const target of targets) {
  await mkdir(dirname(target), { recursive: true });
  const temporaryTarget = `${target}.tmp`;
  await writeFile(temporaryTarget, css);
  await rename(temporaryTarget, target);
}

const manifest = {
  source: 'packages/styles/src/index.scss',
  hash,
  outputs: targets.map((target) => target.replace(`${root}/`, ''))
};
await writeFile(
  join(root, 'packages/styles/dist/manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`
);

console.log(`공통 스타일 빌드 완료: ${targets.length}개 CSS, sha256 ${hash.slice(0, 12)}`);
