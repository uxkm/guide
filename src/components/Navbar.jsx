import { useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useNavbarDemoCode } from '@/hooks/useDemoCode';

export default function Navbar({
  ripple,
  brand,
  size = 'md',
  borderless = false,
  dark = false,
  sticky = false,
  responsive = false,
  collapseId,
  brandContent,
  brandIcon,
  items,
  search,
  actions,
  children,
  className,
  ...rest
}) {
  const props = { ripple, brand, size, borderless, dark, sticky, responsive, collapseId };
  const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });
  const rootRef = useRef(null);
  const collapseTargetId =
    collapseId || `navbar-collapse-${Math.random().toString(36).slice(2, 9)}`;
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children, brand: brandContent, 'brand-icon': brandIcon, items, search, actions }),
    [children, brandContent, brandIcon, items, search, actions],
  );

  useNavbarDemoCode(props, rootRef, { class: className, ...rest, ...rippleAttrs });

  const rootClass = cn(
    'navbar',
    size === 'sm' && 'navbar_sm',
    size === 'lg' && 'navbar_lg',
    borderless && 'navbar_borderless',
    dark && 'navbar_dark',
    sticky && 'navbar_sticky',
    className,
  );

  return (
    <header
      ref={rootRef}
      className={rootClass}
      data-navbar={responsive || undefined}
      {...rippleAttrs}
      {...rest}
    >
      <div className="navbar_container">
        <a {...childRippleAttrs} href="#" className="navbar_brand" onClick={(e) => e.preventDefault()}>
          {brandContent ?? (
            <>
              {brandIcon}
              {brand}
            </>
          )}
        </a>
        {responsive && (
          <Button
            {...childRippleAttrs}
            variant="ghost"
            iconOnly
            className="navbar_toggle"
            data-navbar-toggle
            aria-expanded="false"
            aria-controls={collapseTargetId}
            aria-label="메뉴 열기"
            iconBefore={
              <>
                <Icon name="menu" size="sm" className="navbar_toggle-icon-open" />
                <Icon name="close" size="sm" className="navbar_toggle-icon-close" />
              </>
            }
          />
        )}
        <div className="navbar_collapse" id={collapseTargetId}>
          <nav className="navbar_nav" aria-label="주요 메뉴">
            {items ?? (
              children && <ul className="navbar_list">{children}</ul>
            )}
          </nav>
          {search && <div className="navbar_search">{search}</div>}
          {actions && <div className="navbar_actions">{actions}</div>}
        </div>
      </div>
    </header>
  );
}
