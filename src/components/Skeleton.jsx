import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('Skeleton', {
  defaults: { active: true },
  booleanProps: new Set(['active', 'avatar', 'round']),
  selfClosing: false,
});

const PARAGRAPH_WIDTHS = ['', 'skeleton_w-md', 'skeleton_w-sm'];

function resolveParagraphCount(paragraph) {
  if (paragraph === true) return 3;
  if (typeof paragraph === 'number') return paragraph;
  return 0;
}

export default function Skeleton({
  active = true,
  avatar,
  paragraph = false,
  round,
  ariaLabel = '콘텐츠 로딩 중',
  children,
  className,
  style,
  ...rest
}) {
  const rootRef = useRef(null);
  const paragraphCount = resolveParagraphCount(paragraph);

  useComponentDemoCode(
    formatCode,
    {
      active,
      avatar,
      paragraph,
      round,
      ariaLabel,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, style, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['skeleton_group'];
    if (!active) classes.push('skeleton_static');
    return classes;
  }, [active]);

  const skeletonBaseClass = useMemo(() => {
    const classes = ['skeleton'];
    if (!active) classes.push('skeleton_static');
    return classes;
  }, [active]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const showAvatarOrRound = Boolean(avatar || round);

  return (
    <div
      ref={rootRef}
      className={cn(rootClass, className)}
      style={style}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
      {...domRest}
    >
      {showAvatarOrRound ? (
        avatar ? (
          <div className="skeleton_row">
            <span className={cn(skeletonBaseClass, 'skeleton_circle')} aria-hidden="true" />
            {paragraphCount > 0 ? (
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
            ) : null}
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
