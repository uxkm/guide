import { formatDemoHtml } from '@/utils/format-demo-html';
import { formatIconCodeFromDom } from '@/utils/format-icon-code';
import { resolveRegisteredCode } from '@/utils/resolve-demo-code';

const DEFAULTS = { size: 'md' };
const BOOLEAN_PROPS = new Set(['borderless', 'dark', 'sticky', 'responsive']);

function toKebab(key) {
  return key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function shouldSkipProp(key, value) {
  if (value === undefined || value === null || value === '') return true;
  if (value === false) return true;
  if (key in DEFAULTS && value === DEFAULTS[key]) return true;
  return false;
}

function formatNavbarProps(props, customAttrs = {}) {
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

function indentLines(text, level) {
  const pad = '  '.repeat(level);
  return text
    .split('\n')
    .map((line) => (line ? pad + line : line))
    .join('\n');
}

function serializeRegionChildren(container, registry, indent = 2) {
  if (!container) return '';

  const lines = [];

  [...container.children].forEach((child) => {
    const demoId = child.dataset?.demoId;

    if (demoId && registry?.has(demoId)) {
      lines.push(indentLines(resolveRegisteredCode(registry.get(demoId)), indent));
      return;
    }

    lines.push(indentLines(formatDemoHtml(child.outerHTML), indent));
  });

  return lines.join('\n');
}

function serializeNavbarItems(navEl, registry, indent = 2) {
  if (!navEl) return '';

  const listEl = navEl.querySelector('.navbar_list');

  if (!listEl) {
    return serializeRegionChildren(navEl, registry, indent);
  }

  const demoId = listEl.dataset?.demoId;

  if (demoId && registry?.has(demoId)) {
    return indentLines(resolveRegisteredCode(registry.get(demoId)), indent);
  }

  const itemLines = serializeRegionChildren(listEl, registry, indent + 1);
  if (!itemLines) return '';

  const pad = '  '.repeat(indent);

  return [`${pad}<ul class="navbar_list">`, itemLines, `${pad}</ul>`].join('\n');
}

function resolveBrandIconSvg(brandEl) {
  if (!brandEl) return null;

  const iconSvg = brandEl.querySelector('svg.icon, svg.navbar_brand-icon');
  if (iconSvg) return iconSvg;

  const registeredEl = brandEl.querySelector('[data-demo-id]');
  if (registeredEl?.tagName?.toLowerCase() === 'svg') return registeredEl;

  return registeredEl?.querySelector('svg') ?? null;
}

function serializeBrandIcon(brandEl, registry, indent = 2) {
  const svg = resolveBrandIconSvg(brandEl);
  if (!svg) return '';

  const demoId = svg.getAttribute('data-demo-id');

  if (demoId && registry?.has(demoId)) {
    return indentLines(resolveRegisteredCode(registry.get(demoId)), indent);
  }

  return indentLines(formatIconCodeFromDom(svg), indent);
}
function formatSlotBlock(name, content, indent = 1) {
  if (!content.trim()) return '';

  const pad = '  '.repeat(indent);

  return [`${pad}<template #${name}>`, content, `${pad}</template>`].join('\n');
}

export function formatNavbarCode(props, customAttrs = {}, rootEl, registry) {
  const attrStr = formatNavbarProps(props, customAttrs);
  const brandEl = rootEl?.querySelector('.navbar_brand');
  const navEl = rootEl?.querySelector('.navbar_nav');
  const searchEl = rootEl?.querySelector('.navbar_search');
  const actionsEl = rootEl?.querySelector('.navbar_actions');

  const slots = [];

  const brandIconContent = serializeBrandIcon(brandEl, registry, 2);
  if (brandIconContent) {
    slots.push(formatSlotBlock('brand-icon', brandIconContent));
  }

  const itemsContent = serializeNavbarItems(navEl, registry, 2);
  if (itemsContent) {
    slots.push(formatSlotBlock('items', itemsContent));
  }

  const searchContent = serializeRegionChildren(searchEl, registry, 2);
  if (searchContent) {
    slots.push(formatSlotBlock('search', searchContent));
  }

  const actionsContent = serializeRegionChildren(actionsEl, registry, 2);
  if (actionsContent) {
    slots.push(formatSlotBlock('actions', actionsContent));
  }

  if (!slots.length) {
    return `<Navbar${attrStr} />`;
  }

  return [`<Navbar${attrStr}>`, ...slots, '</Navbar>'].join('\n');
}
