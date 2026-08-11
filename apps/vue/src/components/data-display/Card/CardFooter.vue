<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmCardFooter', inheritAttrs: false });
const props = defineProps({ between: Boolean });
const attrs = useAttrs();
const classes = computed(() => ['card_footer', props.between && 'card_footer-between', attrs.class].filter(Boolean));
const rootAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
</script>
<template><div v-bind="rootAttrs" :class="classes"><slot /></div></template>
