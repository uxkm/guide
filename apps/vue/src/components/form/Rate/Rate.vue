<!--
  Rate 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs, watch } from 'vue';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmRate', inheritAttrs: false });

// 별점 값, 개수, 반별·초기화·읽기 전용 옵션을 하나의 Rate API로 제공합니다.
const props = defineProps({
  modelValue: Number, // v-model 현재 별점입니다.
  value: Number, // modelValue의 이전 호환 이름입니다.
  count: { type: Number, default: 5 }, // 표시할 별의 개수입니다.
  allowHalf: Boolean, // 0.5점 단위 선택을 허용합니다.
  clearable: Boolean, // 선택 초기화 버튼을 표시합니다.
  readonly: Boolean, // 읽기 전용 표시 모드입니다.
  disabled: Boolean, // 선택을 비활성으로 만들어 조작을 막습니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // 별과 값 텍스트 크기입니다.
  legend: String, // fieldset 범례 텍스트입니다.
  name: String, // radio 그룹 이름입니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
});
const emit = defineEmits(['update:modelValue', 'change']);
const attrs = useAttrs();
const groupName = props.name || `rate-${Math.random().toString(36).slice(2, 9)}`;
const currentValue = ref(props.modelValue ?? props.value);

// 외부 값이 바뀌면 내부 선택 값을 동기화합니다.
watch(
  () => [props.modelValue, props.value],
  ([modelValue, value]) => {
    if (modelValue !== undefined || value !== undefined) currentValue.value = modelValue ?? value;
  },
);
const stars = computed(() =>
  Array.from({ length: Math.max(1, Number(props.count)) }, (_, index) => index + 1),
);

// 크기·반별·초기화·읽기 전용 상태를 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'rate', // 별점 루트 필수 클래스입니다.
    props.size === 'sm' && 'rate_sm', // 작은 크기 변형입니다.
    props.size === 'lg' && 'rate_lg', // 큰 크기 변형입니다.
    props.allowHalf && 'rate_allow-half', // 반별 선택 변형입니다.
    props.clearable && 'rate_clearable', // 초기화 버튼 표시 모드입니다.
    props.readonly && 'is-readonly', // 읽기 전용 상태 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 fieldset/div로 전달합니다.
const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
const starPath =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'; // 별 아이콘 path입니다.

function update(next) {
  // 내부 상태와 v-model·change 이벤트를 함께 갱신합니다.
  currentValue.value = next;
  emit('update:modelValue', next);
  emit('change', next);
}
function readonlyState(star) {
  // 읽기 전용 별의 채움·반별 상태를 계산합니다.
  return (currentValue.value ?? 0) >= star
    ? 'is-filled'
    : props.allowHalf && (currentValue.value ?? 0) >= star - 0.5
      ? 'is-half'
      : '';
}
</script>

<template>
  <!-- 읽기 전용은 radio 없이 채움·반별 상태로만 표시합니다. -->
  <div
    v-if="readonly"
    v-bind="rootAttrs"
    :class="classes"
    data-component="Rate"
    role="img"
    :aria-label="attrs['aria-label'] || `${count}점 만점 중 ${currentValue ?? 0}점`"
  >
    <div class="rate_stars">
      <span
        v-for="star in stars"
        :key="star"
        class="rate_star-readonly"
        :class="readonlyState(star)"
      >
        <span class="rate_star-graphic" aria-hidden="true">
          <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path :d="starPath" />
          </svg>
          <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor">
            <path :d="starPath" />
          </svg>
          <span v-if="readonlyState(star) === 'is-half'" class="rate_star-icon-half"
            ><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
              <path :d="starPath" /></svg
          ></span>
        </span>
      </span>
    </div>
    <span v-if="currentValue != null" class="rate_value">{{ currentValue }}</span>
  </div>
  <!-- 편집 가능 모드는 fieldset과 radio로 별점을 선택합니다. -->
  <fieldset
    v-else
    v-bind="rootAttrs"
    :class="classes"
    data-component="Rate"
    :data-ripple="ripple ? 'true' : undefined"
    :disabled="disabled"
  >
    <legend v-if="legend" class="rate_legend">{{ legend }}</legend>
    <div class="rate_control">
      <div class="rate_stars">
        <label
          v-for="star in stars"
          :key="star"
          class="rate_star"
          :data-ripple="ripple ? 'true' : undefined"
        >
          <input
            v-if="allowHalf"
            type="radio"
            class="rate_input rate_input-half"
            :name="groupName"
            :value="star - 0.5"
            :checked="currentValue === star - 0.5"
            :disabled="disabled"
            @change="update(star - 0.5)"
          />
          <input
            type="radio"
            class="rate_input"
            :name="groupName"
            :value="star"
            :checked="currentValue === star"
            :disabled="disabled"
            @change="update(star)"
          />
          <template v-if="allowHalf">
            <button
              type="button"
              class="rate_star-half rate_star-half-left"
              tabindex="-1"
              aria-hidden="true"
              :disabled="disabled"
              @click.prevent.stop="update(star - 0.5)"
            />
            <button
              type="button"
              class="rate_star-half rate_star-half-right"
              tabindex="-1"
              aria-hidden="true"
              :disabled="disabled"
              @click.prevent.stop="update(star)"
            />
          </template>
          <span class="rate_star-graphic" aria-hidden="true">
            <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
              <path :d="starPath" />
            </svg>
            <svg
              class="rate_star-icon rate_star-icon-filled"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path :d="starPath" />
            </svg>
            <span v-if="allowHalf" class="rate_star-icon-half"
              ><svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
                <path :d="starPath" /></svg
            ></span>
          </span>
          <span class="rate_star-label">{{ star }}점</span>
        </label>
      </div>
      <button
        v-if="clearable"
        type="button"
        class="rate_clear"
        :data-ripple="ripple ? 'true' : undefined"
        aria-label="별점 초기화"
        title="초기화"
        @click="update(undefined)"
      >
        <svg
          class="rate_clear-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <output v-if="currentValue != null" class="rate_value">{{ currentValue }}점</output>
    </div>
  </fieldset>
</template>
