/**
 * Tree 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
import { useEffect, useState } from 'react';

// 트리 루트의 외형과 다중 선택 가능 상태를 접근성 속성에 연결합니다.
export function Tree({
  children, // TreeNode 자식들입니다.
  bordered = false, // 테두리 트리입니다.
  lines = false, // 계층 연결선 표시 여부입니다.
  compact = false, // 조밀한 패딩입니다.
  ariaLabel, // 트리의 접근성 이름입니다.
  multiselectable = false, // 다중 선택 허용 여부입니다.
  className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
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
  label, // 노드 레이블입니다.
  expanded, // 제어 펼침 상태입니다. false면 접습니다.
  selected = false, // 선택 상태입니다.
  disabled = false, // 비활성 상태입니다.
  expandable = false, // 자식이 없어도 토글을 표시할지 여부입니다.
  plusToggle = false, // +/− 토글 스타일입니다.
  toggleLabel, // 토글 버튼 접근성 이름입니다.
  link = false, // 레이블을 링크형으로 표시할지 여부입니다.
  meta, // 노드 메타 텍스트입니다.
  prefix, // 레이블 앞 부가 콘텐츠입니다.
  icon, // 노드 아이콘입니다.
  labelSlot, // 레이블 대신 렌더링할 슬롯입니다.
  metaSlot, // 메타 대신 렌더링할 슬롯입니다.
  children, // 자식 TreeNode들입니다.
  className = '', // 추가 클래스입니다.
  onExpandedChange, // 펼침 상태 변경 콜백입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
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
