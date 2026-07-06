const DEFAULTS = {
  variant: 'filled',
  color: 'primary',
  size: 'md',
  type: 'button',
  grow: false,
};

const BOOLEAN_PROPS = new Set([
  'round',
  'vertical',
  'iconOnly',
  'block',
  'fit',
  'disabled',
  'ariaDisabled',
  'loading',
  'open',
  'error',
  'placeholder',
  'selectText',
  'invalid',
]);

const KEBAB_PROPS = {
  ariaDisabled: 'aria-disabled',
  ariaLabel: 'aria-label',
  iconOnly: 'icon-only',
  selectText: 'select-text',
};

function toKebab(key) {
  return KEBAB_PROPS[key] || key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function getSlotIconBlock(slotSource, slotName) {
  const source = slotSource[slotName];
  const vnodes = Array.isArray(source) ? source : source?.();
  if (!vnodes?.length) return '';

  const name = vnodes[0]?.props?.name;
  if (!name) return '';

  const iconClass = vnodes[0]?.props?.class;
  const classAttr = iconClass ? ` class="${iconClass}"` : '';

  return [
    `  <template #${slotName}>`,
    `    <Icon name="${name}"${classAttr} />`,
    '  </template>',
  ].join('\n');
}

function shouldSkipProp(key, value, props) {
  if (key === 'expanded') return value === undefined || value === false || props.open;
  if (key === 'role') return value === undefined;
  if (key === 'href') return value === undefined;
  if (key === 'tabindex') return value === undefined;
  if (value === undefined || value === null || value === '') return true;
  if (value === false) return true;
  if (key in DEFAULTS && value === DEFAULTS[key]) return true;
  if (key === 'tag' && value === 'button') return true;
  if (key === 'color' && props.variant === 'ghost') return true;
  if (key === 'color' && props.variant === 'text' && value === 'primary') return true;
  if (key === 'label') return true;
  return false;
}

function formatProp(key, value) {
  const attr = toKebab(key);

  if (BOOLEAN_PROPS.has(key)) {
    return attr;
  }

  if (key === 'expanded') {
    return `:expanded="${value}"`;
  }

  if (key === 'grow' && value === '2') {
    return 'grow="2"';
  }

  if (key === 'grow' && value === true) {
    return 'grow';
  }

  return `${attr}="${value}"`;
}

function formatCustomAttrs(customAttrs = {}) {
  const parts = [];

  Object.entries(customAttrs).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;

    if (key === 'class') {
      if (typeof value === 'string') {
        parts.push(`class="${value}"`);
      }
      return;
    }

    if (key === 'style') return;

    if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.slice(2).toLowerCase();
      parts.push(`@${eventName}="..."`);
      return;
    }

    if (typeof value === 'boolean') {
      if (value) parts.push(key);
      return;
    }

    if (typeof value === 'number') {
      parts.push(`:${key}="${value}"`);
      return;
    }

    parts.push(`${key}="${value}"`);
  });

  return parts;
}

export function formatButtonCode(props, slots = {}, customAttrs = {}, slotVnodes = {}) {
  const slotSource = {
    'icon-before': slotVnodes['icon-before'] ?? slots['icon-before']?.(),
    'icon-after': slotVnodes['icon-after'] ?? slots['icon-after']?.(),
  };

  const attrParts = [
    ...Object.keys(props).reduce((acc, key) => {
      const value = props[key];
      if (shouldSkipProp(key, value, props)) return acc;
      acc.push(formatProp(key, value));
      return acc;
    }, []),
    ...formatCustomAttrs(customAttrs),
  ];

  if (props.label) {
    attrParts.push(`label="${props.label}"`);
  }

  const iconBefore = getSlotIconBlock(slotSource, 'icon-before');
  const iconAfter = getSlotIconBlock(slotSource, 'icon-after');
  const hasSlots = iconBefore || iconAfter;

  const attrStr = attrParts.length ? ` ${attrParts.join(' ')}` : '';

  if (!hasSlots) {
    return `<Button${attrStr} />`;
  }

  return [`<Button${attrStr}>`, iconBefore, iconAfter, '</Button>'].filter(Boolean).join('\n');
}
