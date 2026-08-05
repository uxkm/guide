<script setup>
import DocView from '@/components/guide/DocView.vue';
import { hasDocByKey } from '@/utils/doc-loader';

definePageMeta({
  validate: (route) => hasDocByKey(String(route.params.slug || '')),
});

const route = useRoute();
const slug = computed(() => String(route.params.slug || ''));
</script>

<template>
  <DocView :doc-key="slug" />
</template>
