import { ripplePropTrigger, rippleClassRows } from '@/doc/data/ripple-api';
export const alertPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const alertProps = [
  { name: 'color', type: `'info' | 'success' | 'warning' | 'danger'`, default: 'info', description: '의미 색상. danger는 color_error' },
  { name: 'title', type: 'string', default: '—', description: '알림 제목 (alert_title)' },
  { name: 'description', type: 'string', default: '—', description: '본문. default 슬롯으로 대체' },
  { name: 'closable', type: 'boolean', default: 'false', description: '닫기 버튼 (alert_close)' },
  { name: 'show-icon', type: 'boolean', default: 'true', description: '기본 아이콘 표시' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'alert_sm · alert_lg' },
  { name: 'role', type: 'string', default: 'alert', description: '루트 role (alert · status 등)' },
  ripplePropTrigger,
];

export const alertSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const alertSlots = [
  { name: 'default', description: '본문 (description prop 대체)' },
  { name: 'icon', description: '커스텀 아이콘 (alert_icon)' },
  { name: 'actions', description: '본문 아래 액션 버튼·링크' },
];

export const alertClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const alertClasses = [
  { name: 'alert', description: '알림 루트' },
  { name: 'alert_sm · alert_lg', description: '크기' },
  { name: 'alert_icon · alert_body · alert_title · alert_desc', description: '구조 파트' },
  { name: 'alert_close', description: '닫기 버튼' },
  { name: 'color_info · color_success · color_warning · color_error', description: '의미 색상' },
  ...rippleClassRows,
];

export const alertEventColumns = [
  { key: 'name', label: '이벤트' },
  { key: 'description', label: '설명' },
];

export const alertEvents = [
  { name: 'close', description: '닫기 버튼 클릭 시' },
];


export const alertTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const alertTokens = [
  { name: '--alert-padding-y · --alert-padding-x · --alert-gap', default: 'var(--space-md) · var(--space-lg) · var(--space-md)', description: '기본(md) 패딩·간격' },
  { name: '--alert-font-size · --alert-line-height', default: 'var(--text-size-base) · 1.5', description: '본문 타이포' },
  { name: '--alert-title-weight · --alert-title-gap', default: '600 · var(--space-xs)', description: '제목 두께·간격' },
  { name: '--alert-desc-opacity', default: '0.85', description: '설명 텍스트 불투명도' },
  { name: '--alert-icon-size · --alert-icon-offset', default: '1.25rem · 0.1rem', description: '아이콘 크기·정렬' },
  { name: '--alert-close-size', default: '1.25rem', description: '닫기 버튼 크기' },
  { name: '--alert-actions-gap · --alert-actions-margin-top', default: 'var(--space-sm) · var(--space-sm)', description: '액션 영역' },
  { name: '--alert-padding-y-sm · --alert-padding-x-sm · --alert-font-size-sm', default: 'var(--space-sm) · var(--space-md) · var(--text-size-sm)', description: 'sm 크기' },
  { name: '--alert-icon-size-sm · --alert-close-size-sm', default: '1rem · 1rem', description: 'sm 아이콘·닫기' },
  { name: '--alert-padding-y-lg · --alert-padding-x-lg', default: 'var(--space-lg) · var(--space-xl)', description: 'lg 패딩' },
  { name: '--alert-icon-size-lg · --alert-close-size-lg', default: '1.5rem · 1.5rem', description: 'lg 아이콘·닫기' },
];
