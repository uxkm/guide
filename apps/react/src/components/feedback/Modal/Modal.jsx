import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg', 'fullscreen']);
const documentModalCounts = new WeakMap();
const portalOwnerId = Math.random().toString(36).slice(2, 10);

function getPortalRoot() {
  if (typeof document === 'undefined') return null;
  let targetDocument = document;
  try {
    if (window.top?.document?.body) targetDocument = window.top.document;
  } catch {
    // 다른 출처의 iframe에서는 현재 문서를 사용합니다.
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

  targetDocument.getElementById('uxkm-modal-portal-root')?.remove();
  const rootId = `uxkm-modal-portal-root-${portalOwnerId}`;
  let root = targetDocument.getElementById(rootId);
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = rootId;
    root.className = 'uxkm-modal-portal-root';
    targetDocument.body.appendChild(root);
    window.addEventListener('pagehide', () => root?.remove(), { once: true });
  }
  root.dataset.theme = document.documentElement.dataset.theme || 'light';
  return root;
}

export function Modal({
  id, title, size = 'md', scrollable = false, backdrop = true, open,
  defaultOpen = false, footerAlign = 'end', footerRatio = '1-1',
  footerNoPadBottom = false, header, footer, children = 'Modal', className = '',
  closeLabel = '닫기', onClose, ...props
}) {
  const generatedId = useId().replace(/:/g, '');
  const modalId = id || `modal-${generatedId}`;
  const titleId = `${modalId}-title`;
  const rootRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const visible = open ?? internalOpen;
  const resolvedSize = sizes.has(size) ? size : 'md';
  const portalRoot = visible ? getPortalRoot() : null;
  const classes = useMemo(() => [
    'modal', resolvedSize !== 'md' && `modal_${resolvedSize}`,
    scrollable && 'modal_scrollable', visible && 'is-open', className,
  ].filter(Boolean).join(' '), [className, resolvedSize, scrollable, visible]);
  const footerClasses = [
    'modal_footer', footerAlign !== 'end' && `modal_footer-${footerAlign}`,
    footerAlign === 'even' && footerRatio !== '1-1' && `modal_footer-even-${footerRatio}`,
    footerNoPadBottom && 'modal_footer-no-pad-b',
  ].filter(Boolean).join(' ');

  const requestClose = (reason, event) => {
    if (open === undefined) setInternalOpen(false);
    onClose?.(reason, event);
  };

  useEffect(() => {
    if (!visible || !portalRoot) return undefined;
    const targetDocument = portalRoot.ownerDocument;
    previousFocusRef.current = targetDocument.activeElement;
    documentModalCounts.set(targetDocument, (documentModalCounts.get(targetDocument) || 0) + 1);
    targetDocument.body.classList.add('is-modal-open');
    const focusId = targetDocument.defaultView?.requestAnimationFrame(() => rootRef.current?.focus());
    const handleKeyDown = (event) => {
      const openModals = portalRoot.querySelectorAll('.modal.is-open');
      if (openModals[openModals.length - 1] !== rootRef.current) return;
      if (event.key === 'Escape') requestClose('escape', event);
      if (event.key !== 'Tab' || !rootRef.current) return;
      const focusable = [...rootRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((element) => !element.disabled);
      if (!focusable.length) { event.preventDefault(); rootRef.current.focus(); return; }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && targetDocument.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && targetDocument.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    targetDocument.addEventListener('keydown', handleKeyDown);
    return () => {
      if (focusId) targetDocument.defaultView?.cancelAnimationFrame(focusId);
      targetDocument.removeEventListener('keydown', handleKeyDown);
      const remaining = Math.max(0, (documentModalCounts.get(targetDocument) || 1) - 1);
      documentModalCounts.set(targetDocument, remaining);
      if (remaining === 0) targetDocument.body.classList.remove('is-modal-open');
      previousFocusRef.current?.focus?.();
    };
  }, [visible, portalRoot]);

  if (!visible || !portalRoot) return null;

  return createPortal(
    <div {...props} ref={rootRef} id={modalId} className={classes} data-component="Modal" data-modal="" data-modal-backdrop={backdrop ? undefined : 'false'} role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined} tabIndex={-1}>
      <div className="modal_backdrop" aria-hidden="true" onClick={(event) => backdrop && requestClose('backdrop', event)} />
      <div className="modal_dialog">
        {(title || header) && <div className="modal_header">{header ?? <h2 className="modal_title" id={titleId}>{title}</h2>}<Button variant="ghost" iconOnly className="modal_close" ariaLabel={closeLabel} iconBefore={<Icon name="close" size="sm" className="modal_close-icon" />} onClick={(event) => requestClose('close', event)} /></div>}
        <div className="modal_body">{children}</div>
        {footer && <div className={footerClasses}>{footer}</div>}
      </div>
    </div>,
    portalRoot,
  );
}

export default Modal;
