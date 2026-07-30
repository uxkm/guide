import { useMemo, useRef } from 'react';
import BreadcrumbItem from '@/components/BreadcrumbItem.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SEPARATORS = new Set(['chevron', 'slash', 'dot']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const formatCode = createComponentFormatter('Breadcrumb', {
  defaults: { ariaLabel: '경로', separator: 'chevron', size: 'md' },
  skipProps: ['items'],
  selfClosing: false,
});

export default function Breadcrumb({
  items = [],
  ariaLabel = '경로',
  separator = 'chevron',
  size = 'md',
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSeparator = VALID_SEPARATORS.has(separator) ? separator : 'chevron';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const hasItems = Array.isArray(items) && items.length > 0;

  useComponentDemoCode(
    formatCode,
    {
      items,
      ariaLabel,
      separator: resolvedSeparator,
      size: resolvedSize,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['breadcrumb'];
    if (resolvedSeparator === 'slash') classes.push('breadcrumb_sep-slash');
    if (resolvedSeparator === 'dot') classes.push('breadcrumb_sep-dot');
    if (resolvedSize === 'sm') classes.push('breadcrumb_sm');
    if (resolvedSize === 'lg') classes.push('breadcrumb_lg');
    return classes;
  }, [resolvedSeparator, resolvedSize]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <nav
      ref={rootRef}
      className={cn(rootClass, className)}
      aria-label={ariaLabel}
      {...domRest}
    >
      <ol className="breadcrumb_list">
        {hasItems
          ? items.map((item, index) => (
              <BreadcrumbItem
                key={index}
                label={item.label}
                href={item.href}
                current={item.current ?? index === items.length - 1}
                disabled={item.disabled}
                icon={item.icon}
                ariaLabel={item.ariaLabel}
              />
            ))
          : children}
      </ol>
    </nav>
  );
}
