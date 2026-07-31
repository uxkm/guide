'use client';

import { useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { useNavbarItemDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export default function NavbarItem({
  ripple,
  label,
  href = '#',
  active,
  badge,
  as,
  children,
  className,
  onClick,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const rootRef = useRef(null);
  const content = children ?? label;

  useNavbarItemDemoCode(
    {
      ripple,
      label,
      href,
      active,
      as: typeof as === 'string' ? as : undefined,
    },
    rootRef,
  );

  const linkClass = useMemo(() => {
    const classes = ['navbar_link'];
    if (active) classes.push('is-active');
    return classes;
  }, [active]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const Root = as || 'a';
  const acceptsHref = Root === 'a' || typeof Root !== 'string';

  const handleClick = (event) => {
    if (!href || href === '#') {
      event.preventDefault();
    }
    onClick?.(event);
  };

  return (
    <li ref={rootRef} className={cn('navbar_item', className)} {...domRest}>
      <Root
        {...rippleAttrs}
        href={acceptsHref ? href : undefined}
        type={Root === 'button' ? 'button' : undefined}
        className={cn(linkClass)}
        aria-current={active ? 'page' : undefined}
        onClick={handleClick}
      >
        {content}
        {badge}
      </Root>
    </li>
  );
}
