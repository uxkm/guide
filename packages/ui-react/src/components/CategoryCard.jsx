import { useRipple } from '@/hooks/useRipple';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export default function CategoryCard({
  ripple,
  title,
  description,
  count,
  href,
  target,
  className,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <a
      className={cn('category_card', className)}
      href={href}
      target={target}
      {...rippleAttrs}
      {...domRest}
    >
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {count ? <span className="count">{count}</span> : null}
    </a>
  );
}
