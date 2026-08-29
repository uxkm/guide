import { renderPortal } from '../../../utils/portal.jsx';
import { createContext, useContext } from 'solid-js';
/**
 * SnackbarRegion 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
// 뷰포트 기준 8개 배치 위치입니다.
export const snackbarPlacements = [
  'top-start',
  'top-center',
  'top-end',
  'middle-start',
  'middle-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
];

// 자식 Snackbar에 기본 placement를 전달하는 컨텍스트입니다.
export const SnackbarPlacementContext = createContext('bottom-center');

// iframe에서도 최상위 문서에 Snackbar를 올리기 위한 포털 루트를 찾거나 만듭니다.
export function getSnackbarPortalRoot(
  currentDocument = typeof document === 'undefined' ? null : document,
  currentWindow = typeof window === 'undefined' ? null : window,
) {
  if (!currentDocument) return null;

  let targetDocument = currentDocument;
  try {
    // 가능하면 최상위 프레임 문서를 사용합니다.
    if (currentWindow?.top?.document?.body) targetDocument = currentWindow.top.document;
  } catch {
    // 다른 출처의 iframe에서는 현재 문서를 사용합니다.
  }

  // 동일 문서면 body에 바로 붙입니다.
  if (targetDocument === currentDocument) return currentDocument.body;

  // 상위 문서에 UXKM 스타일이 없으면 연결합니다.
  const stylesheetId = 'uxkm-snackbar-portal-styles';
  if (!targetDocument.getElementById(stylesheetId)) {
    const stylesheet = targetDocument.createElement('link');
    stylesheet.id = stylesheetId;
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('styles/uxkm.css', targetDocument.baseURI).href;
    targetDocument.head.appendChild(stylesheet);
  }

  // 공유 포털 루트 노드를 재사용합니다.
  const rootId = 'uxkm-snackbar-portal-root';
  let root = targetDocument.getElementById(rootId);
  if (!root) {
    root = targetDocument.createElement('div');
    root.id = rootId;
    targetDocument.body.appendChild(root);
  }
  // 현재 문서의 테마를 포털에도 맞춥니다.
  root.dataset.theme = currentDocument.documentElement.dataset.theme || 'light';
  return root;
}

export function SnackbarRegion({
  placement = 'bottom-center', // 뷰포트 기준 배치 위치입니다.
  label, // 영역 접근성 이름입니다.
  children, // 같은 위치에 쌓을 Snackbar들입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 지원하지 않는 placement는 bottom-center로 되돌립니다.
  const resolvedPlacement = snackbarPlacements.includes(placement) ? placement : 'bottom-center';
  const region = (
    <SnackbarPlacementContext.Provider value={resolvedPlacement}>
      <div
        {...props}
        class={['snackbar_region', `snackbar_region-${resolvedPlacement}`, className]
          .filter(Boolean)
          .join(' ')}
        aria-label={label}
      >
        {children}
      </div>
    </SnackbarPlacementContext.Provider>
  );
  // 포털 루트가 있으면 포털로, 없으면 인라인으로 렌더합니다.
  const portalRoot = getSnackbarPortalRoot();
  return portalRoot ? renderPortal(region, portalRoot) : region;
}

export default SnackbarRegion;
