/**
 * Drawer 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg']);
const placements = new Set(['left', 'right', 'top', 'bottom']);
const documentDrawerCounts = new WeakMap();
const portalOwnerId = Math.random().toString(36).slice(2, 10);

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

export function Drawer({
  id,
  title,
  size = 'md',
  placement = 'right',
  backdrop = true,
  noBackdrop = false,
  open,
  defaultOpen = false,
  openOnLoad = false,
  draggable = false,
  footerAlign = 'end',
  footerRatio = '1-1',
  footerNoPadBottom = false,
  header,
  extra,
  footer,
  children = 'Drawer',
  className = '',
  closeLabel = '닫기',
  onClose,
  ...props
}) {
  const generatedId = useId().replace(/:/g, '');
  const drawerId = id || `drawer-${generatedId}`;
  const titleId = `${drawerId}-title`;
  const rootRef = useRef(null);
  const panelRef = useRef(null);
  const dragRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [internalOpen, setInternalOpen] = useState(defaultOpen || openOnLoad);
  const visible = open ?? internalOpen;
  const resolvedSize = sizes.has(size) ? size : 'md';
  const resolvedPlacement = placements.has(placement) ? placement : 'right';
  const showDragHandle = draggable && resolvedPlacement === 'bottom';
  const portalRoot = visible ? getDrawerPortalRoot() : null;
  const rootClasses = useMemo(
    () => ['drawer', visible && 'is-open', className].filter(Boolean).join(' '),
    [className, visible],
  );
  const panelClasses = [
    'drawer_panel',
    `drawer_placement-${resolvedPlacement}`,
    resolvedSize !== 'md' && `drawer_${resolvedSize}`,
    showDragHandle && 'drawer_draggable',
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
    if (open === undefined) setInternalOpen(false);
    onClose?.(reason, event);
  };

  const startDrag = (event) => {
    if (!showDragHandle || (event.button != null && event.button !== 0)) return;
    if (event.target.closest('.drawer_close, .drawer_extra, a, input, textarea, select')) return;
    const panel = panelRef.current;
    const collapsed = panel.classList.contains('is-expanded')
      ? Number.parseFloat(panel.dataset.collapsedHeight || '')
      : panel.getBoundingClientRect().height;
    const safeCollapsed = collapsed > 0 ? collapsed : panel.getBoundingClientRect().height;
    panel.dataset.collapsedHeight = String(safeCollapsed);
    const viewportHeight = panel.ownerDocument.defaultView?.innerHeight || safeCollapsed;
    dragRef.current = {
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

  const moveDrag = (event) => {
    const state = dragRef.current;
    const panel = panelRef.current;
    if (!state || !panel || state.pointerId !== event.pointerId) return;
    const deltaY = state.startY - event.clientY;
    const nextHeight = Math.min(state.expanded, Math.max(0, state.startHeight + deltaY));
    state.deltaY = deltaY;
    panel.style.height = `${nextHeight}px`;
    panel.style.transform = 'translateY(0)';
    event.preventDefault();
  };

  const endDrag = (event) => {
    const state = dragRef.current;
    const panel = panelRef.current;
    if (!state || !panel || state.pointerId !== event.pointerId) return;
    dragRef.current = null;
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

  useEffect(() => {
    if (!visible || !portalRoot) return undefined;
    const targetDocument = portalRoot.ownerDocument;
    previousFocusRef.current = targetDocument.activeElement;
    documentDrawerCounts.set(targetDocument, (documentDrawerCounts.get(targetDocument) || 0) + 1);
    targetDocument.body.classList.add('is-drawer-open');
    const focusId = targetDocument.defaultView?.requestAnimationFrame(() =>
      rootRef.current?.focus(),
    );
    const handleKeyDown = (event) => {
      const openDrawers = portalRoot.querySelectorAll('.drawer.is-open');
      if (openDrawers[openDrawers.length - 1] !== rootRef.current) return;
      if (event.key === 'Escape') requestClose('escape', event);
      if (event.key !== 'Tab' || !rootRef.current) return;
      const focusable = [
        ...rootRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((element) => !element.disabled);
      if (!focusable.length) {
        event.preventDefault();
        rootRef.current.focus();
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
      previousFocusRef.current?.focus?.();
    };
  }, [visible, portalRoot]);

  if (!visible || !portalRoot) return null;
  return createPortal(
    <div
      {...props}
      ref={rootRef}
      id={drawerId}
      className={rootClasses}
      data-component="Drawer"
      data-drawer=""
      data-drawer-draggable={showDragHandle ? 'true' : undefined}
      data-drawer-backdrop={backdrop && !noBackdrop ? undefined : 'false'}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title || header ? titleId : undefined}
      tabIndex={-1}
    >
      <div
        className="drawer_backdrop"
        aria-hidden="true"
        onClick={(event) => backdrop && !noBackdrop && requestClose('backdrop', event)}
      />
      <div ref={panelRef} className={panelClasses}>
        {showDragHandle && (
          <div
            className="drawer_handle"
            data-drawer-drag-handle=""
            aria-hidden="true"
            onPointerDown={startDrag}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <span className="drawer_handle-bar" />
          </div>
        )}
        {(title || header) && (
          <div
            className="drawer_header"
            onPointerDown={showDragHandle ? startDrag : undefined}
            onPointerMove={showDragHandle ? moveDrag : undefined}
            onPointerUp={showDragHandle ? endDrag : undefined}
            onPointerCancel={showDragHandle ? endDrag : undefined}
          >
            {header ?? (
              <h2 className="drawer_title" id={titleId}>
                {title}
              </h2>
            )}
            {extra && <div className="drawer_extra">{extra}</div>}
            <Button
              variant="ghost"
              iconOnly
              className="drawer_close"
              ariaLabel={closeLabel}
              iconBefore={<Icon name="close" size="sm" className="drawer_close-icon" />}
              onClick={(event) => requestClose('close', event)}
            />
          </div>
        )}
        <div className="drawer_body">{children}</div>
        {footer && <div className={footerClasses}>{footer}</div>}
      </div>
    </div>,
    portalRoot,
  );
}

export default Drawer;
