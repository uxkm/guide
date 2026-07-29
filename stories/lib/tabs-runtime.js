/**
 * Tabs 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

function isTabDisabled(tab) {
  return (
    tab.disabled ||
    tab.classList.contains('is-disabled') ||
    tab.getAttribute('aria-disabled') === 'true'
  );
}

function getTabsFromList(tablist) {
  return Array.from(tablist.querySelectorAll('[role="tab"]'));
}

function updateTabsIndicator(tabsRoot) {
  if (!tabsRoot.classList.contains('tabs_indicator-slide')) {
    return;
  }

  const list = tabsRoot.querySelector('.tabs_list');
  const indicator = list && list.querySelector('.tabs_indicator');

  if (!list || !indicator) {
    return;
  }

  const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');

  if (!activeTab) {
    indicator.style.display = 'none';
    return;
  }

  const listRect = list.getBoundingClientRect();
  const tabRect = activeTab.getBoundingClientRect();
  const left = tabRect.left - listRect.left + list.scrollLeft;
  const top = tabRect.top - listRect.top + list.scrollTop;
  const width = tabRect.width;
  const height = tabRect.height;
  const thickness = 2;
  const isVertical = tabsRoot.classList.contains('tabs_vertical');
  const isPill = tabsRoot.classList.contains('tabs_pill');

  indicator.style.display = '';

  if (isVertical) {
    indicator.style.width = `${thickness}px`;
    indicator.style.height = `${height}px`;
    indicator.style.transform = `translate3d(${left + width - thickness}px, ${top}px, 0)`;
    return;
  }

  if (isPill) {
    indicator.style.width = `${width}px`;
    indicator.style.height = `${height}px`;
    indicator.style.transform = `translate3d(${left}px, ${top}px, 0)`;
    return;
  }

  indicator.style.width = `${width}px`;
  indicator.style.height = `${thickness}px`;
  indicator.style.transform = `translate3d(${left}px, ${top + height - thickness}px, 0)`;
}

function updateTabsScrollNav(tabsRoot) {
  if (!tabsRoot.classList.contains('tabs_scroll-nav')) {
    return;
  }

  const list = tabsRoot.querySelector('.tabs_list');
  const prevBtn = tabsRoot.querySelector('.tabs_nav_prev');
  const nextBtn = tabsRoot.querySelector('.tabs_nav_next');

  if (!list) {
    return;
  }

  const maxScroll = list.scrollWidth - list.clientWidth;
  const hasOverflow = maxScroll > 1;
  const canPrev = list.scrollLeft > 1;
  const canNext = list.scrollLeft < maxScroll - 1;

  if (prevBtn) {
    prevBtn.hidden = !hasOverflow;
    prevBtn.disabled = !canPrev;
  }

  if (nextBtn) {
    nextBtn.hidden = !hasOverflow;
    nextBtn.disabled = !canNext;
  }
}

function scrollTabsBy(tabsRoot, direction) {
  const list = tabsRoot.querySelector('.tabs_list');

  if (!list) {
    return;
  }

  const amount = Math.max(list.clientWidth * 0.75, 120);
  list.scrollBy({ left: direction * amount, behavior: 'smooth' });
}

function scrollTabIntoView(tabsRoot, tab) {
  const list = tabsRoot.querySelector('.tabs_list');

  if (!list || !tab || !tabsRoot.classList.contains('tabs_scroll-nav')) {
    return;
  }

  const listRect = list.getBoundingClientRect();
  const tabRect = tab.getBoundingClientRect();
  const tabLeft = tabRect.left - listRect.left + list.scrollLeft;
  const target = tabLeft + tabRect.width / 2 - list.clientWidth / 2;
  const maxScroll = list.scrollWidth - list.clientWidth;

  list.scrollTo({
    left: Math.max(0, Math.min(target, maxScroll)),
    behavior: 'smooth',
  });
}

function activateDynamicPanel(tabsRoot, tab) {
  const key = tab.getAttribute('data-tabs-key');
  const panelId = tab.getAttribute('aria-controls');
  const panel = panelId ? document.getElementById(panelId) : null;

  if (!panel || !key) {
    return;
  }

  panel.querySelectorAll('[data-tabs-panel-key]').forEach((chunk) => {
    const isActive = chunk.getAttribute('data-tabs-panel-key') === key;

    if (isActive) {
      chunk.removeAttribute('hidden');
    } else {
      chunk.setAttribute('hidden', '');
    }
  });

  panel.setAttribute('aria-labelledby', tab.id);
}

function activateTab(tabsRoot, tabs, panels, tab) {
  if (isTabDisabled(tab)) {
    return;
  }

  const panelId = tab.getAttribute('aria-controls');
  const isDynamic = tabsRoot.classList.contains('tabs_dynamic');

  tabs.forEach((item) => {
    const isActive = item === tab;

    item.classList.toggle('is-active', isActive);
    item.setAttribute('aria-selected', String(isActive));
    item.setAttribute('tabindex', isActive ? '0' : '-1');
  });

  if (isDynamic) {
    activateDynamicPanel(tabsRoot, tab);
  } else {
    panels.forEach((panel) => {
      const isActive = panel.id === panelId;

      panel.classList.toggle('is-active', isActive);

      if (isActive) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });
  }

  updateTabsIndicator(tabsRoot);
  updateTabsScrollNav(tabsRoot);
  scrollTabIntoView(tabsRoot, tab);
}

function findNextEnabledTab(tabs, startIndex, direction) {
  let index = startIndex;
  let attempts = 0;

  while (attempts < tabs.length) {
    index = (index + direction + tabs.length) % tabs.length;

    if (!isTabDisabled(tabs[index])) {
      return tabs[index];
    }

    attempts += 1;
  }

  return null;
}

function initTabsRoot(tabsRoot) {
  if (tabsRoot._sbTabsInit) return;
  tabsRoot._sbTabsInit = true;

  const tablist = tabsRoot.querySelector('[role="tablist"]');

  if (!tablist) {
    return;
  }

  const tabs = getTabsFromList(tablist);
  const panels = Array.from(tabsRoot.querySelectorAll('[role="tabpanel"]'));
  const isVertical = tabsRoot.classList.contains('tabs_vertical');
  const prevBtn = tabsRoot.querySelector('.tabs_nav_prev');
  const nextBtn = tabsRoot.querySelector('.tabs_nav_next');
  const list = tabsRoot.querySelector('.tabs_list');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activateTab(tabsRoot, tabs, panels, tab);
    });

    tab.addEventListener('keydown', (event) => {
      const index = tabs.indexOf(tab);
      let nextTab = null;

      if (isVertical) {
        if (event.key === 'ArrowDown') {
          nextTab = findNextEnabledTab(tabs, index, 1);
        } else if (event.key === 'ArrowUp') {
          nextTab = findNextEnabledTab(tabs, index, -1);
        }
      } else if (event.key === 'ArrowRight') {
        nextTab = findNextEnabledTab(tabs, index, 1);
      } else if (event.key === 'ArrowLeft') {
        nextTab = findNextEnabledTab(tabs, index, -1);
      }

      if (event.key === 'Home') {
        nextTab = tabs.find((item) => !isTabDisabled(item)) || null;
      } else if (event.key === 'End') {
        for (let i = tabs.length - 1; i >= 0; i -= 1) {
          if (!isTabDisabled(tabs[i])) {
            nextTab = tabs[i];
            break;
          }
        }
      }

      if (nextTab) {
        event.preventDefault();
        nextTab.focus();
        activateTab(tabsRoot, tabs, panels, nextTab);
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      scrollTabsBy(tabsRoot, -1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      scrollTabsBy(tabsRoot, 1);
    });
  }

  if (list) {
    list.addEventListener(
      'scroll',
      () => {
        updateTabsScrollNav(tabsRoot);
        updateTabsIndicator(tabsRoot);
      },
      { passive: true },
    );
  }

  if (typeof ResizeObserver !== 'undefined') {
    const resizeObserver = new ResizeObserver(() => {
      updateTabsIndicator(tabsRoot);
      updateTabsScrollNav(tabsRoot);
    });

    if (list) {
      resizeObserver.observe(list);
      tabs.forEach((tab) => {
        resizeObserver.observe(tab);
      });
    }
  }

  window.addEventListener('resize', () => {
    updateTabsIndicator(tabsRoot);
    updateTabsScrollNav(tabsRoot);
  });

  updateTabsIndicator(tabsRoot);
  updateTabsScrollNav(tabsRoot);
}

/**
 * @param {ParentNode} [root=document]
 */
export function initTabs(root = document) {
  root.querySelectorAll('[data-tabs]').forEach(initTabsRoot);
}
