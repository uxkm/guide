export function Modal({ children = 'Modal', className = '', ...props }) {
  const classes = ['uxkm-modal', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Modal" {...props}>{children}</div>;
}

export default Modal;
