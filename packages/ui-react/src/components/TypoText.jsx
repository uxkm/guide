import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VARIANT_MAP = {
  paragraph: { tag: 'p', className: 'typo_paragraph' },
  lead: { tag: 'p', className: 'typo_lead' },
  caption: { tag: 'p', className: 'typo_caption' },
  label: { tag: 'label', className: 'typo_label' },
  overline: { tag: 'p', className: 'typo_overline' },
  code: { tag: 'code', className: 'typo_code' },
  kbd: { tag: 'kbd', className: 'typo_kbd' },
  pre: { tag: 'pre', className: 'typo_pre' },
  strong: { tag: 'span', className: 'typo_strong' },
  italic: { tag: 'span', className: 'typo_italic' },
  underline: { tag: 'span', className: 'typo_underline' },
  delete: { tag: 'span', className: 'typo_delete' },
  mark: { tag: 'span', className: 'typo_mark' },
  sub: { tag: 'sub', className: 'typo_sub' },
  sup: { tag: 'sup', className: 'typo_sup' },
  small: { tag: 'small', className: 'typo_small' },
  link: { tag: 'a', className: 'typo_link' },
  blockquote: { tag: 'blockquote', className: 'typo_blockquote' },
  text: { tag: 'p', className: '' },
};

const VALID_SIZES = new Set(['', 'xs', 'sm', 'lg', 'xl']);

const formatCode = createComponentFormatter('TypoText', {
  defaults: { variant: 'text', ellipsis: 0 },
  skipProps: ['tag'],
  selfClosing: false,
});

export default function TypoText({
  variant = 'text',
  color,
  size = '',
  ellipsis,
  href,
  htmlFor,
  cite,
  label,
  tag,
  children,
  className,
  onClick,
  ...rest
}) {
  const rootRef = useRef(null);
  const variantConfig = VARIANT_MAP[variant] || VARIANT_MAP.text;
  const resolvedSize = VALID_SIZES.has(size) ? size : '';
  const content = children ?? label;

  useComponentDemoCode(
    formatCode,
    {
      variant,
      color,
      size: resolvedSize,
      ellipsis,
      href,
      htmlFor,
      cite,
      label,
    },
    createDemoSlots({ default: content }),
    rootRef,
    { className, onClick, ...rest },
  );

  const ellipsisLines = useMemo(() => {
    if (ellipsis == null || ellipsis === '') return 0;
    const lines = Number(ellipsis);
    return lines >= 1 && lines <= 3 ? lines : 0;
  }, [ellipsis]);

  const rootClass = useMemo(() => {
    const classes = [];
    if (variantConfig.className) classes.push(variantConfig.className);
    if (color) classes.push(`color_${color}`);
    if (resolvedSize === 'xs') classes.push('size_xs');
    if (resolvedSize === 'sm') classes.push('size_sm');
    if (resolvedSize === 'lg') classes.push('size_lg');
    if (resolvedSize === 'xl') classes.push('size_xl');
    if (ellipsisLines === 1) classes.push('text_ellipsis');
    if (ellipsisLines === 2) classes.push('text_ellipsis-2');
    if (ellipsisLines === 3) classes.push('text_ellipsis-3');
    return classes;
  }, [variantConfig.className, color, resolvedSize, ellipsisLines]);

  const Tag = tag || variantConfig.tag;
  const domRest = normalizeDomProps(rest);

  function handleClick(event) {
    if (variant === 'link' && !href) {
      event.preventDefault();
    }
    onClick?.(event);
  }

  return (
    <Tag
      ref={rootRef}
      className={cn(rootClass, className)}
      href={variant === 'link' ? href || '#' : undefined}
      htmlFor={variant === 'label' ? htmlFor : undefined}
      cite={variant === 'blockquote' ? cite : undefined}
      onClick={variant === 'link' ? handleClick : onClick}
      {...domRest}
    >
      {content}
    </Tag>
  );
}
