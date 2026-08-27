/**
 * Alert 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
import { useState } from 'react';

// 의미 색상별 기본 SVG 아이콘 경로입니다.
const iconPaths = {
  info: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </>
  ),
  success: (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </>
  ),
  warning: (
    <>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  danger: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </>
  ),
};

export function Alert({
  color = 'info', // 의미 색상입니다. danger는 color_error를 사용합니다.
  title, // 알림 제목입니다.
  description, // 본문 설명입니다. children이 있으면 우선합니다.
  closable = false, // 닫기 버튼 표시 여부입니다.
  showIcon = true, // 상태 아이콘 표시 여부입니다.
  size = 'md', // 알림 크기입니다.
  banner = false, // 배너형(전체 너비) 변형입니다.
  role = 'alert', // 접근성 역할입니다.
  icon, // 기본 아이콘 대신 사용할 커스텀 아이콘입니다.
  actions, // 본문 아래 액션 영역입니다.
  children, // description 대신 사용할 본문 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  closeLabel = '알림 닫기', // 닫기 버튼의 접근성 이름입니다.
  onClose, // 닫기 버튼 클릭 시 호출됩니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 닫기 전까지 알림을 화면에 유지합니다.
  const [visible, setVisible] = useState(true);

  // 닫힌 뒤에는 DOM에서 제거합니다.
  if (!visible) {
    return null;
  }

  // 지원하지 않는 색상은 info로 되돌립니다.
  const resolvedColor = ['info', 'success', 'warning', 'danger'].includes(color) ? color : 'info';
  // danger는 디자인 토큰의 color_error와 맞춥니다.
  const colorClass = resolvedColor === 'danger' ? 'color_error' : `color_${resolvedColor}`;
  // 루트·색상·크기·배너·사용자 클래스를 조합합니다.
  const classes = [
    'alert', // Alert 루트 클래스입니다.
    colorClass, // 의미 색상 클래스입니다.
    size !== 'md' && `alert_${size}`, // md가 아닐 때만 크기 변형입니다.
    banner && 'alert_banner', // 배너형 레이아웃입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.
  // children이 있으면 description보다 우선합니다.
  const content = children ?? description;

  // 내부 표시 상태를 끄고 외부 onClose를 알립니다.
  const handleClose = (event) => {
    setVisible(false);
    onClose?.(event);
  };

  return (
    <div className={classes} data-component="Alert" role={role} {...props}>
      {/* 아이콘 슬롯: 커스텀 icon이 없으면 색상별 기본 SVG를 사용합니다. */}
      {showIcon &&
        (icon ?? (
          <svg
            className="alert_icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {iconPaths[resolvedColor]}
          </svg>
        ))}

      {/* 제목·본문·액션을 담는 본문 영역입니다. */}
      <div className="alert_body">
        {title && <div className="alert_title">{title}</div>}
        {content && <p className="alert_desc">{content}</p>}
        {actions}
      </div>

      {/* closable일 때만 닫기 버튼을 렌더합니다. */}
      {closable && (
        <button type="button" className="alert_close" aria-label={closeLabel} onClick={handleClose}>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Alert;
