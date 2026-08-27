<!--
  Container 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 컴포넌트 이름을 지정하고 속성을 루트 요소에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmContainer', inheritAttrs: false });

// as는 루트 요소, size는 최대 너비, fluid는 최대 너비 제한 해제를 제어합니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' },
  size: { type: String, default: '' },
  fluid: Boolean,
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 지원하지 않는 size 값이 CSS 클래스로 전달되지 않도록 검증합니다.
const sizes = new Set(['', 'sm', 'md', 'lg', 'xl']);
const resolvedSize = computed(() => (sizes.has(props.size) ? props.size : ''));

// 상태에 맞는 공통 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    'container',
    resolvedSize.value && `container_${resolvedSize.value}`,
    props.fluid && 'container_fluid',
    attrs.class,
  ].filter(Boolean),
);
</script>

<template>
  <!-- as로 루트 요소를 결정하고 나머지 속성 및 계산된 클래스를 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="Container">
    <!-- 호출 위치의 콘텐츠를 기본 slot으로 렌더링합니다. -->
    <slot>Container</slot>
  </component>
</template>
