import { ripplePropContainer, rippleClassRows } from '@/doc/data/ripple-api';
export const carouselPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const carouselProps = [
  {
    name: 'aria-label',
    type: 'string',
    default: '—',
    description: '캐러셀 접근성 라벨 (필수)',
  },
  {
    name: 'demo',
    type: 'boolean',
    default: 'true',
    description: 'carousel_demo 클래스 적용',
  },
  {
    name: 'multi',
    type: 'boolean',
    default: 'false',
    description: 'carousel_multi — slides per view auto 레이아웃',
  },
  {
    name: 'dots-outside',
    type: 'boolean',
    default: 'false',
    description: 'carousel_dots-outside — 페이지네이션을 뷰포트 밖에 배치',
  },
  {
    name: 'autoplay-toggle',
    type: 'boolean',
    default: 'false',
    description: '자동 재생 재생·정지 버튼 표시',
  },
  {
    name: 'effect',
    type: `'fade'`,
    default: '—',
    description: '전환 효과. 생략 시 슬라이드',
  },
  {
    name: 'autoplay',
    type: 'boolean',
    default: 'false',
    description: '자동 재생',
  },
  {
    name: 'delay',
    type: 'number',
    default: '4000',
    description: '자동 재생 간격(ms)',
  },
  {
    name: 'loop',
    type: 'boolean',
    default: 'false',
    description: '무한 루프',
  },
  {
    name: 'slides-per-view',
    type: `number | 'auto'`,
    default: '1',
    description: '동시 표시 슬라이드 수',
  },
  {
    name: 'space-between',
    type: 'number',
    default: '0',
    description: '슬라이드 간격(px)',
  },
  {
    name: 'centered',
    type: 'boolean',
    default: 'false',
    description: '활성 슬라이드 중앙 정렬',
  },
  {
    name: 'pagination',
    type: `boolean | 'fraction'`,
    default: 'true',
    description: '페이지네이션 표시. fraction은 분수 형식',
  },
  {
    name: 'navigation',
    type: 'boolean',
    default: 'true',
    description: '이전·다음 화살표 표시',
  },
  ripplePropContainer,
];

export const carouselSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const carouselSlots = [
  { name: 'default', description: 'CarouselSlide 자식 슬라이드' },
];

export const carouselClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const carouselClasses = [
  { name: 'carousel', description: '루트 래퍼 (디자인 토큰·레이아웃)' },
  { name: 'carousel_demo', description: '데모 영역 전체 너비' },
  { name: 'carousel_multi', description: 'slides per view auto 레이아웃' },
  { name: 'carousel_toggle', description: '자동 재생 재생·정지 버튼' },
  { name: 'carousel_dots-outside', description: '페이지네이션을 뷰포트 밖에 배치' },
  { name: 'swiper · swiper-wrapper · swiper-slide', description: 'Swiper 표준 구조' },
  { name: 'data-swiper', description: 'HTML 마크업 Swiper 초기화 대상' },
  { name: 'data-swiper-effect', description: 'HTML 전환 효과 (fade)' },
  { name: 'data-swiper-autoplay · data-swiper-delay', description: 'HTML 자동 재생' },
  { name: 'data-swiper-loop', description: 'HTML 무한 루프' },
  { name: 'data-swiper-slides-per-view · data-swiper-space-between', description: 'HTML 슬라이드 레이아웃' },
  { name: 'data-swiper-centered', description: 'HTML 중앙 정렬' },
  { name: 'data-swiper-pagination', description: 'HTML 페이지네이션 유형 (fraction)' },
  { name: 'is-autoplay-paused', description: '사용자가 정지한 자동 재생 상태' },
  ...rippleClassRows,
];
