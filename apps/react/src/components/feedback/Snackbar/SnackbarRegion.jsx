import { createContext } from 'react';
import { createPortal } from 'react-dom';

export const snackbarPlacements = [
  'top-start', 'top-center', 'top-end', 'middle-start',
  'middle-end', 'bottom-start', 'bottom-center', 'bottom-end',
];

export const SnackbarPlacementContext = createContext('bottom-center');

function getPortalRoot() {
  if (typeof document === 'undefined') return null;

  let targetDocument = document;
  try {
    if (window.top?.document?.body) targetDocument = window.top.document;
  } catch {
    // 다른 출처의 iframe에서는 현재 문서를 사용합니다.
  }

  if (targetDocument === document) return document.body;

  const stylesheetId = 'uxkm-snackbar-portal-styles';
  if (!targetDocument.getElementById(stylesheetId)) {
    const stylesheet = targetDocument.createElement('link');
    stylesheet.id = stylesheetId;
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('styles/uxkm.css', targetDocument.baseURI).href;
    targetDocument.head.appendChild(stylesheet);
  }

  const rootId = 'uxkm-snackbar-portal-root';
  let root = targetDocument.getElementById(rootId);
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = rootId;
    targetDocument.body.appendChild(root);
  }
  root.dataset.theme = document.documentElement.dataset.theme || 'light';
  return root;
}

export function SnackbarRegion({ placement = 'bottom-center', label, children, className = '', ...props }) {
  const resolvedPlacement = snackbarPlacements.includes(placement) ? placement : 'bottom-center';
  const region = (
    <SnackbarPlacementContext.Provider value={resolvedPlacement}>
      <div
        {...props}
        className={['snackbar_region', `snackbar_region-${resolvedPlacement}`, className].filter(Boolean).join(' ')}
        aria-label={label}
      >
        {children}
      </div>
    </SnackbarPlacementContext.Provider>
  );
  const portalRoot = getPortalRoot();
  return portalRoot ? createPortal(region, portalRoot) : region;
}

export default SnackbarRegion;
