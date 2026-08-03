<script setup>
import { computed, provide } from 'vue';

const props = defineProps({
  placement: {
    type: String,
    default: 'bottom-center',
    validator: (value) => [
      'top-start', 'top-center', 'top-end',
      'middle-start', 'middle-end',
      'bottom-start', 'bottom-center', 'bottom-end',
    ].includes(value),
  },
  label: String,
});

const placement = computed(() => props.placement);
provide('uxkm-snackbar-placement', placement);
</script>

<template>
  <Teleport to="body">
    <div
      class="snackbar_region"
      :class="`snackbar_region-${placement}`"
      :role="label ? 'region' : undefined"
      :aria-label="label"
    >
      <slot />
    </div>
  </Teleport>
</template>
