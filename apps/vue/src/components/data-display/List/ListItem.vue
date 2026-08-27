<!--
  ListItem 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, inject, useAttrs, useSlots } from 'vue';

defineOptions({ name: 'UxkmListItem', inheritAttrs: false });
const props = defineProps({
  title: String, // 항목 제목입니다.
  description: String, // 항목 설명입니다.
  meta: String, // 메타 정보입니다.
  tag: {
    type: String,
    default: 'auto',
    validator: (value) => ['auto', 'li', 'dt', 'dd'].includes(value),
  }, // auto면 부모 목록에 맞는 태그(li · dt · dd)입니다.
});
const attrs = useAttrs();
const slots = useSlots();
const context = inject(
  'uxkmListContext',
  computed(() => ({ tag: 'ul', variant: 'default' })),
);
// 정의 목록의 title+description 조합은 형제 dt·dd 쌍으로 렌더링합니다.
const definitionPair = computed(
  () =>
    props.tag === 'auto' && context.value.tag === 'dl' && Boolean(props.title && props.description),
);
// 명시적 태그가 없으면 부모 ul·ol·dl·div 의미에 맞춰 항목 루트를 선택합니다.
const rootTag = computed(() => {
  if (props.tag !== 'auto') return props.tag;
  if (context.value.tag === 'dl') return props.title ? 'dt' : 'dd';
  if (context.value.tag === 'div') return 'div';
  return 'li';
});
const hasContent = computed(() =>
  Boolean(props.title || props.description || props.meta || slots.default),
);
const fallthroughAttrs = computed(() => {
  const { class: _class, role: _role, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <!-- prefix·본문·extra·actions slot을 독립 영역으로 배치합니다. -->
  <template v-if="definitionPair">
    <dt v-bind="fallthroughAttrs" class="list_title" :class="attrs.class">{{ title }}</dt>
    <dd class="list_desc">{{ description }}</dd>
  </template>
  <component
    v-else
    :is="rootTag"
    v-bind="fallthroughAttrs"
    class="list_item"
    :class="attrs.class"
    data-component="ListItem"
    :role="attrs.role ?? (context.tag === 'div' ? 'listitem' : undefined)"
  >
    <slot name="prefix" />
    <div v-if="hasContent" class="list_content">
      <slot
        ><span v-if="title" class="list_title">{{ title }}</span
        ><span v-if="meta" class="list_meta">{{ meta }}</span
        ><span v-if="description" class="list_desc">{{ description }}</span></slot
      >
    </div>
    <span v-if="$slots.extra" class="list_extra"><slot name="extra" /></span>
    <span v-if="$slots.actions" class="list_action"><slot name="actions" /></span>
  </component>
</template>
