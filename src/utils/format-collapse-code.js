const GROUP_DEFAULTS = {
  variant: 'bordered',
  size: 'md',
};

const GROUP_BOOLEAN_PROPS = new Set(['accordion', 'narrow']);

function toKebab(key) {
  return key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function shouldSkipGroupProp(key, value) {
  if (value === undefined || value === null || value === '') return true;
  if (value === false) return true;
  if (key in GROUP_DEFAULTS && value === GROUP_DEFAULTS[key]) return true;
  return false;
}

function isPanelOpen(panel) {
  return panel.isOpen?.value ?? panel.open;
}

function formatGroupProps(props, customAttrs = {}) {
  const parts = Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (shouldSkipGroupProp(key, value)) return acc;

    if (GROUP_BOOLEAN_PROPS.has(key)) {
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

function formatCollapsePanel(panel) {
  const attrs = [];

  attrs.push(`label="${panel.label}"`);
  if (isPanelOpen(panel)) attrs.push('open');
  if (panel.disabled) attrs.push('disabled');

  const attrStr = attrs.join(' ');

  if (panel.hasExtra && panel.extraCode) {
    const lines = [
      `<CollapsePanel ${attrStr}>`,
      '  <template #extra>',
      `    ${panel.extraCode}`,
      '  </template>',
    ];
    if (panel.content) lines.push(`  <p>${panel.content}</p>`);
    lines.push('</CollapsePanel>');
    return lines.join('\n');
  }

  if (panel.content) {
    return `<CollapsePanel ${attrStr} content="${panel.content}" />`;
  }

  return `<CollapsePanel ${attrStr} />`;
}

function indentPanelLines(line) {
  return line
    .split('\n')
    .map((row) => (row ? `  ${row}` : row))
    .join('\n');
}

export function formatCollapseGroupCode(props, panels = [], customAttrs = {}) {
  const rootAttrs = formatGroupProps(props, customAttrs);
  const panelLines = panels.map((panel) => indentPanelLines(formatCollapsePanel(panel)));

  if (!panelLines.length) {
    return `<CollapseGroup${rootAttrs} />`;
  }

  return [`<CollapseGroup${rootAttrs}>`, ...panelLines, '</CollapseGroup>'].join('\n');
}

export function formatCollapseExternalCode(props, customAttrs = {}, isOpenRef = null) {
  const parts = [`trigger-label="${props.triggerLabel}"`];

  if (props.narrow) parts.push('narrow');
  if (isOpenRef?.value ?? props.open) parts.push('open');
  if (props.boxed === false) parts.push(':boxed="false"');

  Object.entries(customAttrs).forEach(([key, value]) => {
    if (key === 'class' || key === 'style') return;
  });

  const attrStr = parts.join(' ');

  return [
    `<CollapseExternal ${attrStr}>`,
    '  <template #lead>',
    '    <p>…</p>',
    '  </template>',
    '  …',
    '</CollapseExternal>',
  ].join('\n');
}
