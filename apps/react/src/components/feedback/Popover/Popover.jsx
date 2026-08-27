/**
 * Popover 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { cloneElement, isValidElement, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const placements = new Set([
  'top',
  'top-center',
  'bottom',
  'bottom-center',
  'left',
  'right',
  'end',
]);
const sizes = new Set(['sm', 'md', 'lg']);
const portalOwnerId = Math.random().toString(36).slice(2, 10);

export function getPopoverPortalRoot(
  currentDocument = typeof document === 'undefined' ? null : document,
  currentWindow = typeof window === 'undefined' ? null : window,
) {
  if (!currentDocument) return null;
  let targetDocument = currentDocument;
  try {
    if (currentWindow?.top?.document?.body) targetDocument = currentWindow.top.document;
  } catch {
    /* 현재 문서를 사용합니다. */
  }
  if (targetDocument !== currentDocument) {
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
  const id = `uxkm-popover-portal-root-${portalOwnerId}`;
  let root = targetDocument.getElementById(id);
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = id;
    root.className = 'uxkm-popover-portal-root';
    targetDocument.body.appendChild(root);
  }
  root.dataset.theme = currentDocument.documentElement.dataset.theme || 'light';
  return root;
}

const triggerControlSelector =
  'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';

export function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}

export function topViewportRect(element, currentWindow = window) {
  const rect = element.getBoundingClientRect();
  try {
    if (element.ownerDocument === currentWindow.top?.document) return rect;
    const frame = currentWindow.frameElement?.getBoundingClientRect();
    if (frame)
      return {
        top: frame.top + rect.top,
        left: frame.left + rect.left,
        width: rect.width,
        height: rect.height,
      };
  } catch {
    /* 현재 뷰포트 좌표를 사용합니다. */
  }
  return rect;
}

