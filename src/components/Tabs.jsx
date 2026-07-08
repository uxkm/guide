import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import TabsTab from '@/components/TabsTab.jsx';
import { cn } from '@/utils/cn';
import { TabsProvider } from '@/context/TabsContext.jsx';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useTabsDemoCode } from '@/hooks/useDemoCode';
import { useTabsIndicator } from '@/hooks/useTabsIndicator';
import { useTabsScroll } from '@/hooks/useTabsScroll';

function resolveItemKey(item, index) {
  return item.key ?? item.value ?? index;
}

export default function Tabs({
  ripple,
  mode = 'panels',
  modelValue,
  onUpdateModelValue,
  variant = 'line',
  size = 'md',
  layout = 'auto',
  vertical = false,
  scrollable = false,
  ariaLabel,
  items,
  indicator = 'static',
  tabs: tabsSlot,
  extra,
  panel: panelSlot,
  children,
  className,
  ...rest
}) {
  const props = {
    ripple,
    mode,
    modelValue,
    variant,
    size,
    layout,
    vertical,
    scrollable,
    ariaLabel,
    items,
    indicator,
  };
  const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const tabsMapRef = useRef(new Map());
  const [registeredTabs, setRegisteredTabs] = useState([]);
  const dynamicPanelId = useId().replace(/:/g, '');
  const [activeKey, setActiveKey] = useState(null);
  const [activePanelTabId, setActivePanelTabId] = useState(null);
  const tabListSizeRef = useRef(0);

  const demoSlots = useMemo(
    () => createDemoSlots({ default: children, tabs: tabsSlot, extra, panel: panelSlot }),
    [children, tabsSlot, extra, panelSlot],
  );

  useTabsDemoCode(props, rootRef, { class: className, ...rest });

  const isDynamicMode = mode === 'dynamic';
  const isScrollNavLayout = layout === 'scroll' && !vertical;
  const isEqualLayout = layout === 'equal';
  const isLegacyScrollable = scrollable && layout === 'auto';
  const usesItems = Boolean(items?.length);
  const usesPanelItems = usesItems && !isDynamicMode;

  tabListSizeRef.current = usesItems ? items.length : registeredTabs.length;

  const slideIndicatorEnabled = indicator === 'slide';

  const { canScrollPrev, canScrollNext, hasOverflow, scrollPrev, scrollNext, updateScrollState } =
    useTabsScroll({
      listRef,
      enabled: isScrollNavLayout,
      onTabsChange: tabListSizeRef,
    });

  const syncRegisteredTabs = useCallback(() => {
    setRegisteredTabs((prev) => {
      const next = [...tabsMapRef.current.values()];
      if (
        prev.length === next.length &&
        prev.every((tab, index) => tab.id === next[index]?.id)
      ) {
        return prev;
      }
      return next;
    });
  }, []);

  const registerTab = useCallback(
    (tab) => {
      if (isDynamicMode || tab.menuOnly) {
        tab.panelId = dynamicPanelId;
      }
      tabsMapRef.current.set(tab.id, tab);
      syncRegisteredTabs();
    },
    [isDynamicMode, dynamicPanelId, syncRegisteredTabs],
  );

  const unregisterTab = useCallback((id) => {
    tabsMapRef.current.delete(id);
    syncRegisteredTabs();
    setActivePanelTabId((current) => {
      if (current !== id) return current;
      const nextTabs = [...tabsMapRef.current.values()];
      const first = nextTabs.find((tab) => !tab.disabled);
      return first?.id ?? null;
    });
  }, [syncRegisteredTabs]);

  const getTabActive = useCallback(
    (tab) => {
      if (isDynamicMode) {
        return (tab.value ?? tab.id) === activeKey;
      }
      return tab.id === activePanelTabId;
    },
    [isDynamicMode, activeKey, activePanelTabId],
  );

  const selectDynamicKey = useCallback(
    (key) => {
      setActiveKey(key);
      onUpdateModelValue?.(key);
      updateScrollState();
    },
    [onUpdateModelValue, updateScrollState],
  );

  const dynamicItemTabs = useMemo(() => {
    if (!isDynamicMode || !usesItems) return [];
    return items.map((item, index) => {
      const key = resolveItemKey(item, index);
      return {
        id: `item-tab-${index}`,
        key,
        panelId: dynamicPanelId,
        label: item.label,
        disabled: item.disabled,
        isActive: activeKey === key,
        raw: item,
      };
    });
  }, [isDynamicMode, usesItems, items, activeKey, dynamicPanelId]);

  const selectTab = useCallback(
    (id) => {
      const tabs = [...tabsMapRef.current.values()];

      if (isDynamicMode) {
        if (usesItems) {
          const tab = dynamicItemTabs.find((item) => item.id === id);
          if (tab && !tab.disabled) selectDynamicKey(tab.key);
          return;
        }
        const tab = tabs.find((item) => item.id === id);
        if (tab && !tab.disabled) selectDynamicKey(tab.value ?? tab.id);
        return;
      }

      const tab = tabs.find((item) => item.id === id);
      if (tab && !tab.disabled) {
        setActivePanelTabId(id);
      }
      updateScrollState();
    },
    [isDynamicMode, usesItems, dynamicItemTabs, selectDynamicKey, updateScrollState],
  );

  const tabsApi = useMemo(
    () => ({ registerTab, unregisterTab, selectTab }),
    [registerTab, unregisterTab, selectTab],
  );

  const tabsActive = useMemo(() => ({ activePanelTabId }), [activePanelTabId]);

  useEffect(() => {
    if (isDynamicMode) {
      if (modelValue != null && modelValue !== '') {
        setActiveKey(modelValue);
        return;
      }
      if (usesItems) {
        const activeItem = items.find((item) => item.active);
        if (activeItem) {
          setActiveKey(resolveItemKey(activeItem, items.indexOf(activeItem)));
          return;
        }
        const first = items.find((item) => !item.disabled);
        if (first) setActiveKey(resolveItemKey(first, items.indexOf(first)));
        return;
      }
      if (!tabsMapRef.current.size) return;
      const dynamicTabs = [...tabsMapRef.current.values()];
      const preset = dynamicTabs.find((tab) => tab.active);
      const first = dynamicTabs.find((tab) => !tab.disabled);
      const tab = preset || first;
      if (tab) {
        const nextKey = tab.value ?? tab.id;
        setActiveKey((current) => (current === nextKey ? current : nextKey));
      }
      return;
    }

    if (usesPanelItems) return;
    const panelTabs = [...tabsMapRef.current.values()];
    if (!panelTabs.length) return;
    setActivePanelTabId((current) => {
      if (current && panelTabs.some((tab) => tab.id === current)) return current;
      const preset = panelTabs.find((tab) => tab.active);
      const first = panelTabs.find((tab) => !tab.disabled);
      return (preset || first)?.id ?? null;
    });
  }, [isDynamicMode, modelValue, usesItems, usesPanelItems, items, registeredTabs.length]);

  useEffect(() => {
    if (isDynamicMode && modelValue != null && modelValue !== '') {
      setActiveKey(modelValue);
    }
  }, [isDynamicMode, modelValue]);

  const activeDynamicItem = useMemo(() => {
    if (!isDynamicMode) return null;
    if (usesItems) {
      return dynamicItemTabs.find((tab) => tab.isActive)?.raw ?? null;
    }
    const tab = registeredTabs.find((item) => (item.value ?? item.id) === activeKey);
    if (!tab) return null;
    return { key: tab.value ?? tab.id, label: tab.label };
  }, [isDynamicMode, usesItems, dynamicItemTabs, registeredTabs, activeKey]);

  const activeTabId = useMemo(() => {
    if (!isDynamicMode) return '';
    if (usesItems) {
      return dynamicItemTabs.find((tab) => tab.isActive)?.id ?? '';
    }
    return registeredTabs.find((tab) => (tab.value ?? tab.id) === activeKey)?.id ?? '';
  }, [isDynamicMode, usesItems, dynamicItemTabs, registeredTabs, activeKey]);

  const itemTabs = useMemo(() => {
    if (!usesPanelItems) return [];
    const hasActive = items.some((item) => item.active);
    return items.map((item, index) => ({
      id: `item-tab-${index}`,
      panelId: `item-panel-${index}`,
      label: item.label,
      content: item.content,
      disabled: item.disabled,
      isActive: item.active || (!hasActive && index === 0),
    }));
  }, [usesPanelItems, items]);

  const barTabs = useMemo(() => {
    if (isDynamicMode && usesItems) {
      return dynamicItemTabs.map((tab) => ({
        id: tab.id,
        panelId: tab.panelId,
        label: tab.label,
        disabled: Boolean(tab.disabled),
        active: tab.isActive,
        iconSlot: null,
        badgeSlot: null,
      }));
    }
    if (usesPanelItems) {
      return itemTabs.map((tab) => ({
        id: tab.id,
        panelId: tab.panelId,
        label: tab.label,
        disabled: Boolean(tab.disabled),
        active: tab.isActive,
        iconSlot: null,
        badgeSlot: null,
      }));
    }
    return registeredTabs.map((tab) => ({
      id: tab.id,
      panelId: tab.panelId,
      label: tab.label,
      disabled: Boolean(tab.disabled),
      active: getTabActive(tab),
      iconSlot: tab.iconSlot ?? null,
      badgeSlot: tab.badgeSlot ?? null,
    }));
  }, [
    isDynamicMode,
    usesItems,
    usesPanelItems,
    dynamicItemTabs,
    itemTabs,
    registeredTabs,
    getTabActive,
  ]);

  const activeBarTabId = useMemo(
    () => barTabs.find((tab) => tab.active)?.id ?? null,
    [barTabs],
  );

  const { indicatorStyle } = useTabsIndicator({
    listRef,
    enabled: slideIndicatorEnabled,
    vertical,
    variant,
    onTabsChange: tabListSizeRef,
    activeTabId: activeBarTabId,
  });

  const rootClass = cn(
    'tabs',
    `tabs_${variant}`,
    size === 'sm' && 'tabs_sm',
    size === 'lg' && 'tabs_lg',
    vertical && 'tabs_vertical',
    isEqualLayout && 'tabs_equal',
    isScrollNavLayout && 'tabs_scroll-nav',
    isLegacyScrollable && 'tabs_scrollable',
    isDynamicMode && 'tabs_dynamic',
    indicator === 'slide' && 'tabs_indicator-slide',
    className,
  );

  return (
    <TabsProvider apiValue={tabsApi} activeValue={tabsActive}>
      <div ref={rootRef} className={rootClass} data-tabs {...rippleAttrs} {...rest}>
        <div className="tabs_bar">
          {isScrollNavLayout && hasOverflow && (
            <Button
              className="tabs_nav tabs_nav_prev"
              variant="outline"
              color="default"
              size="sm"
              iconOnly
              ripple={false}
              aria-label="이전 탭"
              disabled={!canScrollPrev}
              onClick={scrollPrev}
              iconBefore={<Icon name="chevron-left" size="sm" />}
            />
          )}

          <div className={cn('tabs_list-wrap', isScrollNavLayout && 'tabs_scroll-viewport')}>
            <div ref={listRef} className="tabs_list" role="tablist" aria-label={ariaLabel}>
              {indicator === 'slide' && indicatorStyle && (
                <span className="tabs_indicator" aria-hidden="true" style={indicatorStyle} />
              )}
              {barTabs.map((tab) => (
                <TabsTab
                  key={tab.id}
                  {...childRippleAttrs}
                  id={tab.id}
                  panelId={tab.panelId}
                  label={tab.label}
                  active={tab.active}
                  disabled={tab.disabled}
                  tabIndex={tab.active ? 0 : -1}
                  iconSlot={tab.iconSlot}
                  badgeSlot={tab.badgeSlot}
                  onClick={() => selectTab(tab.id)}
                />
              ))}
              {tabsSlot}
            </div>
          </div>

          {isScrollNavLayout && hasOverflow && (
            <Button
              className="tabs_nav tabs_nav_next"
              variant="outline"
              color="default"
              size="sm"
              iconOnly
              ripple={false}
              aria-label="다음 탭"
              disabled={!canScrollNext}
              onClick={scrollNext}
              iconBefore={<Icon name="chevron-right" size="sm" />}
            />
          )}

          {extra && (
            <div className="tabs_extra" data-demo-slot="extra">
              {extra}
            </div>
          )}
        </div>

        <div className="tabs_panels" data-demo-slot="default">
          {isDynamicMode ? (
            <>
              <div
                id={dynamicPanelId}
                className="tabs_panel is-active"
                role="tabpanel"
                aria-labelledby={activeTabId}
              >
                {typeof panelSlot === 'function'
                  ? panelSlot({ item: activeDynamicItem, value: activeKey, active: true })
                  : panelSlot}
              </div>
              {children}
            </>
          ) : usesPanelItems ? (
            itemTabs.map((tab) => (
              <div
                key={tab.panelId}
                id={tab.panelId}
                className={cn('tabs_panel', tab.isActive && 'is-active')}
                role="tabpanel"
                aria-labelledby={tab.id}
                hidden={!tab.isActive || undefined}
              >
                <p>{tab.content}</p>
              </div>
            ))
          ) : (
            children
          )}
        </div>
      </div>
    </TabsProvider>
  );
}
