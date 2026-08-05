// 문서 전체를 첫 진입 청크에 포함하지 않고 현재 경로의 문서만 로드합니다.
// glob의 키는 빌드 시 확정되므로 존재 여부와 정적 생성 대상은 동기적으로 확인할 수 있습니다.
const pageDocLoaders = import.meta.glob('../doc/pages/*.vue');
const vueComponentDocLoaders = import.meta.glob('../doc/components/*.vue');

function getVueDocMeta(docModule) {
  return (
    docModule?.docMeta ?? {
      title: 'UXKM Guide',
      activeNav: '',
      pageTitle: '',
    }
  );
}

function resolveDocLoader(key) {
  const pagePath = `../doc/pages/${key}.vue`;
  if (pageDocLoaders[pagePath]) {
    return pageDocLoaders[pagePath];
  }

  const componentPath = `../doc/components/${key}.vue`;
  if (vueComponentDocLoaders[componentPath]) {
    return vueComponentDocLoaders[componentPath];
  }

  return null;
}

export function hasDocByKey(key) {
  return resolveDocLoader(key) !== null;
}

export async function loadDocByKey(key) {
  const loader = resolveDocLoader(key);
  if (!loader) {
    return null;
  }

  const docModule = await loader();
  if (!docModule?.default) {
    return null;
  }

  return {
    meta: getVueDocMeta(docModule),
    component: docModule.default,
  };
}

export function getAllDocSlugs() {
  return Object.keys(vueComponentDocLoaders).map((path) =>
    path.replace('../doc/components/', '').replace('.vue', '')
  );
}
