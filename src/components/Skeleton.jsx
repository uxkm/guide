import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Skeleton', {
  defaults: { active: true },
  booleanProps: new Set(['active', 'avatar', 'round']),
  selfClosing: false,
});

const PARAGRAPH_WIDTHS = ['', 'skeleton_w-md', 'skeleton_w-sm'];

export default function Skeleton({
  active = true,
  avatar = false,
  paragraph = false,
  round = false,
  ariaLabel = '콘텐츠 로딩 중',
  children,
  className,
  ...rest
}) {
  const props = { active, avatar, paragraph, round, ariaLabel };
  const rootRef = useRef(null);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const paragraphCount =
    paragraph === true ? 3 : typeof paragraph === 'number' ? paragraph : 0;

  const rootClass = cn('skeleton_group', !active && 'skeleton_static', className);
  const skeletonBaseClass = cn('skeleton', !active && 'skeleton_static');

  return (
    <div
      ref={rootRef}
      className={rootClass}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
    >
      {avatar || round ? (
        avatar ? (
          <div className="skeleton_row">
            <span className={cn(skeletonBaseClass, 'skeleton_circle')} aria-hidden="true" />
            {paragraphCount > 0 && (
              <div className="skeleton_row-body">
                {Array.from({ length: paragraphCount }, (_, i) => (
                  <span
                    key={i}
                    className={cn(
                      skeletonBaseClass,
                      'skeleton_text',
                      PARAGRAPH_WIDTHS[i] || 'skeleton_w-lg',
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <span className={cn(skeletonBaseClass, 'skeleton_circle')} aria-hidden="true" />
        )
      ) : (
        <>
          <span className={cn(skeletonBaseClass, 'skeleton_title')} aria-hidden="true" />
          {Array.from({ length: paragraphCount || 3 }, (_, i) => (
            <span
              key={i}
              className={cn(skeletonBaseClass, 'skeleton_text', PARAGRAPH_WIDTHS[i] || '')}
              aria-hidden="true"
            />
          ))}
        </>
      )}
      {children}
    </div>
  );
}
