export const dropdownPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const dropdownProps = [
  { name: 'open', type: 'boolean', default: 'false', description: '열림 (is-open)' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'is-disabled' },
  { name: 'placement', type: `'end' | 'top'`, default: '—', description: 'dropdown_placement-end · dropdown_placement-top' },
  { name: 'fit', type: 'boolean', default: 'false', description: 'dropdown_fit — 트리거 너비 맞춤' },
  { name: 'maxVisibleItems', type: 'number', default: '—', description: '패널에 보이는 최대 항목 수. 초과 시 dropdown_menu-scrollable로 목록 스크롤' },
  { name: 'menuWidth', type: 'string | number', default: '—', description: '패널 가로 너비 (숫자는 rem)' },
  { name: 'menuMinWidth', type: 'string | number', default: '—', description: '패널 최소 가로 너비 (숫자는 rem)' },
];

export const dropdownSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const dropdownSlots = [
  { name: 'trigger', description: '트리거 버튼·링크 (dropdown_trigger)' },
  { name: 'default', description: '메뉴 패널 (dropdown_menu, 보통 Menu)' },
];

export const dropdownClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const dropdownClasses = [
  { name: 'dropdown · dropdown_menu', description: '루트·메뉴 패널' },
  { name: 'dropdown_placement-end · dropdown_placement-top · dropdown_fit', description: '배치·너비' },
  { name: 'dropdown_menu-scrollable', description: 'maxVisibleItems 지정 시 — menu_list 스크롤' },
  { name: 'data-dropdown · data-dropdown-close-on-select', description: 'JS 연동' },
  { name: 'is-open · is-disabled', description: '상태' },
  { name: 'role="menu"', description: '메뉴 시맨틱' },
];

export const dropdownTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const dropdownTokens = [
  { name: '--dropdown-min-width · --dropdown-menu-width', default: '10rem · auto', description: '패널 최소·기본 너비' },
  { name: '--dropdown-offset', default: '—', description: '트리거와 패널 간격' },
  { name: '--dropdown-max-visible-items', default: '—', description: 'maxVisibleItems prop으로 주입 — 스크롤 높이 계산' },
  { name: '--dropdown-item-line-height', default: '1.4', description: '항목 높이 계산용 줄 높이' },
  { name: '--z-dropdown', default: '100', description: '레이어 순서' },
];
