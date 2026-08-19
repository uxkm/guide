import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg']);

export function EmptyImage() {
  return <Icon name="inbox" />;
}

export function Empty({ description, size = 'md', simple = false, block = false, icon, image, footer, children, className = '', ...props }) {
  const resolvedSize = sizes.has(size) ? size : 'md';
  const classes = ['empty', resolvedSize !== 'md' && `empty_${resolvedSize}`, simple && 'empty_simple', block && 'empty_block', className].filter(Boolean).join(' ');
  const content = children ?? description;
  return <div {...props} className={classes} data-component="Empty" role="status">{!simple && <div className="empty_image" data-slot="icon" aria-hidden="true">{icon ?? image ?? <EmptyImage />}</div>}{content != null && <div className="empty_desc" data-slot="description">{children ?? <p>{description}</p>}</div>}{footer != null && <div className="empty_footer">{footer}</div>}</div>;
}

export default Empty;
