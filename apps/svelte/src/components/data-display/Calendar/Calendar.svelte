<!--
  Calendar 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
let {
  title,
  ariaLabel,
  size = '',
  noHeader = false,
  minimal = false,
  compact = false,
  borderless = false,
  shadow = false,
  ghost = false,
  week = false,
  readonly = false,
  disabled = false,
  weekends = false,
  agenda = false,
  wheel = false,
  footer = false,
  events = () => [],
  disabledDays = () => [],
  rangeStart,
  rangeEnd,
  selected = 15,
  today = 12,
  partial,
  role = 'application',
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();=> [] }, // 이벤트 표시 일자 배열입니다.
  disabledDays: { type: Array, default: () => [] }, // 비활성 일자 배열입니다.
  rangeStart: Number, // 범위 시작 일자입니다.
  rangeEnd: Number, // 범위 종료 일자입니다.
  selected: { type: Number, default: 15 }, // 선택된 상태입니다.
  today: { type: Number, default: 12 }, // 오늘로 표시할 일자입니다.
  partial: Number, // 부분 월(일자 수) 모드입니다.
  role: { type: String, default: 'application' }, // 루트 role입니다.
});

// 월·주·휠·일정 레이아웃과 스킨·상태를 calendar_* 공통 클래스로 변환합니다.
let classes = $derived([
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
  ].filter(Boolean),
);
const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
// 이전·현재·다음 달 셀과 선택·범위·이벤트 상태를 하나의 날짜 배열로 생성합니다.
let days = $derived({
  const cells = [];
  if (!partial && !week)
    [26, 27, 28, 29, 30, 31].forEach((day) => cells.push({ day, other: true }));
  const values = week
    ? [9, 10, 11, 12, 13, 14, 15]
    : Array.from({ length: partial || 30 }, (_, index) => index + 1);
  values.forEach((day, index) =>
    cells.push({
      day,
      today: day === today,
      selected: day === selected || day === rangeStart || day === rangeEnd,
      start: day === rangeStart,
      end: day === rangeEnd,
      range:
        rangeStart != null &&
        rangeEnd != null &&
        day > rangeStart &&
        day < rangeEnd,
      event: events.includes(day),
      disabled: disabledDays.includes(day),
      sunday: weekends && index % 7 === 0,
      saturday: weekends && index % 7 === 6,
    }),
  );
  if (!partial && !week)
    [1, 2, 3, 4, 5, 6].forEach((day) => cells.push({ day, other: true }));
  return cells;
});
</script>

<!-- 헤더·휠·요일·날짜 그리드·푸터는 variant와 slot 유무에 따라 필요한 구조만 렌더링합니다. -->
  <div
    class={classes}
    data-component="Calendar"
    role={role}
    aria-label={ariaLabel}
    aria-disabled={disabled || undefined}
  >
    {#if !minimal && !wheel}<slot name="header">
      {#if title && !noHeader}<div class="calendar_header">
        <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="이전 달">
          ‹
        </button>
        <span class="calendar_title">{{ title }}</span>
        <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="다음 달">
          ›
        </button>
      </div>
    </slot>
    {#if wheel}<template>
      {#if title}<div class="calendar_wheel-toolbar">
        <span class="calendar_wheel-title">{{ title }}</span>
      </div>
      <div class="calendar_wheel-body">
        <div class="calendar_wheel-highlight" aria-hidden="true" />
        <div class="calendar_wheel-columns">{@render children?.()}</div>
        <div class="calendar_wheel-fade" aria-hidden="true" />
      </div>
