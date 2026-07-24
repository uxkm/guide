import { useRef } from 'react';
import { useNavbarListDemoCode } from '@/hooks/useDemoCode';
import { cn } from '@/utils/cn';

export default function NavbarList({ children, className, ...rest }) {
  const rootRef = useRef(null);

  useNavbarListDemoCode(rootRef);

  return (
    <ul ref={rootRef} className={cn('navbar_list', className)} {...rest}>
      {children}
    </ul>
  );
}
