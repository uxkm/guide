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
    color: 'gulp',
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
    label: 'Styles',
    shortLabel: 'SCSS',
    path: 'packages/styles',
    description: '공통 스타일, 테마 및 컴포넌트 SCSS',
    badge: 'Shared package',
    color: 'styles',
    group: 'packages'
  },
  {
    label: 'Assets',
    shortLabel: 'A',
    path: 'packages/assets',
    description: '공용 폰트, 이미지 및 아이콘 자산',
    badge: 'Shared package',
    color: 'assets',
    group: 'packages'
  },
  {
    label: 'Tokens',
    shortLabel: 'T',
    path: 'packages/tokens',
    description: '색상, 간격, 타이포그래피 디자인 토큰',
    badge: 'Shared package',
    color: 'tokens',
    group: 'packages'
  },
  {
    label: 'Content',
    shortLabel: 'C',
    path: 'packages/content',
    description: '프레임워크 독립 문서 및 컴포넌트 콘텐츠',
    badge: 'Shared package',
    color: 'content',
    group: 'packages'
  },
  {
    label: 'Component Specs',
    shortLabel: 'API',
    path: 'packages/component-specs',
    description: '컴포넌트 API, 동작 및 접근성 기준 명세',
    badge: 'Shared package',
    color: 'specs',
    group: 'packages'
  },
  {
    label: 'Navigation',
    shortLabel: 'NAV',
    path: 'packages/navigation',
    description: '문서 탐색 구조와 컴포넌트 노출 순서',
    badge: 'Shared package',
    color: 'navigation',
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

function renderCards(group) {
  return workspaceDetails
    .filter((workspace) => workspace.group === group)
    .map(
      ({ label, shortLabel, path, name, description, badge, color }) => `
        <article class="card card--${color}${group === 'packages' ? ' card--compact' : ''}">
          <span class="card-icon" aria-hidden="true">${shortLabel}</span>
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
      .card--gulp { --card-color: #cf4647; --card-soft: rgba(207, 70, 71, 0.14); }
      .card--vue { --card-color: #2e8b63; --card-soft: rgba(46, 139, 99, 0.14); }
      .card--react { --card-color: #087ea4; --card-soft: rgba(8, 126, 164, 0.14); }
      .card--nuxt { --card-color: #00a86b; --card-soft: rgba(0, 168, 107, 0.14); }
      .card--next { --card-color: #202631; --card-soft: rgba(32, 38, 49, 0.1); }
      .card--storybook { --card-color: #d93472; --card-soft: rgba(217, 52, 114, 0.14); }
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
        font-size: 0.86rem;
        font-weight: 800;
        letter-spacing: -0.025em;
      }

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

server.listen(port, host, () => {
  console.log(`UXKM monorepo dev server: http://${host}:${port}`);
});
