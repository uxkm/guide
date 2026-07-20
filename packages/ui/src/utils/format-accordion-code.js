const DEFAULTS = {
  variant: 'bordered',
  size: 'md',
};

const BOOLEAN_PROPS = new Set(['multiple', 'narrow']);

function toKebab(key) {
  return key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function shouldSkipProp(key, value) {
  if (value === undefined || value === null || value === '') return true;
  if (value === false) return true;
  if (key in DEFAULTS && value === DEFAULTS[key]) return true;
  return false;
}

function isItemOpen(item) {
  return item.isOpen?.value ?? item.open;
}

function formatAccordionProps(props, customAttrs = {}) {
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

  Object.entries(customAttrs).forEach(([key, value]) => {
    if (key === 'class' || key === 'style') return;
    if (value === undefined || value === null || value === '') return;
    if (typeof value === 'boolean' && value) {
      parts.push(key);
    }
  });

  return parts.length ? ` ${parts.join(' ')}` : '';
}

function formatAccordionItem(item) {
  const attrs = [];

  attrs.push(`label="${item.label}"`);
  if (isItemOpen(item)) attrs.push('open');
  if (item.disabled) attrs.push('disabled');

  const attrStr = attrs.join(' ');

  if (item.hasExtra && item.extraCode) {
    const lines = [
      `<AccordionItem ${attrStr}>`,
      '  <template #extra>',
      `    ${item.extraCode}`,
      '  </template>',
    ];
    if (item.content) lines.push(`  <p>${item.content}</p>`);
    lines.push('</AccordionItem>');
    return lines.join('\n');
  }

  if (item.content) {
    return `<AccordionItem ${attrStr} content="${item.content}" />`;
  }

  return `<AccordionItem ${attrStr} />`;
}

function indentItemLines(line) {
  return line
    .split('\n')
    .map((row) => (row ? `  ${row}` : row))
    .join('\n');
}

export function formatAccordionCode(props, items = [], customAttrs = {}) {
  const rootAttrs = formatAccordionProps(props, customAttrs);
  const itemLines = items.map((item) => indentItemLines(formatAccordionItem(item)));

  if (!itemLines.length) {
    return `<Accordion${rootAttrs} />`;
  }

  return [`<Accordion${rootAttrs}>`, ...itemLines, '</Accordion>'].join('\n');
}
