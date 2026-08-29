import { component$, useId, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { toChildArray, isQwikElement, mergeElementProps, Portal } from '../../utils/qwik-react-compat.tsx';
/**
 * Drawer 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import Button from '../../basic/Button/Button.tsx';
import Icon from '../../basic/Icon/Icon.tsx';

const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 패널 크기입니다.
const placements = new Set(['left', 'right', 'top', 'bottom']); // 지원하는 열림 방향입니다.
// 문서별 열린 Drawer 수를 추적해 body 스크롤 잠금을 공유합니다.
const documentDrawerCounts = new WeakMap();
const portalOwnerId = Math.random().toString(36).slice(2, 10); // iframe 포털 소유자 ID입니다.

// iframe에서도 최상위 문서에 Drawer를 올리기 위한 포털 루트를 찾거나 만듭니다.
export function getDrawerPortalRoot(
  currentDocument = typeof document === 'undefined' ? null : document,
  currentWindow = typeof window === 'undefined' ? null : window,
) {
  if (!currentDocument) return null;
  let targetDocument = currentDocument;
  try {
    if (currentWindow?.top?.document?.body) targetDocument = currentWindow.top.document;
  } catch {
    // 다른 출처의 iframe에서는 현재 문서를 사용합니다.
  }
  if (targetDocument === currentDocument) return currentDocument.body;

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

  targetDocument.getElementById('uxkm-drawer-portal-root')?.remove();
  const rootId = `uxkm-drawer-portal-root-${portalOwnerId}`;
  let root = targetDocument.getElementById(rootId);
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = rootId;
    root.className = 'uxkm-drawer-portal-root';
    targetDocument.body.appendChild(root);
    currentWindow?.addEventListener('pagehide', () => root?.remove(), { once: true });
  }
  root.dataset.theme = currentDocument.documentElement.dataset.theme || 'light';
  return root;
}

export const Drawer = component$(({
  id, // 패널 DOM id입니다. 없으면 생성합니다.
  title, // 기본 헤더 제목입니다.
  size = 'md', // 패널 크기입니다.
  placement = 'right', // 패널이 열리는 방향입니다.
  backdrop = true, // 백드롭 클릭으로 닫을지 여부입니다.
  noBackdrop = false, // 백드롭을 완전히 끄는 옵션입니다.
  open, // 제어형 열림 상태입니다.
  defaultOpen = false, // 비제어형 초기 열림 상태입니다.
  openOnLoad = false, // 마운트 시 자동으로 엽니다.
  draggable = false, // 하단 시트 드래그 핸들입니다.
  footerAlign = 'end', // 푸터 액션 정렬입니다.
  footerRatio = '1-1', // even 정렬일 때 균등 버튼 비율입니다.
  footerNoPadBottom = false, // 푸터 하단 패딩 제거입니다.
  header, // title 대신 사용할 커스텀 헤더입니다.
  extra, // 헤더 오른쪽 추가 영역입니다.
  footer, // 푸터 액션 콘텐츠입니다.
  children = 'Drawer', // 본문 콘텐츠입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  closeLabel = '닫기', // 닫기 버튼의 접근성 이름입니다.
  onClose, // close · backdrop · escape · drag 사유로 호출됩니다.
  ...props // id 외 나머지 속성을 루트 요소에 전달합니다.
}) {
  const generatedId = useId().replace(/:/g, '');
  const drawerId = id || `drawer-${generatedId}`; // 최종 루트 id입니다.
  const titleId = `${drawerId}-title`; // aria-labelledby에 연결할 제목 id입니다.
  const rootRef = useSignal<HTMLElement | undefined>(undefined); // 포커스 트랩용 루트 참조입니다.
  const panelRef = useSignal<HTMLElement | undefined>(undefined); // 드래그 높이 조절용 패널 참조입니다.
  const dragRef = useSignal<HTMLElement | undefined>(undefined); // 진행 중인 드래그 상태입니다.
  const previousFocusRef = useSignal<HTMLElement | undefined>(undefined); // 닫힌 뒤 복원할 이전 포커스입니다.
  const internalOpen = useSignal(defaultOpen || openOnLoad);
  const visible = open ?? internalOpen.value; // 제어·비제어를 합친 최종 표시 상태입니다.
  const resolvedSize = sizes.has(size) ? size : 'md';
  const resolvedPlacement = placements.has(placement) ? placement : 'right';
  // 드래그 핸들은 bottom placement에서만 활성화합니다.
  const showDragHandle = draggable && resolvedPlacement === 'bottom';
  const portalRoot = visible ? getDrawerPortalRoot() : null;
  const rootClasses = ['drawer', visible && 'is-open', className].filter(Boolean).join(' '),
    [className, visible],
  );
  // 방향·크기·드래그 가능 패널 클래스를 조합합니다.
  const panelClasses = [
    'drawer_panel', // 패널 루트 클래스입니다.
    `drawer_placement-${resolvedPlacement}`, // 열림 방향입니다.
    resolvedSize !== 'md' && `drawer_${resolvedSize}`, // md가 아닐 때만 크기 변형입니다.
    showDragHandle && 'drawer_draggable', // 드래그 시트 변형입니다.
  ]
    .filter(Boolean)
    .join(' ');
  const footerClasses = [
    'drawer_footer',
    footerAlign !== 'end' && `drawer_footer-${footerAlign}`,
    footerAlign === 'even' && footerRatio !== '1-1' && `drawer_footer-even-${footerRatio}`,
    footerNoPadBottom && 'drawer_footer-no-pad-b',
  ]
    .filter(Boolean)
    .join(' ');

  const requestClose = (reason, event) => {
    if (open === undefined) internalOpen.value = false;
    onClose?.(reason, event);
  };

  // 하단 시트 드래그를 시작합니다.
  const startDrag = (event) => {
    if (!showDragHandle || (event.button != null && event.button !== 0)) return;
    if (event.target.closest('.drawer_close, .drawer_extra, a, input, textarea, select')) return;
    const panel = panelRef.value;
    const collapsed = panel.classList.contains('is-expanded')
      ? Number.parseFloat(panel.dataset.collapsedHeight || '')
      : panel.getBoundingClientRect().height;
    const safeCollapsed = collapsed > 0 ? collapsed : panel.getBoundingClientRect().height;
    panel.dataset.collapsedHeight = String(safeCollapsed);
    const viewportHeight = panel.ownerDocument.defaultView?.innerHeight || safeCollapsed;
    dragRef.value = {
      pointerId: event.pointerId,
      target: event.currentTarget,
      startY: event.clientY,
      startHeight: panel.getBoundingClientRect().height,
      collapsed: safeCollapsed,
      expanded: Math.max(safeCollapsed + 48, viewportHeight * 0.9),
      deltaY: 0,
    };
    panel.classList.add('is-dragging');
    event.currentTarget.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  };

  // 드래그 중 패널 높이를 갱신합니다.
  const moveDrag = (event) => {
    const state = dragRef.value;
    const panel = panelRef.value;
    if (!state || !panel || state.pointerId !== event.pointerId) return;
    const deltaY = state.startY - event.clientY;
    const nextHeight = Math.min(state.expanded, Math.max(0, state.startHeight + deltaY));
    state.deltaY = deltaY;
    panel.style.height = `${nextHeight}px`;
    panel.style.transform = 'translateY(0)';
    event.preventDefault();
  };

  // 드래그 종료 시 닫기·확장·축소 중 하나로 스냅합니다.
  const endDrag = (event) => {
    const state = dragRef.value;
    const panel = panelRef.value;
    if (!state || !panel || state.pointerId !== event.pointerId) return;
    dragRef.value = null;
    panel.classList.remove('is-dragging');
    try {
      state.target?.releasePointerCapture?.(state.pointerId);
    } catch {
      /* pointer capture가 이미 해제된 경우 */
    }
    const currentHeight = panel.getBoundingClientRect().height;
    const closeThreshold = state.collapsed * 0.55;
    const expandThreshold = (state.collapsed + state.expanded) / 2;
    const startedExpanded = state.startHeight >= expandThreshold;
    panel.style.height = '';
    panel.style.transform = '';
    if (
      currentHeight < closeThreshold ||
      (!startedExpanded && state.deltaY < -state.collapsed * 0.4)
    ) {
      panel.classList.remove('is-expanded');
      requestClose('drag', event);
    } else if (currentHeight >= expandThreshold || (!startedExpanded && state.deltaY > 48)) {
      panel.classList.add('is-expanded');
    } else {
      panel.classList.remove('is-expanded');
    }
  };

  // 열림 시 스크롤 잠금·포커스·Escape·Tab 트랩을 연결합니다.
  useVisibleTask$(({ track }) => {
    if (!visible || !portalRoot) return undefined;
    const targetDocument = portalRoot.ownerDocument;
    previousFocusRef.value = targetDocument.activeElement;
    documentDrawerCounts.set(targetDocument, (documentDrawerCounts.get(targetDocument) || 0) + 1);
    targetDocument.body.classList.add('is-drawer-open');
    const focusId = targetDocument.defaultView?.requestAnimationFrame(() =>
      rootRef.value?.focus(),
    );
    const handleKeyDown = (event) => {
      const openDrawers = portalRoot.querySelectorAll('.drawer.is-open');
      if (openDrawers[openDrawers.length - 1] !== rootRef.value) return;
      if (event.key === 'Escape') requestClose('escape', event);
      if (event.key !== 'Tab' || !rootRef.value) return;
      const focusable = [
        ...rootRef.value.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((element) => !element.disabled);
      if (!focusable.length) {
        event.preventDefault();
        rootRef.value.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && targetDocument.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && targetDocument.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    targetDocument.addEventListener('keydown', handleKeyDown);
    return () => {
      if (focusId) targetDocument.defaultView?.cancelAnimationFrame(focusId);
      targetDocument.removeEventListener('keydown', handleKeyDown);
      const remaining = Math.max(0, (documentDrawerCounts.get(targetDocument) || 1) - 1);
      documentDrawerCounts.set(targetDocument, remaining);
      if (remaining === 0) targetDocument.body.classList.remove('is-drawer-open');
      previousFocusRef.value?.focus?.();
    };
  };

  if (!visible || !portalRoot) return null;
  return <Portal mount={event}>{
    <div
      {...props}
      ref={rootRef}
      id={drawerId}
      class={rootClasses}
      data-component="Drawer"
      data-drawer=""
      data-drawer-draggable={showDragHandle ? 'true' : undefined}
      data-drawer-backdrop={backdrop && !noBackdrop ? undefined : 'false'}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title || header ? titleId : undefined}
      tabIndex={-1}
    >
      {/* 백드롭 클릭으로 닫을 수 있습니다. */}
      <div
        class="drawer_backdrop"
        aria-hidden="true"
        onClick$={(event) => backdrop && !noBackdrop && requestClose('backdrop'}</Portal>}
      />
      <div ref={panelRef} class={panelClasses}>
        {/* 하단 시트용 드래그 핸들입니다. */}
        {showDragHandle && (
          <div
            class="drawer_handle"
            data-drawer-drag-handle=""
            aria-hidden="true"
            onPointerDown={startDrag}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <span class="drawer_handle-bar" />
          </div>
        )}
        {(title || header) && (
          <div
            class="drawer_header"
            onPointerDown={showDragHandle ? startDrag : undefined}
            onPointerMove={showDragHandle ? moveDrag : undefined}
            onPointerUp={showDragHandle ? endDrag : undefined}
            onPointerCancel={showDragHandle ? endDrag : undefined}
          >
            {header ?? (
              <h2 class="drawer_title" id={titleId}>
                {title}
              </h2>
            )}
            {extra && <div class="drawer_extra">{extra}</div>}
            <Button
              variant="ghost"
              iconOnly
              class="drawer_close"
              ariaLabel={closeLabel}
              iconBefore={<Icon name="close" size="sm" class="drawer_close-icon" />}
              onClick$={(event) => requestClose('close', event)}
            />
          </div>
        )}
        <div class="drawer_body">{children}</div>
        {footer && <div class={footerClasses}>{footer}</div>}
      </div>
    </div>,
    portalRoot,
  );
});

export default Drawer;
