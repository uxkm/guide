<!--
  Slider 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script>
// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 범위, 스테퍼, 레이블과 크기 옵션을 하나의 Slider API로 제공합니다.
let {
  min = 0,
  max = 100,
  step = 1,
  modelValue = 50,
  value,
  disabled = false,
  vertical = false,
  label,
  showValue = false,
  stepper = false,
  stepperAlways = false,
  valueSuffix = '',
  hint,
  decreaseLabel = '값 줄이기',
  increaseLabel = '값 늘리기',
  size = 'md',
  id,
  ripple = true,
  onModelValue,
  onChange,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge,
  class: className,
  ...rest
} = $props();=> ['sm', 'md', 'lg'].includes(value) }, // 트랙·썸·값 텍스트 크기입니다.
  id: String, // range 입력에 연결할 id입니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
});


const generatedId = `slider-${Math.random().toString(36).slice(2, 9)}`;
let inputId = $derived(id || generatedId);

// 제어 값과 진행률을 계산합니다.
let innerValue = $state(value ?? modelValue);
$effect(
  () => [value, modelValue],
  ([value, modelValue]) => {
    innerValue = value ?? modelValue;
  },
);
let currentValue = $derived(Math.min(max, Math.max(min, Number(innerValue))),
); // 화면에 표시할 최종 값입니다.
let progress = $derived(max === min ? 0 : ((currentValue - min) / (max - min)) * 100,
); // 트랙 채움 비율입니다.

// 크기·방향·스테퍼 변형을 공통 클래스로 변환합니다.
let classes = $derived([
    'slider', // 슬라이더 루트 필수 클래스입니다.
    size === 'sm' && 'slider_sm', // 작은 크기 변형입니다.
    size === 'lg' && 'slider_lg', // 큰 크기 변형입니다.
    vertical && 'slider_vertical', // 세로 방향 변형입니다.
    stepper && 'slider_stepper', // 증감 버튼 표시 모드입니다.
    stepperAlways && 'slider_stepper_always', // 증감 버튼 상시 표시입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class·style은 루트에만 두고 나머지 속성은 range로 전달합니다.
let inputAttrs = $derived({
  const { class: _class, style: _style, ...rest } = rest;
  return rest;
});

// data 속성으로 전달된 값→문구 매핑을 파싱합니다.
let valueText = $derived({
  const map = String(rest['data-slider-valuetext-map'] ?? '')
    .split(',')
    .reduce((result, item) => {
      const separator = item.indexOf(':');
      if (separator > -1) result[item.slice(0, separator)] = item.slice(separator + 1);
      return result;
    }, {});
  return (
    map[String(currentValue)] ??
    (rest['data-slider-valuetext-suffix']
      ? `${currentValue} ${rest['data-slider-valuetext-suffix']}`
      : rest['aria-valuetext'])
  );
});

function update(next) {
  // 범위를 보정한 뒤 v-model과 change 이벤트를 갱신합니다.
  innerValue = Math.min(max, Math.max(min, Number(next)));
  onModelValue?.(innerValue);
  onChange?.(innerValue);
}
</script>

<div
    class={classes}
    data-component="Slider"
    data-ripple={ripple ? 'true' : undefined}
    style={[{ '--slider-progress': `${progress}%` }, attrs.style]}
  >
    <!-- 레이블과 현재 값을 헤더에 배치합니다. -->
    {#if label || showValue}<div class="slider_header">
      {#if label}<label class="slider_label" for={inputId}>{{ label }}</label>
      {#if showValue}<output class="slider_value" for={inputId}
        >{{ currentValue }}{{ valueSuffix || attrs['data-slider-suffix'] || '' }}</output
      >
    </div>
    <!-- 스테퍼가 있으면 감소·range·증가 버튼을 한 컨트롤로 묶습니다. -->
    {#if stepper}<div class="slider_control">
      <button
        type="button"
        class="slider_step slider_step-decrease"
        data-ripple="true"
        aria-label={decreaseLabel}
        disabled={disabled || currentValue <= min}
        onclick={update(currentValue - step)}
      >
        <svg
          class="slider_step-icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M5 12h14" />
        </svg>
      </button>
      <input
        {...inputAttrs}
        id={inputId}
        type="range"
        class="slider_input"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        disabled={disabled}
        aria-valuetext={valueText || undefined}
        oninput={update($event.target.value)}
      />
      <button
        type="button"
        class="slider_step slider_step-increase"
        data-ripple="true"
        aria-label={increaseLabel}
        disabled={disabled || currentValue >= max}
        onclick={update(currentValue + step)}
      >
        <svg
          class="slider_step-icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
    </div>
    {:else}<input
     
      {...inputAttrs}
      id={inputId}
      type="range"
      class="slider_input"
      min={min}
      max={max}
      step={step}
      value={currentValue}
      disabled={disabled}
      aria-valuetext={valueText || undefined}
      oninput={update($event.target.value)}
    />
    {#if hint}<p class="slider_hint">{{ hint }}</p>
    {@render children?.()}
  </div>
