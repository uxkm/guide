import { useMemo, useRef } from 'react';
import CalendarDay from '@/components/CalendarDay.jsx';
import CalendarGrid from '@/components/CalendarGrid.jsx';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { june2024Days, partialMonthDays } from '@/data/calendar-demo';
import { formatCalendarMonthCode } from '@/utils/format-calendar-month-code';

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
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    (monthProps, _slots, monthAttrs) => formatCalendarMonthCode(monthProps, monthAttrs),
    { days, preset, selected, today, disabled, events, rangeStart, rangeEnd, weekends, partial, week, readonly },
    {},
    rootRef,
    {},
  );

  const resolvedDays = useMemo(() => {
    if (days?.length) return days;

    if (partial) {
      return partialMonthDays(partial, { today, selected });
    }

    if (preset === 'june2024' || !preset) {
      return june2024Days({ selected, today, disabled, events, rangeStart, rangeEnd });
    }

    return [];
  }, [days, partial, preset, selected, today, disabled, events, rangeStart, rangeEnd]);

  const displayDays = useMemo(() => {
    if (!weekends) return resolvedDays;
    return resolvedDays.map((cell, index) => ({
      ...cell,
      sunday: cell.sunday ?? index % 7 === 0,
      saturday: cell.saturday ?? index % 7 === 6,
    }));
  }, [resolvedDays, weekends]);

  return (
    <div ref={rootRef} className="calendar_month" style={{ display: 'contents' }}>
      <CalendarGrid week={week}>
        {displayDays.map((cell, index) => (
          <CalendarDay key={`${cell.day}-${index}`} {...cell} readonly={readonly} />
        ))}
      </CalendarGrid>
    </div>
  );
}
