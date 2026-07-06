export const spacePropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const spaceProps = [
  {
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '세로 방향 배치 (space_vertical)',
  },
  {
    name: 'wrap',
    type: 'boolean',
    default: 'false',
    description: '줄바꿈 허용 (space_wrap)',
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    description: '부모 너비 100% flex (space_block)',
  },
  {
    name: 'gap',
    type: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`,
    default: 'md',
    description: '자식 간 간격. md는 클래스 없이 --space-gap 사용',
  },
  {
    name: 'align',
    type: `'start' | 'center' | 'end' | 'baseline' | 'stretch'`,
    default: '—',
    description: '교차축 정렬 (space_align-*)',
  },
  {
    name: 'justify',
    type: `'start' | 'center' | 'end' | 'between'`,
    default: '—',
    description: '주축 정렬 (space_justify-*)',
  },
];

export const spaceSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const spaceSlots = [
  { name: 'default', description: '간격을 둘 자식 요소' },
];

export const spaceClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const spaceClasses = [
  { name: 'space', description: 'inline-flex 루트, 기본 가로 배치' },
  { name: 'space_vertical', description: '세로 방향' },
  { name: 'space_wrap', description: '줄바꿈' },
  { name: 'space_block', description: 'display flex + width 100%' },
  { name: 'space_gap-xs · space_gap-sm · space_gap-lg · space_gap-xl', description: '간격 변형 (md는 기본)' },
  { name: 'space_align-start · space_align-center · space_align-end · space_align-baseline · space_align-stretch', description: '교차축 정렬' },
  { name: 'space_justify-start · space_justify-center · space_justify-end · space_justify-between', description: '주축 정렬' },
];

export const spaceTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const spaceTokens = [
  { name: '--space-gap', default: 'var(--space-md)', description: '기본 자식 간 간격 (gap md)' },
];
