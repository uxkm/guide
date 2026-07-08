import { useMemo, useRef } from 'react';
import { useListContext } from '@/components/context/ListContext';
import { cn } from '@/utils/cn';
import { formatComponentCode, hasComplexDefaultSlot } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

export default function ListItem({
  title,
  description,
  meta,
  tag = 'auto',
  prefix,
  extra,
  actions,
  children,
  className,
  role,
  ...rest
}) {
  const rootRef = useRef(null);
  const listContext = useListContext();
  const props = { title, description, meta, tag };

  const isDefinitionPair =
    tag === 'auto' && listContext.tag === 'dl' && Boolean(title && description);

  const resolvedTag = useMemo(() => {
    if (isDefinitionPair) return null;
    if (tag !== 'auto') return tag;
    if (listContext.tag === 'dl') {
      if (title && !description) return 'dt';
      if (description && !title) return 'dd';
    }
    if (listContext.tag === 'div') return 'div';
    return 'li';
  }, [isDefinitionPair, tag, listContext.tag, title, description]);

  const demoSlots = useMemo(
    () => createDemoSlots({ default: children, prefix, extra, actions }),
    [children, prefix, extra, actions],
  );

  const formatCode = (itemProps, itemSlots, itemAttrs) => {
    const hasComplexDefault = hasComplexDefaultSlot(itemSlots);
    const hasPrefix = Boolean(itemSlots.prefix?.());
    const isDefPair =
      itemProps.tag === 'auto' &&
      listContext.tag === 'dl' &&
      itemProps.title &&
      itemProps.description;

    return formatComponentCode('ListItem', itemProps, itemSlots, itemAttrs, {
      labelProp: 'title',
      defaults: { tag: 'auto' },
      selfClosing: isDefPair || (!hasPrefix && !hasComplexDefault),
    });
  };

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, role, ...rest });

  const itemRole = role !== undefined ? role : listContext.tag === 'div' ? 'listitem' : undefined;

  const hasContent = Boolean(title || description || meta || children);

  if (isDefinitionPair) {
    return (
      <>
        <dt ref={rootRef} className={cn('list_title', className)} {...rest}>
          {title}
        </dt>
        <dd className="list_desc" data-demo-fragment-part>
          {description}
        </dd>
      </>
    );
  }

  const Tag = resolvedTag;

  return (
    <Tag
      ref={rootRef}
      className={cn('list_item', className)}
      role={itemRole}
      {...rest}
    >
      {prefix}
      {hasContent ? (
        <div className="list_content">
          {children ?? (
            <>
              {title ? <span className="list_title">{title}</span> : null}
              {meta ? <span className="list_meta">{meta}</span> : null}
              {description ? <span className="list_desc">{description}</span> : null}
            </>
          )}
        </div>
      ) : null}
      {extra ? <span className="list_extra">{extra}</span> : null}
      {actions ? <span className="list_action">{actions}</span> : null}
    </Tag>
  );
}
