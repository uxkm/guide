import { rippleClassRows } from '@/doc/data/ripple-api';
export const listPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const listProps = [
  { name: 'bordered', type: 'boolean', default: 'false', description: '테두리 (list_bordered)' },
  { name: 'split', type: 'boolean', default: 'false', description: '항목 구분선 (list_divider)' },
  { name: 'block', type: 'boolean', default: 'false', description: '부모 너비 100% (list_block, inline 레이아웃에서 auto 너비 덮어씀)' },
  { name: 'size', type: `'md' | 'compact'`, default: 'md', description: 'compact는 list_compact' },
  {
    name: 'variant',
    type: `'default' | 'bullet' | 'ordered' | 'definition'`,
    default: 'default',
    description: '목록 유형 — bullet · ordered · definition 스킨 클래스 자동 적용',
  },
  {
    name: 'tag',
    type: `'ul' | 'ol' | 'dl' | 'div'`,
    default: 'variant 기준',
    description: '루트 태그 — 미지정 시 variant에 따라 ul · ol · dl 결정, div는 role="list"',
  },
  {
    name: 'layout',
    type: `'block' | 'inline'`,
    default: 'block',
    description: 'block은 전체 너비 세로 배치, inline은 너비 auto + 제목·내용 가로 배치 (list_inline)',
  },
  {
    name: 'inlineLabelWidth',
    type: 'string',
    default: '—',
    description: '인라인 정의 목록 dt 열 너비 (layout="inline"일 때, --list-inline-label-width)',
  },
  {
    name: 'inlineGap',
    type: 'string',
    default: '—',
    description: '인라인 정의 목록 dt · dd 열 간격 (layout="inline"일 때, --list-inline-gap)',
  },
  {
    name: 'descAlign',
    type: `'left' | 'right'`,
    default: 'left',
    description: '정의 목록 dd 텍스트 정렬 (variant="definition"일 때, right는 list_desc-right)',
  },
];

export const listItemPropColumns = listPropColumns;
export const listItemProps = [
  { name: 'title', type: 'string', default: '—', description: '항목 제목 (list_title)' },
  { name: 'description', type: 'string', default: '—', description: '설명 (list_desc)' },
  { name: 'meta', type: 'string', default: '—', description: '보조 메타 (list_meta)' },
  {
    name: 'tag',
    type: `'auto' | 'li' | 'dt' | 'dd'`,
    default: 'auto',
    description: '항목 태그 — auto는 ul/ol→li, div→div+role=listitem, dl+title·description→dt·dd',
  },
];

export const listSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const listSlots = [{ name: 'default', description: 'ListItem 자식' }];

export const listItemSlots = [
  { name: 'prefix', description: '앞쪽 아바타·아이콘 등' },
  { name: 'default', description: '본문 (title·description 대체)' },
  { name: 'extra', description: '우측 보조 텍스트 (list_extra)' },
  { name: 'actions', description: '우측 액션 (list_action)' },
];

export const listClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const listClasses = [
  { name: 'list', description: '리스트 루트' },
  { name: 'list_bordered · list_divider · list_compact', description: '스타일 변형' },
  { name: 'list_bullet · list_bullet-circle · list_bullet-square', description: '불릿 목록 (ul)' },
  {
    name: 'list_ordered · list_ordered-alpha · list_ordered-roman · list_ordered-upper-alpha · list_ordered-upper-roman',
    description: '번호 목록 (ol) — 소문자·대문자 알파벳·로마 숫자',
  },
  {
    name: 'list_ordered-outline · list_ordered-dash',
    description: '계층 번호 — 뎁스별 1.1 · 1-1 형식 (중첩 ol에 동일 클래스 적용)',
  },
  { name: 'list_ordered-depth', description: '뎁스별 번호 형식 자동 전환 (1 → a → i → 1 …)' },
  { name: 'list_definition', description: '정의 목록 (dl) — dt · dd 용어-설명 쌍' },
  { name: 'list_inline', description: '인라인 배치 — width auto, 제목·내용 가로 (layout="inline")' },
  { name: 'list_block', description: '부모 너비 100% (block prop)' },
  { name: 'list_desc-right', description: '정의 목록 dd 우측 정렬 (descAlign="right")' },
  { name: 'list_item', description: '항목 (li · div[role=listitem])' },
  { name: 'list_content · list_title · list_desc · list_meta', description: '항목 콘텐츠 파트' },
  { name: 'list_extra · list_action', description: '우측 영역' },
  { name: 'list_interactive', description: '클릭 가능 항목' },
  { name: 'list_link', description: '항목 링크·버튼 — data-ripple 로 파장' },
  ...rippleClassRows,
];

export const listTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const listTokens = [
  { name: '--list-gap', default: 'var(--space-xs)', description: '항목 간격' },
  { name: '--list-item-padding-y · --list-item-padding-x', default: '0.65rem · 1rem', description: '항목 패딩' },
  { name: '--list-title-size · --list-desc-size · --list-meta-size', default: '—', description: '텍스트 크기' },
  { name: '--list-inline-label-width · --list-inline-gap', default: '8rem · var(--space-md)', description: '인라인 정의 목록 열 너비 · 열 간격' },
];
