import { NAV_GROUPS } from '@/data/navigation';

const PAGE_DOCS = {
  intro: {
    route: [],
    title: 'HTML Components | UXKM Guide',
    pageTitle: '소개',
  },
  'getting-started': {
    route: ['getting-started'],
    title: '설치 및 사용 | UXKM Guide',
    pageTitle: '설치 및 사용',
  },
  'design-tokens': {
    route: ['design-tokens'],
    title: '디자인 토큰 | UXKM Guide',
    pageTitle: '디자인 토큰',
  },
};

const COMPONENT_DOCS = Object.fromEntries(
  NAV_GROUPS.flatMap((group) => group.items)
    .filter((item) => item.to.startsWith('/components/'))
    .map((item) => [
      item.slug,
      {
        route: ['components', item.slug],
        title: `${item.label} | UXKM Guide`,
        pageTitle: item.label,
      },
    ]),
);

const DOCS = {
  ...PAGE_DOCS,
  ...COMPONENT_DOCS,
};

export function hasDocKey(docKey) {
  return Object.hasOwn(DOCS, docKey);
}

export function getDocMetaByKey(docKey) {
  const doc = DOCS[docKey];

  if (!doc) {
    return {
      title: 'UXKM Guide',
      activeNav: '',
      pageTitle: 'UXKM Guide',
    };
  }

  return {
    title: doc.title,
    activeNav: docKey,
    pageTitle: doc.pageTitle,
  };
}

export function getDocKeyFromSegments(segments = []) {
  if (!segments?.length) return 'intro';
  if (segments.length === 1 && hasDocKey(segments[0])) return segments[0];
  if (segments.length === 2 && segments[0] === 'components' && hasDocKey(segments[1])) {
    return segments[1];
  }
  return null;
}

export function getAllDocRouteParams() {
  return Object.values(DOCS).map(({ route }) => ({ slug: route }));
}
