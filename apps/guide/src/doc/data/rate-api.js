import { ripplePropContainer, rippleClassRows } from '@/doc/data/ripple-api';
export const ratePropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const rateProps = [
  { name: 'model-value', type: 'number', default: '—', description: 'v-model 별점 값' },
  { name: 'value', type: 'number', default: '—', description: 'model-value 없을 때 표시값' },
  { name: 'count', type: 'number', default: '5', description: '별 개수' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'rate_sm · rate_lg' },
  { name: 'allow-half', type: 'boolean', default: 'false', description: '0.5점 단위 (rate_allow-half)' },
  { name: 'clearable', type: 'boolean', default: 'false', description: '초기화 버튼 (rate_clearable)' },
  { name: 'readonly', type: 'boolean', default: 'false', description: '읽기 전용 표시 (is-readonly)' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성' },
  { name: 'legend', type: 'string', default: '—', description: 'fieldset legend' },
  { name: 'name', type: 'string', default: '—', description: 'radio name (그룹)' },
  ripplePropContainer,
];

export const rateSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const rateSlots = [];

export const rateClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const rateClasses = [
  { name: 'rate', description: '별점 루트' },
  { name: 'rate_sm · rate_lg · rate_allow-half · rate_clearable', description: '크기·기능' },
  { name: 'rate_stars · rate_star · rate_star-graphic', description: '별 아이콘' },
  { name: 'rate_input · rate_star-label · rate_value · rate_clear', description: '입력·값·초기화' },
  { name: 'rate_legend · rate_control', description: 'fieldset 구조' },
  { name: 'is-readonly · is-filled · is-half', description: '상태' },
  ...rippleClassRows,
];

export const rateEventColumns = [
  { key: 'name', label: '이벤트' },
  { key: 'description', label: '설명' },
];

export const rateEvents = [
  { name: 'update:modelValue', description: '별점 변경·초기화 시 (v-model)' },
];

export const rateTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const rateTokens = [
  { name: '--rate-star-size · --rate-star-size-sm · --rate-star-size-lg', default: '1.25rem · 1rem · 1.5rem', description: '별 크기' },
  { name: '--rate-star-gap · --rate-clear-size', default: '0.125rem · 1.5rem', description: '별 간격·초기화 버튼' },
];
