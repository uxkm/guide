const KEBAB_MAP = {
  ariaLabel: 'aria-label',
  ariaDisabled: 'aria-disabled',
  ariaHidden: 'aria-hidden',
  iconOnly: 'icon-only',
  selectText: 'select-text',
  noUnderline: 'no-underline',
  iconBefore: 'icon-before',
  allowHalf: 'allow-half',
  htmlFor: 'for',
};

function toKebab(key) {
  return KEBAB_MAP[key] || key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function formatProp(key, value, booleanProps, arrayPropPlaceholders = {}) {
  const attr = toKebab(key);

  if (booleanProps.has(key)) {
    return value ? attr : null;
  }

  if (Array.isArray(value)) {
    if (!value.length) return null;
    const placeholder = arrayPropPlaceholders[key] ?? '...';
    return `:${attr}="${placeholder}"`;
  }

  if (typeof value === 'boolean') {
    return value ? `:${attr}="true"` : null;
  }

  if (typeof value === 'number') {
    return `:${attr}="${value}"`;
  }

  return `${attr}="${value}"`;
}

function formatCustomAttrs(customAttrs = {}) {
  const parts = [];

  if (customAttrs.class) {
    parts.push(`class="${customAttrs.class}"`);
  }

  Object.entries(customAttrs).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;
    if (key === 'class' || key === 'style') return;
    if (key.startsWith('on') && typeof value === 'function') {
      parts.push(`@${key.slice(2).toLowerCase()}="..."`);
      return;
    }
    if (typeof value === 'boolean') {
      if (value) parts.push(key);
      return;
    }
    parts.push(`${key}="${value}"`);
  });

  return parts;
}

function normalizeSlotNodes(slotFn) {
  if (!slotFn) return [];

  const result = typeof slotFn === 'function' ? slotFn() : slotFn;
  if (result == null || result === false) return [];

  if (Array.isArray(result)) {
    return result.filter((node) => node != null && node !== false);
  }

  if (typeof result === 'string' || typeof result === 'number') {
    return [{ children: String(result) }];
  }

  return [result];
}

function getNodeText(node) {
  if (node == null) return '';

  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (typeof node.children === 'string' || typeof node.children === 'number') {
    return String(node.children);
  }

  if (Array.isArray(node.children)) {
    return node.children.map((child) => getNodeText(child)).join('');
  }

  if (node.props?.children != null) {
    return getNodeText(node.props.children);
  }

  return '';
}

function isComplexSlotNode(node) {
  if (node == null || node === false) return false;
  if (node.type === 'complex') return true;

  if (typeof node === 'string' || typeof node === 'number') return false;

  const nodeType = node.type;
  if (typeof nodeType === 'object' || typeof nodeType === 'function') return true;
  if (typeof nodeType === 'string') return true;

  if (Array.isArray(node.children)) {
    return node.children.some(
      (child) => typeof child !== 'string' && typeof child !== 'number' && child != null,
    );
  }

  if (node.props?.children != null) {
    const children = node.props.children;
    if (typeof children === 'string' || typeof children === 'number') return false;
    if (Array.isArray(children)) {
      return children.some(
        (child) => typeof child !== 'string' && typeof child !== 'number' && child != null,
      );
    }
    return true;
  }

  return false;
}

function formatSlotBlock(name, content) {
  if (!content) return '';

  const contentLines = content.split('\n').map((line) => (line ? `    ${line}` : ''));
  return [`  <template #${name}>`, ...contentLines, '  </template>'].join('\n');
}

export function extractDefaultSlotText(slots) {
  const nodes = normalizeSlotNodes(slots.default);
  if (!nodes.length) return '';

  return nodes.map((node) => getNodeText(node)).join('').trim();
}

export function hasComplexDefaultSlot(slots) {
  const nodes = normalizeSlotNodes(slots.default);
  if (!nodes.length) return false;

  return nodes.some((node) => isComplexSlotNode(node));
}

function hasNamedSlotContent(slots, slotName) {
  const slot = slots[slotName];
  if (!slot) return false;

  try {
    return normalizeSlotNodes(slot).length > 0;
  } catch {
    return true;
  }
}

/**
 * @param {string} name - PascalCase component name
 * @param {object} props
 * @param {object} slots
 * @param {object} customAttrs
 * @param {object} config
 */
export function formatComponentCode(name, props, slots = {}, customAttrs = {}, config = {}) {
  const {
    defaults = {},
    booleanProps = new Set(),
    falseExplicitProps = new Set(),
    skipProps = [],
    labelProp = 'label',
    slotContent = {},
    arrayPropPlaceholders = {},
    selfClosing = true,
  } = config;

  const skip = new Set([...skipProps, labelProp]);

  const attrParts = [
    ...Object.keys(props).reduce((acc, key) => {
      const value = props[key];
      if (skip.has(key)) return acc;
      if (value === undefined || value === null || value === '') return acc;
      if (value === false && falseExplicitProps.has(key)) {
        acc.push(`:${toKebab(key)}="false"`);
        return acc;
      }
      if (value === false) return acc;
      if (key in defaults && value === defaults[key]) return acc;

      const formatted = formatProp(key, value, booleanProps, arrayPropPlaceholders);
      if (formatted) acc.push(formatted);
      return acc;
    }, []),
    ...formatCustomAttrs(customAttrs),
  ];

  const hasComplexDefault = hasComplexDefaultSlot(slots);
  const defaultSlotText = hasComplexDefault ? '' : extractDefaultSlotText(slots);
  const hasDefaultContent = Boolean(defaultSlotText);

  if (props[labelProp] && !hasDefaultContent) {
    attrParts.push(`${labelProp}="${props[labelProp]}"`);
  }

  const attrStr = attrParts.length ? ` ${attrParts.join(' ')}` : '';
  const hasDefaultSlot = normalizeSlotNodes(slots.default).length > 0;
  const defaultPlaceholder = slotContent.default;
  const slotBlocks = Object.entries(slotContent)
    .filter(([slotName]) => slotName !== 'default' && hasNamedSlotContent(slots, slotName))
    .map(([slotName, content]) => formatSlotBlock(slotName, content))
    .filter(Boolean);

  const hasNamedSlots = slotBlocks.length > 0;
  const hasDefaultPlaceholder = defaultPlaceholder !== undefined && hasDefaultSlot;

  if (!hasDefaultContent && !hasNamedSlots && !hasDefaultPlaceholder && (selfClosing || props[labelProp])) {
    return `<${name}${attrStr} />`;
  }

  const lines = [`<${name}${attrStr}>`];
  slotBlocks.forEach((block) => lines.push(block));

  if (hasDefaultPlaceholder) {
    lines.push(`  ${defaultPlaceholder}`);
  } else if (hasDefaultContent) {
    lines.push(`  ${defaultSlotText}`);
  }

  lines.push(`</${name}>`);
  return lines.join('\n');
}

export function createComponentFormatter(name, config = {}) {
  return (props, slots = {}, customAttrs = {}) =>
    formatComponentCode(name, props, slots, customAttrs, config);
}
