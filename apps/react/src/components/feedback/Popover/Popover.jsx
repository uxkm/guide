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
]); // 지원하는 트리거 기준 배치입니다.
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 패널 크기입니다.
const portalOwnerId = Math.random().toString(36).slice(2, 10); // iframe 포털 소유자 ID입니다.

// iframe에서도 최상위 문서에 Popover를 올리기 위한 포털 루트를 찾거나 만듭니다.
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

// 트리거 래퍼 안에서 실제 포커스 가능한 컨트롤을 찾습니다.
const triggerControlSelector =
  'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';

export function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}

// iframe이면 상위 뷰포트 좌표로 보정한 getBoundingClientRect입니다.
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
  id, // 패널 DOM id입니다. 없으면 생성합니다.
  placement = 'bottom', // 트리거 기준 배치입니다.
  size = 'md', // 패널 크기입니다.
  offset = 'md', // 전체 방향 공통 간격입니다.
  open, // 제어형 열림 상태입니다.
  defaultOpen = false, // 비제어형 초기 열림 상태입니다.
  offsetTop, // 위쪽 간격 개별 지정입니다.
  offsetRight, // 오른쪽 간격 개별 지정입니다.
  offsetBottom, // 아래쪽 간격 개별 지정입니다.
  offsetLeft, // 왼쪽 간격 개별 지정입니다.
  trigger = 'click', // click 또는 hover 작동 방식입니다.
  triggerContent, // 트리거로 렌더할 콘텐츠입니다.
  title, // 패널 제목입니다.
  panelLabel, // 제목 없을 때 접근성 라벨입니다.
  footer, // 패널 푸터입니다.
  children = 'Popover', // 패널 본문입니다.
  noArrow = false, // 화살표를 숨깁니다.
  closable, // 닫기 버튼 표시입니다. 기본은 click일 때 켜집니다.
  disabled = false, // 열기·닫기를 비활성화합니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onOpenChange, // 열림 상태 변경 시 호출됩니다.
  closeLabel = '닫기', // 닫기 버튼의 접근성 이름입니다.
  panelAlign = 'start', // 패널 정렬 기준입니다.
  arrowAnchor = 'content', // 화살표 기준(content · target · mixed)입니다.
  arrowTargetAlign = 'center', // 타깃 기준 화살표 정렬입니다.
  ...props // 패널에 전달할 나머지 속성입니다.
}) {
  const generatedId = useId().replace(/:/g, '');
  const panelId = id || `popover-${generatedId}`;
  const titleId = `${panelId}-title`;
  const triggerRef = useRef(null); // 트리거 래퍼 참조입니다.
  const panelRef = useRef(null); // 패널 참조입니다.
  const hoverTimerRef = useRef(null); // hover 닫기 지연 타이머입니다.
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [anchor, setAnchor] = useState(null); // 트리거 뷰포트 좌표입니다.
  const [measuredArrowPosition, setMeasuredArrowPosition] = useState(null); // 측정된 화살표 위치입니다.
  const visible = open ?? internalOpen;
  const resolvedPlacement = placements.has(placement) ? placement : 'bottom';
  const resolvedSize = sizes.has(size) ? size : 'md';
  const portalRoot = visible ? getPopoverPortalRoot() : null;
  // closable 미지정 시 click 트리거면 닫기 버튼을 켭니다.
  const showClose = closable ?? trigger === 'click';

  // 제어·비제어 열림 상태를 갱신하고 onOpenChange를 알립니다.
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
  // hover 이탈 후 잠시 뒤 닫아 패널 이동을 허용합니다.
  const scheduleHoverClose = (event) => {
    cancelHoverClose();
    hoverTimerRef.current = setTimeout(() => setVisible(false, 'hover', event), 100);
  };
  const updatePosition = () => {
    const element = resolveTriggerAnchor(triggerRef.current);
    if (element) setAnchor(topViewportRect(element));
  };
  // 열림 중 바깥 클릭·Escape·리사이즈·스크롤을 처리합니다.
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
  // target·mixed 화살표 기준일 때 트리거 대비 화살표 위치를 측정합니다.
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

  // 방향별 개별 offset 클래스를 만듭니다.
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
        'popover', // Popover 루트 클래스입니다.
        'popover_portal', // 포털 배치 변형입니다.
        'is-open', // 열림 상태입니다.
        resolvedSize !== 'md' && `popover_${resolvedSize}`, // 크기 변형입니다.
        `popover_placement-${resolvedPlacement}`, // 배치 방향입니다.
        offset !== 'md' && `popover_offset-${offset}`, // 공통 간격입니다.
        ...offsetClasses, // 방향별 간격입니다.
        panelAlign !== 'start' && `popover_panel-align-${panelAlign}`, // 패널 정렬입니다.
        arrowAnchor !== 'content' && `popover_arrow-anchor-${arrowAnchor}`, // 화살표 기준입니다.
        noArrow && 'popover_no-arrow', // 화살표 숨김입니다.
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
  // 트리거에 확장·팝업 접근성 속성을 붙입니다.
  const accessibleTrigger = isValidElement(triggerContent)
    ? cloneElement(triggerContent, { 'aria-expanded': visible, 'aria-haspopup': 'dialog' })
    : triggerContent;
  // 열림·좌표·포털이 준비되면 패널을 포털로 렌더합니다.
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
              {/* 제목 없을 때 떠 있는 닫기 버튼입니다. */}
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
      {/* 트리거 래퍼: click·hover·focus로 패널을 엽니다. */}
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
