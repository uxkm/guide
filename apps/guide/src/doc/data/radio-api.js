import { ripplePropChoice, rippleClassRows } from '@/doc/data/ripple-api';
export const radioPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const radioProps = [
  { name: 'label', type: 'string', default: '—', description: '라벨 텍스트. default 슬롯으로 대체' },
  { name: 'name', type: 'string', default: '—', description: 'radio 그룹 name 속성' },
  { name: 'value', type: 'string', default: '—', description: 'radio value 속성' },
  { name: 'checked', type: 'boolean', default: 'false', description: '선택 상태' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성' },
  { name: 'label-end', type: 'boolean', default: 'false', description: '라벨을 라디오 앞에 배치' },
  { name: 'button', type: 'boolean', default: 'false', description: '버튼형 (radio_button)' },
  { name: 'aria-label', type: 'string', default: '—', description: '라벨 없는 단독 라디오 시 필수' },
  ripplePropChoice,
];

export const radioSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const radioSlots = [
  { name: 'default', description: '라벨 텍스트 (label prop 대체)' },
];

export const radioClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const radioClasses = [
  { name: 'radio', description: '라디오 래퍼' },
  { name: 'radio_control · radio_input · radio_box', description: '입력·커스텀 원' },
  { name: 'radio_label', description: '라벨' },
  { name: 'radio_label-end · radio_button', description: '레이아웃 변형' },
  { name: 'radio_group', description: 'fieldset 그룹' },
  { name: 'radio_card · radio_card-clickable', description: '카드형 — clickable은 data-ripple + JS 위임' },
  ...rippleClassRows,
];


export const radioTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const radioTokens = [
  { name: '--radio-size · --radio-size-sm · --radio-size-lg', default: 'var(--checkbox-size) · … · …', description: '라디오 원 크기 (checkbox 토큰 참조)' },
  { name: '--radio-gap · --radio-gap-sm · --radio-gap-lg', default: 'var(--checkbox-gap) · … · …', description: '라벨 간격' },
  { name: '--radio-font-size · --radio-line-height', default: 'var(--checkbox-font-size) · var(--checkbox-line-height)', description: '라벨 타이포' },
  { name: '--radio-label-weight · --radio-hint-size', default: 'var(--checkbox-label-weight) · var(--checkbox-hint-size)', description: '라벨·힌트' },
  { name: '--radio-control-offset', default: 'var(--checkbox-control-offset)', description: '원 수직 정렬' },
  { name: '--radio-group-gap', default: 'var(--checkbox-group-gap)', description: '그룹 간격' },
  { name: '--radio-button-padding-y · --radio-button-padding-x', default: 'var(--checkbox-button-padding-y) · var(--checkbox-button-padding-x)', description: '버튼형 패딩' },
];
