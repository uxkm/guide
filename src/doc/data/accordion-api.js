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
    description: '아코디언 스킨',
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
  { name: 'accordion_bordered', description: '외곽 테두리 스킨 (기본)' },
  { name: 'accordion_flush', description: '구분선만 있는 플러시 스킨' },
  { name: 'accordion_card', description: '항목별 카드 분리 스킨' },
  { name: 'accordion_sm · accordion_lg', description: '크기 변형' },
  { name: 'accordion_item · accordion_trigger · accordion_panel', description: '내부 파트' },
  { name: 'accordion_label · accordion_extra · accordion_icon', description: '트리거 파트' },
  { name: 'accordion_content', description: '패널 본문 래퍼' },
  { name: 'data-accordion', description: 'HTML 마크업 JS 초기화 대상' },
  { name: 'data-accordion-multiple', description: 'HTML 마크업 다중 열기 허용' },
  { name: 'is-open · is-disabled', description: '상태 클래스' },
];
