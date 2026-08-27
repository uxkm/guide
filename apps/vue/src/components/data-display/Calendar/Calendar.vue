<!--
  Calendar 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useSlots } from 'vue';

defineOptions({ name: 'UxkmCalendar' });
const props = defineProps({
  title: String, // 헤더 제목입니다.
  ariaLabel: String, // 캘린더 접근성 이름입니다.
  size: { type: String, default: '' }, // 크기 변형 클래스입니다.
  noHeader: Boolean, // 헤더를 숨깁니다.
  minimal: Boolean, // 미니멀 스킨입니다.
  compact: Boolean, // 조밀한 캘린더입니다.
  borderless: Boolean, // 테두리 없는 스킨입니다.
  shadow: Boolean, // 그림자 스킨입니다.
  ghost: Boolean, // 고스트 스킨입니다.
  week: Boolean, // 주 단위 보기입니다.
  readonly: Boolean, // 읽기 전용입니다.
  disabled: Boolean, // 비활성 상태입니다.
  weekends: Boolean, // 주말 강조입니다.
  agenda: Boolean, // 아젠다 레이아웃입니다.
  wheel: Boolean, // 휠 선택 모드입니다.
  footer: Boolean, // 휠 푸터 영역 표시 여부입니다.
  events: { type: Array, default: () => [] }, // 이벤트 표시 일자 배열입니다.
  disabledDays: { type: Array, default: () => [] }, // 비활성 일자 배열입니다.
  rangeStart: Number, // 범위 시작 일자입니다.
  rangeEnd: Number, // 범위 종료 일자입니다.
  selected: { type: Number, default: 15 }, // 선택된 상태입니다.
  today: { type: Number, default: 12 }, // 오늘로 표시할 일자입니다.
  partial: Number, // 부분 월(일자 수) 모드입니다.
  role: { type: String, default: 'application' }, // 루트 role입니다.
});
const slots = useSlots();
// 월·주·휠·일정 레이아웃과 스킨·상태를 calendar_* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'calendar',
    props.noHeader && 'calendar_no-header',
    props.minimal && 'calendar_minimal',
    props.compact && 'calendar_compact',
    props.borderless && 'calendar_borderless',
    props.shadow && 'calendar_shadow',
    props.ghost && 'calendar_ghost',
    props.week && 'calendar_week',
    props.readonly && 'calendar_readonly',
    props.disabled && 'is-disabled',
    props.weekends && 'calendar_weekends',
    props.agenda && 'calendar_agenda',
    props.wheel && 'calendar_wheel',
    props.size === 'sm' && 'calendar_sm',
    props.size === 'lg' && 'calendar_lg',
  ].filter(Boolean),
);
const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
// 이전·현재·다음 달 셀과 선택·범위·이벤트 상태를 하나의 날짜 배열로 생성합니다.
const days = computed(() => {
  const cells = [];
  if (!props.partial && !props.week)
    [26, 27, 28, 29, 30, 31].forEach((day) => cells.push({ day, other: true }));
  const values = props.week
    ? [9, 10, 11, 12, 13, 14, 15]
    : Array.from({ length: props.partial || 30 }, (_, index) => index + 1);
  values.forEach((day, index) =>
    cells.push({
      day,
      today: day === props.today,
      selected: day === props.selected || day === props.rangeStart || day === props.rangeEnd,
      start: day === props.rangeStart,
      end: day === props.rangeEnd,
      range:
        props.rangeStart != null &&
        props.rangeEnd != null &&
        day > props.rangeStart &&
        day < props.rangeEnd,
      event: props.events.includes(day),
      disabled: props.disabledDays.includes(day),
      sunday: props.weekends && index % 7 === 0,
      saturday: props.weekends && index % 7 === 6,
    }),
  );
  if (!props.partial && !props.week)
    [1, 2, 3, 4, 5, 6].forEach((day) => cells.push({ day, other: true }));
  return cells;
});
</script>

<template>
  <!-- 헤더·휠·요일·날짜 그리드·푸터는 variant와 slot 유무에 따라 필요한 구조만 렌더링합니다. -->
  <div
    :class="classes"
    data-component="Calendar"
    :role="role"
    :aria-label="ariaLabel"
    :aria-disabled="disabled || undefined"
  >
    <slot v-if="!minimal && !wheel" name="header">
      <div v-if="title && !noHeader" class="calendar_header">
        <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="이전 달">
          ‹
        </button>
        <span class="calendar_title">{{ title }}</span>
        <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="다음 달">
          ›
        </button>
      </div>
    </slot>
    <template v-if="wheel">
      <div v-if="title" class="calendar_wheel-toolbar">
        <span class="calendar_wheel-title">{{ title }}</span>
      </div>
      <div class="calendar_wheel-body">
        <div class="calendar_wheel-highlight" aria-hidden="true" />
        <div class="calendar_wheel-columns"><slot /></div>
        <div class="calendar_wheel-fade" aria-hidden="true" />
      </div>
    </template>
    <template v-else>
      <slot v-if="!minimal && !agenda" name="weekdays">
        <div v-if="!noHeader" class="calendar_weekdays" aria-hidden="true">
          <span v-for="label in weekdays" :key="label" class="calendar_weekday">{{ label }}</span>
        </div>
      </slot>
      <slot>
        <!-- 날짜 상태를 is-* 클래스와 현재·선택·비활성 접근성 속성에 함께 연결합니다. -->
        <div v-if="!agenda" class="calendar_grid" :class="week && 'calendar_grid-week'">
          <button
            v-for="(cell, index) in days"
            :key="`${cell.day}-${index}`"
            type="button"
            class="calendar_day"
            :class="{
              'is-other-month': cell.other,
              'is-today': cell.today,
              'is-selected': cell.selected,
              'is-range-start': cell.start,
              'is-range-end': cell.end,
              'is-in-range': cell.range,
              'has-event': cell.event,
              'is-disabled': cell.disabled,
              'is-sunday': cell.sunday,
              'is-saturday': cell.saturday,
            }"
            :disabled="cell.disabled || (cell.other && !cell.range)"
            :aria-current="cell.today ? 'date' : undefined"
            :aria-selected="cell.selected || undefined"
          >
            {{ cell.day }}
          </button>
        </div>
      </slot>
      <slot name="footer"
        ><div v-if="footer" class="calendar_footer">
          <button type="button" class="btn btn_text color_primary btn_sm">오늘</button>
          <div class="calendar_footer-actions">
            <button type="button" class="btn btn_ghost btn_sm">초기화</button
            ><button type="button" class="btn btn_filled color_primary btn_sm">확인</button>
          </div>
        </div></slot
      >
    </template>
  </div>
</template>
