import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createAssetUrl } from '@uxkm/assets/url';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import { loadEnv } from 'vite';

const appRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = join(appRoot, 'content');
const cliMode = process.argv.find((arg) => arg.startsWith('--mode='))?.slice('--mode='.length);
const mode = cliMode || (process.env.NODE_ENV === 'production' ? 'production' : 'development');
const env = { ...loadEnv(mode, appRoot, 'VITE_'), ...process.env };

function publicUrl(name, fallback, trailingSlash = false) {
  const value = env[name]?.trim() || fallback;
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${name}은 유효한 절대 URL이어야 합니다: ${value}`);
  }
  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new Error(`${name}은 HTTP 또는 HTTPS URL이어야 합니다: ${value}`);
  }
  if (trailingSlash && !url.pathname.endsWith('/')) url.pathname += '/';
  return url.href;
}

const isDev = mode === 'development';
const devPort = String(env.VITE_DEV_PORT || '6107').trim();
const devSiteUrl = publicUrl('VITE_DEV_SITE_URL', `http://localhost:${devPort}/`, true);
const siteUrl = isDev
  ? devSiteUrl
  : publicUrl('VITE_SITE_URL', 'https://guide.uxkm.io/', true);
const toAsset = createAssetUrl({
  base: isDev ? '/' : env.VITE_ASSET_BASE,
  siteUrl,
  isDev,
});
const socialImageUrl = isDev
  ? new URL(toAsset('images/brand/uxkm_logo_apng.png'), siteUrl).href
  : publicUrl('VITE_SOCIAL_IMAGE_URL', 'https://uxkm.io/_assets/images/_common/og_image.png');

async function collectMarkdown(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const target = join(directory, entry.name);
    return entry.isDirectory() ? collectMarkdown(target) : target.endsWith('.md') ? [target] : [];
  }));
  return files.flat();
}

const sourceFiles = await collectMarkdown(contentRoot);
const pages = (await Promise.all(sourceFiles.map(async (file) => {
  const source = await readFile(file, 'utf8');
  const { data, content } = matter(source);
  const required = ['id', 'group', 'path', 'label', 'title', 'eyebrow', 'lead', 'order'];
  const missing = required.filter((key) => data[key] === undefined);
  if (missing.length) throw new Error(`${relative(contentRoot, file)}: frontmatter 누락 (${missing.join(', ')})`);
  return { ...data, content, source: file };
}))).sort((a, b) => a.order - b.order);

const ids = new Set();
const paths = new Set();
for (const page of pages) {
  if (!/^[a-z0-9-]+$/.test(page.id)) throw new Error(`유효하지 않은 페이지 id: ${page.id}`);
  if (typeof page.path !== 'string' || !/^(?:[a-z0-9-]+\/)*$/.test(page.path)) {
    throw new Error(`유효하지 않은 페이지 path: ${page.path}`);
  }
  if (typeof page.order !== 'number') throw new Error(`order는 숫자여야 합니다: ${page.id}`);
  if (ids.has(page.id)) throw new Error(`중복 페이지 id: ${page.id}`);
  if (paths.has(page.path)) throw new Error(`중복 페이지 path: ${page.path}`);
  ids.add(page.id);
  paths.add(page.path);
}

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const rootPrefix = (page) => '../'.repeat(page.path.split('/').filter(Boolean).length) || './';
const pageHref = (fromPage, targetPage) => `${rootPrefix(fromPage)}${targetPage.path}`;
const pageFileHref = (fromPage, targetPage) => `${pageHref(fromPage, targetPage)}index.html`;
const componentSlug = (name) => name
  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  .replace(/\s+/g, '-')
  .toLowerCase();
const storybookMetaIds = new Map([
  ['Checkbox', 'components-checkbox'],
  ['Radio', 'components-radio'],
  ['Switch', 'components-switch'],
  ['Slider', 'components-slider'],
  ['DatePicker', '폼-datepicker'],
  ['Rate', 'components-rate'],
]);
const storybookHref = (category, name) => {
  const storyId = storybookMetaIds.get(name) || `${category}-${componentSlug(name)}`;
  return `http://localhost:6006/?path=/docs/${storyId}--docs`;
};

const storybookComponents = new Map(pages
  .filter((page) => page.storybookCategory)
  .map((page) => {
    const names = [...page.content.matchAll(/^\| ([A-Z][A-Za-z ]+) \|/gm)].map((match) => match[1]);
    return [page.label, { category: page.storybookCategory, names: new Set(names) }];
  }));

