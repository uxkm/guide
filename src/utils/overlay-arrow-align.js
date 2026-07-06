export const ARROW_TARGET_ALIGNS = ['center', 'top', 'bottom', 'left', 'right', 'start', 'end'];

export const arrowTargetAlignProp = {
  type: String,
  default: 'center',
  validator: (value) => ARROW_TARGET_ALIGNS.includes(value),
};

/** @param {'top' | 'bottom' | 'left' | 'right'} side */
export function normalizeArrowTargetAlign(align, side) {
  if (align === 'start') {
    return side === 'left' || side === 'right' ? 'top' : 'left';
  }
  if (align === 'end') {
    return side === 'left' || side === 'right' ? 'bottom' : 'right';
  }
  return align;
}

/** @param {'top' | 'bottom' | 'left' | 'right'} side */
export function getTriggerAxisPoint(triggerRect, side, align) {
  const point = normalizeArrowTargetAlign(align, side);

  if (side === 'left' || side === 'right') {
    if (point === 'top') return triggerRect.top;
    if (point === 'bottom') return triggerRect.bottom;
    return triggerRect.top + triggerRect.height / 2;
  }

  if (point === 'left') return triggerRect.left;
  if (point === 'right') return triggerRect.right;
  return triggerRect.left + triggerRect.width / 2;
}
