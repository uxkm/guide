import { ripplePropContainer, rippleClassRows } from '@/doc/data/ripple-api';
export const sliderPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const sliderProps = [
  { name: 'value', type: 'number', default: '—', description: '제어 값 (Vue model-value 대응)' },
  { name: 'defaultValue', type: 'number', default: '50', description: '비제어 초기 값' },
  { name: 'min', type: 'number', default: '0', description: '최솟값' },
  { name: 'max', type: 'number', default: '100', description: '최댓값' },
  { name: 'step', type: 'number', default: '—', description: '증감 단위' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'slider_sm · slider_lg' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '비활성' },
  { name: 'vertical', type: 'boolean', default: 'false', description: '세로 슬라이더' },
  { name: 'label', type: 'string', default: '—', description: '상단 라벨' },
  { name: 'showValue', type: 'boolean', default: 'false', description: '현재 값 output 표시' },
  { name: 'valueSuffix', type: 'string', default: '—', description: '값 뒤 단위 (%, px 등)' },
  { name: 'hint', type: 'string', default: '—', description: '하단 힌트 텍스트' },
  { name: 'stepper', type: 'boolean', default: 'false', description: '± 스텝 버튼 (slider_stepper)' },
  { name: 'stepperAlways', type: 'boolean', default: 'false', description: '스텝 버튼 항상 표시' },
  { name: 'decreaseLabel', type: 'string', default: '값 줄이기', description: '감소 버튼 aria-label' },
  { name: 'increaseLabel', type: 'string', default: '값 늘리기', description: '증가 버튼 aria-label' },
  { name: 'className', type: 'string', default: '—', description: 'slider 루트에 추가 클래스' },
  { name: 'onChange', type: '(value: number) => void', default: '—', description: '값 변경 콜백' },
  ripplePropContainer,
];

export const sliderChildColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const sliderChildren = [
  { name: 'default', description: '추가 콘텐츠 (눈금 등)' },
];

/** @deprecated 가이드·Storybook은 sliderChildColumns · sliderChildren 사용 */
export const sliderSlotColumns = sliderChildColumns;

/** @deprecated */
export const sliderSlots = sliderChildren;

export const sliderClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const sliderClasses = [
  { name: 'slider', description: '슬라이더 루트' },
  { name: 'slider_sm · slider_lg · slider_vertical', description: '크기·방향' },
  { name: 'slider_stepper · slider_stepper_always', description: '스텝 버튼 모드' },
  { name: 'slider_header · slider_label · slider_value · slider_hint', description: '헤더·힌트' },
  { name: 'slider_input · slider_control · slider_step', description: 'range·스텝 버튼' },
  { name: 'slider_ticks · slider_tick', description: '눈금 (HTML 마크업)' },
  ...rippleClassRows,
];

export const sliderEventColumns = [
  { key: 'name', label: '이벤트' },
  { key: 'description', label: '설명' },
];

export const sliderEvents = [
  { name: 'onChange', description: '값 변경 시 호출 (number 인자, Vue update:modelValue 대응)' },
];

export const sliderTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const sliderTokens = [
  { name: '--slider-track-height · --slider-thumb-size', default: '4px · 14px', description: '트랙·썸 크기 (md)' },
  { name: '--slider-max-width', default: 'var(--input-max-width)', description: '최대 너비' },
  { name: '--slider-step-size', default: '2.25rem', description: '스텝 버튼 크기' },
];
