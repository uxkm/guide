import { useEffect, useId, useRef } from 'react';

export function Checkbox({ label, checked, defaultChecked, disabled = false, indeterminate = false, labelEnd = false, button = false, ripple = true, ariaLabel, children, className = '', onChange, id, ...props }) {
  const generatedId = useId();
  const inputRef = useRef(null);
  const inputId = id ?? generatedId;
  const content = children ?? label;
  const standalone = content == null || content === '';
  const classes = ['checkbox', labelEnd && 'checkbox_label-end', button && 'checkbox_button', className].filter(Boolean).join(' ');
  const checkedProps = onChange ? { checked: Boolean(checked), onChange } : checked != null ? { defaultChecked: Boolean(checked) } : { defaultChecked };
  const input = <input {...props} ref={inputRef} id={standalone ? id : inputId} type="checkbox" className="checkbox_input" disabled={disabled} {...checkedProps} data-component="Checkbox" />;
  const rippleAttrs = { 'data-ripple': ripple ? 'true' : 'false' };

  useEffect(() => { if (inputRef.current) inputRef.current.indeterminate = Boolean(indeterminate); }, [indeterminate]);

  if (standalone) return <label className={['checkbox_control', className].filter(Boolean).join(' ')} aria-label={ariaLabel} {...rippleAttrs}>{input}<span className="checkbox_box" aria-hidden="true" /></label>;
  if (button) return <label className={classes} {...rippleAttrs}>{input}<span className="checkbox_label">{content}</span></label>;
  return <div className={classes} {...rippleAttrs}>{labelEnd && <label className="checkbox_label" htmlFor={inputId}>{content}</label>}<span className="checkbox_control">{input}<span className="checkbox_box" aria-hidden="true" /></span>{!labelEnd && <label className="checkbox_label" htmlFor={inputId}>{content}</label>}</div>;
}

export default Checkbox;
