import { useRef } from 'react';
import { createComponentFormatter } from '@/utils/format-component-code';
import { useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('AvatarGroup', { selfClosing: false });

export default function AvatarGroup({ ariaLabel, children }) {
  const rootRef = useRef(null);

  useComponentDemoCode(formatCode, { ariaLabel }, {}, rootRef, {});

  return (
    <div ref={rootRef} className="avatar_group" aria-label={ariaLabel}>
      {children}
    </div>
  );
}
