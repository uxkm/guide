import { useEffect, useState } from 'react';

let docRevisionCounter = 0;
const docRevisionListeners = new Set();

export const docRevision = {
  get value() {
    return docRevisionCounter;
  },
  subscribe(listener) {
    docRevisionListeners.add(listener);
    return () => docRevisionListeners.delete(listener);
  },
};

function bumpDocRevision() {
  docRevisionCounter += 1;
  docRevisionListeners.forEach((listener) => listener());
}

const pageDocs = import.meta.glob('../doc/pages/*.jsx', {
  eager: true,
});

const componentDocs = import.meta.glob('../doc/components/*.jsx', {
  eager: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    bumpDocRevision();
  });
}

function getDocMeta(module) {
  return (
    module?.docMeta ?? {
      title: 'UXKM Guide',
      activeNav: '',
      pageTitle: '',
    }
  );
}

function resolveDoc(key) {
  const pagePath = `../doc/pages/${key}.jsx`;
  if (pageDocs[pagePath]) {
    return pageDocs[pagePath].default;
  }

  const componentPath = `../doc/components/${key}.jsx`;
  if (componentDocs[componentPath]) {
    return componentDocs[componentPath].default;
  }

  return null;
}

export function getDocByKey(key) {
  const DocComponent = resolveDoc(key);
  if (!DocComponent) {
    return null;
  }

  const module = pageDocs[`../doc/pages/${key}.jsx`] ?? componentDocs[`../doc/components/${key}.jsx`];

  return {
    meta: getDocMeta(module),
    component: DocComponent,
  };
}

export function getAllDocSlugs() {
  return Object.keys(componentDocs).map((path) =>
    path.replace('../doc/components/', '').replace('.jsx', ''),
  );
}

export function useDocRevision() {
  const [, setTick] = useState(docRevisionCounter);

  useEffect(() => {
    return docRevision.subscribe(() => setTick(docRevisionCounter));
  }, []);

  return docRevisionCounter;
}
