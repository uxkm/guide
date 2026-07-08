import { useRipple } from '@/hooks/useRipple';

export default function CategoryCard({ ripple, title, description, count, href }) {
  const { rippleAttrs } = useRipple({ ripple });

  return (
    <a className="category_card" href={href} {...rippleAttrs}>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {count ? <span className="count">{count}</span> : null}
    </a>
  );
}
