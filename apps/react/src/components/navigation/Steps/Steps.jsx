import { Children, cloneElement, isValidElement } from 'react';
import StepsItem from './StepsItem.jsx';

const directions = new Set(['horizontal', 'vertical']);
const sizes = new Set(['sm', 'md', 'lg']);
export function Steps({ current, direction = 'horizontal', size = 'md', dot = false, iconStyle = false, navigable = false, align = '', ariaLabel, items = [], children, className = '', onChange, ...props }) {
  const resolvedDirection = directions.has(direction) ? direction : 'horizontal';
  const resolvedSize = sizes.has(size) ? size : 'md';
  const classes = ['steps', resolvedDirection === 'vertical' && 'steps_vertical', resolvedSize !== 'md' && `steps_${resolvedSize}`, dot && 'steps_dot', iconStyle && 'steps_icon-style', navigable && 'steps_navigable', align === 'center' && 'steps_align-center', className].filter(Boolean).join(' ');
  const source = items.length ? items.map((item) => <StepsItem key={item.key ?? item.title} {...item} />) : Children.toArray(children).filter(isValidElement);
  return <ol {...props} className={classes} aria-label={ariaLabel} data-component="Steps" data-steps>{source.map((child, index) => { const step = index + 1; const status = child.props.status ?? (current == null ? 'wait' : step < current ? 'finished' : step === current ? 'active' : 'wait'); return cloneElement(child, { index: child.props.index ?? step, status, isLast: index === source.length - 1, navigable, onClick: status === 'wait' ? undefined : (event) => { child.props.onClick?.(event); if (status !== 'active') onChange?.(step); } }); })}</ol>;
}

export default Steps;
