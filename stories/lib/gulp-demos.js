/**
 * gulp src/components HTML에서 .demo_section-preview 블록을 추출한다.
 * (브라우저·Vite 번들 가능 — Node fs 없음)
 */

import { rewriteGuideHrefsForStorybook } from './storybook-links.js';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { PureArgsTable } from '@storybook/addon-docs/blocks';
import { ensure, ThemeProvider, themes } from 'storybook/theming';

/**
 * 속성 플래그가 있는 루트 요소 전체를 추출 (예: data-drawer, data-modal).
 * data-drawer-trigger 처럼 접두사가 긴 속성은 제외한다.
 * @param {string} html
 * @param {string} attrName e.g. 'data-drawer'
 * @returns {string[]}
 */
export function extractAttrElements(html, attrName) {
  const results = [];
  const openRe = new RegExp(
    '<div\\b[^>]*\\s' + attrName + '(?=[\\s>/])[^>]*>',
    'gi',
  );
  let match;

  while ((match = openRe.exec(html)) !== null) {
    const openStart = match.index;
    const openEnd = openStart + match[0].length;
    let depth = 1;
    let i = openEnd;

    while (i < html.length && depth > 0) {
      const nextOpen = html.indexOf('<div', i);
      const nextClose = html.indexOf('</div>', i);

      if (nextClose === -1) break;

      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth += 1;
        i = nextOpen + 4;
        continue;
      }

      depth -= 1;

      if (depth === 0) {
        results.push(html.slice(openStart, nextClose + 6).trim());
        openRe.lastIndex = nextClose + 6;
        break;
      }

      i = nextClose + 6;
    }
  }

  return results;
}

/**
 * @param {string} html
 * @param {string} classToken e.g. 'demo_section-preview'
 */
function findElementBounds(html, classToken) {
  const re = new RegExp(
    '<div\\s+class="([^"]*\\b' + classToken + '(?!-)[^"]*)"[^>]*>',
    'i',
  );
  const match = re.exec(html);

  if (!match) return null;

  const start = match.index + match[0].length;
  let depth = 1;
  let i = start;

  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);

    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
      continue;
    }

    depth -= 1;

    if (depth === 0) {
      return {
        start,
        className: match[1],
        inner: html.slice(start, nextClose),
        end: nextClose + 6,
      };
    }

    i = nextClose + 6;
  }

  return null;
}

/**
 * @param {string} html
 * @returns {{ heading: string, description: string, previewHtml: string, stack: boolean, start: boolean }[]}
 */
export function extractDemoSections(html) {
  const sections = [];
  const sectionRe =
    /<section\s+[^>]*\bclass="[^"]*\bdemo_section\b[^"]*"[^>]*>([\s\S]*?)<\/section>/gi;
  let match;

  while ((match = sectionRe.exec(html)) !== null) {
    const inner = match[1];
    const headingMatch = inner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const leadMatch = inner.match(
      /<div class="demo_section-header">[\s\S]*?<p>([\s\S]*?)<\/p>/i,
    );
    const preview = findElementBounds(inner, 'demo_section-preview');

    if (!preview) continue;

    const className = preview.className || '';

    sections.push({
      heading: headingMatch ? headingMatch[1].replace(/<[^>]+>/g, '').trim() : '',
      description: leadMatch ? leadMatch[1].replace(/<[^>]+>/g, '').trim() : '',
      previewHtml: preview.inner.trim(),
      stack: /\bdemo_section-preview-stack\b/.test(className),
      start: /\bdemo_section-preview-start\b/.test(className),
      plain: /\bdemo_section-preview-plain\b/.test(className),
    });
  }

  return sections;
}

/**
 * 하단 API 표 섹션 (클래스 · 속성 / 디자인 토큰 등 — demo_section 아님)
 * @param {string} html
 * @returns {{ heading: string, description: string, previewHtml: string, stack: boolean, start: boolean }[]}
 */
export function extractApiSections(html) {
  const sections = [];
  const sectionRe = /<section\s+([^>]*)>([\s\S]*?)<\/section>/gi;
  let match;

  while ((match = sectionRe.exec(html)) !== null) {
    const attrs = match[1];
    const inner = match[2];

    if (/\bdemo_section\b/.test(attrs)) continue;

    const headingMatch = inner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const heading = headingMatch
      ? headingMatch[1].replace(/<[^>]+>/g, '').trim()
      : '';

    if (!/클래스|속성|토큰|API|마크업|자주 쓰는/i.test(heading)) continue;

    const preview = findElementBounds(inner, 'demo_section-preview');
    if (!preview) continue;

    const leadMatch = inner.match(/<h2[^>]*>[\s\S]*?<\/h2>\s*<p>([\s\S]*?)<\/p>/i);
    const className = preview.className || '';

    sections.push({
      heading,
      description: leadMatch ? leadMatch[1].replace(/<[^>]+>/g, '').trim() : '',
      previewHtml: preview.inner.trim(),
      stack: /\bdemo_section-preview-stack\b/.test(className),
      start: /\bdemo_section-preview-start\b/.test(className),
      api: true,
    });
  }

  return sections;
}

