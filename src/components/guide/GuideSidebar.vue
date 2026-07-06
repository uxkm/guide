<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { RouterLink } from 'vue-router';
import { NAV_GROUPS } from '@/data/navigation';

const props = defineProps({
  activeNav: {
    type: String,
    default: 'intro',
  },
});

const emit = defineEmits(['update:collapsed']);

const STORAGE_NAV_GROUPS = 'guide-nav-groups';
const STORAGE_SIDEBAR_COLLAPSED = 'guide-sidebar-collapsed';
const DESKTOP_BREAKPOINT = 1024;

const sidebarOpen = ref(false);
const sidebarCollapsed = ref(false);
const groupState = ref({});
const navRef = ref(null);

function readNavGroupState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_NAV_GROUPS) || '{}');
  } catch {
    return {};
  }
}

function saveNavGroupState() {
  try {
    localStorage.setItem(STORAGE_NAV_GROUPS, JSON.stringify(groupState.value));
  } catch {
    /* ignore */
  }
}

function isDesktop() {
  return window.innerWidth > DESKTOP_BREAKPOINT;
}

function isGroupExpanded(groupId, hasActive) {
  if (groupState.value[groupId] !== undefined) {
    return groupState.value[groupId];
  }
  return hasActive || true;
}

function toggleGroup(groupId, hasActive) {
  const current = isGroupExpanded(groupId, hasActive);
  groupState.value = { ...groupState.value, [groupId]: !current };
  saveNavGroupState();
}

function syncCollapsed() {
  emit('update:collapsed', sidebarCollapsed.value);
}

function openSidebar() {
  sidebarOpen.value = true;
  document.body.style.overflow = 'hidden';
  scrollActiveLinkIntoView();
}

function closeSidebar() {
  sidebarOpen.value = false;
  document.body.style.overflow = '';
}

function toggleSidebarCollapse() {
  if (!isDesktop()) return;
  sidebarCollapsed.value = !sidebarCollapsed.value;
  try {
    localStorage.setItem(STORAGE_SIDEBAR_COLLAPSED, sidebarCollapsed.value ? '1' : '0');
  } catch {
    /* ignore */
  }
  syncCollapsed();
}

onMounted(() => {
  groupState.value = readNavGroupState();
  try {
    sidebarCollapsed.value = localStorage.getItem(STORAGE_SIDEBAR_COLLAPSED) === '1';
  } catch {
    /* ignore */
  }
  syncCollapsed();
  ensureActiveGroupExpanded();
  scrollActiveLinkIntoView();

  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
  document.body.style.overflow = '';
});

function onResize() {
  if (isDesktop()) {
    closeSidebar();
    try {
      sidebarCollapsed.value = localStorage.getItem(STORAGE_SIDEBAR_COLLAPSED) === '1';
    } catch {
      sidebarCollapsed.value = false;
    }
    syncCollapsed();
  } else {
    sidebarCollapsed.value = false;
    syncCollapsed();
  }
}

function ensureActiveGroupExpanded() {
  NAV_GROUPS.forEach((group, index) => {
    const hasActive = group.items.some((i) => i.slug === props.activeNav);
    if (hasActive && groupState.value[`group-${index}`] === false) {
      groupState.value = { ...groupState.value, [`group-${index}`]: true };
    }
  });
}

function scrollActiveLinkIntoView(smooth = false) {
  nextTick(() => {
    const nav = navRef.value;
    if (!nav) return;

    const activeLink = nav.querySelector('.guide_nav-link.is-active');
    if (!activeLink) return;

    const targetScroll = nav.scrollTop + (activeLink.getBoundingClientRect().top - nav.getBoundingClientRect().top);

    nav.scrollTo({
      top: Math.max(0, targetScroll),
      behavior: smooth ? 'smooth' : 'auto',
    });
  });
}

watch(
  () => props.activeNav,
  () => {
    ensureActiveGroupExpanded();
    scrollActiveLinkIntoView(true);
  },
);

defineExpose({
  openSidebar,
  closeSidebar,
  toggleSidebarCollapse,
});
</script>

<template>
  <aside
    id="guide-sidebar"
    class="guide_sidebar"
    :class="{ 'is-open': sidebarOpen }"
    aria-label="컴포넌트 메뉴"
  >
    <div class="guide_sidebar-brand">
      <RouterLink class="guide_sidebar-back" to="/">← UXKM Guide</RouterLink>
      <div class="guide_sidebar-title">UI Components</div>
      <p class="guide_sidebar-desc">Vue · Vite</p>
    </div>

    <nav ref="navRef" class="guide_nav">
      <div
        v-for="(group, index) in NAV_GROUPS"
        :key="group.title"
        class="guide_nav-group"
        :class="{ 'is-collapsed': !isGroupExpanded(`group-${index}`, group.items.some((i) => i.slug === props.activeNav)) }"
      >
        <button
          type="button"
          class="guide_nav-heading"
          data-ripple
          :aria-expanded="String(isGroupExpanded(`group-${index}`, group.items.some((i) => i.slug === props.activeNav)))"
          @click="toggleGroup(`group-${index}`, group.items.some((i) => i.slug === props.activeNav))"
        >
          <span class="guide_nav-heading-text">{{ group.title }}</span>
          <svg class="guide_nav-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <ul class="guide_nav-list">
          <li v-for="item in group.items" :key="item.slug">
            <RouterLink
              :to="item.to"
              class="guide_nav-link"
              data-ripple
              :class="{ 'is-active': item.slug === props.activeNav }"
              @click="closeSidebar"
            >
              <span>{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </aside>

  <div
    id="guide-overlay"
    class="guide_overlay"
    :class="{ 'is-visible': sidebarOpen }"
    aria-hidden="true"
    @click="closeSidebar"
  />
</template>
