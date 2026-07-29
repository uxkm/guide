import { ripplePropSurface, ripplePropContainer, rippleClassRows } from '@/doc/data/ripple-api';

const propCols = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const calendarPropColumns = propCols;
export const calendarProps = [
  { name: 'title', type: 'string', default: '—', description: '내장 헤더 제목 (header prop 없을 때)' },
  { name: 'ariaLabel', type: 'string', default: '—', description: '캘린더 접근성 라벨 (권장)' },
  { name: 'role', type: 'string', default: 'application', description: '루트 role 속성' },
  { name: 'size', type: `'sm' | 'lg'`, default: '—', description: 'calendar_sm · calendar_lg' },
  { name: 'noHeader', type: 'boolean', default: 'false', description: '헤더 영역 숨김 (calendar_no-header)' },
  { name: 'minimal', type: 'boolean', default: 'false', description: '최소 스타일 (calendar_minimal)' },
  { name: 'compact', type: 'boolean', default: 'false', description: '좁은 셀 (calendar_compact)' },
  { name: 'borderless', type: 'boolean', default: 'false', description: '테두리 없음' },
  { name: 'shadow', type: 'boolean', default: 'false', description: '그림자 (calendar_shadow)' },
  { name: 'ghost', type: 'boolean', default: 'false', description: '투명 배경 (calendar_ghost)' },
  { name: 'week', type: 'boolean', default: 'false', description: '주간 뷰 레이아웃' },
  { name: 'weekends', type: 'boolean', default: 'false', description: '주말 강조 (calendar_weekends)' },
  { name: 'agenda', type: 'boolean', default: 'false', description: '아젠다 레이아웃' },
  { name: 'wheel', type: 'boolean', default: 'false', description: '휠 피커 레이아웃' },
  { name: 'readonly', type: 'boolean', default: 'false', description: '날짜 선택 불가' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '전체 비활성 (is-disabled)' },
  { name: 'className', type: 'string', default: '—', description: 'calendar 루트에 추가 클래스' },
];

export const calendarHeaderPropColumns = propCols;
export const calendarHeaderProps = [
  { name: 'title', type: 'string', default: '—', description: '월·기간 제목 (calendar_title)' },
  { name: 'prevLabel', type: 'string', default: '이전 달', description: '이전 버튼 aria-label' },
  { name: 'nextLabel', type: 'string', default: '다음 달', description: '다음 버튼 aria-label' },
  { name: 'showNav', type: 'boolean', default: 'true', description: '이전·다음 네비게이션 표시' },
  { name: 'showPrev', type: 'boolean', default: '—', description: '이전 버튼만 제어 (showNav 대체)' },
  { name: 'showNext', type: 'boolean', default: '—', description: '다음 버튼만 제어' },
];

export const calendarNavPropColumns = propCols;
export const calendarNavProps = [
  { name: 'label', type: 'string', default: '—', description: '주간 네비 라벨' },
  { name: 'prevLabel', type: 'string', default: '이전 주', description: '이전 버튼 aria-label' },
  { name: 'nextLabel', type: 'string', default: '다음 주', description: '다음 버튼 aria-label' },
];

export const calendarWeekdaysPropColumns = propCols;
export const calendarWeekdaysProps = [
  { name: 'labels', type: 'string[]', default: '일~토', description: '요일 라벨 배열' },
];

export const calendarMonthPropColumns = propCols;
export const calendarMonthProps = [
  { name: 'days', type: 'object[]', default: '—', description: 'CalendarDay용 셀 데이터 배열' },
  { name: 'preset', type: 'string', default: 'june2024', description: '데모용 월 프리셋' },
  { name: 'selected', type: 'number', default: '—', description: '선택일 (프리셋·partial용)' },
  { name: 'today', type: 'number', default: '—', description: '오늘 날짜 (프리셋·partial용)' },
  { name: 'disabled', type: 'number[]', default: '—', description: '비활성 날짜 목록' },
  { name: 'events', type: 'number[]', default: '—', description: '이벤트 표시 날짜' },
  { name: 'rangeStart', type: 'number', default: '—', description: '범위 시작일' },
  { name: 'rangeEnd', type: 'number', default: '—', description: '범위 종료일' },
  { name: 'weekends', type: 'boolean', default: 'false', description: '주말 셀 표시' },
  { name: 'partial', type: 'number', default: '—', description: '부분 월 데모 일수' },
  { name: 'week', type: 'boolean', default: 'false', description: '주간 그리드' },
  { name: 'readonly', type: 'boolean', default: 'false', description: '날짜 버튼 비활성' },
];

export const calendarGridPropColumns = propCols;
export const calendarGridProps = [
  { name: 'week', type: 'boolean', default: 'false', description: '7열 주간 그리드 (calendar_grid-week)' },
];

