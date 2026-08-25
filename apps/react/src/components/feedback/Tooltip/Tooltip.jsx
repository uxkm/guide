import { cloneElement, isValidElement, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const placements = new Set(['top', 'top-start', 'top-end', 'left', 'right', 'start', 'end']);
const sizes = new Set(['sm', 'md', 'lg']);
const ownerId = Math.random().toString(36).slice(2, 10);

export function getTooltipPortalRoot(currentDocument = typeof document === 'undefined' ? null : document, currentWindow = typeof window === 'undefined' ? null : window) {
  if (!currentDocument) return null;
  let target = currentDocument;
  try { if (currentWindow?.top?.document?.body) target = currentWindow.top.document; } catch { /* 현재 문서를 사용합니다. */ }
  if (target !== currentDocument) {
    const url = new URL('styles/uxkm.css', target.baseURI); url.searchParams.set('v', 'tooltip-20260819');
    let link = target.getElementById('uxkm-tooltip-portal-styles');
    if (!link) { link = target.createElement('link'); link.id = 'uxkm-tooltip-portal-styles'; link.rel = 'stylesheet'; target.head.appendChild(link); }
    if (link.href !== url.href) link.href = url.href;
  }
  const id = `uxkm-tooltip-portal-root-${ownerId}`;
  let root = target.getElementById(id);
  if (!root) { root = target.createElement('div'); root.id = id; root.className = 'uxkm-tooltip-portal-root'; target.body.appendChild(root); }
  root.dataset.theme = currentDocument.documentElement.dataset.theme || 'light';
  return root;
}

const triggerControlSelector = 'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';

export function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}

export function viewportRect(element, currentWindow = window) {
  const rect = element.getBoundingClientRect();
  try {
    if (element.ownerDocument === currentWindow.top?.document) return rect;
    const frame = currentWindow.frameElement?.getBoundingClientRect();
    if (frame) return { top: frame.top + rect.top, left: frame.left + rect.left, width: rect.width, height: rect.height };
  } catch { /* 현재 뷰포트 좌표를 사용합니다. */ }
  return rect;
}

