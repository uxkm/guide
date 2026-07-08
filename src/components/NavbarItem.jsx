import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useNavbarItemDemoCode } from '@/hooks/useDemoCode';

export default function NavbarItem({
  ripple,
  label,
  href = '#',
  active = false,
  badge,
  children,
}) {
  const props = { ripple, label, href, active };
  const { rippleAttrs } = useRipple(props);
  const rootRef = useRef(null);
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children ?? label, badge }),
    [children, label, badge],
  );

  useNavbarItemDemoCode(props, rootRef);

  return (
    <li ref={rootRef} className="navbar_item">
      <a
        {...rippleAttrs}
        href={href}
        className={cn('navbar_link', active && 'is-active')}
        aria-current={active ? 'page' : undefined}
        onClick={(e) => e.preventDefault()}
      >
        {children ?? label}
        {badge}
      </a>
    </li>
  );
}