export const calendarDayPropColumns = propCols;
export const calendarDayProps = [
  { name: 'day', type: 'number | string', default: '—', description: '날짜 숫자 (필수)' },
  { name: 'otherMonth', type: 'boolean', default: 'false', description: '다른 달 (is-other-month)' },
  { name: 'today', type: 'boolean', default: 'false', description: '오늘 (is-today)' },
  { name: 'selected', type: 'boolean', default: 'false', description: '선택 (is-selected)' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성 (is-disabled)' },
  { name: 'sunday', type: 'boolean', default: 'false', description: '일요일 (is-sunday)' },
  { name: 'saturday', type: 'boolean', default: 'false', description: '토요일 (is-saturday)' },
  { name: 'rangeStart', type: 'boolean', default: 'false', description: '범위 시작 (is-range-start)' },
  { name: 'rangeEnd', type: 'boolean', default: 'false', description: '범위 끝 (is-range-end)' },
  { name: 'inRange', type: 'boolean', default: 'false', description: '범위 내 (is-in-range)' },
  { name: 'event', type: 'boolean', default: 'false', description: '이벤트 점 (has-event)' },
  { name: 'readonly', type: 'boolean', default: 'false', description: '클릭 불가' },
  ripplePropSurface,
];

export const calendarWheelPropColumns = propCols;
export const calendarWheelProps = [
  { name: 'title', type: 'string', default: '—', description: '툴바 제목' },
  { name: 'ariaLabel', type: 'string', default: '—', description: '휠 피커 접근성 라벨' },
  { name: 'shadow', type: 'boolean', default: 'false', description: 'Calendar에 전달' },
  { name: 'borderless', type: 'boolean', default: 'false', description: 'Calendar에 전달' },
  { name: 'footer', type: 'boolean', default: 'false', description: '하단 푸터 영역 표시' },
  { name: 'toolbar', type: 'boolean', default: 'true', description: '상단 툴바 표시' },
  { name: 'toolbarContent', type: 'ReactNode', default: '—', description: '툴바 커스텀 (Vue #toolbar 슬롯 대응)' },
  { name: 'footerContent', type: 'ReactNode', default: '—', description: '푸터 커스텀 (Vue #footer 슬롯 대응)' },
  { name: 'cancelLabel', type: 'string', default: '—', description: '취소 버튼 텍스트' },
  { name: 'confirmLabel', type: 'string', default: '—', description: '확인 버튼 텍스트' },
];

export const calendarWheelColumnPropColumns = propCols;
export const calendarWheelColumnProps = [
  { name: 'label', type: 'string', default: '—', description: 'listbox aria-label' },
  { name: 'items', type: 'array', default: '[]', description: '문자열·숫자 또는 { label, selected } 객체' },
  { name: 'selected', type: 'string | number', default: '—', description: '선택 값' },
  { name: 'showSteps', type: 'boolean', default: 'true', description: '위·아래 스텝 버튼' },
  { name: 'prevLabel', type: 'string', default: '—', description: '이전 스텝 aria-label' },
  { name: 'nextLabel', type: 'string', default: '—', description: '다음 스텝 aria-label' },
  ripplePropContainer,
];

export const calendarSlotColumns = [
  { key: 'name', label: 'Children / Prop' },
  { key: 'description', label: '설명' },
];

export const calendarSlots = [
  { name: 'header', description: '헤더 (Vue #header 슬롯 대응, CalendarHeader 등)' },
  { name: 'weekdays', description: '요일 행 (Vue #weekdays 슬롯 대응, CalendarWeekdays)' },
  { name: 'children', description: '월 그리드·아젠다·휠 등 본문 (Vue default 슬롯 대응)' },
  { name: 'footer', description: '푸터 (Vue #footer 슬롯 대응, CalendarFooter)' },
];

export const calendarSubSlotColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const calendarHeaderSlots = [
  { name: 'children', description: '헤더 우측 추가 콘텐츠 (Vue default 슬롯 대응)' },
];
export const calendarGridSlots = [
  { name: 'children', description: 'CalendarDay 자식 (Vue default 슬롯 대응)' },
];
export const calendarFooterSlots = [
  { name: 'children', description: '푸터 액션 (Vue default 슬롯 대응, 기본: 초기화·확인)' },
];
export const calendarGroupSlots = [
  { name: 'children', description: '여러 Calendar 나란히 (Vue default 슬롯 대응)' },
];
export const calendarWheelSlots = [
  { name: 'toolbarContent', description: '상단 툴바 커스텀 (Vue #toolbar 슬롯 대응)' },
  { name: 'children', description: 'CalendarWheelColumn 목록 (Vue default 슬롯 대응)' },
  { name: 'footerContent', description: '하단 푸터 (Vue #footer 슬롯 대응)' },
];

export const calendarClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const calendarClasses = [
  { name: 'calendar', description: '캘린더 루트' },
  { name: 'calendar_sm · calendar_lg · calendar_compact', description: '크기' },
  { name: 'calendar_borderless · calendar_shadow · calendar_ghost · calendar_minimal', description: '스킨' },
  { name: 'calendar_week · calendar_weekends · calendar_agenda · calendar_wheel', description: '레이아웃 모드' },
  { name: 'calendar_header · calendar_title · calendar_nav', description: '헤더·네비' },
  { name: 'calendar_weekdays · calendar_weekday', description: '요일 행' },
  { name: 'calendar_grid · calendar_grid-week', description: '날짜 그리드' },
  { name: 'calendar_day', description: '날짜 셀 버튼' },
  { name: 'calendar_footer · calendar_group', description: '푸터·다중 캘린더' },
  { name: 'calendar_wheel-*', description: '휠 피커 파트' },
  { name: 'is-today · is-selected · is-in-range · is-range-start · is-range-end', description: '날짜 상태' },
  { name: 'is-other-month · is-sunday · is-saturday · is-disabled · has-event', description: '날짜 상태' },
  ...rippleClassRows,
];

export const calendarTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const calendarTokens = [
  { name: '--calendar-cell-size · --calendar-cell-size-sm · --calendar-cell-size-lg', default: '—', description: '날짜 셀 크기' },
  { name: '--calendar-gap', default: '2px', description: '그리드 간격' },
  { name: '--calendar-wheel-height · --calendar-wheel-row-height', default: '—', description: '휠 피커 높이' },
  { name: '--calendar-agenda-gap · --calendar-agenda-date-width', default: '—', description: '아젠다 레이아웃' },
];
