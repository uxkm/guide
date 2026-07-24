import { useContext, useEffect, useId, useRef } from 'react';
import { TabsContext } from '@/components/Tabs.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('TabPanel', {
  booleanProps: new Set(['active', 'disabled']),
  labelProp: 'label',
  selfClosing: false,
  skipProps: ['icon', 'badge'],
});

export default function TabPanel({
  label,
  active,
  disabled,
  icon,
  badge,
  children,
  className,
  ...rest
}) {
  const tabs = useContext(TabsContext);
  const rootRef = useRef(null);
  const reactId = useId().replace(/:/g, '');
  const tabId = `tab-${reactId}`;
  const panelId = `panel-${reactId}`;

  useComponentDemoCode(
    formatCode,
    { label, active, disabled },
    createDemoSlots({ default: children, icon, badge }),
    rootRef,
    { className, ...rest },
  );

  useEffect(() => {
    if (!tabs) return;
    tabs.registerTab({
      id: tabId,
      panelId,
      label,
      active: Boolean(active),
      disabled: Boolean(disabled),
      icon: icon ?? null,
      badge: badge ?? null,
    });
  }, [tabs, tabId, panelId, label, active, disabled, icon, badge]);

  useEffect(() => {
    if (!tabs) return undefined;
    return () => tabs.unregisterTab(tabId);
  }, [tabs, tabId]);

  const isActive = tabs?.isTabActive?.(tabId) ?? Boolean(active);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div
      ref={rootRef}
      id={panelId}
      className={cn('tabs_panel', isActive && 'is-active', className)}
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={!isActive || undefined}
      {...domRest}
    >
      {children}
    </div>
  );
}
