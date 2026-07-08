import { useMemo } from 'react';
import { useRipple } from '@/hooks/useRipple';
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
  readonly,
  className,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });

  const dayClass = useMemo(
    () =>
      cn(
        'calendar_day',
        otherMonth && 'is-other-month',
        today && 'is-today',
        selected && 'is-selected',
        disabled && 'is-disabled',
        sunday && 'is-sunday',
        saturday && 'is-saturday',
        rangeStart && 'is-range-start',
        rangeEnd && 'is-range-end',
        inRange && 'is-in-range',
        event && 'has-event',
        className,
      ),
    [
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
      className,
    ],
  );

  const isPartOfRange = selected || inRange || rangeStart || rangeEnd;
  const isDisabled = disabled || (otherMonth && !isPartOfRange);

  return (
    <button
      type="button"
      className={dayClass}
      disabled={isDisabled || undefined}
      aria-current={today ? 'date' : undefined}
      aria-selected={selected ? 'true' : undefined}
      {...rippleAttrs}
      {...rest}
    >
      {day}
    </button>
  );
}
