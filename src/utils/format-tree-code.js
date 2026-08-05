import { formatComponentCode } from '@/utils/format-component-code';

export function formatTreeCode(props = {}, slots = {}, attrs = {}) {
  return formatComponentCode('Tree', props, slots, attrs, {
    booleanProps: new Set(['bordered', 'lines', 'compact', 'multiselectable']),
    slotContent: { default: '...' },
    selfClosing: false,
  });
}

export function formatTreeNodeCode(props = {}, slots = {}, attrs = {}) {
  const hasRenderableChildren = ['default', 'prefix', 'icon', 'label', 'meta'].some((name) => {
    if (!slots[name]) return false;

    try {
      return Boolean(slots[name]({})?.length);
    } catch {
      return true;
    }
  });

  return formatComponentCode('TreeNode', props, slots, attrs, {
    booleanProps: new Set([
      'ripple',
      'expanded',
      'selected',
      'disabled',
      'expandable',
      'plusToggle',
      'link',
    ]),
    falseExplicitProps: new Set(['expanded']),
    slotContent: {
      default: '...',
      prefix: '...',
      icon: '...',
      label: '...',
      meta: '...',
    },
    selfClosing: !hasRenderableChildren,
  });
}
