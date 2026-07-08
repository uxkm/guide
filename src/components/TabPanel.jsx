import { useEffect, useId, useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { useTabsActiveContext, useTabsApiContext } from '@/context/TabsContext.jsx';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { formatComponentCode } from '@/utils/format-component-code';

function formatSlotContent(content) {
  if (!content) return '...';
  if (typeof content === 'string') return content;
  return '...';
}

function formatCode(props, slots, attrs) {
  const slotContent = {};

  if (slots.icon?.()) {
    slotContent.icon = formatSlotContent(slots.icon()[0]?.children);
  }

  if (slots.badge?.()) {
    slotContent.badge = formatSlotContent(slots.badge()[0]?.children);
  }

  return formatComponentCode('TabPanel', props, slots, attrs, {
    booleanProps: new Set(['active', 'disabled']),
    labelProp: 'label',
    selfClosing: false,
    slotContent,
  });
}

export default function TabPanel({
  label,
  active: activeProp = false,
  disabled = false,
  icon,
  badge,
  children,
}) {
  const tabsApi = useTabsApiContext();
  const { activePanelTabId } = useTabsActiveContext() ?? {};
  const rootRef = useRef(null);
  const tabId = useId().replace(/:/g, '');
  const panelId = useId().replace(/:/g, '');
  const isActive = activePanelTabId === tabId;
  const iconRef = useRef(icon);
  const badgeRef = useRef(badge);
  iconRef.current = icon;
  badgeRef.current = badge;
  const registerTabRef = useRef(tabsApi?.registerTab);
  const unregisterTabRef = useRef(tabsApi?.unregisterTab);
  registerTabRef.current = tabsApi?.registerTab;
  unregisterTabRef.current = tabsApi?.unregisterTab;
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children, icon, badge }),
    [children, icon, badge],
  );
  const props = { label, active: activeProp, disabled };

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, {});

  useEffect(() => {
    const registerTab = registerTabRef.current;
    if (!registerTab) return undefined;

    registerTab({
      id: tabId,
      panelId,
      label,
      active: activeProp,
      disabled,
      iconSlot: () => iconRef.current,
      badgeSlot: () => badgeRef.current,
    });
    return () => unregisterTabRef.current?.(tabId);
  }, [tabId, panelId, label, activeProp, disabled]);

  return (
    <div
      ref={rootRef}
      id={panelId}
      className={cn('tabs_panel', isActive && 'is-active')}
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={!isActive || undefined}
    >
      {children}
    </div>
  );
}
