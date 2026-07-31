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
    description: '레이블 글자 굵기를 400으로 변경 (divider_plain)',
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
    type: 'ReactNode',
    default: '—',
    description: '구분선 레이블. children이 있으면 children을 우선 사용',
  },
  {
    name: 'tag',
    type: `'auto' | 'hr' | 'div' | 'span'`,
    default: 'auto',
    description: '루트 태그. auto는 레이블 없는 가로 hr · 레이블 있는 가로 div · 세로 span 선택',
  },
];

export const dividerSlotColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const dividerSlots = [
  { name: 'children', description: '레이블 콘텐츠. label prop보다 우선하며 ReactNode를 지원' },
];

export const dividerClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const dividerClasses = [
  { name: 'divider', description: '가로·세로 구분선 루트' },
  { name: 'divider_dashed', description: '점선 스타일' },
  { name: 'divider_plain', description: '레이블 글자 굵기를 400으로 변경' },
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
  { name: '--divider-orient-inset', default: '5%', description: '좌·우 정렬 시 짧은 쪽 선 길이' },
];
