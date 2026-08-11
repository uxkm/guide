<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmFormActions', inheritAttrs: false });
const props = defineProps({ as: { type: [String, Object, Function], default: 'div' } });
const attrs = useAttrs();
const classes = computed(() => ['form_actions', attrs.class].filter(Boolean));
</script>

<template><component :is="as" v-bind="attrs" :class="classes"><slot /></component></template>
