import { useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { CollapseContext } from '@/components/Collapse.jsx';
import { useRipple } from '@/hooks/useRipple';
import { cn } from '@/utils/cn';

export default function CollapsePanel({
  ripple,
  label,
  content,
  open,
  disabled,
  extraCode,
  extra,
  children,
  className,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const group = useContext(CollapseContext);
  const groupRef = useRef(group);
  groupRef.current = group;

  const reactId = useId().replace(/:/g, '');
  const triggerId = `collapse-trigger-${reactId}`;
  const bodyId = `collapse-body-${reactId}`;

  const [isOpen, setIsOpen] = useState(() => Boolean(open));
  const isOpenRef = useRef(isOpen);
  isOpenRef.current = isOpen;

  const hasExtra = extra != null;

  // 마운트 시 1회 등록 — Context 갱신으로 재등록·열림 상태 리셋되지 않도록
  useEffect(() => {
    const api = groupRef.current;
    if (!api) return undefined;

    api.registerPanel({
      id: triggerId,
      label,
      content,
      open: Boolean(open),
      disabled: Boolean(disabled),
      hasExtra,
      extraCode,
      getIsOpen: () => isOpenRef.current,
      setIsOpen,
    });

    return () => api.unregisterPanel(triggerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount/unmount only
  }, [triggerId]);

  useEffect(() => {
    const api = groupRef.current;
    if (!api) return;
    api.updatePanelMeta(triggerId, {
      label,
      content,
      disabled: Boolean(disabled),
      hasExtra,
      extraCode,
    });
  }, [triggerId, label, content, disabled, hasExtra, extraCode]);

  const panelClass = useMemo(
    () => ['collapse_panel', isOpen && 'is-open', disabled && 'is-disabled'],
    [isOpen, disabled],
  );

  function toggle() {
    if (disabled || !groupRef.current) return;
    groupRef.current.togglePanel(triggerId);
  }

  const { class: _ignoredClass, ...domRest } = rest;

  return (
    <div className={cn(panelClass, className)} {...domRest}>
      <div className="collapse_header">
        <Button
          id={triggerId}
          variant="text"
          className="collapse_trigger"
          expanded={isOpen}
          aria-controls={bodyId}
          disabled={disabled}
          onClick={toggle}
          iconAfter={<Icon name="chevron-down" className="collapse_icon" />}
          {...rippleAttrs}
        >
          <span className="collapse_label">{label}</span>
          {hasExtra ? <span className="collapse_extra">{extra}</span> : null}
        </Button>
      </div>
      <div
        id={bodyId}
        className="collapse_body"
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen || undefined}
      >
        <div className="collapse_content">
          {children ?? (content ? <p>{content}</p> : null)}
        </div>
      </div>
    </div>
  );
}
