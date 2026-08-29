<!--
  Drawer 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script>
import { tick, onMount, onDestroy } from 'svelte';
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';


// 열림 상태·방향·크기·푸터 레이아웃 옵션을 prop으로 받습니다.
let {
  id,
  title,
  size = 'md',
  placement = 'right',
  backdrop = true,
  noBackdrop = false,
  open = undefined,
  defaultOpen = false,
  openOnLoad = false,
  draggable = false,
  footerAlign = 'end',
  footerRatio = '1-1',
  footerNoPadBottom = false,
  closeLabel = '닫기',
  onClose,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();
 // close · backdrop · escape · drag 사유로 호출됩니다.
let internalOpen = $state(defaultOpen || openOnLoad); // 비제어 열림 상태입니다.
let visible = $derived(open ?? internalOpen); // 제어·비제어를 합친 최종 표시 상태입니다.
let root = $state(null); // 포커스용 루트 참조입니다.
let panel = $state(null); // 드래그 높이 조절용 패널 참조입니다.
const drawerId = id || `drawer-${Math.random().toString(36).slice(2, 9)}`; // 최종 루트 id입니다.
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
let resolvedPlacement = $derived(['left', 'right', 'top', 'bottom'].includes(placement) ? placement : 'right',
); // 검증된 열림 방향입니다.
let resolvedSize = $derived((['sm', 'md', 'lg'].includes(size) ? size : 'md')); // 검증된 크기입니다.
// 드래그 핸들은 bottom placement에서만 활성화합니다.
let showDragHandle = $derived(draggable && resolvedPlacement === 'bottom');
let rootClasses = $derived(['drawer', visible && 'is-open'].filter(Boolean)); // 루트·열림 상태 클래스입니다.
// 방향·크기·드래그 가능 패널 클래스를 조합합니다.
let panelClasses = $derived([
    'drawer_panel', // 패널 루트 클래스입니다.
    `drawer_placement-${resolvedPlacement}`, // 열림 방향입니다.
    resolvedSize !== 'md' && `drawer_${resolvedSize}`, // md가 아닐 때만 크기 변형입니다.
    showDragHandle && 'drawer_draggable', // 드래그 시트 변형입니다.
  ].filter(Boolean),
);
let footerClasses = $derived([
    'drawer_footer', // 푸터 루트 클래스입니다.
    footerAlign !== 'end' && `drawer_footer-${footerAlign}`, // 정렬 변형입니다.
    footerAlign === 'even' &&
      footerRatio !== '1-1' &&
      `drawer_footer-even-${footerRatio}`, // even 비율입니다.
    footerNoPadBottom && 'drawer_footer-no-pad-b', // 하단 패딩 제거입니다.
  ].filter(Boolean),
);

// 비제어면 내부 상태를 끄고 close 이벤트를 알립니다.
function close(reason = 'close', event) {
  if (open === undefined) internalOpen = false;
  onClose?.(reason, event);
}
function keydown(event) {
  if (event.key === 'Escape') close('escape', event);
}
// 하단 시트 드래그를 시작합니다.
function startDrag(event) {
  if (!showDragHandle || (event.button != null && event.button !== 0)) return;
  if (event.target.closest('.drawer_close, .drawer_extra, a, input, textarea, select')) return;
  const element = panel;
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
  const element = panel;
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
  const element = panel;
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
$effect(
  visible,
  async (isOpen) => {
    const targetDocument = portalTarget?.ownerDocument || document;
    if (isOpen) {
      previousFocus = targetDocument.activeElement;
      targetDocument.body.classList.add('is-drawer-open');
      targetDocument.addEventListener('keydown', keydown);
      await tick();
      root?.focus();
    } else {
      targetDocument.body.classList.remove('is-drawer-open');
      targetDocument.removeEventListener('keydown', keydown);
      previousFocus?.focus?.();
    }
  },
  { immediate: true },
);
onDestroy(() =>
  (portalTarget?.ownerDocument || document).removeEventListener('keydown', keydown),
);
</script>

<!-- 포털로 패널을 문서 최상위에 올립니다. -->
  <Teleport to={portalTarget}>
    {#if visible}<div
     
      bind:this={root}
      id={drawerId}
      class={rootClasses}
      data-component="Drawer"
      data-drawer
      data-drawer-draggable={showDragHandle ? 'true' : undefined}
      data-drawer-backdrop={backdrop && !noBackdrop ? undefined : 'false'}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title || header ? titleId : undefined}
      tabindex="-1"
    >
      <!-- 백드롭 클릭으로 닫을 수 있습니다. -->
      <div
        class="drawer_backdrop"
        aria-hidden="true"
        onclick={backdrop && !noBackdrop && close('backdrop', $event)}
      />
      <div bind:this={panel} class={panelClasses}>
        <!-- 하단 시트용 드래그 핸들입니다. -->
        {#if showDragHandle}<div
         
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
        {#if title || header}<div
         
          class="drawer_header"
          @pointerdown="showDragHandle && startDrag($event)"
          @pointermove="showDragHandle && moveDrag($event)"
          @pointerup="showDragHandle && endDrag($event)"
          @pointercancel="showDragHandle && endDrag($event)"
        >
          <slot name="header"
            ><h2 id={titleId} class="drawer_title">{{ title }}</h2></slot
          >
          {#if extra}<div class="drawer_extra">{@render extra?.()}</div>
          <Button
            variant="ghost"
            icon-only
            class="drawer_close"
            aria-label={closeLabel}
            onclick={close('close', $event)}
            ><Icon name="close" size="sm" class="drawer_close-icon"
          /></Button>
        </div>
        <div class="drawer_body">{@render children?.()}</div>
        {#if footer}<div class={footerClasses}><slot name="footer" close={close} /></div>
      </div>
    </div>
  </Teleport>
