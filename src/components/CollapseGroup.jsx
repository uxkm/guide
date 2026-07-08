import { useCallback, useMemo, useRef, useState } from 'react';
import { CollapseGroupContext } from '@/components/context/CollapseGroupContext';
import { cn } from '@/utils/cn';
import { useCollapseGroupDemoCode } from '@/hooks/useDemoCode';

export default function CollapseGroup({
  variant = 'bordered',
  size = 'md',
  accordion,
  narrow,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const panelsRef = useRef(new Map());
  const [registeredPanels, setRegisteredPanels] = useState([]);
  const props = { variant, size, accordion, narrow };

  const rootClass = cn(
    'collapse_group',
    `collapse_${variant}`,
    size === 'sm' && 'collapse_sm',
    size === 'lg' && 'collapse_lg',
    narrow && 'collapse_demo-narrow',
    className,
  );

  const syncRegisteredPanels = useCallback(() => {
    setRegisteredPanels((prev) => {
      const next = [...panelsRef.current.values()];
      if (
        prev.length === next.length &&
        prev.every((panel, index) => panel.id === next[index]?.id)
      ) {
        return prev;
      }
      return next;
    });
  }, []);

  const registerPanel = useCallback((panel) => {
    panelsRef.current.set(panel.id, panel);
    syncRegisteredPanels();
  }, [syncRegisteredPanels]);

  const unregisterPanel = useCallback((id) => {
    panelsRef.current.delete(id);
    syncRegisteredPanels();
  }, [syncRegisteredPanels]);

  const togglePanel = useCallback(
    (id, isOpenRef) => {
      const panel = panelsRef.current.get(id);
      if (!panel || panel.disabled) return;

      const willOpen = !isOpenRef.value;

      if (accordion && willOpen) {
        for (const [otherId, other] of panelsRef.current) {
          if (otherId !== id && !other.disabled) {
            other.isOpen.value = false;
          }
        }
      }

      isOpenRef.value = willOpen;
    },
    [accordion],
  );

  const contextValue = useMemo(
    () => ({
      registerPanel,
      unregisterPanel,
      togglePanel,
    }),
    [registerPanel, unregisterPanel, togglePanel],
  );

  useCollapseGroupDemoCode(props, registeredPanels, rootRef, { class: className, ...rest });

  return (
    <CollapseGroupContext.Provider value={contextValue}>
      <div ref={rootRef} className={rootClass} {...rest}>
        {children}
      </div>
    </CollapseGroupContext.Provider>
  );
}
