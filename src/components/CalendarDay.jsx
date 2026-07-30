import { useMemo } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export default function CalendarDay({
  ripple,
  day,
  otherMonth,
  today,
  selected,
  disabled,
  sunday,
  saturday,
  rangeStart,
  rangeEnd,
  inRange,
  event,
  readonly: _readonly,
  className,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });

  const dayClass = useMemo(() => {
    const classes = ['calendar_day'];
    if (otherMonth) classes.push('is-other-month');
    if (today) classes.push('is-today');
    if (selected) classes.push('is-selected');
    if (disabled) classes.push('is-disabled');
    if (sunday) classes.push('is-sunday');
    if (saturday) classes.push('is-saturday');
    if (rangeStart) classes.push('is-range-start');
    if (rangeEnd) classes.push('is-range-end');
    if (inRange) classes.push('is-in-range');
    if (event) classes.push('has-event');
    return classes;
  }, [
    otherMonth,
    today,
    selected,
    disabled,
    sunday,
    saturday,
    rangeStart,
    rangeEnd,
    inRange,
    event,
  ]);

  const isPartOfRange = selected || inRange || rangeStart || rangeEnd;
  const isDisabled = Boolean(disabled || (otherMonth && !isPartOfRange));

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <button
      type="button"
      className={cn(dayClass, className)}
      disabled={isDisabled || undefined}
      aria-current={today ? 'date' : undefined}
      aria-selected={selected ? 'true' : undefined}
      {...rippleAttrs}
      {...domRest}
    >
      {day}
    </button>
  );
}
