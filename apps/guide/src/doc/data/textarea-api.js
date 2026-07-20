export const textareaPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const textareaProps = [
  { name: 'model-value', type: 'string', default: '—', description: 'v-model 바인딩 값' },
  { name: 'rows', type: 'number | string', default: '3', description: 'textarea rows 속성' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'textarea_sm · textarea_lg' },
  { name: 'placeholder', type: 'string', default: '—', description: 'placeholder 속성' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성' },
  { name: 'error', type: 'boolean', default: 'false', description: '오류 상태 (is-error)' },
  { name: 'block', type: 'boolean', default: 'false', description: '부모 너비 100% (textarea_block)' },
];

export const textareaSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const textareaSlots = [
  { name: 'default', description: '초기 텍스트 (model-value 대체)' },
];

export const textareaClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const textareaClasses = [
  { name: 'textarea', description: '텍스트영역 루트' },
  { name: 'textarea_sm · textarea_lg · textarea_block', description: '크기·너비' },
  { name: 'is-error · is-disabled', description: '상태' },
];

export const textareaEventColumns = [
  { key: 'name', label: '이벤트' },
  { key: 'description', label: '설명' },
];

export const textareaEvents = [
  { name: 'update:modelValue', description: '입력 값 변경 시 (v-model)' },
];


export const textareaTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const textareaTokens = [
  { name: '--textarea-min-height', default: '5rem', description: '최소 높이' },
  { name: '--textarea-count-inset-x · --textarea-count-inset-y', default: '0.75rem · 0.5rem', description: '글자 수 카운터 위치' },
];
