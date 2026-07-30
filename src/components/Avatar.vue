<script setup>
import { computed, ref, useAttrs, useSlots, watch } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false, name: 'Avatar' });

const props = defineProps({
  src: String,
  alt: String,
  initials: String,
  color: String,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'xl'].includes(v),
  },
  square: Boolean,
  badgeColor: String,
  badgeLabel: String,
  ariaHidden: Boolean,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const imageError = ref(false);

const formatCode = createComponentFormatter('Avatar', {
  defaults: { size: 'md' },
  booleanProps: new Set(['square', 'ariaHidden']),
  skipProps: ['badgeColor', 'badgeLabel'],
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['avatar'];
  if (props.color) classes.push(`color_${props.color}`);
  if (props.size === 'sm') classes.push('avatar_sm');
  if (props.size === 'lg') classes.push('avatar_lg');
  if (props.size === 'xl') classes.push('avatar_xl');
  if (props.square) classes.push('avatar_square');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const showImage = computed(() => Boolean(props.src) && !imageError.value);

watch(
  () => props.src,
  () => {
    imageError.value = false;
  }
);

const showInitials = computed(
  () => !showImage.value && !slots.icon && props.initials
);
</script>

<template>
  <span
    ref="rootRef"
    :class="rootClass"
    :aria-hidden="ariaHidden ? 'true' : undefined"
  >
    <img
      v-if="showImage"
      class="avatar_image"
      :src="src"
      :alt="alt || ''"
      @error="imageError = true"
    />
    <slot v-else-if="$slots.icon" name="icon" />
    <template v-else-if="showInitials">{{ initials }}</template>
    <span
      v-if="badgeColor"
      class="avatar_badge"
      :class="`color_${badgeColor}`"
      :aria-label="badgeLabel"
    />
  </span>
</template>
