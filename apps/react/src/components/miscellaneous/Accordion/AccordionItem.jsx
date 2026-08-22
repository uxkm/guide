import { useContext, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.jsx';
import Icon from '../../basic/Icon/Icon.jsx';
import { AccordionContext } from './Accordion.jsx';

export function AccordionItem({
  label,
  title,
  content,
  children,
  extra,
  open = false,
  disabled = false,
  headingLevel = 3,
  className = '',
  ripple = true,
  ...props
}) {
  const accordion = useContext(AccordionContext);
  const uid = useId().replaceAll(':', '');
  const triggerId = `accordion-trigger-${uid}`;
  const panelId = `accordion-panel-${uid}`;
  const panelRef = useRef(null);
  const stateRef = useRef(Boolean(open));
  const disabledRef = useRef(Boolean(disabled));
  const firstSlideSync = useRef(true);
  const [isOpen, setIsOpen] = useState(Boolean(open));
  stateRef.current = isOpen;
  disabledRef.current = Boolean(disabled);

  useEffect(() => accordion?.registerItem({
    id: triggerId,
    disabled: () => disabledRef.current,
    isOpen: () => stateRef.current,
    setOpen: setIsOpen,
  }), [accordion, triggerId]);

  useLayoutEffect(() => {
    if (accordion?.effect !== 'slide') return;
    setSlideRegionOpen(panelRef.current, isOpen, !firstSlideSync.current);
    firstSlideSync.current = false;
  }, [accordion?.effect, isOpen]);

  function handleKeyDown(event) {
    if (accordion?.focusAdjacent(triggerId, event.key)) event.preventDefault();
  }

  const classes = ['accordion_item', isOpen && 'is-open', disabled && 'is-disabled', className].filter(Boolean).join(' ');
  const slide = accordion?.effect === 'slide';

  return (
    <div {...props} className={classes}>
      <div className="accordion_heading" role="heading" aria-level={headingLevel}>
        <Button
          id={triggerId}
          variant="text"
          color="default"
          className="accordion_trigger"
          expanded={isOpen}
          aria-controls={panelId}
          disabled={disabled}
          ripple={ripple}
          onClick={() => accordion?.toggleItem(triggerId)}
          onKeyDown={handleKeyDown}
          iconAfter={<Icon name="chevron-down" className="accordion_icon" />}
        >
          <span className="accordion_label">{title ?? label}</span>
          {extra != null ? <span className="accordion_extra">{extra}</span> : null}
        </Button>
      </div>
      <div
        ref={panelRef}
        id={panelId}
        className="accordion_panel"
        role="region"
        aria-labelledby={triggerId}
        hidden={slide ? undefined : !isOpen}
      >
        <div className="accordion_content">{children ?? (content ? <p>{content}</p> : null)}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
