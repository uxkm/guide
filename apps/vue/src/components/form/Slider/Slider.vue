<!--
  Slider 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs, watch } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmSlider', inheritAttrs: false });

// 범위, 스테퍼, 레이블과 크기 옵션을 하나의 Slider API로 제공합니다.
const props = defineProps({
  min: { type: Number, default: 0 }, // 선택 가능한 최솟값입니다.
  max: { type: Number, default: 100 }, // 선택 가능한 최댓값입니다.
  step: { type: Number, default: 1 }, // 값의 증감 단위입니다.
  modelValue: { type: Number, default: 50 }, // v-model 현재 값입니다.
  value: Number, // modelValue의 이전 호환 이름입니다.
  disabled: Boolean, // 슬라이더를 비활성으로 만들어 조작을 막습니다.
  vertical: Boolean, // 세로 방향 슬라이더로 표시합니다.
  label: String, // 슬라이더 위에 표시할 레이블입니다.
  showValue: Boolean, // 현재 값을 헤더에 표시합니다.
  stepper: Boolean, // 모바일에서 증감 버튼을 표시합니다.
  stepperAlways: Boolean, // 증감 버튼을 항상 표시합니다.
  valueSuffix: { type: String, default: '' }, // 현재 값 뒤에 붙는 단위입니다.
  hint: String, // 하단에 표시할 보조 설명입니다.
  decreaseLabel: { type: String, default: '값 줄이기' }, // 감소 버튼의 접근 가능한 이름입니다.
  increaseLabel: { type: String, default: '값 늘리기' }, // 증가 버튼의 접근 가능한 이름입니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // 트랙·썸·값 텍스트 크기입니다.
  id: String, // range 입력에 연결할 id입니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
});
const emit = defineEmits(['update:modelValue', 'change']);
const attrs = useAttrs();
const generatedId = `slider-${Math.random().toString(36).slice(2, 9)}`;
const inputId = computed(() => props.id || generatedId);

// 제어 값과 진행률을 계산합니다.
const innerValue = ref(props.value ?? props.modelValue);
watch(
  () => [props.value, props.modelValue],
  ([value, modelValue]) => {
    innerValue.value = value ?? modelValue;
  },
);
const currentValue = computed(() =>
  Math.min(props.max, Math.max(props.min, Number(innerValue.value))),
); // 화면에 표시할 최종 값입니다.
const progress = computed(() =>
  props.max === props.min ? 0 : ((currentValue.value - props.min) / (props.max - props.min)) * 100,
); // 트랙 채움 비율입니다.

// 크기·방향·스테퍼 변형을 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'slider', // 슬라이더 루트 필수 클래스입니다.
    props.size === 'sm' && 'slider_sm', // 작은 크기 변형입니다.
    props.size === 'lg' && 'slider_lg', // 큰 크기 변형입니다.
    props.vertical && 'slider_vertical', // 세로 방향 변형입니다.
    props.stepper && 'slider_stepper', // 증감 버튼 표시 모드입니다.
    props.stepperAlways && 'slider_stepper_always', // 증감 버튼 상시 표시입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class·style은 루트에만 두고 나머지 속성은 range로 전달합니다.
const inputAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});

// data 속성으로 전달된 값→문구 매핑을 파싱합니다.
const valueText = computed(() => {
  const map = String(attrs['data-slider-valuetext-map'] ?? '')
    .split(',')
    .reduce((result, item) => {
      const separator = item.indexOf(':');
      if (separator > -1) result[item.slice(0, separator)] = item.slice(separator + 1);
      return result;
    }, {});
  return (
    map[String(currentValue.value)] ??
    (attrs['data-slider-valuetext-suffix']
      ? `${currentValue.value} ${attrs['data-slider-valuetext-suffix']}`
      : attrs['aria-valuetext'])
  );
});

function update(next) {
  // 범위를 보정한 뒤 v-model과 change 이벤트를 갱신합니다.
  innerValue.value = Math.min(props.max, Math.max(props.min, Number(next)));
  emit('update:modelValue', innerValue.value);
  emit('change', innerValue.value);
}
</script>

<template>
  <div
    :class="classes"
    data-component="Slider"
    :data-ripple="ripple ? 'true' : undefined"
    :style="[{ '--slider-progress': `${progress}%` }, attrs.style]"
  >
    <!-- 레이블과 현재 값을 헤더에 배치합니다. -->
    <div v-if="label || showValue" class="slider_header">
      <label v-if="label" class="slider_label" :for="inputId">{{ label }}</label>
      <output v-if="showValue" class="slider_value" :for="inputId"
        >{{ currentValue }}{{ valueSuffix || attrs['data-slider-suffix'] || '' }}</output
      >
    </div>
    <!-- 스테퍼가 있으면 감소·range·증가 버튼을 한 컨트롤로 묶습니다. -->
    <div v-if="stepper" class="slider_control">
      <button
        type="button"
        class="slider_step slider_step-decrease"
        data-ripple="true"
        :aria-label="decreaseLabel"
        :disabled="disabled || currentValue <= min"
        @click="update(currentValue - step)"
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
        v-bind="inputAttrs"
        :id="inputId"
        type="range"
        class="slider_input"
        :min="min"
        :max="max"
        :step="step"
        :value="currentValue"
        :disabled="disabled"
        :aria-valuetext="valueText || undefined"
        @input="update($event.target.value)"
      />
      <button
        type="button"
        class="slider_step slider_step-increase"
        data-ripple="true"
        :aria-label="increaseLabel"
        :disabled="disabled || currentValue >= max"
        @click="update(currentValue + step)"
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
    <input
      v-else
      v-bind="inputAttrs"
      :id="inputId"
      type="range"
      class="slider_input"
      :min="min"
      :max="max"
      :step="step"
      :value="currentValue"
      :disabled="disabled"
      :aria-valuetext="valueText || undefined"
      @input="update($event.target.value)"
    />
    <p v-if="hint" class="slider_hint">{{ hint }}</p>
    <slot />
  </div>
</template>
