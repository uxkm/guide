import { useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('CardHeader', {
  selfClosing: false,
});

export default function CardHeader({
  title,
  subtitle,
  extra,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    { title, subtitle },
    createDemoSlots({ default: children, extra }),
    rootRef,
    { className, ...rest },
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div ref={rootRef} className={cn('card_header', className)} {...domRest}>
      <div className="card_header-main">
        {children ?? (
          <>
            {title ? <h3 className="card_title">{title}</h3> : null}
            {subtitle ? <p className="card_subtitle">{subtitle}</p> : null}
          </>
        )}
      </div>
      {extra ? <div className="card_extra">{extra}</div> : null}
    </div>
  );
}
