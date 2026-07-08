import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

function resolveRef(value) {
  if (value != null && typeof value === 'object' && 'current' in value) {
    return value.current;
  }
  return value;
}

export function useTabsIndicator({ listRef, enabled, vertical, variant, onTabsChange, activeTabId }) {
  const [indicatorStyle, setIndicatorStyle] = useState(null);

  const resizeObserverRef = useRef(null);
  const enabledValue = resolveRef(enabled);
  const verticalValue = resolveRef(vertical);
  const variantValue = resolveRef(variant);
  const tabsChangeValue =
    onTabsChange != null && typeof onTabsChange === 'object' && 'current' in onTabsChange
      ? onTabsChange.current
      : onTabsChange;

  const updateIndicator = useCallback(() => {
    if (!enabledValue || !listRef.current) {
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

    if (verticalValue) {
      setIndicatorStyle({
        width: `${indicatorThickness}px`,
        height: `${height}px`,
        transform: `translate3d(${left + width - indicatorThickness}px, ${top}px, 0)`,
      });
      return;
    }

    if (variantValue === 'pill') {
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
  }, [enabledValue, listRef, variantValue, verticalValue]);

  const scheduleUpdate = useCallback(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(updateIndicator);
    });
  }, [updateIndicator]);

  const observeTabs = useCallback(() => {
    resizeObserverRef.current?.disconnect();
    if (!listRef.current) return;

    resizeObserverRef.current = new ResizeObserver(scheduleUpdate);
    resizeObserverRef.current.observe(listRef.current);
    listRef.current.querySelectorAll('.tabs_tab').forEach((tab) => resizeObserverRef.current.observe(tab));
  }, [listRef, scheduleUpdate]);

  const onListInteraction = useCallback(() => {
    scheduleUpdate();
  }, [scheduleUpdate]);

  useEffect(() => {
    scheduleUpdate();
    observeTabs();

    const list = listRef.current;
    if (!list) return undefined;

    list.addEventListener('keydown', onListInteraction);
    list.addEventListener('scroll', onListInteraction, { passive: true });

    return () => {
      list.removeEventListener('keydown', onListInteraction);
      list.removeEventListener('scroll', onListInteraction);
      resizeObserverRef.current?.disconnect();
    };
  }, [listRef, observeTabs, onListInteraction, scheduleUpdate]);

  useEffect(() => {
    scheduleUpdate();
  }, [enabledValue, verticalValue, variantValue, scheduleUpdate]);

  useEffect(() => {
    if (onTabsChange === undefined) return;
    scheduleUpdate();
    observeTabs();
  }, [tabsChangeValue, onTabsChange, observeTabs, scheduleUpdate]);

  useLayoutEffect(() => {
    if (activeTabId == null) return;
    updateIndicator();
  }, [activeTabId, updateIndicator]);

  return {
    indicatorStyle,
    updateIndicator: scheduleUpdate,
  };
}
