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
    description: '재생·정지 버튼 표시. autoplay가 활성이면 기본으로 함께 표시됩니다.',
  },
  {
    name: 'effect',
    type: `'fade' | 'coverflow'`,
    default: '—',
    description: '전환 효과. 생략 시 슬라이드',
  },
  {
    name: 'autoplay',
    type: 'boolean',
    default: 'false',
    description: '자동 재생. 재생·정지 버튼이 함께 표시됩니다.',
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
    name: 'initial-slide',
    type: 'number',
    default: '0',
    description: '시작 슬라이드 인덱스 (0부터). 커버플로우·축소 기본은 첫 슬라이드(0), 예: :initial-slide="2"',
  },
  {
    name: 'slides-per-view',
    type: `number | 'auto'`,
    default: '1',
    description: '동시 표시 슬라이드 수',
  },
  {
    name: 'slides-per-group',
    type: 'number',
    default: '1',
    description:
      '한 번에 이동하는 슬라이드 수. 그리드에서는 slides-per-view × grid-rows(예: 3×2=6)로 페이지 단위 이동',
  },
  {
    name: 'space-between',
    type: 'number',
    default: '0',
    description: '슬라이드 간격(px). Swiper spaceBetween에 전달. multi·grid·coverflow와 함께 사용',
  },
  {
    name: 'centered',
    type: 'boolean',
    default: 'false',
    description: '활성 슬라이드 중앙 정렬. coverflow일 때 자동 적용',
  },
  {
    name: 'pagination',
    type: `boolean | 'fraction' | 'progressbar' | 'custom'`,
    default: 'true',
    description: '페이지네이션 표시. fraction·progressbar·custom(번호) 지원',
  },
  {
    name: 'navigation',
    type: 'boolean',
    default: 'true',
    description: '이전·다음 화살표 표시',
  },
  {
    name: 'grid-rows',
    type: 'number',
    default: '1',
    description: 'Grid 행 수. 2 이상이면 Grid 레이아웃',
  },
  {
    name: 'grid-fill',
    type: `'row' | 'column'`,
    default: `'row'`,
    description: 'Grid 채움 방향',
  },
  {
    name: 'coverflow-style',
    type: `'tilt' | 'rise'`,
    default: `'tilt'`,
    description: 'coverflow 스타일. tilt는 좌우 기울임, rise는 기울임 없이 측면 슬라이드만 축소',
  },
  {
    name: 'coverflow-sides',
    type: `1 | 1.5 | 2 | 'auto'`,
    default: '1.5',
    description:
      '활성 기준 좌·우 노출 수. 슬라이드 크기는 항상 1 기준(동일). 1.5·2는 간격을 좁혀 peek만 늘림',
  },
  {
    name: 'coverflow-effect',
    type: 'object',
    default: '—',
    description: 'coverflow/rise 효과 세부 옵션. 지정 시 스타일 프리셋에 병합',
  },
  {
    name: 'thumbs',
    type: 'Swiper',
    default: '—',
    description: 'Thumbs로 연결할 썸네일 Swiper 인스턴스',
  },
  {
    name: 'thumbs-control',
    type: 'boolean',
    default: 'false',
    description: '썸네일 컨트롤 캐러셀. 탭 네비처럼 시작 좌측 정렬, 중간은 활성 가운데, 끝은 우측(잘림 없이 클램프)',
  },
  {
    name: 'watch-slides-progress',
    type: 'boolean',
    default: 'false',
    description: '슬라이드 진행 상태 감시 (Thumbs 연동용)',
  },
  {
    name: 'free-mode',
    type: 'boolean',
    default: 'false',
    description: 'Free mode. thumbs-control과 함께 쓰면 가운데 스냅이 약해질 수 있음',
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
  { name: 'carousel_coverflow', description: 'coverflow 효과 레이아웃' },
  { name: 'carousel_coverflow-rise', description: 'coverflow rise — 기울임 없이 측면 슬라이드 축소' },
  { name: 'carousel_coverflow-sides-1 · sides-15 · sides-2', description: 'coverflow 좌·우 노출 개수 (1 / 1.5 / 2)' },
  { name: 'carousel_grid', description: 'Grid 다행 레이아웃' },
  { name: 'carousel_gallery', description: '메인+썸네일 갤러리 래퍼' },
  { name: 'carousel_thumbs', description: '썸네일 컨트롤 캐러셀' },
  { name: 'carousel_pagination-progress', description: 'progressbar 페이지네이션' },
  { name: 'carousel_pagination-custom', description: '번호 커스텀 페이지네이션' },
  { name: 'swiper · swiper-wrapper · swiper-slide', description: 'Swiper 표준 구조' },
  { name: 'data-swiper', description: 'HTML 마크업 Swiper 초기화 대상' },
  { name: 'data-swiper-effect', description: 'HTML 전환 효과 (fade · coverflow)' },
  { name: 'data-swiper-coverflow-style', description: 'HTML coverflow 스타일 (tilt · rise)' },
  { name: 'data-swiper-coverflow-sides', description: 'HTML coverflow 좌·우 노출 수 (1 · 1.5 · 2)' },
  { name: 'data-swiper-autoplay · data-swiper-delay', description: 'HTML 자동 재생' },
  { name: 'data-swiper-loop', description: 'HTML 무한 루프' },
  { name: 'data-swiper-initial-slide', description: 'HTML 시작 슬라이드 인덱스' },
  { name: 'data-swiper-slides-per-view · data-swiper-space-between', description: 'HTML 슬라이드 레이아웃' },
  { name: 'data-swiper-slides-per-group', description: 'HTML 한 번에 이동하는 슬라이드 수 (그룹 이동)' },
  { name: 'data-swiper-centered', description: 'HTML 중앙 정렬' },
  { name: 'data-swiper-pagination', description: 'HTML 페이지네이션 유형 (fraction · progressbar · custom)' },
  { name: 'data-swiper-grid-rows · data-swiper-grid-fill', description: 'HTML Grid 행·채움 방향' },
  { name: 'data-swiper-thumbs', description: 'HTML Thumbs 대상 셀렉터' },
  { name: 'is-autoplay-paused', description: '사용자가 정지한 자동 재생 상태' },
  ...rippleClassRows,
];


