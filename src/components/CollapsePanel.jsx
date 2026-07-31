'use client';

import { useContext, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { CollapseContext } from '@/components/Collapse.jsx';
import { useRipple } from '@/hooks/useRipple';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';
import { setSlideRegionOpen } from '@/utils/slide-region';

export default function CollapsePanel({
  ripple,
  label,
  content,
  open,
  defaultOpen = false,
  onOpenChange,
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

  const [internalOpen, setInternalOpen] = useState(() => Boolean(defaultOpen));
  const controlled = open != null;
  const isOpen = controlled ? Boolean(open) : internalOpen;
  const isOpenRef = useRef(isOpen);
  isOpenRef.current = isOpen;
  const controlledRef = useRef(controlled);
  controlledRef.current = controlled;
  const onOpenChangeRef = useRef(onOpenChange);
  onOpenChangeRef.current = onOpenChange;
  const bodyRef = useRef(null);
  const isFirstSlideSync = useRef(true);
  const slide = group?.effect === 'slide';

  const hasExtra = extra != null;

  function setIsOpen(nextOpen) {
    if (!controlledRef.current) {
      setInternalOpen(nextOpen);
    }
    onOpenChangeRef.current?.(nextOpen);
  }

  // 마운트 시 1회 등록 — Context 갱신으로 재등록·열림 상태 리셋되지 않도록
  useEffect(() => {
    const api = groupRef.current;
    if (!api) return undefined;

    api.registerPanel({
      id: triggerId,
      label,
      content,
      open: controlled ? Boolean(open) : Boolean(defaultOpen),
      defaultOpen: Boolean(defaultOpen),
      controlled,
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
      open: controlled ? Boolean(open) : undefined,
      defaultOpen: Boolean(defaultOpen),
      controlled,
      disabled: Boolean(disabled),
      hasExtra,
      extraCode,
    });
  }, [
    triggerId,
    label,
    content,
    open,
    defaultOpen,
    controlled,
    disabled,
    hasExtra,
    extraCode,
  ]);

  useLayoutEffect(() => {
    if (!slide) return;
    const animate = !isFirstSlideSync.current;
    isFirstSlideSync.current = false;
    setSlideRegionOpen(bodyRef.current, isOpen, animate);
  }, [slide, isOpen]);

  const panelClass = useMemo(
    () => ['collapse_panel', isOpen && 'is-open', disabled && 'is-disabled'],
    [isOpen, disabled],
  );

  function toggle() {
    if (disabled || !groupRef.current) return;
    groupRef.current.togglePanel(triggerId);
  }

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

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
        ref={slide ? bodyRef : undefined}
        id={bodyId}
        className="collapse_body"
        role="region"
        aria-labelledby={triggerId}
        hidden={slide ? undefined : (!isOpen || undefined)}
      >
        <div className="collapse_content">
          {children ?? (content ? <p>{content}</p> : null)}
        </div>
      </div>
    </div>
  );
}
