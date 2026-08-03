<script setup>
import { ref, computed, watch, nextTick } from 'vue';
import { docRevision, getDocByKey } from '@/utils/doc-loader';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { initAffixAll } from '@/legacy/affix-init';
import { initBackTopAll } from '@/legacy/back-top-init';
import { initCarousel } from '@/legacy/carousel-init';
import { initOverlays } from '@/legacy/overlay-init';
import { initInputClearAll } from '@/legacy/input-clear-init';
import { initTextareaCountAll } from '@/legacy/textarea-count-init';

const props = defineProps({
  docKey: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const baseURL = useRuntimeConfig().app.baseURL;
const contentRef = ref(null);
const renderKey = ref(0);

const doc = computed(() => {
  docRevision.value;
  renderKey.value;
  return getDocByKey(props.docKey);
});

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

  if (root.querySelector('[data-affix]')) {
    initAffixAll(root);
  }

  if (root.querySelector('[data-back-top]')) {
    initBackTopAll(root);
  }

  if (root.querySelector('[data-swiper]')) {
    initCarousel(root, Swiper);
  }

  if (root.querySelector('[data-dropdown], [data-popover], [data-tooltip]')) {
    initOverlays(root);
  }

  if (root.querySelector('.input_clearable')) {
    initInputClearAll(root);
  }

  if (root.querySelector('.textarea_show-count')) {
    initTextareaCountAll(root);
  }
}

watch(
  () => [props.docKey, docRevision.value, renderKey.value],
  () => {
    initContent();
  },
  { immediate: true }
);

if (import.meta.hot) {
  import.meta.hot.on('vite:afterUpdate', (payload) => {
    const shouldRefresh = payload.updates.some(({ path }) =>
      /\/src\/(doc\/(components|pages)|components)\//.test(path)
    );

    if (shouldRefresh) {
      renderKey.value += 1;
    }
  });
}

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
      :key="`${docKey}-${renderKey}`"
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
