import { ripplePropContainer, rippleClassRows } from '@/doc/data/ripple-api';
export const uploadPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const uploadProps = [
  { name: 'variant', type: `'button' | 'drag' | 'list' | 'picture-card' | 'avatar'`, default: 'button', description: '업로드 UI 유형' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'upload_sm · upload_lg' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성 (is-disabled)' },
  { name: 'fit', type: 'boolean', default: 'false', description: '콘텐츠 너비 (upload_fit)' },
  { name: 'multiple', type: 'boolean', default: 'false', description: '다중 파일 선택' },
  { name: 'accept', type: 'string', default: '—', description: 'input accept 속성' },
  { name: 'input-id', type: 'string', default: '—', description: 'file input id' },
  { name: 'hint', type: 'string', default: '—', description: 'button·drag variant 힌트 텍스트' },
  { name: 'dragover', type: 'boolean', default: 'false', description: '드래그 오버 상태 (is-dragover)' },
  { name: 'error', type: 'boolean', default: 'false', description: '오류 (is-error)' },
  ripplePropContainer,
];

export const uploadSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const uploadSlots = [
  { name: 'trigger', description: '업로드 트리거 UI (button·drag·picture-card·avatar)' },
  { name: 'hint', description: '힌트 텍스트 (hint prop 대체)' },
  { name: 'default', description: '파일 목록 (list variant)' },
  { name: 'cards', description: '이미지 카드 그리드 (picture-card)' },
];

export const uploadClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const uploadClasses = [
  { name: 'upload', description: '루트' },
  { name: 'upload_sm · upload_lg · upload_fit', description: '크기·너비' },
  { name: 'upload_trigger · upload_dropzone · upload_input', description: 'button·drag 트리거' },
  { name: 'upload_card · upload_cards · upload_avatar', description: 'picture-card·avatar' },
  { name: 'upload_list · upload_item · upload_item-info', description: '목록 variant' },
  { name: 'upload_hint · upload_progress', description: '힌트·진행률' },
  { name: 'is-dragover · is-error · is-disabled', description: '상태' },
  ...rippleClassRows,
];

export const uploadTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const uploadTokens = [
  { name: '--upload-max-width', default: 'var(--input-max-width)', description: '최대 너비' },
  { name: '--upload-dropzone-padding · --upload-dropzone-icon-size', default: '—', description: '드롭존' },
  { name: '--upload-card-size · --upload-list-gap', default: '6.5rem · var(--space-xs)', description: '카드·목록' },
];
