import { useMemo, useRef } from 'react';
import CalendarDay from '@/components/CalendarDay.jsx';
import CalendarGrid from '@/components/CalendarGrid.jsx';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { june2024Days, partialMonthDays } from '@/data/calendar-demo';
import { formatCalendarMonthCode } from '@/utils/format-calendar-month-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export default function CalendarMonth({
  days,
  preset = '',
  selected,
  today,
  disabled,
  events,
  rangeStart,
  rangeEnd,
  weekends,
  partial,
  week,
  readonly,
  className,
  ...rest
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    (monthProps, _slots, monthAttrs) => formatCalendarMonthCode(monthProps, monthAttrs),
    {
      days,
      preset,
      selected,
      today,
      disabled,
      events,
      rangeStart,
      rangeEnd,
      weekends,
      partial,
      week,
      readonly,
    },
    {},
    rootRef,
    { className, ...rest },
  );

  const resolvedDays = useMemo(() => {
    if (days?.length) return days;

    if (partial) {
      return partialMonthDays(partial, {
        today,
        selected,
      });
    }

    if (preset === 'june2024' || !preset) {
      return june2024Days({
        selected,
        today,
        disabled,
        events,
        rangeStart,
        rangeEnd,
      });
    }

    return [];
  }, [
    days,
    partial,
    preset,
    selected,
    today,
    disabled,
    events,
    rangeStart,
    rangeEnd,
  ]);

  const displayDays = useMemo(() => {
    if (!weekends) return resolvedDays;
    return resolvedDays.map((cell, index) => ({
      ...cell,
      sunday: cell.sunday ?? index % 7 === 0,
      saturday: cell.saturday ?? index % 7 === 6,
    }));
  }, [resolvedDays, weekends]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div
      ref={rootRef}
      className={cn('calendar_month', className)}
      style={{ display: 'contents' }}
      {...domRest}
    >
      <CalendarGrid week={week}>
        {displayDays.map((cell, index) => (
          <CalendarDay key={`${cell.day}-${index}`} {...cell} readonly={readonly} />
        ))}
      </CalendarGrid>
    </div>
  );
}
