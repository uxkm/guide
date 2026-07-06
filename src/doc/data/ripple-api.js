/** API 테이블용 ripple prop 행 — useRipple / data-ripple 과 동기화 */

/** 클릭 표면 — 기본 활성 */
export const ripplePropSurface = {
  name: 'ripple',
  type: 'boolean',
  default: 'true',
  description: '클릭 파장(ripple). true 시 data-ripple 활성 · false 비활성. 기본 활성',
};

/** opt-in 표면 — 미지정 시 비활성 */
export const ripplePropOptIn = {
  name: 'ripple',
  type: 'boolean',
  default: '—',
  description: '클릭 파장(ripple). true 시 data-ripple 활성 · false 비활성. 미지정 시 비활성',
};

/** 컨테이너 — 자식 인터랙티브 표면 */
export const ripplePropContainer = {
  name: 'ripple',
  type: 'boolean',
  default: 'true',
  description:
    '클릭 파장(ripple). true 시 자식 클릭 표면에 data-ripple · false 시 data-no-ripple으로 하위 전체 비활성',
};

/** Checkbox · Radio */
export const ripplePropChoice = {
  name: 'ripple',
  type: 'boolean',
  default: '—',
  description:
    '클릭 파장(ripple). standalone·button 변형 기본 활성 · div 변형은 true일 때만 · false 비활성',
};

/** Icon — button prop */
export const ripplePropIcon = {
  name: 'ripple',
  type: 'boolean',
  default: '—',
  description:
    '클릭 파장(ripple). button prop일 때만 적용 · true 활성 · false 비활성 · 미지정 시 button일 때 활성',
};

/** Select — custom 트리거 */
export const ripplePropSelect = {
  name: 'ripple',
  type: 'boolean',
  default: '—',
  description: '클릭 파장(ripple). custom 트리거일 때만 적용 · true 활성 · false 비활성',
};

/** Tag */
export const ripplePropTag = {
  name: 'ripple',
  type: 'boolean',
  default: '—',
  description:
    '클릭 파장(ripple). checkable · add · href 변형에서 true 시 활성 · tag_close는 별도 적용',
};

/** 닫기·트리거 버튼 */
export const ripplePropTrigger = {
  name: 'ripple',
  type: 'boolean',
  default: 'true',
  description: '클릭 파장(ripple). 닫기·트리거 버튼에 적용 · true 활성 · false 비활성',
};

/** HTML 마크업 — 클래스·속성 API */
export const rippleClassRow = {
  name: 'data-ripple',
  description: '클릭 파장 활성. data-ripple="surface"는 절대 위치 보조 버튼용',
};

export const rippleClassRows = [
  rippleClassRow,
  { name: 'data-ripple="false"', description: '해당 요소 ripple 비활성' },
  { name: 'data-no-ripple', description: '하위 전체 ripple 비활성' },
];
