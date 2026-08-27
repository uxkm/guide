/**
 * BackTop 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { initBackTop } from '../../../../../html/src/components/miscellaneous/BackTop/back-top.js';

const arrow = (
  <svg
    className="back_top_icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);
export function BackTop({
  target,
  visibilityHeight = 400,
  size = 'md',
  color = '',
  label,
  ariaLabel = '맨 위로',
  interactive = true,
  ripple = true,
  children,
  className = '',
  style,
  ...props
}) {
  const rootRef = useRef(null);
  const resolvedSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  const resolvedColor = ['', 'primary', 'ghost'].includes(color) ? color : '';
  const classes = useMemo(
    () =>
      [
        'back_top',
        resolvedSize !== 'md' && `back_top_${resolvedSize}`,
        resolvedColor && `back_top_${resolvedColor}`,
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [className, resolvedColor, resolvedSize],
  );
  useEffect(() => {
    if (!interactive || !rootRef.current) return undefined;
    return initBackTop(rootRef.current);
  }, [interactive, target, visibilityHeight]);
  const node = (
    <div
      {...props}
      ref={rootRef}
      className={classes}
      style={style}
      data-component="BackTop"
      data-back-top={interactive ? '' : undefined}
      data-target={target || undefined}
      data-visibility-height={Number(visibilityHeight) !== 400 ? visibilityHeight : undefined}
    >
      <button
        type="button"
        className="btn btn_ghost back_top_btn"
        aria-label={ariaLabel}
        data-ripple={ripple ? 'surface' : 'false'}
      >
        {children ?? (
          <>
            {arrow}
            {label ? <span className="back_top_label">{label}</span> : null}
          </>
        )}
      </button>
    </div>
  );
  return !target && typeof document !== 'undefined' ? createPortal(node, document.body) : node;
}
export default BackTop;
