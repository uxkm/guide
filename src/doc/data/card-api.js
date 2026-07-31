import { ripplePropOptIn, rippleClassRows } from '@/doc/data/ripple-api';

export const cardPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const cardProps = [
  { name: 'as', type: 'React.ElementType', default: '—', description: '루트 요소 또는 Next Link 같은 커스텀 컴포넌트' },
  { name: 'variant', type: `'bordered' | 'shadow' | 'flat'`, default: 'bordered', description: '카드 스킨. flat은 card_ghost' },
  { name: 'size', type: `'sm' | 'md' | 'lg' | 'compact'`, default: 'md', description: 'card_sm · card_lg · card_compact' },
  { name: 'layout', type: `'default' | 'webzine' | 'news' | 'product'`, default: 'default', description: '기본 · 웹진 · 뉴스 · 상품 리스트형 레이아웃' },
  { name: 'mediaPosition', type: `'top' | 'left' | 'right'`, default: 'top', description: '미디어 위치. news와 product는 기본 left' },
  { name: 'mediaDivider', type: 'boolean', default: 'true', description: '좌우 미디어와 콘텐츠 사이 구분선 표시' },
  { name: 'hoverable', type: 'boolean', default: 'false', description: '호버 상승 효과 (card_hover)' },
  { name: 'title', type: 'string', default: '—', description: '내장 헤더 제목 (CardHeader 없이 사용 시)' },
  { name: 'subtitle', type: 'string', default: '—', description: '내장 헤더 부제' },
  { name: 'media', type: 'ReactNode', default: '—', description: '상단 미디어. Next Image를 포함한 React 노드' },
  { name: 'header', type: 'ReactNode', default: '—', description: '내장 헤더의 메인 콘텐츠' },
  { name: 'extra', type: 'ReactNode', default: '—', description: '내장 헤더 우측 액션' },
  { name: 'tag', type: 'string', default: 'article', description: '하위 호환용 루트 HTML 태그. as가 우선합니다' },
  ripplePropOptIn,
];

export const cardHeaderPropColumns = cardPropColumns;
export const cardHeaderProps = [
  { name: 'title', type: 'string', default: '—', description: '제목 (card_title)' },
  { name: 'subtitle', type: 'string', default: '—', description: '부제 (card_subtitle)' },
];

export const cardBodyPropColumns = cardPropColumns;
export const cardBodyProps = [
  { name: 'lineClamp', type: '1 | 2 | 3', default: '—', description: '본문을 지정한 줄 수 뒤에서 말줄임' },
];

export const cardFooterPropColumns = cardPropColumns;
export const cardFooterProps = [
  { name: 'justify', type: `'start' | 'center' | 'end' | 'between'`, default: 'start', description: '푸터 항목의 가로 정렬' },
  { name: 'ratio', type: `'1:1' | '1:2' | '2:1'`, default: '—', description: '직접 자식 두 개의 균등·비율 분할' },
  { name: 'full', type: 'boolean', default: 'false', description: '단일 직접 자식을 100% 너비로 확장' },
  { name: 'flush', type: 'boolean', default: 'false', description: '푸터 패딩 제거' },
  { name: 'between', type: 'boolean', default: 'false', description: '하위 호환용 양끝 정렬. justify="between" 권장' },
];

export const cardSlotColumns = [
  { key: 'name', label: 'Children / Prop' },
  { key: 'description', label: '설명' },
];

export const cardSlots = [
  { name: 'media', description: '상단·좌측·우측 미디어 영역 (Vue #media 슬롯 대응, card_media)' },
  { name: 'header', description: '헤더 콘텐츠 (Vue #header 슬롯 대응, title·subtitle prop 대체)' },
  { name: 'extra', description: '헤더 우측 액션 (Vue #extra 슬롯 대응, card_extra)' },
  {
    name: 'children',
    description: 'CardBody · CardFooter 등 (Vue default 슬롯 대응)',
  },
];

export const cardHeaderSlots = [
  { name: 'children', description: '헤더 메인 콘텐츠 (title·subtitle prop 대체)' },
  { name: 'extra', description: '헤더 우측 액션 (Vue #extra 슬롯 대응)' },
];

export const cardBodySlots = [{ name: 'children', description: '카드 본문 (Vue default 슬롯 대응)' }];
export const cardFooterSlots = [{ name: 'children', description: '카드 푸터 (Vue default 슬롯 대응)' }];

export const cardClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const cardClasses = [
  { name: 'card', description: '카드 루트' },
  { name: 'card_shadow · card_ghost · card_borderless', description: '스킨 변형' },
  { name: 'card_sm · card_lg · card_compact', description: '크기·패딩' },
  { name: 'card_webzine · card_news · card_product', description: '웹진형 · 뉴스형 · 상품형' },
  { name: 'card_news-list · card_product-list', description: '뉴스 · 상품 목록 컨테이너' },
  { name: 'card_media-left · card_media-right · card_media-no-divider', description: '미디어 좌우 배치 · 구분선 제거' },
  { name: 'card_hover · card_clickable · card_accent', description: '인터랙션·강조' },
  { name: 'card_header · card_body · card_footer · card_media', description: '구조 파트' },
  { name: 'card_title · card_subtitle · card_extra', description: '헤더 파트' },
  { name: 'card_body-clamp-1 · card_body-clamp-2 · card_body-clamp-3', description: '본문 1·2·3줄 말줄임' },
  { name: 'card_price · card_price-original', description: '상품 현재가 · 원래 가격' },
  { name: 'card_footer-start · card_footer-center · card_footer-end · card_footer-between', description: '푸터 가로 정렬' },
  { name: 'card_footer-full · card_footer-flush', description: '단일 100% 확장 · 패딩 제거' },
  { name: 'card_footer-ratio-1-1 · card_footer-ratio-1-2 · card_footer-ratio-2-1', description: '푸터 직접 자식 비율 분할' },
  { name: 'card_deck · card_deck-2 · card_deck-3', description: '카드 그리드' },
  { name: 'is-disabled', description: '비활성 상태' },
  ...rippleClassRows,
];

export const cardTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const cardTokens = [
  { name: '--card-padding · --card-padding-sm · --card-padding-lg', default: '—', description: '카드 패딩' },
  { name: '--card-radius · --card-border-color · --card-shadow', default: '—', description: '모서리·테두리·그림자' },
  { name: '--card-news-media-width · --card-product-media-width', default: '10rem · 8.5rem', description: '뉴스 · 상품 이미지 너비' },
  { name: '--card-webzine-media-ratio', default: '3 / 2', description: '웹진 이미지 비율' },
  { name: '--card-title-size · --card-subtitle-size', default: '—', description: '제목·부제 타이포' },
  { name: '--card-accent-width · --card-hover-translate', default: '3px · -2px', description: '강조선·호버 이동' },
];
