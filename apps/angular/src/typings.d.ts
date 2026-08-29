declare module '@uxkm/html/affix' {
  export function initAffix(element: HTMLElement): (() => void) | undefined;
}

declare module '@uxkm/html/back-top' {
  export function initBackTop(element: HTMLElement): (() => void) | undefined;
}

declare module '@uxkm/interactions/slide-region' {
  export function setSlideRegionOpen(
    element: HTMLElement | null,
    open: boolean,
    animate?: boolean,
  ): void;
}

declare module '@uxkm/interactions';
