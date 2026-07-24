/** Vue/HTML 스타일 속성명 → React DOM 속성명 */
const DOM_PROP_ALIASES = {
  acceptcharset: 'acceptCharset',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  contenteditable: 'contentEditable',
  crossorigin: 'crossOrigin',
  enctype: 'encType',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formmethod: 'formMethod',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  inputmode: 'inputMode',
  maxlength: 'maxLength',
  minlength: 'minLength',
  novalidate: 'noValidate',
  readonly: 'readOnly',
  tabindex: 'tabIndex',
  ariaAtomic: 'aria-atomic',
  ariaBusy: 'aria-busy',
  ariaChecked: 'aria-checked',
  ariaControls: 'aria-controls',
  ariaCurrent: 'aria-current',
  ariaDescribedby: 'aria-describedby',
  ariaDescribedBy: 'aria-describedby',
  ariaDisabled: 'aria-disabled',
  ariaExpanded: 'aria-expanded',
  ariaHaspopup: 'aria-haspopup',
  ariaHidden: 'aria-hidden',
  ariaInvalid: 'aria-invalid',
  ariaLabel: 'aria-label',
  ariaLabelledby: 'aria-labelledby',
  ariaLabelledBy: 'aria-labelledby',
  ariaLive: 'aria-live',
  ariaModal: 'aria-modal',
  ariaOrientation: 'aria-orientation',
  ariaPressed: 'aria-pressed',
  ariaRequired: 'aria-required',
  ariaSelected: 'aria-selected',
  ariaValuemax: 'aria-valuemax',
  ariaValuemin: 'aria-valuemin',
  ariaValuenow: 'aria-valuenow',
  ariaValuetext: 'aria-valuetext',
  dataModalTrigger: 'data-modal-trigger',
  dataDrawerTrigger: 'data-drawer-trigger',
  dataSliderPrefix: 'data-slider-prefix',
  dataSliderSuffix: 'data-slider-suffix',
  dataSliderFormat: 'data-slider-format',
  dataSliderValuetextMap: 'data-slider-valuetext-map',
  dataSliderValuetextTemplate: 'data-slider-valuetext-template',
  dataSliderValuetextSuffix: 'data-slider-valuetext-suffix',
};

export function normalizeDomProps(props = {}) {
  const normalized = {};

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined) continue;

    const alias = DOM_PROP_ALIASES[key];
    if (alias) {
      if (normalized[alias] === undefined) {
        normalized[alias] = value;
      }
      continue;
    }

    normalized[key] = value;
  }

  return normalized;
}
