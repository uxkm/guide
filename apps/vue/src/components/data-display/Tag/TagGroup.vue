<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmTagGroup', inheritAttrs: false });
const props = defineProps({ tight: Boolean, ariaLabel: String });
const attrs = useAttrs();
const classes = computed(() => ['tag_group', props.tight && 'tag_group-tight', attrs.class].filter(Boolean));
</script>

<template>
  <div v-bind="attrs" :class="classes" :aria-label="ariaLabel" data-component="TagGroup" role="group"><slot /></div>
</template>
