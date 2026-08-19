<script setup>defineOptions({ name: 'UxkmMenuGroup' }); defineProps({ title: { type: String, required: true } });</script>
<template><li class="menu_group" role="presentation"><span class="menu_group-title">{{ title }}</span></li></template>
