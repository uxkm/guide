export const containerPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const containerProps = [
  {
    name: 'fluid',
    type: 'boolean',
    default: 'false',
    description: '최대 너비 제한 없이 부모 너비 전체 사용 (container_fluid)',
  },
  {
    name: 'size',
    type: `'sm' | 'md' | 'lg' | 'xl'`,
    default: '—',
    description: '고정 최대 너비 변형 (container_sm · container_md · container_lg · container_xl)',
  },
];

export const containerSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const containerSlots = [
  { name: 'default', description: '컨테이너 내부 콘텐츠' },
];

export const containerClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const containerClasses = [
  { name: 'container', description: '중앙 정렬·기본 max-width·좌우 패딩' },
  { name: 'container_fluid', description: 'max-width 제한 해제' },
  { name: 'container_sm · container_md · container_lg · container_xl', description: '고정 최대 너비 변형' },
];

export const containerTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const containerTokens = [
  { name: '--container-max-width', default: '72rem', description: '기본 최대 너비' },
  { name: '--container-max-width-sm', default: '36rem', description: 'container_sm' },
  { name: '--container-max-width-md', default: '48rem', description: 'container_md' },
  { name: '--container-max-width-lg', default: '64rem', description: 'container_lg' },
  { name: '--container-max-width-xl', default: '80rem', description: 'container_xl' },
  { name: '--container-padding-x', default: 'var(--space-xl)', description: '좌우 패딩' },
];
