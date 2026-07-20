import { ripplePropSurface, rippleClassRows } from '@/doc/data/ripple-api';
export const menuPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const menuProps = [
  { name: 'mode', type: `'vertical' | 'horizontal' | 'inline'`, default: 'vertical', description: 'menu_vertical · menu_horizontal · menu_inline' },
  { name: 'bordered', type: 'boolean', default: 'false', description: 'menu_bordered' },
  { name: 'compact', type: 'boolean', default: 'false', description: 'menu_compact' },
  { name: 'dark', type: 'boolean', default: 'false', description: 'menu_dark' },
  { name: 'aria-label', type: 'string', default: '—', description: 'nav aria-label' },
];

export const menuItemPropColumns = menuPropColumns;
export const menuItemProps = [
  { name: 'label', type: 'string', default: '—', description: '항목 텍스트' },
  { name: 'href', type: 'string', default: '—', description: '링크 URL (a 태그)' },
  { name: 'active', type: 'boolean', default: 'false', description: 'is-active · aria-current' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'is-disabled' },
  { name: 'color', type: 'string', default: '—', description: 'color_* (예: danger)' },
  ripplePropSurface,
];

export const menuSubmenuPropColumns = menuPropColumns;
export const menuSubmenuProps = [
  { name: 'label', type: 'string', default: '—', description: '서브메뉴 제목' },
  { name: 'expanded', type: 'boolean', default: 'false', description: '펼침 (aria-expanded)' },
  { name: 'submenu-id', type: 'string', default: '—', description: 'menu_submenu id (aria-controls)' },
  ripplePropSurface,
];

export const menuGroupPropColumns = menuPropColumns;
export const menuGroupProps = [
  { name: 'title', type: 'string', default: '—', description: '그룹 제목 (menu_group-title, 필수)' },
];

export const menuSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const menuSlots = [
  { name: 'default', description: 'MenuItem · MenuSubmenu 등' },
];

export const menuItemSlotColumns = menuSlotColumns;
export const menuItemSlots = [
  { name: 'icon', description: 'menu_icon' },
  { name: 'extra', description: 'menu_extra (배지 등)' },
];

export const menuSubmenuSlotColumns = menuSlotColumns;
export const menuSubmenuSlots = [
  { name: 'icon', description: 'menu_icon' },
  { name: 'default', description: '하위 MenuItem' },
];

export const menuClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const menuClasses = [
  { name: 'menu · menu_list · menu_item · menu_link', description: '루트·목록·항목·링크' },
  { name: 'menu_vertical · menu_horizontal · menu_inline', description: '배치 모드' },
  { name: 'menu_icon · menu_label · menu_extra · menu_arrow', description: '항목 파트' },
  { name: 'menu_item-submenu · menu_submenu', description: '서브메뉴' },
  { name: 'menu_group · menu_group-title · menu_divider', description: '그룹·구분선' },
  { name: 'menu_bordered · menu_compact · menu_dark', description: '스타일 변형' },
  { name: 'is-active · is-disabled', description: '상태' },
  { name: 'data-menu-selectable', description: '선택 가능 메뉴 JS' },
  ...rippleClassRows,
];

export const menuTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const menuTokens = [
  { name: '--menu-item-height · --menu-item-padding-x', default: '—', description: '항목 크기·패딩' },
  { name: '--menu-gap · --menu-radius', default: '—', description: '간격·모서리' },
  { name: '--menu-sub-indent', default: '—', description: '서브메뉴 들여쓰기' },
];
