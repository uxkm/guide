const sizes = new Set(['sm', 'md', 'lg']);
const colors = new Set(['primary', 'success', 'warning', 'danger']);

export function Spin({ size = 'md', tip, color = 'primary', inline = false, block = false, overlay = false, ariaLabel = '로딩 중', children, className = '', ...props }) {
  const resolvedSize = sizes.has(size) ? size : 'md';
  const resolvedColor = colors.has(color) ? color : 'primary';
  const classes = ['spin', `color_${resolvedColor}`, resolvedSize !== 'md' && `spin_${resolvedSize}`, inline && 'spin_inline', block && 'spin_block', overlay && 'spin_overlay', className].filter(Boolean).join(' ');
  return <div {...props} className={classes} data-component="Spin" role="status" aria-live="polite" aria-busy="true" aria-label={ariaLabel}><span className="spin_indicator" aria-hidden="true" />{tip && <p className="spin_tip">{tip}</p>}{children}</div>;
}

export default Spin;
