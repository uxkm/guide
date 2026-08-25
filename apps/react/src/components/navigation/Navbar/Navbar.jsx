import { useId, useState } from 'react';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

const sizes = new Set(['sm', 'md', 'lg']);

export function Navbar({ brand, ariaLabel, size = 'md', borderless = false, dark = false, sticky = false, responsive = false, collapseId, brandContent, brandIcon, items, search, actions, children, className = '', ...props }) {
  const reactId = useId().replaceAll(':', '');
  const targetId = collapseId || `navbar-collapse-${reactId}`;
  const [open, setOpen] = useState(false);
  const resolvedSize = sizes.has(size) ? size : 'md';
  const classes = ['navbar', resolvedSize !== 'md' && `navbar_${resolvedSize}`, borderless && 'navbar_borderless', dark && 'navbar_dark', sticky && 'navbar_sticky', open && 'is-open', className].filter(Boolean).join(' ');
  const navItems = items ?? (children ? <ul className="navbar_list">{children}</ul> : null);
  const accessibleName = ariaLabel || (typeof brand === 'string' && brand) || '사이트';
  return <header {...props} className={classes} aria-label={props.role === 'presentation' ? undefined : accessibleName} data-component="Navbar" data-navbar={responsive || undefined}><div className="navbar_container"><a href="#" className="navbar_brand" onClick={(event) => event.preventDefault()}>{brandContent ?? <>{brandIcon}{brand}</>}</a>{responsive && <Button variant="ghost" iconOnly className="navbar_toggle" ariaLabel={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open} aria-controls={targetId} onClick={() => setOpen((value) => !value)} iconBefore={<><Icon name="menu" size="sm" className="navbar_toggle-icon-open" /><Icon name="close" size="sm" className="navbar_toggle-icon-close" /></>} />}<div className="navbar_collapse" id={targetId}><nav className="navbar_nav" aria-label={`${accessibleName} 주요 메뉴`}>{navItems}</nav>{search && <div className="navbar_search">{search}</div>}{actions && <div className="navbar_actions">{actions}</div>}</div></div></header>;
}

export default Navbar;
