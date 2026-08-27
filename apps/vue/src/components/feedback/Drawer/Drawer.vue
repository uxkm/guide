<!--
  Drawer 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmDrawer' });
// 열림 상태·방향·크기·푸터 레이아웃 옵션을 prop으로 받습니다.
const props = defineProps({
  id: String, // 패널 DOM id입니다. 없으면 생성합니다.
  title: String, // 기본 헤더 제목입니다.
  size: { type: String, default: 'md' }, // 패널 크기입니다.
  placement: { type: String, default: 'right' }, // 패널이 열리는 방향입니다.
  backdrop: { type: Boolean, default: true }, // 백드롭 클릭으로 닫을지 여부입니다.
  noBackdrop: Boolean, // 백드롭을 완전히 끄는 옵션입니다.
  open: { type: Boolean, default: undefined }, // 제어형 열림 상태입니다.
  defaultOpen: Boolean, // 비제어형 초기 열림 상태입니다.
  openOnLoad: Boolean, // 마운트 시 자동으로 엽니다.
  draggable: Boolean, // 하단 시트 드래그 핸들입니다.
  footerAlign: { type: String, default: 'end' }, // 푸터 액션 정렬입니다.
  footerRatio: { type: String, default: '1-1' }, // even 정렬일 때 균등 버튼 비율입니다.
  footerNoPadBottom: Boolean, // 푸터 하단 패딩 제거입니다.
  closeLabel: { type: String, default: '닫기' }, // 닫기 버튼의 접근성 이름입니다.
});
const emit = defineEmits(['close']); // close · backdrop · escape · drag 사유로 호출됩니다.
const internalOpen = ref(props.defaultOpen || props.openOnLoad); // 비제어 열림 상태입니다.
const visible = computed(() => props.open ?? internalOpen.value); // 제어·비제어를 합친 최종 표시 상태입니다.
const root = ref(null); // 포커스용 루트 참조입니다.
const panel = ref(null); // 드래그 높이 조절용 패널 참조입니다.
const drawerId = props.id || `drawer-${Math.random().toString(36).slice(2, 9)}`; // 최종 루트 id입니다.
const titleId = `${drawerId}-title`; // aria-labelledby에 연결할 제목 id입니다.
let previousFocus; // 닫힌 뒤 복원할 이전 포커스입니다.
let dragState; // 진행 중인 드래그 상태입니다.

