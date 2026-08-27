/**
 * Accordion 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { createContext, useCallback, useMemo, useRef } from 'react';

export const AccordionContext = createContext(null);

export function Accordion({
  children,
  className = '',
  variant = 'bordered',
  size = 'md',
  multiple = false,
  effect,
  ...props
}) {
  const rootRef = useRef(null);
  const itemsRef = useRef(new Map());
  const multipleRef = useRef(multiple);
  multipleRef.current = multiple;

  const registerItem = useCallback((item) => {
    itemsRef.current.set(item.id, item);
    return () => {
      itemsRef.current.delete(item.id);
    };
  }, []);

  const toggleItem = useCallback((id) => {
    const item = itemsRef.current.get(id);
    if (!item || item.disabled()) return;
    const willOpen = !item.isOpen();
    if (willOpen && !multipleRef.current) {
      itemsRef.current.forEach((other, otherId) => {
        if (otherId !== id && !other.disabled()) other.setOpen(false);
      });
    }
    item.setOpen(willOpen);
  }, []);

  const focusAdjacent = useCallback((id, key) => {
    const enabled = [...itemsRef.current.values()].filter((item) => !item.disabled());
    const index = enabled.findIndex((item) => item.id === id);
    let nextIndex = null;
    if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
    else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
    else if (key === 'Home') nextIndex = 0;
    else if (key === 'End') nextIndex = enabled.length - 1;
    if (nextIndex == null || !enabled[nextIndex]) return false;
    rootRef.current?.querySelector(`#${CSS.escape(enabled[nextIndex].id)}`)?.focus();
    return true;
  }, []);

  const context = useMemo(
    () => ({ effect, focusAdjacent, registerItem, toggleItem }),
    [effect, focusAdjacent, registerItem, toggleItem],
  );
  const resolvedVariant = ['bordered', 'flush', 'card'].includes(variant) ? variant : 'bordered';
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  const classes = [
    'accordion',
    `accordion_${resolvedVariant}`,
    resolvedSize !== 'md' && `accordion_${resolvedSize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <AccordionContext.Provider value={context}>
      <div
        {...props}
        ref={rootRef}
        className={classes}
        data-accordion=""
        data-accordion-multiple={multiple ? '' : undefined}
        data-component="Accordion"
        data-effect={effect === 'slide' ? 'slide' : undefined}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export default Accordion;
