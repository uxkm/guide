/**
 * Link 원본 구현.
 * 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
 */
// 색상·크기 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const COLORS = ['primary', 'muted', 'success', 'warning', 'danger', 'info'];
const SIZES = ['', 'sm', 'lg', 'xl'];

export function Link({
  as: Root = 'a', // 루트 요소 또는 컴포넌트입니다. 기본은 a입니다.
  ripple = true, // 클릭 리플 효과를 켭니다.
  color = 'primary', // color_* 공통 색상 클래스입니다.
  size = '', // sm · lg · xl 크기입니다. 빈 값은 기본 크기입니다.
  underline = false, // 항상 밑줄을 표시합니다.
  noUnderline = false, // 밑줄을 제거합니다.
  standalone = false, // 터치 영역을 확대합니다.
  nav = false, // 내비게이션 링크 스타일입니다.
  block = false, // 블록형 링크입니다.
  back = false, // 뒤로가기 링크 스타일입니다.
  iconOnly = false, // 텍스트 없이 아이콘만 표시합니다.
  active = false, // 현재 페이지 활성 상태입니다.
  disabled = false, // 비활성 상태입니다.
  label, // children이 없을 때 표시할 텍스트입니다.
  href, // a 또는 커스텀 루트에 전달할 주소입니다.
  target, // 링크 target입니다.
  rel, // 링크 rel입니다.
  ariaLabel, // 아이콘 전용 링크 등의 접근성 이름입니다.
  icon, // 텍스트 앞에 렌더링할 아이콘입니다.
  iconAfter, // 텍스트 뒤에 렌더링할 아이콘입니다.
  children, // 링크 콘텐츠입니다.
  className = '', // 추가 클래스입니다.
  onClick, // 클릭 핸들러입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const resolvedColor = COLORS.includes(color) ? color : 'primary';
  const resolvedSize = SIZES.includes(size) ? size : '';
  const isAnchor = Root === 'a';
  const isButton = Root === 'button';
  // a이거나 컴포넌트 루트면 href를 전달합니다.
  const acceptsHref = isAnchor || typeof Root !== 'string';
  const content = children ?? label;
  const classes = [
    'link',
    `color_${resolvedColor}`,
    resolvedSize && `size_${resolvedSize}`,
    underline && 'link_underline',
    noUnderline && 'link_no-underline',
    standalone && 'link_standalone',
    nav && 'link_nav',
    block && 'link_block',
    back && 'link_back',
    iconOnly && 'link_icon-only',
    active && 'is-active',
    disabled && 'is-disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    // href가 없거나 #이면 페이지 점프를 막고 onClick만 실행합니다.
    if (!href || href === '#') event.preventDefault();
    onClick?.(event);
  }

  return (
    <Root
      {...props}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      aria-label={ariaLabel}
      className={classes}
      data-component="Link"
      data-ripple={ripple ? 'true' : 'false'}
      disabled={isButton ? disabled : undefined}
      href={acceptsHref ? href || '#' : undefined}
      onClick={handleClick}
      rel={acceptsHref ? rel : undefined}
      tabIndex={disabled ? -1 : props.tabIndex}
      target={acceptsHref ? target : undefined}
      type={isButton ? 'button' : undefined}
    >
      {icon}
      {!iconOnly ? content : null}
      {iconAfter}
    </Root>
  );
}

export default Link;
