import { useMemo, useRef, useState, useCallback } from 'react';
import { cn } from '@/utils/cn';
import { StepsProvider } from '@/context/StepsContext.jsx';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Steps', {
  defaults: { direction: 'horizontal', size: 'md' },
  booleanProps: new Set(['dot', 'iconStyle', 'navigable']),
  selfClosing: false,
});

export default function Steps({
  current,
  direction = 'horizontal',
  size = 'md',
  dot = false,
  iconStyle = false,
  navigable = false,
  align = '',
  ariaLabel,
  children,
  className,
  ...rest
}) {
  const props = { current, direction, size, dot, iconStyle, navigable, align, ariaLabel };
  const rootRef = useRef(null);
  const [itemOrder, setItemOrder] = useState([]);
  const itemsRef = useRef(new Map());
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const syncItemOrder = useCallback(() => {
    setItemOrder((prev) => {
      const next = [...itemsRef.current.keys()];
      if (prev.length === next.length && prev.every((id, i) => id === next[i])) {
        return prev;
      }
      return next;
    });
  }, []);

  const registerItem = useCallback((id, itemProps) => {
    itemsRef.current.set(id, itemProps);
    syncItemOrder();
  }, [syncItemOrder]);

  const unregisterItem = useCallback((id) => {
    itemsRef.current.delete(id);
    syncItemOrder();
  }, [syncItemOrder]);

  const isLastItem = useCallback(
    (id) => {
      const order = itemOrder;
      return order.indexOf(id) === order.length - 1;
    },
    [itemOrder],
  );

  const getItemIndex = useCallback(
    (id) => itemOrder.indexOf(id) + 1,
    [itemOrder],
  );

  const contextValue = useMemo(
    () => ({
      registerItem,
      unregisterItem,
      isLastItem,
      getItemIndex,
      navigable,
    }),
    [registerItem, unregisterItem, isLastItem, getItemIndex, navigable],
  );

  const rootClass = cn(
    'steps',
    direction === 'vertical' && 'steps_vertical',
    size === 'sm' && 'steps_sm',
    size === 'lg' && 'steps_lg',
    dot && 'steps_dot',
    iconStyle && 'steps_icon-style',
    navigable && 'steps_navigable',
    align === 'center' && 'steps_align-center',
    className,
  );

  return (
    <StepsProvider value={contextValue}>
      <ol ref={rootRef} className={rootClass} aria-label={ariaLabel} {...rest}>
        {children}
      </ol>
    </StepsProvider>
  );
}
