import { resolveRegistryForNode } from '@/composables/useDemoCode';
import { formatComponentCode } from '@/utils/format-component-code';
import { formatDemoHtml } from '@/utils/format-demo-html';
import { resolveRegisteredCode } from '@/utils/resolve-demo-code';

const POPOVER_DEFAULTS = { size: 'md', offset: 'md', trigger: 'click', interactive: true, arrowAnchor: 'content', panelAlign: 'start', arrowTargetAlign: 'center' };
const POPOVER_BOOLEAN_PROPS = new Set(['open', 'noArrow', 'disabled', 'interactive', 'closable']);

const TOOLTIP_DEFAULTS = { size: 'md', offset: 'md', trigger: 'hover', interactive: true, arrowAnchor: 'content', panelAlign: 'center', arrowTargetAlign: 'center' };
const TOOLTIP_BOOLEAN_PROPS = new Set(['open', 'inverse', 'noArrow', 'disabled', 'interactive', 'closable']);

function indentLines(text, level) {
  const pad = '  '.repeat(level);
  return text
    .split('\n')
    .map((line) => (line ? pad + line : line))
    .join('\n');
}

function isDecorativeNode(node) {
  return (
    node.nodeType === Node.ELEMENT_NODE &&
    (node.classList.contains('popover_arrow') ||
      node.classList.contains('tooltip_arrow') ||
      node.classList.contains('popover_close') ||
      node.classList.contains('tooltip_close'))
  );
}

function isPassThroughWrapper(node) {
  if (node.nodeType !== Node.ELEMENT_NODE || node.dataset?.demoId) return false;

  const className = typeof node.className === 'string' ? node.className : '';
  return /\b(popover_trigger|tooltip_trigger)\b/.test(className) && !node.matches('button, a, .btn');
}

function serializeElementAttrs(node) {
  return [...node.attributes]
    .filter((attr) => attr.name !== 'data-demo-id' && !attr.name.startsWith('data-v-'))
    .map((attr) => `${attr.name}="${attr.value}"`)
    .join(' ');
}

function serializePassThroughWrapper(node, registry, indent) {
  const tag = node.tagName.toLowerCase();
  const attrs = serializeElementAttrs(node);
  const open = indentLines(`<${tag}${attrs ? ` ${attrs}` : ''}>`, indent);
  const inner = serializeDomChildren(node, registry, indent + 1);
  const close = indentLines(`</${tag}>`, indent);

  return [open, inner, close].filter(Boolean).join('\n');
}

function serializeDomNode(node, registry, indent) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent.trim();
    return text ? indentLines(text, indent) : '';
  }

  if (node.nodeType !== Node.ELEMENT_NODE || isDecorativeNode(node)) {
    return '';
  }

  if (isPassThroughWrapper(node)) {
    return serializePassThroughWrapper(node, registry, indent);
  }

  const demoId = node.dataset?.demoId;
  const resolvedRegistry = resolveRegistryForNode(node, registry);

  if (demoId && resolvedRegistry?.has(demoId)) {
    return indentLines(resolveRegisteredCode(resolvedRegistry.get(demoId)), indent);
  }

  return indentLines(formatDemoHtml(node.outerHTML), indent);
}

function serializeDomChildren(container, registry, indent) {
  if (!container) return '';

  return [...container.childNodes].map((node) => serializeDomNode(node, registry, indent)).filter(Boolean).join('\n');
}

function openComponentTag(name, props, attrs, config) {
  return formatComponentCode(name, props, {}, attrs, {
    ...config,
    selfClosing: true,
  }).replace(/\s*\/>$/, '');
}

function appendNamedSlot(lines, slotName, content, indent = 2) {
  if (!content) return;
  lines.push(`  <template #${slotName}>`);
  lines.push(content);
  lines.push('  </template>');
}

export function formatPopoverCode(props, attrs = {}, el, registry) {
  const lines = [
    `${openComponentTag('Popover', props, attrs, {
      defaults: POPOVER_DEFAULTS,
      booleanProps: POPOVER_BOOLEAN_PROPS,
    })}>`,
  ];

  const panel = el.querySelector('.popover_panel');
  const triggerEl = [...el.children].find((child) => !child.classList.contains('popover_panel'));

  if (triggerEl) {
    appendNamedSlot(lines, 'trigger', serializeDomNode(triggerEl, registry, 2));
  }

  const bodyContent = serializeDomChildren(panel?.querySelector('.popover_body'), registry, 2);
  if (bodyContent) {
    lines.push(bodyContent);
  }

  const footerContent = serializeDomChildren(panel?.querySelector('.popover_footer'), registry, 2);
  appendNamedSlot(lines, 'footer', footerContent);

  lines.push('</Popover>');
  return lines.join('\n');
}

export function formatTooltipCode(props, attrs = {}, el, registry) {
  const lines = [
    `${openComponentTag('Tooltip', props, attrs, {
      defaults: TOOLTIP_DEFAULTS,
      booleanProps: TOOLTIP_BOOLEAN_PROPS,
    })}>`,
  ];

  const triggerWrap = el.querySelector(':scope > .tooltip_trigger');
  const triggerContent = serializeDomChildren(triggerWrap, registry, 2);

  appendNamedSlot(lines, 'trigger', triggerContent);

  const bubble = el.querySelector('.tooltip_bubble');
  const hasContentProp = Boolean(props.content);
  const bubbleContent = serializeDomChildren(bubble, registry, 2);

  if (bubbleContent && !hasContentProp) {
    lines.push(bubbleContent);
  }

  lines.push('</Tooltip>');
  return lines.join('\n');
}
