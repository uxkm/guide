import { useRef } from 'react';
import { useNavbarListDemoCode } from '@/hooks/useDemoCode';

export default function NavbarList({ children }) {
  const rootRef = useRef(null);

  useNavbarListDemoCode(rootRef);

  return (
    <ul ref={rootRef} className="navbar_list">
      {children}
    </ul>
  );
}
