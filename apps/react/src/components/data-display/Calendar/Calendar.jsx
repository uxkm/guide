/**
 * Calendar 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { useEffect, useMemo, useRef, useState } from 'react';

const cx = (...values) => values.filter(Boolean).join(' ');
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

// 월간 그리드에 이전·현재·다음 달 셀과 선택·범위·이벤트 상태를 생성합니다.
function monthDays({
  partial, // 현재 달만 일부 일로 채울 때 일 수입니다.
  selected = 15, // 선택된 일입니다.
  today = 12, // 오늘로 표시할 일입니다.
  events = [], // 이벤트가 있는 일 목록입니다.
  rangeStart, // 범위 선택 시작일입니다.
  rangeEnd, // 범위 선택 종료일입니다.
} = {}) {
  const cells = [];
  if (!partial) [26, 27, 28, 29, 30, 31].forEach((day) => cells.push({ day, otherMonth: true }));
  const count = partial || 30;
  for (let day = 1; day <= count; day += 1) {
    cells.push({
      day,
      today: day === today,
      selected: day === selected || day === rangeStart || day === rangeEnd,
      rangeStart: day === rangeStart,
      rangeEnd: day === rangeEnd,
      inRange: rangeStart != null && rangeEnd != null && day > rangeStart && day < rangeEnd,
      event: events.includes(day),
    });
  }
  if (!partial) [1, 2, 3, 4, 5, 6].forEach((day) => cells.push({ day, otherMonth: true }));
  return cells;
}

// 월·주·휠·일정 레이아웃과 스킨·상태를 Calendar 루트에 적용합니다.
export function Calendar({
  title, // 헤더 제목입니다.
  ariaLabel, // 캘린더 접근성 이름입니다.
  header, // 커스텀 헤더 콘텐츠입니다.
  weekdays, // 요일 행 콘텐츠입니다.
  footer, // 푸터 콘텐츠입니다.
  children, // 날짜 그리드 콘텐츠입니다.
  noHeader = false, // 헤더 숨김 여부입니다.
  minimal = false, // 미니멀 스킨입니다.
  compact = false, // 조밀한 캘린더입니다.
  borderless = false, // 테두리 없는 스킨입니다.
  shadow = false, // 그림자 스킨입니다.
  ghost = false, // 고스트 스킨입니다.
  week = false, // 주 단위 보기입니다.
  readonly = false, // 읽기 전용입니다.
  disabled = false, // 비활성 상태입니다.
  weekends = false, // 주말 강조입니다.
  agenda = false, // 아젠다 레이아웃입니다.
  wheel = false, // 휠 선택 모드입니다.
  size = '', // 크기 변형 클래스입니다.
  className = '', // 추가 클래스입니다.
  role = 'application', // 루트 role입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const classes = cx(
    'calendar',
    noHeader && 'calendar_no-header',
    minimal && 'calendar_minimal',
    compact && 'calendar_compact',
    borderless && 'calendar_borderless',
    shadow && 'calendar_shadow',
    ghost && 'calendar_ghost',
    week && 'calendar_week',
    readonly && 'calendar_readonly',
    disabled && 'is-disabled',
    weekends && 'calendar_weekends',
    agenda && 'calendar_agenda',
    wheel && 'calendar_wheel',
    size === 'sm' && 'calendar_sm',
    size === 'lg' && 'calendar_lg',
    className,
  );
  const resolvedRole = role === 'feed' ? 'region' : role;
  return (
    <div
      className={classes}
      data-component="Calendar"
      role={resolvedRole}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      {...props}
    >
      {header ??
        (title && !noHeader && !minimal ? <CalendarHeader title={title} showNav={false} /> : null)}
      {weekdays}
      {children}
      {footer}
    </div>
  );
}

export function CalendarHeader({
  title, // 헤더 제목입니다.
  prevLabel = '이전 달', // 이전 이동 버튼의 접근성 이름입니다.
  nextLabel = '다음 달', // 다음 이동 버튼의 접근성 이름입니다.
  showNav = true, // 이전·다음 네비게이션 표시 여부입니다.
  showPrev, // 이전 버튼 표시 여부입니다.
  showNext, // 다음 버튼 표시 여부입니다.
  children, // 제목 옆 추가 헤더 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  const prev = showPrev ?? showNav;
  const next = showNext ?? showNav;
  return (
    <div className={cx('calendar_header', className)} {...props}>
      {prev ? (
        <button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={prevLabel}>
          ‹
        </button>
      ) : null}
      <span className="calendar_title">{title}</span>
      {next ? (
        <button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={nextLabel}>
          ›
        </button>
      ) : null}
      {children}
    </div>
  );
}

export function CalendarNav({
  label, // 네비게이션 가운데 레이블입니다.
  prevLabel = '이전 주', // 이전 버튼의 접근성 이름입니다.
  nextLabel = '다음 주', // 다음 버튼의 접근성 이름입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
}) {
  return (
    <div className={cx('calendar_nav', className)}>
      <button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={prevLabel}>
        ‹
      </button>
      <span className="calendar_nav-label">{label}</span>
      <button type="button" className="btn btn_ghost btn_icon-only btn_sm" aria-label={nextLabel}>
        ›
      </button>
    </div>
  );
}

export function CalendarWeekdays({
  labels = WEEKDAYS, // 요일 레이블 배열입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
}) {
  return (
    <div className={cx('calendar_weekdays', className)} aria-hidden="true">
      {labels.map((label) => (
        <span key={label} className="calendar_weekday">
          {label}
        </span>
      ))}
    </div>
  );
}

export function CalendarDay({
  day, // 날짜 숫자입니다.
  otherMonth, // 이전·다음 달 날짜 여부입니다.
  today, // 오늘 날짜 여부입니다.
  selected, // 선택됨 여부입니다.
  disabled, // 비활성 여부입니다.
  sunday, // 일요일 스타일 여부입니다.
  saturday, // 토요일 스타일 여부입니다.
  rangeStart, // 범위 선택 시작일 여부입니다.
  rangeEnd, // 범위 선택 종료일 여부입니다.
  inRange, // 범위 안 날짜 여부입니다.
  event, // 이벤트 표시 여부입니다.
  readonly, // 읽기 전용으로 포커스를 막을지 여부입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 날짜 상태를 is-* 클래스와 현재·선택·비활성 접근성 속성에 함께 연결합니다.
  const classes = cx(
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
  );
  return (
    <button
      type="button"
      className={classes}
      disabled={disabled || (otherMonth && !(selected || inRange)) || undefined}
      aria-current={today ? 'date' : undefined}
      aria-pressed={selected || undefined}
      tabIndex={readonly ? -1 : undefined}
      {...props}
    >
      {day}
    </button>
  );
}

export function CalendarGrid({
  children, // 날짜 그리드 콘텐츠입니다.
  week = false, // 주 단위 보기입니다.
  className = '', // 추가 클래스입니다.
}) {
  return (
    <div className={cx('calendar_grid', week && 'calendar_grid-week', className)}>{children}</div>
  );
}

export function CalendarMonth({
  days, // 직접 구성한 날짜 셀 배열입니다.
  selected = 15, // 선택된 일자입니다.
  today = 12, // 오늘로 표시할 일자입니다.
  disabled = [], // 비활성 일자 배열입니다.
  events = [], // 이벤트 표시 일자 배열입니다.
  rangeStart, // 범위 시작 일자입니다.
  rangeEnd, // 범위 종료 일자입니다.
  weekends = false, // 주말 강조 여부입니다.
  partial, // 부분 월(일자 수) 모드입니다.
  week = false, // 주간 그리드로 렌더할지 여부입니다.
  readonly = false, // 읽기 전용 여부입니다.
}) {
  // 외부 days가 없으면 상태 prop으로 셀을 만들고 동일한 CalendarDay API로 반복합니다.
  const resolved = useMemo(
    () =>
      days?.length ? days : monthDays({ partial, selected, today, events, rangeStart, rangeEnd }),
    [days, partial, selected, today, events, rangeStart, rangeEnd],
  );
  return (
    <CalendarGrid week={week}>
      {resolved.map((cell, index) => (
        <CalendarDay
          key={`${cell.day}-${index}`}
          {...cell}
          disabled={cell.disabled || disabled.includes?.(cell.day)}
          sunday={cell.sunday ?? (weekends && index % 7 === 0)}
          saturday={cell.saturday ?? (weekends && index % 7 === 6)}
          readonly={readonly}
        />
      ))}
    </CalendarGrid>
  );
}

export function CalendarFooter({
  children, // 기본 액션 대신 사용할 푸터 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
}) {
  return (
    <div className={cx('calendar_footer', className)}>
      <button type="button" className="btn btn_text color_primary btn_sm">
        오늘
      </button>
      <div className="calendar_footer-actions">
        {children ?? (
          <>
            <button type="button" className="btn btn_ghost btn_sm">
              초기화
            </button>
            <button type="button" className="btn btn_filled color_primary btn_sm">
              확인
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export function CalendarGroup({
  children, // 그룹에 배치할 달력들입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
}) {
  return <div className={cx('calendar_group', className)}>{children}</div>;
}

export function CalendarWheel({
  title, // 휠 툴바 제목입니다.
  shadow, // 그림자 스킨 여부입니다.
  borderless, // 테두리 없는 스킨 여부입니다.
  footer = false, // 휠 푸터 영역 표시 여부입니다.
  toolbar = true, // 툴바 표시 여부입니다.
  cancelLabel, // 취소 버튼 레이블입니다.
  confirmLabel, // 확인 버튼 레이블입니다.
  ariaLabel, // 휠 달력의 접근 가능한 이름입니다.
  toolbarContent, // 기본 툴바 대신 사용할 콘텐츠입니다.
  footerContent, // 휠 푸터에 넣을 콘텐츠입니다.
  children, // 휠 컬럼들입니다.
}) {
  const showToolbar = toolbar && (toolbarContent || title || cancelLabel || confirmLabel);
  return (
    <Calendar wheel shadow={shadow} borderless={borderless} role="group" ariaLabel={ariaLabel}>
      {showToolbar ? (
        <div className="calendar_wheel-toolbar">
          {toolbarContent ?? (
            <>
              {cancelLabel ? (
                <button className="btn btn_text btn_sm" type="button">
                  {cancelLabel}
                </button>
              ) : null}
              <span className="calendar_wheel-title">{title}</span>
              {confirmLabel ? (
                <button className="btn btn_text color_primary btn_sm" type="button">
                  {confirmLabel}
                </button>
              ) : null}
            </>
          )}
        </div>
      ) : null}
      <div className="calendar_wheel-body">
        <div className="calendar_wheel-highlight" aria-hidden="true" />
        <div className="calendar_wheel-columns">{children}</div>
        <div className="calendar_wheel-fade" aria-hidden="true" />
      </div>
      {footer || footerContent ? (
        <div className="calendar_wheel-footer">{footerContent}</div>
      ) : null}
    </Calendar>
  );
}

export function CalendarWheelColumn({
  label, // 컬럼 listbox의 접근성 이름입니다.
  items = [], // 선택 가능한 값 배열입니다.
  selected, // 현재 선택된 값입니다.
  showSteps = true, // 이전·다음 단계 버튼 표시 여부입니다.
  prevLabel = '이전', // 이전 단계 버튼의 접근성 이름입니다.
  nextLabel = '다음', // 다음 단계 버튼의 접근성 이름입니다.
}) {
  // 휠의 선택값과 스크롤 위치를 동기화하고 이전·다음 단계 이동을 제한합니다.
  const [active, setActive] = useState(selected);
  const listRef = useRef(null);
  const index = Math.max(
    0,
    items.findIndex((item) => String(item) === String(active)),
  );
  const move = (offset) =>
    setActive(items[Math.max(0, Math.min(items.length - 1, index + offset))]);

  useEffect(() => {
    setActive(selected);
  }, [selected]);
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

  return (
    <div className="calendar_wheel-column">
      {showSteps ? (
        <button
          type="button"
          className="btn btn_ghost btn_icon-only btn_sm calendar_wheel-step calendar_wheel-step-prev"
          aria-label={prevLabel}
          disabled={index <= 0}
          onClick={() => move(-1)}
        >
          ⌃
        </button>
      ) : null}
      <ul ref={listRef} className="calendar_wheel-list" role="listbox" aria-label={label}>
        {items.map((item) => (
          <li key={String(item)} role="presentation">
            <button
              type="button"
              role="option"
              className={cx(
                'calendar_wheel-item',
                String(item) === String(active) && 'is-selected',
              )}
              aria-selected={String(item) === String(active) || undefined}
              onClick={() => setActive(item)}
            >
              {String(item)}
            </button>
          </li>
        ))}
      </ul>
      {showSteps ? (
        <button
          type="button"
          className="btn btn_ghost btn_icon-only btn_sm calendar_wheel-step calendar_wheel-step-next"
          aria-label={nextLabel}
          disabled={index >= items.length - 1}
          onClick={() => move(1)}
        >
          ⌄
        </button>
      ) : null}
    </div>
  );
}

export default Calendar;
