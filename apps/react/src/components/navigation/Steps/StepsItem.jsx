/**
 * StepsItem 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import Icon from '../../basic/Icon/Icon.jsx';
const statuses = new Set(['finished', 'active', 'wait', 'error']);
export function StepsItem({
  title,
  description,
  status = 'wait',
  index = 0,
  isLast = false,
  navigable = false,
  icon,
  completeIcon,
  errorIcon,
  children,
  className = '',
  onClick,
  ...props
}) {
  const resolved = statuses.has(status) ? status : 'wait';
  const indicator =
    icon ??
    (resolved === 'finished' ? (
      (completeIcon ?? <Icon name="check" className="steps_icon" />)
    ) : resolved === 'error' ? (
      (errorIcon ?? <Icon name="close" className="steps_icon" />)
    ) : (
      <span className="steps_index">{index}</span>
    ));
  const head = (
    <span className="steps_head">
      <span className="steps_indicator" aria-hidden="true">
        {indicator}
      </span>
      {!isLast && <span className="steps_tail" aria-hidden="true" />}
    </span>
  );
  const content = (
    <span className="steps_content">
      <span className="steps_title">{title}</span>
      {description != null && <span className="steps_desc">{description}</span>}
    </span>
  );
  return (
    <li
      {...props}
      className={['steps_item', `is-${resolved}`, className].filter(Boolean).join(' ')}
      aria-current={!navigable && resolved === 'active' ? 'step' : undefined}
    >
      {navigable ? (
        <button
          type="button"
          className="steps_trigger"
          disabled={resolved === 'wait'}
          aria-current={resolved === 'active' ? 'step' : undefined}
          onClick={onClick}
        >
          {head}
          {content}
        </button>
      ) : (
        (children ?? (
          <>
            <div className="steps_head">
              <span className="steps_indicator" aria-hidden="true">
                {indicator}
              </span>
              {!isLast && <span className="steps_tail" aria-hidden="true" />}
            </div>
            <div className="steps_content">
              <p className="steps_title">{title}</p>
              {description != null && <p className="steps_desc">{description}</p>}
            </div>
          </>
        ))
      )}
    </li>
  );
}
export default StepsItem;
