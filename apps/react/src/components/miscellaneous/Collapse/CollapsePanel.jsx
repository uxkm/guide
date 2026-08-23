import { useContext, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
import { CollapseContext } from './Collapse.jsx';

export function CollapsePanel({ label, title, content, children, extra, open = false, disabled = false, className = '', ripple = true, ...props }) {
  const collapse = useContext(CollapseContext);
  const uid = useId().replaceAll(':', '');
  const triggerId = `collapse-trigger-${uid}`;
  const bodyId = `collapse-body-${uid}`;
  const bodyRef = useRef(null);
  const stateRef = useRef(Boolean(open));
  const disabledRef = useRef(Boolean(disabled));
  const firstSlideSync = useRef(true);
  const [isOpen, setIsOpen] = useState(Boolean(open));
  stateRef.current = isOpen;
  disabledRef.current = Boolean(disabled);

  useEffect(() => collapse?.registerPanel({ id: triggerId, disabled: () => disabledRef.current, isOpen: () => stateRef.current, setOpen: setIsOpen }), [collapse, triggerId]);

  useLayoutEffect(() => {
    if (collapse?.effect !== 'slide') return;
    setSlideRegionOpen(bodyRef.current, isOpen, !firstSlideSync.current);
    firstSlideSync.current = false;
  }, [collapse?.effect, isOpen]);

  function handleKeyDown(event) {
    if (collapse?.focusAdjacent(triggerId, event.key)) event.preventDefault();
  }

  const classes = ['collapse_panel', isOpen && 'is-open', disabled && 'is-disabled', className].filter(Boolean).join(' ');
  const slide = collapse?.effect === 'slide';

  return (
    <div {...props} className={classes}>
      <div className="collapse_header">
        <Button id={triggerId} variant="text" color="default" className="collapse_trigger" expanded={isOpen} aria-controls={bodyId} disabled={disabled} ripple={ripple} onClick={() => collapse?.togglePanel(triggerId)} onKeyDown={handleKeyDown} iconAfter={<Icon name="chevron-down" className="collapse_icon" />}>
          <span className="collapse_label">{title ?? label}</span>
          {extra != null ? <span className="collapse_extra">{extra}</span> : null}
        </Button>
      </div>
      <div ref={bodyRef} id={bodyId} className="collapse_body" role="region" aria-labelledby={triggerId} hidden={slide ? undefined : !isOpen}>
        <div className="collapse_content">{children ?? (content ? <p>{content}</p> : null)}</div>
      </div>
    </div>
  );
}

export default CollapsePanel;
