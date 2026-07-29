/** SPA 내부 경로(`/…`)를 React Router navigate로 이동합니다. */
export function navigateInternal(navigate, href) {
  if (!href || href === '#') {
    return false;
  }

  if (!href.startsWith('/') || href.startsWith('//')) {
    return false;
  }

  const hashIndex = href.indexOf('#');
  const pathname = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const hash = hashIndex === -1 ? undefined : href.slice(hashIndex);

  navigate({ pathname, hash });
  return true;
}
