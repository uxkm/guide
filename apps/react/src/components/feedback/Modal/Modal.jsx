/**
 * Modal 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg', 'fullscreen']); // 지원하는 대화상자 크기입니다.
// 문서별 열린 Modal 수를 추적해 body 스크롤 잠금을 공유합니다.
const documentModalCounts = new WeakMap();
// iframe 포털 루트를 인스턴스별로 구분하는 ID입니다.
const portalOwnerId = Math.random().toString(36).slice(2, 10);

// iframe에서도 최상위 문서에 Modal을 올리기 위한 포털 루트를 찾거나 만듭니다.
export function getModalPortalRoot(
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
  // 상위 문서에 UXKM 스타일을 버전 쿼리와 함께 연결합니다.
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

  // 이전 공유 루트를 제거하고 소유자별 루트를 사용합니다.
  targetDocument.getElementById('uxkm-modal-portal-root')?.remove();
  const rootId = `uxkm-modal-portal-root-${portalOwnerId}`;
  let root = targetDocument.getElementById(rootId);
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = rootId;
    root.className = 'uxkm-modal-portal-root';
    targetDocument.body.appendChild(root);
    currentWindow?.addEventListener('pagehide', () => root?.remove(), { once: true });
  }
  root.dataset.theme = currentDocument.documentElement.dataset.theme || 'light';
  return root;
}

export function Modal({
  id, // 대화상자 DOM id입니다. 없으면 생성합니다.
  title, // 기본 헤더 제목입니다.
  size = 'md', // 대화상자 크기입니다.
  scrollable = false, // 본문만 스크롤하는 변형입니다.
  backdrop = true, // 백드롭 클릭으로 닫을지 여부입니다.
  open, // 제어형 열림 상태입니다.
  defaultOpen = false, // 비제어형 초기 열림 상태입니다.
  footerAlign = 'end', // 푸터 액션 정렬입니다.
  footerRatio = '1-1', // even 정렬일 때 균등 버튼 비율입니다.
  footerNoPadBottom = false, // 푸터 하단 패딩 제거입니다.
  header, // title 대신 사용할 커스텀 헤더입니다.
  footer, // 푸터 액션 콘텐츠입니다.
  children = 'Modal', // 본문 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  closeLabel = '닫기', // 닫기 버튼의 접근성 이름입니다.
  onClose, // close · backdrop · escape 사유로 호출됩니다.
  ...props // id 외 나머지 속성을 루트 요소에 전달합니다.
}) {
  const generatedId = useId().replace(/:/g, ''); // React id에서 콜론을 제거합니다.
  const modalId = id || `modal-${generatedId}`; // 최종 루트 id입니다.
  const titleId = `${modalId}-title`; // aria-labelledby에 연결할 제목 id입니다.
  const rootRef = useRef(null); // 포커스 트랩용 루트 참조입니다.
  const previousFocusRef = useRef(null); // 닫힌 뒤 복원할 이전 포커스입니다.
  const [internalOpen, setInternalOpen] = useState(defaultOpen); // 비제어 열림 상태입니다.
  const visible = open ?? internalOpen; // 제어·비제어를 합친 최종 표시 상태입니다.
  const resolvedSize = sizes.has(size) ? size : 'md'; // 검증된 크기입니다.
  const portalRoot = visible ? getModalPortalRoot() : null; // 열렸을 때만 포털 루트를 준비합니다.
  // 크기·스크롤·열림 상태 클래스를 조합합니다.
  const classes = useMemo(
    () =>
      [
        'modal', // Modal 루트 클래스입니다.
        resolvedSize !== 'md' && `modal_${resolvedSize}`, // md가 아닐 때만 크기 변형입니다.
        scrollable && 'modal_scrollable', // 본문 스크롤 변형입니다.
        visible && 'is-open', // 열림 상태 클래스입니다.
        className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
      ]
        .filter(Boolean)
        .join(' '),
    [className, resolvedSize, scrollable, visible],
  );
  // 푸터 정렬·비율·패딩 클래스를 조합합니다.
  const footerClasses = [
    'modal_footer', // 푸터 루트 클래스입니다.
    footerAlign !== 'end' && `modal_footer-${footerAlign}`, // end가 아닐 때만 정렬 변형입니다.
    footerAlign === 'even' && footerRatio !== '1-1' && `modal_footer-even-${footerRatio}`, // even 비율입니다.
    footerNoPadBottom && 'modal_footer-no-pad-b', // 하단 패딩 제거입니다.
  ]
    .filter(Boolean)
    .join(' ');

  // 비제어면 내부 상태를 끄고 onClose를 알립니다.
  const requestClose = (reason, event) => {
    if (open === undefined) setInternalOpen(false);
    onClose?.(reason, event);
  };

  // 열림 시 스크롤 잠금·포커스·Escape·Tab 트랩을 연결합니다.
  useEffect(() => {
    if (!visible || !portalRoot) return undefined;
    const targetDocument = portalRoot.ownerDocument;
    previousFocusRef.current = targetDocument.activeElement;
    documentModalCounts.set(targetDocument, (documentModalCounts.get(targetDocument) || 0) + 1);
    targetDocument.body.classList.add('is-modal-open');
    const focusId = targetDocument.defaultView?.requestAnimationFrame(() =>
      rootRef.current?.focus(),
    );
    const handleKeyDown = (event) => {
      // 가장 위(마지막) 열린 Modal만 키보드를 처리합니다.
      const openModals = portalRoot.querySelectorAll('.modal.is-open');
      if (openModals[openModals.length - 1] !== rootRef.current) return;
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
      // Shift+Tab / Tab으로 포커스를 대화상자 안에 가둡니다.
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
      const remaining = Math.max(0, (documentModalCounts.get(targetDocument) || 1) - 1);
      documentModalCounts.set(targetDocument, remaining);
      // 마지막 Modal이 닫힐 때만 body 스크롤 잠금을 해제합니다.
      if (remaining === 0) targetDocument.body.classList.remove('is-modal-open');
      previousFocusRef.current?.focus?.();
    };
  }, [visible, portalRoot]);

  if (!visible || !portalRoot) return null;

  return createPortal(
    <div
      {...props}
      ref={rootRef}
      id={modalId}
      className={classes}
      data-component="Modal"
      data-modal=""
      data-modal-backdrop={backdrop ? undefined : 'false'}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      tabIndex={-1}
    >
      {/* 백드롭 클릭으로 닫을 수 있습니다. */}
      <div
        className="modal_backdrop"
        aria-hidden="true"
        onClick={(event) => backdrop && requestClose('backdrop', event)}
      />
      <div className="modal_dialog">
        {/* 제목 또는 커스텀 헤더와 닫기 버튼입니다. */}
        {(title || header) && (
          <div className="modal_header">
            {header ?? (
              <h2 className="modal_title" id={titleId}>
                {title}
              </h2>
            )}
            <Button
              variant="ghost"
              iconOnly
              className="modal_close"
              ariaLabel={closeLabel}
              iconBefore={<Icon name="close" size="sm" className="modal_close-icon" />}
              onClick={(event) => requestClose('close', event)}
            />
          </div>
        )}
        <div className="modal_body">{children}</div>
        {footer && <div className={footerClasses}>{footer}</div>}
      </div>
    </div>,
    portalRoot,
  );
}

export default Modal;
