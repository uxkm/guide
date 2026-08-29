import { component$ } from '@builder.io/qwik';
/**
 * Button 원본 구현.
 * 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
 */
// 셀렉트형 트리거에 붙는 캐럿 아이콘입니다.
const SelectCaret = () => (
  <svg
    aria-hidden="true"
    class="icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const Button = component$(({
  children, // 기본 슬롯 콘텐츠입니다. 없으면 label을 사용합니다.
  label = 'Button', // children 대신 표시할 텍스트입니다.
  ripple = true, // 클릭 리플 효과를 켭니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  variant = 'filled', // filled · outline · ghost · text · select 스킨입니다.
  color = 'primary', // ghost가 아닐 때 color_* 클래스로 적용됩니다.
  size = 'md', // sm · md · lg 크기입니다. md는 기본이라 클래스를 붙이지 않습니다.
  iconBefore, // 텍스트 앞에 렌더링할 아이콘입니다.
  iconAfter, // 텍스트 뒤에 렌더링할 아이콘입니다.
  iconOnly = false, // 텍스트 없이 아이콘만 표시합니다.
  vertical = false, // 아이콘 위·텍스트 아래 세로 배치입니다.
  round = false, // pill 형태 둥근 모서리입니다.
  block = false, // 부모 너비를 채웁니다.
  grow = false, // true면 btn_grow, '2'면 btn_grow-2입니다.
  fit = false, // 콘텐츠 너비를 유지합니다.
  loading = false, // 로딩 스피너를 표시하고 입력을 막습니다.
  open = false, // 셀렉트·팝오버 열림 상태입니다.
  error = false, // 오류 상태 클래스를 적용합니다.
  placeholder = false, // 셀렉트 플레이스홀더 스타일입니다.
  selectText = false, // 배경·테두리 없는 셀렉트 텍스트형입니다.
  selectCaret = false, // select가 아니어도 캐럿을 강제 표시합니다.
  disabled = false, // 네이티브 disabled입니다.
  ariaDisabled = false, // is-disabled와 aria-disabled만 적용합니다.
  ariaLabel, // 아이콘 전용 버튼 등의 접근성 이름입니다.
  haspopup, // aria-haspopup 값입니다.
  expanded, // aria-expanded 값입니다. 없으면 open을 사용합니다.
  invalid = false, // aria-invalid를 켭니다.
  tag: Tag = 'button', // button · a · div 루트 태그입니다.
  href, // tag가 a일 때 링크 주소입니다.
  role, // 명시적 role이 있으면 우선합니다.
  tabIndex, // 명시적 tabindex가 있으면 우선합니다.
  type = 'button', // button 루트의 type입니다.
  onClick, // 클릭 핸들러입니다.
  onKeyDown, // 키다운 핸들러입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  // disabled · aria-disabled · loading이면 상호작용을 막습니다.
  const inactive = disabled || ariaDisabled || loading;
  const isButton = Tag === 'button';
  const isLink = Tag === 'a';
  // div이거나 href 없는 a는 버튼 역할과 키보드 조작이 필요합니다.
  const needsButtonSemantics = Tag === 'div' || (isLink && !href);
  // 스킨·색상·크기·레이아웃·상태 클래스를 조합합니다.
  const classes = [
    'btn',
    variant === 'select' ? 'btn_select' : `btn_${variant}`,
    variant !== 'ghost' ? `color_${color}` : '',
    size !== 'md' ? `btn_${size}` : '',
    selectText ? 'btn_select-text' : '',
    placeholder ? 'btn_select-placeholder' : '',
    iconOnly ? 'btn_icon-only' : '',
    vertical ? 'btn_vertical' : '',
    round ? 'btn_round' : '',
    block ? 'btn_block' : '',
    grow === true ? 'btn_grow' : '',
    grow === '2' ? 'btn_grow-2' : '',
    fit ? 'btn_fit' : '',
    ariaDisabled ? 'is-disabled' : '',
    loading ? 'is-loading' : '',
    open ? 'is-open' : '',
    error ? 'is-error' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  function handleClick(event) {
    if (inactive) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  }

  function handleKeyDown(event) {
    if (inactive) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    // 시맨틱이 필요한 루트에서는 Enter·Space로 클릭을 흉내 냅니다.
    if (needsButtonSemantics && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      event.currentTarget.click();
    }
    onKeyDown?.(event);
  }

  return (
    <Tag
      {...props}
      aria-busy={loading || undefined}
      aria-disabled={ariaDisabled || (!isButton && disabled) || undefined}
      aria-expanded={expanded ?? (open || undefined)}
      aria-haspopup={haspopup}
      aria-invalid={invalid || error || undefined}
      aria-label={ariaLabel}
      class={classes}
      data-component="Button"
      data-ripple={ripple ? 'true' : 'false'}
      disabled={isButton ? disabled : undefined}
      href={isLink ? href : undefined}
      onClick$={handleClick}
      onKeyDown$={handleKeyDown}
      role={role ?? (needsButtonSemantics ? 'button' : undefined)}
      tabIndex={inactive && !isButton ? -1 : (tabIndex ?? (needsButtonSemantics ? 0 : undefined))}
      type={isButton ? type : undefined}
    >
      {loading ? <span aria-hidden="true" class="btn_spinner" /> : null}
      {iconBefore}
      {!iconOnly ? <span class="btn_label">{children ?? label}</span> : children}
      {iconAfter}
      {variant === 'select' || selectCaret ? <SelectCaret /> : null}
    </Tag>
  );
});

export default Button;
