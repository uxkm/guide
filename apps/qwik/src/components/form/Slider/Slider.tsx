import { component$, useId, useSignal, useVisibleTask$ } from '@builder.io/qwik';
/**
 * Slider 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.
const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value))); // 값을 min~max 범위로 제한합니다.

function StepIcon({ increase }) {
  // 증감 버튼에 사용하는 +/- 아이콘입니다.
  return (
    <svg
      class="slider_step-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      {increase && <path d="M12 5v14" />}
    </svg>
  );
}

export const Slider = component$(({
  min = 0, // 선택 가능한 최솟값입니다.
  max = 100, // 선택 가능한 최댓값입니다.
  value, // 제어 컴포넌트의 현재 값입니다.
  defaultValue = 50, // 비제어 컴포넌트의 초기 값입니다.
  step = 1, // 값의 증감 단위입니다.
  disabled = false, // 슬라이더를 비활성으로 만들어 조작을 막습니다.
  vertical = false, // 세로 방향 슬라이더로 표시합니다.
  label, // 슬라이더 위에 표시할 레이블입니다.
  showValue = false, // 현재 값을 헤더에 표시합니다.
  stepper = false, // 모바일에서 증감 버튼을 표시합니다.
  stepperAlways = false, // 증감 버튼을 항상 표시합니다.
  valueSuffix = '', // 현재 값 뒤에 붙는 단위입니다.
  hint, // 하단에 표시할 보조 설명입니다.
  decreaseLabel = '값 줄이기', // 감소 버튼의 접근 가능한 이름입니다.
  increaseLabel = '값 늘리기', // 증가 버튼의 접근 가능한 이름입니다.
  size = 'md', // 트랙·썸·값 텍스트 크기입니다.
  id, // range 입력에 연결할 id입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  children, // 눈금 등 추가 콘텐츠입니다.
  ripple = true, // 클릭 파장 효과를 표시할지 여부입니다.
  onChange, // 값 변경 콜백입니다.
  style, // CSS 변수 등을 포함한 인라인 스타일입니다.
  ...props // aria-valuetext 등 나머지 range 속성을 전달합니다.
}) {
  // 식별자, 범위, 제어 상태와 진행률을 계산합니다.
  const generatedId = useId();
  const inputId = id || generatedId;
  const numericMin = Number(min);
  const numericMax = Number(max);
  const innerValue = useSignal(() =>
    clamp(value ?? defaultValue, numericMin, numericMax),
  );
  const currentValue = clamp(innerValue.value, numericMin, numericMax); // 화면에 표시할 최종 값입니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const progress =
    numericMax === numericMin ? 0 : ((currentValue - numericMin) / (numericMax - numericMin)) * 100; // 트랙 채움 비율입니다.

  // 외부 value가 바뀌면 내부 상태를 범위 안으로 동기화합니다.
  useVisibleTask$(({ track, cleanup }) => {
    track(() => value);
    track(() => numericMin);
    track(() => numericMax);

    if (value !== undefined) innerValue.value = clamp(value, numericMin, numericMax);
  
  });

  // 크기·방향·스테퍼 변형을 공통 클래스로 변환합니다.
  const classes = [
        'slider', // 슬라이더 루트 필수 클래스입니다.
        resolvedSize === 'sm' && 'slider_sm', // 작은 크기 변형입니다.
        resolvedSize === 'lg' && 'slider_lg', // 큰 크기 변형입니다.
        vertical && 'slider_vertical', // 세로 방향 변형입니다.
        stepper && 'slider_stepper', // 증감 버튼 표시 모드입니다.
        stepperAlways && 'slider_stepper_always', // 증감 버튼 상시 표시입니다.
        className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
      ]
        .filter(Boolean)
        .join(' ');

  // data 속성으로 전달된 값→문구 매핑을 파싱합니다.
  const valueMap = String(props['data-slider-valuetext-map'] ?? '')
    .split(',')
    .reduce((map, item) => {
      const separator = item.indexOf(':');
      if (separator > -1) map[item.slice(0, separator)] = item.slice(separator + 1);
      return map;
    }, {});
  const valueText =
    valueMap[String(currentValue)] ??
    (props['data-slider-valuetext-suffix']
      ? `${currentValue} ${props['data-slider-valuetext-suffix']}`
      : props['aria-valuetext']); // 스크린 리더용 값 설명입니다.

  function update(next) {
    // 범위를 보정한 뒤 내부 상태와 외부 콜백을 갱신합니다.
    const normalized = clamp(next, numericMin, numericMax);
    innerValue.value = normalized;
    onChange?.(normalized);
  }

  // 공통 네이티브 range 입력을 한 곳에서 정의합니다.
  const input = (
    <input
      {...props}
      id={inputId}
      type="range"
      class="slider_input"
      min={numericMin}
      max={numericMax}
      step={step}
      value={currentValue}
      disabled={disabled}
      aria-valuetext={valueText || undefined}
      onChange$={(event) => update(event.target.value)}
    />
  );

  return (
    <div
      class={classes}
      data-component="Slider"
      data-ripple={ripple ? 'true' : undefined}
      style={{ '--slider-progress': `${progress}%`, ...style }}
    >
      {/* 레이블과 현재 값을 헤더에 배치합니다. */}
      {(label || showValue) && (
        <div class="slider_header">
          {label && (
            <label class="slider_label" for={inputId}>
              {label}
            </label>
          )}
          {showValue && (
            <output class="slider_value" for={inputId}>
              {currentValue}
              {valueSuffix || props['data-slider-suffix'] || ''}
            </output>
          )}
        </div>
      )}
      {/* 스테퍼가 있으면 감소·range·증가 버튼을 한 컨트롤로 묶습니다. */}
      {stepper ? (
        <div class="slider_control">
          <button
            type="button"
            class="slider_step slider_step-decrease"
            data-ripple="true"
            aria-label={decreaseLabel}
            disabled={disabled || currentValue <= numericMin}
            onClick$={() => update(currentValue - Number(step || 1))}
          >
            <StepIcon />
          </button>
          {input}
          <button
            type="button"
            class="slider_step slider_step-increase"
            data-ripple="true"
            aria-label={increaseLabel}
            disabled={disabled || currentValue >= numericMax}
            onClick$={() => update(currentValue + Number(step || 1))}
          >
            <StepIcon increase />
          </button>
        </div>
      ) : (
        input
      )}
      {hint && <p class="slider_hint">{hint}</p>}
      {children}
    </div>
  );
});

export default Slider;
