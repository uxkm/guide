/** 가이드 HTML 경로 → 스토리북 스토리 id */
const GUIDE_PAGE_STORY_IDS = {
  '': 'intro',
  '.': 'intro',
  './': 'intro',
  'index.html': 'intro',
  './index.html': 'intro',
  'getting-started.html': 'getting-started',
  './getting-started.html': 'getting-started',
  'design-tokens.html': 'design-tokens',
  './design-tokens.html': 'design-tokens',
};

/**
 * @param {string} href path only (no hash/query)
 * @returns {string | null}
 */
export function guideHrefToStoryId(href) {
  const cleaned = href.trim().split(/[?#]/)[0];
  if (GUIDE_PAGE_STORY_IDS[cleaned]) {
    return GUIDE_PAGE_STORY_IDS[cleaned];
  }

  const componentMatch = cleaned.match(
    /^(?:\.\.\/|\.\/)?components\/(.+)\.html$/,
  );
  if (componentMatch) {
    return `components-${componentMatch[1]}`;
  }

  // 컴포넌트 HTML 내부의 bare 파일명 (예: button.html, spin.html)
  const bareMatch = cleaned.match(/^([a-z0-9-]+)\.html$/i);
  if (bareMatch) {
    const slug = bareMatch[1];
    if (GUIDE_PAGE_STORY_IDS[`${slug}.html`]) {
      return GUIDE_PAGE_STORY_IDS[`${slug}.html`];
    }
    return `components-${slug}`;
  }

  return null;
}

/** 스토리북 루트 경로(배포 base 포함) */
export function getStorybookRootPath() {
  const { pathname } = window.top?.location ?? window.location;
  const root = pathname.replace(/\/iframe\.html$/, '').replace(/\/index\.html$/, '');
  return root.endsWith('/') ? root : `${root}/`;
}

/**
 * @param {string} storyId
 * @returns {string}
 */
export function storybookDocsHref(storyId) {
  return `${getStorybookRootPath()}?path=/docs/${storyId}--docs`;
}

/**
 * @param {string} href
 * @returns {string}
 */
export function guideHrefToStorybookDocsHref(href) {
  const trimmed = href.trim();
  const hashIndex = trimmed.indexOf('#');
  const hash = hashIndex >= 0 ? trimmed.slice(hashIndex) : '';
  const withoutHash = hashIndex >= 0 ? trimmed.slice(0, hashIndex) : trimmed;
  const pathOnly = withoutHash.split('?')[0];
  const storyId = guideHrefToStoryId(pathOnly);
  if (!storyId) return href;
  return `${storybookDocsHref(storyId)}${hash}`;
}

/**
 * 가이드 HTML 본문의 내부 링크를 스토리북 Docs 링크로 변환합니다.
 * @param {string} html
 * @returns {string}
 */
export function rewriteGuideHrefsForStorybook(html) {
  return html.replace(/\bhref="([^"]+)"/g, (full, href) => {
    if (/^(https?:|mailto:|#|javascript:)/i.test(href)) return full;
    const next = guideHrefToStorybookDocsHref(href);
    if (next === href) return full;
    return `href="${next}" target="_top"`;
  });
}
