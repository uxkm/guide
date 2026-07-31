import { rippleClassRows } from '@/doc/data/ripple-api';

export const inputPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const inputProps = [
  {
    name: 'ref',
    type: 'React.Ref<HTMLInputElement>',
    default: '—',
    description: '실제 input DOM 참조 (prefix · suffix 사용 시에도 input을 가리킴)',
  },
  {
    name: 'value',
    type: 'string',
    default: '—',
    description: '제어 컴포넌트 값 (Vue model-value 대응)',
  },
  {
    name: 'defaultValue',
    type: 'string',
    default: "''",
    description: '비제어 초기 값',
  },
  { name: 'type', type: 'string', default: 'text', description: 'input type 속성' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'input_sm · input_lg' },
  { name: 'placeholder', type: 'string', default: '—', description: 'placeholder 속성' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성' },
  { name: 'error', type: 'boolean', default: 'false', description: '오류 상태 (is-error, aria-invalid)' },
  { name: 'block', type: 'boolean', default: 'false', description: '부모 너비 100% (input_block)' },
  { name: 'className', type: 'string', default: '—', description: 'input 또는 input_group 루트에 추가 클래스' },
  {
    name: 'onChange',
    type: '(event) => void',
    default: '—',
    description: '값 변경 콜백 (Vue update:modelValue 대응)',
  },
];

export const inputChildColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const inputChildren = [
  { name: 'prefix', description: '앞쪽 애드온 (Vue #prefix → input_group-addon)' },
  { name: 'suffix', description: '뒤쪽 애드온 (Vue #suffix → input_group-addon)' },
];

/** @deprecated 가이드·Storybook은 inputChildColumns · inputChildren 사용 */
export const inputSlotColumns = inputChildColumns;

/** @deprecated */
export const inputSlots = inputChildren;

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
  {
    name: 'onChange',
    description: '입력 값 변경 시 (Vue update:modelValue 대응). React change 이벤트를 전달합니다.',
  },
  {
    name: 'onPaste',
    description: '붙여넣기 시. data-input-split · data-input-otp 내부에서는 값을 각 칸에 분배합니다.',
  },
  {
    name: 'onKeyDown',
    description: '키 입력 시. 분할 입력의 Backspace 이동과 OTP 좌우 방향키 이동을 지원합니다.',
  },
];
