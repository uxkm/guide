<script setup>
import { computed } from 'vue';
import { formatDocDescription } from '@/utils/format-doc-description';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  headingId: {
    type: String,
    required: true,
  },
  description: String,
});

const formattedDescription = computed(() => formatDocDescription(props.description));
</script>

<template>
  <section class="section" :aria-labelledby="headingId">
    <h2 :id="headingId">{{ title }}</h2>
    <p v-if="description" v-html="formattedDescription" />
    <div class="demo_section-preview demo_section-preview-start">
      <slot />
    </div>
  </section>
</template>
