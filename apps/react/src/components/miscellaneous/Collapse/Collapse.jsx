/**
 * Collapse 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { createContext, useCallback, useMemo, useRef } from 'react';

export const CollapseContext = createContext(null);

export function Collapse({
  children,
  className = '',
  variant = 'bordered',
  size = 'md',
  accordion = false,
  effect,
  ...props
}) {
  const rootRef = useRef(null);
  const panelsRef = useRef(new Map());
  const accordionRef = useRef(accordion);
  accordionRef.current = accordion;

  const registerPanel = useCallback((panel) => {
    panelsRef.current.set(panel.id, panel);
    return () => panelsRef.current.delete(panel.id);
  }, []);

  const togglePanel = useCallback((id) => {
    const panel = panelsRef.current.get(id);
    if (!panel || panel.disabled()) return;
    const willOpen = !panel.isOpen();
    if (willOpen && accordionRef.current) {
      panelsRef.current.forEach((other, otherId) => {
        if (otherId !== id && !other.disabled()) other.setOpen(false);
      });
    }
    panel.setOpen(willOpen);
  }, []);

  const focusAdjacent = useCallback((id, key) => {
    const enabled = [...panelsRef.current.values()].filter((panel) => !panel.disabled());
    const index = enabled.findIndex((panel) => panel.id === id);
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
    () => ({ effect, focusAdjacent, registerPanel, togglePanel }),
    [effect, focusAdjacent, registerPanel, togglePanel],
  );
  const resolvedVariant = ['bordered', 'ghost', 'card'].includes(variant) ? variant : 'bordered';
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  const classes = [
    'collapse_group',
    `collapse_${resolvedVariant}`,
    resolvedSize !== 'md' && `collapse_${resolvedSize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <CollapseContext.Provider value={context}>
      <div
        {...props}
        ref={rootRef}
        className={classes}
        data-collapse=""
        data-collapse-accordion={accordion ? '' : undefined}
        data-component="Collapse"
        data-effect={effect === 'slide' ? 'slide' : undefined}
      >
        {children}
      </div>
    </CollapseContext.Provider>
  );
}

export default Collapse;
