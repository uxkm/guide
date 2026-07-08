import { useEffect, useId, useMemo, useRef } from 'react';
import { useTabsApiContext } from '@/context/TabsContext.jsx';
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

  return formatComponentCode('TabMenu', props, slots, attrs, {
    booleanProps: new Set(['active', 'disabled']),
    labelProp: 'label',
    selfClosing: true,
    slotContent,
  });
}

export default function TabMenu({
  label,
  value,
  active = false,
  disabled = false,
  icon,
  badge,
}) {
  const tabsApi = useTabsApiContext();
  const rootRef = useRef(null);
  const tabId = useId().replace(/:/g, '');
  const iconRef = useRef(icon);
  const badgeRef = useRef(badge);
  iconRef.current = icon;
  badgeRef.current = badge;
  const registerTabRef = useRef(tabsApi?.registerTab);
  const unregisterTabRef = useRef(tabsApi?.unregisterTab);
  registerTabRef.current = tabsApi?.registerTab;
  unregisterTabRef.current = tabsApi?.unregisterTab;
  const demoSlots = useMemo(
    () => createDemoSlots({ icon, badge }),
    [icon, badge],
  );
  const props = { label, value, active, disabled };

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, {});

  useEffect(() => {
    const registerTab = registerTabRef.current;
    if (!registerTab) return undefined;

    registerTab({
      id: tabId,
      value: value ?? tabId,
      label,
      active,
      disabled,
      menuOnly: true,
      iconSlot: () => iconRef.current,
      badgeSlot: () => badgeRef.current,
    });
    return () => unregisterTabRef.current?.(tabId);
  }, [tabId, value, label, active, disabled]);

  return <span ref={rootRef} hidden aria-hidden="true" />;
}
