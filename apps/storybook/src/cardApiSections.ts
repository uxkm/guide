import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
const vueRows = (rows: ApiRow[]) => rows.map((row) => ({ ...row, name: row.name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`) }));

const cardProps: ApiRow[] = [
  { name: 'variant', type: "'bordered' | 'shadow' | 'flat'", default: 'bordered', description: '카드 스킨. flat은 card_ghost' },
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'compact'", default: 'md', description: 'card_sm · card_lg · card_compact' },
  { name: 'hoverable', type: 'boolean', default: 'false', description: '호버 시 높임 효과' },
  { name: 'title', type: 'string | number', default: '—', description: 'CardHeader 없이 사용하는 내장 헤더 제목' },
  { name: 'subtitle', type: 'string | number', default: '—', description: '내장 헤더 부제' },
  { name: 'tag · as', type: 'ElementType · string', default: 'article', description: '루트 HTML 태그' },
  { name: 'media', type: 'ReactNode', default: '—', description: '상단 미디어 영역' },
  { name: 'header', type: 'ReactNode', default: '—', description: '내장 헤더 콘텐츠' },
  { name: 'extra', type: 'ReactNode', default: '—', description: '내장 헤더 우측 액션' },
  { name: 'ripple', type: 'boolean', default: 'false', description: '클릭 파장 효과' }
];

const cardHeaderProps: ApiRow[] = [
  { name: 'title', type: 'string | number', default: '—', description: '제목 (card_title)' },
  { name: 'subtitle', type: 'string | number', default: '—', description: '부제 (card_subtitle)' },
  { name: 'extra', type: 'ReactNode · slot', default: '—', description: '헤더 우측 액션 (card_extra)' },
  { name: 'children · default', type: 'ReactNode · slot', default: '—', description: 'title·subtitle를 대체하는 헤더 메인 콘텐츠' }
];

export const cardApiSections: ApiSectionData[] = [
  section('React · Next.js API · Card Props', cardProps, 'Next.js는 `@uxkm/react/card`를 재사용합니다.'),
  section('React · Next.js API · CardHeader Props', cardHeaderProps),
  section('React · Next.js API · CardBody Props', [{ name: 'children', type: 'ReactNode', default: '—', description: '카드 본문' }]),
  section('React · Next.js API · CardFooter Props', [{ name: 'between', type: 'boolean', default: 'false', description: '양끝 정렬 (card_footer-between)' }, { name: 'children', type: 'ReactNode', default: '—', description: '카드 하단 액션' }]),
  section('React · Next.js API · CardDeck Props', [{ name: 'columns', type: '2 | 3', default: 'auto-fill', description: '고정 반응형 열 수' }, { name: 'children', type: 'ReactNode', default: '—', description: 'Card 목록' }]),
  section('Vue · Nuxt API · Card Props', vueRows(cardProps.filter((row) => !['media', 'header', 'extra'].includes(row.name))), 'Nuxt는 `@uxkm/vue/card`를 재사용합니다.'),
  section('Vue · Nuxt API · Card Slots', [{ name: 'media', type: 'slot', default: '—', description: '상단 미디어 영역' }, { name: 'header', type: 'slot', default: '—', description: 'title·subtitle를 대체하는 내장 헤더 콘텐츠' }, { name: 'extra', type: 'slot', default: '—', description: '내장 헤더 우측 액션' }, { name: 'default', type: 'slot', default: '—', description: 'CardHeader · CardBody · CardFooter 등' }]),
  section('Vue · Nuxt API · CardHeader Props / Slots', vueRows(cardHeaderProps)),
  section('Vue · Nuxt API · CardBody / CardFooter', [{ name: 'CardBody default', type: 'slot', default: '—', description: '카드 본문' }, { name: 'CardFooter between', type: 'boolean', default: 'false', description: '푸터 양끝 정렬' }, { name: 'CardFooter default', type: 'slot', default: '—', description: '카드 하단 액션' }]),
  section('HTML · Gulp · 공통 클래스', [
    { name: 'card · card_inner · card_header · card_body · card_footer', type: 'class', default: '—', description: '카드와 주요 내부 영역' },
    { name: 'card_title · card_subtitle · card_extra · card_media', type: 'class', default: '—', description: '제목·보조·미디어 파트' },
    { name: 'card_sm · card_lg · card_compact · card_horizontal', type: 'class', default: '—', description: '크기와 레이아웃' },
    { name: 'card_borderless · card_shadow · card_elevated · card_ghost', type: 'class', default: '—', description: '표면 스킨' },
    { name: 'card_hover · card_clickable · card_accent · is-disabled', type: 'class', default: '—', description: '동작과 상태' },
    { name: 'card_deck · card_deck-2 · card_deck-3', type: 'class', default: '—', description: '반응형 카드 그룹' }
  ]),
  section('공통 API · 디자인 토큰', [
    { name: '--card-padding · --card-padding-sm · --card-padding-lg', type: 'length', default: 'var(--space-lg) · var(--space-md) · var(--space-xl)', description: '크기별 내부 여백' },
    { name: '--card-radius · --card-shadow · --card-shadow-md', type: 'length · shadow', default: '—', description: '모서리와 그림자' },
    { name: '--card-media-ratio · --card-horizontal-media-width', type: 'ratio · length', default: '16 / 9 · 7.5rem', description: '미디어 비율과 가로형 너비' }
  ])
];
