import { ref } from 'vue';

const pageDocs = import.meta.glob('../doc/pages/*.vue', {
  eager: true,
});

const vueComponentDocs = import.meta.glob('../doc/components/*.vue', {
  eager: true,
});

export const docRevision = ref(0);

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    docRevision.value += 1;
  });
}

function getVueDocMeta(docModule) {
  return (
    docModule?.docMeta ?? {
      title: 'UXKM Guide',
      activeNav: '',
      pageTitle: '',
    }
  );
}

function resolveDocModule(key) {
  const pagePath = `../doc/pages/${key}.vue`;
  if (pageDocs[pagePath]) {
    return pageDocs[pagePath];
  }

  const componentPath = `../doc/components/${key}.vue`;
  if (vueComponentDocs[componentPath]) {
    return vueComponentDocs[componentPath];
  }

  return null;
}

export function getDocByKey(key) {
  const docModule = resolveDocModule(key);
  if (!docModule?.default) {
    return null;
  }

  return {
    meta: getVueDocMeta(docModule),
    component: docModule.default,
  };
}

export function getAllDocSlugs() {
  return Object.keys(vueComponentDocs).map((path) =>
    path.replace('../doc/components/', '').replace('.vue', '')
  );
}
