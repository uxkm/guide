<!--
  Tooltip 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script>
import { tick, onMount, onDestroy } from 'svelte';
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';


// 내용·배치·트리거·화살표·열림 상태 옵션을 prop으로 받습니다.
let {
  id,
  content,
  placement,
  size = 'md',
  offset = 'md',
  offsetTop,
  offsetRight,
  offsetBottom,
  offsetLeft,
  open = undefined,
  defaultOpen = false,
  inverse = false,
  noArrow = false,
  arrowAnchor = 'content',
  panelAlign = 'center',
  arrowTargetAlign = 'center',
  disabled = false,
  trigger = 'hover',
  closable = undefined,
  closeLabel = '닫기',
  onOpen-change,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  extra,
  badge
} = $props();변형입니다.
  noArrow: Boolean, // 화살표를 숨깁니다.
  arrowAnchor: { type: String, default: 'content' }, // 화살표 기준(content · target · mixed)입니다.
  panelAlign: { type: String, default: 'center' }, // 말풍선 정렬 기준입니다.
  arrowTargetAlign: { type: String, default: 'center' }, // 타깃 기준 화살표 정렬입니다.
  disabled: Boolean, // 열기·닫기를 비활성화합니다.
  trigger: { type: String, default: 'hover' }, // hover 또는 click 작동 방식입니다.
  closable: { type: Boolean, default: undefined }, // 닫기 버튼 표시입니다. 기본은 click일 때 켜집니다.
  closeLabel: { type: String, default: '닫기' }, // 닫기 버튼의 접근성 이름입니다.
});
 // 열림 상태 변경 시 호출됩니다.
let internalOpen = $state(defaultOpen); // 비제어 열림 상태입니다.
let visible = $derived(open ?? internalOpen); // 제어·비제어를 합친 최종 표시 상태입니다.
let triggerElement = $state(null); // 트리거 래퍼 참조입니다.
let bubble = $state(null); // 말풍선 참조입니다.
let anchor = $state(null); // 트리거 뷰포트 좌표입니다.
let arrowPosition = $state('50%'); // 화살표 CSS 위치입니다.
const bubbleId = id || `tooltip-${Math.random().toString(36).slice(2, 9)}`; // 최종 말풍선 id입니다.
let hoverTimer; // hover 닫기 지연 타이머입니다.

// iframe에서도 최상위 문서에 Tooltip을 올리기 위한 포털 대상을 찾거나 만듭니다.
function getPortalTarget() {
  if (typeof document === 'undefined') return 'body';
  let target = document;
  try {
    if (window.top?.document?.body) target = window.top.document;
  } catch {
    return document.body;
  }
  if (target !== document) {
    const url = new URL('styles/uxkm.css', target.baseURI);
    url.searchParams.set('v', 'tooltip-20260819');
    let link = target.getElementById('uxkm-tooltip-portal-styles');
    if (!link) {
      link = target.createElement('link');
      link.id = 'uxkm-tooltip-portal-styles';
      link.rel = 'stylesheet';
      target.head.appendChild(link);
    }
    if (link.href !== url.href) link.href = url.href;
  }
  let root = target.getElementById('uxkm-tooltip-portal-root');
  if (!root) {
    root = target.createElement('div');
    root.id = 'uxkm-tooltip-portal-root';
    root.className = 'uxkm-tooltip-portal-root';
    target.body.appendChild(root);
  }
  root.dataset.theme = document.documentElement.dataset.theme || 'light';
  return root;
}
const portalTarget = getPortalTarget();
const portalTheme =
  typeof document === 'undefined' ? 'light' : document.documentElement.dataset.theme || 'light';
// closable 미지정 시 click 트리거면 닫기 버튼을 켭니다.
let showClose = $derived(closable ?? trigger === 'click');
// 배치·크기·간격·역색·화살표 클래스를 조합합니다.
let classes = $derived([
    'tooltip',
    'tooltip_portal',
    'is-open',
    size !== 'md' && `tooltip_${size}`,
    placement && `tooltip_placement-${placement}`,
    offset !== 'md' && `tooltip_offset-${offset}`,
    ...[
      ['top', offsetTop],
      ['right', offsetRight],
      ['bottom', offsetBottom],
      ['left', offsetLeft],
    ]
      .filter(([, value]) => value && value !== 'md')
      .map(([side, value]) => `tooltip_offset-${side}-${value}`),
    panelAlign !== 'center' && `tooltip_panel-align-${panelAlign}`,
    inverse && 'tooltip_inverse',
    noArrow && 'tooltip_no-arrow',
    arrowAnchor !== 'content' && `tooltip_arrow-anchor-${arrowAnchor}`,
    disabled && 'is-disabled',
  ].filter(Boolean),
);

