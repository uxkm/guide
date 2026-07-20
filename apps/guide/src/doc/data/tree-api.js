import { ripplePropContainer, rippleClassRows } from '@/doc/data/ripple-api';
export const treePropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const treeProps = [
  { name: 'bordered', type: 'boolean', default: 'false', description: '테두리 (tree_bordered)' },
  { name: 'lines', type: 'boolean', default: 'false', description: '연결선 (tree_lines)' },
  { name: 'compact', type: 'boolean', default: 'false', description: '좁은 행 높이 (tree_compact)' },
  { name: 'aria-label', type: 'string', default: '—', description: '트리 접근성 라벨 (권장)' },
  { name: 'multiselectable', type: 'boolean', default: 'false', description: '다중 선택 aria-multiselectable' },
];

export const treeNodePropColumns = treePropColumns;
export const treeNodeProps = [
  { name: 'label', type: 'string', default: '—', description: '노드 라벨 (tree_label)' },
  { name: 'expanded', type: 'boolean', default: '—', description: '펼침 상태 (aria-expanded)' },
  { name: 'selected', type: 'boolean', default: 'false', description: '선택 상태 (is-selected)' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성 (is-disabled)' },
  { name: 'expandable', type: 'boolean', default: 'false', description: '토글 버튼 강제 표시' },
  { name: 'plus-toggle', type: 'boolean', default: 'false', description: '+ / − 토글 (tree_toggle-plus)' },
  { name: 'toggle-label', type: 'string', default: '—', description: '토글 버튼 aria-label' },
  { name: 'link', type: 'boolean', default: 'false', description: '클릭 가능 행 (tree_link)' },
  { name: 'meta', type: 'string', default: '—', description: '우측 메타 (tree_meta)' },
  ripplePropContainer,
];

export const treeSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const treeSlots = [{ name: 'default', description: 'TreeNode 자식' }];

export const treeNodeSlots = [
  { name: 'prefix', description: '토글 앞 체크박스 등' },
  { name: 'icon', description: '라벨 앞 아이콘 (tree_icon)' },
  { name: 'label', description: '라벨 텍스트 (label prop 대체)' },
  { name: 'meta', description: '우측 메타' },
  { name: 'default', description: '하위 TreeNode (중첩 tree)' },
];

export const treeClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const treeClasses = [
  { name: 'tree', description: '트리 루트·중첩 ul' },
  { name: 'tree_bordered · tree_lines · tree_compact', description: '스타일 변형' },
  { name: 'tree_item · tree_row', description: '노드 구조' },
  { name: 'tree_toggle · tree_toggle-plus · tree_toggle_placeholder', description: '펼침 토글' },
  { name: 'tree_label · tree_link · tree_meta · tree_icon', description: '행 파트' },
  { name: 'is-selected · is-disabled', description: '상태' },
  ...rippleClassRows,
];

export const treeTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const treeTokens = [
  { name: '--tree-indent', default: '1.25rem', description: '들여쓰기' },
  { name: '--tree-row-height · --tree-font-size', default: '2rem · var(--text-size-sm)', description: '행 높이·글자' },
  { name: '--tree-toggle-size · --tree-gap', default: '1.25rem · 2px', description: '토글·간격' },
  { name: '--tree-line-color', default: 'var(--color-border)', description: '연결선 색' },
];
