import { useCallback, useMemo, useRef, useState } from 'react';
import { AccordionContext } from '@/components/context/AccordionContext';
import { cn } from '@/utils/cn';
import { useAccordionDemoCode } from '@/hooks/useDemoCode';

export default function Accordion({
  variant = 'bordered',
  size = 'md',
  multiple,
  narrow,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const itemsRef = useRef(new Map());
  const [registeredItems, setRegisteredItems] = useState([]);
  const props = { variant, size, multiple, narrow };

  const rootClass = cn(
    'accordion',
    `accordion_${variant}`,
    size === 'sm' && 'accordion_sm',
    size === 'lg' && 'accordion_lg',
    narrow && 'accordion_demo-narrow',
    className,
  );

  const syncRegisteredItems = useCallback(() => {
    setRegisteredItems((prev) => {
      const next = [...itemsRef.current.values()];
      if (
        prev.length === next.length &&
        prev.every((item, index) => item.id === next[index]?.id)
      ) {
        return prev;
      }
      return next;
    });
  }, []);

  const registerItem = useCallback((item) => {
    itemsRef.current.set(item.id, item);
    syncRegisteredItems();
  }, [syncRegisteredItems]);

  const unregisterItem = useCallback((id) => {
    itemsRef.current.delete(id);
    syncRegisteredItems();
  }, [syncRegisteredItems]);

  const getTriggers = useCallback(
    () => registeredItems.filter((item) => !item.disabled).map((item) => item.id),
    [registeredItems],
  );

  const focusTrigger = useCallback((id) => {
    rootRef.current?.querySelector(`#${CSS.escape(id)}`)?.focus();
  }, []);

  const toggleItem = useCallback(
    (id, isOpenRef) => {
      const item = itemsRef.current.get(id);
      if (!item || item.disabled) return;

      const willOpen = !isOpenRef.value;

      if (!multiple && willOpen) {
        for (const [otherId, other] of itemsRef.current) {
          if (otherId !== id && !other.disabled) {
            other.isOpen.value = false;
          }
        }
      }

      isOpenRef.value = willOpen;
    },
    [multiple],
  );

  const contextValue = useMemo(
    () => ({
      registerItem,
      unregisterItem,
      toggleItem,
      getTriggers,
      focusTrigger,
    }),
    [registerItem, unregisterItem, toggleItem, getTriggers, focusTrigger],
  );

  useAccordionDemoCode(props, registeredItems, rootRef, { class: className, ...rest });

  return (
    <AccordionContext.Provider value={contextValue}>
      <div ref={rootRef} className={rootClass} {...rest}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}
