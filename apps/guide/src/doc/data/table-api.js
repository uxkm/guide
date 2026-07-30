import {
  memberTableColumns,
  productTableColumns,
  stickyDeptMonthColumns,
  stickyMonthColumns,
} from '@uxkm/ui/data/table-demo';

export { memberTableColumns, productTableColumns, stickyDeptMonthColumns, stickyMonthColumns };

export const tablePropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const tableProps = [
  { name: 'bordered', type: 'boolean', default: 'false', description: '셀 테두리 (table_bordered)' },
  { name: 'striped', type: 'boolean', default: 'false', description: '줄무늬 행 (table_striped)' },
  { name: 'compact', type: 'boolean', default: 'false', description: '좁은 패딩 (table_compact)' },
  { name: 'hover', type: 'boolean', default: 'false', description: '행 호버 강조 (table_hover)' },
  { name: 'wrap', type: 'boolean', default: 'true', description: 'table_wrap 스크롤 래퍼 사용' },
  { name: 'scroll', type: 'boolean', default: 'false', description: 'sticky용 스크롤 컨테이너 (table_wrap-scroll)' },
  {
    name: 'scrollMaxHeight',
    type: 'string',
    default: '—',
    description: '--table-scroll-max-height (예: 14rem · none)',
  },
  { name: 'stickyTop', type: 'boolean', default: 'false', description: 'thead 상단 고정 (table_sticky-top)' },
  { name: 'stickyLeft', type: 'boolean', default: 'false', description: '좌측 열 고정 (table_sticky-left)' },
  {
    name: 'stickyCols',
    type: '1 | 2 | 3 | 4',
    default: '1',
    description: '좌측 고정 열 개수 (table_sticky-cols-n). stickyLeft와 함께 사용',
  },
  {
    name: 'stickyLeftOffsets',
    type: 'Record<number, string>',
    default: '{}',
    description: "n번째 고정 열 left 오프셋. { 2: '7rem' } → --table-sticky-left-2",
  },
  {
    name: 'columns',
    type: 'TableColumn[]',
    default: '[]',
    description: '열 너비·패딩. { width, minWidth, maxWidth, padding, nowrap } — colgroup·CSS 변수로 적용',
  },
  { name: 'className', type: 'string', default: '—', description: 'table_wrap(또는 table) 루트에 추가 클래스' },
];

export const tableSlotColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const tableSlots = [
  {
    name: 'children',
    description: 'thead · tbody · tfoot 등 테이블 마크업 (Vue default 슬롯 대응)',
  },
];

export const tableClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const tableClasses = [
  { name: 'table_wrap', description: '가로 스크롤 래퍼' },
  { name: 'table_wrap-scroll', description: 'sticky용 스크롤 컨테이너 (overflow · max-height)' },
  { name: 'table', description: '테이블 루트' },
  { name: 'table_columns', description: 'columns prop 사용 시 고정 레이아웃·열별 패딩' },
  { name: 'table_bordered · table_striped · table_compact · table_hover', description: '스타일 변형' },
  { name: 'table_sticky-top', description: 'thead 상단 고정' },
  { name: 'table_sticky-left', description: '좌측 열 고정 (table_sticky-cols-n과 함께 사용)' },
  {
    name: 'table_sticky-cols-1 … table_sticky-cols-4',
    description: '좌측 고정 열 개수. 2열 이상은 --table-sticky-left-n 필요',
  },
];

export const tableTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const tableTokens = [
  { name: '--table-cell-padding-y · --table-cell-padding-x', default: '0.65rem · 1rem', description: '셀 패딩' },
  {
    name: '--table-cell-padding-y-compact · --table-cell-padding-x-compact',
    default: '0.4rem · 0.75rem',
    description: 'compact 패딩',
  },
  {
    name: '--table-font-size · --table-header-font-weight',
    default: 'var(--text-size-sm) · 600',
    description: '본문·헤더 타이포',
  },
  { name: '--table-scroll-max-height', default: '16rem', description: 'table_wrap-scroll 최대 높이' },
  {
    name: '--table-sticky-left-n',
    default: '0 (1열)',
    description: 'n번째 고정 열의 left 오프셋 (이전 열 너비 합)',
  },
  { name: '--table-sticky-shadow', default: '2px 0 4px -2px …', description: '좌측 고정 끝 열 그림자' },
];
