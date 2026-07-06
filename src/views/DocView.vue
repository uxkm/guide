<script setup>
import { ref, computed, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { docRevision, getDocByKey } from '@/utils/doc-loader';
import { initPageRoot } from '@/utils/init-page';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { initAffixAll } from '@/legacy/affix-init';
import { initBackTopAll } from '@/legacy/back-top-init';
import { initCarousel } from '@/legacy/carousel-init';
import { initOverlays } from '@/legacy/overlay-init';

const props = defineProps({
  docKey: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const contentRef = ref(null);
const renderKey = ref(0);

const doc = computed(() => {
  docRevision.value;
  renderKey.value;
  return getDocByKey(props.docKey);
});

async function initContent() {
  await nextTick();
  const root = contentRef.value;
  if (!root?.querySelectorAll) return;

  initPageRoot(root);

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

watch(doc, (value) => {
  if (value?.meta?.title) {
    document.title = value.meta.title;
  }
});

function onContentClick(event) {
  const link = event.target.closest('a[href^="/"]');
  const root = contentRef.value;
  if (!link || !root?.contains(link)) return;

  const href = link.getAttribute('href');
  if (!href || href.startsWith('//')) return;

  event.preventDefault();
  router.push(href);
}
</script>

<template>
  <main v-if="doc" ref="contentRef" class="guide_content" @click="onContentClick">
    <component
      :is="doc.component"
      :key="`${docKey}-${renderKey}`"
    />
  </main>
  <main v-else class="guide_content">
    <div class="page_intro">
      <h1>페이지를 찾을 수 없습니다</h1>
      <p class="lead">요청한 문서가 존재하지 않습니다.</p>
    </div>
  </main>
</template>
