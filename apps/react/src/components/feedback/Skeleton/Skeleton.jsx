/**
 * Skeleton 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { useMemo } from 'react';

const paragraphWidths = ['', 'skeleton_w-md', 'skeleton_w-sm'];

function paragraphCount(paragraph) {
  if (paragraph === true) return 3;
  return typeof paragraph === 'number' ? Math.max(0, paragraph) : 0;
}

export function Skeleton({
  active = true,
  avatar = false,
  paragraph = false,
  round = false,
  ariaLabel = '콘텐츠 로딩 중',
  children,
  className = '',
  ...props
}) {
  const count = paragraphCount(paragraph);
  const defaultCount = paragraph === false ? 3 : count;
  const groupClass = useMemo(
    () => ['skeleton_group', !active && 'skeleton_static', className].filter(Boolean).join(' '),
    [active, className],
  );
  const itemClass = ['skeleton', !active && 'skeleton_static'].filter(Boolean).join(' ');

  return (
    <div
      {...props}
      className={groupClass}
      data-component="Skeleton"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
    >
      {avatar ? (
        <div className="skeleton_row">
          <span className={`${itemClass} skeleton_circle`} aria-hidden="true" />
          {count > 0 && (
            <div className="skeleton_row-body">
              {Array.from({ length: count }, (_, index) => (
                <span
                  key={index}
                  className={[itemClass, 'skeleton_text', paragraphWidths[index] || 'skeleton_w-lg']
                    .filter(Boolean)
                    .join(' ')}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}
        </div>
      ) : round ? (
        <span className={`${itemClass} skeleton_circle`} aria-hidden="true" />
      ) : (
        <>
          <span className={`${itemClass} skeleton_title`} aria-hidden="true" />
          {Array.from({ length: defaultCount }, (_, index) => (
            <span
              key={index}
              className={[itemClass, 'skeleton_text', paragraphWidths[index]]
                .filter(Boolean)
                .join(' ')}
              aria-hidden="true"
            />
          ))}
        </>
      )}
      {children}
    </div>
  );
}

export default Skeleton;
