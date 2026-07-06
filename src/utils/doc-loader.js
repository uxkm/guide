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

function getVueDocMeta(component) {
  return (
    component?.docMeta ?? {
      title: 'UXKM Guide',
      activeNav: '',
      pageTitle: '',
    }
  );
}

function resolveDoc(key) {
  const pagePath = `../doc/pages/${key}.vue`;
  if (pageDocs[pagePath]) {
    return pageDocs[pagePath].default;
  }

  const componentPath = `../doc/components/${key}.vue`;
  if (vueComponentDocs[componentPath]) {
    return vueComponentDocs[componentPath].default;
  }

  return null;
}

export function getDocByKey(key) {
  const component = resolveDoc(key);
  if (!component) {
    return null;
  }

  return {
    meta: getVueDocMeta(component),
    component,
  };
}

export function getAllDocSlugs() {
  return Object.keys(vueComponentDocs).map((path) =>
    path.replace('../doc/components/', '').replace('.vue', '')
  );
}
