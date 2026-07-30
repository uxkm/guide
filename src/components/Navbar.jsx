import { useId, useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useNavbarDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

export default function Navbar({
  ripple,
  brand,
  size = 'md',
  borderless,
  dark,
  sticky,
  responsive,
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
  const rootRef = useRef(null);
  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });
  const reactId = useId().replace(/:/g, '');
  const collapseTargetId = collapseId || `navbar-collapse-${reactId}`;
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';

  useNavbarDemoCode(
    {
      ripple,
      brand,
      size: resolvedSize,
      borderless,
      dark,
      sticky,
      responsive,
      collapseId,
    },
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['navbar'];
    if (resolvedSize === 'sm') classes.push('navbar_sm');
    if (resolvedSize === 'lg') classes.push('navbar_lg');
    if (borderless) classes.push('navbar_borderless');
    if (dark) classes.push('navbar_dark');
    if (sticky) classes.push('navbar_sticky');
    return classes;
  }, [resolvedSize, borderless, dark, sticky]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);
  const brandInner = brandContent ?? (
    <>
      {brandIcon}
      {brand}
    </>
  );
  const navItems = items ?? (children ? <ul className="navbar_list">{children}</ul> : null);

  const handleBrandClick = (event) => {
    event.preventDefault();
  };

  return (
    <header
      ref={rootRef}
      className={cn(rootClass, className)}
      data-navbar={responsive || undefined}
      {...rippleAttrs}
      {...domRest}
    >
      <div className="navbar_container">
        <a
          {...childRippleAttrs}
          href="#"
          className="navbar_brand"
          onClick={handleBrandClick}
        >
          {brandInner}
        </a>
        {responsive ? (
          <Button
            {...childRippleAttrs}
            variant="ghost"
            iconOnly
            className="navbar_toggle"
            data-navbar-toggle=""
            expanded={false}
            aria-controls={collapseTargetId}
            ariaLabel="메뉴 열기"
            iconBefore={
              <>
                <Icon name="menu" size="sm" className="navbar_toggle-icon-open" />
                <Icon name="close" size="sm" className="navbar_toggle-icon-close" />
              </>
            }
          />
        ) : null}
        <div className="navbar_collapse" id={collapseTargetId}>
          <nav className="navbar_nav" aria-label="주요 메뉴">
            {navItems}
          </nav>
          {search ? <div className="navbar_search">{search}</div> : null}
          {actions ? <div className="navbar_actions">{actions}</div> : null}
        </div>
      </div>
    </header>
  );
}
