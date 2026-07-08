import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import BreadcrumbItem from '@/components/BreadcrumbItem.jsx';

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
  const props = { items, ariaLabel, separator, size };
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'breadcrumb',
    separator === 'slash' && 'breadcrumb_sep-slash',
    separator === 'dot' && 'breadcrumb_sep-dot',
    size === 'sm' && 'breadcrumb_sm',
    size === 'lg' && 'breadcrumb_lg',
    className,
  );

  return (
    <nav ref={rootRef} className={rootClass} aria-label={ariaLabel} {...rest}>
      <ol className="breadcrumb_list">
        {items.length > 0
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