// iframe에서도 최상위 문서에 Drawer를 올리기 위한 포털 대상을 찾거나 만듭니다.
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
  stylesheetUrl.searchParams.set('v', 'drawer-contrast-20260819');
  let stylesheet = targetDocument.getElementById('uxkm-drawer-portal-styles');
  if (!stylesheet) {
    stylesheet = targetDocument.createElement('link');
    stylesheet.id = 'uxkm-drawer-portal-styles';
    stylesheet.rel = 'stylesheet';
    targetDocument.head.appendChild(stylesheet);
  }
  if (stylesheet.href !== stylesheetUrl.href) stylesheet.href = stylesheetUrl.href;
  let portal = targetDocument.getElementById('uxkm-drawer-portal-root');
  if (!portal) {
    portal = targetDocument.createElement('div');
    portal.id = 'uxkm-drawer-portal-root';
    portal.className = 'uxkm-drawer-portal-root';
    targetDocument.body.appendChild(portal);
  }
  portal.dataset.theme = document.documentElement.dataset.theme || 'light';
  return portal;
}
const portalTarget = getPortalTarget();
const resolvedPlacement = computed(() =>
  ['left', 'right', 'top', 'bottom'].includes(props.placement) ? props.placement : 'right',
); // 검증된 열림 방향입니다.
const resolvedSize = computed(() => (['sm', 'md', 'lg'].includes(props.size) ? props.size : 'md')); // 검증된 크기입니다.
// 드래그 핸들은 bottom placement에서만 활성화합니다.
const showDragHandle = computed(() => props.draggable && resolvedPlacement.value === 'bottom');
const rootClasses = computed(() => ['drawer', visible.value && 'is-open'].filter(Boolean)); // 루트·열림 상태 클래스입니다.
// 방향·크기·드래그 가능 패널 클래스를 조합합니다.
const panelClasses = computed(() =>
  [
    'drawer_panel', // 패널 루트 클래스입니다.
    `drawer_placement-${resolvedPlacement.value}`, // 열림 방향입니다.
    resolvedSize.value !== 'md' && `drawer_${resolvedSize.value}`, // md가 아닐 때만 크기 변형입니다.
    showDragHandle.value && 'drawer_draggable', // 드래그 시트 변형입니다.
  ].filter(Boolean),
);
const footerClasses = computed(() =>
  [
    'drawer_footer', // 푸터 루트 클래스입니다.
    props.footerAlign !== 'end' && `drawer_footer-${props.footerAlign}`, // 정렬 변형입니다.
    props.footerAlign === 'even' &&
      props.footerRatio !== '1-1' &&
      `drawer_footer-even-${props.footerRatio}`, // even 비율입니다.
    props.footerNoPadBottom && 'drawer_footer-no-pad-b', // 하단 패딩 제거입니다.
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
// 하단 시트 드래그를 시작합니다.
function startDrag(event) {
  if (!showDragHandle.value || (event.button != null && event.button !== 0)) return;
  if (event.target.closest('.drawer_close, .drawer_extra, a, input, textarea, select')) return;
  const element = panel.value;
  if (!element) return;
  const stored = Number.parseFloat(element.dataset.collapsedHeight || '');
  const collapsed =
    element.classList.contains('is-expanded') && stored > 0
      ? stored
      : element.getBoundingClientRect().height;
  element.dataset.collapsedHeight = String(collapsed);
  const viewportHeight = element.ownerDocument.defaultView?.innerHeight || collapsed;
  dragState = {
    pointerId: event.pointerId,
    target: event.currentTarget,
    startY: event.clientY,
    startHeight: element.getBoundingClientRect().height,
    collapsed,
    expanded: Math.max(collapsed + 48, viewportHeight * 0.9),
    deltaY: 0,
  };
  element.classList.add('is-dragging');
  event.currentTarget.setPointerCapture?.(event.pointerId);
  event.preventDefault();
}
// 드래그 중 패널 높이를 갱신합니다.
function moveDrag(event) {
  const state = dragState;
  const element = panel.value;
  if (!state || !element || state.pointerId !== event.pointerId) return;
  const deltaY = state.startY - event.clientY;
  state.deltaY = deltaY;
  element.style.height = `${Math.min(state.expanded, Math.max(0, state.startHeight + deltaY))}px`;
  element.style.transform = 'translateY(0)';
  event.preventDefault();
}
// 드래그 종료 시 닫기·확장·축소 중 하나로 스냅합니다.
function endDrag(event) {
  const state = dragState;
  const element = panel.value;
  if (!state || !element || state.pointerId !== event.pointerId) return;
  dragState = null;
  element.classList.remove('is-dragging');
  try {
    state.target?.releasePointerCapture?.(state.pointerId);
  } catch {
    /* pointer capture가 이미 해제된 경우 */
  }
  const currentHeight = element.getBoundingClientRect().height;
  const expandThreshold = (state.collapsed + state.expanded) / 2;
  const startedExpanded = state.startHeight >= expandThreshold;
  element.style.height = '';
  element.style.transform = '';
  if (
    currentHeight < state.collapsed * 0.55 ||
    (!startedExpanded && state.deltaY < -state.collapsed * 0.4)
  ) {
    element.classList.remove('is-expanded');
    close('drag', event);
  } else if (currentHeight >= expandThreshold || (!startedExpanded && state.deltaY > 48)) {
    element.classList.add('is-expanded');
  } else {
    element.classList.remove('is-expanded');
  }
}
// 열림 시 스크롤 잠금·Escape·포커스를 연결합니다.
watch(
  visible,
  async (isOpen) => {
    const targetDocument = portalTarget?.ownerDocument || document;
    if (isOpen) {
      previousFocus = targetDocument.activeElement;
      targetDocument.body.classList.add('is-drawer-open');
      targetDocument.addEventListener('keydown', keydown);
      await nextTick();
      root.value?.focus();
    } else {
      targetDocument.body.classList.remove('is-drawer-open');
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
  <!-- 포털로 패널을 문서 최상위에 올립니다. -->
  <Teleport :to="portalTarget">
    <div
      v-if="visible"
      ref="root"
      :id="drawerId"
      :class="rootClasses"
      data-component="Drawer"
      data-drawer
      :data-drawer-draggable="showDragHandle ? 'true' : undefined"
      :data-drawer-backdrop="backdrop && !noBackdrop ? undefined : 'false'"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="title || $slots.header ? titleId : undefined"
      tabindex="-1"
    >
      <!-- 백드롭 클릭으로 닫을 수 있습니다. -->
      <div
        class="drawer_backdrop"
        aria-hidden="true"
        @click="backdrop && !noBackdrop && close('backdrop', $event)"
      />
      <div ref="panel" :class="panelClasses">
        <!-- 하단 시트용 드래그 핸들입니다. -->
        <div
          v-if="showDragHandle"
          class="drawer_handle"
          data-drawer-drag-handle
          aria-hidden="true"
          @pointerdown="startDrag"
          @pointermove="moveDrag"
          @pointerup="endDrag"
          @pointercancel="endDrag"
        >
          <span class="drawer_handle-bar" />
        </div>
        <div
          v-if="title || $slots.header"
          class="drawer_header"
          @pointerdown="showDragHandle && startDrag($event)"
          @pointermove="showDragHandle && moveDrag($event)"
          @pointerup="showDragHandle && endDrag($event)"
          @pointercancel="showDragHandle && endDrag($event)"
        >
          <slot name="header"
            ><h2 :id="titleId" class="drawer_title">{{ title }}</h2></slot
          >
          <div v-if="$slots.extra" class="drawer_extra"><slot name="extra" /></div>
          <Button
            variant="ghost"
            icon-only
            class="drawer_close"
            :aria-label="closeLabel"
            @click="close('close', $event)"
            ><Icon name="close" size="sm" class="drawer_close-icon"
          /></Button>
        </div>
        <div class="drawer_body"><slot>Drawer</slot></div>
        <div v-if="$slots.footer" :class="footerClasses"><slot name="footer" :close="close" /></div>
      </div>
    </div>
  </Teleport>
</template>
