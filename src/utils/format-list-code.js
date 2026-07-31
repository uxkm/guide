function escapeAttribute(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function formatStyle(style) {
  if (!style || typeof style !== 'object' || Array.isArray(style)) return null;

  const entries = Object.entries(style)
    .filter(([, value]) => value != null && value !== '')
    .map(([key, value]) => {
      const formatted = typeof value === 'number' ? value : `'${String(value).replaceAll("'", "\\'")}'`;
      return `${key}: ${formatted}`;
    });

  return entries.length ? `style={{ ${entries.join(', ')} }}` : null;
}

function formatProps(props, attrs, { defaults = {}, booleanProps = new Set() } = {}) {
  const parts = [];

  Object.entries(props).forEach(([key, value]) => {
    if (value == null || value === '' || value === false) return;
    if (Object.hasOwn(defaults, key) && defaults[key] === value) return;

    if (booleanProps.has(key) && value === true) {
      parts.push(key);
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      parts.push(`${key}={${value}}`);
    } else {
      parts.push(`${key}="${escapeAttribute(value)}"`);
    }
  });

  Object.entries(attrs).forEach(([key, value]) => {
    if (value == null || value === '' || key === 'class') return;

    if (key === 'style') {
      const formattedStyle = formatStyle(value);
      if (formattedStyle) parts.push(formattedStyle);
    } else if (key.startsWith('on') && typeof value === 'function') {
      parts.push(`${key}={() => {}}`);
    } else if (typeof value === 'boolean') {
      if (value) parts.push(key);
    } else if (typeof value === 'number') {
      parts.push(`${key}={${value}}`);
    } else {
      parts.push(`${key}="${escapeAttribute(value)}"`);
    }
  });

  return parts.length ? ` ${parts.join(' ')}` : '';
}

export function formatListCode(props = {}, _slots = {}, attrs = {}) {
  const formattedProps = formatProps(props, attrs, {
    defaults: { size: 'md', variant: 'default', layout: 'block', descAlign: 'left' },
    booleanProps: new Set(['bordered', 'split', 'block']),
  });

  return `<List${formattedProps}>\n</List>`;
}

export function formatListItemCode(props = {}, slots = {}, attrs = {}) {
  const formattedProps = formatProps(props, attrs, {
    defaults: { tag: 'auto' },
  });
  const hasRenderableChildren = ['default', 'prefix', 'extra', 'actions']
    .some((name) => Boolean(slots[name]?.()));

  return hasRenderableChildren
    ? `<ListItem${formattedProps}>\n</ListItem>`
    : `<ListItem${formattedProps} />`;
}