function linkStorybookComponents(page) {
  if (page.storybookCategory) {
    return page.content.replace(/^\| ([A-Z][A-Za-z ]+) \|/gm, (row, name) => (
      row.replace(name, `[${name}](${storybookHref(page.storybookCategory, name)})`)
    ));
  }

  if (page.id !== 'overview') return page.content;

  return page.content.replace(/^\| ([^|]+) \| (\d+) \| ([^|]+) \|$/gm, (row, label, count, namesCell) => {
    const componentGroup = storybookComponents.get(label.trim());
    if (!componentGroup) return row;
    const linkedNames = namesCell.split(',').map((name) => {
      const componentName = name.trim();
      return componentGroup.names.has(componentName)
        ? `[${componentName}](${storybookHref(componentGroup.category, componentName)})`
        : componentName;
    }).join(', ');
    return `| ${label.trim()} | ${count} | ${linkedNames} |`;
  });
}

function renderMarkdown(page) {
  const outline = [];
  const usedSlugs = new Map();
  const md = new MarkdownIt({ html: true, linkify: true });
  const defaultHeadingOpen = md.renderer.rules.heading_open || ((tokens, index, options, env, self) => self.renderToken(tokens, index, options));
  const defaultLinkOpen = md.renderer.rules.link_open || ((tokens, index, options, env, self) => self.renderToken(tokens, index, options));

  md.renderer.rules.link_open = (tokens, index, options, env, self) => {
    const token = tokens[index];
    const href = token.attrGet('href');
    if (href?.startsWith('http://localhost:6006/')) {
      const storybookPath = href.slice('http://localhost:6006/'.length);
      token.attrSet('href', `${rootPrefix(page)}storybook/${storybookPath}`);
      token.attrSet('data-storybook-path', storybookPath);
      token.attrSet('target', '_blank');
      token.attrSet('rel', 'noopener noreferrer');
    }
    return defaultLinkOpen(tokens, index, options, env, self);
  };

  md.renderer.rules.heading_open = (tokens, index, options, env, self) => {
    const token = tokens[index];
    const inline = tokens[index + 1];
    if (token.tag === 'h2' || token.tag === 'h3') {
      const base = inline.content.toLowerCase().normalize('NFKC')
        .replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
        .trim()
        .replace(/\s+/g, '-') || 'section';
      const count = usedSlugs.get(base) || 0;
      usedSlugs.set(base, count + 1);
      const id = count ? `${base}-${count + 1}` : base;
      token.attrSet('id', id);
      if (token.tag === 'h2') outline.push([id, inline.content]);
    }
    return defaultHeadingOpen(tokens, index, options, env, self);
  };

  md.renderer.rules.fence = (tokens, index) => {
    const token = tokens[index];
    const label = token.info.trim() || 'Code';
    return `<pre class="code-block"><span class="code-label">${escapeHtml(label)}</span><code>${escapeHtml(token.content)}</code></pre>\n`;
  };

  const markdown = linkStorybookComponents(page);

  return { html: md.render(markdown), outline };
}

const renderedPages = pages.map((page) => ({ ...page, ...renderMarkdown(page) }));
const groups = [...new Set(renderedPages.map((page) => page.group))];