// 제어·비제어 열림 상태를 갱신하고 open-change를 알립니다.
function setVisible(next, reason, event) {
  if (disabled) return;
  if (open === undefined) internalOpen = next;
  onOpen-change?.(next, reason, event);
}
function cancelClose() {
  clearTimeout(hoverTimer);
}
// hover 이탈 후 잠시 뒤 닫아 말풍선 이동을 허용합니다.
function scheduleClose(event) {
  cancelClose();
  hoverTimer = setTimeout(() => setVisible(false, 'hover', event), 100);
}
function updateArrowPosition() {
  if (!anchor || !bubble || !['target', 'mixed'].includes(arrowAnchor)) return;
  const element = bubble;
  ['top', 'right', 'bottom', 'left', 'transform'].forEach((name) => {
    element.style[name] = '';
  });
  if (arrowAnchor === 'mixed') {
    const initialRect = element.getBoundingClientRect();
    const side = placement?.startsWith('top')
      ? 'top'
      : ['left', 'right'].includes(placement)
        ? placement
        : 'bottom';
    if (side === 'top' || side === 'bottom') {
      const left =
        panelAlign === 'start'
          ? 0
          : panelAlign === 'end'
            ? anchor.width - initialRect.width
            : (anchor.width - initialRect.width) / 2;
      element.style.left = `${left}px`;
      element.style.right = 'auto';
      element.style.transform = 'none';
      if (side === 'top') {
        element.style.top = 'auto';
        element.style.bottom = 'calc(100% + var(--tooltip-offset-top))';
      } else {
        element.style.top = 'calc(100% + var(--tooltip-offset-bottom))';
        element.style.bottom = 'auto';
      }
    } else {
      const top =
        panelAlign === 'start'
          ? 0
          : panelAlign === 'end'
            ? anchor.height - initialRect.height
            : (anchor.height - initialRect.height) / 2;
      element.style.top = `${top}px`;
      element.style.bottom = 'auto';
      element.style.transform = 'none';
      if (side === 'left') {
        element.style.left = 'auto';
        element.style.right = 'calc(100% + var(--tooltip-offset-left))';
      } else {
        element.style.left = 'calc(100% + var(--tooltip-offset-right))';
        element.style.right = 'auto';
      }
    }
  }
  const rect = element.getBoundingClientRect();
  const ratio = ['left', 'top'].includes(arrowTargetAlign)
    ? 0
    : ['right', 'bottom'].includes(arrowTargetAlign)
      ? 1
      : 0.5;
  const value = ['left', 'right'].includes(placement)
    ? anchor.top + anchor.height * ratio - rect.top
    : anchor.left + anchor.width * ratio - rect.left;
  arrowPosition = `${value}px`;
}
const triggerControlSelector =
  'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';
function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}
// 트리거 좌표를 측정해 포털 말풍선 위치를 맞춥니다.
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
function openFromTrigger(reason, event) {
  cancelClose();
  updatePosition();
  setVisible(true, reason, event);
}
function toggle(event) {
  visible ? setVisible(false, 'trigger', event) : openFromTrigger('trigger', event);
}
function outside(event) {
  if (!triggerElement?.contains(event.target) && !bubble?.contains(event.target))
    setVisible(false, 'outside', event);
}
function keydown(event) {
  if (event.key === 'Escape') setVisible(false, 'escape', event);
}
$effect(
  visible,
  async (value) => {
    const doc = portalTarget?.ownerDocument || document;
    if (value) {
      await tick();
      updatePosition();
      doc.addEventListener('pointerdown', outside);
      document.addEventListener('pointerdown', outside);
      doc.addEventListener('keydown', keydown);
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
    } else {
      doc.removeEventListener('pointerdown', outside);
      document.removeEventListener('pointerdown', outside);
      doc.removeEventListener('keydown', keydown);
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
  document.removeEventListener('pointerdown', outside);
  doc.removeEventListener('keydown', keydown);
  window.removeEventListener('resize', updatePosition);
  window.removeEventListener('scroll', updatePosition, true);
});
</script>

<!-- 트리거 래퍼와 포털 말풍선을 함께 렌더합니다. -->
  <span
    bind:this={triggerElement}
    class="tooltip_trigger"
    data-component="Tooltip"
    aria-describedby={bubbleId}
    aria-expanded={trigger === 'click' ? visible : undefined}
    onclick={trigger === 'click' && toggle($event)}
    @mouseenter="trigger === 'hover' && openFromTrigger('hover', $event)"
    @mouseleave="trigger === 'hover' && scheduleClose($event)"
    @focusin="trigger === 'hover' && openFromTrigger('focus', $event)"
    @focusout="trigger === 'hover' && scheduleClose($event)"
    ><slot name="trigger">툴팁</slot></span
  >
  <Teleport to={portalTarget}>
    {#if visible && anchor}<span
     
      class={classes}
      data-theme={portalTheme}
      style={{
        position: 'fixed',
        top: `${anchor.top}px`,
        left: `${anchor.left}px`,
        width: `${anchor.width}px`,
        height: `${anchor.height}px`,
        zIndex: 10020,
        pointerEvents: 'none',
        '--tooltip-arrow-position': arrowPosition,
      }}
    >
      <span
        bind:this={bubble}
        id={bubbleId}
        class="tooltip_bubble"
        class={{ 'tooltip_bubble-closable': showClose }}
        role="tooltip"
        style={{ zIndex: 10021, pointerEvents: trigger === 'click' ? 'auto' : undefined }}
        @mouseenter="trigger === 'hover' && cancelClose()"
        @mouseleave="trigger === 'hover' && scheduleClose($event)"
      >
        {#if !noArrow}<span class="tooltip_arrow" aria-hidden="true" />
        {#if showClose}<Button
         
          variant="ghost"
          icon-only
          class="tooltip_close tooltip_close-floating"
          aria-label={closeLabel}
          onclick={setVisible(false, 'close', $event)}
          ><Icon name="close" size="sm" class="tooltip_close-icon"
        /></Button>
        {@render children?.() ?? content}
      </span>
    </span>
  </Teleport>
