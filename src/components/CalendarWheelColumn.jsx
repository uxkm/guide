import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useCalendarWheelColumn } from '@/hooks/useCalendarWheel';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

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
}) {
  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });

  const rootRef = useRef(null);
  const listRef = useRef(null);
  const [activeValue, setActiveValue] = useState(selected);

  useComponentDemoCode(formatCode, { ripple, label, items, selected, showSteps, prevLabel, nextLabel }, {}, rootRef, {});

  const onSelect = useCallback((value) => {
    setActiveValue(value);
  }, []);

  const { scrollToSelected, selectByIndex, moveSelection } = useCalendarWheelColumn(listRef, {
    onSelect,
  });

  useLayoutEffect(() => {
    setActiveValue(selected);
    scrollToSelected();
  }, [selected, scrollToSelected]);

  useLayoutEffect(() => {
    scrollToSelected();
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

  const selectedIndex = resolvedItems.findIndex((item) => item.selected);
  const prevDisabled = selectedIndex <= 0;
  const nextDisabled = selectedIndex < 0 || selectedIndex >= resolvedItems.length - 1;

  return (
    <div ref={rootRef} className="calendar_wheel-column" {...rippleAttrs}>
      {showSteps && prevLabel ? (
        <Button
          {...childRippleAttrs}
          variant="ghost"
          size="sm"
          iconOnly
          className="calendar_wheel-step calendar_wheel-step-prev"
          aria-label={prevLabel}
          disabled={prevDisabled}
          onClick={() => moveSelection(-1)}
          iconBefore={<Icon name="chevron-up" size="sm" />}
        />
      ) : null}
      <ul ref={listRef} className="calendar_wheel-list" role="listbox" aria-label={label} data-wheel>
        {resolvedItems.map((item, index) => (
          <li key={item.label}>
            <button
              type="button"
              className={`calendar_wheel-item${item.selected ? ' is-selected' : ''}`}
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
          {...childRippleAttrs}
          variant="ghost"
          size="sm"
          iconOnly
          className="calendar_wheel-step calendar_wheel-step-next"
          aria-label={nextLabel}
          disabled={nextDisabled}
          onClick={() => moveSelection(1)}
          iconBefore={<Icon name="chevron-down" size="sm" />}
        />
      ) : null}
    </div>
  );
}
