<!--
  Divider 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

defineOptions({ name: 'UxkmDivider', inheritAttrs: false });
const props = defineProps({
  as: { type: [String, Object, Function], default: undefined },
  tag: { type: String, default: 'auto' },
  vertical: Boolean,
  dashed: Boolean,
  plain: Boolean,
  orient: { type: String, default: undefined },
  orientation: { type: String, default: '' },
  label: String,
});
const attrs = useAttrs();
const slots = useSlots();
const orientations = new Set(['', 'left', 'right']);
const tags = new Set(['auto', 'hr', 'div', 'span']);
const hasContent = computed(() => Boolean(slots.default) || Boolean(props.label));
const resolvedOrient = computed(() => props.orient ?? props.orientation);
const resolvedTag = computed(() => (tags.has(props.tag) ? props.tag : 'auto'));
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
const classes = computed(() =>
  [
    'divider',
    props.vertical && 'divider_vertical',
    props.dashed && 'divider_dashed',
    props.plain && 'divider_plain',
    orientations.has(resolvedOrient.value) &&
      resolvedOrient.value &&
      `divider_orient-${resolvedOrient.value}`,
    attrs.class,
  ].filter(Boolean),
);
</script>

<template>
  <component
    :is="rootTag"
    v-bind="attrs"
    :class="classes"
    data-component="Divider"
    :aria-hidden="vertical ? 'true' : undefined"
    ><slot v-if="rootTag !== 'hr'">{{ label }}</slot></component
  >
</template>
