import { ripplePropTag, rippleClassRows } from '@/doc/data/ripple-api';
export const tagPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const tagProps = [
  { name: 'color', type: 'string', default: 'primary', description: '공통 color_* 클래스' },
  { name: 'variant', type: `'filled' | 'solid' | 'outline' | 'borderless'`, default: 'filled', description: '태그 스킨' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'tag_sm · tag_lg' },
  { name: 'round', type: 'boolean', default: 'false', description: 'pill 형태 (tag_round)' },
  { name: 'checkable', type: 'boolean', default: 'false', description: '토글 버튼 (tag_checkable)' },
  { name: 'add', type: 'boolean', default: 'false', description: '추가 버튼 (tag_add)' },
  { name: 'closable', type: 'boolean', default: 'false', description: '닫기 버튼 표시' },
  { name: 'selected', type: 'boolean', default: 'false', description: '선택 상태 (is-selected)' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성 (is-disabled)' },
  { name: 'label', type: 'string', default: '—', description: '태그 텍스트. default 슬롯으로 대체 가능' },
  { name: 'href', type: 'string', default: '—', description: '링크 태그일 때 href (a 태그)' },
  { name: 'close-label', type: 'string', default: '—', description: '닫기 버튼 aria-label' },
  ripplePropTag,
];

export const tagGroupPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const tagGroupProps = [
  { name: 'tight', type: 'boolean', default: 'false', description: '좁은 간격 (tag_group-tight)' },
  { name: 'aria-label', type: 'string', default: '—', description: '그룹 접근성 라벨' },
];

export const tagSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const tagSlots = [
  { name: 'default', description: '태그 텍스트 (label prop 대체)' },
  { name: 'icon', description: '텍스트 앞 아이콘 (tag_icon)' },
];

export const tagGroupSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const tagGroupSlots = [
  { name: 'default', description: 'Tag 자식 목록' },
];

export const tagClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const tagClasses = [
  { name: 'tag', description: '태그 루트' },
  { name: 'tag_solid · tag_outline · tag_borderless', description: '스킨 변형' },
  { name: 'tag_sm · tag_lg · tag_round', description: '크기·형태' },
  { name: 'tag_checkable · tag_add', description: '인터랙션 변형' },
  { name: 'tag_icon · tag_close', description: '내부 파트' },
  { name: 'tag_group · tag_group-tight', description: '태그 묶음' },
  { name: 'is-selected · is-disabled', description: '상태 클래스' },
  { name: 'color_*', description: '공통 색상 유틸' },
  ...rippleClassRows,
];

export const tagTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const tagTokens = [
  { name: '--tag-font-size · --tag-padding-y · --tag-padding-x', default: '—', description: '기본 태그 타이포·패딩' },
  { name: '--tag-gap', default: 'var(--space-xs)', description: '아이콘·텍스트 간격' },
  { name: '--tag-close-size', default: '0.875rem', description: '닫기 버튼 크기' },
  { name: '--tag-add-border-style', default: 'dashed', description: '추가 태그 테두리' },
];
