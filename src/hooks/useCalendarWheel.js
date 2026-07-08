import { useCallback, useEffect, useRef } from 'react';

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
  const wheelSnappingRef = useRef(false);
  const scrollTimerRef = useRef(null);

  const scrollToItem = useCallback(
    (item, { skipScroll = false } = {}) => {
      const list = listRef.current;
      if (!list || !item) {
        return;
      }

      if (!skipScroll) {
        const delta = getItemCenter(item) - getListCenter(list);
        if (Math.abs(delta) > 1) {
          wheelSnappingRef.current = true;
          list.scrollTop += delta;
          requestAnimationFrame(() => {
            wheelSnappingRef.current = false;
          });
        }
      }

      const label = item.textContent?.trim();
      if (label) {
        onSelect?.(label);
      }
    },
    [listRef, onSelect],
  );

  const selectCenteredItem = useCallback(
    ({ skipScroll = false } = {}) => {
      const list = listRef.current;
      if (!list) {
        return;
      }

      const item = getItemAtCenter(list);
      if (item) {
        scrollToItem(item, { skipScroll });
      }
    },
    [listRef, scrollToItem],
  );

  const snapToNearest = useCallback(() => {
    selectCenteredItem();
  }, [selectCenteredItem]);

  const onScroll = useCallback(() => {
    if (wheelSnappingRef.current) {
      return;
    }

    selectCenteredItem({ skipScroll: true });

    clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(snapToNearest, 80);
  }, [selectCenteredItem, snapToNearest]);

  const scrollToSelected = useCallback(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }

    const selected = list.querySelector('.calendar_wheel-item.is-selected');
    if (selected) {
      requestAnimationFrame(() => scrollToItem(selected));
    }
  }, [listRef, scrollToItem]);

  const selectByIndex = useCallback(
    (index) => {
      const list = listRef.current;
      if (!list) {
        return;
      }

      const items = getWheelItems(list);
      const item = items[index];
      if (item) {
        scrollToItem(item);
      }
    },
    [listRef, scrollToItem],
  );

  const moveSelection = useCallback(
    (direction) => {
      const list = listRef.current;
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
    },
    [listRef, scrollToItem],
  );

  useEffect(() => {
    const list = listRef.current;
    if (!list) {
      return undefined;
    }

    list.addEventListener('scroll', onScroll, { passive: true });
    const frame = requestAnimationFrame(() => scrollToSelected());

    return () => {
      cancelAnimationFrame(frame);
      list.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimerRef.current);
    };
  }, [listRef, onScroll, scrollToSelected]);

  return {
    scrollToSelected,
    selectByIndex,
    moveSelection,
  };
}
