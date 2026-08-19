<script setup>
defineOptions({ name: 'UxkmBreadcrumbEllipsis' });
defineProps({ expanded: Boolean, label: { type: String, default: '숨겨진 경로 보기' } });
defineEmits(['click']);
</script>
<template><li class="breadcrumb_item"><button type="button" class="breadcrumb_ellipsis" :aria-label="label" :aria-expanded="expanded" data-breadcrumb-ellipsis @click="$emit('click', $event)"><slot>…</slot></button></li></template>
