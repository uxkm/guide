import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

export function useTabsIndicator({ listRef, enabled, vertical, variant, onTabsChange }) {
  const indicatorStyle = ref(null);

  let resizeObserver = null;

  function updateIndicator() {
    if (!enabled.value || !listRef.value) {
      indicatorStyle.value = null;
      return;
    }

    const list = listRef.value;
    const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');

    if (!activeTab) {
      indicatorStyle.value = null;
      return;
    }

    const listRect = list.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    const left = tabRect.left - listRect.left + list.scrollLeft;
    const top = tabRect.top - listRect.top + list.scrollTop;
    const width = tabRect.width;
    const height = tabRect.height;
    const indicatorThickness = 2;

    if (vertical.value) {
      indicatorStyle.value = {
        width: `${indicatorThickness}px`,
        height: `${height}px`,
        transform: `translate3d(${left + width - indicatorThickness}px, ${top}px, 0)`,
      };
      return;
    }

    if (variant.value === 'pill') {
      indicatorStyle.value = {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate3d(${left}px, ${top}px, 0)`,
      };
      return;
    }

    indicatorStyle.value = {
      width: `${width}px`,
      height: `${indicatorThickness}px`,
      transform: `translate3d(${left}px, ${top + height - indicatorThickness}px, 0)`,
    };
  }

  function scheduleUpdate() {
    nextTick(() => {
      requestAnimationFrame(updateIndicator);
    });
  }

  function observeTabs() {
    resizeObserver?.disconnect();
    if (!listRef.value) return;

    resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(listRef.value);
    listRef.value.querySelectorAll('.tabs_tab').forEach((tab) => resizeObserver.observe(tab));
  }

  function onListInteraction() {
    scheduleUpdate();
  }

  onMounted(() => {
    scheduleUpdate();
    observeTabs();

    const list = listRef.value;
    if (!list) return;

    list.addEventListener('click', onListInteraction);
    list.addEventListener('keydown', onListInteraction);
    list.addEventListener('scroll', onListInteraction, { passive: true });
  });

  onUnmounted(() => {
    const list = listRef.value;
    if (list) {
      list.removeEventListener('click', onListInteraction);
      list.removeEventListener('keydown', onListInteraction);
      list.removeEventListener('scroll', onListInteraction);
    }
    resizeObserver?.disconnect();
  });

  watch([enabled, vertical, variant], scheduleUpdate);

  if (onTabsChange) {
    watch(onTabsChange, () => {
      scheduleUpdate();
      observeTabs();
    });
  }

  return {
    indicatorStyle,
    updateIndicator: scheduleUpdate,
  };
}
