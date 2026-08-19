<script setup>
defineOptions({ name: 'UxkmNavbarItem' });
defineProps({ label: String, href: { type: String, default: '#' }, active: Boolean });
defineEmits(['click']);
</script>
<template><li class="navbar_item"><a :href="href" :class="['navbar_link', active && 'is-active']" :aria-current="active ? 'page' : undefined" @click.prevent="$emit('click', $event)"><slot>{{ label }}</slot><slot name="badge" /></a></li></template>
