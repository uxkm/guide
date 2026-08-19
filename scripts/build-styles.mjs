import { createHash } from 'node:crypto';
import { mkdir, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as sass from 'sass';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'packages/styles/index.scss');
const applicationTargets = ['html', 'gulp', 'vue', 'react', 'nuxt', 'next', 'storybook'].map(
  (app) => join(root, `apps/${app}/public/styles/uxkm.css`)
);
const targets = applicationTargets;

const result = await sass.compileAsync(source, {
  loadPaths: [join(root, 'packages/styles')],
  style: 'expanded'
});
const hash = createHash('sha256').update(result.css).digest('hex');
const css = `/* Generated from packages/styles/index.scss. Do not edit. */\n/* source-hash: ${hash} */\n${result.css}`;

for (const target of targets) {
  await mkdir(dirname(target), { recursive: true });
  const temporaryTarget = `${target}.tmp`;
  await writeFile(temporaryTarget, css);
  await rename(temporaryTarget, target);
}

console.log(`공통 스타일 빌드 완료: ${targets.length}개 CSS, sha256 ${hash.slice(0, 12)}`);
