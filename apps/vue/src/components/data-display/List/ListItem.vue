<script setup>
import { computed, inject, useAttrs, useSlots } from 'vue';

defineOptions({ name: 'UxkmListItem', inheritAttrs: false });
const props = defineProps({
  title: String, description: String, meta: String,
  tag: { type: String, default: 'auto', validator: (value) => ['auto', 'li', 'dt', 'dd'].includes(value) }
});
const attrs = useAttrs();
const slots = useSlots();
const context = inject('uxkmListContext', computed(() => ({ tag: 'ul', variant: 'default' })));
const definitionPair = computed(() => props.tag === 'auto' && context.value.tag === 'dl' && Boolean(props.title && props.description));
const rootTag = computed(() => {
  if (props.tag !== 'auto') return props.tag;
  if (context.value.tag === 'dl') return props.title ? 'dt' : 'dd';
  if (context.value.tag === 'div') return 'div';
  return 'li';
});
const hasContent = computed(() => Boolean(props.title || props.description || props.meta || slots.default));
const fallthroughAttrs = computed(() => { const { class: _class, role: _role, ...rest } = attrs; return rest; });
</script>

<template>
  <template v-if="definitionPair">
    <dt v-bind="fallthroughAttrs" class="list_title" :class="attrs.class">{{ title }}</dt>
    <dd class="list_desc">{{ description }}</dd>
  </template>
  <component v-else :is="rootTag" v-bind="fallthroughAttrs" class="list_item" :class="attrs.class" data-component="ListItem" :role="attrs.role ?? (context.tag === 'div' ? 'listitem' : undefined)">
    <slot name="prefix" />
    <div v-if="hasContent" class="list_content"><slot><span v-if="title" class="list_title">{{ title }}</span><span v-if="meta" class="list_meta">{{ meta }}</span><span v-if="description" class="list_desc">{{ description }}</span></slot></div>
    <span v-if="$slots.extra" class="list_extra"><slot name="extra" /></span>
    <span v-if="$slots.actions" class="list_action"><slot name="actions" /></span>
  </component>
</template>
