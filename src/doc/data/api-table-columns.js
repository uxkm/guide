/** ApiTable 열 정의 — width · minWidth · maxWidth · padding · nowrap 으로 셀 간격·너비 조절 */

const col = (key, label, sizing = {}) => ({ key, label, ...sizing });

const defaults = {
  name: { minWidth: '8.5rem', width: '11rem', nowrap: true },
  type: { width: '5.5rem', maxWidth: '9rem' },
  default: { width: '5rem', minWidth: '4rem' },
  description: { minWidth: '12rem' },
  command: { minWidth: '8rem', width: '10rem', nowrap: true },
  path: { minWidth: '8rem', width: '10rem', nowrap: true },
  pattern: { minWidth: '8rem', width: '10rem', nowrap: true },
  tool: { minWidth: '6rem', width: '8rem', nowrap: true },
  usage: { minWidth: '12rem' },
  role: { minWidth: '12rem' },
  note: { minWidth: '12rem' },
  version: { minWidth: '6rem', width: '7rem', nowrap: true },
};

/** 열 정의에 key별 기본 너비·간격 병합 (페이지 코드의 값이 우선) */
export function resolveApiColumns(columns) {
  return columns.map((column) => ({
    ...(defaults[column.key] ?? {}),
    ...column,
  }));
}

/** Props 4열 */
export const apiPropColumns = [
  col('name', 'Prop', defaults.name),
  col('type', '타입', defaults.type),
  col('default', '기본값', defaults.default),
  col('description', '설명', defaults.description),
];

/** 슬롯 2열 */
export const apiSlotColumns = [
  col('name', '슬롯', { minWidth: '7rem', width: '9rem', nowrap: true }),
  col('description', '설명', defaults.description),
];

/** 클래스 2열 */
export const apiClassColumns = [
  col('name', '클래스', { minWidth: '14rem', width: '32%' }),
  col('description', '설명', defaults.description),
];

/** 디자인 토큰 3열 */
export const apiTokenColumns = [
  col('name', '토큰', { minWidth: '14rem', width: '38%' }),
  col('default', '기본값', { width: '18%', minWidth: '6rem' }),
  col('description', '설명', defaults.description),
];
