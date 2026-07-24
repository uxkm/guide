/**
 * DatePicker 스토리용 캘린더 데모 마크업 (Calendar React 마이그레이션 전 임시)
 */
import React from 'react';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import { WEEKDAYS, june2024Days, juneDualDays, julyDualDays } from '@uxkm/ui/data/calendar-demo.js';
import { cn } from '../utils/cn.js';

function DemoDay({
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
}) {
  const isPartOfRange = selected || inRange || rangeStart || rangeEnd;
  const isDisabled = disabled || (otherMonth && !isPartOfRange);

  return (
    <button
      type="button"
      className={cn(
        'calendar_day',
        otherMonth && 'is-other-month',
        today && 'is-today',
        selected && 'is-selected',
        isDisabled && 'is-disabled',
        sunday && 'is-sunday',
        saturday && 'is-saturday',
        rangeStart && 'is-range-start',
        rangeEnd && 'is-range-end',
        inRange && 'is-in-range',
        event && 'has-event',
      )}
      disabled={isDisabled || undefined}
      aria-current={today ? 'date' : undefined}
      aria-selected={selected ? 'true' : undefined}
    >
      {day}
    </button>
  );
}

function DemoWeekdays() {
  return (
    <div className="calendar_weekdays" aria-hidden="true">
      {WEEKDAYS.map((label) => (
        <span key={label} className="calendar_weekday">
          {label}
        </span>
      ))}
    </div>
  );
}

function DemoMonth({ days, selected, today, weekends }) {
  const resolved = (days ?? june2024Days({ selected, today })).map((cell, index) =>
    weekends
      ? {
          ...cell,
          sunday: cell.sunday ?? index % 7 === 0,
          saturday: cell.saturday ?? index % 7 === 6,
        }
      : cell,
  );

  return (
    <div className="calendar_month" style={{ display: 'contents' }}>
      <div className="calendar_grid" role="grid">
        {resolved.map((cell, index) => (
          <DemoDay key={`${cell.day}-${index}`} {...cell} />
        ))}
      </div>
    </div>
  );
}

function DemoHeader({ title, showPrev = true, showNext = true }) {
  return (
    <div className="calendar_header">
      {showPrev ? (
        <Button
          variant="ghost"
          size="sm"
          iconOnly
          ariaLabel="이전 달"
          iconBefore={<Icon name="chevron-left" size="sm" />}
        />
      ) : null}
      <span className="calendar_title">{title}</span>
      {showNext ? (
        <Button
          variant="ghost"
          size="sm"
          iconOnly
          ariaLabel="다음 달"
          iconBefore={<Icon name="chevron-right" size="sm" />}
        />
      ) : null}
    </div>
  );
}

function DemoFooter() {
  return (
    <div className="calendar_footer">
      <Button variant="text" color="primary" size="sm" label="오늘" />
      <div className="calendar_footer-actions">
        <Button variant="ghost" size="sm" label="초기화" />
        <Button variant="filled" color="primary" size="sm" label="확인" />
      </div>
    </div>
  );
}

export function DemoCalendar({
  ariaLabel,
  title,
  noHeader,
  compact,
  borderless,
  weekends,
  selected = 18,
  today = 15,
  days,
  showHeader,
  showFooter,
  showPrev,
  showNext,
}) {
  const showDefaultHeader = showHeader ?? (!noHeader && Boolean(title));

  return (
    <div
      className={cn(
        'calendar',
        noHeader && 'calendar_no-header',
        compact && 'calendar_compact',
        borderless && 'calendar_borderless',
        weekends && 'calendar_weekends',
      )}
      role="application"
      aria-label={ariaLabel}
    >
      {showDefaultHeader ? (
        <DemoHeader title={title} showPrev={showPrev} showNext={showNext} />
      ) : null}
      <DemoWeekdays />
      <DemoMonth days={days} selected={selected} today={today} weekends={weekends} />
      {showFooter ? <DemoFooter /> : null}
    </div>
  );
}

export function DemoCalendarGroup({ children }) {
  return <div className="calendar_group">{children}</div>;
}

export function juneRangePanel() {
  return {
    juneDays: juneDualDays(),
    julyDays: julyDualDays(),
  };
}
