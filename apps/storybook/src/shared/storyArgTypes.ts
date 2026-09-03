/** Controls에서 textarea/object로 잘못 표시되거나 Playground에서 쓰지 않는 공통 prop */
export const hiddenArgTypes = {
  className: { control: false, table: { disable: true } },
  style: { control: false, table: { disable: true } },
  children: { control: false, table: { disable: true } },
  ref: { control: false, table: { disable: true } },
  key: { control: false, table: { disable: true } },
  id: { control: false, table: { disable: true } },
} as const;

/** 이벤트 핸들러 — Controls object 방지 */
export const handlerHiddenArgTypes = {
  onClick: { control: false, table: { disable: true } },
  onChange: { control: false, table: { disable: true } },
  onClose: { control: false, table: { disable: true } },
  onOpenChange: { control: false, table: { disable: true } },
  onSelect: { control: false, table: { disable: true } },
  onSwiper: { control: false, table: { disable: true } },
  onInput: { control: false, table: { disable: true } },
  onBlur: { control: false, table: { disable: true } },
  onFocus: { control: false, table: { disable: true } },
  onMouseEnter: { control: false, table: { disable: true } },
  onMouseLeave: { control: false, table: { disable: true } },
  onFocusCapture: { control: false, table: { disable: true } },
  onBlurCapture: { control: false, table: { disable: true } },
  onKeyDown: { control: false, table: { disable: true } },
  onAnimationEnd: { control: false, table: { disable: true } },
} as const;

/** React node · 배열 prop — Controls object 방지 */
export const nodeHiddenArgTypes = {
  icon: { control: false, table: { disable: true } },
  iconBefore: { control: false, table: { disable: true } },
  iconAfter: { control: false, table: { disable: true } },
  footer: { control: false, table: { disable: true } },
  header: { control: false, table: { disable: true } },
  extra: { control: false, table: { disable: true } },
  actions: { control: false, table: { disable: true } },
  items: { control: false, table: { disable: true } },
  triggerContent: { control: false, table: { disable: true } },
  triggerLabel: { control: false, table: { disable: true } },
  panel: { control: false, table: { disable: true } },
  search: { control: false, table: { disable: true } },
  brandContent: { control: false, table: { disable: true } },
  brandIcon: { control: false, table: { disable: true } },
  image: { control: false, table: { disable: true } },
  action: { control: false, table: { disable: true } },
  columns: { control: false, table: { disable: true } },
  weekdays: { control: false, table: { disable: true } },
  files: { control: false, table: { disable: true } },
  trigger: { control: false, table: { disable: true } },
  cards: { control: false, table: { disable: true } },
  stickyLeftOffsets: { control: false, table: { disable: true } },
} as const;

/** preview · meta 공통 기본 argTypes */
export const storybookBaseArgTypes = {
  ...hiddenArgTypes,
  ...handlerHiddenArgTypes,
  ...nodeHiddenArgTypes,
} as const;

/** Popover · Tooltip 공통 offset 프리셋 */
export const offsetArg = {
  control: 'select' as const,
  options: ['none', 'sm', 'md', 'lg'],
  type: 'string' as const,
};

/** Popover · Tooltip 방향별 offset */
export const offsetSideArg = {
  control: 'select' as const,
  options: ['none', 'sm', 'md', 'lg'],
  type: 'string' as const,
  description: '방향별 간격 (미설정 시 offset 또는 md)',
};

/** Popover · Tooltip 화살표 기준 */
export const arrowAnchorArg = {
  control: 'select' as const,
  options: ['content', 'target', 'mixed'],
  type: 'string' as const,
};

/** Popover · Tooltip 타깃 기준 화살표 정렬 */
export const arrowTargetAlignArg = {
  control: 'select' as const,
  options: ['left', 'center', 'right', 'top', 'bottom'],
  type: 'string' as const,
};

/** Popover · Tooltip 패널 정렬 */
export const panelAlignArg = {
  control: 'select' as const,
  options: ['start', 'center', 'end'],
  type: 'string' as const,
};

/** Drawer · Modal · Dropdown 등 overlay 초기 open */
export const defaultOpenArg = {
  control: 'boolean' as const,
  table: { disable: true },
  description: '비제어 초기 open (Playground는 open 사용)',
};

export const ariaLabelArg = { control: 'text' as const, type: 'string' as const };
export const closeLabelArg = { control: 'text' as const, type: 'string' as const };

/** JSX prop 타입 추론 실패 시 Controls text 입력 */
export const stringControlArg = {
  control: 'text' as const,
  type: 'string' as const,
};

/** JSX prop 타입 추론 실패 시 Controls number 입력 */
export const numberControlArg = {
  control: 'number' as const,
  type: 'number' as const,
};

/** rem · CSS 길이(number | string) — Controls는 number, 코드에서는 문자열도 가능 */
export const cssSizeControlArg = {
  control: { type: 'number' as const, min: 0, step: 0.5 },
  type: 'number' as const,
  table: { type: { summary: 'number | string' } },
};

/** JSX prop 타입 추론 실패 시 Controls boolean 토글 */
export const booleanControlArg = {
  control: 'boolean' as const,
  type: 'boolean' as const,
};

/** Dropdown · overlay 등 Playground Controls 허용 prop */
export const dropdownControlKeys = [
  'open',
  'disabled',
  'placement',
  'fit',
  'maxVisibleItems',
  'menuWidth',
  'menuMinWidth',
  'closeOnSelect',
  'triggerLabel',
] as const;

