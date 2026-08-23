import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[]): ApiSectionData => ({ title, tables: [{ columns, rows }] });

export const carouselApiSections: ApiSectionData[] = [
  section('Carousel API · 기본', [
    { name: 'ariaLabel', type: 'string', default: "'콘텐츠 슬라이드'", description: '캐러셀 영역의 접근성 이름입니다.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '높이와 내비게이션 크기입니다.' },
    { name: 'effect', type: "'fade' | 'coverflow'", default: '—', description: '슬라이드 전환 효과입니다.' },
    { name: 'loop', type: 'boolean', default: 'false', description: '마지막과 첫 슬라이드를 순환합니다.' },
    { name: 'initialSlide', type: 'number', default: '0', description: '처음 표시할 슬라이드 인덱스입니다.' },
    { name: 'navigation', type: 'boolean', default: 'true', description: '이전·다음 버튼을 표시합니다.' },
    { name: 'pagination', type: "boolean | 'fraction' | 'progressbar' | 'custom'", default: 'true', description: '페이지네이션 유형을 선택합니다.' },
    { name: 'dotsOutside', type: 'boolean', default: 'false', description: '페이지네이션을 슬라이드 영역 밖에 표시합니다.' },
  ]),
  section('Carousel API · 레이아웃', [
    { name: 'slidesPerView', type: "number | 'auto'", default: '1', description: '한 화면에 표시할 슬라이드 수입니다.' },
    { name: 'slidesPerGroup', type: 'number', default: '1', description: '한 번에 이동할 슬라이드 수입니다.' },
    { name: 'spaceBetween', type: 'number', default: '0', description: '슬라이드 사이 간격(px)입니다.' },
    { name: 'multi', type: 'boolean', default: 'false', description: '자동 너비 다중 슬라이드 레이아웃입니다.' },
    { name: 'centered', type: 'boolean', default: 'false', description: '활성 슬라이드를 가운데 정렬합니다.' },
    { name: 'gridRows', type: 'number', default: '1', description: '2 이상이면 다행 그리드를 사용합니다.' },
    { name: 'gridFill', type: "'row' | 'column'", default: "'row'", description: '그리드 채움 방향입니다.' },
  ]),
  section('Carousel API · 자동 재생과 효과', [
    { name: 'autoplay', type: 'boolean', default: 'false', description: '슬라이드를 자동 재생합니다.' },
    { name: 'delay', type: 'number', default: '4000', description: '자동 재생 간격(ms)입니다.' },
    { name: 'autoplayToggle', type: 'boolean', default: 'false', description: '재생·정지 버튼을 표시합니다.' },
    { name: 'coverflowStyle', type: "'tilt' | 'rise'", default: "'tilt'", description: '커버플로우의 회전 또는 축소 스타일입니다.' },
    { name: 'coverflowSides', type: "1 | 1.5 | 2 | 'auto'", default: '1.5', description: '활성 슬라이드 좌우 노출 범위입니다.' },
    { name: 'coverflowEffect', type: 'object', default: '—', description: 'Swiper 커버플로우 상세 옵션입니다.' },
  ]),
  section('Carousel API · 썸네일', [
    { name: 'thumbs', type: 'Swiper', default: '—', description: '연결할 썸네일 Swiper 인스턴스입니다.' },
    { name: 'thumbsControl', type: 'boolean', default: 'false', description: '썸네일 컨트롤 캐러셀로 동작합니다.' },
    { name: 'watchSlidesProgress', type: 'boolean', default: 'false', description: '썸네일 연결을 위해 진행 상태를 감시합니다.' },
    { name: 'freeMode', type: 'boolean', default: 'false', description: '자유 스크롤 모드를 사용합니다.' },
    { name: 'onSwiper · @swiper', type: 'callback', default: '—', description: '생성된 Swiper 인스턴스를 전달합니다.' },
  ]),
  section('CarouselSlide · HTML', [
    { name: 'children · default slot', type: 'ReactNode', default: '—', description: '슬라이드 콘텐츠입니다.' },
    { name: 'data-swiper', type: 'attribute', default: '—', description: 'HTML/Gulp 캐러셀 초기화 대상입니다.' },
    { name: 'data-swiper-effect · data-swiper-loop · data-swiper-autoplay', type: 'attribute', default: '—', description: 'HTML/Gulp 효과와 동작을 설정합니다.' },
    { name: 'data-swiper-slides-per-view · data-swiper-space-between', type: 'attribute', default: '—', description: 'HTML/Gulp 슬라이드 배치를 설정합니다.' },
    { name: 'data-swiper-grid-rows · data-swiper-thumbs', type: 'attribute', default: '—', description: 'HTML/Gulp 그리드와 썸네일 연결을 설정합니다.' },
  ]),
  section('디자인 토큰', [
    { name: '--carousel-height · --carousel-radius', type: 'length', default: '16rem · radius-lg', description: '슬라이드 영역 높이와 모서리입니다.' },
    { name: '--carousel-nav-size · --carousel-nav-offset', type: 'length', default: '2.25rem · space-md', description: '내비게이션 크기와 위치입니다.' },
    { name: '--carousel-dot-size · --carousel-dot-size-active', type: 'length', default: '0.5rem · 1.25rem', description: '페이지네이션 점 크기입니다.' },
    { name: '--carousel-toggle-size', type: 'length', default: '2rem', description: '재생·정지 버튼 크기입니다.' },
  ]),
];
