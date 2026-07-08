import { useEffect, useMemo, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import GuideSidebar from '@/components/guide/GuideSidebar.jsx';
import GuideHeader from '@/components/guide/GuideHeader.jsx';
import { GuideSidebarProvider } from '@/context/GuideSidebarContext';
import { getDocByKey } from '@/utils/doc-loader';
import { useDocKey } from '@/utils/route-doc';
import { cn } from '@/utils/cn';

const STORAGE_SIDEBAR_COLLAPSED = 'guide-sidebar-collapsed';

export default function GuideLayout() {
  const location = useLocation();
  const docKey = useDocKey();
  const sidebarRef = useRef(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const activeNav = useMemo(
    () => getDocByKey(docKey)?.meta.activeNav || docKey,
    [docKey],
  );

  const pageTitle = useMemo(
    () => getDocByKey(docKey)?.meta.pageTitle || 'UXKM Guide',
    [docKey],
  );

  useEffect(() => {
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
          <Outlet key={location.pathname} />
        </div>
      </div>
    </GuideSidebarProvider>
  );
}
