import { createElement, useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const VARIANT_MAP = {
  paragraph: { tag: 'p', class: 'typo_paragraph' },
  lead: { tag: 'p', class: 'typo_lead' },
  caption: { tag: 'p', class: 'typo_caption' },
  label: { tag: 'label', class: 'typo_label' },
  overline: { tag: 'p', class: 'typo_overline' },
  code: { tag: 'code', class: 'typo_code' },
  kbd: { tag: 'kbd', class: 'typo_kbd' },
  pre: { tag: 'pre', class: 'typo_pre' },
  strong: { tag: 'span', class: 'typo_strong' },
  italic: { tag: 'span', class: 'typo_italic' },
  underline: { tag: 'span', class: 'typo_underline' },
  delete: { tag: 'span', class: 'typo_delete' },
  mark: { tag: 'span', class: 'typo_mark' },
  sub: { tag: 'sub', class: 'typo_sub' },
  sup: { tag: 'sup', class: 'typo_sup' },
  small: { tag: 'small', class: 'typo_small' },
  link: { tag: 'a', class: 'typo_link' },
  blockquote: { tag: 'blockquote', class: 'typo_blockquote' },
  text: { tag: 'p', class: '' },
};

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
  ...rest
}) {
  const props = { variant, color, size, ellipsis, href, htmlFor, cite, label, tag };
  const rootRef = useRef(null);
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children ?? label }),
    [children, label],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const variantConfig = VARIANT_MAP[variant] || VARIANT_MAP.text;
  const rootTag = tag || variantConfig.tag;

  const lines =
    ellipsis == null || ellipsis === '' ? 0 : Number(ellipsis) >= 1 && Number(ellipsis) <= 3 ? Number(ellipsis) : 0;

  const rootClass = cn(
    variantConfig.class,
    color && `color_${color}`,
    size === 'xs' && 'size_xs',
    size === 'sm' && 'size_sm',
    size === 'lg' && 'size_lg',
    size === 'xl' && 'size_xl',
    lines === 1 && 'text_ellipsis',
    lines === 2 && 'text_ellipsis-2',
    lines === 3 && 'text_ellipsis-3',
    className,
  );

  return createElement(
    rootTag,
    {
      ref: rootRef,
      className: rootClass,
      href: variant === 'link' ? href || '#' : undefined,
      htmlFor: variant === 'label' ? htmlFor : undefined,
      cite: variant === 'blockquote' ? cite : undefined,
      onClick: variant === 'link' && !href ? (e) => e.preventDefault() : undefined,
      ...rest,
    },
    children ?? label,
  );
}
