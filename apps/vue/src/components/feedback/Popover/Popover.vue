<!--
  Popover 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmPopover' });
// 배치·트리거·화살표·열림 상태 옵션을 prop으로 받습니다.
const props = defineProps({
  id: String, // 패널 DOM id입니다. 없으면 생성합니다.
  placement: { type: String, default: 'bottom' }, // 트리거 기준 배치입니다.
  size: { type: String, default: 'md' }, // 패널 크기입니다.
  offset: { type: String, default: 'md' }, // 전체 방향 공통 간격입니다.
  open: { type: Boolean, default: undefined }, // 제어형 열림 상태입니다.
  defaultOpen: Boolean, // 비제어형 초기 열림 상태입니다.
  offsetTop: String, // 위쪽 간격 개별 지정입니다.
  offsetRight: String, // 오른쪽 간격 개별 지정입니다.
  offsetBottom: String, // 아래쪽 간격 개별 지정입니다.
  offsetLeft: String, // 왼쪽 간격 개별 지정입니다.
  trigger: { type: String, default: 'click' }, // click 또는 hover 작동 방식입니다.
  title: String, // 패널 제목입니다.
  panelLabel: String, // 제목 없을 때 접근성 라벨입니다.
  noArrow: Boolean, // 화살표를 숨깁니다.
  closable: { type: Boolean, default: undefined }, // 닫기 버튼 표시입니다. 기본은 click일 때 켜집니다.
  disabled: Boolean, // 열기·닫기를 비활성화합니다.
  closeLabel: { type: String, default: '닫기' }, // 닫기 버튼의 접근성 이름입니다.
  panelAlign: { type: String, default: 'start' }, // 패널 정렬 기준입니다.
  arrowAnchor: { type: String, default: 'content' }, // 화살표 기준(content · target · mixed)입니다.
  arrowTargetAlign: { type: String, default: 'center' }, // 타깃 기준 화살표 정렬입니다.
});
const emit = defineEmits(['open-change']); // 열림 상태 변경 시 호출됩니다.
const internalOpen = ref(props.defaultOpen); // 비제어 열림 상태입니다.
const visible = computed(() => props.open ?? internalOpen.value); // 제어·비제어를 합친 최종 표시 상태입니다.
const triggerElement = ref(null); // 트리거 래퍼 참조입니다.
const panel = ref(null); // 패널 참조입니다.
const anchor = ref(null); // 트리거 뷰포트 좌표입니다.
const arrowPosition = ref('50%'); // 화살표 CSS 위치입니다.
const panelId = props.id || `popover-${Math.random().toString(36).slice(2, 9)}`; // 최종 패널 id입니다.
const titleId = `${panelId}-title`; // aria-labelledby에 연결할 제목 id입니다.
let hoverTimer; // hover 닫기 지연 타이머입니다.

// iframe에서도 최상위 문서에 Popover를 올리기 위한 포털 대상을 찾거나 만듭니다.
function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let targetDocument = document;
  try {
    if (window.top?.document?.body) targetDocument = window.top.document;
  } catch {
    return document.body;
  }
  if (targetDocument !== document) {
    const url = new URL('styles/uxkm.css', targetDocument.baseURI);
    url.searchParams.set('v', 'popover-20260819');
    let link = targetDocument.getElementById('uxkm-popover-portal-styles');
    if (!link) {
      link = targetDocument.createElement('link');
      link.id = 'uxkm-popover-portal-styles';
      link.rel = 'stylesheet';
      targetDocument.head.appendChild(link);
    }
    if (link.href !== url.href) link.href = url.href;
  }
  let root = targetDocument.getElementById('uxkm-popover-portal-root');
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = 'uxkm-popover-portal-root';
    root.className = 'uxkm-popover-portal-root';
    targetDocument.body.appendChild(root);
  }
  root.dataset.theme = document.documentElement.dataset.theme || 'light';
  return root;
}
const portalTarget = getPortalTarget();
const portalTheme =
  typeof document === 'undefined' ? 'light' : document.documentElement.dataset.theme || 'light';
// closable 미지정 시 click 트리거면 닫기 버튼을 켭니다.
const showClose = computed(() => props.closable ?? props.trigger === 'click');
// 배치·크기·간격·화살표 클래스를 조합합니다.
const classes = computed(() =>
  [
    'popover',
    'popover_portal',
    'is-open',
    props.size !== 'md' && `popover_${props.size}`,
    `popover_placement-${props.placement}`,
    props.offset !== 'md' && `popover_offset-${props.offset}`,
    ...[
      ['top', props.offsetTop],
      ['right', props.offsetRight],
      ['bottom', props.offsetBottom],
      ['left', props.offsetLeft],
    ]
      .filter(([, value]) => value && value !== 'md')
      .map(([side, value]) => `popover_offset-${side}-${value}`),
    props.panelAlign !== 'start' && `popover_panel-align-${props.panelAlign}`,
    props.arrowAnchor !== 'content' && `popover_arrow-anchor-${props.arrowAnchor}`,
    props.noArrow && 'popover_no-arrow',
  ].filter(Boolean),
);
function updateArrowPosition() {
  if (!anchor.value || !panel.value || !['target', 'mixed'].includes(props.arrowAnchor)) return;
  const rect = panel.value.getBoundingClientRect();
  const ratio =
    props.arrowTargetAlign === 'left' ? 0 : props.arrowTargetAlign === 'right' ? 1 : 0.5;
  const value = ['left', 'right'].includes(props.placement)
    ? anchor.value.top + anchor.value.height * ratio - rect.top
    : anchor.value.left + anchor.value.width * ratio - rect.left;
  arrowPosition.value = `${value}px`;
}
// 제어·비제어 열림 상태를 갱신하고 open-change를 알립니다.
function setVisible(next, reason, event) {
  if (props.disabled) return;
  if (props.open === undefined) internalOpen.value = next;
  emit('open-change', next, reason, event);
}
const triggerControlSelector =
  'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';
