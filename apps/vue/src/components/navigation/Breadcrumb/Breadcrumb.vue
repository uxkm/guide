<script setup>
import { computed, useAttrs } from 'vue';
import BreadcrumbItem from './BreadcrumbItem.vue';
defineOptions({ name: 'UxkmBreadcrumb', inheritAttrs: false });
const props = defineProps({ items: { type: Array, default: () => [] }, ariaLabel: { type: String, default: '경로' }, separator: { type: String, default: 'chevron' }, size: { type: String, default: 'md' } });
const attrs = useAttrs();
const separator = computed(() => ['chevron', 'slash', 'dot'].includes(props.separator) ? props.separator : 'chevron');
const size = computed(() => ['sm', 'md', 'lg'].includes(props.size) ? props.size : 'md');
const classes = computed(() => ['breadcrumb', separator.value !== 'chevron' && `breadcrumb_sep-${separator.value}`, size.value !== 'md' && `breadcrumb_${size.value}`].filter(Boolean));
</script>
<template>
  <nav v-bind="attrs" :class="classes" :aria-label="ariaLabel" data-component="Breadcrumb"><ol class="breadcrumb_list"><template v-if="items.length"><BreadcrumbItem v-for="(item, index) in items" :key="item.key ?? `${item.label}-${index}`" v-bind="item" :current="item.current ?? index === items.length - 1" /></template><slot v-else /></ol></nav>
</template>
