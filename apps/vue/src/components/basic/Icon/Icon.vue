<!--
  Icon 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 속성을 최외곽 요소에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmIcon', inheritAttrs: false });

const props = defineProps({
  name: { type: String, default: 'plus' }, // paths에 등록된 아이콘 이름입니다.
  color: String, // color_* 공통 색상 클래스입니다.
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  }, // sm · md · lg · xl 크기입니다.
  inline: Boolean, // 텍스트와 인라인 정렬합니다.
  spin: Boolean, // 회전 애니메이션입니다.
  button: Boolean, // button 래퍼로 감쌉니다.
  circle: Boolean, // 원형 배경 래퍼로 감쌉니다.
  square: Boolean, // 사각형 배경 래퍼로 감쌉니다.
  pulse: Boolean, // circle과 함께 펄스 효과를 켭니다.
  ripple: { type: Boolean, default: true }, // button일 때 리플 효과를 켭니다.
  ariaLabel: String, // 명시적 접근성 이름입니다.
  title: String, // SVG title과 접근성 이름 후보입니다.
});

const attrs = useAttrs();
const label = computed(() => props.ariaLabel || attrs['aria-label'] || props.title);
// 래퍼가 없을 때 SVG에 붙는 클래스입니다.
const svgClass = computed(() =>
  [
    'icon',
    props.size !== 'md' && `icon_${props.size}`,
    props.spin && 'icon_spin',
    !props.button && !props.circle && !props.square && props.color && `color_${props.color}`,
    !props.button && !props.circle && !props.square && props.inline && 'icon_inline',
    !props.button && !props.circle && !props.square && attrs.class,
  ].filter(Boolean),
);
// button · circle · square 래퍼에 붙는 클래스입니다.
const wrapperClass = computed(() =>
  [
    props.button ? 'icon_button' : props.circle ? 'icon_circle' : 'icon_square',
    props.color && `color_${props.color}`,
    props.inline && 'icon_inline',
    props.circle && props.pulse && 'icon_pulse',
    props.circle && props.size === 'sm' && 'icon_circle-sm',
    props.circle && props.size === 'lg' && 'icon_circle-lg',
    attrs.class,
  ].filter(Boolean),
);
const wrapperTag = computed(() => (props.button ? 'button' : 'span'));
</script>

<template>
  <!-- button · circle · square는 래퍼를 두고 내부 SVG는 aria-hidden입니다. -->
  <component
    v-if="button || circle || square"
    :is="wrapperTag"
    v-bind="attrs"
    :class="wrapperClass"
    :type="button ? 'button' : undefined"
    :data-ripple="button ? (ripple ? 'true' : 'false') : undefined"
    :aria-label="label"
    :aria-hidden="!button && !label ? 'true' : undefined"
    :role="!button && label ? 'img' : undefined"
  >
    <svg
      class="icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <slot>
        <path v-if="name === 'plus'" d="M12 5v14M5 12h14" />
        <path v-else-if="name === 'minus'" d="M5 12h14" />
        <path v-else-if="name === 'download'" d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
        <path v-else-if="name === 'upload'" d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4" />
        <path v-else-if="name === 'trash'" d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6" />
        <path v-else-if="name === 'check'" d="m5 12 4 4L19 6" />
        <path
          v-else-if="name === 'warning' || name === 'alert-triangle'"
          d="M12 3 2.5 20h19L12 3ZM12 9v4m0 3h.01"
        />
        <path v-else-if="name === 'chevron' || name === 'chevron-right'" d="m9 6 6 6-6 6" />
        <path v-else-if="name === 'chevron-left'" d="m15 6-6 6 6 6" />
        <path v-else-if="name === 'chevron-down'" d="m6 9 6 6 6-6" />
        <path v-else-if="name === 'search'" d="M18 18 21 21M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
        <path v-else-if="name === 'inbox'" d="M4 5h16l2 9v5H2v-5l2-9ZM2 14h5l2 3h6l2-3h5" />
        <path v-else-if="name === 'menu'" d="M4 6h16M4 12h16M4 18h16" />
        <path v-else-if="name === 'edit'" d="M4 20h4L19 9l-4-4L4 16v4Zm9.5-13.5 4 4" />
        <path v-else-if="name === 'close'" d="m6 6 12 12M18 6 6 18" />
        <path v-else-if="name === 'home'" d="m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7" />
        <path
          v-else-if="name === 'user'"
          d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21a8 8 0 0 1 16 0"
        />
        <path
          v-else-if="name === 'star'"
          d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"
        />
        <path
          v-else-if="name === 'info'"
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 11v6m0-10h.01"
        />
        <path
          v-else-if="name === 'check-circle'"
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-13 0 3 3 5-6"
        />
        <path
          v-else-if="name === 'x-circle'"
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-12-3 6 6m0-6-6 6"
        />
        <path
          v-else-if="name === 'bell'"
          d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21h-4"
        />
        <path v-else-if="name === 'loader'" d="M21 12a9 9 0 1 1-6.2-8.6" />
        <path v-else-if="name === 'arrow-left'" d="M19 12H5m7 7-7-7 7-7" />
        <path v-else d="M12 5v14M5 12h14" />
      </slot>
    </svg>
  </component>

  <svg
    v-else
    v-bind="attrs"
    :class="svgClass"
    :aria-hidden="label ? undefined : 'true'"
    :aria-label="label"
    :role="label ? 'img' : undefined"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <title v-if="title">{{ title }}</title>
    <slot>
      <path v-if="name === 'plus'" d="M12 5v14M5 12h14" />
      <path v-else-if="name === 'minus'" d="M5 12h14" />
      <path v-else-if="name === 'download'" d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
      <path v-else-if="name === 'upload'" d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4" />
      <path v-else-if="name === 'trash'" d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6" />
      <path v-else-if="name === 'check'" d="m5 12 4 4L19 6" />
      <path
        v-else-if="name === 'warning' || name === 'alert-triangle'"
        d="M12 3 2.5 20h19L12 3ZM12 9v4m0 3h.01"
      />
      <path v-else-if="name === 'search'" d="M18 18 21 21M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
      <path v-else-if="name === 'chevron-down'" d="m6 9 6 6 6-6" />
      <path v-else-if="name === 'chevron' || name === 'chevron-right'" d="m9 6 6 6-6 6" />
      <path v-else-if="name === 'chevron-left'" d="m15 6-6 6 6 6" />
      <path v-else-if="name === 'inbox'" d="M4 5h16l2 9v5H2v-5l2-9ZM2 14h5l2 3h6l2-3h5" />
      <path v-else-if="name === 'menu'" d="M4 6h16M4 12h16M4 18h16" />
      <path v-else-if="name === 'edit'" d="M4 20h4L19 9l-4-4L4 16v4Zm9.5-13.5 4 4" />
      <path v-else-if="name === 'close'" d="m6 6 12 12M18 6 6 18" />
      <path
        v-else-if="name === 'star'"
        d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"
      />
      <path
        v-else-if="name === 'info'"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 11v6m0-10h.01"
      />
      <path
        v-else-if="name === 'check-circle'"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-13 0 3 3 5-6"
      />
      <path
        v-else-if="name === 'x-circle'"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-12-3 6 6m0-6-6 6"
      />
      <path v-else-if="name === 'bell'" d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14 21h-4" />
      <path v-else-if="name === 'loader'" d="M21 12a9 9 0 1 1-6.2-8.6" />
      <path v-else-if="name === 'arrow-left'" d="M19 12H5m7 7-7-7 7-7" />
      <path v-else d="M12 5v14M5 12h14" />
    </slot>
  </svg>
</template>
