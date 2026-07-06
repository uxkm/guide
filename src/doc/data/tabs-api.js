import { ripplePropContainer, rippleClassRows } from '@/doc/data/ripple-api';
export const tabsPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const tabsProps = [
  { name: 'mode', type: `'panels' | 'dynamic'`, default: 'panels', description: 'panels: 탭별 패널 · dynamic: 단일 패널 콘텐츠 전환' },
  { name: 'v-model / model-value', type: 'string | number', default: '—', description: 'mode=dynamic 선택 탭 key' },
  { name: 'variant', type: `'line' | 'card' | 'pill'`, default: 'line', description: 'tabs_line · tabs_card · tabs_pill' },
  { name: 'indicator', type: `'static' | 'slide'`, default: 'static', description: 'line·pill 인디케이터. slide는 선택 탭으로 이동 애니메이션' },
  { name: 'layout', type: `'auto' | 'equal' | 'scroll'`, default: 'auto', description: 'auto: 콘텐츠 너비 · equal: 100% 균등 분할 · scroll: 좌우 네비 스크롤' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'tabs_sm · tabs_lg' },
  { name: 'vertical', type: 'boolean', default: 'false', description: 'tabs_vertical' },
  { name: 'scrollable', type: 'boolean', default: 'false', description: 'layout=auto일 때 가로 스크롤바 표시 (tabs_scrollable)' },
  { name: 'aria-label', type: 'string', default: '—', description: 'tablist aria-label' },
  { name: 'items', type: 'Array<{ key?, label, content?, active?, disabled? }>', default: '—', description: '선언적 탭. panels: content로 패널 생성 · dynamic: label만 사용' },
  ripplePropContainer,
];

export const tabPanelPropColumns = tabsPropColumns;
export const tabPanelProps = [
  { name: 'label', type: 'string', default: '—', description: '탭 버튼 텍스트 (필수)' },
  { name: 'active', type: 'boolean', default: 'false', description: '초기 선택 탭' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'is-disabled' },
];

export const tabMenuPropColumns = tabsPropColumns;
export const tabMenuProps = [
  { name: 'label', type: 'string', default: '—', description: '탭 버튼 텍스트 (필수)' },
  { name: 'value', type: 'string', default: '—', description: 'mode=dynamic v-model key' },
  { name: 'active', type: 'boolean', default: 'false', description: '초기 선택 탭' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'is-disabled' },
];

export const tabsSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const tabsSlots = [
  { name: 'tabs', description: '탭 바 추가 콘텐츠' },
  { name: 'extra', description: '탭 바 우측 영역 (tabs_extra)' },
  { name: 'panel', description: 'mode=dynamic 단일 패널 본문 ({ item, value, active })' },
  { name: 'default', description: 'TabPanel·TabMenu 나열 (items prop 대체)' },
];

export const tabPanelSlotColumns = tabsSlotColumns;
export const tabPanelSlots = [
  { name: 'default', description: '패널 본문 (tabs_panel)' },
  { name: 'icon', description: '탭 버튼 아이콘' },
  { name: 'badge', description: '탭 버튼 배지' },
];

export const tabMenuSlotColumns = tabsSlotColumns;
export const tabMenuSlots = [
  { name: 'icon', description: '탭 버튼 아이콘' },
  { name: 'badge', description: '탭 버튼 배지' },
];

export const tabsClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const tabsClasses = [
  { name: 'tabs · tabs_bar · tabs_list · tabs_tab', description: '루트·탭 바·목록·탭 버튼' },
  { name: 'tabs_label · tabs_extra · tabs_panels · tabs_panel', description: '라벨·추가·패널 영역' },
  { name: 'tabs_line · tabs_card · tabs_pill', description: '스타일 변형' },
  { name: 'tabs_indicator-slide', description: '슬라이드 인디케이터 (indicator="slide")' },
  { name: 'tabs_indicator', description: '이동하는 인디케이터 요소' },
  { name: 'tabs_equal · tabs_scroll-nav · tabs_dynamic', description: '균등 분할·네비 스크롤·동적 패널' },
  { name: 'tabs_list-wrap · tabs_scroll-viewport · tabs_nav', description: '목록 래퍼·스크롤 뷰포트·좌우 네비 버튼' },
  { name: 'tabs_sm · tabs_lg · tabs_vertical · tabs_scrollable', description: '크기·레이아웃' },
  { name: 'is-active · is-disabled', description: '탭·패널 상태' },
  { name: 'data-tabs', description: '키보드·포커스 JS' },
  { name: 'role="tablist" · role="tab" · role="tabpanel"', description: '접근성' },
  ...rippleClassRows,
];

export const tabsTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const tabsTokens = [
  { name: '--tabs-gap · --tabs-padding', default: '—', description: '탭 간격·패딩' },
  { name: '--tabs-nav-size', default: '—', description: '네비 스크롤 버튼 크기' },
  { name: '--tabs-indicator-height · --tabs-indicator-transition', default: '—', description: 'line 변형 인디케이터·슬라이드 전환' },
  { name: '--tabs-panel-padding', default: '—', description: '패널 패딩' },
];