export const carouselTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const carouselTokens = [
  { name: '--carousel-height · --carousel-radius · --carousel-bg', default: '16rem · var(--radius-lg) · var(--color-surface-raised)', description: '슬라이드 영역(md)' },
  { name: '--carousel-font-size · --carousel-transition', default: 'var(--text-size-sm) · 0.35s ease', description: '타이포·전환' },
  { name: '--carousel-nav-size · --carousel-nav-icon-size · --carousel-nav-offset', default: '2.25rem · 0.875rem · var(--space-md)', description: '이전/다음 버튼(md)' },
  { name: '--carousel-nav-bg · --carousel-nav-color', default: 'var(--color-surface) · var(--color-text)', description: '네비게이션 색' },
  { name: '--carousel-dot-gap · --carousel-dot-size · --carousel-dot-size-active', default: '0.375rem · 0.5rem · 1.25rem', description: '인디케이터 점' },
  { name: '--carousel-dot-bg · --carousel-dot-bg-active', default: 'var(--color-border) · var(--color-accent)', description: '점 색상' },
  { name: '--carousel-dots-padding-y · --carousel-dots-padding-x', default: 'var(--space-md) · var(--space-md)', description: '인디케이터 영역 패딩' },
  { name: '--carousel-toggle-size · --carousel-toggle-icon-size', default: '2rem · 1rem', description: '재생/일시정지 토글' },
  { name: '--carousel-height-sm · --carousel-nav-size-sm', default: '11rem · 1.875rem', description: 'sm 크기' },
  { name: '--carousel-height-lg · --carousel-nav-size-lg', default: '20rem · 2.75rem', description: 'lg 크기' },
];
