import { useId, useLayoutEffect, useMemo, useReducer, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useCollapseGroup } from '@/components/context/CollapseGroupContext';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';

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

export default function CollapsePanel({
  ripple,
  label,
  content,
  open,
  disabled,
  extraCode,
  extra,
  children,
}) {
  const group = useCollapseGroup();
  const { rippleAttrs } = useRipple({ ripple });
  const triggerId = useId().replace(/:/g, '');
  const bodyId = useId().replace(/:/g, '');
  const isOpen = useMutableRef(open);
  const registerPanelRef = useRef(group?.registerPanel);
  const unregisterPanelRef = useRef(group?.unregisterPanel);
  const isOpenRef = useRef(isOpen);
  registerPanelRef.current = group?.registerPanel;
  unregisterPanelRef.current = group?.unregisterPanel;
  isOpenRef.current = isOpen;

  const panelClass = cn(
    'collapse_panel',
    isOpen.value && 'is-open',
    disabled && 'is-disabled',
  );

  function toggle() {
    if (disabled) return;

    if (!group) {
      isOpen.value = !isOpen.value;
      return;
    }

    group.togglePanel(triggerId, isOpen);
  }

  useLayoutEffect(() => {
    const registerPanel = registerPanelRef.current;
    if (!registerPanel) return undefined;

    registerPanel({
      id: triggerId,
      label,
      content,
      open,
      disabled,
      hasExtra: Boolean(extra),
      extraCode,
      isOpen: isOpenRef.current,
    });

    return () => unregisterPanelRef.current?.(triggerId);
  }, [triggerId, label, content, open, disabled, extraCode, Boolean(extra)]);

  return (
    <div className={panelClass}>
      <div className="collapse_header">
        <Button
          id={triggerId}
          variant="text"
          className="collapse_trigger"
          expanded={isOpen.value}
          aria-controls={bodyId}
          disabled={disabled}
          onClick={toggle}
          {...rippleAttrs}
          iconAfter={<Icon name="chevron-down" className="collapse_icon" />}
        >
          <span className="collapse_label">{label}</span>
          {extra ? <span className="collapse_extra">{extra}</span> : null}
        </Button>
      </div>
      <div
        id={bodyId}
        className={cn('collapse_body', isOpen.value && 'is-open')}
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen.value || undefined}
      >
        <div className="collapse_content">
          {children ?? (content ? <p>{content}</p> : null)}
        </div>
      </div>
    </div>
  );
}
