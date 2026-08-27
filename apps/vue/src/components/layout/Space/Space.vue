<!--
  Space 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmSpace', inheritAttrs: false });
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' },
  gap: { type: String, default: undefined },
  size: { type: String, default: '' },
  vertical: Boolean,
  wrap: Boolean,
  block: Boolean,
  align: { type: String, default: '' },
  justify: { type: String, default: '' },
});
const attrs = useAttrs();
const sizes = new Set(['', 'xs', 'sm', 'md', 'lg', 'xl']);
const aligns = new Set(['', 'start', 'center', 'end', 'baseline', 'stretch']);
const justifies = new Set(['', 'start', 'center', 'end', 'between']);
const resolvedSize = computed(() => (props.gap ?? props.size) || 'md');
const classes = computed(() =>
  [
    'space',
    sizes.has(resolvedSize.value) &&
      resolvedSize.value !== 'md' &&
      `space_gap-${resolvedSize.value}`,
    props.vertical && 'space_vertical',
    props.wrap && 'space_wrap',
    props.block && 'space_block',
    aligns.has(props.align) && props.align && `space_align-${props.align}`,
    justifies.has(props.justify) && props.justify && `space_justify-${props.justify}`,
    attrs.class,
  ].filter(Boolean),
);
</script>

<template>
  <component :is="as" v-bind="attrs" :class="classes" data-component="Space"
    ><slot>Space</slot></component
  >
</template>
