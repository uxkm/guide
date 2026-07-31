'use client';

import { createContext } from 'react';
import { cn } from '@/utils/cn';
import { normalizeDomProps } from '@/utils/normalize-dom-props';

export const SnackbarPlacementContext = createContext('bottom-center');

export const SNACKBAR_PLACEMENTS = [
  'top-start',
  'top-center',
  'top-end',
  'middle-start',
  'middle-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
];

const VALID_PLACEMENTS = new Set(SNACKBAR_PLACEMENTS);

export default function SnackbarRegion({
  placement = 'bottom-center',
  label,
  children,
  className,
  ...rest
}) {
  const resolvedPlacement = VALID_PLACEMENTS.has(placement)
    ? placement
    : 'bottom-center';
  const domRest = normalizeDomProps(rest);

  return (
    <SnackbarPlacementContext.Provider value={resolvedPlacement}>
      <div
        className={cn(
          'snackbar_region',
          `snackbar_region-${resolvedPlacement}`,
          className,
        )}
        aria-label={label}
        {...domRest}
      >
        {children}
      </div>
    </SnackbarPlacementContext.Provider>
  );
}
