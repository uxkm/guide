import { useEffect, useMemo, useReducer, useRef } from 'react';
import { useTree } from '@/components/context/TreeContext';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('TreeNode', {
  booleanProps: new Set(['expanded', 'selected', 'disabled', 'expandable', 'plusToggle', 'link']),
  selfClosing: false,
});

function useMutableRef(initial) {
  const stateRef = useRef(initial);
  const [, bump] = useReducer((count) => count + 1, 0);

  return useMemo(
    () => ({
      get value() {
        return stateRef.current;
      },
      set value(next) {
        stateRef.current = next;
        bump();
      },
    }),
    [],
  );
}

export default function TreeNode({
  ripple,
  label,
  expanded = false,
  selected = false,
  disabled = false,
  expandable = false,
  plusToggle: plusToggleProp = false,
  'plus-toggle': plusToggleKebab,
  toggleLabel,
  link = false,
  meta,
  prefix,
  icon,
  labelSlot,
  metaSlot,
  children,
  className,
  ...rest
}) {
  const plusToggle = plusToggleProp || Boolean(plusToggleKebab);
  const isExpanded = useMutableRef(expanded);
  const isSelected = useMutableRef(selected);
  const tree = useTree();
  const props = {
    ripple,
    label,
    expanded,
    selected,
    disabled,
    expandable,
    plusToggle,
    toggleLabel,
    link,
    meta,
  };
  const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });
  const rootRef = useRef(null);
  const hasChildren = Boolean(children);
  const showToggle = expandable || hasChildren;
  const demoSlots = useMemo(
    () =>
      createDemoSlots({
        default: children,
        prefix,
        icon,
        label: labelSlot,
        meta: metaSlot,
      }),
    [children, prefix, icon, labelSlot, metaSlot],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  useEffect(() => {
    if (!link || !tree) {
      return undefined;
    }

    return tree.registerSelectable(isSelected);
  }, [link, tree, isSelected]);

  function handleToggleClick() {
    if (disabled) {
      return;
    }

    isExpanded.value = !isExpanded.value;
  }

  function handleLinkClick() {
    if (disabled) {
      return;
    }

    if (tree) {
      tree.selectNode(isSelected);
      return;
    }

    isSelected.value = true;
  }

  const rowClass = cn('tree_row', isSelected.value && 'is-selected', disabled && 'is-disabled');
  const toggleClass = cn('tree_toggle', plusToggle && 'tree_toggle-plus');
  const labelContent = labelSlot ?? <span className="tree_label">{label}</span>;

  return (
    <li
      ref={rootRef}
      {...rippleAttrs}
      className={cn('tree_item', className)}
      role="treeitem"
      aria-expanded={showToggle ? (isExpanded.value ? 'true' : 'false') : undefined}
    >
      <div className={rowClass}>
        {showToggle ? (
          <button
            {...childRippleAttrs}
            type="button"
            className={toggleClass}
            aria-expanded={isExpanded.value ? 'true' : 'false'}
            aria-label={toggleLabel}
            disabled={disabled || undefined}
            onClick={handleToggleClick}
          />
        ) : (
          <span className="tree_toggle tree_toggle_placeholder" aria-hidden="true" />
        )}

        {prefix}

        {icon && (
          <span className="tree_icon" aria-hidden="true">
            {icon}
          </span>
        )}

        {link ? (
          <button
            {...childRippleAttrs}
            type="button"
            className="tree_link"
            onClick={handleLinkClick}
          >
            {labelContent}
          </button>
        ) : (
          labelContent
        )}

        {(meta || metaSlot) && (
          <span className="tree_meta">{metaSlot ?? meta}</span>
        )}
      </div>

      {hasChildren && isExpanded.value && (
        <ul className="tree" role="group">
          {children}
        </ul>
      )}
    </li>
  );
}
