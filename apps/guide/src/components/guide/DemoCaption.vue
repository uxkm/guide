<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="demo_caption-marker" :data-demo-caption="text" hidden />
</template>
