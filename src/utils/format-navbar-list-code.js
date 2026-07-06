import { resolveRegisteredCode } from '@/utils/resolve-demo-code';

function indentLines(text, level) {
  const pad = '  '.repeat(level);
  return text
    .split('\n')
    .map((line) => (line ? pad + line : line))
    .join('\n');
}

function serializeListChildren(container, registry, indent = 1) {
  if (!container) return '';

  const lines = [];

  [...container.children].forEach((child) => {
    const demoId = child.dataset?.demoId;

    if (demoId && registry?.has(demoId)) {
      lines.push(indentLines(resolveRegisteredCode(registry.get(demoId)), indent));
    }
  });

  return lines.join('\n');
}

export function formatNavbarListCode(rootEl, registry) {
  const children = serializeListChildren(rootEl, registry, 1);

  if (!children) {
    return '<NavbarList />';
  }

  return ['<NavbarList>', children, '</NavbarList>'].join('\n');
}
