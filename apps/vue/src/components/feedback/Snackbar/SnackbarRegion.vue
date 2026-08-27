<!--
  SnackbarRegion 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, provide } from 'vue';

// 배치 위치와 영역 접근성 이름을 prop으로 받습니다.
const props = defineProps({
  placement: { type: String, default: 'bottom-center' }, // 뷰포트 기준 배치 위치입니다.
  label: String, // 영역 접근성 이름입니다.
});

// 뷰포트 기준 8개 배치 위치입니다.
const placements = [
  'top-start',
  'top-center',
  'top-end',
  'middle-start',
  'middle-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
];
// 지원하지 않는 placement는 bottom-center로 되돌립니다.
const resolvedPlacement = computed(() =>
  placements.includes(props.placement) ? props.placement : 'bottom-center',
);
// 자식 Snackbar에 기본 placement를 전달합니다.
provide('snackbarPlacement', resolvedPlacement.value);

// iframe에서도 최상위 문서에 Snackbar를 올리기 위한 포털 대상을 찾거나 만듭니다.
function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try {
    if (window.top?.document?.body) targetDocument = window.top.document;
  } catch {
    return document.body;
  }
  if (targetDocument === document) return document.body;

  // 상위 문서에 UXKM 스타일이 없으면 연결합니다.
  if (!targetDocument.getElementById('uxkm-snackbar-portal-styles')) {
    const stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-snackbar-portal-styles';
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('styles/uxkm.css', targetDocument.baseURI).href;
    targetDocument.head.appendChild(stylesheet);
  }
  // 공유 포털 루트 노드를 재사용합니다.
  let root = targetDocument.getElementById('uxkm-snackbar-portal-root');
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = 'uxkm-snackbar-portal-root';
    targetDocument.body.appendChild(root);
  }
  root.dataset.theme = document.documentElement.dataset.theme || 'light';
  return root;
}

const portalTarget = getPortalTarget();
</script>

<template>
  <!-- 포털로 뷰포트 고정 영역을 올립니다. -->
  <Teleport :to="portalTarget">
    <div :class="['snackbar_region', `snackbar_region-${resolvedPlacement}`]" :aria-label="label">
      <slot />
    </div>
  </Teleport>
</template>
