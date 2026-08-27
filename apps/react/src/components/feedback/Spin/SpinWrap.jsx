/**
 * SpinWrap 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import Spin from './Spin.jsx';

export function SpinWrap({
  loading = false,
  block = false,
  blur = false,
  tip,
  ariaLabel = '로딩 중',
  children,
  className = '',
  ...props
}) {
  const classes = [
    'spin_wrap',
    block && 'spin_wrap-block',
    blur && 'spin_wrap-blur',
    loading && 'is-loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div {...props} className={classes} data-component="SpinWrap" aria-busy={loading || undefined}>
      <div className="spin_wrap-body">{children}</div>
      {loading && <Spin overlay tip={tip} ariaLabel={ariaLabel} />}
    </div>
  );
}

export default SpinWrap;
