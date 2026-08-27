<!--
  Tag 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// class를 포함한 전달 속성을 최외곽 요소에 직접 적용합니다.
defineOptions({ name: 'UxkmTag', inheritAttrs: false });

// 외형, 상호작용, 상태와 접근성 값을 prop으로 받습니다.
const props = defineProps({
  label: String, // children 대신 표시할 텍스트입니다.
  color: { type: String, default: 'primary' }, // color_* 공통 색상 클래스입니다.
  variant: { // filled · solid · outline · borderless 스킨입니다.
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'solid', 'outline', 'borderless'].includes(value),
  }, // 텍스트 변형 키입니다. VARIANTS 맵을 사용합니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // sm · md · lg 크기입니다.
  round: Boolean, // 둥근 pill 형태입니다.
  checkable: Boolean, // 선택 가능한 태그입니다.
  add: Boolean, // 추가(+) 트리거 태그입니다.
  closable: Boolean, // 닫기 버튼을 표시합니다.
  selected: Boolean, // 선택된 상태입니다.
  disabled: Boolean, // 비활성 상태입니다.
  ripple: { type: Boolean, default: undefined }, // 리플 효과입니다. 상호작용 태그에서 기본 켜짐입니다.
  href: String, // 링크형 태그의 주소입니다.
  closeLabel: String, // 닫기 버튼 접근성 이름입니다.
});

const attrs = useAttrs();
const emit = defineEmits(['click', 'close']);
// prop에 따라 루트 태그와 닫기 버튼 분리 여부를 계산합니다.
const interactive = computed(() => props.checkable || props.add || Boolean(props.href));
const splitControl = computed(() => props.closable && interactive.value);
const rootTag = computed(() =>
  splitControl.value ? 'span' : props.checkable || props.add ? 'button' : props.href ? 'a' : 'span',
);
const controlTag = computed(() => (props.checkable || props.add ? 'button' : 'a'));
// prop을 tag_* · color_* · is-* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'tag',
    `color_${props.color}`,
    props.variant !== 'filled' && `tag_${props.variant}`,
    props.size !== 'md' && `tag_${props.size}`,
    props.round && 'tag_round',
    props.checkable && 'tag_checkable',
    props.add && 'tag_add',
    props.selected && 'is-selected',
    props.disabled && 'is-disabled',
    attrs.class,
  ].filter(Boolean),
);
// 클릭 가능한 Tag에만 기본 리플 효과를 적용합니다.
const rippleAttrs = computed(() =>
  props.ripple === false
    ? { 'data-ripple': 'false' }
    : props.ripple === true || interactive.value
      ? { 'data-ripple': 'true' }
      : {},
);
const rootAttrs = computed(() => ({ ...attrs, ...(splitControl.value ? {} : rippleAttrs.value) }));

// 비활성 상태에서는 기본 동작과 사용자 이벤트를 차단합니다.
function handleClick(event) {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  emit('click', event);
}

// 닫기 이벤트는 Tag 본문 클릭으로 전파하지 않습니다.
function handleClose(event) {
  event.stopPropagation();
  emit('close', event);
}
</script>

<template>
  <!-- 정적·버튼·링크 의미에 맞는 동적 루트와 접근성 상태를 렌더링합니다. -->
  <component
    :is="rootTag"
    v-bind="rootAttrs"
    :class="classes"
    data-component="Tag"
    :type="rootTag === 'button' ? 'button' : undefined"
    :href="rootTag === 'a' && !disabled ? href : undefined"
    :disabled="rootTag === 'button' ? disabled : undefined"
    :aria-disabled="rootTag !== 'button' && disabled ? 'true' : undefined"
    :aria-pressed="checkable && !splitControl ? String(selected) : undefined"
    :tabindex="rootTag === 'a' && disabled ? -1 : undefined"
    @click="splitControl || handleClick($event)"
  >
    <!-- 닫기 가능한 인터랙티브 Tag는 본문 컨트롤과 닫기 버튼을 분리합니다. -->
    <component
      :is="controlTag"
      v-if="splitControl"
      class="tag_control"
      v-bind="rippleAttrs"
      :type="controlTag === 'button' ? 'button' : undefined"
      :href="controlTag === 'a' && !disabled ? href : undefined"
      :disabled="controlTag === 'button' ? disabled : undefined"
      :aria-disabled="controlTag === 'a' && disabled ? 'true' : undefined"
      :aria-pressed="checkable ? String(selected) : undefined"
      :tabindex="controlTag === 'a' && disabled ? -1 : undefined"
      @click="handleClick"
    >
      <span v-if="$slots.icon" class="tag_icon" aria-hidden="true"><slot name="icon" /></span>
      <slot>{{ label }}</slot>
    </component>
    <template v-else>
      <span v-if="$slots.icon" class="tag_icon" aria-hidden="true"><slot name="icon" /></span>
      <slot>{{ label }}</slot>
    </template>
    <button
      v-if="closable"
      class="tag_close"
      type="button"
      :aria-label="closeLabel || `${label || ''} 태그 제거`"
      :disabled="disabled || undefined"
      @click="handleClose"
    >
      <svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    </button>
  </component>
</template>
