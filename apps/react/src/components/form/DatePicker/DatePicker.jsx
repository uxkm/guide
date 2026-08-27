/**
 * DatePicker 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useMemo, useRef, useState } from 'react';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
const cx = (...values) => values.filter(Boolean).join(' ');
const pad = (value) => String(value).padStart(2, '0');
const toValue = (date) =>
  date ? `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` : '';
const parseValue = (value) =>
  /^\d{4}-\d{2}-\d{2}$/.test(value || '') ? new Date(`${value}T00:00:00`) : null;
const formatValue = (value, locale) => {
  const date = parseValue(value);
  return date
    ? new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(
        date,
      )
    : '';
};
function getCells(month) {
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const start = new Date(month.getFullYear(), month.getMonth(), 1 - first.getDay());
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return { date, value: toValue(date), other: date.getMonth() !== month.getMonth() };
  });
}

export function DatePicker({
  id,
  value,
  defaultValue = '',
  onChange,
  placeholder = '날짜를 선택하세요',
  locale = 'ko-KR',
  size = 'md',
  fit = false,
  block = false,
  disabled = false,
  error = false,
  success = false,
  clearable = true,
  min,
  max,
  name,
  required,
  className = '',
  panelAlign = 'start',
  ariaLabel = '날짜 선택',
  ...props
}) {
  const generatedId = useId().replace(/:/g, '');
  const inputId = id || `date-picker-${generatedId}`;
  const panelId = `${inputId}-panel`;
  const controlled = value !== undefined;
  const [innerValue, setInnerValue] = useState(defaultValue);
  const selectedValue = controlled ? value : innerValue;
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(() => parseValue(selectedValue) || new Date());
  const rootRef = useRef(null);
  const cells = useMemo(() => getCells(month), [month]);
  const today = toValue(new Date());
  useEffect(() => {
    const date = parseValue(selectedValue);
    if (date) setMonth(date);
  }, [selectedValue]);
  useEffect(() => {
    const close = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);
  useEffect(() => {
    if (open)
      requestAnimationFrame(() =>
        rootRef.current
          ?.querySelector('.calendar_day.is-selected:not(:disabled), .calendar_day:not(:disabled)')
          ?.focus(),
      );
  }, [open]);
  const commit = (next) => {
    if (!controlled) setInnerValue(next);
    onChange?.(next);
  };
  const select = (next) => {
    commit(next);
    setOpen(false);
    requestAnimationFrame(() => rootRef.current?.querySelector('.date_picker_input')?.focus());
  };
  const moveMonth = (offset) =>
    setMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1));
  const classes = cx(
    'date_picker',
    size !== 'md' && `date_picker_${size}`,
    fit && 'date_picker_fit',
    block && 'date_picker_block',
    disabled && 'is-disabled',
    error && 'is-error',
    success && 'is-success',
    open && 'is-open',
    className,
  );
  return (
    <div
      ref={rootRef}
      className={classes}
      data-component="DatePicker"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setOpen(false);
      }}
    >
      <div className="date_picker_trigger">
        <input
          {...props}
          id={inputId}
          className="date_picker_input"
          role="combobox"
          value={formatValue(selectedValue, locale)}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          required={required}
          aria-label={props['aria-label'] || ariaLabel}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={panelId}
          aria-invalid={error || undefined}
          onClick={() => !disabled && setOpen(true)}
        />
        {name ? <input type="hidden" name={name} value={selectedValue} /> : null}
        {clearable && selectedValue && !disabled ? (
          <button
            className="date_picker_clear"
            type="button"
            aria-label="날짜 지우기"
            onClick={() => commit('')}
          >
            <svg
              className="icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        ) : null}
        <button
          className="date_picker_btn"
          type="button"
          disabled={disabled}
          aria-label="달력 열기"
          aria-controls={panelId}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <svg
            className="icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 10h18" />
          </svg>
        </button>
      </div>
      <div
        id={panelId}
        className={cx('date_picker_panel', panelAlign === 'end' && 'date_picker_panel-end')}
        role="dialog"
        aria-modal="false"
        aria-label={ariaLabel}
        hidden={!open}
      >
        <div className="calendar calendar_borderless">
          <div className="calendar_header">
            <button
              type="button"
              className="btn btn_ghost btn_icon-only btn_sm"
              aria-label="이전 달"
              onClick={() => moveMonth(-1)}
            >
              ‹
            </button>
            <span className="calendar_title" aria-live="polite">
              {month.getFullYear()}년 {month.getMonth() + 1}월
            </span>
            <button
              type="button"
              className="btn btn_ghost btn_icon-only btn_sm"
              aria-label="다음 달"
              onClick={() => moveMonth(1)}
            >
              ›
            </button>
          </div>
          <div className="calendar_weekdays" aria-hidden="true">
            {WEEKDAYS.map((day) => (
              <span key={day} className="calendar_weekday">
                {day}
              </span>
            ))}
          </div>
          <div className="calendar_grid">
            {cells.map((cell) => {
              const unavailable = (min && cell.value < min) || (max && cell.value > max);
              return (
                <button
                  key={cell.value}
                  type="button"
                  className={cx(
                    'calendar_day',
                    cell.other && 'is-other-month',
                    cell.value === today && 'is-today',
                    cell.value === selectedValue && 'is-selected',
                  )}
                  disabled={unavailable}
                  aria-current={cell.value === today ? 'date' : undefined}
                  aria-pressed={cell.value === selectedValue || undefined}
                  aria-label={formatValue(cell.value, locale)}
                  onClick={() => select(cell.value)}
                >
                  {cell.date.getDate()}
                </button>
              );
            })}
          </div>
          <div className="calendar_footer">
            <button
              type="button"
              className="btn btn_text color_primary btn_sm"
              onClick={() => select(today)}
            >
              오늘
            </button>
            {clearable ? (
              <div className="calendar_footer-actions">
                <button type="button" className="btn btn_ghost btn_sm" onClick={() => commit('')}>
                  초기화
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
