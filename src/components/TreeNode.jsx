'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { formatTreeNodeCode } from '@/utils/format-tree-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export default function TreeNode({
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
  prefix,
  icon,
  labelSlot,
  metaSlot,
  children,
  className,
  onExpandedChange,
  ...rest
}) {
  const rootRef = useRef(null);
  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });
  const hasChildren = Boolean(children);
  const showToggle = Boolean(expandable || hasChildren);
  const [isExpanded, setIsExpanded] = useState(expanded !== false);

  useEffect(() => {
    if (expanded !== undefined) setIsExpanded(expanded !== false);
  }, [expanded]);

  useComponentDemoCode(
    formatTreeNodeCode,
    {
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
    },
    createDemoSlots({
      default: children,
      prefix,
      icon,
      label: labelSlot,
      meta: metaSlot,
    }),
    rootRef,
    { className, onExpandedChange, ...rest },
  );

  function toggleExpand() {
    if (disabled) return;
    const next = !isExpanded;
    setIsExpanded(next);
    onExpandedChange?.(next);
  }

  const rowClass = useMemo(() => {
    const classes = ['tree_row'];
    if (selected) classes.push('is-selected');
    if (disabled) classes.push('is-disabled');
    return classes;
  }, [selected, disabled]);

  const toggleClass = useMemo(() => {
    const classes = ['tree_toggle'];
    if (plusToggle) classes.push('tree_toggle-plus');
    return classes;
  }, [plusToggle]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const labelContent = labelSlot ?? <span className="tree_label">{label}</span>;
  const metaContent = metaSlot ?? meta;

  return (
    <li
      ref={rootRef}
      className={cn('tree_item', className)}
      role="treeitem"
      aria-expanded={showToggle ? (isExpanded ? 'true' : 'false') : undefined}
      aria-selected={selected ? 'true' : undefined}
      aria-disabled={disabled ? 'true' : undefined}
      {...rippleAttrs}
      {...domRest}
    >
      <div className={cn(rowClass)}>
        {showToggle ? (
          <button
            type="button"
            className={cn(toggleClass)}
            aria-expanded={isExpanded ? 'true' : 'false'}
            aria-label={toggleLabel}
            disabled={disabled || undefined}
            onClick={toggleExpand}
            {...childRippleAttrs}
          />
        ) : (
          <span className="tree_toggle tree_toggle_placeholder" aria-hidden="true" />
        )}

        {prefix}

        {icon ? (
          <span className="tree_icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}

        {link ? (
          <button
            type="button"
            className="tree_link"
            disabled={disabled || undefined}
            {...childRippleAttrs}
          >
            {labelContent}
          </button>
        ) : (
          labelContent
        )}

        {metaContent != null && metaContent !== '' ? (
          <span className="tree_meta">{metaContent}</span>
        ) : null}
      </div>

      {hasChildren && isExpanded ? (
        <ul className="tree" role="group">
          {children}
        </ul>
      ) : null}
    </li>
  );
}
