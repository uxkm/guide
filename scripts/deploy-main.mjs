import { execFileSync, spawnSync } from 'node:child_process';
import { cp, mkdtemp, readdir, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const workspaceRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const target = process.argv[2] || 'all';
const supportedTargets = new Set(['guidebook', 'storybook', 'all']);

if (!supportedTargets.has(target)) {
  throw new Error(`지원하지 않는 배포 대상입니다: ${target}`);
}

function git(args, options = {}) {
  return execFileSync('git', args, {
    cwd: options.cwd || workspaceRoot,
    encoding: 'utf8',
    stdio: options.stdio || 'pipe'
  }).trim();
}

async function assertDirectory(path, label) {
  try {
    if ((await stat(path)).isDirectory()) return;
  } catch {
    // 아래 공통 오류를 사용합니다.
  }
  throw new Error(`${label} 빌드 결과가 없습니다: ${path}`);
}

async function replaceDirectory(source, destination) {
  await rm(destination, { recursive: true, force: true });
  await cp(source, destination, { recursive: true });
}

async function deployGuidebook(worktree) {
  const source = join(workspaceRoot, 'apps/guidebook/dist');
  await assertDirectory(source, 'Guidebook');

  const entries = await readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = join(source, entry.name);
    const destinationPath = join(worktree, entry.name);
    if (entry.isDirectory()) await replaceDirectory(sourcePath, destinationPath);
    else await cp(sourcePath, destinationPath, { force: true });
  }
}

async function deployStorybook(worktree) {
  const source = join(workspaceRoot, 'apps/storybook/storybook-static');
  await assertDirectory(source, 'Storybook');
  await replaceDirectory(source, join(worktree, 'storybook'));
}

const sourceStatus = git(['status', '--porcelain']);
if (sourceStatus) {
  throw new Error('배포 전 dev 작업 트리를 커밋하거나 정리해야 합니다.');
}

git(['fetch', 'origin', 'main'], { stdio: 'inherit' });
const localMain = git(['rev-parse', 'main']);
const remoteMain = git(['rev-parse', 'origin/main']);
if (localMain !== remoteMain) {
  const localOnly = git(['rev-list', '--count', 'origin/main..main']);
  if (localOnly !== '0') {
    throw new Error('로컬 main과 origin/main이 일치하지 않습니다. 먼저 브랜치 상태를 확인하세요.');
  }
  git(['branch', '--force', 'main', 'origin/main']);
}

const worktree = await mkdtemp(join(tmpdir(), 'uxkm-main-deploy-'));
let worktreeAdded = false;

try {
  git(['worktree', 'add', worktree, 'main'], { stdio: 'inherit' });
  worktreeAdded = true;

  if (target === 'guidebook' || target === 'all') await deployGuidebook(worktree);
  if (target === 'storybook' || target === 'all') await deployStorybook(worktree);

  const paths = target === 'guidebook'
    ? ['assets', 'components', 'foundations', 'guides', 'images', 'index.html']
    : target === 'storybook' ? ['storybook'] : ['assets', 'components', 'foundations', 'guides', 'images', 'index.html', 'storybook'];

  git(['add', '--', ...paths], { cwd: worktree });
  const diff = spawnSync('git', ['diff', '--cached', '--quiet'], { cwd: worktree, stdio: 'ignore' });
  if (diff.status === 0) {
    console.log(`main 브랜치에 반영할 변경 사항이 없습니다: ${target}`);
  } else if (diff.status === 1) {
    const label = target === 'all' ? 'Guidebook and Storybook' : target === 'guidebook' ? 'Guidebook' : 'Storybook';
    git(['commit', '-m', `Deploy ${label} build`], { cwd: worktree, stdio: 'inherit' });
    git(['push', 'origin', 'main'], { cwd: worktree, stdio: 'inherit' });
    console.log(`main 브랜치 배포 완료: ${target}`);
  } else {
    throw diff.error || new Error('배포 변경 사항을 확인하지 못했습니다.');
  }
} finally {
  if (worktreeAdded) git(['worktree', 'remove', '--force', worktree], { stdio: 'inherit' });
  else await rm(worktree, { recursive: true, force: true });
}
