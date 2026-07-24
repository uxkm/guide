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
  children,
  className,
  onClick,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const rootRef = useRef(null);
  const content = children ?? label;

  useNavbarItemDemoCode({ ripple, label, href, active }, rootRef);

  const linkClass = useMemo(() => {
    const classes = ['navbar_link'];
    if (active) classes.push('is-active');
    return classes;
  }, [active]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const handleClick = (event) => {
    event.preventDefault();
    onClick?.(event);
  };

  return (
    <li ref={rootRef} className={cn('navbar_item', className)} {...domRest}>
      <a
        {...rippleAttrs}
        href={href}
        className={cn(linkClass)}
        aria-current={active ? 'page' : undefined}
        onClick={handleClick}
      >
        {content}
        {badge}
      </a>
    </li>
  );
}
