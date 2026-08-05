import { ripplePropSurface, rippleClassRows } from '@/doc/data/ripple-api';
export const buttonPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const buttonProps = [
  {
    name: 'variant',
    type: `'filled' | 'outline' | 'ghost' | 'text' | 'select'`,
    default: 'filled',
    description: '버튼 스킨. select는 셀렉트 박스형 트리거',
  },
  {
    name: 'color',
    type: `'primary' | 'default' | 'success' | 'warning' | 'danger' | 'muted'`,
    default: 'primary',
    description: '색상 변형. filled는 default·primary·success·warning·danger, text는 primary·muted·success·warning·danger 지원',
  },
  {
    name: 'size',
    type: `'sm' | 'md' | 'lg'`,
    default: 'md',
    description: '버튼 크기',
  },
  {
    name: 'label',
    type: 'string',
    default: '—',
    description: '버튼 텍스트. default 슬롯으로 대체 가능',
  },
  {
    name: 'round',
    type: 'boolean',
    default: 'false',
    description: 'pill(캡슐) 형태 모서리',
  },
  {
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '아이콘 위 · 텍스트 아래 세로 배치',
  },
  {
    name: 'icon-only',
    type: 'boolean',
    default: 'false',
    description: '아이콘만 표시. aria-label 필수',
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    description: '루트 버튼을 부모 너비 100%로 확장',
  },
  {
    name: 'grow',
    type: `boolean | '2'`,
    default: 'false',
    description: 'flex 비율 분배. 2는 2배 너비',
  },
  {
    name: 'fit',
    type: 'boolean',
    default: 'false',
    description: '콘텐츠 너비 유지',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'button은 HTML disabled, a·div는 aria-disabled와 상호작용 차단 적용',
  },
  {
    name: 'aria-disabled',
    type: 'boolean',
    default: 'false',
    description: 'Tab 순서에서 제외하고 is-disabled·aria-disabled·상호작용 차단 적용',
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: '스피너와 aria-busy를 표시하고 중복 상호작용 차단',
  },
  {
    name: 'open',
    type: 'boolean',
    default: 'false',
    description: '셀렉트 트리거 열림 상태',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    description: '셀렉트 트리거 오류 상태',
  },
  {
    name: 'placeholder',
    type: 'boolean',
    default: 'false',
    description: '셀렉트 미선택 placeholder 스타일',
  },
  {
    name: 'select-text',
    type: 'boolean',
    default: 'false',
    description: '배경·테두리 없는 셀렉트 텍스트 형태',
  },
  {
    name: 'select-caret',
    type: 'boolean',
    default: 'false',
    description: 'select 이외의 스킨에도 드롭다운 캐럿 표시',
  },
  {
    name: 'type',
    type: `'button' | 'submit' | 'reset'`,
    default: 'button',
    description: 'button 요소 type 속성 (tag="button"일 때만)',
  },
  {
    name: 'tag',
    type: `'button' | 'a' | 'div'`,
    default: 'button',
    description: '루트 HTML 태그. div·href 없는 a는 role과 tabindex="0" 자동 적용',
  },
  {
    name: 'href',
    type: 'string',
    default: '—',
    description: 'tag="a"일 때 href. 있으면 네이티브 링크, 없으면 role과 tabindex 자동 적용',
  },
  {
    name: 'role',
    type: `'button' | 'link'`,
    default: '—',
    description: 'tag="a"이고 href가 없을 때 의미 지정. 필요한 tabindex는 자동 적용',
  },
  {
    name: 'tabindex',
    type: 'number',
    default: '—',
    description: 'Tab 순서 수동 지정. div·href 없는 a는 기본 0, 비활성 -1',
  },
  {
    name: 'aria-label',
    type: 'string',
    default: '—',
    description: '접근성 라벨 (icon-only 시 필수)',
  },
  {
    name: 'haspopup',
    type: `boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'`,
    default: '—',
    description: 'aria-haspopup (셀렉트·드롭다운 트리거)',
  },
  {
    name: 'expanded',
    type: 'boolean',
    default: '—',
    description: 'aria-expanded (셀렉트·팝오버 트리거)',
  },
  {
    name: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'aria-invalid (폼 오류)',
  },
  ripplePropSurface,
];

export const buttonSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const buttonSlots = [
  { name: 'default', description: '버튼 텍스트 (label prop 대체)' },
  { name: 'icon-before', description: '텍스트 앞 아이콘' },
  { name: 'icon-after', description: '텍스트 뒤 아이콘' },
];

