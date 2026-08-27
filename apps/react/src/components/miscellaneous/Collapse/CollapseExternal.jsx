/**
 * CollapseExternal 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { useId, useLayoutEffect, useRef, useState } from 'react';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

export function CollapseExternal({
  triggerLabel, // 외부 트리거 버튼 텍스트입니다.
  lead, // 트리거 위에 표시할 선행 콘텐츠입니다.
  children, // 접히는 본문 콘텐츠입니다.
  open = false, // 초기 열림 상태입니다.
  effect, // slide면 높이 애니메이션을 사용합니다.
  boxed = true, // 본문을 collapse_inner로 감쌉니다.
  className = '', // 바깥 래퍼에 추가할 클래스입니다.
  ripple = true, // 트리거 버튼 리플 효과입니다.
  ...props // 나머지 속성을 바깥 래퍼에 전달합니다.
}) {
  const uid = useId().replaceAll(':', '');
  const panelId = `collapse-external-${uid}`;
  const panelRef = useRef(null);
  const firstSlideSync = useRef(true);
  const [isOpen, setIsOpen] = useState(Boolean(open));
  const slide = effect === 'slide';

  useLayoutEffect(() => {
    if (!slide) return;
    setSlideRegionOpen(panelRef.current, isOpen, !firstSlideSync.current);
    firstSlideSync.current = false;
  }, [isOpen, slide]);

  return (
    <div {...props} className={className}>
      {lead != null ? <div>{lead}</div> : null}
      <Button
        variant="ghost"
        size="sm"
        expanded={isOpen}
        aria-controls={panelId}
        ripple={ripple}
        onClick={() => setIsOpen((value) => !value)}
        iconAfter={<Icon name="chevron-down" size="sm" />}
      >
        {triggerLabel}
      </Button>
      <div
        ref={panelRef}
        id={panelId}
        className={['collapse', isOpen && 'is-open'].filter(Boolean).join(' ')}
        data-effect={slide ? 'slide' : undefined}
        hidden={slide ? undefined : !isOpen}
        style={boxed ? { marginTop: 'var(--space-sm)' } : undefined}
      >
        <div className={boxed ? 'collapse_inner' : undefined}>{children}</div>
      </div>
    </div>
  );
}

export default CollapseExternal;
