import { useId, useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useCollapseExternalDemoCode } from '@/hooks/useDemoCode';
import { useRipple } from '@/hooks/useRipple';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export default function CollapseExternal({
  ripple,
  triggerLabel,
  narrow,
  boxed = true,
  open,
  lead,
  children,
  className,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const rootRef = useRef(null);
  const panelId = `collapse-ext-${useId().replace(/:/g, '')}`;

  const [isOpen, setIsOpen] = useState(() => Boolean(open));
  const isOpenStateRef = useRef(isOpen);
  isOpenStateRef.current = isOpen;

  // formatCollapseExternalCode는 Vue ref처럼 .value를 읽음
  const isOpenDemoRef = useMemo(
    () => ({
      get value() {
        return isOpenStateRef.current;
      },
    }),
    [],
  );

  useCollapseExternalDemoCode(
    { ripple, triggerLabel, narrow, boxed, open },
    rootRef,
    { className, ...rest },
    isOpenDemoRef,
  );

  const panelStyle = useMemo(
    () =>
      boxed
        ? {
            marginTop: 'var(--space-sm)',
            padding: 'var(--space-lg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-surface-raised)',
          }
        : undefined,
    [boxed],
  );

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div
      ref={rootRef}
      className={cn(narrow && 'collapse_demo-narrow', className)}
      {...domRest}
    >
      {lead != null ? <div data-demo-slot="lead">{lead}</div> : null}
      <Button
        variant="ghost"
        size="sm"
        expanded={isOpen}
        aria-controls={panelId}
        onClick={toggle}
        iconAfter={<Icon name="chevron-down" size="sm" />}
        {...rippleAttrs}
      >
        <span className="btn_label">{triggerLabel}</span>
      </Button>
      <div
        id={panelId}
        className={cn('collapse', isOpen && 'is-open')}
        data-demo-slot="default"
        style={panelStyle}
        hidden={!isOpen || undefined}
      >
        {children}
      </div>
    </div>
  );
}
