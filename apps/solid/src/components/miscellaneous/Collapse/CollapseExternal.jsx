import { createEffect, createSignal, createUniqueId } from 'solid-js';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

/**
 * CollapseExternal 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
export function CollapseExternal({
  triggerLabel,
  lead,
  children,
  open = false,
  effect,
  boxed = true,
  class: className = '',
  ripple = true,
  ...props
}) {
  const uid = createUniqueId().replaceAll(':', '');
  const panelId = `collapse-external-${uid}`;
  let panelRef;
  let firstSlideSync = true;
  const [isOpen, setIsOpen] = createSignal(Boolean(open));
  const slide = effect === 'slide';

  createEffect(() => {
    if (!slide) return;
    setSlideRegionOpen(panelRef, isOpen(), !firstSlideSync);
    firstSlideSync = false;
  });

  return (
    <div {...props} class={className}>
      {lead != null ? <div>{lead}</div> : null}
      <Button
        variant="ghost"
        size="sm"
        expanded={isOpen()}
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
        class={['collapse', isOpen() && 'is-open'].filter(Boolean).join(' ')}
        data-effect={slide ? 'slide' : undefined}
        hidden={slide ? undefined : !isOpen()}
        style={boxed ? { marginTop: 'var(--space-sm)' } : undefined}
      >
        <div class={boxed ? 'collapse_inner' : undefined}>{children}</div>
      </div>
    </div>
  );
}

export default CollapseExternal;
