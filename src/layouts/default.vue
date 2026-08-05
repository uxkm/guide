<script setup>
import { computed, ref, provide, onMounted } from 'vue';
import GuideSidebar from '@/components/guide/GuideSidebar.vue';
import GuideHeader from '@/components/guide/GuideHeader.vue';
import { NAV_GROUPS } from '@/data/navigation';

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
  const path = route.path.replace(/\/$/, '') || '/';
  if (path === '/') return 'intro';
  if (path.startsWith('/components/')) return path.slice('/components/'.length);
  return path.slice(1);
});

const activeNav = computed(() => docKey.value);

const pageTitle = computed(() => {
  for (const group of NAV_GROUPS) {
    const item = group.items.find(({ slug }) => slug === docKey.value);
    if (item) return item.label;
  }
  return 'UXKM Guide';
});

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
      <slot />
    </div>
  </div>
</template>
