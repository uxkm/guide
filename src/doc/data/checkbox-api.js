import { ripplePropChoice, rippleClassRows } from '@/doc/data/ripple-api';
export const checkboxPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const checkboxProps = [
  { name: 'label', type: 'string', default: '—', description: '라벨 텍스트. default 슬롯으로 대체' },
  { name: 'checked', type: 'boolean', default: 'false', description: '체크 상태' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성' },
  { name: 'indeterminate', type: 'boolean', default: 'false', description: '부분 선택 (전체 선택 등)' },
  { name: 'label-end', type: 'boolean', default: 'false', description: '라벨을 체크박스 앞에 배치' },
  { name: 'button', type: 'boolean', default: 'false', description: '버튼형 토글 (checkbox_button)' },
  { name: 'aria-label', type: 'string', default: '—', description: '라벨 없는 단독 체크박스 시 필수' },
  ripplePropChoice,
];

export const checkboxSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const checkboxSlots = [
  { name: 'default', description: '라벨 텍스트 (label prop 대체)' },
];

export const checkboxClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const checkboxClasses = [
  { name: 'checkbox', description: '체크박스 래퍼' },
  { name: 'checkbox_control · checkbox_input · checkbox_box', description: '입력·커스텀 박스' },
  { name: 'checkbox_label', description: '라벨' },
  { name: 'checkbox_label-end · checkbox_button', description: '레이아웃 변형' },
  { name: 'checkbox_group', description: '여러 체크박스 묶음' },
  { name: 'checkbox_card · checkbox_card-clickable', description: '카드형 — clickable은 data-ripple + JS 위임' },
  { name: 'is-checked · is-disabled', description: '상태 (CSS·JS 토글)' },
  ...rippleClassRows,
];


export const checkboxTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const checkboxTokens = [
  { name: '--checkbox-size · --checkbox-size-sm · --checkbox-size-lg', default: '1rem · 0.875rem · 1.125rem', description: '체크박스 박스 크기' },
  { name: '--checkbox-border-width · --checkbox-radius', default: '1px · 4px', description: '테두리·모서리' },
  { name: '--checkbox-gap · --checkbox-gap-sm · --checkbox-gap-lg', default: 'var(--space-sm) · 0.375rem · 0.625rem', description: '라벨 간격' },
  { name: '--checkbox-font-size · --checkbox-line-height', default: 'var(--text-size-base) · 1.5', description: '라벨 타이포(md)' },
  { name: '--checkbox-label-weight', default: '400', description: '라벨 두께' },
  { name: '--checkbox-hint-size', default: 'var(--text-size-sm)', description: '힌트 텍스트' },
  { name: '--checkbox-control-offset', default: '0.125rem', description: '박스 수직 정렬' },
  { name: '--checkbox-group-gap', default: 'var(--space-sm)', description: '그룹 간격' },
  { name: '--checkbox-button-padding-y · --checkbox-button-padding-x', default: '0.35rem · 0.75rem', description: '버튼형 패딩' },
];
