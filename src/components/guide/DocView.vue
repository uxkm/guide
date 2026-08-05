<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue';
import { loadDocByKey } from '@/utils/doc-loader';

const props = defineProps({
  docKey: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const baseURL = useRuntimeConfig().app.baseURL;
const contentRef = ref(null);
const doc = shallowRef(await loadDocByKey(props.docKey));
let loadRevision = 0;
let contentCleanups = [];

async function loadDoc(docKey) {
  const revision = ++loadRevision;
  const nextDoc = await loadDocByKey(docKey);
  if (revision !== loadRevision || docKey !== props.docKey) return;

  doc.value = nextDoc;
  await nextTick();
  await initContent();
}

const docComponentProps = computed(() => {
  if (props.docKey !== 'intro') return {};
  return { resolveHref: resolveGuideHref };
});

function resolveGuideHref(href) {
  if (!href?.startsWith('/') || href.startsWith('//')) return href;
  return `${baseURL.replace(/\/$/, '')}${href}`;
}

async function initContent() {
  await nextTick();
  const root = contentRef.value;
  if (!root?.querySelectorAll) return;

  contentCleanups.forEach((cleanup) => cleanup());
  contentCleanups = [];

  if (root.querySelector('[data-affix]')) {
    const { initAffixAll } = await import('@/legacy/affix-init');
    contentCleanups.push(initAffixAll(root));
  }

  if (root.querySelector('[data-back-top]')) {
    const { initBackTopAll } = await import('@/legacy/back-top-init');
    contentCleanups.push(initBackTopAll(root));
  }

  if (root.querySelector('[data-swiper]')) {
    const [{ default: Swiper }, { initCarousel }] = await Promise.all([
      import('swiper/bundle'),
      import('@/legacy/carousel-init'),
    ]);
    initCarousel(root, Swiper);
  }

  if (root.querySelector('[data-dropdown], [data-popover], [data-tooltip]')) {
    const { initOverlays } = await import('@/legacy/overlay-init');
    initOverlays(root);
  }

  if (root.querySelector('.input_clearable')) {
    const { initInputClearAll } = await import('@/legacy/input-clear-init');
    initInputClearAll(root);
  }
}

watch(
  () => props.docKey,
  (docKey) => loadDoc(docKey),
);

onMounted(initContent);

onBeforeUnmount(() => {
  contentCleanups.forEach((cleanup) => cleanup());
  contentCleanups = [];
});

useHead(() => ({
  title: doc.value?.meta?.title || 'UXKM Guide',
}));

function onContentClick(event) {
  if (event.defaultPrevented) return;

  const link = event.target.closest('a[href^="/"]');
  const root = contentRef.value;
  if (!link || !root?.contains(link)) return;

  const href = link.getAttribute('href');
  if (!href || href.startsWith('//')) return;

  event.preventDefault();
  const routeHref = baseURL !== '/' && href.startsWith(baseURL)
    ? `/${href.slice(baseURL.length)}`
    : href;
  router.push(routeHref);
}
</script>

<template>
  <main v-if="doc" ref="contentRef" class="guide_content" @click="onContentClick">
    <component
      :is="doc.component"
      :key="docKey"
      v-bind="docComponentProps"
    />
  </main>
  <main v-else class="guide_content">
    <div class="page_intro">
      <h1>페이지를 찾을 수 없습니다</h1>
      <p class="lead">요청한 문서가 존재하지 않습니다.</p>
    </div>
  </main>
</template>
