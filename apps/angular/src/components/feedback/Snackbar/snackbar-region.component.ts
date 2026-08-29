import { Component, computed, forwardRef, inject, InjectionToken, input } from '@angular/core';

export const SNACKBAR_PLACEMENTS = [
  'top-start',
  'top-center',
  'top-end',
  'middle-start',
  'middle-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
] as const;

export const SNACKBAR_PLACEMENT_CONTEXT = new InjectionToken<SnackbarRegion>(
  'SnackbarPlacementContext',
);

@Component({
  selector: 'SnackbarRegion',
  standalone: true,
  template: `
    <div [class]="classes()" [attr.aria-label]="label()">
      <ng-content />
    </div>
  `,
  providers: [
    { provide: SNACKBAR_PLACEMENT_CONTEXT, useExisting: forwardRef(() => SnackbarRegion) },
  ],
})
export class SnackbarRegion {
  readonly hostClass = input<string>('');
  readonly placement = input<string>('bottom-center');
  readonly label = input<string | undefined>(undefined);

  readonly resolvedPlacement = computed(() =>
    SNACKBAR_PLACEMENTS.includes(this.placement() as (typeof SNACKBAR_PLACEMENTS)[number])
      ? this.placement()
      : 'bottom-center',
  );

  readonly classes = computed(() =>
    [
      'snackbar_region',
      `snackbar_region-${this.resolvedPlacement()}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default SnackbarRegion;
