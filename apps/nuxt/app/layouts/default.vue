<template>
  <div class="uxkm-app-layout">
    <ThemeToggle />
    <slot />
  </div>
</template>

<script setup>
import ThemeToggle from '../components/demo/ThemeToggle.vue';
</script>
