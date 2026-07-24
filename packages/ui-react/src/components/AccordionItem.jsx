import { useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { AccordionContext } from '@/components/Accordion.jsx';
import { useRipple } from '@/hooks/useRipple';
import { cn } from '@/utils/cn';

export default function AccordionItem({
  ripple,
  label,
  content,
  open,
  disabled,
  extraCode,
  extra,
  children,
  className,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const accordion = useContext(AccordionContext);
  const accordionRef = useRef(accordion);
  accordionRef.current = accordion;

  const reactId = useId().replace(/:/g, '');
  const triggerId = `accordion-trigger-${reactId}`;
  const panelId = `accordion-panel-${reactId}`;

  const [isOpen, setIsOpen] = useState(() => Boolean(open));
  const isOpenRef = useRef(isOpen);
  isOpenRef.current = isOpen;

  const hasExtra = extra != null;

  // 마운트 시 1회 등록 — Context 갱신으로 재등록·열림 상태 리셋되지 않도록
  useEffect(() => {
    const api = accordionRef.current;
    if (!api) return undefined;

    api.registerItem({
      id: triggerId,
      label,
      content,
      open: Boolean(open),
      disabled: Boolean(disabled),
      hasExtra,
      extraCode,
      getIsOpen: () => isOpenRef.current,
      setIsOpen,
    });

    return () => api.unregisterItem(triggerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount/unmount only
  }, [triggerId]);

  useEffect(() => {
    const api = accordionRef.current;
    if (!api) return;
    api.updateItemMeta(triggerId, {
      label,
      content,
      disabled: Boolean(disabled),
      hasExtra,
      extraCode,
    });
  }, [triggerId, label, content, disabled, hasExtra, extraCode]);

  const itemClass = useMemo(
    () => ['accordion_item', isOpen && 'is-open', disabled && 'is-disabled'],
    [isOpen, disabled],
  );

  function toggle() {
    if (disabled || !accordionRef.current) return;
    accordionRef.current.toggleItem(triggerId);
  }

  function onKeydown(event) {
    const api = accordionRef.current;
    if (!api) return;

    const triggers = api.getTriggers();
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
      api.focusTrigger(triggers[nextIndex]);
    }
  }

  const { class: _ignoredClass, ...domRest } = rest;

  return (
    <div className={cn(itemClass, className)} {...domRest}>
      <div className="accordion_heading" role="heading" aria-level={3}>
        <Button
          id={triggerId}
          variant="text"
          className="accordion_trigger"
          expanded={isOpen}
          aria-controls={panelId}
          disabled={disabled}
          onClick={toggle}
          onKeyDown={onKeydown}
          iconAfter={<Icon name="chevron-down" className="accordion_icon" />}
          {...rippleAttrs}
        >
          <span className="accordion_label">{label}</span>
          {hasExtra ? <span className="accordion_extra">{extra}</span> : null}
        </Button>
      </div>
      <div
        id={panelId}
        className="accordion_panel"
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen || undefined}
      >
        <div className="accordion_content">
          {children ?? (content ? <p>{content}</p> : null)}
        </div>
      </div>
    </div>
  );
}
