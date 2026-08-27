/**
 * Empty 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg']);

export function EmptyImage() {
  return <Icon name="inbox" />;
}

export function Empty({
  description,
  size = 'md',
  simple = false,
  block = false,
  icon,
  image,
  footer,
  children,
  className = '',
  ...props
}) {
  const resolvedSize = sizes.has(size) ? size : 'md';
  const classes = [
    'empty',
    resolvedSize !== 'md' && `empty_${resolvedSize}`,
    simple && 'empty_simple',
    block && 'empty_block',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const content = children ?? description;
  return (
    <div {...props} className={classes} data-component="Empty" role="status">
      {!simple && (
        <div className="empty_image" data-slot="icon" aria-hidden="true">
          {icon ?? image ?? <EmptyImage />}
        </div>
      )}
      {content != null && (
        <div className="empty_desc" data-slot="description">
          {children ?? <p>{description}</p>}
        </div>
      )}
      {footer != null && <div className="empty_footer">{footer}</div>}
    </div>
  );
}

export default Empty;
