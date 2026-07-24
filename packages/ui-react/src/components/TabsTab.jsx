import Button from '@/components/Button.jsx';
import { cn } from '@/utils/cn';

export default function TabsTab({
  id,
  panelId,
  label,
  active,
  disabled,
  tabIndex = -1,
  icon,
  badge,
  onClick,
  ...rest
}) {
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
      tabIndex={tabIndex}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      onClick={onClick}
      iconBefore={icon ? <span className="tabs_icon">{icon}</span> : undefined}
      iconAfter={badge}
      {...rest}
    >
      <span className="tabs_label">{label}</span>
    </Button>
  );
}
