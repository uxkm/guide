'use client';

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
  text: { tag: 'p', className: '' },
};

const VALID_SIZES = new Set(['', 'xs', 'sm', 'lg', 'xl']);
const VALID_COLORS = new Set([
  '',
  'default',
  'muted',
  'primary',
  'success',
  'warning',
  'danger',
  'info',
  'error',
]);
const VALID_ELLIPSIS = new Set([1, 2, 3, '1', '2', '3']);
const VALID_TAGS = new Set([
  'p',
  'span',
  'div',
  'label',
  'code',
  'kbd',
  'pre',
  'strong',
  'em',
  'u',
  'del',
  'mark',
  'sub',
  'sup',
  'small',
  'a',
  'blockquote',
  'abbr',
  'cite',
  'q',
  'time',
  'address',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]);

const formatCode = createComponentFormatter('TypoText', {
  defaults: { variant: 'text', ellipsis: 0 },
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
  const resolvedVariant = Object.hasOwn(VARIANT_MAP, variant) ? variant : 'text';
  const variantConfig = VARIANT_MAP[resolvedVariant];
  const resolvedColor = VALID_COLORS.has(color) ? color : '';
  const resolvedSize = VALID_SIZES.has(size) ? size : '';
  const resolvedTag = VALID_TAGS.has(tag) ? tag : variantConfig.tag;
  const content = children ?? label;

  useComponentDemoCode(
    formatCode,
    {
      variant: resolvedVariant,
      color: resolvedColor,
      size: resolvedSize,
      ellipsis,
      href,
      htmlFor,
      cite,
      label,
      tag: VALID_TAGS.has(tag) ? tag : undefined,
    },
    createDemoSlots({ default: content }),
    rootRef,
    { className, onClick, ...rest },
  );

  const ellipsisLines = useMemo(() => {
    return VALID_ELLIPSIS.has(ellipsis) ? Number(ellipsis) : 0;
  }, [ellipsis]);

  const rootClass = useMemo(() => {
    const classes = [];
    if (variantConfig.className) classes.push(variantConfig.className);
    if (resolvedColor) classes.push(`color_${resolvedColor}`);
    if (resolvedSize === 'xs') classes.push('size_xs');
    if (resolvedSize === 'sm') classes.push('size_sm');
    if (resolvedSize === 'lg') classes.push('size_lg');
    if (resolvedSize === 'xl') classes.push('size_xl');
    if (ellipsisLines === 1) classes.push('text_ellipsis');
    if (ellipsisLines === 2) classes.push('text_ellipsis-2');
    if (ellipsisLines === 3) classes.push('text_ellipsis-3');
    return classes;
  }, [variantConfig.className, resolvedColor, resolvedSize, ellipsisLines]);

  const Tag = resolvedTag;
  const domRest = normalizeDomProps(rest);

  function handleClick(event) {
    if (resolvedTag === 'a' && !href) {
      event.preventDefault();
    }
    onClick?.(event);
  }

  return (
    <Tag
      ref={rootRef}
      className={cn(rootClass, className)}
      href={resolvedTag === 'a' ? href : undefined}
      htmlFor={resolvedTag === 'label' ? htmlFor : undefined}
      cite={resolvedTag === 'blockquote' ? cite : undefined}
      onClick={resolvedTag === 'a' ? handleClick : onClick}
      {...domRest}
    >
      {content}
    </Tag>
  );
}
