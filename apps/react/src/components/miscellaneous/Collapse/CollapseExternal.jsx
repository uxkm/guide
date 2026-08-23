import { useId, useLayoutEffect, useRef, useState } from 'react';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';

export function CollapseExternal({ triggerLabel, lead, children, open = false, effect, boxed = true, className = '', ripple = true, ...props }) {
  const uid = useId().replaceAll(':', '');
  const panelId = `collapse-external-${uid}`;
  const panelRef = useRef(null);
  const firstSlideSync = useRef(true);
  const [isOpen, setIsOpen] = useState(Boolean(open));
  const slide = effect === 'slide';

  useLayoutEffect(() => {
    if (!slide) return;
    setSlideRegionOpen(panelRef.current, isOpen, !firstSlideSync.current);
    firstSlideSync.current = false;
  }, [isOpen, slide]);

  return (
    <div {...props} className={className}>
      {lead != null ? <div>{lead}</div> : null}
      <Button variant="ghost" size="sm" expanded={isOpen} aria-controls={panelId} ripple={ripple} onClick={() => setIsOpen((value) => !value)} iconAfter={<Icon name="chevron-down" size="sm" />}>
        {triggerLabel}
      </Button>
      <div ref={panelRef} id={panelId} className={['collapse', isOpen && 'is-open'].filter(Boolean).join(' ')} data-effect={slide ? 'slide' : undefined} hidden={slide ? undefined : !isOpen} style={boxed ? { marginTop: 'var(--space-sm)' } : undefined}>
        <div className={boxed ? 'collapse_inner' : undefined}>{children}</div>
      </div>
    </div>
  );
}

export default CollapseExternal;
