import { cp, mkdir, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'packages/assets/public/images');
const appTargets = [
  ...['html', 'gulp', 'vue', 'react', 'nuxt', 'next', 'storybook'].map((app) =>
    join(root, `apps/${app}/public/images`)
  ),
  join(root, 'apps/websquare/WebContent/images')
];

await readdir(source);

for (const target of appTargets) {
  await mkdir(dirname(target), { recursive: true });
  await cp(source, target, { recursive: true });
}

console.log(`공통 이미지 배포 완료: ${appTargets.length}개 앱`);