/**
 * @param {string} html 컴포넌트 HTML (?raw import)
 * @param {number} [index]
 */
export function getDemo(html, index = 0) {
  const sections = extractDemoSections(html);
  const section = sections[index];
  if (!section) {
    throw new Error(`Demo not found at index ${index}`);
  }
  return section;
}

/**
 * docs 전용 — 가이드 페이지 본문만 표시 (meta 제외)
 * @param {string} html
 * @returns {string}
 */
export function pageBody(html) {
  return html.replace(/<!--\s*@meta[\s\S]*?-->/, '').trim();
}

/**
 * 가이드 .demo_section-preview와 동일한 간격으로 렌더 (소스 코드에는 래퍼 미포함)
 * @param {string} html
 * @param {{ stack?: boolean, start?: boolean, plain?: boolean }} [options]
 */
export function renderHtml(html, options = {}) {
  const el = document.createElement('div');
  const classes = ['sb-demo-layout'];

  if (options.stack) classes.push('sb-demo-layout_stack');
  if (options.start) classes.push('sb-demo-layout_start');
  if (options.plain) classes.push('sb-demo-layout_plain');

  el.className = classes.join(' ');
  el.innerHTML = rewriteGuideHrefsForStorybook(
    html.replace(/\.\.\/images\//g, '/images/'),
  );
  return el;
}

/**
 * Storybook Docs 전용 API 표 — 가이드 표의 내용만 Storybook 표 구조로 변환
 * @param {string} html
 * @returns {HTMLDivElement}
 */
export function renderApiTable(html) {
  const source = document.createElement('div');
  const container = document.createElement('div');

  source.innerHTML = rewriteGuideHrefsForStorybook(html);
  container.className = 'sb-api-table';

  const table = source.querySelector('table');
  const headers = Array.from(table?.querySelectorAll('thead th') || []).map((cell) =>
    cell.textContent.trim(),
  );
  const descriptionIndex = headers.findIndex((label) => /설명|description/i.test(label));
  const defaultIndex = headers.findIndex((label) => /기본값|default/i.test(label));
  const rows = {};

  table?.querySelectorAll('tbody tr').forEach((row, index) => {
    const cells = Array.from(row.querySelectorAll('th, td'));
    const name = cells[0]?.textContent.trim() || `API ${index + 1}`;
    const description = cells[descriptionIndex]?.textContent.trim() || '';
    const defaultValue = cells[defaultIndex]?.textContent.trim() || '';

    rows[`api-${index}`] = {
      name,
      description,
      table: defaultValue ? { defaultValue: { summary: defaultValue } } : {},
    };
  });

  const themeName = document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light';
  container.innerHTML = renderToStaticMarkup(
    React.createElement(
      ThemeProvider,
      { theme: ensure(themes[themeName]) },
      React.createElement(PureArgsTable, { rows, sort: 'none' }),
    ),
  );

  return container;
}

/**
 * 소개 · 설치 · 디자인 토큰 등 문서 페이지 — 데모 박스 없이 본문만 렌더
 * @param {string} html
 */
export function renderGuidePage(html) {
  const el = document.createElement('div');
  el.className = 'sb-guide-page';
  el.innerHTML = rewriteGuideHrefsForStorybook(
    html.replace(/\.\.\/images\//g, '/images/'),
  );
  return el;
}

/**
 * 가이드 문서 페이지용 Docs 파라미터 — preview 박스·Show code·설명 중복 없음
 * @returns {object}
 */
export function guidePageDocsParameters() {
  return {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component: null,
        story: null,
      },
      canvas: {
        sourceState: 'none',
        withToolbar: false,
      },
    },
  };
}

/**
 * @param {{ previewHtml: string, stack?: boolean, start?: boolean, plain?: boolean, api?: boolean }} demo
 */
export function renderDemo(demo) {
  if (demo.api) return renderApiTable(demo.previewHtml);

  return renderHtml(demo.previewHtml, {
    stack: demo.stack,
    start: demo.start,
    plain: demo.plain,
  });
}

/**
 * docs source — gulp HTML이 Show code에 표시됨
 * @param {string} code
 */
export function gulpSource(code) {
  return {
    docs: {
      source: {
        code,
        language: 'html',
        type: 'code',
      },
    },
  };
}
