'use client';

import { Fragment, useContext, useMemo, useRef } from 'react';
import { ListContext } from '@/components/List.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { formatListItemCode } from '@/utils/format-list-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_TAGS = new Set(['auto', 'li', 'dt', 'dd']);

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
  const listContext = useContext(ListContext) ?? { tag: 'ul', variant: 'default' };
  const resolvedTagProp = VALID_TAGS.has(tag) ? tag : 'auto';

  const isDefinitionPair =
    resolvedTagProp === 'auto' &&
    listContext.tag === 'dl' &&
    Boolean(title && description);

  const resolvedTag = useMemo(() => {
    if (isDefinitionPair) return null;
    if (resolvedTagProp !== 'auto') return resolvedTagProp;
    if (listContext.tag === 'dl') {
      if (title && !description) return 'dt';
      if (description && !title) return 'dd';
    }
    if (listContext.tag === 'div') return 'div';
    return 'li';
  }, [isDefinitionPair, resolvedTagProp, listContext.tag, title, description]);

  const itemRole = role !== undefined ? role : listContext.tag === 'div' ? 'listitem' : undefined;

  useComponentDemoCode(
    formatListItemCode,
    { title, description, meta, tag: resolvedTagProp },
    createDemoSlots({ default: children, prefix, extra, actions }),
    rootRef,
    { className, role, ...rest },
  );

  const hasContent = Boolean(title || description || meta || children);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  if (isDefinitionPair) {
    return (
      <Fragment>
        <dt ref={rootRef} className={cn('list_title', className)} {...domRest}>
          {title}
        </dt>
        <dd className="list_desc" data-demo-fragment-part>
          {description}
        </dd>
      </Fragment>
    );
  }

  const Tag = resolvedTag || 'li';

  return (
    <Tag
      ref={rootRef}
      className={cn('list_item', className)}
      role={itemRole}
      {...domRest}
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
