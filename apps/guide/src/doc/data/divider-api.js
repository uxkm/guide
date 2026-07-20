export const dividerPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const dividerProps = [
  {
    name: 'dashed',
    type: 'boolean',
    default: 'false',
    description: '점선 스타일 (divider_dashed)',
  },
  {
    name: 'plain',
    type: 'boolean',
    default: 'false',
    description: '레이블 보조 톤 (divider_plain)',
  },
  {
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '세로 구분선 (divider_vertical)',
  },
  {
    name: 'orient',
    type: `'left' | 'right'`,
    default: '—',
    description: '레이블 정렬. 생략 시 가운데',
  },
  {
    name: 'label',
    type: 'string',
    default: '—',
    description: '가운데 레이블 텍스트. default 슬롯으로 대체 가능',
  },
  {
    name: 'tag',
    type: `'auto' | 'hr' | 'div' | 'span'`,
    default: 'auto',
    description: '루트 태그. auto는 vertical·레이블 유무에 따라 hr · div · span 선택',
  },
];

export const dividerSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const dividerSlots = [
  { name: 'default', description: '레이블 텍스트 (label prop 대체)' },
];

export const dividerClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const dividerClasses = [
  { name: 'divider', description: '가로·세로 구분선 루트' },
  { name: 'divider_dashed', description: '점선 스타일' },
  { name: 'divider_plain', description: '보조 톤 레이블' },
  { name: 'divider_vertical', description: '세로 구분선 (인라인·flex 행)' },
  { name: 'divider_orient-left · divider_orient-right', description: '레이블 좌·우 정렬' },
];

export const dividerTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const dividerTokens = [
  { name: '--divider-color', default: 'var(--color-border-subtle)', description: '선 색상' },
  { name: '--divider-thickness', default: '1px', description: '선 두께' },
  { name: '--divider-margin-y', default: 'var(--space-md)', description: '가로 구분선 상하 여백' },
  { name: '--divider-margin-x', default: 'var(--space-sm)', description: '세로 구분선 좌우 여백' },
  { name: '--divider-text-gap', default: 'var(--space-md)', description: '레이블·선 사이 간격' },
  { name: '--divider-orient-inset', default: '5%', description: 'orient-left · orient-right 선 길이' },
];
