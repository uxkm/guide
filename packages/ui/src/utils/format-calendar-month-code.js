import { formatComponentCode } from '@/utils/format-component-code';

/**
 * CalendarMonth 데모 코드 — 개별 CalendarDay 나열 대신 props 요약
 */
export function formatCalendarMonthCode(props, attrs = {}) {
  return formatComponentCode('CalendarMonth', props, {}, attrs, {
    booleanProps: new Set(['weekends', 'week', 'readonly']),
    skipProps: ['preset'],
    selfClosing: true,
    arrayPropPlaceholders: {
      days: 'days',
      events: 'EVENT_DAYS',
      disabled: 'disabledDays',
    },
  });
}
