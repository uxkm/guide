<!--
  Divider 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

// 속성을 계산된 Divider 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmDivider', inheritAttrs: false });

// 방향, 점선, plain, 레이블 위치와 루트 태그를 prop으로 받습니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: undefined }, // 지정하면 루트 요소를 강제로 바꿉니다.
  tag: { type: String, default: 'auto' }, // auto면 내용·방향에 따라 hr/div/span을 고릅니다.
  vertical: Boolean, // 세로 구분선으로 표시합니다.
  dashed: Boolean, // 점선 스타일을 적용합니다.
  plain: Boolean, // 레이블 굵기를 낮춥니다.
  orient: { type: String, default: undefined }, // 레이블 위치(left·right)를 지정합니다.
  orientation: { type: String, default: '' }, // orient의 이전 호환 이름입니다.
  label: String, // slot이 없을 때 표시할 레이블입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const slots = useSlots();

const orientations = new Set(['', 'left', 'right']); // 지원하는 레이블 위치입니다.
const tags = new Set(['auto', 'hr', 'div', 'span']); // 지원하는 루트 태그 모드입니다.

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

// 방향·점선·plain·레이블 위치 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    'divider', // 구분선 기본 클래스입니다.
    props.vertical && 'divider_vertical', // 세로 구분선 변형입니다.
    props.dashed && 'divider_dashed', // 점선 변형입니다.
    props.plain && 'divider_plain', // 레이블 굵기를 낮추는 변형입니다.
    orientations.has(resolvedOrient.value) &&
      resolvedOrient.value &&
      `divider_orient-${resolvedOrient.value}`, // 검증된 레이블 위치입니다.
    attrs.class, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);
</script>

<template>
  <!-- 루트 태그를 결정하고 속성·클래스·세로선 aria-hidden을 전달합니다. -->
  <component
    :is="rootTag"
    v-bind="attrs"
    :class="classes"
    data-component="Divider"
    :aria-hidden="vertical ? 'true' : undefined"
  >
    <!-- hr에는 자식을 두지 않고, 그 외에는 slot 또는 label을 렌더링합니다. -->
    <slot v-if="rootTag !== 'hr'">{{ label }}</slot>
  </component>
</template>
