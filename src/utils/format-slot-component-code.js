import { resolveRegistryForNode } from '@/composables/useDemoCode';
import { formatComponentCode } from '@/utils/format-component-code';
import { formatDemoHtml } from '@/utils/format-demo-html';
import { resolveRegisteredCode } from '@/utils/resolve-demo-code';

export function indentLines(text, level) {
  const pad = '  '.repeat(level);
  return text
    .split('\n')
    .map((line) => (line ? pad + line : line))
    .join('\n');
}

export function dedentBlock(text) {
  const lines = text.split('\n');
  const indents = lines
    .filter((line) => line.trim())
    .map((line) => line.match(/^(\s*)/)?.[1].length ?? 0);

  if (!indents.length) return '';

  const min = Math.min(...indents);
  return lines
    .map((line) => (line.trim() ? line.slice(min) : ''))
    .join('\n')
    .trimEnd();
}

function isMergeableComponentBody(code) {
  const trimmed = code.trim();
  const match = trimmed.match(/^<[^>]+>([\s\S]*)<\/[A-Za-z][\w-]*>\s*$/);
  if (!match) return false;

  const inner = match[1].replace(/<template\s+#[\w-]+>[\s\S]*?<\/template>/g, '').trim();
  return !inner;
}

function mergeComponentCodeWithChildren(registered, childLines) {
  const trimmed = dedentBlock(registered);
  const match = trimmed.match(/^<([^>]+)>([\s\S]*)<\/(\w+)>\s*$/);
  if (!match) return trimmed;

  const [, openAttrs, inner, closeName] = match;
  const children = childLines.map((child) => indentLines(child, 1)).join('\n');
  const body = inner.trimEnd();

  return [`<${openAttrs}>`, body, children, `</${closeName}>`].filter(Boolean).join('\n');
}

function shouldSkipDomNode(node) {
  return node.nodeType === Node.ELEMENT_NODE && node.classList?.contains('upload_input');
}

function collectRegisteredDescendants(node, registry) {
  const lines = [];

  function walk(element) {
    [...element.children].forEach((child) => {
      if (shouldSkipDomNode(child)) return;

      const childDemoId = child.dataset?.demoId;
      const resolvedRegistry = resolveRegistryForNode(child, registry);

      if (childDemoId && resolvedRegistry?.has(childDemoId)) {
        lines.push(serializeComponentNode(child, resolvedRegistry, 0));
        return;
      }

      walk(child);
    });
  }

  walk(node);
  return lines;
}

export function serializeComponentNode(node, registry, indent) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent.trim();
    return text ? indentLines(text, indent) : '';
  }

  if (node.nodeType !== Node.ELEMENT_NODE || shouldSkipDomNode(node)) {
    return '';
  }

  const demoId = node.dataset?.demoId;
  const resolvedRegistry = resolveRegistryForNode(node, registry);

  if (demoId && resolvedRegistry?.has(demoId)) {
    let code = dedentBlock(resolveRegisteredCode(resolvedRegistry.get(demoId)));
    const childLines = collectRegisteredDescendants(node, resolvedRegistry);

    if (childLines.length && isMergeableComponentBody(code)) {
      code = mergeComponentCodeWithChildren(code, childLines);
    }

    return indentLines(code, indent);
  }

  return indentLines(formatDemoHtml(node.outerHTML), indent);
}

export function serializeDomChildren(container, registry, indent) {
  if (!container) return '';

  return [...container.childNodes]
    .map((node) => {
      if (shouldSkipDomNode(node)) return '';
      return serializeComponentNode(node, registry, indent);
    })
    .filter(Boolean)
    .join('\n');
}

export function openComponentTag(name, props, attrs, config) {
  return formatComponentCode(name, props, {}, attrs, {
    ...config,
    selfClosing: true,
  }).replace(/\s*\/>$/, '');
}

export function appendNamedSlot(lines, slotName, content) {
  if (!content) return;
  lines.push(`  <template #${slotName}>`);
  lines.push(content);
  lines.push('  </template>');
}

/**
 * @param {string} name
 * @param {object} config
 * @param {Array<{ name: string, wrap?: 'template' | 'direct' }>} config.slots
 */
export function createSlotComponentFormatter(name, config = {}) {
  const {
    booleanProps = new Set(),
    defaults = {},
    falseExplicitProps = new Set(),
    skipProps = [],
    slots = [],
  } = config;

  return function formatSlotComponentCode(props, attrs = {}, el, registry) {
    const lines = [
      `${openComponentTag(name, props, attrs, {
        booleanProps,
        defaults,
        falseExplicitProps,
        skipProps,
      })}>`,
    ];

    slots.forEach(({ name: slotName, wrap = 'template' }) => {
      const host = el.querySelector(`[data-demo-slot="${slotName}"]`);
      if (!host) return;

      const content = serializeDomChildren(host, registry, wrap === 'template' ? 2 : 1);
      if (!content) return;

      if (wrap === 'template') {
        appendNamedSlot(lines, slotName, content);
      } else {
        lines.push(content);
      }
    });

    lines.push(`</${name}>`);
    return lines.join('\n');
  };
}
