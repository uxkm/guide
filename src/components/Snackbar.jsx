'use client';

import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import {
  SnackbarPlacementContext,
  SNACKBAR_PLACEMENTS,
} from '@/components/SnackbarRegion.jsx';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_COLORS = new Set(['info', 'success', 'warning', 'danger']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_MOTIONS = new Set(['fade', 'slide', 'none']);
const VALID_PLACEMENTS = new Set(SNACKBAR_PLACEMENTS);
const EXIT_FALLBACK_MS = 300;

const SNACKBAR_ICONS = {
  info: 'info',
  success: 'check-circle',
  warning: 'alert-triangle',
  danger: 'x-circle',
};

const formatCode = createComponentFormatter('Snackbar', {
  defaults: {
    color: 'info',
    size: 'md',
    role: 'status',
    duration: 0,
    motion: 'fade',
  },
  booleanProps: new Set(['closable', 'showIcon', 'round', 'ripple']),
  skipProps: ['role'],
});

export default function Snackbar({
  ripple,
  color = 'info',
  message,
  closable,
  closeLabel = '알림 닫기',
  showIcon = true,
  round,
  size = 'md',
  duration = 0,
  motion = 'fade',
  placement,
  role = 'status',
  icon,
  action,
  children,
  className,
  onClose,
  onMouseEnter,
  onMouseLeave,
  onFocusCapture,
  onBlurCapture,
  onKeyDown,
  onAnimationEnd,
  ...rest
}) {
  const rootRef = useRef(null);
  const timerRef = useRef(null);
  const enterFallbackRef = useRef(null);
  const exitFallbackRef = useRef(null);
  const closePayloadRef = useRef(null);
  const timerStartedAtRef = useRef(0);
  const remainingDurationRef = useRef(0);
  const pauseReasonsRef = useRef(new Set());
  const onCloseRef = useRef(onClose);
  const regionPlacement = useContext(SnackbarPlacementContext);
  const { rippleAttrs } = useRipple({ ripple });
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState('entering');
  const resolvedColor = VALID_COLORS.has(color) ? color : 'info';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedMotion = VALID_MOTIONS.has(motion) ? motion : 'fade';
  const resolvedPlacement = VALID_PLACEMENTS.has(placement)
    ? placement
    : regionPlacement;
  const resolvedDuration = Number.isFinite(Number(duration))
    ? Math.max(0, Number(duration))
    : 0;
  const content = children ?? message;
  onCloseRef.current = onClose;

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      color: resolvedColor,
      message,
      closable,
      closeLabel,
      showIcon,
      round,
      size: resolvedSize,
      duration: resolvedDuration,
      motion: resolvedMotion,
      placement,
      role,
    },
    createDemoSlots({ default: children, icon, action }),
    rootRef,
    {
      className,
      onClose,
      onMouseEnter,
      onMouseLeave,
      onFocusCapture,
      onBlurCapture,
      onKeyDown,
      onAnimationEnd,
      ...rest,
    },
  );

  function clearAutoDismissTimer() {
    if (timerRef.current == null) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  }

  function clearExitFallback() {
    if (exitFallbackRef.current == null) return;
    window.clearTimeout(exitFallbackRef.current);
    exitFallbackRef.current = null;
  }

  function clearEnterFallback() {
    if (enterFallbackRef.current == null) return;
    window.clearTimeout(enterFallbackRef.current);
    enterFallbackRef.current = null;
  }

  function finishClose() {
    clearAutoDismissTimer();
    clearEnterFallback();
    clearExitFallback();
    setVisible(false);
    const payload = closePayloadRef.current;
    closePayloadRef.current = null;
    onCloseRef.current?.(payload?.reason ?? 'close', payload?.event);
  }

  function dismiss(reason, event) {
    if (phase === 'leaving' || !visible) return;

    clearAutoDismissTimer();
    closePayloadRef.current = { reason, event };

    if (resolvedMotion === 'none') {
      finishClose();
      return;
    }

    setPhase('leaving');
    exitFallbackRef.current = window.setTimeout(finishClose, EXIT_FALLBACK_MS);
  }

  function startAutoDismissTimer() {
    if (
      !visible ||
      resolvedDuration === 0 ||
      remainingDurationRef.current <= 0 ||
      pauseReasonsRef.current.size > 0 ||
      timerRef.current != null
    ) {
      return;
    }

    timerStartedAtRef.current = Date.now();
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      remainingDurationRef.current = 0;
      dismiss('timeout');
    }, remainingDurationRef.current);
  }

  function pauseAutoDismiss(reason) {
    pauseReasonsRef.current.add(reason);

    if (timerRef.current == null) return;

    const elapsed = Date.now() - timerStartedAtRef.current;
    remainingDurationRef.current = Math.max(0, remainingDurationRef.current - elapsed);
    clearAutoDismissTimer();
  }

  function resumeAutoDismiss(reason) {
    pauseReasonsRef.current.delete(reason);
    startAutoDismissTimer();
  }

  useEffect(() => {
    if (resolvedMotion === 'none') {
      setPhase('open');
    }
  }, [resolvedMotion]);

  useEffect(() => {
    if (phase !== 'entering' || resolvedMotion === 'none') return undefined;

    enterFallbackRef.current = window.setTimeout(
      () => setPhase('open'),
      EXIT_FALLBACK_MS,
    );

    return clearEnterFallback;
  }, [phase, resolvedMotion]);

  useEffect(() => {
    if (phase !== 'open') return undefined;

    remainingDurationRef.current = resolvedDuration;
    pauseReasonsRef.current.clear();
    clearAutoDismissTimer();
    startAutoDismissTimer();

    return clearAutoDismissTimer;
  }, [phase, resolvedDuration, visible]);

  useEffect(() => {
    return () => {
      clearAutoDismissTimer();
      clearEnterFallback();
      clearExitFallback();
    };
  }, []);

  const rootClass = useMemo(() => {
    const classes = [
      'snackbar',
      resolvedColor === 'danger' ? 'color_error' : `color_${resolvedColor}`,
    ];
    if (resolvedSize === 'sm') classes.push('snackbar_sm');
    if (resolvedSize === 'lg') classes.push('snackbar_lg');
    if (round) classes.push('snackbar_round');
    classes.push(`snackbar_motion-${resolvedMotion}`);
    classes.push(`snackbar_placement-${resolvedPlacement}`);
    classes.push(`is-${phase}`);
    return classes;
  }, [phase, resolvedColor, resolvedMotion, resolvedPlacement, resolvedSize, round]);

  const { class: _ignoredClass, role: _ignoredRole, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  function handleClose(event) {
    dismiss('close', event);
  }

  function handleKeyDown(event) {
    if (closable && event.key === 'Escape') {
      event.preventDefault();
      dismiss('close', event);
    }

    onKeyDown?.(event);
  }

  function handleFocus(event) {
    if (event.currentTarget === event.target || !event.currentTarget.contains(event.relatedTarget)) {
      pauseAutoDismiss('focus');
    }
    onFocusCapture?.(event);
  }

  function handleBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      resumeAutoDismiss('focus');
    }
    onBlurCapture?.(event);
  }

  function handleMouseEnter(event) {
    pauseAutoDismiss('hover');
    onMouseEnter?.(event);
  }

  function handleMouseLeave(event) {
    resumeAutoDismiss('hover');
    onMouseLeave?.(event);
  }

  function handleAnimationEnd(event) {
    if (event.currentTarget !== event.target) return;

    if (phase === 'entering') {
      setPhase('open');
    } else if (phase === 'leaving') {
      finishClose();
    }

    onAnimationEnd?.(event);
  }

  const actionContent =
    typeof action === 'function'
      ? action({ close: (event) => dismiss('action', event) })
      : action;

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className={cn(rootClass, className)}
      role={role}
      aria-live={role === 'alert' ? 'assertive' : 'polite'}
      aria-atomic="true"
      aria-relevant="additions text"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={handleFocus}
      onBlurCapture={handleBlur}
      onKeyDown={handleKeyDown}
      onAnimationEnd={handleAnimationEnd}
      {...domRest}
    >
      {showIcon ? (
        <span className="snackbar_icon-wrap" data-demo-slot="icon" aria-hidden="true">
          {icon ?? (
            <Icon
              name={SNACKBAR_ICONS[resolvedColor] ?? 'info'}
              className="snackbar_icon"
            />
          )}
        </span>
      ) : null}
      <div className="snackbar_message">{content}</div>
      {actionContent != null ? (
        <div className="snackbar_action" data-demo-slot="action">
          {actionContent}
        </div>
      ) : null}
      {closable ? (
        <Button
          variant="ghost"
          iconOnly
          className="snackbar_close"
          ariaLabel={closeLabel}
          iconBefore={<Icon name="close" size="sm" />}
          onClick={handleClose}
          {...rippleAttrs}
        />
      ) : null}
    </div>
  );
}
