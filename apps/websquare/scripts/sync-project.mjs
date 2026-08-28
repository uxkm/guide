import { access, cp, mkdir } from 'node:fs/promises';
import { dirname, isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const projectIndex = args.indexOf('--project');
const projectInput = projectIndex >= 0 ? args[projectIndex + 1] : process.env.UXKM_WEBSQUARE_PROJECT;

if (!projectInput) {
  console.error('WebSquare 프로젝트를 --project /absolute/path 또는 UXKM_WEBSQUARE_PROJECT로 지정하세요.');
  process.exit(1);
}

if (!isAbsolute(projectInput)) {
  console.error(`WebSquare 프로젝트는 절대 경로로 지정해야 합니다: ${projectInput}`);
  process.exit(1);
}

const projectRoot = resolve(projectInput);
const webContent = join(projectRoot, 'WebContent');
try {
  await access(webContent);
} catch {
  console.error(`WebContent 디렉터리를 찾을 수 없습니다: ${webContent}`);
  process.exit(1);
}

const copies = [
  ['src/components', 'WebContent/uxkm/components'],
  ['src/screens', 'WebContent/uxkm/screens'],
  ['WebContent/cm/css/uxkm.css', 'WebContent/cm/css/uxkm.css'],
  ['WebContent/images', 'WebContent/images']
];

for (const [sourcePath, targetPath] of copies) {
  const source = join(appRoot, sourcePath);
  const target = join(projectRoot, targetPath);
  try {
    await access(source);
  } catch {
    console.error(`동기화 원본이 없습니다: ${sourcePath}. 먼저 pnpm build:shared를 실행하세요.`);
    process.exit(1);
  }
  await mkdir(dirname(target), { recursive: true });
  await cp(source, target, { recursive: true, force: true });
}

console.log(`WebSquare 소스와 공통 자산 동기화 완료: ${projectRoot}`);
