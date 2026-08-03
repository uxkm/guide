export const flexPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const flexProps = [
  { name: 'direction', type: `'row' | 'column'`, default: `'row'`, description: '기본 배치 방향' },
  { name: 'directionMd', type: `'row' | 'column'`, default: '—', description: 'md 이상 배치 방향' },
  { name: 'directionLg', type: `'row' | 'column'`, default: '—', description: 'lg 이상 배치 방향' },
  { name: 'wrap', type: 'boolean', default: 'false', description: '자식 줄바꿈 (flex_wrap)' },
  { name: 'cols', type: 'number | string', default: '—', description: '균등 항목 수 (flex_cols-*)' },
  { name: 'colsMd', type: 'number | string', default: '—', description: 'md 이상 균등 항목 수' },
  { name: 'colsLg', type: 'number | string', default: '—', description: 'lg 이상 균등 항목 수' },
  { name: 'ratio', type: `'1-1' | '2-1' | '1-2' | '3-1' | '1-1-1' | '1-2-1'`, default: '—', description: '2~3개 자식의 grow 비율' },
  { name: 'itemSpan', type: 'number | string', default: '—', description: '모든 자식의 12단위 너비' },
  { name: 'itemSpanMd', type: 'number | string', default: '—', description: 'md 이상 자식 일괄 너비' },
  { name: 'itemSpanLg', type: 'number | string', default: '—', description: 'lg 이상 자식 일괄 너비' },
  { name: 'gap', type: `'sm' | 'lg' | 'none'`, default: '—', description: '항목 간격. 생략 시 --flex-gap' },
  { name: 'align', type: `'start' | 'center' | 'end' | 'stretch' | 'baseline'`, default: `'stretch'`, description: '교차축 정렬' },
  { name: 'justify', type: `'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'`, default: '—', description: '주축 정렬' },
  { name: 'equal', type: 'boolean', default: 'false', description: '모든 자식에 동일 grow 적용' },
  { name: 'autoFit', type: 'boolean', default: 'false', description: '최소 너비 기준 자동 배치' },
];

export const flexSlotColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];
export const flexSlots = [{ name: 'children', description: 'Flex 자식 콘텐츠 (Vue default 슬롯 대응)' }];

export const flexItemPropColumns = flexPropColumns;
export const flexItemProps = [
  { name: 'as', type: 'string', default: `'div'`, description: '렌더링할 HTML 요소' },
  { name: 'span', type: 'number | string', default: '—', description: '12단위 개별 너비' },
  { name: 'spanMd', type: 'number | string', default: '—', description: 'md 이상 개별 너비' },
  { name: 'spanLg', type: 'number | string', default: '—', description: 'lg 이상 개별 너비' },
  { name: 'grow', type: 'boolean', default: 'false', description: '남는 공간 채우기' },
  { name: 'fit', type: 'boolean', default: 'false', description: '콘텐츠 너비 유지' },
  { name: 'align', type: `'auto' | 'start' | 'center' | 'end' | 'stretch' | 'baseline'`, default: '—', description: '항목의 교차축 정렬' },
  { name: 'order', type: '1–12', default: '—', description: '시각적 배치 순서' },
];
export const flexItemSlotColumns = flexSlotColumns;
export const flexItemSlots = [{ name: 'children', description: 'FlexItem 내부 콘텐츠' }];

export const flexClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];
export const flexClasses = [
  { name: 'flex · flex_row · flex_col', description: 'Flex 루트와 배치 방향' },
  { name: 'flex_row-md · flex_col-md · flex_row-lg · flex_col-lg', description: '반응형 배치 방향' },
  { name: 'flex_wrap', description: '항목 줄바꿈' },
  { name: 'flex_cols-* · flex_cols-md-* · flex_cols-lg-*', description: '균등 항목 수' },
  { name: 'flex_ratio-* · flex_equal · flex_auto-fit', description: '비율·균등·자동 배치' },
  { name: 'flex_items-span-* · flex_item-span-*', description: '일괄·개별 12단위 너비' },
  { name: 'flex_gap-sm · flex_gap-lg · flex_gap-none', description: '간격 변형' },
  { name: 'flex_align-* · flex_justify-* · flex_self-*', description: '부모·자식 정렬' },
  { name: 'flex_grow · flex_fit · flex_order-*', description: 'grow·고정 너비·순서' },
];

export const flexTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];
export const flexTokens = [
  { name: '--flex-gap', default: 'var(--space-md)', description: '기본 간격' },
  { name: '--flex-gap-sm · --flex-gap-lg', default: 'var(--space-sm) · var(--space-lg)', description: '간격 변형' },
  { name: '--flex-auto-min', default: '10rem', description: '자동 배치 항목의 최소 너비' },
];
