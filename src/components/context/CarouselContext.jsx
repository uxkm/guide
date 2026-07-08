import { createContext, useContext } from 'react';

export const CarouselContext = createContext(null);

export function useCarousel() {
  return useContext(CarouselContext);
}