/** Dropdown Storybook Controls */
export const dropdownArgTypes = {
  ...hiddenArgTypes,
  open: booleanControlArg,
  disabled: booleanControlArg,
  placement: {
    control: 'select' as const,
    options: ['start', 'end', 'top'],
    type: 'string' as const,
  },
  fit: booleanControlArg,
  maxVisibleItems: {
    control: { type: 'number' as const, min: 1, max: 12, step: 1 },
    type: 'number' as const,
    table: { type: { summary: 'number' } },
    description: '스크롤 전 표시할 최대 항목 수 (3, 4 …)',
  },
  menuWidth: {
    control: 'number' as const,
    type: 'number' as const,
    description: '메뉴 너비 (rem). 0이면 미적용',
  },
  menuMinWidth: {
    control: 'number' as const,
    type: 'number' as const,
    description: '메뉴 최소 너비 (rem). 0이면 기본값(10rem)',
  },
  closeOnSelect: booleanControlArg,
  triggerLabel: {
    ...stringControlArg,
    description: '기본 트리거 버튼 텍스트 (triggerContent 미사용 시)',
  },
  defaultOpen: defaultOpenArg,
  onOpenChange: { table: { disable: true } },
  onSelect: { table: { disable: true } },
  triggerContent: { table: { disable: true } },
} as const;

/** Navbar responsive 접힘 패널 id */
export const collapseIdArg = {
  control: 'text' as const,
  type: { name: 'string', summary: 'string' },
  description: '반응형 접힘 패널 id (responsive일 때 aria-controls에 연결)',
  if: { arg: 'responsive', eq: true },
};

/** Popover · Tooltip Controls에서 숨길 prop */
export const floatingUiHiddenArgTypes = {
  triggerContent: { table: { disable: true } },
  footer: { table: { disable: true } },
  onOpenChange: { table: { disable: true } },
  defaultOpen: defaultOpenArg,
  closeLabel: { table: { disable: true } },
  ...hiddenArgTypes,
} as const;

/** Playground Controls 변경 시 remount·재열림에 쓸 visual prop 키 */
export const floatingUiVisualArgKeys = [
  'placement',
  'size',
  'trigger',
  'offset',
  'offsetTop',
  'offsetRight',
  'offsetBottom',
  'offsetLeft',
  'arrowAnchor',
  'panelAlign',
  'arrowTargetAlign',
  'noArrow',
  'closable',
  'disabled',
  'inverse',
  'panelLabel',
  'title',
  'content',
] as const;

export function floatingUiVisualKey(args: Record<string, unknown>) {
  return JSON.stringify(
    floatingUiVisualArgKeys.reduce<Record<string, unknown>>((acc, key) => {
      acc[key] = args[key];
      return acc;
    }, {}),
  );
}

/** Playground가 value로 제어할 때 defaultValue(number) textarea 방지 */
export const defaultValueNumberArg = {
  control: 'number' as const,
  table: { disable: true },
  description: '비제어 초기값 (Playground는 value 사용)',
};

/** Playground가 checked로 제어할 때 defaultChecked textarea 방지 */
export const defaultCheckedArg = {
  control: 'boolean' as const,
  table: { disable: true },
  description: '비제어 초기 checked (Playground는 checked 사용)',
};

/** Navbar 브랜드 이미지 — select + 직접 입력 */
export const NAVBAR_BRAND_IMAGE_CUSTOM = '__custom__';

export const navbarBrandImagePresets = [
  { value: '', label: '없음' },
  { value: '/images/brand/uxkm_logo_hand.svg', label: 'UXKM 손글씨' },
  { value: '/images/brand/uxkm_logo.svg', label: 'UXKM 로고' },
  { value: '/images/brand/uxkm_logo_group.svg', label: 'UXKM 그룹' },
  { value: '/images/brand/uxkm_logo_hand_gradient.svg', label: 'UXKM 손글씨 (gradient)' },
  { value: '/images/brand/uxkm_logo_animated.svg', label: 'UXKM 애니메이션' },
  { value: '/images/brand/uxkm_logo_apng.png', label: 'UXKM PNG' },
  { value: NAVBAR_BRAND_IMAGE_CUSTOM, label: '직접 입력' },
] as const;

export const navbarBrandImageSelectArg = {
  control: 'select' as const,
  options: navbarBrandImagePresets.map((preset) => preset.value),
  labels: Object.fromEntries(navbarBrandImagePresets.map((preset) => [preset.value, preset.label])),
};

export const navbarBrandModeArg = {
  control: 'select' as const,
  options: ['text', 'image', 'background'],
  labels: { text: '텍스트', image: '이미지 (img)', background: '배경 (CSS)' },
};

export function resolveNavbarBrandImage(preset?: string, custom?: string) {
  if (!preset || preset === NAVBAR_BRAND_IMAGE_CUSTOM) return custom?.trim() || '';
  return preset;
}

export type NavbarBrandStoryArgs = {
  brandMode?: 'text' | 'image' | 'background';
  brandImage?: string;
  brandImageCustom?: string;
  brand?: string;
  brandSrc?: string;
  brandBackground?: string;
  brandAlt?: string;
  ariaLabel?: string;
};

/** Storybook 전용 brandMode · brandImage → Navbar prop 변환 */
export function mapNavbarBrandArgs<T extends NavbarBrandStoryArgs>(args: T) {
  const {
    brandMode = 'text',
    brandImage = '',
    brandImageCustom = '',
    brandSrc: _brandSrc,
    brandBackground: _brandBackground,
    ...rest
  } = args;
  const imagePath = resolveNavbarBrandImage(brandImage, brandImageCustom);

  if (brandMode === 'image' && imagePath) {
    return { ...rest, brandSrc: imagePath, brandBackground: undefined };
  }
  if (brandMode === 'background' && imagePath) {
    return { ...rest, brandBackground: imagePath, brandSrc: undefined };
  }
  return { ...rest, brandSrc: undefined, brandBackground: undefined };
}
