import { useMemo } from 'react';
import { cn } from '@/utils/cn';
import { commonIconPaths } from '@/data/common-icons';

export default function DocIcon({ name, className, ...rest }) {
  const elements = useMemo(() => commonIconPaths[name] ?? [], [name]);

  return (
    <svg
      className={cn('icon', className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {elements.map((el, i) => {
        const Tag = el.tag;
        return <Tag key={i} {...el.attrs} />;
      })}
    </svg>
  );
}
