import { ripplePropSurface, rippleClassRows } from '@/doc/data/ripple-api';
export const breadcrumbPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const breadcrumbProps = [
  { name: 'items', type: 'Array<{ label, href?, current?, disabled? }>', default: '[]', description: '경로 데이터. BreadcrumbItem 슬롯 대체' },
  { name: 'aria-label', type: 'string', default: '경로', description: 'nav aria-label' },
  { name: 'separator', type: `'chevron' | 'slash' | 'dot'`, default: 'chevron', description: 'breadcrumb_sep-slash · breadcrumb_sep-dot' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'breadcrumb_sm · breadcrumb_lg' },
];

export const breadcrumbItemPropColumns = breadcrumbPropColumns;
export const breadcrumbItemProps = [
  { name: 'label', type: 'string', default: '—', description: '항목 텍스트' },
  { name: 'href', type: 'string', default: '—', description: '링크 URL' },
  { name: 'current', type: 'boolean', default: 'false', description: 'is-current · aria-current="page"' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'is-disabled' },
  { name: 'icon', type: 'boolean', default: 'false', description: 'breadcrumb_link-icon' },
  { name: 'aria-label', type: 'string', default: '—', description: '아이콘 전용 링크 라벨' },
  ripplePropSurface,
];

export const breadcrumbSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const breadcrumbSlots = [
  { name: 'default', description: 'BreadcrumbItem 나열 (items prop 대체)' },
];

export const breadcrumbItemSlotColumns = breadcrumbSlotColumns;
export const breadcrumbItemSlots = [
  { name: 'default', description: '링크 텍스트·아이콘 (label 대체)' },
];

export const breadcrumbClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const breadcrumbClasses = [
  { name: 'breadcrumb · breadcrumb_list · breadcrumb_item', description: '루트·목록·항목' },
  { name: 'breadcrumb_link · breadcrumb_sep', description: '링크·구분자' },
  { name: 'breadcrumb_ellipsis', description: '생략 메뉴 버튼 — data-ripple' },
  { name: 'breadcrumb_sep-slash · breadcrumb_sep-dot', description: '구분자 스타일' },
  { name: 'breadcrumb_sm · breadcrumb_lg', description: '크기 변형' },
  { name: 'is-current · is-disabled', description: '현재·비활성' },
  ...rippleClassRows,
];

export const breadcrumbTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const breadcrumbTokens = [
  { name: '--breadcrumb-gap · --breadcrumb-font-size', default: '—', description: '간격·글자 크기' },
  { name: '--breadcrumb-sep-color', default: '—', description: '구분자 색' },
];
