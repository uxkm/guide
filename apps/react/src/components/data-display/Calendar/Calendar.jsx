import { useEffect, useMemo, useRef, useState } from 'react';

const cx = (...values) => values.filter(Boolean).join(' ');
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

function monthDays({ partial, selected = 15, today = 12, events = [], rangeStart, rangeEnd } = {}) {
  const cells = [];
  if (!partial) [26, 27, 28, 29, 30, 31].forEach((day) => cells.push({ day, otherMonth: true }));
  const count = partial || 30;
  for (let day = 1; day <= count; day += 1) {
    cells.push({ day, today: day === today, selected: day === selected || day === rangeStart || day === rangeEnd, rangeStart: day === rangeStart, rangeEnd: day === rangeEnd, inRange: rangeStart != null && rangeEnd != null && day > rangeStart && day < rangeEnd, event: events.includes(day) });
  }
  if (!partial) [1, 2, 3, 4, 5, 6].forEach((day) => cells.push({ day, otherMonth: true }));
  return cells;
}

export function Calendar({ title, ariaLabel, header, weekdays, footer, children, noHeader = false, minimal = false, compact = false, borderless = false, shadow = false, ghost = false, week = false, readonly = false, disabled = false, weekends = false, agenda = false, wheel = false, size = '', className = '', role = 'application', ...props }) {
  const classes = cx('calendar', noHeader && 'calendar_no-header', minimal && 'calendar_minimal', compact && 'calendar_compact', borderless && 'calendar_borderless', shadow && 'calendar_shadow', ghost && 'calendar_ghost', week && 'calendar_week', readonly && 'calendar_readonly', disabled && 'is-disabled', weekends && 'calendar_weekends', agenda && 'calendar_agenda', wheel && 'calendar_wheel', size === 'sm' && 'calendar_sm', size === 'lg' && 'calendar_lg', className);
  const resolvedRole = role === 'feed' ? 'region' : role;
  return <div className={classes} data-component="Calendar" role={resolvedRole} aria-label={ariaLabel} aria-disabled={disabled || undefined} {...props}>{header ?? (title && !noHeader && !minimal ? <CalendarHeader title={title} showNav={false} /> : null)}{weekdays}{children}{footer}</div>;
}

export function CalendarHeader({ title, prevLabel = '이전 달', nextLabel = '다음 달', showNav = true, showPrev, showNext, children, className = '', ...props }) {
  const prev = showPrev ?? showNav;
  const next = showNext ?? showNav;
  return <div className={cx('calendar_header', className)} {...props}>{prev ? <button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={prevLabel}>‹</button> : null}<span className="calendar_title">{title}</span>{next ? <button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={nextLabel}>›</button> : null}{children}</div>;
}

export function CalendarNav({ label, prevLabel = '이전 주', nextLabel = '다음 주', className = '' }) {
  return <div className={cx('calendar_nav', className)}><button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={prevLabel}>‹</button><span className="calendar_nav-label">{label}</span><button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={nextLabel}>›</button></div>;
}

export function CalendarWeekdays({ labels = WEEKDAYS, className = '' }) {
  return <div className={cx('calendar_weekdays', className)} aria-hidden="true">{labels.map((label) => <span key={label} className="calendar_weekday">{label}</span>)}</div>;
}

export function CalendarDay({ day, otherMonth, today, selected, disabled, sunday, saturday, rangeStart, rangeEnd, inRange, event, readonly, className = '', ...props }) {
  const classes = cx('calendar_day', otherMonth && 'is-other-month', today && 'is-today', selected && 'is-selected', disabled && 'is-disabled', sunday && 'is-sunday', saturday && 'is-saturday', rangeStart && 'is-range-start', rangeEnd && 'is-range-end', inRange && 'is-in-range', event && 'has-event', className);
  return <button type="button" className={classes} disabled={disabled || (otherMonth && !(selected || inRange)) || undefined} aria-current={today ? 'date' : undefined} aria-pressed={selected || undefined} tabIndex={readonly ? -1 : undefined} {...props}>{day}</button>;
}

export function CalendarGrid({ children, week = false, className = '' }) { return <div className={cx('calendar_grid', week && 'calendar_grid-week', className)}>{children}</div>; }

