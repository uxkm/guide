'use client';

import { useContext, useEffect, useId, useRef } from 'react';
import { TabsContext } from '@/components/Tabs.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('TabMenu', {
  booleanProps: new Set(['active', 'disabled']),
  labelProp: 'label',
  selfClosing: true,
  skipProps: ['icon', 'badge'],
});

export default function TabMenu({ label, value, active, disabled, icon, badge }) {
  const tabs = useContext(TabsContext);
  const rootRef = useRef(null);
  const reactId = useId().replace(/:/g, '');
  const tabId = `tab-${reactId}`;

  useComponentDemoCode(
    formatCode,
    { label, value, active, disabled },
    createDemoSlots({ icon, badge }),
    rootRef,
    {},
  );

  const registerTabRef = useRef(null);
  const unregisterTabRef = useRef(null);
  registerTabRef.current = tabs?.registerTab;
  unregisterTabRef.current = tabs?.unregisterTab;

  useEffect(() => {
    registerTabRef.current?.({
      id: tabId,
      value: value ?? tabId,
      label,
      active: Boolean(active),
      disabled: Boolean(disabled),
      menuOnly: true,
      icon: icon ?? null,
      badge: badge ?? null,
    });
  }, [tabId, value, label, active, disabled, icon, badge]);

  useEffect(() => {
    return () => unregisterTabRef.current?.(tabId);
  }, [tabId]);

  return <span ref={rootRef} hidden aria-hidden="true" />;
}
