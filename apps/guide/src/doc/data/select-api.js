import { ripplePropSelect, rippleClassRows } from '@/doc/data/ripple-api';
export const selectPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const selectProps = [
  { name: 'model-value', type: 'string | number', default: '—', description: 'v-model 바인딩 값' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'input_sm · btn_sm 등 크기' },
  { name: 'list-size', type: 'number', default: '—', description: '네이티브 size — multiple 표시 행 수' },
  { name: 'placeholder', type: 'string', default: '—', description: '미선택 placeholder' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성' },
  { name: 'error', type: 'boolean', default: 'false', description: '오류 상태 (is-error)' },
  { name: 'open', type: 'boolean', default: 'false', description: 'custom 트리거 열림 (is-open)' },
  { name: 'block', type: 'boolean', default: 'false', description: '부모 너비 100%' },
  { name: 'custom', type: 'boolean', default: 'false', description: 'button 트리거 + listbox 패턴' },
  { name: 'select-text', type: 'boolean', default: 'false', description: '텍스트형 트리거 (btn_select-text)' },
  ripplePropSelect,
];

export const selectSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const selectSlots = [
  { name: 'default', description: 'option 요소 또는 custom 트리거 라벨' },
];

export const selectClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const selectClasses = [
  { name: 'input (native)', description: '네이티브 select 스타일' },
  { name: 'btn_select · btn_select-text · btn_select-caret', description: 'custom 트리거' },
  { name: 'btn_select-placeholder · is-open', description: '트리거 상태' },
  { name: 'select_dropdown · select_option', description: '드롭다운 패널 (HTML 마크업)' },
  { name: 'is-error · is-disabled', description: '상태' },
  ...rippleClassRows,
];

export const selectEventColumns = [
  { key: 'name', label: '이벤트' },
  { key: 'description', label: '설명' },
];

export const selectEvents = [
  { name: 'update:modelValue', description: '선택 값 변경 시 (v-model)' },
];


export const selectTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const selectTokens = [
  { name: '--select-padding-right · --select-padding-right-sm · --select-padding-right-lg', default: '2.25rem · 2rem · 2.5rem', description: '캐럿 공간(우측 패딩)' },
  { name: '--select-caret-offset · --select-caret-offset-sm · --select-caret-offset-lg', default: '0.65rem · 0.5rem · 0.85rem', description: '캐럿 위치' },
  { name: '--select-caret-size · --select-caret-size-sm · --select-caret-size-lg', default: '1em · 0.875em · 1.125em', description: '캐럿 아이콘 크기' },
];
