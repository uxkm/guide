/**
 * Tooltip 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { cloneElement, isValidElement, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const placements = new Set(['top', 'top-start', 'top-end', 'left', 'right', 'start', 'end']); // 지원하는 배치입니다.
const sizes = new Set(['sm', 'md', 'lg']); // 지원하는 말풍선 크기입니다.
const ownerId = Math.random().toString(36).slice(2, 10); // iframe 포털 소유자 ID입니다.

// iframe에서도 최상위 문서에 Tooltip을 올리기 위한 포털 루트를 찾거나 만듭니다.
export function getTooltipPortalRoot(
  currentDocument = typeof document === 'undefined' ? null : document,
  currentWindow = typeof window === 'undefined' ? null : window,
) {
  if (!currentDocument) return null;
  let target = currentDocument;
  try {
    if (currentWindow?.top?.document?.body) target = currentWindow.top.document;
  } catch {
    /* 현재 문서를 사용합니다. */
  }
  if (target !== currentDocument) {
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
  const id = `uxkm-tooltip-portal-root-${ownerId}`;
  let root = target.getElementById(id);
  if (!root) {
    root = target.createElement('div');
    root.id = id;
    root.className = 'uxkm-tooltip-portal-root';
    target.body.appendChild(root);
  }
  root.dataset.theme = currentDocument.documentElement.dataset.theme || 'light';
  return root;
}

const triggerControlSelector =
  'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';

// 트리거 래퍼 안에서 실제 포커스 가능한 컨트롤을 찾습니다.
export function resolveTriggerAnchor(root) {
  if (!root?.matches) return root;
  if (root.matches(triggerControlSelector)) return root;
  return root.querySelector(triggerControlSelector) || root;
}

