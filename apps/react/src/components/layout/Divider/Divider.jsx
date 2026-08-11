const ORIENTATIONS = new Set(['', 'left', 'right']);
const TAGS = new Set(['auto', 'hr', 'div', 'span']);

export function Divider({
  as, tag = 'auto', vertical = false, dashed = false, plain = false, orient, orientation = '', label,
  children, className = '', ...props
}) {
  const content = children ?? label;
  const resolvedOrient = orient ?? orientation;
  const resolvedTag = TAGS.has(tag) ? tag : 'auto';
  const Root = as || (resolvedTag !== 'auto' ? resolvedTag : vertical ? 'span' : content ? 'div' : 'hr');
  const classes = [
    'divider', vertical && 'divider_vertical', dashed && 'divider_dashed',
    plain && 'divider_plain', ORIENTATIONS.has(resolvedOrient) && resolvedOrient && `divider_orient-${resolvedOrient}`,
    className
  ].filter(Boolean).join(' ');
  const accessibility = vertical ? { 'aria-hidden': 'true' } : {};

  return <Root className={classes} data-component="Divider" {...accessibility} {...props}>{Root === 'hr' ? null : content}</Root>;
}

export default Divider;
