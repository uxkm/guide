import { useEffect, useId, useMemo, useReducer, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useAccordion } from '@/components/context/AccordionContext';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';

function useMutableRef(initial) {
  const stateRef = useRef(initial);
  const [, bump] = useReducer((count) => count + 1, 0);

  return useMemo(
    () => ({
      get value() {
        return stateRef.current;
      },
      set value(next) {
        stateRef.current = next;
        bump();
      },
    }),
    [],
  );
}

export default function AccordionItem({
  ripple,
  label,
  content,
  open,
  disabled,
  extraCode,
  extra,
  children,
}) {
  const accordion = useAccordion();
  const { rippleAttrs } = useRipple({ ripple });
  const triggerId = useId().replace(/:/g, '');
  const panelId = useId().replace(/:/g, '');
  const isOpen = useMutableRef(open);
  const registerItemRef = useRef(accordion?.registerItem);
  const unregisterItemRef = useRef(accordion?.unregisterItem);
  const isOpenRef = useRef(isOpen);
  registerItemRef.current = accordion?.registerItem;
  unregisterItemRef.current = accordion?.unregisterItem;
  isOpenRef.current = isOpen;

  const itemClass = cn(
    'accordion_item',
    isOpen.value && 'is-open',
    disabled && 'is-disabled',
  );

  function toggle() {
    if (disabled || !accordion) return;
    accordion.toggleItem(triggerId, isOpen);
  }

  function onKeyDown(event) {
    if (!accordion) return;

    const triggers = accordion.getTriggers();
    const index = triggers.indexOf(triggerId);
    if (index === -1) return;

    let nextIndex = null;

    if (event.key === 'ArrowDown') {
      nextIndex = (index + 1) % triggers.length;
    } else if (event.key === 'ArrowUp') {
      nextIndex = (index - 1 + triggers.length) % triggers.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = triggers.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      accordion.focusTrigger(triggers[nextIndex]);
    }
  }

  useEffect(() => {
    const registerItem = registerItemRef.current;
    if (!registerItem) return undefined;

    registerItem({
      id: triggerId,
      label,
      content,
      open,
      disabled,
      hasExtra: Boolean(extra),
      extraCode,
      isOpen: isOpenRef.current,
    });

    return () => unregisterItemRef.current?.(triggerId);
  }, [triggerId, label, content, open, disabled, extra, extraCode]);

  return (
    <div className={itemClass}>
      <h3 className="accordion_heading">
        <Button
          id={triggerId}
          variant="text"
          className="accordion_trigger"
          expanded={isOpen.value}
          ariaControls={panelId}
          disabled={disabled}
          onClick={toggle}
          onKeyDown={onKeyDown}
          {...rippleAttrs}
          iconAfter={<Icon name="chevron-down" className="accordion_icon" />}
        >
          <span className="accordion_label">{label}</span>
          {extra ? <span className="accordion_extra">{extra}</span> : null}
        </Button>
      </h3>
      <div
        id={panelId}
        className="accordion_panel"
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen.value || undefined}
      >
        <div className="accordion_content">
          {children ?? (content ? <p>{content}</p> : null)}
        </div>
      </div>
    </div>
  );
}
