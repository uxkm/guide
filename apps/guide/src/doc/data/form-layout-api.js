export const formLayoutPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const formLayoutProps = [
  { name: 'layout', type: `'vertical' | 'horizontal' | 'inline'`, default: 'vertical', description: 'form_vertical · form_horizontal · form_inline' },
  { name: 'fit', type: 'boolean', default: 'false', description: '콘텐츠 너비에 맞춤 (form_fit)' },
  { name: 'compact', type: 'boolean', default: 'false', description: '좁은 필드 간격 (form_compact)' },
  { name: 'label-align-start', type: 'boolean', default: 'false', description: '라벨 상단 정렬 (form_label-align-start)' },
  { name: 'label-width', type: `'sm' | 'lg'`, default: '—', description: '가로 레이아웃 라벨 너비' },
  { name: 'tag', type: 'string', default: 'form', description: '루트 HTML 태그' },
];

export const formLayoutSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const formLayoutSlots = [
  { name: 'default', description: 'form_field · form_actions 등 폼 콘텐츠' },
];

export const formLayoutClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const formLayoutClasses = [
  { name: 'form', description: '폼 루트' },
  { name: 'form_vertical · form_horizontal · form_inline', description: '레이아웃 방향' },
  { name: 'form_fit · form_compact · form_label-align-start', description: '간격·정렬' },
  { name: 'form_label-width-sm · form_label-width-lg', description: '라벨 너비' },
  { name: 'form_field · form_field-label · form_field-hint · form_field-error', description: '필드 블록' },
  { name: 'form_actions', description: '제출·취소 버튼 묶음' },
  { name: 'form_required', description: '필수 표시 마크' },
];

export const formLayoutTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const formLayoutTokens = [
  { name: '--form-label-width · --form-label-width-sm · --form-label-width-lg', default: '7.5rem · 5rem · 10rem', description: '가로 레이아웃 라벨 너비' },
  { name: '--form-field-gap', default: 'var(--space-lg)', description: '필드 간격' },
  { name: '--form-inline-field-min-width', default: '8rem', description: '인라인 필드 최소 너비' },
  { name: '--form-actions-gap', default: 'var(--space-sm)', description: '액션 버튼 간격' },
];
