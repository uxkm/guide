import { addons } from 'storybook/manager-api';

addons.setConfig({
  sidebar: {
    showRoots: true,
    collapsedRoots: [
      '레이아웃',
      '기본-요소',
      '데이터-표시',
      '폼',
      '피드백',
      '네비게이션',
      '기타'
    ]
  }
});

/** Stretch 1-depth root hit area up to the expand/collapse-all icon. */
const SIDEBAR_ROOT_HIT_AREA_STYLE = `
  .sidebar-subheading[data-nodetype="root"] {
    display: flex !important;
    align-items: center !important;
    width: 100%;
  }

  .sidebar-subheading[data-nodetype="root"] > button[data-action="collapse-root"] {
    flex: 1 1 auto !important;
    justify-content: flex-start !important;
    min-width: 0 !important;
    max-width: none !important;
  }

  .sidebar-subheading[data-nodetype="root"] > .sidebar-subheading-action {
    flex: 0 0 auto !important;
    position: relative;
    z-index: 1;
  }
`;

function injectSidebarRootHitAreaStyles() {
  if (document.getElementById('uxkm-sidebar-root-hit-area')) {
    return;
  }

  const style = document.createElement('style');
  style.id = 'uxkm-sidebar-root-hit-area';
  style.textContent = SIDEBAR_ROOT_HIT_AREA_STYLE;
  document.head.appendChild(style);
}

injectSidebarRootHitAreaStyles();
