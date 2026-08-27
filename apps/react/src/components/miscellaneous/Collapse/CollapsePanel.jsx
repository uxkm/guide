/**
 * CollapsePanel 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { useContext, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
import { CollapseContext } from './Collapse.jsx';

export function CollapsePanel({
  label, // 트리거 레이블입니다. title이 있으면 title을 우선합니다.
  title, // 트리거 제목입니다. 있으면 label보다 우선합니다.
  content, // children이 없을 때 본문으로 쓸 텍스트입니다.
  children, // 패널 본문 콘텐츠입니다.
  extra, // 트리거 오른쪽에 표시할 보조 텍스트입니다.
  open = false, // 초기 열림 상태입니다.
  disabled = false, // 패널을 비활성화합니다.
  className = '', // 패널 루트에 추가할 클래스입니다.
  ripple = true, // 트리거 버튼 리플 효과입니다.
  ...props // 나머지 속성을 패널 루트에 전달합니다.
}) {
  const collapse = useContext(CollapseContext);
  const uid = useId().replaceAll(':', '');
  const triggerId = `collapse-trigger-${uid}`;
  const bodyId = `collapse-body-${uid}`;
  const bodyRef = useRef(null);
  const stateRef = useRef(Boolean(open));
  const disabledRef = useRef(Boolean(disabled));
  const firstSlideSync = useRef(true);
  const [isOpen, setIsOpen] = useState(Boolean(open));
  stateRef.current = isOpen;
  disabledRef.current = Boolean(disabled);

  useEffect(
    () =>
      collapse?.registerPanel({
        id: triggerId,
        disabled: () => disabledRef.current,
        isOpen: () => stateRef.current,
        setOpen: setIsOpen,
      }),
    [collapse, triggerId],
  );

  useLayoutEffect(() => {
    if (collapse?.effect !== 'slide') return;
    setSlideRegionOpen(bodyRef.current, isOpen, !firstSlideSync.current);
    firstSlideSync.current = false;
  }, [collapse?.effect, isOpen]);

  function handleKeyDown(event) {
    if (collapse?.focusAdjacent(triggerId, event.key)) event.preventDefault();
  }

  const classes = ['collapse_panel', isOpen && 'is-open', disabled && 'is-disabled', className]
    .filter(Boolean)
    .join(' ');
  const slide = collapse?.effect === 'slide';

  return (
    <div {...props} className={classes}>
      <div className="collapse_header">
        <Button
          id={triggerId}
          variant="text"
          color="default"
          className="collapse_trigger"
          expanded={isOpen}
          aria-controls={bodyId}
          disabled={disabled}
          ripple={ripple}
          onClick={() => collapse?.togglePanel(triggerId)}
          onKeyDown={handleKeyDown}
          iconAfter={<Icon name="chevron-down" className="collapse_icon" />}
        >
          <span className="collapse_label">{title ?? label}</span>
          {extra != null ? <span className="collapse_extra">{extra}</span> : null}
        </Button>
      </div>
      <div
        ref={bodyRef}
        id={bodyId}
        className="collapse_body"
        role="region"
        aria-labelledby={triggerId}
        hidden={slide ? undefined : !isOpen}
      >
        <div className="collapse_content">{children ?? (content ? <p>{content}</p> : null)}</div>
      </div>
    </div>
  );
}

export default CollapsePanel;
