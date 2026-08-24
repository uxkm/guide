import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const workspaceRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const deployRoot = join(workspaceRoot, 'build');
const guidebookDist = join(workspaceRoot, 'apps/guidebook/dist');
const storybookDist = join(workspaceRoot, 'apps/storybook/storybook-static');

await rm(deployRoot, { recursive: true, force: true });
await cp(guidebookDist, deployRoot, { recursive: true });
await mkdir(join(deployRoot, 'storybook'), { recursive: true });
await cp(storybookDist, join(deployRoot, 'storybook'), { recursive: true });

console.log('문서 배포 결과 수집 완료');
console.log(`Guidebook: ${deployRoot}`);
console.log(`Storybook: ${join(deployRoot, 'storybook')}`);
