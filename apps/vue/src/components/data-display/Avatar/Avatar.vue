<script setup>
import { computed, ref, useAttrs, watch } from 'vue';

defineOptions({ name: 'UxkmAvatar', inheritAttrs: false });

const props = defineProps({
  src: String,
  alt: { type: String, default: '' },
  initials: String,
  color: String,
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value) },
  square: Boolean,
  badgeColor: String,
  badgeLabel: String,
  ariaHidden: Boolean
});

const attrs = useAttrs();
const imageError = ref(false);
const showImage = computed(() => Boolean(props.src) && !imageError.value);
const classes = computed(() => [
  'avatar', props.color && `color_${props.color}`,
  props.size !== 'md' && `avatar_${props.size}`, props.square && 'avatar_square', attrs.class
].filter(Boolean));

watch(() => props.src, () => { imageError.value = false; });
</script>

<template>
  <span v-bind="attrs" :class="classes" :aria-hidden="ariaHidden || undefined" data-component="Avatar">
    <img v-if="showImage" class="avatar_image" :src="src" :alt="alt" @error="imageError = true" />
    <slot v-else name="icon"><slot>{{ initials }}</slot></slot>
    <span v-if="badgeColor" class="avatar_badge" :class="`color_${badgeColor}`" :aria-label="badgeLabel" />
  </span>
</template>
