import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('CardHeader', { selfClosing: false });

export default function CardHeader({ title, subtitle, children, extra, className, ...rest }) {
  const rootRef = useRef(null);
  const props = { title, subtitle };
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children, extra }),
    [children, extra],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  return (
    <div ref={rootRef} className={cn('card_header', className)} {...rest}>
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
