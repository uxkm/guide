import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const host = process.env.HOST ?? '127.0.0.1';
const port = Number.parseInt(process.env.PORT ?? '3000', 10);
const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const rootDirectory = join(scriptDirectory, '..');

const workspaces = [
  {
    label: 'HTML',
    shortLabel: 'HTML',
    path: 'apps/html',
    description: '순수 HTML, CSS, JavaScript 기반 컴포넌트 가이드',
    badge: 'Vanilla · HTML',
    color: 'html',
    group: 'apps'
  },
  {
    label: 'Gulp / Nunjucks',
    shortLabel: 'G',
    path: 'apps/gulp',
    description: 'Gulp와 Nunjucks 템플릿 기반 정적 컴포넌트 가이드',
    badge: 'Gulp · Nunjucks',
    color: 'nunjucks',
    group: 'apps'
  },
  {
    label: 'Vue',
    shortLabel: 'V',
    path: 'apps/vue',
    description: 'Vue와 Vite 기반 컴포넌트 애플리케이션',
    badge: 'Vue · Vite',
    color: 'vue',
    group: 'apps'
  },
  {
    label: 'React',
    shortLabel: 'R',
    path: 'apps/react',
    description: 'React와 Vite 기반 컴포넌트 애플리케이션',
    badge: 'React · Vite',
    color: 'react',
    group: 'apps'
  },
  {
    label: 'Nuxt',
    shortLabel: 'N',
    path: 'apps/nuxt',
    description: 'Nuxt 기반 Vue 컴포넌트 정적 가이드',
    badge: 'Vue · Nuxt',
    color: 'nuxt',
    group: 'apps'
  },
  {
    label: 'Next.js',
    shortLabel: 'N',
    path: 'apps/next',
    description: 'App Router 기반 React 컴포넌트 정적 가이드',
    badge: 'React · Next.js',
    color: 'next',
    group: 'apps'
  },
  {
    label: 'Storybook',
    shortLabel: 'S',
    path: 'apps/storybook',
    description: '프레임워크별 예제와 API를 제공하는 통합 문서',
    badge: 'Docs · Storybook',
    color: 'storybook',
    group: 'apps'
  },
  {
    label: 'Vue Guidebook',
    shortLabel: 'V · N',
    path: 'apps/guidebook/vue',
    description: 'Vue와 Nuxt의 문법 및 구현 방식을 비교하는 학습 가이드',
    badge: 'Vue · Nuxt',
    color: 'vue-guidebook',
    group: 'guidebooks'
  },
  {
    label: 'React Guidebook',
    shortLabel: 'R · N',
    path: 'apps/guidebook/react',
    description: 'React와 Next.js의 문법 및 구현 방식을 비교하는 학습 가이드',
    badge: 'React · Next.js',
    color: 'react-guidebook',
    group: 'guidebooks'
  },
  {
    label: 'Styles',
    shortLabel: 'SCSS',
    path: 'packages/styles',
    description: '공통 스타일, 테마 및 컴포넌트 SCSS',
    badge: 'Shared package',
    color: 'styles',
    group: 'packages'
  }
];

const workspaceDetails = await Promise.all(
  workspaces.map(async (workspace) => {
    const packageJson = JSON.parse(
      await readFile(join(rootDirectory, workspace.path, 'package.json'), 'utf8')
    );

    return { ...workspace, name: packageJson.name };
  })
);

const logoAssets = new Map([
  ['/assets/logo_184.gif', await readFile(join(scriptDirectory, 'assets/logo_184.gif'))],
  [
    '/assets/logo_140_desktop.gif',
    await readFile(join(scriptDirectory, 'assets/logo_140_desktop.gif'))
  ]
]);

