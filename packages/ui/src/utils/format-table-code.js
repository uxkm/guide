import { formatComponentCode } from '@/utils/format-component-code';
import { resolveRegisteredCode } from '@/utils/resolve-demo-code';

const TABLE_FORMAT_CONFIG = {
  defaults: { wrap: true },
  booleanProps: new Set(['bordered', 'striped', 'compact', 'hover', 'wrap']),
  arrayPropPlaceholders: { columns: 'tableColumns' },
};

const SLOT_SECTION_TAGS = new Set(['thead', 'tbody', 'tfoot', 'caption']);

const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

function indentLines(text, level) {
  const pad = '  '.repeat(level);
  return text
    .split('\n')
    .map((line) => (line ? pad + line : line))
    .join('\n');
}

function serializeElementAttrs(node) {
  return [...node.attributes]
    .filter((attr) => attr.name !== 'data-demo-id' && !attr.name.startsWith('data-v-'))
    .map((attr) => `${attr.name}="${attr.value}"`)
    .join(' ');
}

function serializeSlotNode(node, registry, indent) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent.trim();
    return text ? indentLines(text, indent) : '';
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return '';
  }

  const tag = node.tagName.toLowerCase();

  if (tag === 'colgroup' || tag === 'col') {
    return '';
  }

  const demoId = node.dataset?.demoId;

  if (demoId && registry?.has(demoId)) {
    return indentLines(resolveRegisteredCode(registry.get(demoId)), indent);
  }

  const attrs = serializeElementAttrs(node);
  const attrStr = attrs ? ` ${attrs}` : '';

  if (VOID_TAGS.has(tag)) {
    return indentLines(`<${tag}${attrStr}>`, indent);
  }

  const childLines = [...node.childNodes]
    .map((child) => serializeSlotNode(child, registry, indent + 1))
    .filter(Boolean);

  const open = indentLines(`<${tag}${attrStr}>`, indent);
  const close = indentLines(`</${tag}>`, indent);

  if (!childLines.length) {
    return open + close;
  }

  return [open, ...childLines, close].join('\n');
}

function resolveTableElement(rootEl) {
  if (!rootEl) return null;
  if (rootEl.tagName === 'TABLE') return rootEl;
  return rootEl.querySelector('table');
}

function openTableTag(props, slots, attrs) {
  return formatComponentCode('Table', props, slots, attrs, {
    ...TABLE_FORMAT_CONFIG,
    selfClosing: true,
  }).replace(/\s*\/>$/, '');
}

/** Table 데모 코드 — 슬롯(thead · tbody)은 마크업, 중첩 컴포넌트는 등록 코드 */
export function formatTableCode(props, slots, attrs, rootEl, registry) {
  const table = resolveTableElement(rootEl);

  if (!table) {
    return formatComponentCode('Table', props, slots, attrs, {
      ...TABLE_FORMAT_CONFIG,
      selfClosing: true,
    });
  }

  const sectionLines = [...table.children]
    .filter((child) => SLOT_SECTION_TAGS.has(child.tagName.toLowerCase()))
    .map((child) => serializeSlotNode(child, registry, 1))
    .filter(Boolean);

  if (!sectionLines.length) {
    return formatComponentCode('Table', props, slots, attrs, {
      ...TABLE_FORMAT_CONFIG,
      selfClosing: true,
    });
  }

  return [openTableTag(props, slots, attrs) + '>', ...sectionLines, '</Table>'].join('\n');
}
