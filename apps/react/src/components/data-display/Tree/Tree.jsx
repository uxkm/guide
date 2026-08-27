/**
 * Tree 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { useEffect, useState } from 'react';

// 트리 루트의 외형과 다중 선택 가능 상태를 접근성 속성에 연결합니다.
export function Tree({
  children,
  bordered = false,
  lines = false,
  compact = false,
  ariaLabel,
  multiselectable = false,
  className = '',
  ...props
}) {
  const classes = [
    'tree',
    bordered && 'tree_bordered',
    lines && 'tree_lines',
    compact && 'tree_compact',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <ul
      {...props}
      className={classes}
      data-component="Tree"
      role="tree"
      aria-label={ariaLabel}
      aria-multiselectable={multiselectable || undefined}
    >
      {children}
    </ul>
  );
}

export function TreeNode({
  label,
  expanded,
  selected = false,
  disabled = false,
  expandable = false,
  plusToggle = false,
  toggleLabel,
  link = false,
  meta,
  prefix,
  icon,
  labelSlot,
  metaSlot,
  children,
  className = '',
  onExpandedChange,
  ...props
}) {
  // 자식 유무와 expandable prop으로 토글 노출을 결정하고 제어·비제어 확장 상태를 지원합니다.
  const hasChildren = Boolean(children);
  const showToggle = expandable || hasChildren;
  const [isExpanded, setIsExpanded] = useState(expanded !== false);
  useEffect(() => {
    if (expanded !== undefined) setIsExpanded(expanded !== false);
  }, [expanded]);
  // 토글 시 내부 상태와 외부 onExpandedChange 콜백을 같은 값으로 갱신합니다.
  const toggle = () => {
    setIsExpanded((current) => {
      const next = !current;
      onExpandedChange?.(next);
      return next;
    });
  };
  const labelContent = labelSlot ?? <span className="tree_label">{label}</span>;
  const metaContent = metaSlot ?? meta;
  // treeitem·group 관계와 aria-expanded를 실제 하위 목록 표시 상태에 맞춥니다.
  return (
    <li
      {...props}
      className={['tree_item', className].filter(Boolean).join(' ')}
      data-component="TreeNode"
      role="treeitem"
      aria-expanded={showToggle ? isExpanded : undefined}
    >
      <div
        className={['tree_row', selected && 'is-selected', disabled && 'is-disabled']
          .filter(Boolean)
          .join(' ')}
      >
        {showToggle ? (
          <button
            type="button"
            className={['tree_toggle', plusToggle && 'tree_toggle-plus'].filter(Boolean).join(' ')}
            aria-expanded={isExpanded}
            aria-label={toggleLabel}
            disabled={disabled || undefined}
            onClick={toggle}
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
          <button type="button" className="tree_link" disabled={disabled || undefined}>
            {labelContent}
          </button>
        ) : (
          labelContent
        )}
        {metaContent != null && metaContent !== '' ? (
          <span className="tree_meta">{metaContent}</span>
        ) : null}
      </div>
      {hasChildren ? (
        <ul className="tree" role="group" hidden={!isExpanded}>
          {children}
        </ul>
      ) : null}
    </li>
  );
}

export default Tree;
