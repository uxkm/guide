import { createContext, useContext } from 'react';

const StepsContext = createContext(null);

export function StepsProvider({ value, children }) {
  return <StepsContext.Provider value={value}>{children}</StepsContext.Provider>;
}

export function useStepsContext() {
  return useContext(StepsContext);
}
