<script setup>
import DocView from '@/components/guide/DocView.vue';
import { getDocByKey } from '@/utils/doc-loader';

const route = useRoute();
const slug = computed(() => String(route.params.slug || ''));

if (!getDocByKey(slug.value)) {
  throw createError({ statusCode: 404, statusMessage: '문서를 찾을 수 없습니다' });
}
</script>

<template>
  <DocView :doc-key="slug" />
</template>
