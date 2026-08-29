/**
 * Typography 원본 구현.
 * 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
 */
// TypoTitle이 허용하는 제목 단계입니다.
const TITLE_LEVELS = new Set([1, 2, 3, 4, 5, '1', '2', '3', '4', '5']);

// variant별 기본 시맨틱 태그와 typo_* 클래스 매핑입니다.
const VARIANTS = {
  text: { tag: 'p', class: '' },
  paragraph: { tag: 'p', class: 'typo_paragraph' },
  lead: { tag: 'p', class: 'typo_lead' },
  caption: { tag: 'p', class: 'typo_caption' },
  label: { tag: 'label', class: 'typo_label' },
  overline: { tag: 'p', class: 'typo_overline' },
  code: { tag: 'code', class: 'typo_code' },
  kbd: { tag: 'kbd', class: 'typo_kbd' },
  pre: { tag: 'pre', class: 'typo_pre' },
  strong: { tag: 'strong', class: 'typo_strong' },
  italic: { tag: 'em', class: 'typo_italic' },
  underline: { tag: 'span', class: 'typo_underline' },
  delete: { tag: 'del', class: 'typo_delete' },
  mark: { tag: 'mark', class: 'typo_mark' },
  sub: { tag: 'sub', class: 'typo_sub' },
  sup: { tag: 'sup', class: 'typo_sup' },
  small: { tag: 'small', class: 'typo_small' },
  link: { tag: 'a', class: 'typo_link' },
  blockquote: { tag: 'blockquote', class: 'typo_blockquote' },
};

export function TypoTitle({
  level = 1, // 1~5 제목 단계입니다. 허용되지 않으면 1로 되돌립니다.
  color, // color_* 공통 색상 클래스입니다.
  label, // children이 없을 때 표시할 텍스트입니다.
  children, // 제목 콘텐츠입니다.
  class: className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const resolvedLevel = TITLE_LEVELS.has(level) ? Number(level) : 1;
  const Tag = `h${resolvedLevel}`;
  const classes = [`typo_title-${resolvedLevel}`, color && `color_${color}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag class={classes} data-component="TypoTitle" {...props}>
      {children ?? label}
    </Tag>
  );
}

export function TypoText({
  variant = 'text', // 텍스트 변형 키입니다. VARIANTS 맵을 사용합니다.
  tag, // 기본 시맨틱 태그 대신 사용할 루트 태그입니다.
  color, // color_* 공통 색상 클래스입니다.
  size = '', // xs · sm · lg · xl 텍스트 크기입니다.
  ellipsis, // 1·2·3줄 말줄임 클래스를 적용합니다.
  href, // link 변형의 주소입니다.
  htmlFor, // label 변형의 for 연결입니다.
  cite, // blockquote 인용 출처입니다.
  label, // children이 없을 때 표시할 텍스트입니다.
  children, // 제목 또는 본문 콘텐츠입니다.
  class: className = '', // 추가 클래스입니다.
  onClick, // 클릭 핸들러입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const config = VARIANTS[variant] ?? VARIANTS.text;
  const Tag = tag || config.tag;
  const lines = Number(ellipsis);
  const ellipsisClass =
    lines === 1 ? 'text_ellipsis' : lines === 2 || lines === 3 ? `text_ellipsis-${lines}` : '';
  const sizeClass = ['xs', 'sm', 'lg', 'xl'].includes(size) ? `size_${size}` : '';
  const classes = [config.className, color && `color_${color}`, sizeClass, ellipsisClass, className]
    .filter(Boolean)
    .join(' ');

  function handleClick(event) {
    if (variant === 'link' && !href) event.preventDefault();
    onClick?.(event);
  }

  return (
    <Tag
      class={classes || undefined}
      cite={variant === 'blockquote' ? cite : undefined}
      data-component="TypoText"
      href={variant === 'link' ? href || '#' : undefined}
      htmlFor={variant === 'label' ? htmlFor : undefined}
      onClick={variant === 'link' ? handleClick : onClick}
      {...props}
    >
      {children ?? label}
    </Tag>
  );
}

export const Typography = TypoText;
export default TypoText;
