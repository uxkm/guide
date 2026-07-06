import { resolveRegistryForNode } from '@/composables/useDemoCode';
import {
  appendNamedSlot,
  indentLines,
  openComponentTag,
  serializeComponentNode,
  serializeDomChildren,
} from '@/utils/format-slot-component-code';

const TABS_DEFAULTS = {
  variant: 'line',
  size: 'md',
  layout: 'auto',
  mode: 'panels',
  indicator: 'static',
};

const TABS_BOOLEAN_PROPS = new Set(['vertical', 'scrollable', 'ripple']);

function collectRegisteredIn(element, registry) {
  const lines = [];

  function walk(node) {
    [...node.children].forEach((child) => {
      const demoId = child.dataset?.demoId;
      const resolvedRegistry = resolveRegistryForNode(child, registry);

      if (demoId && resolvedRegistry?.has(demoId)) {
        lines.push(serializeComponentNode(child, resolvedRegistry, 0));
        return;
      }

      walk(child);
    });
  }

  walk(element);
  return lines;
}

export function formatTabsCode(props, attrs = {}, el, registry) {
  const lines = [
    `${openComponentTag('Tabs', props, attrs, {
      defaults: TABS_DEFAULTS,
      booleanProps: TABS_BOOLEAN_PROPS,
    })}>`,
  ];

  const extraHost = el.querySelector('[data-demo-slot="extra"]');
  appendNamedSlot(lines, 'extra', serializeDomChildren(extraHost, registry, 2));

  const tabList = el.querySelector('.tabs_list');
  if (tabList) {
    collectRegisteredIn(tabList, registry).forEach((block) => {
      lines.push(indentLines(block, 1));
    });
  }

  const panelsHost = el.querySelector('[data-demo-slot="default"]');
  if (panelsHost) {
    const tabPanels = [...panelsHost.querySelectorAll(':scope > .tabs_panel[data-demo-id]')];
    const panelBlocks = tabPanels.length
      ? tabPanels.map((panel) => serializeComponentNode(panel, registry, 0))
      : collectRegisteredIn(panelsHost, registry);

    if (panelBlocks.length) {
      panelBlocks.forEach((block) => lines.push(indentLines(block, 1)));
    } else {
      const dynamicContent = serializeDomChildren(
        panelsHost.querySelector(':scope > .tabs_panel'),
        registry,
        1,
      );
      if (dynamicContent) {
        lines.push(dynamicContent);
      }
    }
  }

  lines.push('</Tabs>');
  return lines.join('\n');
}
