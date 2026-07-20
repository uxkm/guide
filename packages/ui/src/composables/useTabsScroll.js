import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

const SCROLL_EDGE = 1;

export function useTabsScroll({ listRef, enabled, onTabsChange }) {
  const canScrollPrev = ref(false);
  const canScrollNext = ref(false);
  const hasOverflow = ref(false);

  let resizeObserver = null;

  function updateScrollState() {
    const list = listRef.value;

    if (!enabled.value || !list) {
      canScrollPrev.value = false;
      canScrollNext.value = false;
      hasOverflow.value = false;
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = list;
    const maxScroll = scrollWidth - clientWidth;

    hasOverflow.value = maxScroll > SCROLL_EDGE;
    canScrollPrev.value = scrollLeft > SCROLL_EDGE;
    canScrollNext.value = scrollLeft < maxScroll - SCROLL_EDGE;
  }

  function scheduleUpdate() {
    nextTick(() => {
      requestAnimationFrame(updateScrollState);
    });
  }

  function scrollByDirection(direction) {
    const list = listRef.value;
    if (!list) return;

    const amount = Math.max(list.clientWidth * 0.75, 120);
    list.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }

  function scrollPrev() {
    scrollByDirection(-1);
  }

  function scrollNext() {
    scrollByDirection(1);
  }

  function scrollTabToCenter(tab) {
    const list = listRef.value;
    if (!enabled.value || !list || !tab) return;

    const listRect = list.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const tabLeft = tabRect.left - listRect.left + list.scrollLeft;
    const tabCenter = tabLeft + tabRect.width / 2;
    const viewportCenter = list.clientWidth / 2;
    const maxScroll = list.scrollWidth - list.clientWidth;
    const targetScroll = tabCenter - viewportCenter;

    list.scrollTo({
      left: Math.max(0, Math.min(targetScroll, maxScroll)),
      behavior: 'smooth',
    });
  }

  function scrollActiveTabIntoView() {
    const list = listRef.value;
    if (!enabled.value || !list) return;

    const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');
    scrollTabToCenter(activeTab);
  }

  function onListClick(event) {
    const tab = event.target.closest('[role="tab"]');
    if (!tab || !listRef.value?.contains(tab)) return;

    scheduleUpdate();
    nextTick(() => {
      requestAnimationFrame(() => scrollTabToCenter(tab));
    });
  }

  function onListKeydown() {
    scheduleUpdate();
    nextTick(() => {
      requestAnimationFrame(scrollActiveTabIntoView);
    });
  }

  function observeTabs() {
    resizeObserver?.disconnect();
    const list = listRef.value;
    if (!list) return;

    resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(list);
    list.querySelectorAll('.tabs_tab').forEach((tab) => resizeObserver.observe(tab));
  }

  onMounted(() => {
    scheduleUpdate();
    observeTabs();

    const list = listRef.value;
    if (!list) return;

    list.addEventListener('scroll', updateScrollState, { passive: true });
    list.addEventListener('click', onListClick);
    list.addEventListener('keydown', onListKeydown);
  });

  onUnmounted(() => {
    const list = listRef.value;
    if (list) {
      list.removeEventListener('scroll', updateScrollState);
      list.removeEventListener('click', onListClick);
      list.removeEventListener('keydown', onListKeydown);
    }
    resizeObserver?.disconnect();
  });

  watch(enabled, scheduleUpdate);

  if (onTabsChange) {
    watch(onTabsChange, () => {
      scheduleUpdate();
      observeTabs();
    });
  }

  return {
    canScrollPrev,
    canScrollNext,
    hasOverflow,
    scrollPrev,
    scrollNext,
    scrollTabToCenter,
    scrollActiveTabIntoView,
    updateScrollState: scheduleUpdate,
  };
}
