<script setup>
import { ref } from 'vue';
import { useNavbarListDemoCode } from '@/composables/useDemoCode';

const rootRef = ref(null);

useNavbarListDemoCode(rootRef);
</script>

<template>
  <ul ref="rootRef" class="navbar_list">
    <slot />
  </ul>
</template>
