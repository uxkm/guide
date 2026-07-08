import { useEffect, useId, useMemo, useRef } from 'react';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { useStepsContext } from '@/context/StepsContext.jsx';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('StepsItem', {
  defaults: { status: 'wait' },
  booleanProps: new Set(['ripple']),
  skipProps: ['index'],
  labelProp: 'title',
  selfClosing: true,
});

export default function StepsItem({
  ripple,
  title,
  description,
  status = 'wait',
  index,
  children,
  className,
  ...rest
}) {
  const props = { ripple, title, description, status, index };
  const { rippleAttrs } = useRipple(props);
  const rootRef = useRef(null);
  const itemId = useId().replace(/:/g, '');
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const { registerItem, unregisterItem, navigable: isNavigableCtx, isLastItem, getItemIndex } =
    useStepsContext() ?? {};

  useEffect(() => {
    if (!registerItem) return undefined;
    registerItem(itemId, { title, description, status, index });
    return () => unregisterItem?.(itemId);
  }, [registerItem, unregisterItem, itemId, title, description, status, index]);

  const isNavigable = isNavigableCtx ?? false;
  const isLast = isLastItem?.(itemId) ?? false;
  const stepIndex = index ?? getItemIndex?.(itemId) ?? 0;

  const indicator = (
    <span className="steps_indicator" aria-hidden="true">
      {status === 'finished' && <Icon name="check" className="steps_icon" />}
      {status === 'error' && <Icon name="close" className="steps_icon" />}
      {status !== 'finished' && status !== 'error' && (
        <span className="steps_index">{stepIndex}</span>
      )}
    </span>
  );

  const content = (
    <span className="steps_content">
      <span className="steps_title">{title}</span>
      {description && <span className="steps_desc">{description}</span>}
    </span>
  );

  return (
    <li
      ref={rootRef}
      className={cn('steps_item', `is-${status}`)}
      aria-current={!isNavigable && status === 'active' ? 'step' : undefined}
    >
      {isNavigable ? (
        <button
          type="button"
          className="steps_trigger"
          disabled={status === 'wait'}
          aria-current={status === 'active' ? 'step' : undefined}
          {...rippleAttrs}
        >
          <span className="steps_head">
            {indicator}
            {!isLast && <span className="steps_tail" aria-hidden="true" />}
          </span>
          {content}
        </button>
      ) : (
        children ?? (
          <>
            <div className="steps_head">
              {indicator}
              {!isLast && <span className="steps_tail" aria-hidden="true" />}
            </div>
            <div className="steps_content">
              <p className="steps_title">{title}</p>
              {description && <p className="steps_desc">{description}</p>}
            </div>
          </>
        )
      )}
    </li>
  );
}
