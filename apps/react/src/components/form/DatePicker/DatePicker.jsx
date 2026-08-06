export function DatePicker({ children = 'DatePicker', className = '', ...props }) {
  const classes = ['uxkm-date-picker', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="DatePicker" {...props}>{children}</div>;
}

export default DatePicker;
