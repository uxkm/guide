import { ripplePropOptIn, rippleClassRows } from '@/doc/data/ripple-api';
export const cardPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const cardProps = [
  { name: 'variant', type: `'bordered' | 'shadow' | 'flat'`, default: 'bordered', description: '카드 스킨. flat은 card_ghost' },
  { name: 'size', type: `'sm' | 'md' | 'lg' | 'compact'`, default: 'md', description: 'card_sm · card_lg · card_compact' },
  { name: 'hoverable', type: 'boolean', default: 'false', description: '호버 상승 효과 (card_hover)' },
  { name: 'title', type: 'string', default: '—', description: '내장 헤더 제목 (CardHeader 없이 사용 시)' },
  { name: 'subtitle', type: 'string', default: '—', description: '내장 헤더 부제' },
  { name: 'tag', type: 'string', default: 'article', description: '루트 HTML 태그' },
  ripplePropOptIn,
];

export const cardHeaderPropColumns = cardPropColumns;
export const cardHeaderProps = [
  { name: 'title', type: 'string', default: '—', description: '제목 (card_title)' },
  { name: 'subtitle', type: 'string', default: '—', description: '부제 (card_subtitle)' },
];

export const cardFooterPropColumns = cardPropColumns;
export const cardFooterProps = [
  { name: 'between', type: 'boolean', default: 'false', description: '양끝 정렬 (card_footer-between)' },
];

export const cardSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const cardSlots = [
  { name: 'media', description: '상단 미디어 영역 (card_media)' },
  { name: 'header', description: '헤더 콘텐츠 (title·subtitle 대체)' },
  { name: 'extra', description: '헤더 우측 액션 (card_extra)' },
  { name: 'default', description: '본문·푸터 등 자식 (CardBody · CardFooter)' },
];

export const cardHeaderSlots = [
  { name: 'default', description: '헤더 메인 콘텐츠' },
  { name: 'extra', description: '헤더 우측 액션' },
];

export const cardBodySlots = [{ name: 'default', description: '카드 본문' }];
export const cardFooterSlots = [{ name: 'default', description: '카드 푸터' }];

export const cardClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const cardClasses = [
  { name: 'card', description: '카드 루트' },
  { name: 'card_shadow · card_ghost · card_borderless', description: '스킨 변형' },
  { name: 'card_sm · card_lg · card_compact', description: '크기·패딩' },
  { name: 'card_hover · card_clickable · card_accent', description: '인터랙션·강조' },
  { name: 'card_header · card_body · card_footer · card_media', description: '구조 파트' },
  { name: 'card_title · card_subtitle · card_extra', description: '헤더 파트' },
  { name: 'card_footer-between', description: '푸터 양끝 정렬' },
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
  { name: '--card-title-size · --card-subtitle-size', default: '—', description: '제목·부제 타이포' },
  { name: '--card-accent-width · --card-hover-translate', default: '3px · -2px', description: '강조선·호버 이동' },
];
