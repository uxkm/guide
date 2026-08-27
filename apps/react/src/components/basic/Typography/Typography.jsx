/**
 * Typography 원본 구현.
 * 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
 */
const TITLE_LEVELS = new Set([1, 2, 3, 4, 5, '1', '2', '3', '4', '5']);

const VARIANTS = {
  text: { tag: 'p', className: '' },
  paragraph: { tag: 'p', className: 'typo_paragraph' },
  lead: { tag: 'p', className: 'typo_lead' },
  caption: { tag: 'p', className: 'typo_caption' },
  label: { tag: 'label', className: 'typo_label' },
  overline: { tag: 'p', className: 'typo_overline' },
  code: { tag: 'code', className: 'typo_code' },
  kbd: { tag: 'kbd', className: 'typo_kbd' },
  pre: { tag: 'pre', className: 'typo_pre' },
  strong: { tag: 'strong', className: 'typo_strong' },
  italic: { tag: 'em', className: 'typo_italic' },
  underline: { tag: 'span', className: 'typo_underline' },
  delete: { tag: 'del', className: 'typo_delete' },
  mark: { tag: 'mark', className: 'typo_mark' },
  sub: { tag: 'sub', className: 'typo_sub' },
  sup: { tag: 'sup', className: 'typo_sup' },
  small: { tag: 'small', className: 'typo_small' },
  link: { tag: 'a', className: 'typo_link' },
  blockquote: { tag: 'blockquote', className: 'typo_blockquote' },
};

export function TypoTitle({ level = 1, color, label, children, className = '', ...props }) {
  const resolvedLevel = TITLE_LEVELS.has(level) ? Number(level) : 1;
  const Tag = `h${resolvedLevel}`;
  const classes = [`typo_title-${resolvedLevel}`, color && `color_${color}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag className={classes} data-component="TypoTitle" {...props}>
      {children ?? label}
    </Tag>
  );
}

export function TypoText({
  variant = 'text',
  tag,
  color,
  size = '',
  ellipsis,
  href,
  htmlFor,
  cite,
  label,
  children,
  className = '',
  onClick,
  ...props
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
      className={classes || undefined}
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
