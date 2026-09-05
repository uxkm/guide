<template>
  <a :href="to" class="category_card" @click.prevent="onClick">
    <slot />
  </a>
</template>

<script setup>
import { navigate } from '../router/index.js';

const props = defineProps({
  to: { type: String, required: true },
});

function onClick() {
  navigate(props.to);
}
</script>
