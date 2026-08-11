import { useEffect, useState } from 'react';

export function Tree({ children, bordered = false, lines = false, compact = false, ariaLabel, multiselectable = false, className = '', ...props }) {
  const classes = ['tree', bordered && 'tree_bordered', lines && 'tree_lines', compact && 'tree_compact', className].filter(Boolean).join(' ');
  return <ul {...props} className={classes} data-component="Tree" role="tree" aria-label={ariaLabel} aria-multiselectable={multiselectable || undefined}>{children}</ul>;
}

export function TreeNode({ label, expanded, selected = false, disabled = false, expandable = false, plusToggle = false, toggleLabel, link = false, meta, prefix, icon, labelSlot, metaSlot, children, className = '', onExpandedChange, ...props }) {
  const hasChildren = Boolean(children);
  const showToggle = expandable || hasChildren;
  const [isExpanded, setIsExpanded] = useState(expanded !== false);
  useEffect(() => { if (expanded !== undefined) setIsExpanded(expanded !== false); }, [expanded]);
  const toggle = () => {
    if (disabled) return;
    setIsExpanded((current) => { const next = !current; onExpandedChange?.(next); return next; });
  };
  const labelContent = labelSlot ?? <span className="tree_label">{label}</span>;
  const metaContent = metaSlot ?? meta;
  return (
    <li {...props} className={['tree_item', className].filter(Boolean).join(' ')} data-component="TreeNode" role="treeitem" aria-expanded={showToggle ? isExpanded : undefined}>
      <div className={['tree_row', selected && 'is-selected', disabled && 'is-disabled'].filter(Boolean).join(' ')}>
        {showToggle ? <button type="button" className={['tree_toggle', plusToggle && 'tree_toggle-plus'].filter(Boolean).join(' ')} aria-expanded={isExpanded} aria-label={toggleLabel} disabled={disabled || undefined} onClick={toggle} /> : <span className="tree_toggle tree_toggle_placeholder" aria-hidden="true" />}
        {prefix}
        {icon ? <span className="tree_icon" aria-hidden="true">{icon}</span> : null}
        {link ? <button type="button" className="tree_link" disabled={disabled || undefined}>{labelContent}</button> : labelContent}
        {metaContent != null && metaContent !== '' ? <span className="tree_meta">{metaContent}</span> : null}
      </div>
      {hasChildren ? <ul className="tree" role="group" hidden={!isExpanded}>{children}</ul> : null}
    </li>
  );
}

export default Tree;
