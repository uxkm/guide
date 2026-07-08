import Button from '@/components/Button.jsx';
import { cn } from '@/utils/cn';

export default function TabsTab({
  id,
  panelId,
  label,
  active = false,
  disabled = false,
  tabindex = -1,
  iconSlot,
  badgeSlot,
  onClick,
  ...rest
}) {
  const iconContent = iconSlot
    ? typeof iconSlot === 'function'
      ? iconSlot()
      : iconSlot
    : null;
  const badgeContent = badgeSlot
    ? typeof badgeSlot === 'function'
      ? badgeSlot()
      : badgeSlot
    : null;

  return (
    <Button
      tag="button"
      role="tab"
      type="button"
      variant="text"
      fit
      className={cn('tabs_tab', active && 'is-active', disabled && 'is-disabled')}
      id={id}
      aria-selected={active ? 'true' : 'false'}
      aria-controls={panelId}
      tabIndex={tabindex}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      onClick={onClick}
      iconBefore={iconContent ? <span className="tabs_icon">{iconContent}</span> : undefined}
      iconAfter={badgeContent || undefined}
      {...rest}
    >
      <span className="tabs_label">{label}</span>
    </Button>
  );
}
