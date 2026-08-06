export function Calendar({ children = 'Calendar', className = '', ...props }) {
  const classes = ['uxkm-calendar', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Calendar" {...props}>{children}</div>;
}

export default Calendar;
