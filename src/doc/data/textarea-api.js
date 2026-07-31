export const textareaPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const textareaProps = [
  {
    name: 'ref',
    type: 'React.Ref<HTMLTextAreaElement>',
    default: '—',
    description: '실제 textarea DOM 참조',
  },
  { name: 'value', type: 'string', default: '—', description: '제어 컴포넌트 값 (Vue model-value 대응)' },
  { name: 'defaultValue', type: 'string', default: "''", description: '비제어 초기 값' },
  { name: 'rows', type: 'number | string', default: '3', description: 'textarea rows 속성' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'textarea_sm · textarea_lg' },
  { name: 'placeholder', type: 'string', default: '—', description: 'placeholder 속성' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성' },
  { name: 'error', type: 'boolean', default: 'false', description: '오류 상태 (is-error)' },
  { name: 'block', type: 'boolean', default: 'false', description: '부모 너비 100% (textarea_block)' },
  { name: 'className', type: 'string', default: '—', description: 'textarea 루트에 추가 클래스' },
  { name: 'onChange', type: '(event) => void', default: '—', description: '값 변경 콜백 (Vue update:modelValue 대응)' },
];

export const textareaChildColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const textareaChildren = [
  { name: 'children', description: '초기 텍스트. React에서는 value/defaultValue 사용을 권장합니다.' },
  {
    name: 'TextareaShowCount',
    description: 'Textarea를 감싸 현재/최대 글자 수와 접근성 안내를 자동으로 갱신하는 래퍼',
  },
];

/** @deprecated 가이드·Storybook은 textareaChildColumns · textareaChildren 사용 */
export const textareaSlotColumns = textareaChildColumns;

/** @deprecated */
export const textareaSlots = textareaChildren;

export const textareaClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const textareaClasses = [
  { name: 'textarea', description: '텍스트영역 루트' },
  { name: 'textarea_sm · textarea_lg · textarea_block', description: '크기·너비' },
  {
    name: 'textarea_wrap · textarea_show-count · textarea_count',
    description: 'TextareaShowCount 글자 수 카운터 구조',
  },
  { name: 'is-error · is-disabled', description: '상태' },
];

export const textareaEventColumns = [
  { key: 'name', label: '이벤트' },
  { key: 'description', label: '설명' },
];

export const textareaEvents = [
  { name: 'onChange', description: '입력 값 변경 시 (Vue update:modelValue 대응)' },
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
