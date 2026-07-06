export const PANEL_ALIGNS = ['start', 'center', 'end'];

export const panelAlignProp = {
  type: String,
  default: 'start',
  validator: (value) => PANEL_ALIGNS.includes(value),
};

/** @returns {string[]} */
export function panelAlignClasses(prefix, panelAlign, defaultAlign = 'start') {
  if (panelAlign === defaultAlign) return [];
  return [`${prefix}_panel-align-${panelAlign}`];
}
