import { ripplePropSurface, rippleClassRows } from '@/doc/data/ripple-api';
export const switchPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const switchProps = [
  { name: 'label', type: 'string', default: '—', description: '라벨 텍스트. children으로 대체' },
  { name: 'checked', type: 'boolean', default: 'false', description: '켜짐 상태' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성' },
  { name: 'labelEnd', type: 'boolean', default: 'false', description: '라벨을 스위치 뒤에 배치' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'switch_sm · switch_lg' },
  { name: 'ariaLabel', type: 'string', default: '—', description: '라벨 없을 때 접근성 라벨' },
  { name: 'className', type: 'string', default: '—', description: 'switch 루트에 추가 클래스' },
  { name: 'onChange', type: '(event) => void', default: '—', description: '상태 변경 콜백' },
  ripplePropSurface,
];

export const switchChildColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const switchChildren = [
  { name: 'label', description: '라벨 텍스트. children으로 대체 가능' },
  {
    name: 'children',
    description: '라벨 텍스트 (label prop 대체, Vue default 슬롯 대응). switch_content · switch_hint 조합 가능',
  },
];

/** @deprecated 가이드·Storybook은 switchChildColumns · switchChildren 사용 */
export const switchSlotColumns = switchChildColumns;

/** @deprecated */
export const switchSlots = switchChildren;

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
