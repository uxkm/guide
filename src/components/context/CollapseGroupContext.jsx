import { createContext, useContext } from 'react';

export const CollapseGroupContext = createContext(null);

export function useCollapseGroup() {
  return useContext(CollapseGroupContext);
}
