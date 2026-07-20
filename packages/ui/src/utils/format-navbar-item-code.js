import { resolveRegisteredCode } from '@/utils/resolve-demo-code';

function indentLines(text, level) {
  const pad = '  '.repeat(level);
  return text
    .split('\n')
    .map((line) => (line ? pad + line : line))
    .join('\n');
}

function findRegisteredDescendant(rootEl, registry) {
  for (const el of rootEl.querySelectorAll('[data-demo-id]')) {
    if (el === rootEl) continue;

    const demoId = el.dataset.demoId;
    if (demoId && registry?.has(demoId)) {
      return { el, code: resolveRegisteredCode(registry.get(demoId)) };
    }
  }

  return null;
}

export function formatNavbarItemCode(props, rootEl, registry) {
  const attrs = [];

  if (props.label) attrs.push(`label="${props.label}"`);
  if (props.active) attrs.push('active');

  const attrStr = attrs.length ? ` ${attrs.join(' ')}` : '';
  const badge = findRegisteredDescendant(rootEl, registry);

  if (!badge) {
    return `<NavbarItem${attrStr} />`;
  }

  return [
    `<NavbarItem${attrStr}>`,
    '  <template #badge>',
    indentLines(badge.code, 2),
    '  </template>',
    '</NavbarItem>',
  ].join('\n');
}
