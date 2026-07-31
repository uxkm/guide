import { resolveRegisteredCode } from '@/utils/resolve-demo-code';

const BOOLEAN_PROPS = [
  'bordered',
  'striped',
  'compact',
  'hover',
  'scroll',
  'stickyTop',
  'stickyLeft',
];

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
    .map((attr) => {
      const shouldKeepKebab = attr.name.startsWith('aria-') || attr.name.startsWith('data-');
      const name = shouldKeepKebab
        ? attr.name
        : attr.name === 'class'
          ? 'className'
          : attr.name === 'for'
            ? 'htmlFor'
            : attr.name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

      return `${name}="${attr.value}"`;
    })
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

function formatStickyLeftOffsetsAttr(offsets) {
  if (!offsets || typeof offsets !== 'object') return '';
  const entries = Object.entries(offsets).filter(([, value]) => value != null && value !== '');
  if (!entries.length) return '';
  const body = entries.map(([key, value]) => `${key}: '${value}'`).join(', ');
  return `stickyLeftOffsets={{ ${body} }}`;
}

function escapeAttribute(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function formatCustomAttrs(attrs) {
  const parts = [];

  Object.entries(attrs).forEach(([key, value]) => {
    if (value == null || value === '' || key === 'style' || key === 'class' || key === 'className') {
      return;
    }

    if (key.startsWith('on') && typeof value === 'function') {
      parts.push(`${key}={() => {}}`);
      return;
    }

    if (typeof value === 'boolean') {
      if (value) parts.push(key);
      return;
    }

    if (typeof value === 'number') {
      parts.push(`${key}={${value}}`);
      return;
    }

    parts.push(`${key}="${escapeAttribute(value)}"`);
  });

  return parts;
}

function formatTableAttrs(props, attrs) {
  const parts = [];

  BOOLEAN_PROPS.forEach((name) => {
    if (props[name]) parts.push(name);
  });

  if (props.wrap === false) parts.push('wrap={false}');
  if (props.scrollMaxHeight != null && props.scrollMaxHeight !== '') {
    parts.push(`scrollMaxHeight="${escapeAttribute(props.scrollMaxHeight)}"`);
  }
  if (props.stickyLeft && props.stickyCols != null && props.stickyCols !== 1) {
    parts.push(`stickyCols={${props.stickyCols}}`);
  }
  if (props.stickyLeft) {
    const offsets = formatStickyLeftOffsetsAttr(props.stickyLeftOffsets);
    if (offsets) parts.push(offsets);
  }
  if (Array.isArray(props.columns) && props.columns.length) {
    parts.push('columns={tableColumns}');
  }

  if (attrs.className || attrs.class) {
    parts.push(`className="${escapeAttribute(attrs.className ?? attrs.class)}"`);
  }
  parts.push(...formatCustomAttrs(attrs));

  return parts.length ? ` ${parts.join(' ')}` : '';
}

function formatEmptyTable(props, attrs) {
  return `<Table${formatTableAttrs(props, attrs)} />`;
}

function openTableTag(props, attrs) {
  return `<Table${formatTableAttrs(props, attrs)}`;
}

/** Table 데모 코드 — 슬롯(thead · tbody)은 마크업, 중첩 컴포넌트는 등록 코드 */
export function formatTableCode(props = {}, slots = {}, attrs = {}, rootEl, registry) {
  const table = resolveTableElement(rootEl);

  if (!table) {
    return formatEmptyTable(props, attrs);
  }

  const sectionLines = [...table.children]
    .filter((child) => SLOT_SECTION_TAGS.has(child.tagName.toLowerCase()))
    .map((child) => serializeSlotNode(child, registry, 1))
    .filter(Boolean);

  if (!sectionLines.length) {
    return formatEmptyTable(props, attrs);
  }

  return [openTableTag(props, attrs) + '>', ...sectionLines, '</Table>'].join('\n');
}
