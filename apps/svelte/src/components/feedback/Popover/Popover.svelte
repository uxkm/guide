<!--
  Popover 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script>
import { tick, onMount, onDestroy } from 'svelte';
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';


// 배치·트리거·화살표·열림 상태 옵션을 prop으로 받습니다.
let {
  id,
  placement = 'bottom',
  size = 'md',
  offset = 'md',
  open = undefined,
  defaultOpen = false,
  offsetTop,
  offsetRight,
  offsetBottom,
  offsetLeft,
  trigger = 'click',
  title,
  panelLabel,
  noArrow = false,
  closable = undefined,
  disabled = false,
  closeLabel = '닫기',
  panelAlign = 'start',
  arrowAnchor = 'content',
  arrowTargetAlign = 'center',
  onOpen-change,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  extra,
  badge
} = $props();입니다.
  arrowTargetAlign: { type: String, default: 'center' }, // 타깃 기준 화살표 정렬입니다.
});
 // 열림 상태 변경 시 호출됩니다.
let internalOpen = $state(defaultOpen); // 비제어 열림 상태입니다.
let visible = $derived(open ?? internalOpen); // 제어·비제어를 합친 최종 표시 상태입니다.
let triggerElement = $state(null); // 트리거 래퍼 참조입니다.
let panel = $state(null); // 패널 참조입니다.
let anchor = $state(null); // 트리거 뷰포트 좌표입니다.
let arrowPosition = $state('50%'); // 화살표 CSS 위치입니다.
const panelId = id || `popover-${Math.random().toString(36).slice(2, 9)}`; // 최종 패널 id입니다.
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
let showClose = $derived(closable ?? trigger === 'click');
// 배치·크기·간격·화살표 클래스를 조합합니다.
let classes = $derived([
    'popover',
    'popover_portal',
    'is-open',
    size !== 'md' && `popover_${size}`,
    `popover_placement-${placement}`,
    offset !== 'md' && `popover_offset-${offset}`,
    ...[
      ['top', offsetTop],
      ['right', offsetRight],
      ['bottom', offsetBottom],
      ['left', offsetLeft],
    ]
      .filter(([, value]) => value && value !== 'md')
      .map(([side, value]) => `popover_offset-${side}-${value}`),
    panelAlign !== 'start' && `popover_panel-align-${panelAlign}`,
    arrowAnchor !== 'content' && `popover_arrow-anchor-${arrowAnchor}`,
    noArrow && 'popover_no-arrow',
  ].filter(Boolean),
);
function updateArrowPosition() {
  if (!anchor || !panel || !['target', 'mixed'].includes(arrowAnchor)) return;
  const rect = panel.getBoundingClientRect();
  const ratio =
    arrowTargetAlign === 'left' ? 0 : arrowTargetAlign === 'right' ? 1 : 0.5;
  const value = ['left', 'right'].includes(placement)
    ? anchor.top + anchor.height * ratio - rect.top
    : anchor.left + anchor.width * ratio - rect.left;
  arrowPosition = `${value}px`;
}
// 제어·비제어 열림 상태를 갱신하고 open-change를 알립니다.
function setVisible(next, reason, event) {
  if (disabled) return;
  if (open === undefined) internalOpen = next;
  onOpen-change?.(next, reason, event);
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
  const element = resolveTriggerAnchor(triggerElement);
  if (!element) return;
  const rect = element.getBoundingClientRect();
  let frame = { top: 0, left: 0 };
  try {
    if (element.ownerDocument !== window.top?.document)
      frame = window.frameElement?.getBoundingClientRect() || frame;
  } catch {
    /* 현재 좌표 */
  }
  anchor = {
    top: frame.top + rect.top,
    left: frame.left + rect.left,
    width: rect.width,
    height: rect.height,
  };
  tick(updateArrowPosition);
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
  if (visible) setVisible(false, 'trigger', event);
  else openFromTrigger('trigger', event);
}
function hoverEnter(event) {
  cancelClose();
  openFromTrigger('hover', event);
}
function outside(event) {
  if (!triggerElement?.contains(event.target) && !panel?.contains(event.target))
    setVisible(false, 'outside', event);
}
function keydown(event) {
  if (event.key === 'Escape') setVisible(false, 'escape', event);
}
$effect(
  visible,
  async (value) => {
    const targetDocument = portalTarget?.ownerDocument || document;
    if (value) {
      await tick();
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
onDestroy(() => {
  clearTimeout(hoverTimer);
  const doc = portalTarget?.ownerDocument || document;
  doc.removeEventListener('pointerdown', outside);
  doc.removeEventListener('keydown', keydown);
});
</script>

<!-- 트리거 래퍼와 포털 패널을 함께 렌더합니다. -->
  <span
    bind:this={triggerElement}
    class="popover_trigger"
    aria-controls={panelId}
    aria-expanded={visible}
    aria-haspopup="dialog"
    onclick={trigger === 'click' && toggleClick($event)}
    @mouseenter="trigger === 'hover' && hoverEnter($event)"
    @mouseleave="trigger === 'hover' && scheduleClose($event)"
    @focusin="trigger === 'hover' && openFromTrigger('focus', $event)"
    ><slot name="trigger">Popover 열기</slot></span
  >
  <Teleport to={portalTarget}>
    {#if visible && anchor}<div
     
      class={classes}
      data-arrow-target-align={arrowTargetAlign !== 'center' ? arrowTargetAlign : undefined}
      data-theme={portalTheme}
      style={{
        position: 'fixed',
        top: `${anchor.top}px`,
        left: `${anchor.left}px`,
        width: `${anchor.width}px`,
        height: `${anchor.height}px`,
        zIndex: 10000,
        pointerEvents: 'none',
        '--popover-arrow-position': arrowPosition,
      }}
    >
      <div
        bind:this={panel}
        id={panelId}
        class="popover_panel"
        role="dialog"
        aria-label={title ? undefined : panelLabel}
        aria-labelledby={title ? titleId : undefined}
        style="z-index: 10001; pointer-events: auto"
        @mouseenter="trigger === 'hover' && cancelClose()"
        @mouseleave="trigger === 'hover' && scheduleClose($event)"
      >
        {#if !noArrow}<span class="popover_arrow" aria-hidden="true" />
        {#if title || panelLabel}<div class="popover_header">
          <div id={titleId} class="popover_title">{{ title || panelLabel }}</div>
          {#if showClose}<Button
           
            variant="ghost"
            icon-only
            class="popover_close"
            aria-label={closeLabel}
            onclick={setVisible(false, 'close', $event)}
            ><Icon name="close" size="sm"
          /></Button>
        </div>
        <div class="popover_body">{@render children?.()}</div>
        {#if footer}<div class="popover_footer">
          <slot name="footer" close={setVisible} />
        </div>
      </div>
    </div>
  </Teleport>