function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}
// 트리거 좌표를 측정해 포털 패널 위치를 맞춥니다.
function updatePosition() {
  const element = resolveTriggerAnchor(triggerElement.value);
  if (!element) return;
  const rect = element.getBoundingClientRect();
  let frame = { top: 0, left: 0 };
  try {
    if (element.ownerDocument !== window.top?.document)
      frame = window.frameElement?.getBoundingClientRect() || frame;
  } catch {
    /* 현재 좌표 */
  }
  anchor.value = {
    top: frame.top + rect.top,
    left: frame.left + rect.left,
    width: rect.width,
    height: rect.height,
  };
  nextTick(updateArrowPosition);
}
// hover 이탈 후 잠시 뒤 닫아 패널 이동을 허용합니다.
function scheduleClose(event) {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => setVisible(false, 'hover', event), 100);
}
function cancelClose() {
  clearTimeout(hoverTimer);
}
function openFromTrigger(reason, event) {
  updatePosition();
  setVisible(true, reason, event);
}
function toggleClick(event) {
  if (visible.value) setVisible(false, 'trigger', event);
  else openFromTrigger('trigger', event);
}
function hoverEnter(event) {
  cancelClose();
  openFromTrigger('hover', event);
}
function outside(event) {
  if (!triggerElement.value?.contains(event.target) && !panel.value?.contains(event.target))
    setVisible(false, 'outside', event);
}
function keydown(event) {
  if (event.key === 'Escape') setVisible(false, 'escape', event);
}
watch(
  visible,
  async (value) => {
    const targetDocument = portalTarget?.ownerDocument || document;
    if (value) {
      await nextTick();
      updatePosition();
      targetDocument.addEventListener('pointerdown', outside);
      document.addEventListener('pointerdown', outside);
      targetDocument.addEventListener('keydown', keydown);
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
    } else {
      targetDocument.removeEventListener('pointerdown', outside);
      document.removeEventListener('pointerdown', outside);
      targetDocument.removeEventListener('keydown', keydown);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    }
  },
  { immediate: true },
);
onBeforeUnmount(() => {
  clearTimeout(hoverTimer);
  const doc = portalTarget?.ownerDocument || document;
  doc.removeEventListener('pointerdown', outside);
  doc.removeEventListener('keydown', keydown);
});
</script>

<template>
  <!-- 트리거 래퍼와 포털 패널을 함께 렌더합니다. -->
  <span
    ref="triggerElement"
    class="popover_trigger"
    :aria-controls="panelId"
    :aria-expanded="visible"
    aria-haspopup="dialog"
    @click="trigger === 'click' && toggleClick($event)"
    @mouseenter="trigger === 'hover' && hoverEnter($event)"
    @mouseleave="trigger === 'hover' && scheduleClose($event)"
    @focusin="trigger === 'hover' && openFromTrigger('focus', $event)"
    ><slot name="trigger">Popover 열기</slot></span
  >
  <Teleport :to="portalTarget">
    <div
      v-if="visible && anchor"
      :class="classes"
      :data-arrow-target-align="arrowTargetAlign !== 'center' ? arrowTargetAlign : undefined"
      :data-theme="portalTheme"
      :style="{
        position: 'fixed',
        top: `${anchor.top}px`,
        left: `${anchor.left}px`,
        width: `${anchor.width}px`,
        height: `${anchor.height}px`,
        zIndex: 10000,
        pointerEvents: 'none',
        '--popover-arrow-position': arrowPosition,
      }"
    >
      <div
        ref="panel"
        :id="panelId"
        class="popover_panel"
        role="dialog"
        :aria-label="title ? undefined : panelLabel"
        :aria-labelledby="title ? titleId : undefined"
        style="z-index: 10001; pointer-events: auto"
        @mouseenter="trigger === 'hover' && cancelClose()"
        @mouseleave="trigger === 'hover' && scheduleClose($event)"
      >
        <span v-if="!noArrow" class="popover_arrow" aria-hidden="true" />
        <div v-if="title || panelLabel" class="popover_header">
          <div :id="titleId" class="popover_title">{{ title || panelLabel }}</div>
          <Button
            v-if="showClose"
            variant="ghost"
            icon-only
            class="popover_close"
            :aria-label="closeLabel"
            @click="setVisible(false, 'close', $event)"
            ><Icon name="close" size="sm"
          /></Button>
        </div>
        <div class="popover_body"><slot>Popover</slot></div>
        <div v-if="$slots.footer" class="popover_footer">
          <slot name="footer" :close="setVisible" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
