import { ripplePropContainer, ripplePropSurface, rippleClassRows } from '@/doc/data/ripple-api';
export const navbarPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const navbarProps = [
  { name: 'brand', type: 'string', default: '—', description: '브랜드 텍스트. brand 슬롯으로 대체' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'navbar_sm · navbar_lg' },
  { name: 'borderless', type: 'boolean', default: 'false', description: '하단 테두리 제거' },
  { name: 'dark', type: 'boolean', default: 'false', description: '어두운 배경 (navbar_dark)' },
  { name: 'sticky', type: 'boolean', default: 'false', description: '상단 고정 (navbar_sticky)' },
  { name: 'responsive', type: 'boolean', default: 'false', description: '모바일 토글·data-navbar' },
  { name: 'collapse-id', type: 'string', default: '—', description: 'navbar_collapse id (토글 aria-controls)' },
  ripplePropContainer,
];

export const navbarItemPropColumns = navbarPropColumns;
export const navbarItemProps = [
  { name: 'label', type: 'string', default: '—', description: '링크 텍스트. default 슬롯으로 대체' },
  { name: 'href', type: 'string', default: '#', description: '링크 URL' },
  { name: 'active', type: 'boolean', default: 'false', description: 'is-active · aria-current="page"' },
  ripplePropSurface,
];

export const navbarSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const navbarSlots = [
  { name: 'brand', description: '브랜드 영역 (brand prop 대체)' },
  { name: 'brand-icon', description: '브랜드 아이콘 (Icon)' },
  { name: 'items', description: '메뉴 목록 (NavbarList)' },
  { name: 'default', description: 'items 대체 — NavbarItem 나열' },
  { name: 'search', description: '검색 필드 (navbar_search)' },
  { name: 'actions', description: '우측 액션 (navbar_actions)' },
];

export const navbarItemSlotColumns = navbarSlotColumns;
export const navbarItemSlots = [
  { name: 'default', description: '링크 텍스트 (label 대체)' },
  { name: 'badge', description: '링크 옆 배지' },
];

export const navbarClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const navbarClasses = [
  { name: 'navbar · navbar_container · navbar_brand', description: '루트·컨테이너·브랜드' },
  { name: 'navbar_toggle · navbar_collapse · navbar_nav · navbar_list', description: '토글·접힘 영역·내비' },
  { name: 'navbar_item · navbar_link', description: '항목·링크 (is-active)' },
  { name: 'navbar_search · navbar_actions', description: '검색·액션 영역' },
  { name: 'navbar_sm · navbar_lg · navbar_sticky · navbar_borderless · navbar_dark', description: '크기·변형' },
  { name: 'data-navbar · data-navbar-toggle', description: '반응형 JS 연동' },
  ...rippleClassRows,
];

export const navbarTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const navbarTokens = [
  { name: '--navbar-height · --navbar-height-sm · --navbar-height-lg', default: '—', description: '높이 변형' },
  { name: '--navbar-padding-x · --navbar-gap', default: '—', description: '패딩·간격' },
  { name: '--navbar-z-index', default: '—', description: 'sticky 레이어' },
];
