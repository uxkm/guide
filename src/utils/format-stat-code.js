function escapeAttribute(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function formatStyle(style) {
  if (!style || typeof style !== 'object' || Array.isArray(style)) return null;

  const entries = Object.entries(style)
    .filter(([, value]) => value != null && value !== '')
    .map(([key, value]) => {
      const formatted = typeof value === 'number'
        ? value
        : `'${String(value).replaceAll("'", "\\'")}'`;
      return `${key}: ${formatted}`;
    });

  return entries.length ? `style={{ ${entries.join(', ')} }}` : null;
}

function formatProps(props, attrs) {
  const parts = [];
  const booleanProps = new Set(['card', 'shadow']);

  Object.entries(props).forEach(([key, value]) => {
    if (value == null || value === '' || value === false) return;
    if (key === 'size' && value === 'md') return;

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

export function formatStatCode(props = {}, slots = {}, attrs = {}) {
  const formattedProps = formatProps(props, attrs);
  const hasRenderableChildren = ['default', 'value', 'trend-icon']
    .some((name) => Boolean(slots[name]?.()));

  return hasRenderableChildren
    ? `<Stat${formattedProps}>\n</Stat>`
    : `<Stat${formattedProps} />`;
}
