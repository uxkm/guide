import { createContext, useContext } from 'react';

export const TreeContext = createContext(null);

export function useTree() {
  return useContext(TreeContext);
}
