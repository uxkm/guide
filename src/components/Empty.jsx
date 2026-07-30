import { useMemo, useRef } from 'react';
import { useEmptyDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

function DefaultEmptyImage() {
  return (
    <svg viewBox="0 0 64 41" fill="none" aria-hidden="true">
      <ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12" />
      <path
        d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Empty({
  description,
  size = 'md',
  simple,
  block,
  image,
  footer,
  children,
  className,
  style,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const descContent = children ?? description;
  const hasImage = !simple;
  const hasFooter = footer != null;

  useEmptyDemoCode(
    {
      description: typeof description === 'string' ? description : undefined,
      size: resolvedSize,
      simple,
      block,
    },
    rootRef,
    { className, style, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['empty'];
    if (resolvedSize === 'sm') classes.push('empty_sm');
    if (resolvedSize === 'lg') classes.push('empty_lg');
    if (simple) classes.push('empty_simple');
    if (block) classes.push('empty_block');
    return classes;
  }, [resolvedSize, simple, block]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div
      ref={rootRef}
      className={cn(rootClass, className)}
      style={style}
      role="status"
      {...domRest}
    >
      {hasImage ? (
        <div className="empty_image" aria-hidden="true" data-demo-slot="image">
          {image ?? <DefaultEmptyImage />}
        </div>
      ) : null}
      {descContent ? <p className="empty_desc">{descContent}</p> : null}
      {hasFooter ? (
        <div className="empty_footer" data-demo-slot="footer">
          {footer}
        </div>
      ) : null}
    </div>
  );
}
