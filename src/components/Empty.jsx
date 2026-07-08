import { useRef } from 'react';
import { cn } from '@/utils/cn';
import { useEmptyDemoCode } from '@/hooks/useDemoCode';

const defaultImage = (
  <svg viewBox="0 0 64 41" fill="none" aria-hidden="true">
    <ellipse cx="32" cy="34" rx="30" ry="5" fill="currentColor" opacity="0.12" />
    <path
      d="M55 13 45 2.5A2 2 0 0 0 43.2 2H20.8a2 2 0 0 0-1.8 1.5L9 13v9h46v-9Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M9 22v9.5A3.5 3.5 0 0 0 12.5 35h39a3.5 3.5 0 0 0 3.5-3.5V22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M24 22v-4.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2V22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Empty({
  description,
  size = 'md',
  simple,
  block,
  image,
  descriptionSlot,
  footer,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const props = { description, size, simple, block };

  useEmptyDemoCode(props, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'empty',
    size === 'sm' && 'empty_sm',
    size === 'lg' && 'empty_lg',
    simple && 'empty_simple',
    block && 'empty_block',
    className,
  );

  const hasImage = !simple;
  const hasFooter = Boolean(footer);

  return (
    <div ref={rootRef} className={rootClass} role="status" {...rest}>
      {hasImage ? (
        <div className="empty_image" aria-hidden="true" data-demo-slot="image">
          {image ?? defaultImage}
        </div>
      ) : null}
      {description || descriptionSlot || children ? (
        <p className="empty_desc">
          {descriptionSlot ?? children ?? description}
        </p>
      ) : null}
      {hasFooter ? (
        <div className="empty_footer" data-demo-slot="footer">
          {footer}
        </div>
      ) : null}
    </div>
  );
}