function renderPage(page, index) {
  const prefix = rootPrefix(page);
  const canonicalUrl = new URL(page.path, siteUrl).href;
  const pageTitle = `${page.label} | UXKM Guidebook`;
  const sidebar = groups.map((group) => {
    const items = renderedPages.filter((item) => item.group === group);
    return `<p class="sidebar-label">${escapeHtml(group)}</p><ul class="nav-list${group === '가이드북' ? '' : ' nav-sub'}">${items.map((item) => `<li><a class="nav-link${item.id === page.id ? ' active' : ''}" href="${pageHref(page, item)}" data-guide-path="${item.path}index.html"${item.id === page.id ? ' aria-current="page"' : ''}>${escapeHtml(item.label)}</a></li>`).join('')}</ul>`;
  }).join('');
  const previous = renderedPages[index - 1];
  const next = renderedPages[index + 1];
  const pageNav = `<nav class="page-nav" aria-label="문서 페이지 이동">${previous ? `<a href="${pageFileHref(page, previous)}" data-guide-path="${previous.path}index.html"><small>이전</small><strong>← ${escapeHtml(previous.label)}</strong></a>` : '<span></span>'}${next ? `<a href="${pageFileHref(page, next)}" data-guide-path="${next.path}index.html"><small>다음</small><strong>${escapeHtml(next.label)} →</strong></a>` : '<span></span>'}</nav>`;
  const outline = page.outline.map(([id, label], outlineIndex) => `<a${outlineIndex === 0 ? ' class="active"' : ''} href="#${id}">${escapeHtml(label)}</a>`).join('');
  const searchResults = renderedPages.map((item) => `<a class="search-result" href="${pageHref(page, item)}" data-guide-path="${item.path}index.html"><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.group)}</span></a>`).join('');
  const title = page.titleLogo
    ? `<span class="guide-title"><img src="${toAsset('images/brand/uxkm_logo.svg')}" alt="UXKM"><span>${escapeHtml(page.title)}</span></span>`
    : escapeHtml(page.title);

  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index,follow">
    <meta name="format-detection" content="telephone=no, email=no, address=no">
    <meta name="title" content="${escapeHtml(pageTitle)}">
    <meta name="author" content="UXKM">
    <meta name="description" content="${escapeHtml(page.lead)}">
    <meta name="keywords" content="uxkm, uxkm guide, guidebook, ui, component, storybook, accessibility">
    <meta name="content-language" content="ko">
    <meta name="theme-color" content="#ffffff">
    <meta name="color-scheme" content="light">
    <meta name="application-name" content="UXKM Guidebook">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="ko_KR">
    <meta property="og:site_name" content="UXKM Guidebook">
    <meta property="og:title" content="${escapeHtml(pageTitle)}">
    <meta property="og:description" content="${escapeHtml(page.lead)}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:image" content="${socialImageUrl}">
    <meta property="og:image:width" content="1000">
    <meta property="og:image:height" content="750">
    <meta property="og:image:alt" content="UXKM Guide">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}">
    <meta name="twitter:description" content="${escapeHtml(page.lead)}">
    <meta name="twitter:image" content="${socialImageUrl}">
    <link rel="canonical" href="${canonicalUrl}">
    <link rel="icon" href="${toAsset('images/meta/favicon/favicon.ico')}" sizes="16x16 32x32">
    <link rel="icon" type="image/png" sizes="32x32" href="${toAsset('images/meta/favicon/favicon-32x32.png')}">
    <link rel="icon" type="image/png" sizes="16x16" href="${toAsset('images/meta/favicon/favicon-16x16.png')}">
    <link rel="apple-touch-icon" sizes="180x180" href="${toAsset('images/meta/favicon/apple-touch-icon.png')}">
    <link rel="manifest" href="${toAsset('images/meta/favicon/site.webmanifest')}">
    <title>${escapeHtml(pageTitle)}</title>
  </head>
  <body data-page="${escapeHtml(page.id)}">
    <header class="docs-header">
      <button class="menu-button" type="button" aria-label="목차 열기" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
      <div class="brand"><a class="brand-home" href="https://uxkm.io/" target="_blank" rel="noopener noreferrer" aria-label="UXKM.IO 새 창에서 열기"><img class="brand-logo" src="${toAsset('images/brand/uxkm_logo_hand.svg')}" alt="UXKM"></a><span class="brand-divider" aria-hidden="true"></span><a class="brand-product" href="${prefix}" data-guide-path="index.html"${page.id === 'overview' ? ' aria-current="page"' : ''}>Guidebook</a></div>
      <button class="search-trigger" type="button" aria-label="가이드북 검색 열기"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><span>가이드북 검색...</span><kbd>⌘ K</kbd></button>
      <a class="header-link" href="${prefix}storybook/" data-storybook-path="" target="_blank" rel="noopener noreferrer">Storybook ↗</a>
    </header>
    <aside class="docs-sidebar" aria-label="가이드북 목차">${sidebar}<p class="sidebar-footer">uxkm.io Guidebook</p></aside>
    <button class="sidebar-backdrop" type="button" aria-label="목차 닫기"></button>
    <div class="docs-shell"><main class="docs-content"><p class="eyebrow">${escapeHtml(page.eyebrow)}</p><h1>${title}</h1><p class="lead">${escapeHtml(page.lead)}</p><div class="markdown-body">${page.html}</div>${pageNav}</main></div>
    <aside class="page-outline"><strong>이 페이지에서</strong>${outline}</aside>
    <dialog class="search-dialog"><div class="search-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><input aria-label="가이드북 검색" placeholder="목차 검색"><button class="search-close" type="button" aria-label="검색 닫기"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div><div class="search-results">${searchResults}<p class="search-empty" hidden>검색 결과가 없습니다.</p></div></dialog>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>\n`;
}

await Promise.all(renderedPages.map(async (page, index) => {
  const directory = join(appRoot, page.path);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), renderPage(page, index));
}));

console.log(`Markdown 가이드 페이지 생성 완료: ${renderedPages.length}개`);
