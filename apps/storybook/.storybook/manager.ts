import { addons, type State } from 'storybook/manager-api';
import { CURRENT_STORY_WAS_SET } from 'storybook/internal/core-events';
import { managerDarkTheme } from './manager-theme';

document.documentElement.setAttribute('lang', 'ko');

const GUIDE_PAGE_STORY_IDS = /^((intro|getting-started|design-tokens)--page)$/;
const DEFAULT_BOTTOM_PANEL_HEIGHT = 300;

function isGuidePageStory(storyId: string) {
  return GUIDE_PAGE_STORY_IDS.test(storyId);
}

addons.setConfig({
  theme: managerDarkTheme,
  panelPosition: 'bottom',
  selectedPanel: 'controls',
  bottomPanelHeight: DEFAULT_BOTTOM_PANEL_HEIGHT,
  sidebar: {
    filters: {
      patterns: (item) => !GUIDE_PAGE_STORY_IDS.test(item.id ?? ''),
    },
  },
  layoutCustomisations: {
    /** 스토리 캔버스에서 하단 Controls 패널 표시 (가이드 페이지·Docs 제외) */
    showPanel(state: State) {
      if (state.viewMode !== 'story') {
        return false;
      }
      return !isGuidePageStory(state.storyId ?? '');
    },
  },
});

addons.register('uxkm-controls-panel', (api) => {
  const channel = addons.getChannel();

  const openControlsPanel = () => {
    const { viewMode, storyId } = api.getUrlState();
    if (viewMode !== 'story' || !storyId || isGuidePageStory(storyId)) {
      return;
    }

    api.togglePanelPosition('bottom');
    api.setSizes({ bottomPanelHeight: DEFAULT_BOTTOM_PANEL_HEIGHT });

    if (!api.getIsPanelShown()) {
      api.togglePanel(true);
    }
  };

  channel.on(CURRENT_STORY_WAS_SET, openControlsPanel);
});
