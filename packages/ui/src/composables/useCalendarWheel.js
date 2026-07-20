import { onMounted, onUnmounted, nextTick } from 'vue';

function getWheelItems(list) {
  return [...list.querySelectorAll('.calendar_wheel-item')];
}

function getListCenter(list) {
  const rect = list.getBoundingClientRect();
  return rect.top + rect.height / 2;
}

function getItemCenter(item) {
  const rect = item.getBoundingClientRect();
  return rect.top + rect.height / 2;
}

function getItemAtCenter(list) {
  const items = getWheelItems(list);
  const center = getListCenter(list);
  let closest = null;
  let closestDist = Infinity;

  items.forEach((item) => {
    const dist = Math.abs(getItemCenter(item) - center);
    if (dist < closestDist) {
      closestDist = dist;
      closest = item;
    }
  });

  return closest;
}

/**
 * iOS 스타일 휠 피커 — 스크롤 스냅·선택 항목 중앙 정렬
 */
export function useCalendarWheelColumn(listRef, { onSelect } = {}) {
  let wheelSnapping = false;
  let scrollTimer;

  function scrollToItem(item, { skipScroll = false } = {}) {
    const list = listRef.value;
    if (!list || !item) {
      return;
    }

    if (!skipScroll) {
      const delta = getItemCenter(item) - getListCenter(list);
      if (Math.abs(delta) > 1) {
        wheelSnapping = true;
        list.scrollTop += delta;
        requestAnimationFrame(() => {
          wheelSnapping = false;
        });
      }
    }

    const label = item.textContent?.trim();
    if (label) {
      onSelect?.(label);
    }
  }

  function selectCenteredItem({ skipScroll = false } = {}) {
    const list = listRef.value;
    if (!list) {
      return;
    }

    const item = getItemAtCenter(list);
    if (item) {
      scrollToItem(item, { skipScroll });
    }
  }

  function snapToNearest() {
    selectCenteredItem();
  }

  function onScroll() {
    if (wheelSnapping) {
      return;
    }

    selectCenteredItem({ skipScroll: true });

    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(snapToNearest, 80);
  }

  function scrollToSelected() {
    const list = listRef.value;
    if (!list) {
      return;
    }

    const selected = list.querySelector('.calendar_wheel-item.is-selected');
    if (selected) {
      requestAnimationFrame(() => scrollToItem(selected));
    }
  }

  function selectByIndex(index) {
    const list = listRef.value;
    if (!list) {
      return;
    }

    const items = getWheelItems(list);
    const item = items[index];
    if (item) {
      scrollToItem(item);
    }
  }

  function moveSelection(direction) {
    const list = listRef.value;
    if (!list) {
      return;
    }

    const items = getWheelItems(list);
    const selected = list.querySelector('.calendar_wheel-item.is-selected');
    const selectedIndex = items.indexOf(selected);
    const nextIndex = selectedIndex + direction;

    if (nextIndex < 0 || nextIndex >= items.length) {
      return;
    }

    scrollToItem(items[nextIndex]);
  }

  onMounted(() => {
    const list = listRef.value;
    if (!list) {
      return;
    }

    list.addEventListener('scroll', onScroll, { passive: true });
    nextTick(() => scrollToSelected());
  });

  onUnmounted(() => {
    const list = listRef.value;
    if (list) {
      list.removeEventListener('scroll', onScroll);
    }
    clearTimeout(scrollTimer);
  });

  return {
    scrollToSelected,
    selectByIndex,
    moveSelection,
  };
}