const icons = {
  html: `<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M8 4h32l-3 34-13 6-13-6L8 4Z"/><path fill="#fff" d="M14.5 12h19l-.5 5H20l.4 5H32l-1.2 13L24 38l-6.8-3-.6-7h5l.3 3.5 2.1.9 2.2-.9.4-4.5H16L14.5 12Z"/></svg>`,
  nunjucks: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M0 12v12h24V0H0v12Zm8.2-1.9V3h3v17.3h-3c-.7-2.5-1.4-5-2.2-7.5v7.5H3V3h3c.8 2.3 1.5 4.7 2.2 7.1ZM20.9 7v11.6c0 .2-.1.7-.5 1.1-.4.4-.8.5-.9.6h-5.1c-.2 0-.7-.1-1-.5-.4-.4-.5-.9-.6-1.2v-3.8c1-.2 2-.5 3-.7v3.1h2.1V7h3ZM0 24"/></svg>`,
  vue: `<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M4 9h9l11 18L35 9h9L24 41 4 9Z"/><path fill="#fff" d="M13 9h6l5 8 5-8h6L24 27 13 9Z"/></svg>`,
  react: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><ellipse cx="24" cy="24" rx="20" ry="8"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)"/><circle cx="24" cy="24" r="3.5" fill="currentColor" stroke="none"/></svg>`,
  nuxt: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M5 37.5 19.5 12.4a2.6 2.6 0 0 1 4.5 0l14.5 25.1H5Z" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/><path d="m23.5 37.5 7.8-13.6a2.6 2.6 0 0 1 4.5 0l7.8 13.6H23.5Z" fill="#fff" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/></svg>`,
  next: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2.5"/><path d="M16 33V15l17.5 22M32 15v14" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  storybook: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path stroke="currentColor" stroke-width="2" d="M12 6.8 35.8 5a2 2 0 0 1 2.2 2v34a2 2 0 0 1-2.1 2L12 40.8a2 2 0 0 1-1.8-2V8.8A2 2 0 0 1 12 6.8Z"/><path fill="currentColor" d="M29.8 9.8 33 7.3l.3 6-3.3-.2-.2-3.3ZM18 31.7c.9 2.3 3 3.7 5.8 3.7 3.8 0 6.2-2 6.2-5.2 0-3.5-2.8-4.7-5.5-5.8-2-.8-3.7-1.5-3.7-3.1 0-1.3 1-2.1 2.7-2.1 1.8 0 3 .9 3.7 2.6l2.4-1.5c-1.1-2.7-3.2-4.1-6.2-4.1-3.5 0-5.8 2.1-5.8 5.2 0 3.4 2.8 4.6 5.4 5.7 2 .8 3.7 1.5 3.7 3.2 0 1.4-1 2.2-2.9 2.2-1.7 0-2.9-.8-3.5-2.4L18 31.7Z"/></svg>`,
  book: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M7 9.5A5.5 5.5 0 0 1 12.5 4H22a5 5 0 0 1 5 5v31a6 6 0 0 0-6-6h-9a5 5 0 0 0-5 5V9.5Z" stroke="currentColor" stroke-width="2.7" stroke-linejoin="round"/><path d="M41 9.5A5.5 5.5 0 0 0 35.5 4H26v36a6 6 0 0 1 6-6h9V9.5Z" stroke="currentColor" stroke-width="2.7" stroke-linejoin="round"/><path d="M12 12h9M12 19h9M32 12h5M32 19h5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  styles: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M25 5C14 5 5 13 5 23s8 18 18 18h3a4 4 0 0 0 0-8h-2a3 3 0 0 1 0-6h7c7 0 12-4 12-10C43 10 35 5 25 5Z" stroke="currentColor" stroke-width="2.7"/><circle cx="14" cy="20" r="2.5" fill="currentColor"/><circle cx="20" cy="13" r="2.5" fill="currentColor"/><circle cx="29" cy="12" r="2.5" fill="currentColor"/><circle cx="36" cy="18" r="2.5" fill="currentColor"/></svg>`,
  assets: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="5" y="7" width="38" height="34" rx="4" stroke="currentColor" stroke-width="2.7"/><circle cx="16" cy="17" r="4" fill="currentColor"/><path d="m8 36 10-10 7 7 5-5 10 8" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  tokens: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M9 12h30M9 24h30M9 36h30" stroke="currentColor" stroke-width="2.7" stroke-linecap="round"/><circle cx="18" cy="12" r="5" fill="#fff" stroke="currentColor" stroke-width="2.7"/><circle cx="31" cy="24" r="5" fill="#fff" stroke="currentColor" stroke-width="2.7"/><circle cx="22" cy="36" r="5" fill="#fff" stroke="currentColor" stroke-width="2.7"/></svg>`,
  content: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M12 5h18l8 8v30H12V5Z" stroke="currentColor" stroke-width="2.7" stroke-linejoin="round"/><path d="M30 5v9h8M18 22h14M18 29h14M18 36h9" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  specs: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="m18 11-11 13 11 13M30 11l11 13-11 13M27 7l-6 34" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  navigation: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="24" r="19" stroke="currentColor" stroke-width="2.7"/><path d="m30.5 17.5-4 9-9 4 4-9 9-4Z" fill="currentColor"/><circle cx="24" cy="24" r="2.5" fill="#fff"/></svg>`
};

function renderIcon(color) {
  if (color === 'vue-guidebook' || color === 'react-guidebook') return icons.book;
  return icons[color] ?? icons.content;
}

