import { useCallback, useMemo, useRef } from 'react';
import { TreeContext } from '@/components/context/TreeContext';
import { cn } from '@/utils/cn';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Tree', {
  booleanProps: new Set(['bordered', 'lines', 'compact', 'multiselectable']),
  selfClosing: false,
});

export default function Tree({
  bordered = false,
  lines = false,
  compact = false,
  ariaLabel,
  multiselectable = false,
  children,
  className,
  ...rest
}) {
  const props = { bordered, lines, compact, ariaLabel, multiselectable };
  const rootRef = useRef(null);
  const selectableNodesRef = useRef(new Set());
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  const selectNode = useCallback((nodeRef) => {
    for (const ref of selectableNodesRef.current) {
      if (ref !== nodeRef) {
        ref.value = false;
      }
    }
    nodeRef.value = true;
  }, []);

  const registerSelectable = useCallback((nodeRef) => {
    selectableNodesRef.current.add(nodeRef);
    return () => {
      selectableNodesRef.current.delete(nodeRef);
    };
  }, []);

  const treeContext = useMemo(
    () => ({ selectNode, registerSelectable }),
    [selectNode, registerSelectable],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'tree',
    bordered && 'tree_bordered',
    lines && 'tree_lines',
    compact && 'tree_compact',
    className,
  );

  return (
    <TreeContext.Provider value={treeContext}>
      <ul
        ref={rootRef}
        className={rootClass}
        role="tree"
        aria-label={ariaLabel}
        aria-multiselectable={multiselectable ? 'true' : undefined}
        {...rest}
      >
        {children}
      </ul>
    </TreeContext.Provider>
  );
}
