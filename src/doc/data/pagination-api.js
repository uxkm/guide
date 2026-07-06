import { ripplePropContainer, rippleClassRows } from '@/doc/data/ripple-api';
export const paginationPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const paginationProps = [
  { name: 'current', type: 'number', default: '1', description: '현재 페이지 (v-model:current)' },
  { name: 'total', type: 'number', default: '1', description: '전체 항목 수' },
  { name: 'page-size', type: 'number', default: '10', description: '페이지당 항목 수' },
  { name: 'simple', type: 'boolean', default: 'false', description: 'pagination_simple — 이전·다음+현재/전체' },
  { name: 'minimal', type: 'boolean', default: 'false', description: 'pagination_minimal — 테두리 없음' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'pagination_sm · pagination_lg' },
  { name: 'round', type: 'boolean', default: 'false', description: 'pagination_round — pill 버튼' },
  { name: 'aria-label', type: 'string', default: '페이지 이동', description: 'nav aria-label' },
  ripplePropContainer,
];

export const paginationEventColumns = [
  { key: 'name', label: '이벤트' },
  { key: 'payload', label: '페이로드' },
  { key: 'description', label: '설명' },
];

export const paginationEvents = [
  { name: 'update:current', payload: 'number', description: 'v-model:current — 페이지 변경' },
  { name: 'change', payload: 'number', description: '페이지 변경 시' },
];

export const paginationClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const paginationClasses = [
  { name: 'pagination · pagination_list · pagination_item', description: '루트·목록·항목' },
  { name: 'pagination_link · pagination_prev · pagination_next', description: '페이지·이전·다음 버튼' },
  { name: 'pagination_ellipsis', description: '생략 표시' },
  { name: 'pagination_simple · pagination_minimal · pagination_round', description: '스타일 변형' },
  { name: 'pagination_sm · pagination_lg', description: '크기' },
  { name: 'pagination_align-center · pagination_align-end', description: '정렬' },
  { name: 'pagination_wrap · pagination_total · pagination_jumper', description: '툴바 조합' },
  { name: 'is-active · is-disabled', description: '현재·비활성 페이지' },
  { name: 'aria-current="page"', description: '현재 페이지 표시' },
  ...rippleClassRows,
];

export const paginationTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const paginationTokens = [
  { name: '--pagination-gap · --pagination-item-size', default: '—', description: '간격·버튼 크기' },
  { name: '--pagination-font-size', default: '—', description: '글자 크기' },
];
