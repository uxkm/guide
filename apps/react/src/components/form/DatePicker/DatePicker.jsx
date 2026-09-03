/**
 * DatePicker 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useMemo, useRef, useState } from 'react';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']; // 달력 요일 헤더입니다.
const cx = (...values) => values.filter(Boolean).join(' '); // 조건 클래스를 문자열로 합칩니다.
const pad = (value) => String(value).padStart(2, '0'); // 월·일을 두 자리로 맞춥니다.
const toValue = (date) =>
  date ? `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` : ''; // Date를 YYYY-MM-DD로 변환합니다.
const parseValue = (value) =>
  /^\d{4}-\d{2}-\d{2}$/.test(value || '') ? new Date(`${value}T00:00:00`) : null; // 문자열 값을 Date로 파싱합니다.
const formatValue = (value, locale) => {
  // 로케일에 맞는 표시용 날짜 문자열을 만듭니다.
  const date = parseValue(value);
  return date
    ? new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(
        date,
      )
    : '';
};
function getCells(month) {
  // 해당 월 달력에 표시할 42칸(6주) 셀을 생성합니다.
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const start = new Date(month.getFullYear(), month.getMonth(), 1 - first.getDay());
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return { date, value: toValue(date), other: date.getMonth() !== month.getMonth() };
  });
}

export function DatePicker({
  id, // 트리거 입력에 연결할 id입니다.
  value, // 제어 컴포넌트의 YYYY-MM-DD 값입니다.
  defaultValue = '', // 비제어 컴포넌트의 초기 값입니다.
  onChange, // 날짜 값이 바뀔 때 호출되는 콜백입니다.
  placeholder = '날짜를 선택하세요', // 값이 없을 때 표시할 안내입니다.
  locale = 'ko-KR', // 표시용 날짜 포맷 로케일입니다.
  size = 'md', // 트리거 높이와 글자 크기입니다.
  fit = false, // 공통 최대 너비로 너비를 제한합니다.
  block = false, // 부모 너비에 맞게 전체 너비로 확장합니다.
  disabled = false, // 날짜 선택을 비활성으로 만듭니다.
  error = false, // 검증 오류 상태를 표시합니다.
  success = false, // 성공 상태를 표시합니다.
  clearable = true, // 선택한 날짜를 지우는 동작을 표시합니다.
  min, // 선택할 수 있는 최소 YYYY-MM-DD입니다.
  max, // 선택할 수 있는 최대 YYYY-MM-DD입니다.
  name, // 폼 제출용 hidden input의 name입니다.
  required, // 필수 입력 여부를 네이티브에 전달합니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  panelAlign = 'start', // 달력 패널의 정렬 방향입니다.
  ariaLabel = '날짜 선택', // 트리거와 패널의 접근 가능한 이름입니다.
  ...props // 나머지 속성을 트리거 입력에 전달합니다.
}) {
  // 식별자, 제어 상태, 패널 열림과 표시 월을 준비합니다.
  const generatedId = useId().replace(/:/g, '');
  const inputId = id || `date-picker-${generatedId}`;
  const panelId = `${inputId}-panel`;
  const controlled = value !== undefined; // 외부 value로 제어되는지 여부입니다.
  const [innerValue, setInnerValue] = useState(defaultValue);
  const selectedValue = controlled ? value : innerValue; // 최종 선택 값입니다.
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(() => parseValue(selectedValue) || new Date());
  const rootRef = useRef(null);
  const cells = useMemo(() => getCells(month), [month]);
  const today = toValue(new Date());

  // 선택 값이 바뀌면 달력 표시 월을 맞춥니다.
  useEffect(() => {
    const date = parseValue(selectedValue);
    if (date) setMonth(date);
  }, [selectedValue]);

  // 바깥 클릭 시 패널을 닫습니다. pointerdown은 날짜 click 전에 패널을 닫아 선택이 무시될 수 있어 click을 사용합니다.
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('click', close, true);
    return () => document.removeEventListener('click', close, true);
  }, [open]);

  // 패널이 열리면 선택일 또는 첫 가능 날짜로 포커스를 이동합니다.
  useEffect(() => {
    if (open)
      requestAnimationFrame(() =>
        rootRef.current
          ?.querySelector('.calendar_day.is-selected:not(:disabled), .calendar_day:not(:disabled)')
          ?.focus(),
      );
  }, [open]);

  const commit = (next) => {
    // 제어·비제어 상태에 맞게 값을 확정하고 콜백을 호출합니다.
    if (!controlled) setInnerValue(next);
    onChange?.(next);
  };
  const select = (next) => {
    // 날짜를 선택한 뒤 패널을 닫고 트리거로 포커스를 되돌립니다.
    commit(next);
    setOpen(false);
    requestAnimationFrame(() => rootRef.current?.querySelector('.date_picker_input')?.focus());
  };
  const moveMonth = (offset) =>
    setMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1));

  // 크기·너비·상태·열림 클래스를 조합합니다.
  const classes = cx(
    'date_picker', // 날짜 선택기 루트 필수 클래스입니다.
    size !== 'md' && `date_picker_${size}`, // sm·lg 크기 변형입니다.
    fit && 'date_picker_fit', // 제한 너비 변형입니다.
    block && 'date_picker_block', // 전체 너비 변형입니다.
    disabled && 'is-disabled', // 비활성 상태 클래스입니다.
    error && 'is-error', // 오류 상태 클래스입니다.
    success && 'is-success', // 성공 상태 클래스입니다.
    open && 'is-open', // 패널 열림 상태 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
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
      {/* 읽기 전용 트리거 입력과 지우기·달력 버튼을 묶습니다. */}
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
      {/* 달력 패널: 월 이동, 요일, 날짜 그리드, 오늘·초기화 액션입니다. */}
      <div
        id={panelId}
        className={cx('date_picker_panel', panelAlign === 'end' && 'date_picker_panel-end')}
        role="dialog"
        aria-modal="false"
        aria-label={ariaLabel}
        aria-hidden={!open}
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
