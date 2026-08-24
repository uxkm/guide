import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDirectory = join(dirname(fileURLToPath(import.meta.url)), '..');
const docsOnly = process.argv.includes('--docs-only');
const allServers = [
  ['Storybook', 'http://localhost:6006'],
  ['HTML', 'http://localhost:6101'],
  ['Gulp / Nunjucks', 'http://localhost:6102'],
  ['Vue', 'http://localhost:6103'],
  ['React', 'http://localhost:6104'],
  ['Nuxt', 'http://localhost:6105'],
  ['Next.js', 'http://localhost:6106'],
  ['Guidebook', 'http://localhost:6107']
];

const allFilters = [
  '@uxkm/html',
  '@uxkm/gulp',
  '@uxkm/vue',
  '@uxkm/react',
  '@uxkm/nuxt',
  '@uxkm/next',
  '@uxkm/storybook',
  '@uxkm/guidebook'
];

const docsFilters = ['@uxkm/storybook', '@uxkm/guidebook'];
const filters = docsOnly ? docsFilters : allFilters;
const servers = docsOnly
  ? allServers.filter(([label]) => label === 'Storybook' || label === 'Guidebook')
  : allServers;

function printAddresses(title) {
  const labelWidth = Math.max(...servers.map(([label]) => label.length));

  console.log(`\n${title}`);
  console.log('='.repeat(56));
  for (const [label, url] of servers) {
    console.log(`${label.padEnd(labelWidth)}  ${url}`);
  }
  console.log('='.repeat(56));
  console.log('종료: Ctrl+C\n');
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: rootDirectory,
      stdio: 'inherit',
      ...options
    });

    child.once('error', reject);
    child.once('exit', (code, signal) => resolve({ code, signal }));
  });
}

const build = await run('pnpm', ['build:shared']);
if (build.code !== 0) process.exit(build.code ?? 1);

printAddresses(docsOnly ? 'UXKM 문서 개발 서버 주소' : 'UXKM 전체 개발 서버 주소');

const child = spawn(
  'pnpm',
  [
    '--parallel',
    '--stream',
    ...filters.flatMap((filter) => ['--filter', filter]),
    'dev'
  ],
  { cwd: rootDirectory, stdio: 'inherit' }
);

const addressReminder = setTimeout(() => {
  printAddresses(docsOnly ? 'UXKM 문서 개발 서버가 실행되었습니다' : 'UXKM 전체 개발 서버가 실행되었습니다');
}, 5000);

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => child.kill(signal));
}

child.once('error', (error) => {
  clearTimeout(addressReminder);
  console.error(error);
  process.exitCode = 1;
});

child.once('exit', (code, signal) => {
  clearTimeout(addressReminder);
  if (signal) process.exitCode = 130;
  else process.exitCode = code ?? 1;
});
