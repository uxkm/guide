import { useLocation } from 'react-router-dom';

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

/** 현재 URL에서 문서 slug를 반환합니다. */
export function useDocKey() {
  const { pathname } = useLocation();
  return getDocKeyFromPathname(pathname);
}
