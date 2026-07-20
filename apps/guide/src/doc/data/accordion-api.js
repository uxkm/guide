import { ripplePropSurface, rippleClassRows } from '@/doc/data/ripple-api';
export const accordionPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const accordionProps = [
  {
    name: 'variant',
    type: `'bordered' | 'flush' | 'card'`,
    default: 'bordered',
    description: '아코디언 스킨 — bordered(붙임) · flush · card(항목 간격, FAQ)',
  },
  {
    name: 'size',
    type: `'sm' | 'md' | 'lg'`,
    default: 'md',
    description: '트리거·본문 패딩 크기',
  },
  {
    name: 'multiple',
    type: 'boolean',
    default: 'false',
    description: '여러 패널 동시 열기 허용',
  },
  {
    name: 'narrow',
    type: 'boolean',
    default: 'false',
    description: '데모용 최대 너비 제한 (accordion_demo-narrow)',
  },
];

export const accordionItemPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const accordionItemProps = [
  {
    name: 'label',
    type: 'string',
    default: '—',
    description: '트리거에 표시할 제목',
  },
  {
    name: 'content',
    type: 'string',
    default: '—',
    description: '패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능',
  },
  {
    name: 'open',
    type: 'boolean',
    default: 'false',
    description: '초기 열림 상태',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '비활성 항목 (is-disabled + trigger disabled)',
  },
  {
    name: 'extra-code',
    type: 'string',
    default: '—',
    description: '코드 예시용 extra 슬롯 마크업 (데모 코드 생성)',
  },
  ripplePropSurface,
];

export const accordionSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const accordionItemSlots = [
  { name: 'default', description: '패널 본문 (content prop 대체)' },
  { name: 'extra', description: '트리거 오른쪽 보조 정보 (배지·메타 텍스트)' },
];

export const accordionClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const accordionClasses = [
  { name: 'accordion', description: '루트 구조 클래스' },
  { name: 'accordion_bordered', description: '외곽 테두리로 항목을 한 덩어리로 붙인 스킨' },
  { name: 'accordion_flush', description: '구분선만 있는 플러시 스킨' },
  { name: 'accordion_card', description: '항목 사이 간격·독립 카드 스킨 (FAQ 기본 예시)' },
  { name: 'accordion_sm · accordion_lg', description: '크기 변형' },
  { name: 'accordion_item · accordion_trigger · accordion_panel', description: '내부 파트' },
  { name: 'accordion_heading', description: 'role="heading" aria-level="3" 헤딩 래퍼' },
  { name: 'accordion_label · accordion_extra · accordion_icon', description: '트리거 파트' },
  { name: 'accordion_content', description: '패널 본문 래퍼' },
  { name: 'data-accordion', description: 'HTML 마크업 JS 초기화 대상' },
  { name: 'data-accordion-multiple', description: 'HTML 마크업 다중 열기 허용' },
  { name: 'is-open · is-disabled', description: '상태 클래스' },
];


export const accordionTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const accordionTokens = [
  { name: '--accordion-font-size', default: 'var(--text-size-sm)', description: '기본(md) 본문 크기' },
  { name: '--accordion-trigger-font-weight · --accordion-trigger-gap', default: '600 · var(--space-sm)', description: '트리거 타이포·간격' },
  { name: '--accordion-trigger-padding-y · --accordion-trigger-padding-x', default: '0.875rem · var(--space-lg)', description: '트리거 패딩(md)' },
  { name: '--accordion-content-font-size', default: 'var(--text-size-sm)', description: '콘텐츠 글자 크기' },
  { name: '--accordion-content-padding-y · --accordion-content-padding-x', default: 'var(--space-lg) · var(--space-lg)', description: '콘텐츠 상하·좌우 패딩(동일)' },
  { name: '--accordion-icon-size', default: '1rem', description: '펼침 아이콘(md)' },
  { name: '--accordion-card-gap', default: '0', description: '카드형 아코디언 항목 간격' },
  { name: '--accordion-card-trigger-bg', default: 'var(--color-surface-raised)', description: '카드형 트리거 배경' },
  { name: '--accordion-font-size-sm · --accordion-trigger-padding-y-sm · --accordion-trigger-padding-x-sm', default: 'var(--text-size-xs) · 0.625rem · var(--space-md)', description: 'sm 크기' },
  { name: '--accordion-icon-size-sm', default: '0.875rem', description: 'sm 아이콘' },
  { name: '--accordion-font-size-lg · --accordion-trigger-padding-y-lg · --accordion-trigger-padding-x-lg', default: 'var(--text-size-base) · 1rem · var(--space-xl)', description: 'lg 크기' },
  { name: '--accordion-icon-size-lg', default: '1.125rem', description: 'lg 아이콘' },
];
