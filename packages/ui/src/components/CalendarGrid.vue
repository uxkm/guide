<script setup>
import { computed } from 'vue';

const props = defineProps({
  week: Boolean,
});

const gridClass = computed(() => [
  'calendar_grid',
  { 'calendar_grid-week': props.week },
]);
</script>

<template>
  <div :class="gridClass" role="grid">
    <slot />
  </div>
</template>
