import { createContext, useContext } from 'react';

export const ListContext = createContext({ tag: 'ul', variant: 'default' });

export function useListContext() {
  return useContext(ListContext);
}
