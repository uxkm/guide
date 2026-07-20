import { ripplePropIcon, rippleClassRows } from '@/doc/data/ripple-api';
export const iconPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const iconProps = [
  {
    name: 'name',
    type: 'string',
    default: '—',
    description: 'common-icons 갤러리 키. 지정 시 기본 슬롯 대신 미리 정의된 stroke 경로를 렌더합니다',
  },
  {
    name: 'size',
    type: `'sm' | 'md' | 'lg' | 'xl'`,
    default: 'md',
    description: '아이콘 크기. md는 icon만, 나머지는 icon_sm · icon_lg · icon_xl',
  },
  {
    name: 'color',
    type: 'string',
    default: '—',
    description: '공통 color_* 클래스 (currentColor 상속)',
  },
  {
    name: 'inline',
    type: 'boolean',
    default: 'false',
    description: '텍스트와 수직 정렬 (icon_inline)',
  },
  {
    name: 'spin',
    type: 'boolean',
    default: 'false',
    description: '회전 애니메이션 (icon_spin)',
  },
  {
    name: 'button',
    type: 'boolean',
    default: 'false',
    description: '클릭 가능한 아이콘 버튼 (icon_button + button 태그)',
  },
  {
    name: 'circle',
    type: 'boolean',
    default: 'false',
    description: '원형 배경 (icon_circle)',
  },
  {
    name: 'square',
    type: 'boolean',
    default: 'false',
    description: '사각 배경 (icon_square)',
  },
  {
    name: 'pulse',
    type: 'boolean',
    default: 'false',
    description: '펄스 애니메이션 (icon_pulse, circle과 함께)',
  },
  {
    name: 'aria-label',
    type: 'string',
    default: '—',
    description: 'button·의미 있는 아이콘 시 접근성 라벨',
  },
  ripplePropIcon,
];

export const iconSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const iconSlots = [
  { name: 'default', description: 'SVG path·circle 등 자식 요소' },
];

export const iconClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const iconClasses = [
  { name: 'icon', description: 'SVG 루트 기본 크기' },
  { name: 'icon_sm · icon_lg · icon_xl', description: '크기 변형' },
  { name: 'icon_inline', description: '텍스트 인라인 정렬' },
  { name: 'icon_spin', description: '회전 애니메이션' },
  { name: 'icon_button', description: '아이콘 버튼 래퍼' },
  { name: 'icon_circle · icon_square', description: '배경 형태' },
  { name: 'icon_circle-sm · icon_circle-lg', description: '원형 배경 크기' },
  { name: 'icon_pulse', description: '펄스 강조' },
  { name: 'icon_group', description: '여러 아이콘 가로 배치 컨테이너' },
  { name: 'color_*', description: '공통 색상 유틸' },
  ...rippleClassRows,
];

export const iconTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const iconTokens = [
  { name: '--icon-size-sm · --icon-size · --icon-size-lg · --icon-size-xl', default: '1rem · 1.25rem · 1.5rem · 2rem', description: '아이콘 지름' },
  { name: '--icon-spin-duration', default: '0.8s', description: '회전 주기' },
  { name: '--icon-circle-size · --icon-circle-size-sm · --icon-circle-size-lg', default: '2.25rem · 1.75rem · 2.75rem', description: '원형 배경 크기' },
  { name: '--icon-pulse-duration', default: '1.5s', description: '펄스 애니메이션 주기' },
];
