import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { formatDevUrls, getNetworkAddress } from './network-address.mjs';

const rootDirectory = join(dirname(fileURLToPath(import.meta.url)), '..');
const docsOnly = process.argv.includes('--docs-only');
const networkHost = getNetworkAddress();
const allServers = [
  ['Storybook', 6006],
  ['HTML', 6101],
  ['Gulp / Nunjucks', 6102],
  ['Vue', 6103],
  ['React', 6104],
  ['Nuxt', 6105],
  ['Next.js', 6106],
  ['Svelte', 6108],
  ['SolidJS', 6109],
  ['Qwik', 6110],
  ['Remix', 6111],
  ['Angular', 6112],
  ['Astro', 6113],
  ['Guidebook', 6107]
];

const allFilters = [
  '@uxkm/html',
  '@uxkm/gulp',
  '@uxkm/vue',
  '@uxkm/react',
  '@uxkm/nuxt',
  '@uxkm/next',
  '@uxkm/svelte',
  '@uxkm/solid',
  '@uxkm/qwik',
  '@uxkm/remix',
  '@uxkm/angular',
  '@uxkm/astro',
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
  console.log('='.repeat(72));
  for (const [label, port] of servers) {
    console.log(`${label.padEnd(labelWidth)}  ${formatDevUrls(port, networkHost)}`);
  }
  console.log('='.repeat(72));
  if (networkHost) {
    console.log('같은 Wi‑Fi에 연결된 기기에서는 네트워크 주소로 접속할 수 있습니다.');
  } else {
    console.log('네트워크 주소를 찾지 못했습니다. localhost로만 접속 가능합니다.');
  }
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
  {
    cwd: rootDirectory,
    stdio: 'inherit',
    env: { ...process.env, HOST: process.env.HOST ?? '0.0.0.0' }
  }
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
