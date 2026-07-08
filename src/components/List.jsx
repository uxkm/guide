import { useMemo, useRef } from 'react';
import { ListContext } from '@/components/context/ListContext';
import { cn } from '@/utils/cn';
import { formatComponentCode } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

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

function formatCode(listProps, listSlots, listAttrs) {
  const classes = ['list'];
  const variantClass = VARIANT_CLASS[listProps.variant];
  if (variantClass) classes.push(variantClass);
  if (listProps.bordered) classes.push('list_bordered');
  if (listProps.split) classes.push('list_divider');
  if (listProps.block) classes.push('list_block');
  if (listProps.size === 'compact') classes.push('list_compact');
  if (listProps.layout === 'inline') classes.push('list_inline');
  if (listProps.variant === 'definition' && listProps.descAlign === 'right') {
    classes.push('list_desc-right');
  }
  if (listAttrs.class) classes.push(listAttrs.class);

  return formatComponentCode('List', listProps, listSlots, { ...listAttrs, class: classes.join(' ') }, {
    defaults: { size: 'md', variant: 'default', layout: 'block', descAlign: 'left' },
    booleanProps: new Set(['bordered', 'split', 'block']),
    selfClosing: false,
  });
}

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
  role,
  style,
  ...rest
}) {
  const rootRef = useRef(null);
  const props = {
    bordered,
    split,
    block,
    size,
    variant,
    tag,
    layout,
    inlineLabelWidth,
    inlineGap,
    descAlign,
  };
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, role, style, ...rest });

  const resolvedTag = tag ?? VARIANT_TAG[variant] ?? 'ul';

  const listContext = useMemo(
    () => ({ tag: resolvedTag, variant }),
    [resolvedTag, variant],
  );

  const rootClass = cn(
    'list',
    VARIANT_CLASS[variant],
    bordered && 'list_bordered',
    split && 'list_divider',
    block && 'list_block',
    size === 'compact' && 'list_compact',
    layout === 'inline' && 'list_inline',
    variant === 'definition' && descAlign === 'right' && 'list_desc-right',
    className,
  );

  const rootStyle = useMemo(() => {
    const nextStyle = {};

    if (layout === 'inline') {
      if (inlineLabelWidth) {
        nextStyle['--list-inline-label-width'] = inlineLabelWidth;
      }
      if (inlineGap) {
        nextStyle['--list-inline-gap'] = inlineGap;
      }
    }

    if (style && typeof style === 'object' && !Array.isArray(style)) {
      Object.assign(nextStyle, style);
    }

    return Object.keys(nextStyle).length ? nextStyle : undefined;
  }, [layout, inlineLabelWidth, inlineGap, style]);

  const resolvedRole = role !== undefined ? role : resolvedTag === 'div' ? 'list' : undefined;
  const Tag = resolvedTag;

  return (
    <ListContext.Provider value={listContext}>
      <Tag
        ref={rootRef}
        className={rootClass}
        style={rootStyle}
        role={resolvedRole}
        {...rest}
      >
        {children}
      </Tag>
    </ListContext.Provider>
  );
}