function renderCards(group) {
  return workspaceDetails
    .filter((workspace) => workspace.group === group)
    .map(
      ({ label, path, name, description, badge, color }) => `
        <article class="card card--${color}${group === 'packages' ? ' card--compact' : ''}">
          <span class="card-icon">${renderIcon(color)}</span>
          <h3>${label}</h3>
          <p>${description}</p>
          <code class="package-name">${name}</code>
          <div class="card-meta">
            <span class="badge">${badge}</span>
            <span class="status">준비됨</span>
          </div>
          <span class="workspace-path">${path}</span>
        </article>`
    )
    .join('');
}

function renderPage() {
  const appCount = workspaceDetails.filter(({ group }) => group === 'apps').length;
  const guidebookCount = workspaceDetails.filter(({ group }) => group === 'guidebooks').length;
  const packageCount = workspaceDetails.filter(({ group }) => group === 'packages').length;

  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f4f6f9">
    <title>UXKM Framework Components</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f4f6f9;
        --surface: #ffffff;
        --border: #dce2eb;
        --text: #182131;
        --muted: #657286;
        --header-text: #f5f7fa;
      }

      * { box-sizing: border-box; margin: 0; padding: 0; }

      body {
        min-width: 320px;
        min-height: 100vh;
        color: var(--text);
        background: var(--bg);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans KR", sans-serif;
        line-height: 1.6;
      }

      .container { min-height: 100vh; padding-bottom: 4rem; }

      .page-header {
        margin-bottom: 3.25rem;
        padding: 3.5rem 2rem 3.75rem;
        color: var(--header-text);
        background: #000;
        text-align: center;
      }

      .brand {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 1.1rem;
        margin-bottom: 0.8rem;
      }

      .brand picture,
      .brand img { display: block; }

      .brand img { width: 184px; height: 78px; object-fit: contain; }

      .brand-title {
        padding-top: 0.2rem;
        font-size: clamp(1.55rem, 3vw, 2.2rem);
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: -0.035em;
      }

      .page-header p { color: #cbd2db; font-size: 1.05rem; }

      main { max-width: 1440px; margin: 0 auto; padding: 0 2rem; }

      .section + .section { margin-top: 4rem; }

      .section-header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1.4rem;
      }

      h2 { font-size: 1.55rem; line-height: 1.3; letter-spacing: -0.025em; }
      .section-count { color: var(--muted); font-size: 0.9rem; }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
      }

      .card {
        --card-color: #4f7df3;
        --card-soft: rgba(79, 125, 243, 0.12);
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 320px;
        overflow: hidden;
        padding: 2.5rem 2rem 2rem;
        color: var(--text);
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 22px;
        box-shadow: 0 16px 38px rgba(21, 31, 50, 0.09);
        transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
      }

      .card::before {
        content: "";
        position: absolute;
        inset: 0 0 auto;
        height: 4px;
        background: linear-gradient(90deg, var(--card-color) 0 45%, transparent 90%);
      }

      .card:hover {
        border-color: var(--card-color);
        box-shadow: 0 22px 48px rgba(21, 31, 50, 0.16);
        transform: translateY(-4px);
      }

      .card--html { --card-color: #d94f1d; --card-soft: rgba(217, 79, 29, 0.15); }
      .card--nunjucks { --card-color: #1c4913; --card-soft: rgba(28, 73, 19, 0.14); }
      .card--vue { --card-color: #2e8b63; --card-soft: rgba(46, 139, 99, 0.14); }
      .card--react { --card-color: #087ea4; --card-soft: rgba(8, 126, 164, 0.14); }
      .card--nuxt { --card-color: #00a86b; --card-soft: rgba(0, 168, 107, 0.14); }
      .card--next { --card-color: #202631; --card-soft: rgba(32, 38, 49, 0.1); }
      .card--storybook { --card-color: #d93472; --card-soft: rgba(217, 52, 114, 0.14); }
      .card--vue-guidebook { --card-color: #2e8b63; --card-soft: rgba(46, 139, 99, 0.14); }
      .card--react-guidebook { --card-color: #087ea4; --card-soft: rgba(8, 126, 164, 0.14); }
      .card--styles { --card-color: #bf4080; --card-soft: rgba(191, 64, 128, 0.13); }
      .card--assets { --card-color: #dc8b19; --card-soft: rgba(220, 139, 25, 0.14); }
      .card--tokens { --card-color: #7557c7; --card-soft: rgba(117, 87, 199, 0.13); }
      .card--content { --card-color: #3579c5; --card-soft: rgba(53, 121, 197, 0.13); }
      .card--specs { --card-color: #596579; --card-soft: rgba(89, 101, 121, 0.13); }
      .card--navigation { --card-color: #16877c; --card-soft: rgba(22, 135, 124, 0.13); }

      .card-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 58px;
        height: 58px;
        margin-bottom: 1.5rem;
        color: var(--card-color);
        background: var(--card-soft);
        border: 1px solid color-mix(in srgb, var(--card-color) 30%, transparent);
        border-radius: 16px;
      }

      .card-icon svg { display: block; width: 34px; height: 34px; }

      .card h3 { margin-bottom: 0.45rem; font-size: 1.3rem; line-height: 1.35; letter-spacing: -0.025em; }
      .card p { color: var(--muted); font-size: 0.96rem; }

      .package-name {
        display: block;
        margin-top: 1rem;
        color: var(--card-color);
        font-size: 0.82rem;
        overflow-wrap: anywhere;
      }

      .card-meta { display: flex; align-items: center; gap: 0.75rem; margin-top: auto; padding-top: 1.75rem; }

      .badge {
        color: var(--muted);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .status {
        margin-left: auto;
        padding: 0.3rem 0.75rem;
        color: var(--card-color);
        background: var(--card-soft);
        border-radius: 999px;
        font-size: 0.78rem;
        font-weight: 700;
      }

      .workspace-path { margin-top: 0.75rem; color: #8994a5; font-family: monospace; font-size: 0.76rem; }
      .card--compact { min-height: 285px; }

      footer { margin-top: 4rem; color: var(--muted); font-size: 0.875rem; text-align: center; }

      @media (max-width: 767px) {
        .page-header { padding: 2.5rem 1rem 2.75rem; }
        .brand { flex-direction: column; gap: 0.6rem; }
        .brand img { width: 140px; height: 59px; }
        main { padding: 0 1rem; }
        .grid { grid-template-columns: 1fr; gap: 1rem; }
        .card { min-height: 280px; padding: 2rem 1.5rem 1.5rem; }
      }

      @media (prefers-reduced-motion: reduce) {
        .card { transition: border-color 0.2s; }
        .card:hover { transform: none; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header class="page-header">
        <div class="brand">
          <picture>
            <source media="(max-width: 767px)" srcset="/assets/logo_140_desktop.gif">
            <img src="/assets/logo_184.gif" width="184" height="78" alt="UXKM">
          </picture>
          <span class="brand-title">Framework Components</span>
        </div>
        <p>프레임워크 컴포넌트와 공통 패키지를 관리하는 모노레포</p>
      </header>

      <main>
        <section class="section" aria-labelledby="apps-heading">
          <div class="section-header">
            <h2 id="apps-heading">Framework Applications</h2>
            <span class="section-count">${appCount}개 Workspace</span>
          </div>
          <div class="grid">${renderCards('apps')}</div>
        </section>

        <section class="section" aria-labelledby="guidebooks-heading">
          <div class="section-header">
            <h2 id="guidebooks-heading">Framework Guidebooks</h2>
            <span class="section-count">${guidebookCount}개 Workspace</span>
          </div>
          <div class="grid">${renderCards('guidebooks')}</div>
        </section>

        <section class="section" aria-labelledby="packages-heading">
          <div class="section-header">
            <h2 id="packages-heading">Shared Packages</h2>
            <span class="section-count">${packageCount}개 Workspace</span>
          </div>
          <div class="grid">${renderCards('packages')}</div>
        </section>
      </main>

      <footer><p>UXKM Framework Components · Development Workspace</p></footer>
    </div>
  </body>
</html>`;
}

const server = createServer((request, response) => {
  if (logoAssets.has(request.url)) {
    response.writeHead(200, {
      'content-type': 'image/gif',
      'cache-control': 'no-store'
    });
    response.end(logoAssets.get(request.url));
    return;
  }

  if (request.url === '/health') {
    response.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({ status: 'ok', workspaces: workspaceDetails.length }));
    return;
  }

  if (request.url !== '/') {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not Found');
    return;
  }

  response.writeHead(200, {
    'content-type': 'text/html; charset=utf-8',
    'cache-control': 'no-store'
  });
  response.end(renderPage());
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`포트 ${port}이 이미 사용 중입니다.`);
    console.error(`기존 서버를 종료하거나 PORT=${port + 1} pnpm dev로 실행하세요.`);
    process.exitCode = 1;
    return;
  }

  throw error;
});

server.listen(port, host, () => {
  console.log(`UXKM monorepo dev server: http://${host}:${port}`);
});
