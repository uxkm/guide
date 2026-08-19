<script setup>
import { computed, useAttrs, useSlots } from 'vue';
import Icon from '../../basic/Icon/Icon.vue';
defineOptions({ name: 'UxkmEmpty', inheritAttrs: false });
const props = defineProps({ description: String, size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, simple: Boolean, block: Boolean });
const attrs = useAttrs();
const slots = useSlots();
const classes = computed(() => ['empty', props.size !== 'md' && `empty_${props.size}`, props.simple && 'empty_simple', props.block && 'empty_block'].filter(Boolean));
</script>

<template>
  <div v-bind="attrs" :class="classes" data-component="Empty" role="status">
    <div v-if="!simple" class="empty_image" data-slot="icon" aria-hidden="true">
      <slot name="icon"><slot name="image"><Icon name="inbox" /></slot></slot>
    </div>
    <div v-if="description || slots.default || slots.description" class="empty_desc" data-slot="description"><slot name="description"><slot><p>{{ description }}</p></slot></slot></div>
    <div v-if="slots.footer" class="empty_footer"><slot name="footer" /></div>
  </div>
</template>
