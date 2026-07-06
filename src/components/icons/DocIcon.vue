<script setup>
import { computed, useAttrs } from 'vue';
import { commonIconPaths } from '@/data/common-icons';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const attrs = useAttrs();
const elements = computed(() => commonIconPaths[props.name] ?? []);
const svgClass = computed(() => ['icon', attrs.class].filter(Boolean));
</script>

<template>
  <svg
    :class="svgClass"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <component
      :is="el.tag"
      v-for="(el, i) in elements"
      :key="i"
      v-bind="el.attrs"
    />
  </svg>
</template>
