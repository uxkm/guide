import { useEffect, useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useCalendarWheelColumn } from '@/hooks/useCalendarWheel';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('CalendarWheelColumn', {
  booleanProps: new Set(['showSteps']),
  selfClosing: false,
});

export default function CalendarWheelColumn({
  ripple,
  label,
  items = [],
  selected,
  showSteps = true,
  prevLabel,
  nextLabel,
  className,
  ...rest
}) {
  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const [activeValue, setActiveValue] = useState(selected);

  useComponentDemoCode(
    formatCode,
    { ripple, label, items, selected, showSteps, prevLabel, nextLabel },
    createDemoSlots({}),
    rootRef,
    { className, ...rest },
  );

  const { scrollToSelected, selectByIndex, moveSelection } = useCalendarWheelColumn(listRef, {
    onSelect(nextLabel) {
      setActiveValue(nextLabel);
    },
  });

  useEffect(() => {
    setActiveValue(selected);
    const frame = requestAnimationFrame(() => scrollToSelected());
    return () => cancelAnimationFrame(frame);
  }, [selected, scrollToSelected]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => scrollToSelected());
    return () => cancelAnimationFrame(frame);
  }, [items, scrollToSelected]);

  const resolvedItems = useMemo(
    () =>
      items.map((item) => {
        if (typeof item === 'string' || typeof item === 'number') {
          const itemLabel = String(item);
          return { label: itemLabel, selected: itemLabel === String(activeValue) };
        }
        return {
          label: item.label,
          selected: item.selected ?? item.label === String(activeValue),
        };
      }),
    [items, activeValue],
  );

  const selectedIndex = useMemo(
    () => resolvedItems.findIndex((item) => item.selected),
    [resolvedItems],
  );

  const prevDisabled = selectedIndex <= 0;
  const nextDisabled = selectedIndex < 0 || selectedIndex >= resolvedItems.length - 1;

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div
      ref={rootRef}
      className={cn('calendar_wheel-column', className)}
      {...rippleAttrs}
      {...domRest}
    >
      {showSteps && prevLabel ? (
        <Button
          variant="ghost"
          size="sm"
          iconOnly
          className="calendar_wheel-step calendar_wheel-step-prev"
          ariaLabel={prevLabel}
          disabled={prevDisabled}
          iconBefore={<Icon name="chevron-up" size="sm" />}
          onClick={() => moveSelection(-1)}
          {...childRippleAttrs}
        />
      ) : null}
      <ul
        ref={listRef}
        className="calendar_wheel-list"
        role="listbox"
        aria-label={label}
        data-wheel=""
      >
        {resolvedItems.map((item, index) => (
          <li key={item.label}>
            <button
              type="button"
              className={cn('calendar_wheel-item', item.selected && 'is-selected')}
              aria-selected={item.selected ? 'true' : undefined}
              onClick={() => selectByIndex(index)}
              {...childRippleAttrs}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      {showSteps && nextLabel ? (
        <Button
          variant="ghost"
          size="sm"
          iconOnly
          className="calendar_wheel-step calendar_wheel-step-next"
          ariaLabel={nextLabel}
          disabled={nextDisabled}
          iconBefore={<Icon name="chevron-down" size="sm" />}
          onClick={() => moveSelection(1)}
          {...childRippleAttrs}
        />
      ) : null}
    </div>
  );
}
