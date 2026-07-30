import { createContext, useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { formatComponentCode } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export const ListContext = createContext({ tag: 'ul', variant: 'default' });

const VARIANT_TAG = {
  default: 'ul',
  bullet: 'ul',
  ordered: 'ol',
  definition: 'dl',
};

const VARIANT_CLASS = {
  bullet: 'list_bullet',
  ordered: 'list_ordered',
  definition: 'list_definition',
};

const VALID_SIZES = new Set(['md', 'compact']);
const VALID_VARIANTS = new Set(['default', 'bullet', 'ordered', 'definition']);
const VALID_TAGS = new Set(['ul', 'ol', 'dl', 'div']);
const VALID_LAYOUTS = new Set(['block', 'inline']);
const VALID_DESC_ALIGNS = new Set(['left', 'right']);

export default function List({
  bordered,
  split,
  block,
  size = 'md',
  variant = 'default',
  tag,
  layout = 'block',
  inlineLabelWidth,
  inlineGap,
  descAlign = 'left',
  children,
  className,
  style,
  role,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'default';
  const resolvedTag =
    tag != null && VALID_TAGS.has(tag) ? tag : (VARIANT_TAG[resolvedVariant] ?? 'ul');
  const resolvedLayout = VALID_LAYOUTS.has(layout) ? layout : 'block';
  const resolvedDescAlign = VALID_DESC_ALIGNS.has(descAlign) ? descAlign : 'left';

  const rootClass = useMemo(() => {
    const classes = ['list'];
    const variantClass = VARIANT_CLASS[resolvedVariant];
    if (variantClass) classes.push(variantClass);
    if (bordered) classes.push('list_bordered');
    if (split) classes.push('list_divider');
    if (block) classes.push('list_block');
    if (resolvedSize === 'compact') classes.push('list_compact');
    if (resolvedLayout === 'inline') classes.push('list_inline');
    if (resolvedVariant === 'definition' && resolvedDescAlign === 'right') {
      classes.push('list_desc-right');
    }
    return classes;
  }, [resolvedVariant, bordered, split, block, resolvedSize, resolvedLayout, resolvedDescAlign]);

  function formatCode(listProps, listSlots, listAttrs) {
    return formatComponentCode(
      'List',
      listProps,
      listSlots,
      { ...listAttrs, class: cn(rootClass, listAttrs.class) },
      {
        defaults: { size: 'md', variant: 'default', layout: 'block', descAlign: 'left' },
        booleanProps: new Set(['bordered', 'split', 'block']),
        selfClosing: false,
      },
    );
  }

  useComponentDemoCode(
    formatCode,
    {
      bordered,
      split,
      block,
      size: resolvedSize,
      variant: resolvedVariant,
      tag,
      layout: resolvedLayout,
      inlineLabelWidth,
      inlineGap,
      descAlign: resolvedDescAlign,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, style, role, ...rest },
  );

  const rootStyle = useMemo(() => {
    const next = {};

    if (resolvedLayout === 'inline') {
      if (inlineLabelWidth) next['--list-inline-label-width'] = inlineLabelWidth;
      if (inlineGap) next['--list-inline-gap'] = inlineGap;
    }

    if (style && typeof style === 'object' && !Array.isArray(style)) {
      Object.assign(next, style);
    }

    return Object.keys(next).length ? next : undefined;
  }, [resolvedLayout, inlineLabelWidth, inlineGap, style]);

  const resolvedRole = role !== undefined ? role : resolvedTag === 'div' ? 'list' : undefined;

  const contextValue = useMemo(
    () => ({ tag: resolvedTag, variant: resolvedVariant }),
    [resolvedTag, resolvedVariant],
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);
  const Tag = resolvedTag;

  return (
    <ListContext.Provider value={contextValue}>
      <Tag
        ref={rootRef}
        className={cn(rootClass, className)}
        style={rootStyle}
        role={resolvedRole}
        {...domRest}
      >
        {children}
      </Tag>
    </ListContext.Provider>
  );
}
