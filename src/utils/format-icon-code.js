const DEFAULTS = { size: 'md' };
const BOOLEAN_PROPS = new Set(['inline', 'spin', 'button', 'circle', 'square', 'pulse']);
const ICON_INTERNAL_CLASSES = /^icon(?:_|$)|^color_/;

function toKebab(key) {
  return key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function shouldSkipProp(key, value) {
  if (value === undefined || value === null || value === '') return true;
  if (value === false) return true;
  if (key in DEFAULTS && value === DEFAULTS[key]) return true;
  return false;
}

function formatIconProps(props, customAttrs = {}) {
  const parts = Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (shouldSkipProp(key, value)) return acc;

    if (BOOLEAN_PROPS.has(key)) {
      acc.push(toKebab(key));
      return acc;
    }

    acc.push(`${toKebab(key)}="${value}"`);
    return acc;
  }, []);

  if (customAttrs.class) {
    parts.push(`class="${customAttrs.class}"`);
  }

  return parts.length ? ` ${parts.join(' ')}` : '';
}

function resolveSvgRoot(rootEl) {
  if (!rootEl) return null;
  return rootEl.tagName?.toLowerCase() === 'svg' ? rootEl : rootEl.querySelector('svg');
}

function formatShapeElement(el) {
  const tag = el.tagName.toLowerCase();
  const attrs = [...el.attributes]
    .filter((attr) => !attr.name.startsWith('data-'))
    .map((attr) => `${attr.name}="${attr.value}"`)
    .join(' ');

  return `  <${tag}${attrs ? ` ${attrs}` : ''}/>`;
}

function formatIconSlotContent(rootEl) {
  const svg = resolveSvgRoot(rootEl);
  if (!svg) return '';

  return [...svg.children]
    .map((child) => formatShapeElement(child))
    .filter(Boolean)
    .join('\n');
}

function readColorProp(el) {
  const colorClass = [...el.classList].find((name) => name.startsWith('color_'));
  return colorClass ? colorClass.slice('color_'.length) : undefined;
}

export function isIconDomNode(node) {
  if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;

  const tag = node.tagName.toLowerCase();

  if (tag === 'svg' && node.classList.contains('icon')) return true;
  if (tag === 'button' && node.classList.contains('icon_button')) return true;
  if (tag === 'span' && node.classList.contains('icon_circle')) return true;
  if (tag === 'span' && node.classList.contains('icon_square')) return true;

  return false;
}

export function getIconPropsFromDom(rootEl) {
  const svg = resolveSvgRoot(rootEl);
  if (!svg) return {};

  const props = {};
  const tag = rootEl.tagName.toLowerCase();

  if (tag === 'button' && rootEl.classList.contains('icon_button')) {
    props.button = true;

    const ariaLabel = rootEl.getAttribute('aria-label');
    if (ariaLabel) props.ariaLabel = ariaLabel;

    const color = readColorProp(rootEl);
    if (color) props.color = color;
  } else if (tag === 'span' && rootEl.classList.contains('icon_circle')) {
    props.circle = true;

    if (rootEl.classList.contains('icon_circle-lg')) props.size = 'lg';
    else if (rootEl.classList.contains('icon_circle-sm')) props.size = 'sm';

    if (rootEl.classList.contains('icon_pulse')) props.pulse = true;

    const color = readColorProp(rootEl);
    if (color) props.color = color;
  } else if (tag === 'span' && rootEl.classList.contains('icon_square')) {
    props.square = true;

    const color = readColorProp(rootEl);
    if (color) props.color = color;
  } else {
    if (svg.classList.contains('icon_sm')) props.size = 'sm';
    else if (svg.classList.contains('icon_lg')) props.size = 'lg';
    else if (svg.classList.contains('icon_xl')) props.size = 'xl';

    const color = readColorProp(svg);
    if (color) props.color = color;

    if (svg.classList.contains('icon_spin')) props.spin = true;
  }

  if (svg.classList.contains('icon_inline')) props.inline = true;

  return props;
}

export function getIconAttrsFromDom(rootEl) {
  const tag = rootEl.tagName.toLowerCase();
  const classHost = tag === 'svg' ? rootEl : rootEl;
  const demoClasses = [...classHost.classList].filter((name) => !ICON_INTERNAL_CLASSES.test(name));

  return demoClasses.length ? { class: demoClasses.join(' ') } : {};
}

export function formatIconCode(props, customAttrs = {}, rootEl) {
  const attrStr = formatIconProps(props, customAttrs);
  const slotContent = formatIconSlotContent(rootEl);

  if (!slotContent) {
    return `<Icon${attrStr} />`;
  }

  return [`<Icon${attrStr}>`, slotContent, `</Icon>`].join('\n');
}

export function formatIconCodeFromDom(rootEl) {
  if (!isIconDomNode(rootEl)) return '';

  return formatIconCode(getIconPropsFromDom(rootEl), getIconAttrsFromDom(rootEl), rootEl);
}
