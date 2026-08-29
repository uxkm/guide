import { createEffect, createSignal, createUniqueId, onCleanup, useContext } from 'solid-js';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
import { CollapseContext } from './Collapse.jsx';

/**
 * CollapsePanel 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
export function CollapsePanel({
  label,
  title,
  content,
  children,
  extra,
  open = false,
  disabled = false,
  class: className = '',
  ripple = true,
  ...props
}) {
  const collapse = useContext(CollapseContext);
  const uid = createUniqueId().replaceAll(':', '');
  const triggerId = `collapse-trigger-${uid}`;
  const bodyId = `collapse-body-${uid}`;
  let bodyRef;
  let stateRef = Boolean(open);
  let disabledRef = Boolean(disabled);
  let firstSlideSync = true;
  const [isOpen, setIsOpen] = createSignal(Boolean(open));

  createEffect(() => {
    stateRef = isOpen();
    disabledRef = Boolean(disabled);
  });

  createEffect(() => {
    const cleanup = collapse?.registerPanel({
      id: triggerId,
      disabled: () => disabledRef,
      isOpen: () => stateRef,
      setOpen: setIsOpen,
    });
    onCleanup(() => cleanup?.());
  });

  createEffect(() => {
    if (collapse?.effect !== 'slide') return;
    setSlideRegionOpen(bodyRef, isOpen(), !firstSlideSync);
    firstSlideSync = false;
  });

  function handleKeyDown(event) {
    if (collapse?.focusAdjacent(triggerId, event.key)) event.preventDefault();
  }

  const classes = ['collapse_panel', isOpen() && 'is-open', disabled && 'is-disabled', className]
    .filter(Boolean)
    .join(' ');
  const slide = collapse?.effect === 'slide';

  return (
    <div {...props} class={classes}>
      <div class="collapse_header">
        <Button
          id={triggerId}
          variant="text"
          color="default"
          class="collapse_trigger"
          expanded={isOpen()}
          aria-controls={bodyId}
          disabled={disabled}
          ripple={ripple}
          onClick={() => collapse?.togglePanel(triggerId)}
          onKeyDown={handleKeyDown}
          iconAfter={<Icon name="chevron-down" class="collapse_icon" />}
        >
          <span class="collapse_label">{title ?? label}</span>
          {extra != null ? <span class="collapse_extra">{extra}</span> : null}
        </Button>
      </div>
      <div
        ref={bodyRef}
        id={bodyId}
        class="collapse_body"
        role="region"
        aria-labelledby={triggerId}
        hidden={slide ? undefined : !isOpen()}
      >
        <div class="collapse_content">{children ?? (content ? <p>{content}</p> : null)}</div>
      </div>
    </div>
  );
}

export default CollapsePanel;
