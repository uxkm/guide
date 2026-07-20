import { ripplePropContainer, rippleClassRows } from '@/doc/data/ripple-api';
export const datePickerPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const datePickerProps = [
  { name: 'value', type: 'string', default: '—', description: '표시할 날짜 문자열' },
  { name: 'placeholder', type: 'string', default: '—', description: '미선택 placeholder' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'date_picker_sm · date_picker_lg' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성 (is-disabled)' },
  { name: 'error', type: 'boolean', default: 'false', description: '오류 (is-error)' },
  { name: 'success', type: 'boolean', default: 'false', description: '성공 (is-success)' },
  { name: 'open', type: 'boolean', default: 'false', description: '패널 열림 (is-open)' },
  { name: 'fit', type: 'boolean', default: 'false', description: '콘텐츠 너비 (date_picker_fit)' },
  { name: 'block', type: 'boolean', default: 'false', description: '부모 너비 100%' },
  { name: 'inline', type: 'boolean', default: 'false', description: '트리거 없이 패널만 (date_picker_inline)' },
  { name: 'clearable', type: 'boolean', default: 'false', description: '지우기 버튼' },
  { name: 'panel-wide', type: 'boolean', default: 'false', description: '넓은 패널 (date_picker_panel-wide)' },
  { name: 'input-id', type: 'string', default: '—', description: '입력 필드 id (label for 연결)' },
  { name: 'aria-label', type: 'string', default: '—', description: '입력 접근성 라벨' },
  { name: 'aria-invalid', type: 'boolean | string', default: '—', description: '입력 aria-invalid' },
  ripplePropContainer,
];

export const datePickerSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const datePickerSlots = [
  { name: 'panel', description: '캘린더 패널 (Calendar 등)' },
];

export const datePickerClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const datePickerClasses = [
  { name: 'date_picker', description: '루트' },
  { name: 'date_picker_sm · date_picker_lg · date_picker_fit · date_picker_block', description: '크기·너비' },
  { name: 'date_picker_inline', description: '인라인 패널' },
  { name: 'date_picker_trigger · date_picker_input · date_picker_btn', description: '트리거 영역' },
  { name: 'date_picker_clear · date_picker_placeholder', description: '지우기(data-ripple="surface")·placeholder' },
  { name: 'date_picker_panel · date_picker_panel-wide', description: '드롭다운 패널' },
  { name: 'is-open · is-error · is-success · is-disabled', description: '상태' },
  ...rippleClassRows,
];

export const datePickerTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const datePickerTokens = [
  { name: '--date-picker-input-padding-y · --date-picker-input-padding-x', default: '0.5rem · 0.75rem', description: '입력 패딩' },
  { name: '--date-picker-btn-size · --date-picker-icon-size', default: '2.25rem · 1rem', description: '캘린더 버튼·아이콘' },
];
