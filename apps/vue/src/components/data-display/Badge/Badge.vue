<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmBadge', inheritAttrs: false });

const props = defineProps({
  label: String,
  color: { type: String, default: 'primary' },
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) },
  dot: Boolean,
  count: Boolean,
  dotOnly: Boolean,
  ariaLabel: String
});

const attrs = useAttrs();
const classes = computed(() => [
  props.dotOnly ? 'badge_dot-only' : 'badge', `color_${props.color}`,
  props.size !== 'md' && `badge_${props.size}`, !props.dotOnly && props.dot && 'badge_dot',
  !props.dotOnly && props.count && 'badge_count', attrs.class
].filter(Boolean));
</script>

<template>
  <span
    v-bind="attrs"
    :class="classes"
    :aria-label="ariaLabel"
    :role="dotOnly ? 'status' : undefined"
    data-component="Badge"
  ><template v-if="!dotOnly"><slot>{{ label }}</slot></template></span>
</template>
