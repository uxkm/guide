<script setup>defineProps({ active: Boolean, disabled: Boolean });</script>
<template><button type="button" :class="['tabs_tab', active && 'is-active', disabled && 'is-disabled']" role="tab" :aria-selected="active" :disabled="disabled || undefined"><slot /></button></template>
