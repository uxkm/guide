<!--
  Divider 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

// 속성을 계산된 Divider 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmDivider', inheritAttrs: false });

// 방향, 점선, plain, 레이블 위치, 간격·두께·길이와 루트 태그를 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: undefined }, // 지정하면 루트 요소를 강제로 바꿉니다.
  tag: { type: String, default: 'auto' }, // auto면 내용·방향에 따라 hr/div/span을 고릅니다.
  vertical: Boolean, // 세로 구분선으로 표시합니다.
  dashed: Boolean, // 점선 스타일을 적용합니다.
  plain: Boolean, // 레이블 굵기를 낮춥니다.
  orient: { type: String, default: undefined }, // 레이블 위치(left·right)를 지정합니다.
  orientation: { type: String, default: '' }, // orient의 이전 호환 이름입니다.
  marginY: { type: [String, Number], default: '' }, // 가로면 상·하, 세로면 좌·우 간격입니다.
  thickness: { type: [String, Number], default: '' }, // 선 두께입니다. 프리셋·rem 숫자·CSS 길이입니다.
  height: { type: [String, Number], default: '' }, // 세로 구분선 길이입니다. 프리셋·rem 숫자·CSS 길이입니다.
  label: String, // slot이 없을 때 표시할 레이블입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const slots = useSlots();

const orientations = new Set(['', 'left', 'right']); // 지원하는 레이블 위치입니다.
const tags = new Set(['auto', 'hr', 'div', 'span']); // 지원하는 루트 태그 모드입니다.
const margins = ['', 'xs', 'sm', 'md', 'lg', 'xl', 'none']; // 간격 프리셋입니다.
const thicknesses = ['', 'xs', 'sm', 'md', 'lg', 'xl', 'none']; // 두께 프리셋입니다.
const heights = ['', 'xs', 'sm', 'md', 'lg', 'xl']; // 세로 길이 프리셋입니다.

/** 프리셋은 클래스, 숫자(rem)·CSS 길이는 CSS 변수로 적용합니다. */
function resolveLength(value, { presets, classPrefix, cssVar, skip = ['', 'md'] }) {
  if (presets.includes(value)) {
    return {
      className: value && !skip.includes(value) ? `${classPrefix}-${value}` : '',
      style: undefined,
    };
  }
  if (value === '' || value == null) return { className: '', style: undefined };
  const resolved =
    typeof value === 'number' && Number.isFinite(value) && value >= 0
      ? `${value}rem`
      : String(value).trim();
  if (!resolved) return { className: '', style: undefined };
  return { className: '', style: { [cssVar]: resolved } };
}

// slot 또는 label이 있으면 레이블형 구분선입니다.
const hasContent = computed(() => Boolean(slots.default) || Boolean(props.label));
// orient가 있으면 우선하고, 없으면 orientation 별칭을 사용합니다.
const resolvedOrient = computed(() => props.orient ?? props.orientation);
const resolvedTag = computed(() => (tags.has(props.tag) ? props.tag : 'auto'));
// as가 있으면 최우선이고, 아니면 tag·vertical·content로 루트 태그를 결정합니다.
const rootTag = computed(
  () =>
    props.as ||
    (resolvedTag.value !== 'auto'
      ? resolvedTag.value
      : props.vertical
        ? 'span'
        : hasContent.value
          ? 'div'
          : 'hr'),
);

// 가로에서는 상·하, 세로에서는 좌·우 CSS 변수에 간격을 연결합니다.
const resolvedMargin = computed(() =>
  resolveLength(props.marginY, {
    presets: margins,
    classPrefix: 'divider_margin',
    cssVar: props.vertical ? '--divider-current-margin-x' : '--divider-current-margin-y',
    skip: [''],
  }),
);
const resolvedThickness = computed(() =>
  resolveLength(props.thickness, {
    presets: thicknesses,
    classPrefix: 'divider_thickness',
    cssVar: '--divider-current-thickness',
  }),
);
const resolvedHeight = computed(() =>
  props.vertical
    ? resolveLength(props.height, {
        presets: heights,
        classPrefix: 'divider_height',
        cssVar: '--divider-current-height',
        skip: [''],
      })
    : { className: '', style: undefined },
);

// 방향·점선·plain·레이블 위치·간격·두께·길이 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    'divider', // 구분선 기본 클래스입니다.
    props.vertical && 'divider_vertical', // 세로 구분선 변형입니다.
    props.dashed && 'divider_dashed', // 점선 변형입니다.
    props.plain && 'divider_plain', // 레이블 굵기를 낮추는 변형입니다.
    orientations.has(resolvedOrient.value) &&
      resolvedOrient.value &&
      `divider_orient-${resolvedOrient.value}`, // 검증된 레이블 위치입니다.
    resolvedMargin.value.className, // 검증된 간격 프리셋 클래스입니다.
    resolvedThickness.value.className, // 검증된 두께 프리셋 클래스입니다.
    resolvedHeight.value.className, // 검증된 세로 길이 프리셋 클래스입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// 수치 prop CSS 변수와 전달된 style을 병합합니다.
const rootStyle = computed(() => {
  const next = {
    ...(typeof attrs.style === 'object' && attrs.style ? attrs.style : {}),
    ...resolvedMargin.value.style,
    ...resolvedThickness.value.style,
    ...resolvedHeight.value.style,
  };
  return Object.keys(next).length ? next : undefined;
});

// class·style은 별도 바인딩하므로 fallthrough에서 제외합니다.
const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <!-- 루트 태그를 결정하고 속성·클래스·세로선 aria-hidden을 전달합니다. -->
  <component
    :is="rootTag"
    v-bind="fallthroughAttrs"
    :class="classes"
    :style="rootStyle"
    data-component="Divider"
    :aria-hidden="vertical ? 'true' : undefined"
  >
    <!-- hr에는 자식을 두지 않고, 그 외에는 slot 또는 label을 렌더링합니다. -->
    <slot v-if="rootTag !== 'hr'">{{ label }}</slot>
  </component>
</template>
