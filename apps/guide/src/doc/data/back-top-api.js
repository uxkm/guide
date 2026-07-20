import { ripplePropTrigger, rippleClassRows } from '@/doc/data/ripple-api';
export const backTopPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const backTopProps = [
  { name: 'target', type: 'string', default: '—', description: '스크롤 컨테이너 선택자 (data-target). 생략 시 window' },
  { name: 'visibility-height', type: 'number | string', default: '400', description: '버튼 표시 임계 스크롤(px, data-visibility-height)' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'back_top_sm · back_top_lg' },
  { name: 'color', type: `'' | 'primary' | 'ghost'`, default: '—', description: 'back_top_primary · back_top_ghost' },
  { name: 'label', type: 'string', default: '—', description: '버튼 텍스트 (back_top_label)' },
  { name: 'aria-label', type: 'string', default: '맨 위로', description: '접근성 라벨' },
  { name: 'interactive', type: 'boolean', default: 'true', description: 'false면 data-back-top 미부여' },
  ripplePropTrigger,
];

export const backTopSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const backTopSlots = [
  { name: 'default', description: '버튼 콘텐츠 (아이콘·텍스트)' },
];

export const backTopClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const backTopClasses = [
  { name: 'back_top · back_top_btn · back_top_icon · back_top_label', description: '루트·버튼·아이콘·텍스트' },
  { name: 'back_top_sm · back_top_lg · back_top_primary · back_top_ghost', description: '크기·색상' },
  { name: 'is-visible', description: '스크롤 임계 초과 시 표시' },
  { name: 'data-back-top · data-target · data-visibility-height', description: 'JS 연동' },
  ...rippleClassRows,
];

export const backTopTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const backTopTokens = [
  { name: '--back-top-size · --back-top-size-sm · --back-top-size-lg', default: '—', description: '버튼 크기' },
  { name: '--back-top-offset-bottom · --back-top-offset-right', default: '—', description: '플로팅 위치' },
  { name: '--back-top-z-index', default: '—', description: '레이어 순서' },
];
