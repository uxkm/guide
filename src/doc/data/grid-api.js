export const gridPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const gridProps = [
  {
    name: 'cols',
    type: 'number | string',
    default: '—',
    description: '균등 열 수 (grid_cols-*)',
  },
  {
    name: 'cols-md',
    type: 'number | string',
    default: '—',
    description: 'md 브레이크포인트 이상 균등 열 수',
  },
  {
    name: 'cols-lg',
    type: 'number | string',
    default: '—',
    description: 'lg 브레이크포인트 이상 균등 열 수',
  },
  {
    name: 'ratio',
    type: `'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'`,
    default: '—',
    description: '2~3열 비율 레이아웃 (grid_ratio-*)',
  },
  {
    name: 'item-span',
    type: 'number | string',
    default: '—',
    description: '모든 자식에 동일 span 적용 (12열 기준, grid_item-span-*)',
  },
  {
    name: 'item-span-md',
    type: 'number | string',
    default: '—',
    description: 'md 이상 자식 일괄 span',
  },
  {
    name: 'item-span-lg',
    type: 'number | string',
    default: '—',
    description: 'lg 이상 자식 일괄 span',
  },
  {
    name: 'gap',
    type: `'sm' | 'lg' | 'none'`,
    default: '—',
    description: '열·행 간격. 생략 시 --grid-gap (md)',
  },
  {
    name: 'auto-fit',
    type: 'boolean',
    default: 'false',
    description: 'auto-fit 반복 열 (grid_auto-fit)',
  },
  {
    name: 'auto-fill',
    type: 'boolean',
    default: 'false',
    description: 'auto-fill 반복 열 (grid_auto-fill)',
  },
];

export const gridColPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const gridColProps = [
  {
    name: 'span',
    type: 'number | string',
    default: '—',
    description: '12열 기준 개별 열 span (grid_col-span-*, 필수)',
  },
];

export const gridSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const gridSlots = [
  { name: 'default', description: '그리드 자식 콘텐츠' },
];

export const gridColSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const gridColSlots = [
  { name: 'default', description: '열 셀 내부 콘텐츠' },
];

export const gridClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const gridClasses = [
  { name: 'grid', description: '12열 CSS Grid 루트' },
  { name: 'grid_cols-* · grid_cols-md-* · grid_cols-lg-*', description: '균등 열 수' },
  { name: 'grid_ratio-*', description: '비율 열 (2-1, 1-2-1 등)' },
  { name: 'grid_item-span-* · grid_item-span-md-* · grid_item-span-lg-*', description: '자식 일괄 span' },
  { name: 'grid_col-span-*', description: '자식별 개별 span (GridCol)' },
  { name: 'grid_gap-sm · grid_gap-lg · grid_gap-none', description: '간격 변형' },
  { name: 'grid_auto-fit · grid_auto-fill', description: '자동 반복 열' },
  { name: 'grid_equal-columns', description: '균등 열 자동 흐름' },
  { name: 'grid_align-center · grid_align-end', description: '교차축 정렬' },
];

export const gridTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const gridTokens = [
  { name: '--grid-columns', default: '12', description: '기본 열 수' },
  { name: '--grid-gap', default: 'var(--space-md)', description: '기본 간격' },
  { name: '--grid-gap-sm · --grid-gap-lg', default: 'var(--space-sm) · var(--space-lg)', description: '간격 변형' },
  { name: '--grid-auto-min', default: '10rem', description: 'auto-fit · auto-fill 최소 열 너비' },
];
