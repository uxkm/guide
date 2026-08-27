/**
 * StepsItem 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
import Icon from '../../basic/Icon/Icon.jsx';

const statuses = new Set(['finished', 'active', 'wait', 'error']); // 지원하는 단계 상태입니다.

export function StepsItem({
  title, // 단계 제목 텍스트입니다.
  description, // 제목 아래 보조 설명입니다.
  status = 'wait', // finished·active·wait·error 중 현재 상태입니다.
  index = 0, // 인디케이터에 표시할 단계 번호입니다.
  isLast = false, // 마지막 단계여서 연결선을 숨길지 여부입니다.
  navigable = false, // 버튼으로 감싸 클릭 탐색을 허용할지 여부입니다.
  icon, // 상태 기본 아이콘 대신 사용할 사용자 정의 인디케이터입니다.
  completeIcon, // 완료 상태에서 사용할 아이콘입니다.
  errorIcon, // 오류 상태에서 사용할 아이콘입니다.
  children, // 기본 머리·본문 대신 사용할 사용자 정의 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClick, // 탐색 가능 단계에서 클릭 시 호출할 콜백입니다.
  ...props // id, aria-* 등 나머지 속성을 li에 전달합니다.
}) {
  const resolved = statuses.has(status) ? status : 'wait'; // 검증된 상태입니다.

  // 사용자 아이콘이 없으면 상태별 기본 인디케이터를 선택합니다.
  const indicator =
    icon ??
    (resolved === 'finished' ? (
      (completeIcon ?? <Icon name="check" className="steps_icon" />)
    ) : resolved === 'error' ? (
      (errorIcon ?? <Icon name="close" className="steps_icon" />)
    ) : (
      <span className="steps_index">{index}</span>
    ));

  // 탐색 가능 모드에서 쓰는 머리와 연결선입니다.
  const head = (
    <span className="steps_head">
      <span className="steps_indicator" aria-hidden="true">
        {indicator}
      </span>
      {!isLast && <span className="steps_tail" aria-hidden="true" />}
    </span>
  );

  // 탐색 가능 모드에서 쓰는 제목·설명입니다.
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
