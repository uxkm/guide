import { createContext, useContext, useMemo, useRef, useState } from 'react';

const GuideSidebarContext = createContext(null);

export function GuideSidebarProvider({ children, sidebarRef, sidebarCollapsed, setSidebarCollapsed }) {
  const value = useMemo(
    () => ({
      openSidebar: () => sidebarRef.current?.openSidebar(),
      toggleSidebarCollapse: () => sidebarRef.current?.toggleSidebarCollapse(),
      sidebarCollapsed,
      setSidebarCollapsed,
    }),
    [sidebarCollapsed, setSidebarCollapsed, sidebarRef],
  );

  return <GuideSidebarContext.Provider value={value}>{children}</GuideSidebarContext.Provider>;
}

export function useGuideSidebar() {
  return useContext(GuideSidebarContext);
}
