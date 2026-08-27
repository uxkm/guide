/**
 * Card 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 지원하지 않는 크기와 스킨은 각각 md와 bordered로 정규화합니다.
const VALID_SIZES = new Set(['sm', 'md', 'lg', 'compact']);
const VALID_VARIANTS = new Set([
  'bordered',
  'default',
  'shadow',
  'flat',
  'borderless',
  'elevated',
  'ghost',
]);

// 루트 의미, 내부 영역, 외형, 상호작용 상태를 하나의 Card API로 조합합니다.
export function Card({
  as,
  tag,
  children,
  title,
  subtitle,
  header,
  extra,
  media,
  href,
  size = 'md',
  variant = 'bordered',
  horizontal = false,
  compact = false,
  hoverable = false,
  accent = false,
  color,
  disabled = false,
  ripple,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  // href는 링크, onClick은 버튼, 나머지는 기본 article 루트를 선택합니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'bordered';
  const interactive = Boolean(href || onClick);
  const Root = as || tag || (href ? 'a' : onClick ? 'button' : 'article');
  const variantClass =
    resolvedVariant === 'flat'
      ? 'card_ghost'
      : ['default', 'bordered'].includes(resolvedVariant)
        ? ''
        : `card_${resolvedVariant}`;
  // 외형·레이아웃·상태를 card_* · color_* · is-* 공통 클래스로 변환합니다.
  const classes = [
    'card',
    variantClass,
    resolvedSize !== 'md' && `card_${resolvedSize}`,
    horizontal && 'card_horizontal',
    compact && 'card_compact',
    hoverable && 'card_hover',
    accent && 'card_accent',
    color && `color_${color}`,
    interactive && 'card_clickable',
    disabled && 'is-disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  // 명시적인 헤더 데이터가 있을 때만 내장 header 구조를 렌더링합니다.
  const hasBuiltInHeader = title != null || subtitle != null || header != null || extra != null;

  // 비활성 Card는 링크 이동과 사용자 클릭 이벤트를 모두 차단합니다.
  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  }

  // 루트 종류에 맞춰 href · disabled · aria-disabled · tabIndex를 구분해 전달합니다.
  return (
    <Root
      {...props}
      className={classes}
      data-component="Card"
      data-ripple={ripple == null ? undefined : String(ripple)}
      disabled={Root === 'button' ? disabled : undefined}
      href={Root === 'a' && !disabled ? href : undefined}
      aria-disabled={interactive && disabled ? true : undefined}
      tabIndex={interactive && disabled ? -1 : props.tabIndex}
      onClick={interactive ? handleClick : undefined}
      type={Root === 'button' ? type : undefined}
    >
      {media}
      {hasBuiltInHeader ? (
        <div className="card_header">
          <div className="card_header-main">
            {header ?? (
              <>
                {title != null ? <h3 className="card_title">{title}</h3> : null}
                {subtitle != null ? <p className="card_subtitle">{subtitle}</p> : null}
              </>
            )}
          </div>
          {extra != null ? <div className="card_extra">{extra}</div> : null}
        </div>
      ) : null}
      {children}
    </Root>
  );
}

export function CardHeader({ children, title, subtitle, extra, className = '', ...props }) {
  // children이 있으면 제목·부제 조합보다 우선하고 extra는 별도 액션 영역에 둡니다.
  const classes = ['card_header', className].filter(Boolean).join(' ');
  return (
    <div {...props} className={classes}>
      <div className="card_header-main">
        {children ?? (
          <>
            {title != null ? <h3 className="card_title">{title}</h3> : null}
            {subtitle != null ? <p className="card_subtitle">{subtitle}</p> : null}
          </>
        )}
      </div>
      {extra != null ? <div className="card_extra">{extra}</div> : null}
    </div>
  );
}

export function CardBody({ children, className = '', ...props }) {
  // 본문 콘텐츠와 사용자 정의 속성을 card_body 영역에 전달합니다.
  const classes = ['card_body', className].filter(Boolean).join(' ');
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
}

export function CardFooter({ children, between = false, className = '', ...props }) {
  // between은 푸터 콘텐츠를 양끝 정렬하는 변형 클래스입니다.
  const classes = ['card_footer', between && 'card_footer-between', className]
    .filter(Boolean)
    .join(' ');
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
}

export function CardDeck({ children, columns, className = '', ...props }) {
  // columns는 지원하는 2·3열만 고정하고 나머지는 자동 반응형 그리드를 사용합니다.
  const resolvedColumns = [2, 3].includes(Number(columns)) ? Number(columns) : null;
  const classes = ['card_deck', resolvedColumns && `card_deck-${resolvedColumns}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <div {...props} className={classes} data-component="CardDeck">
      {children}
    </div>
  );
}

export default Card;
