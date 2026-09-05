<template>
  <section class="section" :id="id" :aria-labelledby="`${id}-title`">
    <h2 :id="`${id}-title`">{{ title }}</h2>
    <p v-if="path"><code class="typo_code">{{ path }}</code></p>
    <div class="component_demo">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  path: { type: String, default: '' },
});
</script>
