import { resolveRegisteredCode } from '@/utils/resolve-demo-code';

function summarizeLabels(labels) {
  if (!labels.length) return null;

  const summary = labels.join(' · ');
  return summary.length > 48 ? `${labels.slice(0, 2).join(' · ')} …` : summary;
}

function extractButtonLabelsFromNode(node, registry) {
  const labels = [];

  node.querySelectorAll('[data-demo-id]').forEach((button) => {
    const code = resolveRegisteredCode(registry.get(button.dataset.demoId));
    if (!code) return;

    const label = code.match(/label="([^"]+)"/)?.[1];
    const aria = code.match(/aria-label="([^"]+)"/)?.[1];

    if (label) labels.push(label);
    else if (aria) labels.push(aria);
  });

  return labels;
}

function isLayoutGroup(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return false;

  return ['btn_row', 'btn_group', 'btn_stack', 'btn_row-equal'].some((cls) =>
    node.classList.contains(cls)
  );
}

export function deriveDemoCaptionFromNode(node, registry) {
  if (node.nodeType !== Node.ELEMENT_NODE) return null;

  if (node.dataset.demoCaption) {
    return node.dataset.demoCaption.trim();
  }

  if (isLayoutGroup(node)) {
    return summarizeLabels(extractButtonLabelsFromNode(node, registry));
  }

  if (node.dataset.demoId && registry.has(node.dataset.demoId)) {
    const code = resolveRegisteredCode(registry.get(node.dataset.demoId));
    const label = code.match(/label="([^"]+)"/)?.[1];
    if (label) return label;

    const aria = code.match(/aria-label="([^"]+)"/)?.[1];
    if (aria) return aria;
  }

  const groupRole = node.getAttribute('role');
  const groupLabel = node.getAttribute('aria-label');

  if (groupLabel && (groupRole === 'group' || groupRole === 'toolbar')) {
    return groupLabel.trim();
  }

  if (node.classList.contains('btn_stack-text') || node.matches('.btn_stack-text, p.btn_stack-text')) {
    return node.textContent.trim();
  }

  return null;
}

export function formatDemoComment(text) {
  return `<!-- ${text} -->`;
}

export function isCaptionMarker(node) {
  return node.nodeType === Node.ELEMENT_NODE && node.dataset?.demoCaption !== undefined;
}
