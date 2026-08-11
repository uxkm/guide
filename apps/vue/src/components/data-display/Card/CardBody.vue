<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmCardBody', inheritAttrs: false });
const attrs = useAttrs();
const rootAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
</script>
<template><div v-bind="rootAttrs" class="card_body" :class="attrs.class"><slot /></div></template>
