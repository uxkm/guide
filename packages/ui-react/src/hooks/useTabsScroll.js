import { useCallback, useEffect, useRef, useState } from 'react';

const SCROLL_EDGE = 1;

/**
 * layout="scroll" — 탭 목록 좌우 스크롤 네비
 */
export function useTabsScroll({ listRef, enabled, tabCount }) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const resizeObserverRef = useRef(null);

  const updateScrollState = useCallback(() => {
    const list = listRef.current;

    if (!enabled || !list) {
      setCanScrollPrev((prev) => (prev ? false : prev));
      setCanScrollNext((prev) => (prev ? false : prev));
      setHasOverflow((prev) => (prev ? false : prev));
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = list;
    const maxScroll = scrollWidth - clientWidth;
    const nextHasOverflow = maxScroll > SCROLL_EDGE;
    const nextCanScrollPrev = scrollLeft > SCROLL_EDGE;
    const nextCanScrollNext = scrollLeft < maxScroll - SCROLL_EDGE;

    setHasOverflow((prev) => (prev === nextHasOverflow ? prev : nextHasOverflow));
    setCanScrollPrev((prev) => (prev === nextCanScrollPrev ? prev : nextCanScrollPrev));
    setCanScrollNext((prev) => (prev === nextCanScrollNext ? prev : nextCanScrollNext));
  }, [enabled, listRef]);

  const scheduleUpdate = useCallback(() => {
    requestAnimationFrame(updateScrollState);
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

  const scrollPrev = useCallback(() => scrollByDirection(-1), [scrollByDirection]);
  const scrollNext = useCallback(() => scrollByDirection(1), [scrollByDirection]);

  const scrollTabToCenter = useCallback(
    (tab) => {
      const list = listRef.current;
      if (!enabled || !list || !tab) return;

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
    [enabled, listRef],
  );

  const scrollActiveTabIntoView = useCallback(() => {
    const list = listRef.current;
    if (!enabled || !list) return;

    const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');
    scrollTabToCenter(activeTab);
  }, [enabled, listRef, scrollTabToCenter]);

  const observeTabs = useCallback(() => {
    resizeObserverRef.current?.disconnect();
    const list = listRef.current;
    if (!list) return;

    const observer = new ResizeObserver(scheduleUpdate);
    resizeObserverRef.current = observer;
    observer.observe(list);
    list.querySelectorAll('.tabs_tab').forEach((tab) => observer.observe(tab));
  }, [listRef, scheduleUpdate]);

  useEffect(() => {
    scheduleUpdate();
    observeTabs();

    const list = listRef.current;
    if (!list) return undefined;

    const onListClick = (event) => {
      const tab = event.target.closest('[role="tab"]');
      if (!tab || !list.contains(tab)) return;

      scheduleUpdate();
      requestAnimationFrame(() => scrollTabToCenter(tab));
    };

    const onListKeydown = () => {
      scheduleUpdate();
      requestAnimationFrame(scrollActiveTabIntoView);
    };

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
    listRef,
    enabled,
    tabCount,
    scheduleUpdate,
    observeTabs,
    updateScrollState,
    scrollTabToCenter,
    scrollActiveTabIntoView,
  ]);

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