export function Popover({
  id,
  placement = 'bottom',
  size = 'md',
  offset = 'md',
  open,
  defaultOpen = false,
  offsetTop,
  offsetRight,
  offsetBottom,
  offsetLeft,
  trigger = 'click',
  triggerContent,
  title,
  panelLabel,
  footer,
  children = 'Popover',
  noArrow = false,
  closable,
  disabled = false,
  className = '',
  onOpenChange,
  closeLabel = '닫기',
  panelAlign = 'start',
  arrowAnchor = 'content',
  arrowTargetAlign = 'center',
  ...props
}) {
  const generatedId = useId().replace(/:/g, '');
  const panelId = id || `popover-${generatedId}`;
  const titleId = `${panelId}-title`;
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const hoverTimerRef = useRef(null);
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [anchor, setAnchor] = useState(null);
  const [measuredArrowPosition, setMeasuredArrowPosition] = useState(null);
  const visible = open ?? internalOpen;
  const resolvedPlacement = placements.has(placement) ? placement : 'bottom';
  const resolvedSize = sizes.has(size) ? size : 'md';
  const portalRoot = visible ? getPopoverPortalRoot() : null;
  const showClose = closable ?? trigger === 'click';

  const setVisible = (next, reason, event) => {
    if (disabled) return;
    if (open === undefined) setInternalOpen(next);
    onOpenChange?.(next, reason, event);
  };
  const openFromTrigger = (reason, event) => {
    updatePosition();
    setVisible(true, reason, event);
  };
  const cancelHoverClose = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = null;
  };
  const scheduleHoverClose = (event) => {
    cancelHoverClose();
    hoverTimerRef.current = setTimeout(() => setVisible(false, 'hover', event), 100);
  };
  const updatePosition = () => {
    const element = resolveTriggerAnchor(triggerRef.current);
    if (element) setAnchor(topViewportRect(element));
  };
  useEffect(() => {
    if (!visible) return undefined;
    updatePosition();
    const targetDocument = portalRoot?.ownerDocument || document;
    const closeOutside = (event) => {
      if (!triggerRef.current?.contains(event.target) && !panelRef.current?.contains(event.target))
        setVisible(false, 'outside', event);
    };
    const keydown = (event) => {
      if (event.key === 'Escape') setVisible(false, 'escape', event);
    };
    targetDocument.addEventListener('pointerdown', closeOutside);
    document.addEventListener('pointerdown', closeOutside);
    targetDocument.addEventListener('keydown', keydown);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      targetDocument.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('pointerdown', closeOutside);
      targetDocument.removeEventListener('keydown', keydown);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [visible, portalRoot]);
  useEffect(() => () => cancelHoverClose(), []);
  useEffect(() => {
    if (!visible || !anchor || !panelRef.current || !['target', 'mixed'].includes(arrowAnchor))
      return;
    const panelRect = panelRef.current.getBoundingClientRect();
    const ratio = arrowTargetAlign === 'left' ? 0 : arrowTargetAlign === 'right' ? 1 : 0.5;
    const position = ['left', 'right'].includes(resolvedPlacement)
      ? anchor.top + anchor.height * ratio - panelRect.top
      : anchor.left + anchor.width * ratio - panelRect.left;
    setMeasuredArrowPosition(`${position}px`);
  }, [anchor, arrowAnchor, arrowTargetAlign, panelAlign, resolvedPlacement, visible]);

  const offsetClasses = [
    ['top', offsetTop],
    ['right', offsetRight],
    ['bottom', offsetBottom],
    ['left', offsetLeft],
  ]
    .filter(([, value]) => value && value !== 'md')
    .map(([side, value]) => `popover_offset-${side}-${value}`);
  const classes = useMemo(
    () =>
      [
        'popover',
        'popover_portal',
        'is-open',
        resolvedSize !== 'md' && `popover_${resolvedSize}`,
        `popover_placement-${resolvedPlacement}`,
        offset !== 'md' && `popover_offset-${offset}`,
        ...offsetClasses,
        panelAlign !== 'start' && `popover_panel-align-${panelAlign}`,
        arrowAnchor !== 'content' && `popover_arrow-anchor-${arrowAnchor}`,
        noArrow && 'popover_no-arrow',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [
      arrowAnchor,
      className,
      noArrow,
      offset,
      offsetTop,
      offsetRight,
      offsetBottom,
      offsetLeft,
      panelAlign,
      resolvedPlacement,
      resolvedSize,
    ],
  );
  const arrowPosition = measuredArrowPosition || `${(anchor?.width || 0) / 2}px`;
  const accessibleTrigger = isValidElement(triggerContent)
    ? cloneElement(triggerContent, { 'aria-expanded': visible, 'aria-haspopup': 'dialog' })
    : triggerContent;
  const panel =
    visible && portalRoot && anchor
      ? createPortal(
          <div
            className={classes}
            data-arrow-target-align={arrowTargetAlign !== 'center' ? arrowTargetAlign : undefined}
            data-theme={document.documentElement.dataset.theme || 'light'}
            style={{
              position: 'fixed',
              top: anchor.top,
              left: anchor.left,
              width: anchor.width,
              height: anchor.height,
              zIndex: 10000,
              pointerEvents: 'none',
              '--popover-arrow-position': arrowPosition,
            }}
          >
            <div
              {...props}
              ref={panelRef}
              id={panelId}
              className={[
                'popover_panel',
                showClose && !title && !panelLabel && 'popover_panel-closable',
              ]
                .filter(Boolean)
                .join(' ')}
              role="dialog"
              aria-label={title ? undefined : panelLabel}
              aria-labelledby={title ? titleId : undefined}
              style={{ zIndex: 10001, pointerEvents: 'auto' }}
              onMouseEnter={trigger === 'hover' ? cancelHoverClose : undefined}
              onMouseLeave={trigger === 'hover' ? scheduleHoverClose : undefined}
            >
              <span className="popover_arrow" aria-hidden="true" />
              {(title || panelLabel) && (
                <div className="popover_header">
                  <div id={titleId} className="popover_title">
                    {title || panelLabel}
                  </div>
                  {showClose && (
                    <Button
                      variant="ghost"
                      iconOnly
                      className="popover_close"
                      ariaLabel={closeLabel}
                      iconBefore={<Icon name="close" size="sm" />}
                      onClick={(event) => setVisible(false, 'close', event)}
                    />
                  )}
                </div>
              )}
              {showClose && !title && !panelLabel && (
                <Button
                  variant="ghost"
                  iconOnly
                  className="popover_close popover_close-floating"
                  ariaLabel={closeLabel}
                  iconBefore={<Icon name="close" size="sm" />}
                  onClick={(event) => setVisible(false, 'close', event)}
                />
              )}
              <div className="popover_body">{children}</div>
              {footer && <div className="popover_footer">{footer}</div>}
            </div>
          </div>,
          portalRoot,
        )
      : null;

  return (
    <>
      <span
        ref={triggerRef}
        className="popover_trigger"
        onClick={
          trigger === 'click'
            ? (event) =>
                visible ? setVisible(false, 'trigger', event) : openFromTrigger('trigger', event)
            : undefined
        }
        onMouseEnter={
          trigger === 'hover'
            ? (event) => {
                cancelHoverClose();
                openFromTrigger('hover', event);
              }
            : undefined
        }
        onMouseLeave={trigger === 'hover' ? scheduleHoverClose : undefined}
        onFocus={trigger === 'hover' ? (event) => openFromTrigger('focus', event) : undefined}
        onBlur={trigger === 'hover' ? scheduleHoverClose : undefined}
      >
        {accessibleTrigger}
      </span>
      {panel}
    </>
  );
}

export default Popover;
