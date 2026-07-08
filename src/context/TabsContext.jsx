import { createContext, useContext } from 'react';

const TabsApiContext = createContext(null);
const TabsActiveContext = createContext(null);

export function TabsProvider({ apiValue, activeValue, children }) {
  return (
    <TabsApiContext.Provider value={apiValue}>
      <TabsActiveContext.Provider value={activeValue}>{children}</TabsActiveContext.Provider>
    </TabsApiContext.Provider>
  );
}

export function useTabsApiContext() {
  return useContext(TabsApiContext);
}

export function useTabsActiveContext() {
  return useContext(TabsActiveContext);
}

/** @deprecated use useTabsApiContext / useTabsActiveContext */
export function useTabsContext() {
  const api = useTabsApiContext();
  const active = useTabsActiveContext();
  return api && active ? { ...api, ...active } : api ?? active;
}
