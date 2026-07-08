import { useCallback, useEffect, useRef, useState } from 'react';

const SCROLL_EDGE = 1;

function resolveRef(value) {
  if (value != null && typeof value === 'object' && 'current' in value) {
    return value.current;
  }
  return value;
}

export function useTabsScroll({ listRef, enabled, onTabsChange }) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const resizeObserverRef = useRef(null);
  const enabledValue = resolveRef(enabled);
  const tabsChangeValue =
    onTabsChange != null && typeof onTabsChange === 'object' && 'current' in onTabsChange
      ? onTabsChange.current
      : onTabsChange;

  const updateScrollState = useCallback(() => {
    const list = listRef.current;

    if (!enabledValue || !list) {
      setCanScrollPrev(false);
      setCanScrollNext(false);
      setHasOverflow(false);
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = list;
    const maxScroll = scrollWidth - clientWidth;

    setHasOverflow(maxScroll > SCROLL_EDGE);
    setCanScrollPrev(scrollLeft > SCROLL_EDGE);
    setCanScrollNext(scrollLeft < maxScroll - SCROLL_EDGE);
  }, [enabledValue, listRef]);

  const scheduleUpdate = useCallback(() => {
    queueMicrotask(() => {
      requestAnimationFrame(updateScrollState);
    });
  }, [updateScrollState]);

  const scrollByDirection = useCallback(
    (direction) => {
      const list = listRef.current;
      if (!list) return;

      const amount = Math.max(list.clientWidth * 0.75, 120);
      list.scrollBy({ left: direction * amount, behavior: 'smooth' });
    },
    [listRef],
  );

  const scrollPrev = useCallback(() => {
    scrollByDirection(-1);
  }, [scrollByDirection]);

  const scrollNext = useCallback(() => {
    scrollByDirection(1);
  }, [scrollByDirection]);

  const scrollTabToCenter = useCallback(
    (tab) => {
      const list = listRef.current;
      if (!enabledValue || !list || !tab) return;

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
    },
    [enabledValue, listRef],
  );

  const scrollActiveTabIntoView = useCallback(() => {
    const list = listRef.current;
    if (!enabledValue || !list) return;

    const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');
    scrollTabToCenter(activeTab);
  }, [enabledValue, listRef, scrollTabToCenter]);

  const onListClick = useCallback(
    (event) => {
      const tab = event.target.closest('[role="tab"]');
      if (!tab || !listRef.current?.contains(tab)) return;

      scheduleUpdate();
      queueMicrotask(() => {
        requestAnimationFrame(() => scrollTabToCenter(tab));
      });
    },
    [listRef, scheduleUpdate, scrollTabToCenter],
  );

  const onListKeydown = useCallback(() => {
    scheduleUpdate();
    queueMicrotask(() => {
      requestAnimationFrame(scrollActiveTabIntoView);
    });
  }, [scheduleUpdate, scrollActiveTabIntoView]);

  const observeTabs = useCallback(() => {
    resizeObserverRef.current?.disconnect();
    const list = listRef.current;
    if (!list) return;

    resizeObserverRef.current = new ResizeObserver(scheduleUpdate);
    resizeObserverRef.current.observe(list);
    list.querySelectorAll('.tabs_tab').forEach((tab) => resizeObserverRef.current.observe(tab));
  }, [listRef, scheduleUpdate]);

  useEffect(() => {
    scheduleUpdate();
    observeTabs();

    const list = listRef.current;
    if (!list) return undefined;

    list.addEventListener('scroll', updateScrollState, { passive: true });
    list.addEventListener('click', onListClick);
    list.addEventListener('keydown', onListKeydown);

    return () => {
      list.removeEventListener('scroll', updateScrollState);
      list.removeEventListener('click', onListClick);
      list.removeEventListener('keydown', onListKeydown);
      resizeObserverRef.current?.disconnect();
    };
  }, [
    enabledValue,
    listRef,
    observeTabs,
    onListClick,
    onListKeydown,
    scheduleUpdate,
    updateScrollState,
  ]);

  useEffect(() => {
    scheduleUpdate();
  }, [enabledValue, scheduleUpdate]);

  useEffect(() => {
    if (onTabsChange === undefined) return;
    scheduleUpdate();
    observeTabs();
  }, [tabsChangeValue, onTabsChange, observeTabs, scheduleUpdate]);

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
