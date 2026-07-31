const STATIC_PATH_TO_DOC_KEY = {
  '/': 'intro',
  '/getting-started': 'getting-started',
  '/design-tokens': 'design-tokens',
};

/** pathname에서 문서 slug를 해석합니다. */
export function getDocKeyFromPathname(pathname) {
  const normalized = pathname.replace(/\/+$/, '') || '/';

  if (STATIC_PATH_TO_DOC_KEY[normalized]) {
    return STATIC_PATH_TO_DOC_KEY[normalized];
  }

  const componentMatch = normalized.match(/^\/components\/([^/]+)$/);
  if (componentMatch?.[1]) {
    return decodeURIComponent(componentMatch[1]);
  }

  return 'intro';
}
