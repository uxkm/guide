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

function formatSlotBlock(name, content) {
  if (!content) return '';

  const contentLines = content.split('\n').map((line) => (line ? `    ${line}` : ''));
  return [`  <template #${name}>`, ...contentLines, '  </template>'].join('\n');
}

export function extractDefaultSlotText(slots) {
  const nodes = slots.default?.();
  if (!nodes?.length) return '';

  return nodes
    .map((node) => {
      if (typeof node.children === 'string' || typeof node.children === 'number') {
        return String(node.children);
      }

      if (Array.isArray(node.children)) {
        return node.children
          .map((child) => (typeof child === 'string' || typeof child === 'number' ? String(child) : ''))
          .join('');
      }

      return '';
    })
    .join('')
    .trim();
}

export function hasComplexDefaultSlot(slots) {
  const nodes = slots.default?.();
  if (!nodes?.length) return false;

  return nodes.some((node) => {
    if (typeof node.type === 'object' || typeof node.type === 'function') return true;

    // div · span 등 네이티브 HTML — 텍스트만 추출하면 마크업이 사라짐
    if (typeof node.type === 'string') return true;

    if (Array.isArray(node.children)) {
      return node.children.some((child) => typeof child !== 'string' && typeof child !== 'number');
    }

    return false;
  });
}

function hasNamedSlotContent(slots, slotName) {
  const slot = slots[slotName];
  if (!slot) return false;

  try {
    return Boolean(slot({})?.length);
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
  const hasDefaultSlot = Boolean(slots.default?.());
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
