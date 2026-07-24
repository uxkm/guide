import {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useCollapseGroupDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export const CollapseContext = createContext(null);

const VALID_VARIANTS = new Set(['bordered', 'ghost', 'card']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

export default function Collapse({
  variant = 'bordered',
  size = 'md',
  accordion,
  narrow,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const panelsMapRef = useRef(new Map());
  const [registeredPanels, setRegisteredPanels] = useState([]);
  const panelsRef = useRef(registeredPanels);
  panelsRef.current = registeredPanels;

  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'bordered';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const accordionRef = useRef(accordion);
  accordionRef.current = accordion;

  useCollapseGroupDemoCode(
    {
      variant: resolvedVariant,
      size: resolvedSize,
      accordion,
      narrow,
    },
    panelsRef,
    rootRef,
    { className, ...rest },
  );

  const syncRegisteredPanels = useCallback(() => {
    setRegisteredPanels(
      [...panelsMapRef.current.values()].map((panel) => ({
        id: panel.id,
        label: panel.label,
        content: panel.content,
        open: panel.open,
        disabled: panel.disabled,
        hasExtra: panel.hasExtra,
        extraCode: panel.extraCode,
        // formatCollapseCode는 Vue ref처럼 isOpen.value를 읽음
        isOpen: {
          get value() {
            return panel.getIsOpen();
          },
        },
      })),
    );
  }, []);

  const registerPanel = useCallback(
    (panel) => {
      panelsMapRef.current.set(panel.id, panel);
      syncRegisteredPanels();
    },
    [syncRegisteredPanels],
  );

  const unregisterPanel = useCallback(
    (id) => {
      panelsMapRef.current.delete(id);
      syncRegisteredPanels();
    },
    [syncRegisteredPanels],
  );

  const updatePanelMeta = useCallback(
    (id, patch) => {
      const current = panelsMapRef.current.get(id);
      if (!current) return;
      panelsMapRef.current.set(id, { ...current, ...patch });
      syncRegisteredPanels();
    },
    [syncRegisteredPanels],
  );

  const togglePanel = useCallback(
    (id) => {
      const panel = panelsMapRef.current.get(id);
      if (!panel || panel.disabled) return;

      const willOpen = !panel.getIsOpen();

      if (accordionRef.current && willOpen) {
        for (const [otherId, other] of panelsMapRef.current) {
          if (otherId !== id && !other.disabled) {
            other.setIsOpen(false);
          }
        }
      }

      panel.setIsOpen(willOpen);
      syncRegisteredPanels();
    },
    [syncRegisteredPanels],
  );

  const contextValue = useMemo(
    () => ({
      registerPanel,
      unregisterPanel,
      updatePanelMeta,
      togglePanel,
    }),
    [registerPanel, unregisterPanel, updatePanelMeta, togglePanel],
  );

  const rootClass = useMemo(() => {
    const classes = ['collapse_group', `collapse_${resolvedVariant}`];
    if (resolvedSize === 'sm') classes.push('collapse_sm');
    if (resolvedSize === 'lg') classes.push('collapse_lg');
    if (narrow) classes.push('collapse_demo-narrow');
    return classes;
  }, [resolvedVariant, resolvedSize, narrow]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <CollapseContext.Provider value={contextValue}>
      <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
        {children}
      </div>
    </CollapseContext.Provider>
  );
}
