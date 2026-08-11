<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmCardHeader', inheritAttrs: false });
defineProps({ title: [String, Number], subtitle: [String, Number] });
const attrs = useAttrs();
const rootAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
</script>
<template><div v-bind="rootAttrs" class="card_header" :class="attrs.class"><div class="card_header-main"><slot><h3 v-if="title != null" class="card_title">{{ title }}</h3><p v-if="subtitle != null" class="card_subtitle">{{ subtitle }}</p></slot></div><div v-if="$slots.extra" class="card_extra"><slot name="extra" /></div></div></template>