export function CalendarMonth({ days, selected = 15, today = 12, disabled = [], events = [], rangeStart, rangeEnd, weekends = false, partial, week = false, readonly = false }) {
  const resolved = useMemo(() => days?.length ? days : monthDays({ partial, selected, today, events, rangeStart, rangeEnd }), [days, partial, selected, today, events, rangeStart, rangeEnd]);
  return <CalendarGrid week={week}>{resolved.map((cell, index) => <CalendarDay key={`${cell.day}-${index}`} {...cell} disabled={cell.disabled || disabled.includes?.(cell.day)} sunday={cell.sunday ?? (weekends && index % 7 === 0)} saturday={cell.saturday ?? (weekends && index % 7 === 6)} readonly={readonly} />)}</CalendarGrid>;
}

export function CalendarFooter({ children, className = '' }) {
  return <div className={cx('calendar_footer', className)}><button type="button" className="btn btn_text color_primary btn_sm">오늘</button><div className="calendar_footer-actions">{children ?? <><button type="button" className="btn btn_ghost btn_sm">초기화</button><button type="button" className="btn btn_filled color_primary btn_sm">확인</button></>}</div></div>;
}

export function CalendarGroup({ children, className = '' }) { return <div className={cx('calendar_group', className)}>{children}</div>; }

export function CalendarWheel({ title, shadow, borderless, footer = false, toolbar = true, cancelLabel, confirmLabel, ariaLabel, toolbarContent, footerContent, children }) {
  const showToolbar = toolbar && (toolbarContent || title || cancelLabel || confirmLabel);
  return <Calendar wheel shadow={shadow} borderless={borderless} role="group" ariaLabel={ariaLabel}>{showToolbar ? <div className="calendar_wheel-toolbar">{toolbarContent ?? <>{cancelLabel ? <button className="btn btn_text btn_sm" type="button">{cancelLabel}</button> : null}<span className="calendar_wheel-title">{title}</span>{confirmLabel ? <button className="btn btn_text color_primary btn_sm" type="button">{confirmLabel}</button> : null}</>}</div> : null}<div className="calendar_wheel-body"><div className="calendar_wheel-highlight" aria-hidden="true" /><div className="calendar_wheel-columns">{children}</div><div className="calendar_wheel-fade" aria-hidden="true" /></div>{footer || footerContent ? <div className="calendar_wheel-footer">{footerContent}</div> : null}</Calendar>;
}

export function CalendarWheelColumn({ label, items = [], selected, showSteps = true, prevLabel = '이전', nextLabel = '다음' }) {
  const [active, setActive] = useState(selected);
  const listRef = useRef(null);
  const index = Math.max(0, items.findIndex((item) => String(item) === String(active)));
  const move = (offset) => setActive(items[Math.max(0, Math.min(items.length - 1, index + offset))]);

  useEffect(() => { setActive(selected); }, [selected]);
  useEffect(() => {
    const list = listRef.current;
    const selectedItem = list?.children[index];
    if (!list || !selectedItem) return;
    const frame = requestAnimationFrame(() => {
      const rowHeight = selectedItem.getBoundingClientRect().height || selectedItem.clientHeight;
      list.scrollTop = index * rowHeight;
    });
    return () => cancelAnimationFrame(frame);
  }, [index, items]);

  return <div className="calendar_wheel-column">{showSteps ? <button type="button" className="btn btn_ghost btn_icon-only btn_sm calendar_wheel-step calendar_wheel-step-prev" aria-label={prevLabel} disabled={index <= 0} onClick={() => move(-1)}>⌃</button> : null}<ul ref={listRef} className="calendar_wheel-list" role="listbox" aria-label={label}>{items.map((item) => <li key={String(item)} role="presentation"><button type="button" role="option" className={cx('calendar_wheel-item', String(item) === String(active) && 'is-selected')} aria-selected={String(item) === String(active) || undefined} onClick={() => setActive(item)}>{String(item)}</button></li>)}</ul>{showSteps ? <button type="button" className="btn btn_ghost btn_icon-only btn_sm calendar_wheel-step calendar_wheel-step-next" aria-label={nextLabel} disabled={index >= items.length - 1} onClick={() => move(1)}>⌄</button> : null}</div>;
}

export default Calendar;
