<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="page_intro">
    <h1>{{ title }}</h1>
    <p v-if="$slots.lead" class="lead">
      <slot name="lead" />
    </p>
  </div>
</template>