export const buttonClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const buttonClasses = [
  { name: 'btn', description: '루트 구조 클래스' },
  { name: 'btn_filled', description: '배경 채움 스킨' },
  { name: 'btn_outline', description: '테두리 스킨' },
  { name: 'btn_ghost', description: '투명 배경 스킨' },
  { name: 'btn_text', description: '텍스트만 스킨' },
  { name: 'btn_select', description: '셀렉트 박스형 트리거' },
  { name: 'btn_select-text', description: '텍스트형 셀렉트 트리거' },
  { name: 'btn_sm · btn_lg', description: '크기 변형' },
  { name: 'btn_round', description: 'pill(캡슐) 모서리' },
  { name: 'btn_vertical', description: '아이콘 위 · 텍스트 아래' },
  { name: 'btn_icon-only', description: '아이콘만' },
  { name: 'btn_block · btn_grow · btn_fit', description: '너비 레이아웃' },
  { name: 'icon · btn_label · btn_spinner', description: '내부 파트' },
  { name: 'btn_row · btn_group · btn_stack', description: '버튼 묶음 컨테이너' },
  { name: 'is-disabled · is-loading · is-open · is-error', description: '상태 클래스' },
  { name: 'color_primary · color_danger …', description: '색상 유틸 (스킨과 조합)' },
  ...rippleClassRows,
];


export const buttonTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const buttonTokens = [
  { name: '--btn-padding-y · --btn-padding-x · --btn-font-size', default: '0.5rem · 1rem · var(--text-size-base)', description: '기본(md) 패딩·타이포' },
  { name: '--btn-padding-y-sm · --btn-padding-x-sm · --btn-font-size-sm', default: '0.3rem · 0.75rem · var(--text-size-sm)', description: 'sm 크기' },
  { name: '--btn-padding-y-lg · --btn-padding-x-lg · --btn-font-size-lg', default: '0.65rem · 1.25rem · var(--text-size-lg)', description: 'lg 크기' },
  { name: '--btn-font-weight · --btn-font-weight-normal · --btn-line-height', default: '600 · 400 · 1.4', description: '타이포 두께·줄높이' },
  { name: '--btn-border-width · --btn-gap', default: '1px · var(--space-sm)', description: '테두리·내부 간격' },
  { name: '--btn-icon-size · --btn-icon-size-md · --btn-icon-size-lg · --btn-icon-size-xl', default: '1em · 1.125em · 1.25em · 1.375em', description: '아이콘 크기' },
  { name: '--btn-icon-only-padding · --btn-icon-only-padding-sm · --btn-icon-only-padding-lg', default: '0.5rem · 0.35rem · 0.65rem', description: '아이콘만 버튼 패딩' },
  { name: '--btn-vertical-min-width · --btn-vertical-min-width-sm · --btn-vertical-min-width-lg', default: '4.5rem · 3.75rem · 5.25rem', description: '세로 배치 최소 너비' },
  { name: '--btn-vertical-padding-y · --btn-vertical-padding-x', default: '0.65rem · 0.75rem', description: '세로 배치 패딩(md)' },
  { name: '--btn-vertical-padding-y-sm · --btn-vertical-padding-x-sm', default: '0.5rem · 0.6rem', description: '세로 배치 패딩(sm)' },
  { name: '--btn-vertical-padding-y-lg · --btn-vertical-padding-x-lg', default: '0.85rem · 0.9rem', description: '세로 배치 패딩(lg)' },
  { name: '--btn-vertical-label-size · --btn-vertical-label-size-sm · --btn-vertical-label-size-lg', default: 'var(--text-size-sm) · var(--text-size-xs) · var(--text-size-base)', description: '세로 배치 라벨 크기' },
  { name: '--btn-vertical-label-weight · --btn-vertical-label-line-height', default: '500 · 1.25', description: '세로 배치 라벨 두께·줄높이' },
  { name: '--btn-select-min-width · --btn-select-max-width', default: '10rem · 320px', description: '셀렉트 트리거 너비' },
  { name: '--btn-select-padding-right · --btn-select-padding-right-sm · --btn-select-padding-right-lg', default: '0.65rem · 0.5rem · 0.85rem', description: '셀렉트 캐럿 여백' },
  { name: '--btn-select-text-padding-x · --btn-select-text-padding-right', default: '0.5rem · 0.35rem', description: '텍스트형 셀렉트 패딩' },
  { name: '--btn-select-text-padding-x-sm · --btn-select-text-padding-right-sm', default: '0.35rem · 0.25rem', description: '텍스트형 셀렉트 패딩(sm)' },
  { name: '--btn-select-text-padding-x-lg · --btn-select-text-padding-right-lg', default: '0.65rem · 0.45rem', description: '텍스트형 셀렉트 패딩(lg)' },
  { name: '--btn-spinner-size · --btn-spinner-border · --btn-spinner-duration', default: '1em · 2px · 0.6s', description: '로딩 스피너' },
  { name: '--btn-stack-text-size · --btn-stack-text-line-height', default: 'var(--text-size-sm) · 1.5', description: '스택 하단 안내 텍스트' },
  { name: '--btn-group-overlap', default: '-1px', description: '그룹 버튼 테두리 겹침' },
];
