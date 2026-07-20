import { ripplePropSurface, rippleClassRows } from '@/doc/data/ripple-api';
export const switchPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const switchProps = [
  { name: 'label', type: 'string', default: '—', description: '라벨 텍스트. default 슬롯으로 대체' },
  { name: 'checked', type: 'boolean', default: 'false', description: '켜짐 상태' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성' },
  { name: 'label-end', type: 'boolean', default: 'false', description: '라벨을 스위치 뒤에 배치' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'switch_sm · switch_lg' },
  { name: 'aria-label', type: 'string', default: '—', description: '라벨 없을 때 접근성 라벨' },
  ripplePropSurface,
];

export const switchSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const switchSlots = [
  { name: 'default', description: '라벨 텍스트 (label prop 대체)' },
];

export const switchClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const switchClasses = [
  { name: 'switch', description: '스위치 루트 label' },
  { name: 'switch_sm · switch_lg · switch_label-end', description: '크기·레이아웃' },
  { name: 'switch_control · switch_input · switch_track · switch_thumb', description: '입력·트랙' },
  { name: 'switch_label', description: '라벨' },
  { name: 'switch_group', description: '여러 스위치 묶음' },
  ...rippleClassRows,
];

export const switchTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const switchTokens = [
  { name: '--switch-width · --switch-height', default: '2.75rem · 1.5rem', description: '트랙 크기 (md)' },
  { name: '--switch-width-sm · --switch-width-lg', default: '2.25rem · 3.25rem', description: '크기 변형' },
  { name: '--switch-gap · --switch-radius', default: '—', description: '라벨 간격·모서리' },
];
