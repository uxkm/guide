<script setup>
import { computed, inject, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { formatComponentCode, hasComplexDefaultSlot } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  title: String,
  description: String,
  meta: String,
  tag: {
    type: String,
    default: 'auto',
    validator: (v) => ['auto', 'li', 'dt', 'dd'].includes(v),
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const listContext = inject('listContext', computed(() => ({ tag: 'ul', variant: 'default' })));

const isDefinitionPair = computed(() => {
  if (props.tag !== 'auto') return false;
  if (listContext.value.tag !== 'dl') return false;
  return Boolean(props.title && props.description);
});

const resolvedTag = computed(() => {
  if (isDefinitionPair.value) return null;
  if (props.tag !== 'auto') return props.tag;
  if (listContext.value.tag === 'dl') {
    if (props.title && !props.description) return 'dt';
    if (props.description && !props.title) return 'dd';
  }
  if (listContext.value.tag === 'div') return 'div';
  return 'li';
});

const itemRole = computed(() => {
  if (attrs.role !== undefined) return attrs.role;
  return listContext.value.tag === 'div' ? 'listitem' : undefined;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, role, ...rest } = attrs;
  return rest;
});

const formatCode = (itemProps, itemSlots, itemAttrs) => {
  const hasComplexDefault = hasComplexDefaultSlot(itemSlots);
  const hasPrefix = Boolean(itemSlots.prefix?.());
  const isDefPair =
    itemProps.tag === 'auto' &&
    listContext.value.tag === 'dl' &&
    itemProps.title &&
    itemProps.description;

  return formatComponentCode('ListItem', itemProps, itemSlots, itemAttrs, {
    labelProp: 'title',
    defaults: { tag: 'auto' },
    selfClosing: isDefPair || (!hasPrefix && !hasComplexDefault),
  });
};

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const hasContent = () =>
  Boolean(props.title || props.description || props.meta || slots.default);
</script>

<template>
  <template v-if="isDefinitionPair">
    <dt ref="rootRef" class="list_title" :class="attrs.class" v-bind="fallthroughAttrs">
      {{ title }}
    </dt>
    <dd class="list_desc" data-demo-fragment-part>
      {{ description }}
    </dd>
  </template>
  <component
    v-else
    :is="resolvedTag"
    ref="rootRef"
    class="list_item"
    :class="attrs.class"
    :role="itemRole"
    v-bind="fallthroughAttrs"
  >
    <slot name="prefix" />
    <div v-if="hasContent()" class="list_content">
      <slot>
        <span v-if="title" class="list_title">{{ title }}</span>
        <span v-if="meta" class="list_meta">{{ meta }}</span>
        <span v-if="description" class="list_desc">{{ description }}</span>
      </slot>
    </div>
    <span v-if="$slots.extra" class="list_extra">
      <slot name="extra" />
    </span>
    <span v-if="$slots.actions" class="list_action">
      <slot name="actions" />
    </span>
  </component>
</template>
