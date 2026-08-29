import { createEffect, createSignal, createUniqueId, onCleanup, useContext } from 'solid-js';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
import { AccordionContext } from './Accordion.jsx';

/**
 * AccordionItem 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
export function AccordionItem({
  label,
  title,
  content,
  children,
  extra,
  open = false,
  disabled = false,
  headingLevel = 3,
  class: className = '',
  ripple = true,
  ...props
}) {
  const accordion = useContext(AccordionContext);
  const uid = createUniqueId().replaceAll(':', '');
  const triggerId = `accordion-trigger-${uid}`;
  const panelId = `accordion-panel-${uid}`;
  let panelRef;
  let stateRef = Boolean(open);
  let disabledRef = Boolean(disabled);
  let firstSlideSync = true;
  const [isOpen, setIsOpen] = createSignal(Boolean(open));

  createEffect(() => {
    stateRef = isOpen();
    disabledRef = Boolean(disabled);
  });

  createEffect(() => {
    const cleanup = accordion?.registerItem({
      id: triggerId,
      disabled: () => disabledRef,
      isOpen: () => stateRef,
      setOpen: setIsOpen,
    });
    onCleanup(() => cleanup?.());
  });

  createEffect(() => {
    if (accordion?.effect !== 'slide') return;
    setSlideRegionOpen(panelRef, isOpen(), !firstSlideSync);
    firstSlideSync = false;
  });

  function handleKeyDown(event) {
    if (accordion?.focusAdjacent(triggerId, event.key)) event.preventDefault();
  }

  const classes = ['accordion_item', isOpen() && 'is-open', disabled && 'is-disabled', className]
    .filter(Boolean)
    .join(' ');
  const slide = accordion?.effect === 'slide';

  return (
    <div {...props} class={classes}>
      <div class="accordion_heading" role="heading" aria-level={headingLevel}>
        <Button
          id={triggerId}
          variant="text"
          color="default"
          class="accordion_trigger"
          expanded={isOpen()}
          aria-controls={panelId}
          disabled={disabled}
          ripple={ripple}
          onClick={() => accordion?.toggleItem(triggerId)}
          onKeyDown={handleKeyDown}
          iconAfter={<Icon name="chevron-down" class="accordion_icon" />}
        >
          <span class="accordion_label">{title ?? label}</span>
          {extra != null ? <span class="accordion_extra">{extra}</span> : null}
        </Button>
      </div>
      <div
        ref={panelRef}
        id={panelId}
        class="accordion_panel"
        role="region"
        aria-labelledby={triggerId}
        hidden={slide ? undefined : !isOpen()}
      >
        <div class="accordion_content">{children ?? (content ? <p>{content}</p> : null)}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
