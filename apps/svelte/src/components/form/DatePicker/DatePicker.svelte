<!--
  DatePicker 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script>
import { tick, onMount, onDestroy } from 'svelte';
// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 날짜 값, 크기, 범위, 상태와 패널 정렬을 하나의 DatePicker API로 제공합니다.
let {
  modelValue = '',
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
  required = false,
  panelAlign = 'start',
  ariaLabel = '날짜 선택',
  onModelValue,
  onChange,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  extra,
  badge,
  class: className,
  ...rest
} = $props();


let root = $state(null);
let open = $state(false);
let month = $state(new Date());
const weekdays = ['일', '월', '화', '수', '목', '금', '토']; // 달력 요일 헤더입니다.
const pad = (value) => String(value).padStart(2, '0'); // 월·일을 두 자리로 맞춥니다.
const toValue = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`; // Date를 YYYY-MM-DD로 변환합니다.
const parseValue = (value) =>
  /^\d{4}-\d{2}-\d{2}$/.test(value || '') ? new Date(`${value}T00:00:00`) : null; // 문자열 값을 Date로 파싱합니다.
const formatValue = (value) => {
  // 로케일에 맞는 표시용 날짜 문자열을 만듭니다.
  const date = parseValue(value);
  return date
    ? new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(date)
    : '';
};
const generatedId = crypto.randomUUID().replace(/:/g, '');
let inputId = $derived(rest.id || `date-picker-${generatedId}`);
let panelId = $derived(`${inputId}-panel`);

// 크기·너비·상태·열림 클래스를 조합합니다.
let classes = $derived([
    'date_picker', // 날짜 선택기 루트 필수 클래스입니다.
    size !== 'md' && `date_picker_${size}`, // sm·lg 크기 변형입니다.
    fit && 'date_picker_fit', // 제한 너비 변형입니다.
    block && 'date_picker_block', // 전체 너비 변형입니다.
    disabled && 'is-disabled', // 비활성 상태 클래스입니다.
    error && 'is-error', // 오류 상태 클래스입니다.
    success && 'is-success', // 성공 상태 클래스입니다.
    open && 'is-open', // 패널 열림 상태 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// id·class는 루트/입력에만 쓰고 나머지 속성은 트리거 입력으로 전달합니다.
let inputAttrs = $derived({
  const { id: _id, class: _class, ...rest } = rest;
  return rest;
});
let title = $derived(`${month.getFullYear()}년 ${month.getMonth() + 1}월`);
const today = toValue(new Date());

// 해당 월 달력에 표시할 42칸(6주) 셀을 생성합니다.
let cells = $derived({
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const start = new Date(month.getFullYear(), month.getMonth(), 1 - first.getDay());
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return { date, value: toValue(date), other: date.getMonth() !== month.getMonth() };
  });
});

// 선택 값이 바뀌면 달력 표시 월을 맞춥니다.
$effect(
  () => modelValue,
  (value) => {
    const date = parseValue(value);
    if (date) month = date;
  },
  { immediate: true },
);

// 패널이 열리면 선택일 또는 첫 가능 날짜로 포커스를 이동합니다.
$effect(open, (isOpen) => {
  if (isOpen)
    tick(() =>
      root
        ?.querySelector('.calendar_day.is-selected:not(:disabled), .calendar_day:not(:disabled)')
        ?.focus(),
    );
});

function commit(value) {
  // v-model과 change 이벤트로 값을 확정합니다.
  onModelValue?.(value);
  onChange?.(value);
}
function select(value) {
  // 날짜를 선택한 뒤 패널을 닫고 트리거로 포커스를 되돌립니다.
  commit(value);
  open = false;
  requestAnimationFrame(() => root?.querySelector('.date_picker_input')?.focus());
}
function moveMonth(offset) {
  month = new Date(month.getFullYear(), month.getMonth() + offset, 1);
}
function outside(event) {
  // 바깥 클릭 시 패널을 닫습니다.
  if (!root?.contains(event.target)) open = false;
}
onMount(() => document.addEventListener('pointerdown', outside));
onDestroy(() => document.removeEventListener('pointerdown', outside));
</script>

<div bind:this={root} class={classes} data-component="DatePicker" @keydown.esc="open = false">
    <!-- 읽기 전용 트리거 입력과 지우기·달력 버튼을 묶습니다. -->
    <div class="date_picker_trigger">
      <input
        {...inputAttrs}
        id={inputId}
        class="date_picker_input"
        value={formatValue(modelValue)}
        placeholder={placeholder}
        readonly
        disabled={disabled}
        required={required}
        aria-label={attrs['aria-label'] || ariaLabel}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        aria-invalid={error || undefined}
        onclick={!disabled && (open = true)}
      />
      {#if name}<input type="hidden" name={name} value={modelValue} />
      {#if clearable && modelValue && !disabled}<button
       
        class="date_picker_clear"
        type="button"
        aria-label="날짜 지우기"
        onclick={commit('')}
      >
        <svg
          class="icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>
      <button
        class="date_picker_btn"
        type="button"
        disabled={disabled}
        aria-label="달력 열기"
        aria-controls={panelId}
        aria-expanded={open}
        onclick={open = !open}
      >
        <svg
          class="icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </svg>
      </button>
    </div>
    <!-- 달력 패널: 월 이동, 요일, 날짜 그리드, 오늘·초기화 액션입니다. -->
    <div
      v-show="open"
      id={panelId}
      class="date_picker_panel"
      class={panelAlign === 'end' && 'date_picker_panel-end'}
      role="dialog"
      aria-modal="false"
      aria-label={ariaLabel}
    >
      <div class="calendar calendar_borderless">
        <div class="calendar_header">
          <button
            type="button"
            class="btn btn_ghost btn_icon-only btn_sm"
            aria-label="이전 달"
            onclick={moveMonth(-1)}
          >
            ‹</button
          ><span class="calendar_title" aria-live="polite">{{ title }}</span
          ><button
            type="button"
            class="btn btn_ghost btn_icon-only btn_sm"
            aria-label="다음 달"
            onclick={moveMonth(1)}
          >
            ›
          </button>
        </div>
        <div class="calendar_weekdays" aria-hidden="true">
          <span {#each weekdays as day} key={day} class="calendar_weekday">{{ day }}</span>
        </div>
        <div class="calendar_grid">
          <button
            {#each cells as cell}
            key={cell.value}
            type="button"
            class="calendar_day"
            class={{
              'is-other-month': cell.other,
              'is-today': cell.value === today,
              'is-selected': cell.value === modelValue,
            }}
            disabled={(min && cell.value < min) || (max && cell.value > max)}
            aria-current={cell.value === today ? 'date' : undefined}
            aria-selected={cell.value === modelValue || undefined}
            aria-label={formatValue(cell.value)}
            onclick={select(cell.value)}
          >
            {{ cell.date.getDate() }}
          </button>
        </div>
        <div class="calendar_footer">
          <button type="button" class="btn btn_text color_primary btn_sm" onclick={select(today)}>
            오늘
          </button>
          {#if clearable}<div class="calendar_footer-actions">
            <button type="button" class="btn btn_ghost btn_sm" onclick={commit('')}>초기화</button>
          </div>
        </div>
      </div>
    </div>
  </div>
