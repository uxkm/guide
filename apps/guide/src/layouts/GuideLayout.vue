<script setup>
import { computed, ref, provide, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GuideSidebar from '@/components/guide/GuideSidebar.vue';
import GuideHeader from '@/components/guide/GuideHeader.vue';
import { getDocByKey } from '@/utils/doc-loader';

const STORAGE_SIDEBAR_COLLAPSED = 'guide-sidebar-collapsed';

const route = useRoute();
const sidebarRef = ref(null);
const sidebarCollapsed = ref(false);

provide('guideSidebar', {
  openSidebar: () => sidebarRef.value?.openSidebar(),
  toggleSidebarCollapse: () => sidebarRef.value?.toggleSidebarCollapse(),
  sidebarCollapsed,
});

const docKey = computed(() => {
  if (route.name === 'intro') return 'intro';
  if (route.name === 'getting-started') return 'getting-started';
  return String(route.name || 'intro');
});

const activeNav = computed(() => getDocByKey(docKey.value)?.meta.activeNav || docKey.value);

const pageTitle = computed(() => getDocByKey(docKey.value)?.meta.pageTitle || 'UXKM Guide');

onMounted(() => {
  try {
    sidebarCollapsed.value = localStorage.getItem(STORAGE_SIDEBAR_COLLAPSED) === '1';
  } catch {
    /* ignore */
  }
});
</script>

<template>
  <div class="guide_layout" :class="{ 'is-sidebar-collapsed': sidebarCollapsed }">
    <GuideSidebar
      ref="sidebarRef"
      :active-nav="activeNav"
      @update:collapsed="sidebarCollapsed = $event"
    />

    <div class="guide_main">
      <GuideHeader :title="pageTitle" />
      <router-view />
    </div>
  </div>
</template>
