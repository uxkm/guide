import { rippleClassRows } from '@/doc/data/ripple-api';
export const inputPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const inputProps = [
  { name: 'model-value', type: 'string', default: '—', description: 'v-model 바인딩 값' },
  { name: 'type', type: 'string', default: 'text', description: 'input type 속성' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'input_sm · input_lg' },
  { name: 'placeholder', type: 'string', default: '—', description: 'placeholder 속성' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성' },
  { name: 'error', type: 'boolean', default: 'false', description: '오류 상태 (is-error, aria-invalid)' },
  { name: 'block', type: 'boolean', default: 'false', description: '부모 너비 100% (input_block)' },
];

export const inputSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const inputSlots = [
  { name: 'prefix', description: '앞쪽 애드온 (input_group-addon)' },
  { name: 'suffix', description: '뒤쪽 애드온' },
];

export const inputClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const inputClasses = [
  { name: 'input', description: '텍스트 입력 루트' },
  { name: 'input_sm · input_lg · input_block', description: '크기·너비' },
  { name: 'input_masked', description: '마스킹 입력값 표시 시 자동 적용 (type="password" + 값 있음)' },
  { name: 'input_group · input_group-addon', description: '애드온 묶음' },
  { name: 'input_clearable · input_clear', description: '지우기 버튼 — input_clear에 data-ripple="surface"' },
  { name: 'is-error · is-disabled', description: '상태' },
  ...rippleClassRows,
];

export const inputTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const inputTokens = [
  { name: '--input-max-width', default: '320px', description: '데모·폼 최대 너비' },
  { name: '--input-clear-size · --input-clear-offset', default: '—', description: '클리어 버튼' },
  { name: '--input-font-masked · --input-masked-letter-spacing', default: '—', description: '마스킹 입력' },
];

export const inputEventColumns = [
  { key: 'name', label: '이벤트' },
  { key: 'description', label: '설명' },
];

export const inputEvents = [
  { name: 'update:modelValue', description: '입력 값 변경 시 (v-model)' },
];
