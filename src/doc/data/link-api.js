import { ripplePropSurface, rippleClassRows } from '@/doc/data/ripple-api';
export const linkPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const linkProps = [
  {
    name: 'color',
    type: `'primary' | 'muted' | 'success' | 'warning' | 'danger'`,
    default: 'primary',
    description: '공통 color_* 클래스',
  },
  {
    name: 'size',
    type: `'sm' | 'lg' | 'xl'`,
    default: '—',
    description: '공통 size_* 클래스',
  },
  {
    name: 'underline',
    type: 'boolean',
    default: 'false',
    description: '항상 밑줄 (link_underline)',
  },
  {
    name: 'no-underline',
    type: 'boolean',
    default: 'false',
    description: '밑줄 없음 (link_no-underline)',
  },
  {
    name: 'standalone',
    type: 'boolean',
    default: 'false',
    description: '터치 영역 확대 (link_standalone)',
  },
  {
    name: 'nav',
    type: 'boolean',
    default: 'false',
    description: '내비게이션 링크 스타일 (link_nav)',
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    description: '블록 링크 (link_block)',
  },
  {
    name: 'back',
    type: 'boolean',
    default: 'false',
    description: '뒤로가기 링크 (link_back)',
  },
  {
    name: 'icon-only',
    type: 'boolean',
    default: 'false',
    description: '아이콘만 표시 (link_icon-only)',
  },
  {
    name: 'active',
    type: 'boolean',
    default: 'false',
    description: '현재 페이지·활성 상태 (is-active)',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '비활성 (is-disabled, aria-disabled, tabindex -1)',
  },
  {
    name: 'label',
    type: 'string',
    default: '—',
    description: '링크 텍스트. default 슬롯으로 대체 가능',
  },
  {
    name: 'href',
    type: 'string',
    default: '#',
    description: '이동 URL',
  },
  {
    name: 'target',
    type: 'string',
    default: '—',
    description: 'a target 속성 (예: _blank)',
  },
  {
    name: 'rel',
    type: 'string',
    default: '—',
    description: 'a rel 속성 (예: noopener noreferrer)',
  },
  {
    name: 'aria-label',
    type: 'string',
    default: '—',
    description: 'icon-only 등 텍스트 없을 때 접근성 라벨',
  },
  ripplePropSurface,
];

export const linkSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const linkSlots = [
  { name: 'default', description: '링크 텍스트 (label prop 대체)' },
  { name: 'icon', description: '텍스트 앞 아이콘 (link_icon)' },
];

export const linkClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const linkClasses = [
  { name: 'link', description: '하이퍼링크 루트' },
  { name: 'link_underline · link_no-underline · link_standalone', description: '밑줄·터치 영역' },
  { name: 'link_nav · link_back · link_block · link_icon-only', description: '용도별 변형' },
  { name: 'link_icon', description: '링크 내 아이콘' },
  { name: 'link_row · link_group · link_group-inline', description: '링크 묶음 레이아웃' },
  { name: 'is-active · is-disabled', description: '상태 클래스' },
  { name: 'color_* · size_*', description: '공통 색상·크기 유틸' },
  ...rippleClassRows,
];


export const linkTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const linkTokens = [
  { name: '--link-gap', default: 'var(--space-xs)', description: '아이콘·텍스트 간격' },
  { name: '--link-font-weight', default: '500', description: '링크 두께' },
  { name: '--link-underline-offset', default: '2px', description: '밑줄 오프셋' },
  { name: '--link-nav-padding-y · --link-nav-padding-x', default: '0.35rem · 0.5rem', description: '네비 링크 패딩' },
  { name: '--link-standalone-padding-y · --link-standalone-padding-x', default: '0.25rem · 0.15rem', description: '독립 링크 터치 영역' },
  { name: '--link-icon-only-size', default: '2rem', description: '아이콘만 링크 크기' },
];
