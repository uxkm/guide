export function TabsTab({ active = false, disabled = false, children, className = '', ...props }) { return <button {...props} type="button" className={['tabs_tab', active && 'is-active', disabled && 'is-disabled', className].filter(Boolean).join(' ')} role="tab" aria-selected={active} disabled={disabled || undefined}>{children}</button>; }
export default TabsTab;
