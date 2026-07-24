import {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useAccordionDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export const AccordionContext = createContext(null);

const VALID_VARIANTS = new Set(['bordered', 'flush', 'card']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

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
  const itemsMapRef = useRef(new Map());
  const [registeredItems, setRegisteredItems] = useState([]);
  const itemsRef = useRef(registeredItems);
  itemsRef.current = registeredItems;

  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'bordered';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const multipleRef = useRef(multiple);
  multipleRef.current = multiple;

  useAccordionDemoCode(
    {
      variant: resolvedVariant,
      size: resolvedSize,
      multiple,
      narrow,
    },
    itemsRef,
    rootRef,
    { className, ...rest },
  );

  const syncRegisteredItems = useCallback(() => {
    setRegisteredItems(
      [...itemsMapRef.current.values()].map((item) => ({
        id: item.id,
        label: item.label,
        content: item.content,
        open: item.open,
        disabled: item.disabled,
        hasExtra: item.hasExtra,
        extraCode: item.extraCode,
        // formatAccordionCode는 Vue ref처럼 isOpen.value를 읽음
        isOpen: {
          get value() {
            return item.getIsOpen();
          },
        },
      })),
    );
  }, []);

  const registerItem = useCallback(
    (item) => {
      itemsMapRef.current.set(item.id, item);
      syncRegisteredItems();
    },
    [syncRegisteredItems],
  );

  const unregisterItem = useCallback(
    (id) => {
      itemsMapRef.current.delete(id);
      syncRegisteredItems();
    },
    [syncRegisteredItems],
  );

  const updateItemMeta = useCallback(
    (id, patch) => {
      const current = itemsMapRef.current.get(id);
      if (!current) return;
      itemsMapRef.current.set(id, { ...current, ...patch });
      syncRegisteredItems();
    },
    [syncRegisteredItems],
  );

  const toggleItem = useCallback((id) => {
    const item = itemsMapRef.current.get(id);
    if (!item || item.disabled) return;

    const willOpen = !item.getIsOpen();

    if (!multipleRef.current && willOpen) {
      for (const [otherId, other] of itemsMapRef.current) {
        if (otherId !== id && !other.disabled) {
          other.setIsOpen(false);
        }
      }
    }

    item.setIsOpen(willOpen);
    syncRegisteredItems();
  }, [syncRegisteredItems]);

  const getTriggers = useCallback(() => {
    return [...itemsMapRef.current.values()]
      .filter((item) => !item.disabled)
      .map((item) => item.id);
  }, []);

  const focusTrigger = useCallback((id) => {
    rootRef.current?.querySelector(`#${CSS.escape(id)}`)?.focus();
  }, []);

  const contextValue = useMemo(
    () => ({
      registerItem,
      unregisterItem,
      updateItemMeta,
      toggleItem,
      getTriggers,
      focusTrigger,
    }),
    [
      registerItem,
      unregisterItem,
      updateItemMeta,
      toggleItem,
      getTriggers,
      focusTrigger,
    ],
  );

  const rootClass = useMemo(() => {
    const classes = ['accordion', `accordion_${resolvedVariant}`];
    if (resolvedSize === 'sm') classes.push('accordion_sm');
    if (resolvedSize === 'lg') classes.push('accordion_lg');
    if (narrow) classes.push('accordion_demo-narrow');
    return classes;
  }, [resolvedVariant, resolvedSize, narrow]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <AccordionContext.Provider value={contextValue}>
      <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}
