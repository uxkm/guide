import { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
import { SnackbarPlacementContext, snackbarPlacements } from './SnackbarRegion.jsx';

const colors = new Set(['info', 'success', 'warning', 'danger']);
const sizes = new Set(['sm', 'md', 'lg']);
const motions = new Set(['fade', 'slide', 'none']);
const placements = new Set(snackbarPlacements);
const iconNames = { info: 'info', success: 'check-circle', warning: 'alert-triangle', danger: 'x-circle' };

export function Snackbar({
  children, message, color = 'info', size = 'md', motion = 'fade', placement,
  duration = 0, role = 'status', closable = false, closeLabel = '알림 닫기',
  showIcon = true, round = false, icon, action, className = '', onClose,
  onMouseEnter, onMouseLeave, onFocusCapture, onBlurCapture, onKeyDown,
  onAnimationEnd, ...props
}) {
  const regionPlacement = useContext(SnackbarPlacementContext);
  const timerRef = useRef(null);
  const startedAtRef = useRef(0);
  const remainingRef = useRef(0);
  const closeRef = useRef(null);
  const pauseReasonsRef = useRef(new Set());
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(motion === 'none' ? 'open' : 'entering');
  const resolvedColor = colors.has(color) ? color : 'info';
  const resolvedSize = sizes.has(size) ? size : 'md';
  const resolvedMotion = motions.has(motion) ? motion : 'fade';
  const resolvedPlacement = placements.has(placement) ? placement : regionPlacement;
  const resolvedDuration = Number.isFinite(Number(duration)) ? Math.max(0, Number(duration)) : 0;

  const clearTimer = () => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };
  const finishClose = () => {
    clearTimer();
    setVisible(false);
    const payload = closeRef.current;
    closeRef.current = null;
    onClose?.(payload?.reason ?? 'close', payload?.event);
  };
  const dismiss = (reason, event) => {
    if (!visible || phase === 'leaving') return;
    clearTimer();
    closeRef.current = { reason, event };
    if (resolvedMotion === 'none') finishClose();
    else setPhase('leaving');
  };
  const startTimer = () => {
    if (remainingRef.current <= 0 || timerRef.current !== null || pauseReasonsRef.current.size > 0) return;
    startedAtRef.current = Date.now();
    timerRef.current = window.setTimeout(() => dismiss('timeout'), remainingRef.current);
  };
  const pauseTimer = (reason) => {
    pauseReasonsRef.current.add(reason);
    if (timerRef.current === null) return;
    remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - startedAtRef.current));
    clearTimer();
  };
  const resumeTimer = (reason) => {
    pauseReasonsRef.current.delete(reason);
    startTimer();
  };

  useEffect(() => {
    if (phase !== 'entering') return undefined;
    const id = window.setTimeout(() => setPhase('open'), 250);
    return () => window.clearTimeout(id);
  }, [phase]);
  useEffect(() => {
    if (phase !== 'open' || resolvedDuration === 0) return undefined;
    remainingRef.current = resolvedDuration;
    pauseReasonsRef.current.clear();
    startTimer();
    return clearTimer;
  }, [phase, resolvedDuration]);
  useEffect(() => clearTimer, []);

  if (!visible) return null;

  const classes = [
    'snackbar',
    resolvedColor === 'danger' ? 'color_error' : `color_${resolvedColor}`,
    resolvedSize !== 'md' && `snackbar_${resolvedSize}`,
    round && 'snackbar_round',
    `snackbar_motion-${resolvedMotion}`,
    `snackbar_placement-${resolvedPlacement}`,
    `is-${phase}`,
    className,
  ].filter(Boolean).join(' ');
  const actionContent = typeof action === 'function'
    ? action({ close: (event) => dismiss('action', event) })
    : action;

  return (
    <div
      {...props}
      className={classes}
      data-component="Snackbar"
      role={role}
      aria-live={role === 'alert' ? 'assertive' : 'polite'}
      aria-atomic="true"
      aria-relevant="additions text"
      onMouseEnter={(event) => { pauseTimer('hover'); onMouseEnter?.(event); }}
      onMouseLeave={(event) => { resumeTimer('hover'); onMouseLeave?.(event); }}
      onFocusCapture={(event) => { pauseTimer('focus'); onFocusCapture?.(event); }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) resumeTimer('focus');
        onBlurCapture?.(event);
      }}
      onKeyDown={(event) => {
        if (closable && event.key === 'Escape') dismiss('close', event);
        onKeyDown?.(event);
      }}
      onAnimationEnd={(event) => {
        if (event.currentTarget === event.target) {
          if (phase === 'entering') setPhase('open');
          if (phase === 'leaving') finishClose();
        }
        onAnimationEnd?.(event);
      }}
    >
      {showIcon && (
        <span className="snackbar_icon-wrap" aria-hidden="true">
          {icon ?? <Icon name={iconNames[resolvedColor]} className="snackbar_icon" />}
        </span>
      )}
      <div className="snackbar_message">{children ?? message ?? 'Snackbar'}</div>
      {actionContent != null && <div className="snackbar_action">{actionContent}</div>}
      {closable && (
        <Button
          variant="ghost"
          iconOnly
          className="snackbar_close"
          ariaLabel={closeLabel}
          iconBefore={<Icon name="close" size="sm" />}
          onClick={(event) => dismiss('close', event)}
        />
      )}
    </div>
  );
}

export default Snackbar;
