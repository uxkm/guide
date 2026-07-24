import {
  createContext,
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
import { useRipple } from '@/hooks/useRipple';
import { useTabsDemoCode } from '@/hooks/useDemoCode';
import { useTabsIndicator } from '@/hooks/useTabsIndicator';
import { useTabsScroll } from '@/hooks/useTabsScroll';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export const TabsContext = createContext(null);

const VALID_MODES = new Set(['panels', 'dynamic']);
const VALID_VARIANTS = new Set(['line', 'card', 'pill']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_LAYOUTS = new Set(['auto', 'equal', 'scroll']);
const VALID_INDICATORS = new Set(['static', 'slide']);

function resolveItemKey(item, index) {
  return item.key ?? item.value ?? index;
}

export default function Tabs({
  ripple,
  mode = 'panels',
  value,
  defaultValue,
  variant = 'line',
  size = 'md',
  layout = 'auto',
  vertical,
  scrollable,
  ariaLabel,
  items,
  indicator = 'static',
  tabs: tabsSlot,
  extra,
  panel,
  children,
  className,
  onChange,
  ...rest
}) {
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });
  const reactId = useId().replace(/:/g, '');
  const dynamicPanelId = `tabs-panel-${reactId}`;

  const resolvedMode = VALID_MODES.has(mode) ? mode : 'panels';
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'line';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedLayout = VALID_LAYOUTS.has(layout) ? layout : 'auto';
  const resolvedIndicator = VALID_INDICATORS.has(indicator) ? indicator : 'static';

  const isDynamicMode = resolvedMode === 'dynamic';
  const isScrollNavLayout = resolvedLayout === 'scroll' && !vertical;
  const isEqualLayout = resolvedLayout === 'equal';
  const isLegacyScrollable = scrollable && resolvedLayout === 'auto';
  const usesItems = Boolean(items?.length);
  const usesPanelItems = usesItems && !isDynamicMode;

  const [registeredTabs, setRegisteredTabs] = useState([]);
  const [activePanelId, setActivePanelId] = useState(null);
  const [activeDynamicKey, setActiveDynamicKey] = useState(() => {
    if (value != null && value !== '') return value;
    if (defaultValue != null && defaultValue !== '') return defaultValue;
    return null;
  });
  const [itemsActiveKey, setItemsActiveKey] = useState(() => {
    if (!items?.length) return null;
    const activeItem = items.find((item) => item.active);
    if (activeItem) return resolveItemKey(activeItem, items.indexOf(activeItem));
    const first = items.find((item) => !item.disabled) ?? items[0];
    return first ? resolveItemKey(first, items.indexOf(first)) : null;
  });

  useTabsDemoCode(
    {
      ripple,
      mode: resolvedMode,
      value,
      variant: resolvedVariant,
      size: resolvedSize,
      layout: resolvedLayout,
      vertical,
      scrollable,
      ariaLabel,
      items,
      indicator: resolvedIndicator,
    },
    rootRef,
    { className, onChange, ...rest },
  );

  useEffect(() => {
    if (isDynamicMode && value != null && value !== '') {
      setActiveDynamicKey(value);
    }
  }, [isDynamicMode, value]);

  const registerTab = useCallback((tab) => {
    setRegisteredTabs((prev) => {
      const next = prev.filter((item) => item.id !== tab.id);
      next.push(tab);
      return next;
    });
  }, []);

  const unregisterTab = useCallback((id) => {
    setRegisteredTabs((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const tabListSize = usesItems ? items.length : registeredTabs.length;

  const { indicatorStyle, updateIndicator } = useTabsIndicator({
    listRef,
    enabled: resolvedIndicator === 'slide',
    vertical: Boolean(vertical),
    variant: resolvedVariant,
    tabCount: tabListSize,
  });

  const {
    canScrollPrev,
    canScrollNext,
    hasOverflow,
    scrollPrev,
    scrollNext,
    updateScrollState,
  } = useTabsScroll({
    listRef,
    enabled: isScrollNavLayout,
    tabCount: tabListSize,
  });

  const selectDynamicKey = useCallback(
    (key) => {
      setActiveDynamicKey(key);
      onChange?.(key);
      updateIndicator();
      updateScrollState();
    },
    [onChange, updateIndicator, updateScrollState],
  );

  const selectTab = useCallback(
    (id) => {
      if (isDynamicMode) {
        if (usesItems) {
          const index = items.findIndex((_, i) => `item-tab-${i}` === id);
          const item = items[index];
          if (item && !item.disabled) {
            selectDynamicKey(resolveItemKey(item, index));
          }
          return;
        }

        const tab = registeredTabs.find((item) => item.id === id);
        if (tab && !tab.disabled) {
          selectDynamicKey(tab.value ?? tab.id);
        }
        return;
      }

      if (usesPanelItems) {
        const index = items.findIndex((_, i) => `item-tab-${i}` === id);
        const item = items[index];
        if (item && !item.disabled) {
          setItemsActiveKey(resolveItemKey(item, index));
          updateIndicator();
          updateScrollState();
        }
        return;
      }

      const tab = registeredTabs.find((item) => item.id === id);
      if (!tab || tab.disabled) return;

      setActivePanelId(id);
      updateIndicator();
      updateScrollState();
    },
    [
      isDynamicMode,
      usesItems,
      usesPanelItems,
      items,
      registeredTabs,
      selectDynamicKey,
      updateIndicator,
      updateScrollState,
    ],
  );

  const isTabActive = useCallback(
    (id) => {
      if (isDynamicMode) return false;
      if (usesPanelItems) return false;
      return activePanelId === id;
    },
    [isDynamicMode, usesPanelItems, activePanelId],
  );

  // Initialize / sync active panel from registered TabPanels
  useEffect(() => {
    if (isDynamicMode || usesPanelItems) return;
    if (!registeredTabs.length) return;

    setActivePanelId((current) => {
      if (current && registeredTabs.some((tab) => tab.id === current && !tab.disabled)) {
        return current;
      }
      const preset = registeredTabs.find((tab) => tab.active && !tab.disabled);
      const first = registeredTabs.find((tab) => !tab.disabled);
      return (preset || first)?.id ?? null;
    });
  }, [isDynamicMode, usesPanelItems, registeredTabs]);

  // Dynamic mode: initialize active key from registered TabMenus
  useEffect(() => {
    if (!isDynamicMode || usesItems) return;
    if (value != null && value !== '') return;
    if (activeDynamicKey != null) return;
    if (!registeredTabs.length) return;

    const preset = registeredTabs.find((tab) => tab.active && !tab.disabled);
    const first = registeredTabs.find((tab) => !tab.disabled);
    const tab = preset || first;
    if (tab) setActiveDynamicKey(tab.value ?? tab.id);
  }, [isDynamicMode, usesItems, value, activeDynamicKey, registeredTabs]);

  const contextValue = useMemo(
    () => ({
      registerTab,
      unregisterTab,
      selectTab,
      isTabActive,
      isDynamicMode,
      dynamicPanelId,
    }),
    [registerTab, unregisterTab, selectTab, isTabActive, isDynamicMode, dynamicPanelId],
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
        isActive: activeDynamicKey === key,
        raw: item,
      };
    });
  }, [isDynamicMode, usesItems, items, dynamicPanelId, activeDynamicKey]);

  const activeDynamicItem = useMemo(() => {
    if (!isDynamicMode) return null;

    if (usesItems) {
      return dynamicItemTabs.find((tab) => tab.isActive)?.raw ?? null;
    }

    const tab = registeredTabs.find((item) => (item.value ?? item.id) === activeDynamicKey);
    if (!tab) return null;

    return {
      key: tab.value ?? tab.id,
      label: tab.label,
    };
  }, [isDynamicMode, usesItems, dynamicItemTabs, registeredTabs, activeDynamicKey]);

  const activeTabId = useMemo(() => {
    if (!isDynamicMode) return '';

    if (usesItems) {
      return dynamicItemTabs.find((tab) => tab.isActive)?.id ?? '';
    }

    return (
      registeredTabs.find((tab) => (tab.value ?? tab.id) === activeDynamicKey)?.id ?? ''
    );
  }, [isDynamicMode, usesItems, dynamicItemTabs, registeredTabs, activeDynamicKey]);

  const itemTabs = useMemo(() => {
    if (!usesPanelItems) return [];
    return items.map((item, index) => {
      const key = resolveItemKey(item, index);
      return {
        id: `item-tab-${index}`,
        panelId: `item-panel-${index}`,
        label: item.label,
        content: item.content,
        disabled: item.disabled,
        isActive: itemsActiveKey === key,
      };
    });
  }, [usesPanelItems, items, itemsActiveKey]);

  const barTabs = useMemo(() => {
    if (isDynamicMode && usesItems) {
      return dynamicItemTabs.map((tab) => ({
        id: tab.id,
        panelId: tab.panelId,
        label: tab.label,
        disabled: Boolean(tab.disabled),
        active: tab.isActive,
        icon: null,
        badge: null,
      }));
    }

    if (usesPanelItems) {
      return itemTabs.map((tab) => ({
        id: tab.id,
        panelId: tab.panelId,
        label: tab.label,
        disabled: Boolean(tab.disabled),
        active: tab.isActive,
        icon: null,
        badge: null,
      }));
    }

    return registeredTabs.map((tab) => ({
      id: tab.id,
      panelId: isDynamicMode ? dynamicPanelId : tab.panelId,
      label: tab.label,
      disabled: Boolean(tab.disabled),
      active: isDynamicMode
        ? (tab.value ?? tab.id) === activeDynamicKey
        : activePanelId === tab.id,
      icon: tab.icon ?? null,
      badge: tab.badge ?? null,
    }));
  }, [
    isDynamicMode,
    usesItems,
    usesPanelItems,
    dynamicItemTabs,
    itemTabs,
    registeredTabs,
    dynamicPanelId,
    activeDynamicKey,
    activePanelId,
  ]);

  const rootClass = useMemo(() => {
    const classes = ['tabs', `tabs_${resolvedVariant}`];
    if (resolvedSize === 'sm') classes.push('tabs_sm');
    if (resolvedSize === 'lg') classes.push('tabs_lg');
    if (vertical) classes.push('tabs_vertical');
    if (isEqualLayout) classes.push('tabs_equal');
    if (isScrollNavLayout) classes.push('tabs_scroll-nav');
    if (isLegacyScrollable) classes.push('tabs_scrollable');
    if (isDynamicMode) classes.push('tabs_dynamic');
    if (resolvedIndicator === 'slide') classes.push('tabs_indicator-slide');
    return classes;
  }, [
    resolvedVariant,
    resolvedSize,
    vertical,
    isEqualLayout,
    isScrollNavLayout,
    isLegacyScrollable,
    isDynamicMode,
    resolvedIndicator,
  ]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const panelContent =
    typeof panel === 'function'
      ? panel({ item: activeDynamicItem, value: activeDynamicKey, active: true })
      : panel;

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        ref={rootRef}
        className={cn(rootClass, className)}
        data-tabs=""
        {...rippleAttrs}
        {...domRest}
      >
        <div className="tabs_bar">
          {isScrollNavLayout && hasOverflow ? (
            <Button
              className="tabs_nav tabs_nav_prev"
              variant="outline"
              color="default"
              size="sm"
              iconOnly
              ripple={false}
              ariaLabel="이전 탭"
              disabled={!canScrollPrev}
              onClick={scrollPrev}
              iconBefore={<Icon name="chevron-left" size="sm" />}
            />
          ) : null}

          <div
            className={cn('tabs_list-wrap', isScrollNavLayout && 'tabs_scroll-viewport')}
          >
            <div ref={listRef} className="tabs_list" role="tablist" aria-label={ariaLabel}>
              {resolvedIndicator === 'slide' && indicatorStyle ? (
                <span className="tabs_indicator" aria-hidden="true" style={indicatorStyle} />
              ) : null}
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
                  icon={tab.icon}
                  badge={tab.badge}
                  onClick={() => selectTab(tab.id)}
                />
              ))}
              {tabsSlot}
            </div>
          </div>

          {isScrollNavLayout && hasOverflow ? (
            <Button
              className="tabs_nav tabs_nav_next"
              variant="outline"
              color="default"
              size="sm"
              iconOnly
              ripple={false}
              ariaLabel="다음 탭"
              disabled={!canScrollNext}
              onClick={scrollNext}
              iconBefore={<Icon name="chevron-right" size="sm" />}
            />
          ) : null}

          {extra != null ? (
            <div className="tabs_extra" data-demo-slot="extra">
              {extra}
            </div>
          ) : null}
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
                {panelContent}
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
    </TabsContext.Provider>
  );
}
