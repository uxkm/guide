/**
 * Tag 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 지원하지 않는 variant와 size는 각각 filled와 md로 정규화합니다.
const VALID_VARIANTS = new Set(['filled', 'solid', 'outline', 'borderless']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const CloseIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

// 외형, 상호작용, 상태, 접근성 값을 하나의 Tag API로 조합합니다.
export function Tag({
  children, // 태그 텍스트입니다. 없으면 label을 사용합니다.
  label, // children 대신 표시할 텍스트입니다.
  icon, // 텍스트 앞 아이콘입니다.
  color = 'primary', // color_* 공통 색상 클래스입니다.
  variant = 'filled', // filled · solid · outline · borderless 스킨입니다.
  size = 'md', // sm · md · lg 크기입니다.
  round = false, // 둥근 pill 형태입니다.
  checkable = false, // 선택 가능한 태그입니다.
  add = false, // 추가(+) 트리거 태그입니다.
  closable = false, // 닫기 버튼 표시 여부입니다.
  selected = false, // 선택된 상태입니다.
  disabled = false, // 비활성 상태입니다.
  ripple, // 리플 효과입니다. 상호작용 태그에서 기본 켜짐입니다.
  href, // 링크형 태그의 주소입니다.
  closeLabel, // 닫기 버튼 접근성 이름입니다.
  className = '', // 추가 클래스입니다.
  onClick, // 클릭 핸들러입니다.
  onClose, // 닫기 버튼 클릭 핸들러입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // prop에 따라 루트 의미와 닫기 버튼 분리 여부를 결정합니다.
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'filled';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const interactive = checkable || add || Boolean(href);
  const splitControl = closable && interactive;
  // 외형과 상태를 tag_* · color_* · is-* 공통 클래스로 변환합니다.
  const classes = [
    'tag',
    `color_${color}`,
    resolvedVariant !== 'filled' && `tag_${resolvedVariant}`,
    resolvedSize !== 'md' && `tag_${resolvedSize}`,
    round && 'tag_round',
    checkable && 'tag_checkable',
    add && 'tag_add',
    selected && 'is-selected',
    disabled && 'is-disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  // 클릭 가능한 Tag에만 기본 리플 효과를 적용합니다.
  const rippleProps =
    ripple === false
      ? { 'data-ripple': 'false' }
      : ripple === true || interactive
        ? { 'data-ripple': 'true' }
        : {};
  const content = (
    <>
      {icon ? (
        <span className="tag_icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children ?? label}
    </>
  );
  // 닫기는 독립 버튼이며 부모 Tag의 클릭 이벤트 전파를 막습니다.
  const closeButton = closable ? (
    <button
      className="tag_close"
      type="button"
      aria-label={
        closeLabel ||
        (typeof (label ?? children) === 'string' ? `${label ?? children} 태그 제거` : '태그 제거')
      }
      disabled={disabled || undefined}
      onClick={(event) => {
        event.stopPropagation();
        onClose?.(event);
      }}
    >
      <CloseIcon />
    </button>
  ) : null;

  // 비활성 Tag는 기본 동작과 사용자 이벤트를 모두 차단합니다.
  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  }

  // 클릭 가능한 본문과 닫기 버튼이 함께 있으면 인터랙티브 요소를 형제로 분리합니다.
  if (splitControl) {
    const Control = checkable || add ? 'button' : 'a';
    return (
      <span
        {...props}
        className={classes}
        data-component="Tag"
        aria-disabled={disabled || undefined}
      >
        <Control
          className="tag_control"
          {...rippleProps}
          type={Control === 'button' ? 'button' : undefined}
          href={Control === 'a' && !disabled ? href : undefined}
          disabled={Control === 'button' ? disabled : undefined}
          aria-disabled={Control === 'a' && disabled ? true : undefined}
          aria-pressed={checkable ? selected : undefined}
          tabIndex={Control === 'a' && disabled ? -1 : undefined}
          onClick={handleClick}
        >
          {content}
        </Control>
        {closeButton}
      </span>
    );
  }

  // 선택·추가는 button, URL 이동은 a, 정적 Tag는 span을 사용합니다.
  const Root = checkable || add ? 'button' : href ? 'a' : 'span';
  return (
    <Root
      {...props}
      {...rippleProps}
      aria-disabled={Root !== 'button' && disabled ? true : undefined}
      aria-pressed={checkable ? selected : undefined}
      className={classes}
      data-component="Tag"
      disabled={Root === 'button' ? disabled : undefined}
      href={Root === 'a' && !disabled ? href : undefined}
      onClick={handleClick}
      tabIndex={Root === 'a' && disabled ? -1 : undefined}
      type={Root === 'button' ? 'button' : undefined}
    >
      {content}
      {closeButton}
    </Root>
  );
}

export function TagGroup({
  children, // 그룹에 배치할 Tag들입니다.
  tight = false, // 좁은 간격 변형 여부입니다.
  ariaLabel, // 그룹의 접근 가능한 이름입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 관련 Tag를 접근 가능한 그룹으로 묶고 tight 간격을 선택적으로 적용합니다.
  const classes = ['tag_group', tight && 'tag_group-tight', className].filter(Boolean).join(' ');
  return (
    <div
      {...props}
      aria-label={ariaLabel}
      className={classes}
      data-component="TagGroup"
      role="group"
    >
      {children}
    </div>
  );
}

export default Tag;
