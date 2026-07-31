'use client';

import { useId, useMemo, useRef, useState } from 'react';
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
  brandAs,
  brandHref = '#',
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
  const [isOpen, setIsOpen] = useState(false);

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
      brandAs: typeof brandAs === 'string' ? brandAs : undefined,
      brandHref: brandHref === '#' ? undefined : brandHref,
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

  const Brand = brandAs || 'a';
  const brandAcceptsHref = Brand === 'a' || typeof Brand !== 'string';

  function handleBrandClick(event) {
    if (!brandHref || brandHref === '#') {
      event.preventDefault();
    }
  }

  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  return (
    <header
      ref={rootRef}
      className={cn(rootClass, responsive && isOpen && 'is-open', className)}
      {...rippleAttrs}
      {...domRest}
    >
      <div className="navbar_container">
        <Brand
          {...childRippleAttrs}
          href={brandAcceptsHref ? brandHref : undefined}
          className="navbar_brand"
          onClick={handleBrandClick}
        >
          {brandInner}
        </Brand>
        {responsive ? (
          <Button
            {...childRippleAttrs}
            variant="ghost"
            iconOnly
            className="navbar_toggle"
            expanded={isOpen}
            aria-controls={collapseTargetId}
            ariaLabel={isOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={toggleMenu}
            iconBefore={
              <>
                <Icon name="menu" size="sm" className="navbar_toggle-icon-open" />
                <Icon name="close" size="sm" className="navbar_toggle-icon-close" />
              </>
            }
          />
        ) : null}
        <div
          className={cn('navbar_collapse', responsive && isOpen && 'is-open')}
          id={collapseTargetId}
        >
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
