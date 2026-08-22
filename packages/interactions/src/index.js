import { initClickableCard } from './behaviors/clickable-card.js';
import { initRipple, RIPPLE_SELECTOR } from './behaviors/ripple.js';
import { setSlideRegionOpen } from './behaviors/slide-region.js';

export { initClickableCard, initRipple, RIPPLE_SELECTOR, setSlideRegionOpen };

/** 앱 시작점에서 공통 DOM 동작을 한 번에 등록합니다. */
export function initInteractions() {
  initRipple();
  initClickableCard();
}
