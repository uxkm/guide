/**
 * Icon 원본 구현.
 * 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
 */
// 아이콘 이름 → SVG path 맵입니다.
const paths = {
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </>
  ),
  trash: (
    <>
      <path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14M10 11v6m4-6v6" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  warning: (
    <>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9v4m0 3h.01" />
    </>
  ),
  chevron: <path d="m9 6 6 6-6 6" />,
  'chevron-left': <path d="m15 6-6 6 6 6" />,
  'chevron-right': <path d="m9 6 6 6-6 6" />,
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  inbox: (
    <>
      <path d="M4 5h16l2 9v5H2v-5l2-9Z" />
      <path d="M2 14h5l2 3h6l2-3h5" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  edit: (
    <>
      <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
      <path d="m13.5 6.5 4 4" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5l-.4 3.1a8 8 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2L3 14.5l2 3.4 2.4-1a8 8 0 0 0 1.7 1l.4 3.1h5l.4-3.1a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2.1-1.5a7 7 0 0 0 .1-1Z" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10M10 21v-7h4v7" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6" height="6" />
      <rect x="14" y="4" width="6" height="6" />
      <rect x="4" y="14" width="6" height="6" />
      <rect x="14" y="14" width="6" height="6" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2 11h10l3-8H6" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </>
  ),
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  external: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 13v7H4V6h7" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 7v5h-5" />
      <path d="M19 12a7 7 0 1 0-2 5" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a3 3 0 0 1 3-2h5v18H7a3 3 0 0 0-3 2V5Z" />
      <path d="M20 5a3 3 0 0 0-3-2h-5v18h5a3 3 0 0 1 3 2V5Z" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  upload: (
    <>
      <path d="M5 16v5h14v-5" />
      <path d="M12 17V3m0 0-4 4m4-4 4 4" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6m0-10h.01" />
    </>
  ),
  'check-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  'alert-triangle': (
    <>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9v4m0 3h.01" />
    </>
  ),
  'x-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6m0-6-6 6" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M14 21h-4" />
    </>
  ),
  loader: <path d="M21 12a9 9 0 1 1-6.2-8.6" />,
  heart: (
    <path d="M20.8 5a5.5 5.5 0 0 0-7.8 0L12 6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.2A5.5 5.5 0 0 0 20.8 5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-2 2" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l2-2" />
    </>
  ),
  'arrow-left': <path d="M19 12H5m7 7-7-7 7-7" />,
};

export const iconNames = Object.keys(paths);

export function Icon({
  name = 'plus', // paths에 등록된 아이콘 이름입니다.
  children, // 커스텀 SVG 도형입니다. 있으면 name보다 우선합니다.
  className = '', // 추가 클래스입니다.
  title, // SVG title과 접근성 이름 후보입니다.
  ariaLabel, // 명시적 접근성 이름입니다.
  color, // color_* 공통 색상 클래스입니다.
  size = 'md', // sm · md · lg · xl 크기입니다. md는 기본이라 클래스를 붙이지 않습니다.
  inline = false, // 텍스트와 인라인 정렬합니다.
  spin = false, // 회전 애니메이션입니다.
  button = false, // button 래퍼로 감쌉니다.
  circle = false, // 원형 배경 래퍼로 감쌉니다.
  square = false, // 사각형 배경 래퍼로 감쌉니다.
  pulse = false, // circle과 함께 펄스 효과를 켭니다.
  ripple = true, // button일 때 리플 효과를 켭니다.
  ...props // 나머지 속성을 최외곽 요소에 전달합니다.
}) {
  const label = ariaLabel ?? props['aria-label'] ?? title;
  const sizeClass = size === 'md' ? '' : `icon_${size}`;
  const svgClasses = ['icon', sizeClass, spin && 'icon_spin'];
  const outerClasses = [
    button ? 'icon_button' : circle ? 'icon_circle' : square ? 'icon_square' : '',
    color && `color_${color}`,
    inline && 'icon_inline',
    pulse && circle && 'icon_pulse',
    circle && size === 'sm' && 'icon_circle-sm',
    circle && size === 'lg' && 'icon_circle-lg',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const content = children ?? paths[name] ?? null;
  const svg = (
    <svg
      aria-hidden={button || circle || square ? true : label ? undefined : true}
      aria-label={!button ? label : undefined}
      className={
        button || circle || square
          ? svgClasses.filter(Boolean).join(' ')
          : [svgClasses, outerClasses].flat().filter(Boolean).join(' ')
      }
      data-component="Icon"
      fill="none"
      role={!button && label ? 'img' : undefined}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...(!button && !circle && !square ? props : {})}
    >
      {title ? <title>{title}</title> : null}
      {content}
    </svg>
  );

  if (button)
    return (
      <button
        aria-label={label}
        className={outerClasses}
        data-ripple={ripple ? 'true' : 'false'}
        type="button"
        {...props}
      >
        {svg}
      </button>
    );
  if (circle || square)
    return (
      <span
        aria-label={label}
        aria-hidden={label ? undefined : true}
        className={outerClasses}
        role={label ? 'img' : undefined}
        {...props}
      >
        {svg}
      </span>
    );
  return svg;
}

export default Icon;
