<!--
  Modal 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmModal' });

// 열림 상태·크기·푸터 레이아웃 옵션을 prop으로 받습니다.
const props = defineProps({
  id: String, // 대화상자 DOM id입니다. 없으면 생성합니다.
  title: String, // 기본 헤더 제목입니다.
  size: { type: String, default: 'md' }, // 대화상자 크기입니다.
  scrollable: Boolean, // 본문만 스크롤하는 변형입니다.
  backdrop: { type: Boolean, default: true }, // 백드롭 클릭으로 닫을지 여부입니다.
  open: { type: Boolean, default: undefined }, // 제어형 열림 상태입니다.
  defaultOpen: Boolean, // 비제어형 초기 열림 상태입니다.
  footerAlign: { type: String, default: 'end' }, // 푸터 액션 정렬입니다.
  footerRatio: { type: String, default: '1-1' }, // even 정렬일 때 균등 버튼 비율입니다.
  footerNoPadBottom: Boolean, // 푸터 하단 패딩 제거입니다.
  closeLabel: { type: String, default: '닫기' }, // 닫기 버튼의 접근성 이름입니다.
});

const emit = defineEmits(['close']); // close · backdrop · escape 사유로 호출됩니다.
const internalOpen = ref(props.defaultOpen); // 비제어 열림 상태입니다.
const visible = computed(() => props.open ?? internalOpen.value); // 제어·비제어를 합친 최종 표시 상태입니다.
const root = ref(null); // 포커스용 루트 참조입니다.
const modalId = props.id || `modal-${Math.random().toString(36).slice(2, 9)}`; // 최종 루트 id입니다.
const titleId = `${modalId}-title`; // aria-labelledby에 연결할 제목 id입니다.
let previousFocus; // 닫힌 뒤 복원할 이전 포커스입니다.

// iframe에서도 최상위 문서에 Modal을 올리기 위한 포털 대상을 찾거나 만듭니다.
function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try {
    if (window.top?.document?.body) targetDocument = window.top.document;
  } catch {
    return document.body;
  }
  if (targetDocument === document) return document.body;
  const stylesheetUrl = new URL('styles/uxkm.css', targetDocument.baseURI);
  stylesheetUrl.searchParams.set('v', 'modal-contrast-20260819-2');
  let stylesheet = targetDocument.getElementById('uxkm-modal-portal-styles');
  if (!stylesheet) {
    stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-modal-portal-styles';
    stylesheet.rel = 'stylesheet';
    targetDocument.head.appendChild(stylesheet);
  }
  if (stylesheet.href !== stylesheetUrl.href) stylesheet.href = stylesheetUrl.href;
  let portal = targetDocument.getElementById('uxkm-modal-portal-root');
  if (!portal) {
    portal = targetDocument.createElement('div');
    portal.id = 'uxkm-modal-portal-root';
    portal.className = 'uxkm-modal-portal-root';
    targetDocument.body.appendChild(portal);
  }
  portal.dataset.theme = document.documentElement.dataset.theme || 'light';
  return portal;
}
const portalTarget = getPortalTarget();

// 크기·스크롤·열림 상태 클래스를 조합합니다.
const rootClasses = computed(() =>
  [
    'modal', // Modal 루트 클래스입니다.
    props.size !== 'md' && `modal_${props.size}`, // md가 아닐 때만 크기 변형입니다.
    props.scrollable && 'modal_scrollable', // 본문 스크롤 변형입니다.
    visible.value && 'is-open', // 열림 상태 클래스입니다.
  ].filter(Boolean),
);
// 푸터 정렬·비율·패딩 클래스를 조합합니다.
const footerClasses = computed(() =>
  [
    'modal_footer', // 푸터 루트 클래스입니다.
    props.footerAlign !== 'end' && `modal_footer-${props.footerAlign}`, // end가 아닐 때만 정렬 변형입니다.
    props.footerAlign === 'even' &&
      props.footerRatio !== '1-1' &&
      `modal_footer-even-${props.footerRatio}`, // even 비율입니다.
    props.footerNoPadBottom && 'modal_footer-no-pad-b', // 하단 패딩 제거입니다.
  ].filter(Boolean),
);

// 비제어면 내부 상태를 끄고 close 이벤트를 알립니다.
function close(reason = 'close', event) {
  if (props.open === undefined) internalOpen.value = false;
  emit('close', reason, event);
}
function keydown(event) {
  if (event.key === 'Escape') close('escape', event);
}
// 열림 시 스크롤 잠금·Escape·포커스를 연결합니다.
watch(
  visible,
  async (isOpen) => {
    const targetDocument = portalTarget?.ownerDocument || document;
    if (isOpen) {
      previousFocus = targetDocument.activeElement;
      targetDocument.body.classList.add('is-modal-open');
      targetDocument.addEventListener('keydown', keydown);
      await nextTick();
      root.value?.focus();
    } else {
      targetDocument.body.classList.remove('is-modal-open');
      targetDocument.removeEventListener('keydown', keydown);
      previousFocus?.focus?.();
    }
  },
  { immediate: true },
);
onBeforeUnmount(() =>
  (portalTarget?.ownerDocument || document).removeEventListener('keydown', keydown),
);
</script>

<template>
  <!-- 포털로 대화상자를 문서 최상위에 올립니다. -->
  <Teleport :to="portalTarget">
    <div
      v-if="visible"
      ref="root"
      :id="modalId"
      :class="rootClasses"
      data-component="Modal"
      data-modal
      role="dialog"
      aria-modal="true"
      :aria-labelledby="title || $slots.header ? titleId : undefined"
      tabindex="-1"
    >
      <!-- 백드롭 클릭으로 닫을 수 있습니다. -->
      <div
        v-if="backdrop"
        class="modal_backdrop"
        aria-hidden="true"
        @click="close('backdrop', $event)"
      />
      <div class="modal_dialog">
        <!-- 제목 또는 커스텀 헤더와 닫기 버튼입니다. -->
        <div v-if="title || $slots.header" class="modal_header">
          <slot name="header"
            ><h2 :id="titleId" class="modal_title">{{ title }}</h2></slot
          ><Button
            variant="ghost"
            icon-only
            class="modal_close"
            :aria-label="closeLabel"
            @click="close('close', $event)"
            ><Icon name="close" size="sm" class="modal_close-icon"
          /></Button>
        </div>
        <div class="modal_body"><slot>Modal</slot></div>
        <div v-if="$slots.footer" :class="footerClasses"><slot name="footer" :close="close" /></div>
      </div>
    </div>
  </Teleport>
</template>
