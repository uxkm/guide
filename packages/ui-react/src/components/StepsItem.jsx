import { useContext, useMemo, useRef } from 'react';
import Icon from '@/components/Icon.jsx';
import { StepsContext } from '@/components/Steps.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_STATUSES = new Set(['finished', 'active', 'wait', 'error']);

const formatCode = createComponentFormatter('StepsItem', {
  defaults: { status: 'wait' },
  booleanProps: new Set(['ripple']),
  skipProps: ['index', 'isLast'],
  labelProp: 'title',
  selfClosing: true,
});

function Indicator({ status, stepIndex }) {
  if (status === 'finished') {
    return <Icon name="check" className="steps_icon" />;
  }
  if (status === 'error') {
    return <Icon name="close" className="steps_icon" />;
  }
  return <span className="steps_index">{stepIndex}</span>;
}

export default function StepsItem({
  ripple,
  title,
  description,
  status = 'wait',
  index,
  isLast,
  children,
  className,
  onClick,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const rootRef = useRef(null);
  const steps = useContext(StepsContext);
  const isNavigable = steps?.navigable ?? false;
  const resolvedStatus = VALID_STATUSES.has(status) ? status : 'wait';
  const stepIndex = index ?? 0;

  useComponentDemoCode(
    formatCode,
    { ripple, title, description, status: resolvedStatus, index },
    createDemoSlots({}),
    rootRef,
    { className, onClick, ...rest },
  );

  const itemClass = useMemo(
    () => ['steps_item', `is-${resolvedStatus}`],
    [resolvedStatus],
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const head = (
    <span className="steps_head">
      <span className="steps_indicator" aria-hidden="true">
        <Indicator status={resolvedStatus} stepIndex={stepIndex} />
      </span>
      {!isLast ? <span className="steps_tail" aria-hidden="true" /> : null}
    </span>
  );

  const content = (
    <span className="steps_content">
      <span className="steps_title">{title}</span>
      {description ? <span className="steps_desc">{description}</span> : null}
    </span>
  );

  return (
    <li
      ref={rootRef}
      className={cn(itemClass, className)}
      aria-current={!isNavigable && resolvedStatus === 'active' ? 'step' : undefined}
      {...domRest}
    >
      {isNavigable ? (
        <button
          type="button"
          className="steps_trigger"
          disabled={resolvedStatus === 'wait'}
          aria-current={resolvedStatus === 'active' ? 'step' : undefined}
          onClick={onClick}
          {...rippleAttrs}
        >
          {head}
          {content}
        </button>
      ) : children != null ? (
        children
      ) : (
        <>
          <div className="steps_head">
            <span className="steps_indicator" aria-hidden="true">
              <Indicator status={resolvedStatus} stepIndex={stepIndex} />
            </span>
            {!isLast ? <span className="steps_tail" aria-hidden="true" /> : null}
          </div>
          <div className="steps_content">
            <p className="steps_title">{title}</p>
            {description ? <p className="steps_desc">{description}</p> : null}
          </div>
        </>
      )}
    </li>
  );
}
