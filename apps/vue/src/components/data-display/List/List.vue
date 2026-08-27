<!--
  List 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, provide, useAttrs } from 'vue';

// 목록 종류에 맞는 시맨틱 루트와 공통 변형 클래스를 선택합니다.
defineOptions({ name: 'UxkmList', inheritAttrs: false });
const VARIANT_TAG = { default: 'ul', bullet: 'ul', ordered: 'ol', definition: 'dl' };
const VARIANT_CLASS = {
  bullet: 'list_bullet',
  ordered: 'list_ordered',
  definition: 'list_definition',
};
const props = defineProps({
  bordered: Boolean, // 테두리 목록입니다.
  split: Boolean, // 항목 사이 구분선을 둡니다.
  block: Boolean, // 블록형 목록입니다.
  size: { type: String, default: 'md', validator: (value) => ['md', 'compact'].includes(value) }, // compact면 조밀한 크기입니다.
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'bullet', 'ordered', 'definition'].includes(value),
  }, // default · bullet · ordered · definition 목록 변형입니다.
  tag: {
    type: String,
    default: undefined,
    validator: (value) => ['ul', 'ol', 'dl', 'div'].includes(value),
  }, // 명시적 루트 태그(ul · ol · dl · div)입니다.
  layout: {
    type: String,
    default: 'block',
    validator: (value) => ['block', 'inline'].includes(value),
  }, // block · inline 레이아웃입니다.
  inlineLabelWidth: String, // inline 레이아웃의 라벨 너비 CSS 값입니다.
  inlineGap: String, // inline 레이아웃의 간격 CSS 값입니다.
  descAlign: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  }, // 정의 목록 설명 정렬입니다.
});
const attrs = useAttrs();
const rootTag = computed(() => props.tag ?? VARIANT_TAG[props.variant]);
// ListItem이 부모 목록 의미에 맞는 태그를 고르도록 context를 제공합니다.
provide(
  'uxkmListContext',
  computed(() => ({ tag: rootTag.value, variant: props.variant })),
);
// 외형과 정의 목록 배치를 list_* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    'list',
    VARIANT_CLASS[props.variant],
    props.bordered && 'list_bordered',
    props.split && 'list_divider',
    props.block && 'list_block',
    props.size === 'compact' && 'list_compact',
    props.layout === 'inline' && 'list_inline',
    props.variant === 'definition' && props.descAlign === 'right' && 'list_desc-right',
    attrs.class,
  ].filter(Boolean),
);
const rootStyle = computed(() => ({
  ...(typeof attrs.style === 'object' ? attrs.style : {}),
  ...(props.layout === 'inline' && props.inlineLabelWidth
    ? { '--list-inline-label-width': props.inlineLabelWidth }
    : {}),
  ...(props.layout === 'inline' && props.inlineGap ? { '--list-inline-gap': props.inlineGap } : {}),
}));
const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, role: _role, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <!-- ul·ol·dl·div 의미와 필요한 list role을 동적 루트에 적용합니다. -->
  <component
    :is="rootTag"
    v-bind="fallthroughAttrs"
    :class="classes"
    data-component="List"
    :role="attrs.role ?? (rootTag === 'div' ? 'list' : undefined)"
    :style="rootStyle"
    ><slot
  /></component>
</template>