// iframe이면 상위 뷰포트 좌표로 보정한 getBoundingClientRect입니다.
export function viewportRect(element, currentWindow = window) {
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

export function Tooltip({
  id, // 말풍선 DOM id입니다. 없으면 생성합니다.
  content, // children이 없을 때 쓸 말풍선 내용입니다.
  children, // 말풍선 내용입니다. content보다 우선합니다.
  placement, // 브라우저 뷰포트 기준 배치입니다.
  size = 'md', // 말풍선 크기입니다.
  offset = 'md', // 전체 방향 공통 간격입니다.
  offsetTop, // 위쪽 간격 개별 지정입니다.
  offsetRight, // 오른쪽 간격 개별 지정입니다.
  offsetBottom, // 아래쪽 간격 개별 지정입니다.
  offsetLeft, // 왼쪽 간격 개별 지정입니다.
  open, // 제어형 열림 상태입니다.
  defaultOpen = false, // 비제어형 초기 열림 상태입니다.
  inverse = false, // 역색(대비) 변형입니다.
  noArrow = false, // 화살표를 숨깁니다.
  arrowAnchor = 'content', // 화살표 기준(content · target · mixed)입니다.
  panelAlign = 'center', // 말풍선 정렬 기준입니다.
  arrowTargetAlign = 'center', // 타깃 기준 화살표 정렬입니다.
  disabled = false, // 열기·닫기를 비활성화합니다.
  trigger = 'hover', // hover 또는 click 작동 방식입니다.
  triggerContent, // 트리거로 렌더할 콘텐츠입니다.
  closable, // 닫기 버튼 표시입니다. 기본은 click일 때 켜집니다.
  closeLabel = '닫기', // 닫기 버튼의 접근성 이름입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onOpenChange, // 열림 상태 변경 시 호출됩니다.
  ...props // 말풍선에 전달할 나머지 속성입니다.
}) {
  const generatedId = useId().replace(/:/g, '');
  const bubbleId = id || `tooltip-${generatedId}`;
  const triggerRef = useRef(null);
  const bubbleRef = useRef(null);
  const hoverTimer = useRef(null); // hover 닫기 지연 타이머입니다.
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [anchor, setAnchor] = useState(null); // 트리거 뷰포트 좌표입니다.
  const [arrowPosition, setArrowPosition] = useState(null); // 측정된 화살표 위치입니다.
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
  const cancelClose = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  };
  const scheduleClose = (event) => {
    cancelClose();
    hoverTimer.current = setTimeout(() => setVisible(false, 'hover', event), 100);
  };
  const openFromTrigger = (reason, event) => {
    updatePosition();
    setVisible(true, reason, event);
  };

  // 열림 중 바깥 클릭·Escape·리사이즈·스크롤을 처리합니다.
  useEffect(() => {
    if (!visible) return undefined;
    updatePosition();
    const targetDocument = root?.ownerDocument || document;
    const outside = (event) => {
      if (!triggerRef.current?.contains(event.target) && !bubbleRef.current?.contains(event.target))
        setVisible(false, 'outside', event);
    };
    const keydown = (event) => {
      if (event.key === 'Escape') setVisible(false, 'escape', event);
    };
    targetDocument.addEventListener('pointerdown', outside);
    document.addEventListener('pointerdown', outside);
    targetDocument.addEventListener('keydown', keydown);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      targetDocument.removeEventListener('pointerdown', outside);
      document.removeEventListener('pointerdown', outside);
      targetDocument.removeEventListener('keydown', keydown);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [visible, root]);
  useEffect(() => () => cancelClose(), []);
  // mixed/target 화살표 기준일 때 말풍선 위치와 화살표 좌표를 맞춥니다.
  useEffect(() => {
    if (!visible || !anchor || !bubbleRef.current || !['target', 'mixed'].includes(arrowAnchor))
      return;
    const bubbleElement = bubbleRef.current;
    ['top', 'right', 'bottom', 'left', 'transform'].forEach((name) => {
      bubbleElement.style[name] = '';
    });
    if (arrowAnchor === 'mixed') {
      const bubbleRect = bubbleElement.getBoundingClientRect();
      const side = resolvedPlacement.startsWith('top')
        ? 'top'
        : ['left', 'right'].includes(resolvedPlacement)
          ? resolvedPlacement
          : 'bottom';
      if (side === 'top' || side === 'bottom') {
        const left =
          panelAlign === 'start'
            ? 0
            : panelAlign === 'end'
              ? anchor.width - bubbleRect.width
              : (anchor.width - bubbleRect.width) / 2;
        bubbleElement.style.left = `${left}px`;
        bubbleElement.style.right = 'auto';
        bubbleElement.style.transform = 'none';
        if (side === 'top') {
          bubbleElement.style.top = 'auto';
          bubbleElement.style.bottom = 'calc(100% + var(--tooltip-offset-top))';
        } else {
          bubbleElement.style.top = 'calc(100% + var(--tooltip-offset-bottom))';
          bubbleElement.style.bottom = 'auto';
        }
      } else {
        const top =
          panelAlign === 'start'
            ? 0
            : panelAlign === 'end'
              ? anchor.height - bubbleRect.height
              : (anchor.height - bubbleRect.height) / 2;
        bubbleElement.style.top = `${top}px`;
        bubbleElement.style.bottom = 'auto';
        bubbleElement.style.transform = 'none';
        if (side === 'left') {
          bubbleElement.style.left = 'auto';
          bubbleElement.style.right = 'calc(100% + var(--tooltip-offset-left))';
        } else {
          bubbleElement.style.left = 'calc(100% + var(--tooltip-offset-right))';
          bubbleElement.style.right = 'auto';
        }
      }
    }
    const rect = bubbleElement.getBoundingClientRect();
    const ratio =
      arrowTargetAlign === 'left' || arrowTargetAlign === 'top'
        ? 0
        : arrowTargetAlign === 'right' || arrowTargetAlign === 'bottom'
          ? 1
          : 0.5;
    const value = ['left', 'right'].includes(resolvedPlacement)
      ? anchor.top + anchor.height * ratio - rect.top
      : anchor.left + anchor.width * ratio - rect.left;
    setArrowPosition(`${value}px`);
  }, [anchor, arrowAnchor, arrowTargetAlign, panelAlign, resolvedPlacement, visible]);

  const sideOffsets = [
    ['top', offsetTop],
    ['right', offsetRight],
    ['bottom', offsetBottom],
    ['left', offsetLeft],
  ]
    .filter(([, value]) => value && value !== 'md')
    .map(([side, value]) => `tooltip_offset-${side}-${value}`);
  const classes = useMemo(
    () =>
      [
        'tooltip', // Tooltip 루트 클래스입니다.
        'tooltip_portal', // 포털 배치 변형입니다.
        'is-open', // 열림 상태입니다.
        resolvedSize !== 'md' && `tooltip_${resolvedSize}`, // 크기 변형입니다.
        resolvedPlacement && `tooltip_placement-${resolvedPlacement}`, // 배치 방향입니다.
        offset !== 'md' && `tooltip_offset-${offset}`, // 공통 간격입니다.
        ...sideOffsets, // 방향별 간격입니다.
        panelAlign !== 'center' && `tooltip_panel-align-${panelAlign}`, // 말풍선 정렬입니다.
        inverse && 'tooltip_inverse', // 역색 변형입니다.
        noArrow && 'tooltip_no-arrow', // 화살표 숨김입니다.
        arrowAnchor !== 'content' && `tooltip_arrow-anchor-${arrowAnchor}`, // 화살표 기준입니다.
        disabled && 'is-disabled', // 비활성 상태입니다.
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [
      arrowAnchor,
      className,
      disabled,
      inverse,
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
  // 열림·좌표·포털이 준비되면 말풍선을 포털로 렌더합니다.
  const bubble =
    visible && root && anchor
      ? createPortal(
          <span
            className={classes}
            data-theme={document.documentElement.dataset.theme || 'light'}
            style={{
              position: 'fixed',
              top: anchor.top,
              left: anchor.left,
              width: anchor.width,
              height: anchor.height,
              zIndex: 10020,
              pointerEvents: 'none',
              '--tooltip-arrow-position': arrowPosition || `${anchor.width / 2}px`,
            }}
          >
            <span
              {...props}
              ref={bubbleRef}
              id={bubbleId}
              className={['tooltip_bubble', showClose && 'tooltip_bubble-closable']
                .filter(Boolean)
                .join(' ')}
              role="tooltip"
              style={{ zIndex: 10021, pointerEvents: trigger === 'click' ? 'auto' : undefined }}
              onMouseEnter={trigger === 'hover' ? cancelClose : undefined}
              onMouseLeave={trigger === 'hover' ? scheduleClose : undefined}
            >
              {!noArrow && <span className="tooltip_arrow" aria-hidden="true" />}
              {showClose && (
                <Button
                  variant="ghost"
                  iconOnly
                  className="tooltip_close tooltip_close-floating"
                  ariaLabel={closeLabel}
                  iconBefore={<Icon name="close" size="sm" className="tooltip_close-icon" />}
                  onClick={(event) => setVisible(false, 'close', event)}
                />
              )}
              {children ?? content}
            </span>
          </span>,
          root,
        )
      : null;
  // 트리거에 describedby·expanded 접근성 속성을 붙입니다.
  const accessibleTrigger = isValidElement(triggerContent)
    ? cloneElement(triggerContent, {
        'aria-describedby': visible ? bubbleId : undefined,
        'aria-expanded': trigger === 'click' ? visible : undefined,
      })
    : triggerContent;

  return (
    <>
      <span
        ref={triggerRef}
        className="tooltip_trigger"
        data-component="Tooltip"
        onClick={
          trigger === 'click'
            ? (event) =>
                visible ? setVisible(false, 'trigger', event) : openFromTrigger('trigger', event)
            : undefined
        }
        onMouseEnter={
          trigger === 'hover'
            ? (event) => {
                cancelClose();
                openFromTrigger('hover', event);
              }
            : undefined
        }
        onMouseLeave={trigger === 'hover' ? scheduleClose : undefined}
        onFocus={trigger === 'hover' ? (event) => openFromTrigger('focus', event) : undefined}
        onBlur={trigger === 'hover' ? scheduleClose : undefined}
      >
        {accessibleTrigger}
      </span>
      {bubble}
    </>
  );
}

export default Tooltip;
