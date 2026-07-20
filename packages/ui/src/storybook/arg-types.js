/** Storybook Controls — 공통 enum 프리셋 */

export const SIZE_SM_MD_LG = ['sm', 'md', 'lg'];
export const SIZE_SM_MD_LG_XL = ['sm', 'md', 'lg', 'xl'];
export const SIZE_XS_SM_MD_LG_XL = ['xs', 'sm', 'md', 'lg', 'xl'];

/** surface-soft color_* (avatar · badge · tag · icon · spin 등) */
export const COLOR_SURFACE = ['default', 'primary', 'success', 'warning', 'danger', 'info'];

/** 버튼·링크 등 */
export const COLOR_BUTTON = ['primary', 'default', 'success', 'warning', 'danger', 'muted'];

/** 상태 점·배지 */
export const COLOR_STATUS = ['success', 'warning', 'danger'];

export const PLACEMENT_POPOVER = [
  'top',
  'top-center',
  'bottom-center',
  'left',
  'right',
  'end',
];

export const PLACEMENT_TOOLTIP = [
  'top',
  'top-start',
  'top-end',
  'left',
  'right',
  'start',
  'end',
];

export const PLACEMENT_DROPDOWN = ['end', 'top'];

export const OFFSET_SIZES = ['none', 'sm', 'md', 'lg'];
export const PANEL_ALIGNS = ['start', 'center', 'end'];

export const SPACE_ALIGNS = ['start', 'center', 'end', 'baseline', 'stretch'];
export const SPACE_JUSTIFY = ['start', 'center', 'end', 'between'];

export const INPUT_TYPES = [
  'text',
  'email',
  'password',
  'number',
  'tel',
  'url',
  'search',
];

export const TYPO_VARIANTS = [
  'text',
  'paragraph',
  'lead',
  'caption',
  'label',
  'overline',
  'code',
  'kbd',
  'pre',
  'strong',
  'italic',
  'underline',
  'delete',
  'mark',
  'sub',
  'sup',
  'small',
  'link',
  'blockquote',
];

export const GRID_RATIOS = ['1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1'];

/** @param {string[]} options */
export function enumSummary(options) {
  return options.map((o) => `'${o}'`).join(' | ');
}

/** @param {string[]} options */
export function selectArgType(options, summary = enumSummary(options)) {
  return {
    control: 'select',
    options,
    type: { name: 'enum', summary },
  };
}

/** color_* 설명이 있는 string prop */
export function colorSurfaceArgType() {
  return selectArgType(COLOR_SURFACE);
}
