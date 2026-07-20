/** 가이드 라우트 → 스토리북 스토리 id */
const GUIDE_PAGE_STORY_IDS = {
  '/': 'intro',
  '/getting-started': 'getting-started',
  '/design-tokens': 'design-tokens',
};

/** 가이드 slug와 스토리 id가 다른 컴포넌트 */
const COMPONENT_SLUG_OVERRIDES = {
  collapse: 'components-collapse',
};

/**
 * 가이드 경로(/components/button 등)를 스토리북 스토리 id로 변환합니다.
 * @param {string} guideHref
 * @returns {string | null}
 */
export function guideHrefToStoryId(guideHref) {
  if (GUIDE_PAGE_STORY_IDS[guideHref]) {
    return GUIDE_PAGE_STORY_IDS[guideHref];
  }

  const match = guideHref.match(/^\/components\/(.+)$/);
  if (!match) return null;

  const slug = match[1];
  return COMPONENT_SLUG_OVERRIDES[slug] ?? `components-${slug}`;
}

/** 스토리북 루트 경로(배포 base 포함) */
export function getStorybookRootPath() {
  const { pathname } = window.top?.location ?? window.location;
  const root = pathname.replace(/\/iframe\.html$/, '').replace(/\/index\.html$/, '');
  return root.endsWith('/') ? root : `${root}/`;
}

/**
 * 스토리북 Docs 페이지 링크를 반환합니다.
 * iframe 미리보기에서도 동작하도록 top 기준 경로를 사용합니다.
 * @param {string} storyId
 * @returns {string}
 */
export function storybookDocsHref(storyId) {
  return `${getStorybookRootPath()}?path=/docs/${storyId}--docs`;
}

/**
 * 가이드 내부 링크를 스토리북 Docs 링크로 변환합니다.
 * @param {string} guideHref
 * @returns {string}
 */
export function guideHrefToStorybookDocsHref(guideHref) {
  const storyId = guideHrefToStoryId(guideHref);
  if (!storyId) return guideHref;
  return storybookDocsHref(storyId);
}
