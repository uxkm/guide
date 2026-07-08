import { useRef } from 'react';
import { createComponentFormatter } from '@/utils/format-component-code';
import { useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('BadgeWrap', { selfClosing: false });

export default function BadgeWrap({ ariaLabel, children }) {
  const rootRef = useRef(null);

  useComponentDemoCode(formatCode, { ariaLabel }, {}, rootRef, {});

  return (
    <span ref={rootRef} className="badge_wrap">
      {children}
    </span>
  );
}