export function Tooltip({
  id, content, children, placement, size = 'md', offset = 'md', offsetTop, offsetRight,
  offsetBottom, offsetLeft, open, defaultOpen = false, inverse = false, noArrow = false,
  arrowAnchor = 'content', panelAlign = 'center', arrowTargetAlign = 'center', disabled = false,
  trigger = 'hover', triggerContent, closable, closeLabel = '닫기', className = '', onOpenChange,
  ...props
}) {
  const generatedId = useId().replace(/:/g, '');
  const bubbleId = id || `tooltip-${generatedId}`;
  const triggerRef = useRef(null);
  const bubbleRef = useRef(null);
  const hoverTimer = useRef(null);
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [anchor, setAnchor] = useState(null);
  const [arrowPosition, setArrowPosition] = useState(null);
  const visible = open ?? internalOpen;
  const resolvedPlacement = placements.has(placement) ? placement : '';
  const resolvedSize = sizes.has(size) ? size : 'md';
  const root = visible ? getTooltipPortalRoot() : null;
  const showClose = closable ?? trigger === 'click';

  const setVisible = (next, reason, event) => {
    if (disabled) return;
    if (open === undefined) setInternalOpen(next);
    onOpenChange?.(next, reason, event);
  };
  const updatePosition = () => {
    const element = resolveTriggerAnchor(triggerRef.current);
    if (element) setAnchor(viewportRect(element));
  };
  const cancelClose = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); hoverTimer.current = null; };
  const scheduleClose = (event) => { cancelClose(); hoverTimer.current = setTimeout(() => setVisible(false, 'hover', event), 100); };
  const openFromTrigger = (reason, event) => { updatePosition(); setVisible(true, reason, event); };

  useEffect(() => {
    if (!visible) return undefined;
    updatePosition();
    const targetDocument = root?.ownerDocument || document;
    const outside = (event) => { if (!triggerRef.current?.contains(event.target) && !bubbleRef.current?.contains(event.target)) setVisible(false, 'outside', event); };
    const keydown = (event) => { if (event.key === 'Escape') setVisible(false, 'escape', event); };
    targetDocument.addEventListener('pointerdown', outside);
    document.addEventListener('pointerdown', outside);
    targetDocument.addEventListener('keydown', keydown);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      targetDocument.removeEventListener('pointerdown', outside); document.removeEventListener('pointerdown', outside);
      targetDocument.removeEventListener('keydown', keydown); window.removeEventListener('resize', updatePosition); window.removeEventListener('scroll', updatePosition, true);
    };
  }, [visible, root]);
  useEffect(() => () => cancelClose(), []);
  useEffect(() => {
    if (!visible || !anchor || !bubbleRef.current || !['target', 'mixed'].includes(arrowAnchor)) return;
    const bubbleElement = bubbleRef.current;
    ['top', 'right', 'bottom', 'left', 'transform'].forEach((name) => { bubbleElement.style[name] = ''; });
    if (arrowAnchor === 'mixed') {
      const bubbleRect = bubbleElement.getBoundingClientRect();
      const side = resolvedPlacement.startsWith('top') ? 'top' : ['left', 'right'].includes(resolvedPlacement) ? resolvedPlacement : 'bottom';
      if (side === 'top' || side === 'bottom') {
        const left = panelAlign === 'start' ? 0 : panelAlign === 'end' ? anchor.width - bubbleRect.width : (anchor.width - bubbleRect.width) / 2;
        bubbleElement.style.left = `${left}px`; bubbleElement.style.right = 'auto'; bubbleElement.style.transform = 'none';
        if (side === 'top') { bubbleElement.style.top = 'auto'; bubbleElement.style.bottom = 'calc(100% + var(--tooltip-offset-top))'; }
        else { bubbleElement.style.top = 'calc(100% + var(--tooltip-offset-bottom))'; bubbleElement.style.bottom = 'auto'; }
      } else {
        const top = panelAlign === 'start' ? 0 : panelAlign === 'end' ? anchor.height - bubbleRect.height : (anchor.height - bubbleRect.height) / 2;
        bubbleElement.style.top = `${top}px`; bubbleElement.style.bottom = 'auto'; bubbleElement.style.transform = 'none';
        if (side === 'left') { bubbleElement.style.left = 'auto'; bubbleElement.style.right = 'calc(100% + var(--tooltip-offset-left))'; }
        else { bubbleElement.style.left = 'calc(100% + var(--tooltip-offset-right))'; bubbleElement.style.right = 'auto'; }
      }
    }
    const rect = bubbleElement.getBoundingClientRect();
    const ratio = arrowTargetAlign === 'left' || arrowTargetAlign === 'top' ? 0 : arrowTargetAlign === 'right' || arrowTargetAlign === 'bottom' ? 1 : 0.5;
    const value = ['left', 'right'].includes(resolvedPlacement) ? anchor.top + anchor.height * ratio - rect.top : anchor.left + anchor.width * ratio - rect.left;
    setArrowPosition(`${value}px`);
  }, [anchor, arrowAnchor, arrowTargetAlign, panelAlign, resolvedPlacement, visible]);

  const sideOffsets = [['top', offsetTop], ['right', offsetRight], ['bottom', offsetBottom], ['left', offsetLeft]].filter(([, value]) => value && value !== 'md').map(([side, value]) => `tooltip_offset-${side}-${value}`);
  const classes = useMemo(() => ['tooltip', 'tooltip_portal', 'is-open', resolvedSize !== 'md' && `tooltip_${resolvedSize}`, resolvedPlacement && `tooltip_placement-${resolvedPlacement}`, offset !== 'md' && `tooltip_offset-${offset}`, ...sideOffsets, panelAlign !== 'center' && `tooltip_panel-align-${panelAlign}`, inverse && 'tooltip_inverse', noArrow && 'tooltip_no-arrow', arrowAnchor !== 'content' && `tooltip_arrow-anchor-${arrowAnchor}`, disabled && 'is-disabled', className].filter(Boolean).join(' '), [arrowAnchor, className, disabled, inverse, noArrow, offset, offsetTop, offsetRight, offsetBottom, offsetLeft, panelAlign, resolvedPlacement, resolvedSize]);
  const bubble = visible && root && anchor ? createPortal(
    <span className={classes} data-theme={document.documentElement.dataset.theme || 'light'} style={{ position: 'fixed', top: anchor.top, left: anchor.left, width: anchor.width, height: anchor.height, zIndex: 10020, pointerEvents: 'none', '--tooltip-arrow-position': arrowPosition || `${anchor.width / 2}px` }}>
      <span {...props} ref={bubbleRef} id={bubbleId} className={['tooltip_bubble', showClose && 'tooltip_bubble-closable'].filter(Boolean).join(' ')} role="tooltip" style={{ zIndex: 10021, pointerEvents: trigger === 'click' ? 'auto' : undefined }} onMouseEnter={trigger === 'hover' ? cancelClose : undefined} onMouseLeave={trigger === 'hover' ? scheduleClose : undefined}>
        {!noArrow && <span className="tooltip_arrow" aria-hidden="true" />}
        {showClose && <Button variant="ghost" iconOnly className="tooltip_close tooltip_close-floating" ariaLabel={closeLabel} iconBefore={<Icon name="close" size="sm" className="tooltip_close-icon" />} onClick={(event) => setVisible(false, 'close', event)} />}
        {children ?? content}
      </span>
    </span>, root) : null;
  const accessibleTrigger = isValidElement(triggerContent)
    ? cloneElement(triggerContent, { 'aria-describedby': visible ? bubbleId : undefined, 'aria-expanded': trigger === 'click' ? visible : undefined })
    : triggerContent;

  return <><span ref={triggerRef} className="tooltip_trigger" data-component="Tooltip" onClick={trigger === 'click' ? (event) => visible ? setVisible(false, 'trigger', event) : openFromTrigger('trigger', event) : undefined} onMouseEnter={trigger === 'hover' ? (event) => { cancelClose(); openFromTrigger('hover', event); } : undefined} onMouseLeave={trigger === 'hover' ? scheduleClose : undefined} onFocus={trigger === 'hover' ? (event) => openFromTrigger('focus', event) : undefined} onBlur={trigger === 'hover' ? scheduleClose : undefined}>{accessibleTrigger}</span>{bubble}</>;
}

export default Tooltip;
