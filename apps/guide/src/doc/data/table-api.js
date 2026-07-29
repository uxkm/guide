import { memberTableColumns, productTableColumns } from '@uxkm/ui/data/table-demo';

export { memberTableColumns, productTableColumns };

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
  { name: 'table', description: '테이블 루트' },
  { name: 'table_columns', description: 'columns prop 사용 시 고정 레이아웃·열별 패딩' },
  { name: 'table_bordered · table_striped · table_compact · table_hover', description: '스타일 변형' },
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
];
