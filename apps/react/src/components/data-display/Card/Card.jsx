export function Card({ children = 'Card', className = '', ...props }) {
  const classes = ['uxkm-card', className].filter(Boolean).join(' ');
  return <div className={classes} data-component="Card" {...props}>{children}</div>;
}

export default Card;
