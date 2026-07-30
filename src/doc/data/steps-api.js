import { ripplePropSurface, rippleClassRows } from '@/doc/data/ripple-api';
export const stepsPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const stepsProps = [
  { name: 'current', type: 'number', default: '—', description: '현재 단계 인덱스 (0-based, 선택)' },
  { name: 'direction', type: `'horizontal' | 'vertical'`, default: 'horizontal', description: 'steps_vertical' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'steps_sm · steps_lg' },
  { name: 'dot', type: 'boolean', default: 'false', description: 'steps_dot — 원형 마커' },
  { name: 'iconStyle', type: 'boolean', default: 'false', description: 'steps_icon-style' },
  { name: 'navigable', type: 'boolean', default: 'false', description: 'steps_navigable — 완료 단계 클릭' },
  { name: 'align', type: `'' | 'center'`, default: '—', description: 'steps_align-center' },
  { name: 'ariaLabel', type: 'string', default: '—', description: 'ol aria-label' },
  { name: 'children', type: 'ReactNode', default: '—', description: 'StepsItem 나열' },
  { name: 'className', type: 'string', default: '—', description: '루트 요소 추가 클래스' },
];

export const stepsItemPropColumns = stepsPropColumns;
export const stepsItemProps = [
  { name: 'title', type: 'string', default: '—', description: '단계 제목 (필수)' },
  { name: 'description', type: 'string', default: '—', description: '단계 설명' },
  { name: 'status', type: `'finished' | 'active' | 'wait' | 'error'`, default: 'wait', description: 'is-finished · is-active · is-wait · is-error' },
  { name: 'index', type: 'number', default: '—', description: '단계 번호 (자동 할당)' },
  { name: 'children', type: 'ReactNode', default: '—', description: '커스텀 항목 마크업 (navigable이 아닐 때)' },
  { name: 'className', type: 'string', default: '—', description: '루트 요소 추가 클래스' },
  ripplePropSurface,
];

export const stepsChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

export const stepsChildren = [
  { name: 'children', description: 'StepsItem 나열' },
];

export const stepsItemChildColumns = stepsChildColumns;
export const stepsItemChildren = [
  { name: 'children', description: '커스텀 항목 마크업 (navigable이 아닐 때)' },
];

export const stepsClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const stepsClasses = [
  { name: 'steps · steps_item · steps_head · steps_indicator', description: '루트·항목·헤드·인디케이터' },
  { name: 'steps_title · steps_desc · steps_tail', description: '제목·설명·연결선' },
  { name: 'steps_trigger', description: 'navigable 모드 클릭 버튼' },
  { name: 'steps_vertical · steps_dot · steps_icon-style · steps_navigable', description: '레이아웃·스타일' },
  { name: 'steps_sm · steps_lg · steps_align-center', description: '크기·정렬' },
  { name: 'is-finished · is-active · is-wait · is-error', description: '단계 상태' },
  { name: 'aria-current="step"', description: '현재 단계' },
  ...rippleClassRows,
];

export const stepsTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const stepsTokens = [
  { name: '--steps-indicator-size · --steps-gap', default: '—', description: '인디케이터·간격' },
  { name: '--steps-title-size · --steps-desc-size', default: '—', description: '타이포' },
  { name: '--steps-tail-color', default: '—', description: '연결선 색' },
  { name: '--steps-pulse-duration', default: '1.5s', description: 'is-active 인디케이터 파장 애니메이션' },
];
