'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import GuideSidebar from '@/components/guide/GuideSidebar.jsx';
import GuideHeader from '@/components/guide/GuideHeader.jsx';
import { GuideSidebarProvider } from '@/context/GuideSidebarContext';
import { getDocMetaByKey } from '@/data/doc-registry';
import { getDocKeyFromPathname } from '@/utils/route-doc';
import { initClickableCard } from '@/utils/clickable-card';
import { initRipple } from '@/utils/ripple';
import { cn } from '@/utils/cn';

const STORAGE_SIDEBAR_COLLAPSED = 'guide-sidebar-collapsed';

export default function GuideLayout({ children }) {
  const pathname = usePathname();
  const docKey = getDocKeyFromPathname(pathname);
  const sidebarRef = useRef(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const activeNav = useMemo(
    () => getDocMetaByKey(docKey).activeNav || docKey,
    [docKey],
  );

  const pageTitle = useMemo(
    () => getDocMetaByKey(docKey).pageTitle,
    [docKey],
  );

  useEffect(() => {
    initClickableCard();
    initRipple();
    import('@/legacy/demo.js');

    try {
      setSidebarCollapsed(localStorage.getItem(STORAGE_SIDEBAR_COLLAPSED) === '1');
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <GuideSidebarProvider
      sidebarRef={sidebarRef}
      sidebarCollapsed={sidebarCollapsed}
      setSidebarCollapsed={setSidebarCollapsed}
    >
      <div className={cn('guide_layout', { 'is-sidebar-collapsed': sidebarCollapsed })}>
        <GuideSidebar
          ref={sidebarRef}
          activeNav={activeNav}
          onCollapsedChange={setSidebarCollapsed}
        />

        <div className="guide_main">
          <GuideHeader title={pageTitle} />
          {children}
        </div>
      </div>
    </GuideSidebarProvider>
  );
}
