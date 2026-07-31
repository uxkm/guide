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

function formatProps(
  props,
  attrs,
  { booleanProps = new Set(), falseExplicitProps = new Set() } = {},
) {
  const parts = [];

  Object.entries(props).forEach(([key, value]) => {
    if (value == null || value === '') return;
    if (value === false) {
      if (falseExplicitProps.has(key)) parts.push(`${key}={false}`);
      return;
    }

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

export function formatTreeCode(props = {}, _slots = {}, attrs = {}) {
  const formattedProps = formatProps(props, attrs, {
    booleanProps: new Set(['bordered', 'lines', 'compact', 'multiselectable']),
  });

  return `<Tree${formattedProps}>\n</Tree>`;
}

export function formatTreeNodeCode(props = {}, slots = {}, attrs = {}) {
  const formattedProps = formatProps(props, attrs, {
    booleanProps: new Set([
      'ripple',
      'expanded',
      'selected',
      'disabled',
      'expandable',
      'plusToggle',
      'link',
    ]),
    falseExplicitProps: new Set(['expanded']),
  });
  const hasRenderableChildren = ['default', 'prefix', 'icon', 'label', 'meta']
    .some((name) => Boolean(slots[name]?.()));

  return hasRenderableChildren
    ? `<TreeNode${formattedProps}>\n</TreeNode>`
    : `<TreeNode${formattedProps} />`;
}
