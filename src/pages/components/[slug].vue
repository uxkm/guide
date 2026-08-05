<script setup>
import DocView from '@/components/guide/DocView.vue';
import { getDocByKey } from '@/utils/doc-loader';

definePageMeta({
  validate: (route) => getDocByKey(String(route.params.slug || '')) !== null,
});

const route = useRoute();
const slug = computed(() => String(route.params.slug || ''));
</script>

<template>
  <DocView :doc-key="slug" />
</template>
