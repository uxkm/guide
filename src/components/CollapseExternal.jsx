import { useId, useMemo, useReducer, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { useCollapseExternalDemoCode } from '@/hooks/useDemoCode';

function useMutableRef(initial) {
  const stateRef = useRef(initial);
  const [, bump] = useReducer((count) => count + 1, 0);

  return useMemo(
    () => ({
      get value() {
        return stateRef.current;
      },
      set value(next) {
        stateRef.current = next;
        bump();
      },
    }),
    [],
  );
}

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
  const rootRef = useRef(null);
  const props = { ripple, triggerLabel, narrow, boxed, open };
  const { rippleAttrs } = useRipple({ ripple });
  const panelId = useId().replace(/:/g, '');
  const isOpen = useMutableRef(open);

  useCollapseExternalDemoCode(props, rootRef, { class: className, ...rest }, isOpen);

  const wrapperClass = cn(narrow && 'collapse_demo-narrow', className);

  const panelStyle = boxed
    ? {
        marginTop: 'var(--space-sm)',
        padding: 'var(--space-lg)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-surface-raised)',
      }
    : undefined;

  function toggle() {
    isOpen.value = !isOpen.value;
  }

  return (
    <div ref={rootRef} className={wrapperClass} {...rest}>
      {lead ? <div data-demo-slot="lead">{lead}</div> : null}
      <Button
        variant="ghost"
        size="sm"
        expanded={isOpen.value}
        aria-controls={panelId}
        onClick={toggle}
        {...rippleAttrs}
        iconAfter={<Icon name="chevron-down" size="sm" />}
      >
        <span className="btn_label">{triggerLabel}</span>
      </Button>
      <div
        id={panelId}
        className={cn('collapse', isOpen.value && 'is-open')}
        data-demo-slot="default"
        style={panelStyle}
        hidden={!isOpen.value || undefined}
      >
        {children}
      </div>
    </div>
  );
}
