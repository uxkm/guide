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

const STORAGE_SIDEBAR_COLLAPSED = 'guide-sidebar-collapsed';
const DESKTOP_BREAKPOINT = 1024;

const sidebarOpen = ref(false);
const sidebarCollapsed = ref(false);
/** 명시적으로 true인 그룹만 펼침. 활성 하위 메뉴가 있는 그룹은 펼침 */
const groupState = ref(getGroupStateForActiveNav(props.activeNav));
const navRef = ref(null);

/** activeNav가 속한 그룹만 펼침 상태로 초기화 */
function getGroupStateForActiveNav(activeNav) {
  const state = {};
  NAV_GROUPS.forEach((group, index) => {
    if (group.flat) return;
    if (group.items.some((item) => item.slug === activeNav)) {
      state[`group-${index}`] = true;
    }
  });
  return state;
}

function isDesktop() {
  return window.innerWidth > DESKTOP_BREAKPOINT;
}

function isGroupExpanded(groupId) {
  return groupState.value[groupId] === true;
}

function toggleGroup(groupId) {
  groupState.value = {
    ...groupState.value,
    [groupId]: !groupState.value[groupId],
  };
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

function ensureActiveGroupExpanded() {
  const activeGroups = getGroupStateForActiveNav(props.activeNav);
  if (!Object.keys(activeGroups).length) return;

  let changed = false;
  const next = { ...groupState.value };
  Object.entries(activeGroups).forEach(([groupId, open]) => {
    if (open && next[groupId] !== true) {
      next[groupId] = true;
      changed = true;
    }
  });
  if (changed) groupState.value = next;
}

function scrollActiveLinkIntoView(smooth = false) {
  nextTick(() => {
    const nav = navRef.value;
    if (!nav) return;

    const activeLink = nav.querySelector('.guide_nav-link.is-active');
    if (!activeLink) return;

    const targetScroll =
      nav.scrollTop + (activeLink.getBoundingClientRect().top - nav.getBoundingClientRect().top);

    nav.scrollTo({
      top: Math.max(0, targetScroll),
      behavior: smooth ? 'smooth' : 'auto',
    });
  });
}

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

onMounted(() => {
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
      <template v-for="(group, index) in NAV_GROUPS" :key="group.title">
        <ul v-if="group.flat" class="guide_nav-list guide_nav-list-top">
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

        <div
          v-else
          class="guide_nav-group"
          :class="{ 'is-collapsed': !isGroupExpanded(`group-${index}`) }"
        >
          <button
            type="button"
            class="guide_nav-heading"
            data-ripple
            :aria-expanded="String(isGroupExpanded(`group-${index}`))"
            @click="toggleGroup(`group-${index}`)"
          >
            <span class="guide_nav-heading-text">{{ group.title }}</span>
            <svg
              class="guide_nav-chevron"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
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
      </template>
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
