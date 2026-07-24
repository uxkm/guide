import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * tabs_indicator-slide — 활성 탭 위치에 인디케이터 동기화
 */
export function useTabsIndicator({ listRef, enabled, vertical, variant, tabCount }) {
  const [indicatorStyle, setIndicatorStyle] = useState(null);
  const resizeObserverRef = useRef(null);

  const updateIndicator = useCallback(() => {
    if (!enabled || !listRef.current) {
      setIndicatorStyle(null);
      return;
    }

    const list = listRef.current;
    const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');

    if (!activeTab) {
      setIndicatorStyle(null);
      return;
    }

    const listRect = list.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    const left = tabRect.left - listRect.left + list.scrollLeft;
    const top = tabRect.top - listRect.top + list.scrollTop;
    const width = tabRect.width;
    const height = tabRect.height;
    const indicatorThickness = 2;

    if (vertical) {
      setIndicatorStyle({
        width: `${indicatorThickness}px`,
        height: `${height}px`,
        transform: `translate3d(${left + width - indicatorThickness}px, ${top}px, 0)`,
      });
      return;
    }

    if (variant === 'pill') {
      setIndicatorStyle({
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate3d(${left}px, ${top}px, 0)`,
      });
      return;
    }

    setIndicatorStyle({
      width: `${width}px`,
      height: `${indicatorThickness}px`,
      transform: `translate3d(${left}px, ${top + height - indicatorThickness}px, 0)`,
    });
  }, [enabled, listRef, vertical, variant]);

  const scheduleUpdate = useCallback(() => {
    requestAnimationFrame(updateIndicator);
  }, [updateIndicator]);

  const observeTabs = useCallback(() => {
    resizeObserverRef.current?.disconnect();
    if (!listRef.current) return;

    const list = listRef.current;
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

    const onListInteraction = () => scheduleUpdate();
    list.addEventListener('click', onListInteraction);
    list.addEventListener('keydown', onListInteraction);
    list.addEventListener('scroll', onListInteraction, { passive: true });

    return () => {
      list.removeEventListener('click', onListInteraction);
      list.removeEventListener('keydown', onListInteraction);
      list.removeEventListener('scroll', onListInteraction);
      resizeObserverRef.current?.disconnect();
    };
  }, [listRef, scheduleUpdate, observeTabs, tabCount, enabled, vertical, variant]);

  return {
    indicatorStyle,
    updateIndicator: scheduleUpdate,
  };
}
