export const badgePropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const badgeProps = [
  { name: 'color', type: 'string', default: 'primary', description: '공통 color_* 클래스' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'badge_sm · badge_lg' },
  { name: 'dot', type: 'boolean', default: 'false', description: '텍스트 앞 점 표시 (badge_dot)' },
  { name: 'count', type: 'boolean', default: 'false', description: '숫자 카운트 형태 (badge_count)' },
  { name: 'dot-only', type: 'boolean', default: 'false', description: '점만 표시 (badge_dot-only)' },
  { name: 'label', type: 'string', default: '—', description: '배지 텍스트. default 슬롯으로 대체 가능' },
  { name: 'aria-label', type: 'string', default: '—', description: 'dot-only·카운트 등 접근성 라벨' },
];

export const badgeWrapPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const badgeWrapProps = [
  { name: 'aria-label', type: 'string', default: '—', description: '래퍼 접근성 라벨 (선택)' },
];

export const badgeSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const badgeSlots = [
  { name: 'default', description: '배지 텍스트 (label prop 대체)' },
];

export const badgeWrapSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const badgeWrapSlots = [
  { name: 'default', description: '기준 요소 + Badge 자식' },
];

export const badgeClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const badgeClasses = [
  { name: 'badge', description: '배지 루트' },
  { name: 'badge_sm · badge_lg', description: '크기 변형' },
  { name: 'badge_dot · badge_count · badge_dot-only', description: '형태 변형' },
  { name: 'badge_wrap', description: '겹침 배치 컨테이너' },
  { name: 'color_*', description: '공통 색상 유틸' },
];

export const badgeTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const badgeTokens = [
  { name: '--badge-font-size · --badge-padding-y · --badge-padding-x', default: '—', description: '기본 배지 타이포·패딩' },
  { name: '--badge-dot-size · --badge-dot-size-sm · --badge-dot-size-lg', default: '6px · 5px · 7px', description: '점 크기' },
  { name: '--badge-count-min-width', default: '1.25rem', description: '카운트 최소 너비' },
  { name: '--badge-overlay-border', default: '2px', description: '겹침 시 테두리' },
];
