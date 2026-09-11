import './styles/main.scss';

const guideRoot = new URL(import.meta.url);
guideRoot.pathname = guideRoot.pathname.replace(/\/(?:src|assets)\/[^/]+$/, '/');
document.querySelectorAll('[data-guide-path]').forEach((link) => {
  link.href = new URL(link.dataset.guidePath, guideRoot).href;
});

function resolveStorybookOrigin() {
  if (import.meta.env.DEV) {
    const configured = import.meta.env.VITE_DEV_STORYBOOK_URL?.trim();
    if (configured) return configured.endsWith('/') ? configured : `${configured}/`;
    const port = import.meta.env.VITE_DEV_STORYBOOK_PORT || '6006';
    return `${window.location.protocol}//${window.location.hostname}:${port}/`;
  }

  const configured = import.meta.env.VITE_STORYBOOK_URL?.trim();
  if (configured) return configured.endsWith('/') ? configured : `${configured}/`;
  return new URL('storybook/', guideRoot).href;
}

const storybookRoot = resolveStorybookOrigin();
document.querySelectorAll('[data-storybook-path]').forEach((link) => {
  link.href = new URL(link.dataset.storybookPath ?? '', storybookRoot).href;
});

const dialog = document.querySelector('.search-dialog');
const searchInput = dialog.querySelector('input');
const searchCloseButton = dialog.querySelector('.search-close');
const resultItems = Array.from(dialog.querySelectorAll('.search-result'));
const sidebar = document.querySelector('.docs-sidebar');
const backdrop = document.querySelector('.sidebar-backdrop');
const menuButton = document.querySelector('.menu-button');
const outlineLinks = Array.from(document.querySelectorAll('.page-outline a[href^="#"]'));
const navigationToggles = Array.from(sidebar.querySelectorAll('.nav-section-toggle'));

navigationToggles.forEach((toggle) => {
  const childList = document.getElementById(toggle.getAttribute('aria-controls'));
  if (!childList) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    childList.hidden = expanded;
  });
});

function getOutlineTarget(link) {
  try {
    return document.getElementById(decodeURIComponent(link.hash.slice(1)));
  } catch (_error) {
    return null;
  }
}

const outlineItems = outlineLinks
  .map((link) => ({ link, target: getOutlineTarget(link) }))
  .filter(({ target }) => target);

function setActiveOutline(activeLink) {
  outlineLinks.forEach((link) => {
    const isActive = link === activeLink;
    if (isActive) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'location');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

function updateActiveOutline() {
  if (!outlineItems.length) return;

  const activationLine = 104;
  const reachedPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;
  if (reachedPageEnd) {
    setActiveOutline(outlineItems[outlineItems.length - 1].link);
    return;
  }

  let activeItem = outlineItems[0];

  for (const item of outlineItems) {
    if (item.target.getBoundingClientRect().top > activationLine) break;
    activeItem = item;
  }

  setActiveOutline(activeItem.link);
}

if (outlineItems.length) {
  let scrollFrame;
  const requestOutlineUpdate = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = undefined;
      updateActiveOutline();
    });
  };

  outlineLinks.forEach((link) => {
    link.addEventListener('click', () => setActiveOutline(link));
  });

  window.addEventListener('scroll', requestOutlineUpdate, false);
  window.addEventListener('resize', requestOutlineUpdate);
  window.addEventListener('hashchange', updateActiveOutline);
  updateActiveOutline();
}

function isSearchOpen() {
  return Boolean(dialog.open || dialog.hasAttribute('open'));
}

function openSearch() {
  if (isSearchOpen()) return;
  if (typeof dialog.showModal === 'function') {
    try {
      dialog.showModal();
    } catch (_error) {
      dialog.setAttribute('open', '');
    }
  } else {
    dialog.setAttribute('open', '');
  }
  searchInput.focus();
}

function closeSearch() {
  if (typeof dialog.close === 'function' && dialog.open) {
    dialog.close();
    return;
  }
  dialog.removeAttribute('open');
}

function openSidebar() {
  sidebar.classList.add('open');
  backdrop.classList.add('open');
  menuButton.setAttribute('aria-expanded', 'true');
  document.body.classList.add('sidebar-open');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  backdrop.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('sidebar-open');
}

document.querySelector('.search-trigger').addEventListener('click', openSearch);
searchCloseButton.addEventListener('click', closeSearch);
dialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeSearch();
});
dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  const clickedBackdrop = event.clientX < bounds.left
    || event.clientX > bounds.right
    || event.clientY < bounds.top
    || event.clientY > bounds.bottom;
  if (clickedBackdrop) closeSearch();
});
menuButton.addEventListener('click', () => {
  if (sidebar.classList.contains('open')) closeSidebar();
  else openSidebar();
});
backdrop.addEventListener('click', closeSidebar);
sidebar.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', closeSidebar);
});

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openSearch();
  }
  const isEscape = event.key === 'Escape' || event.key === 'Esc' || event.code === 'Escape';
  if (isEscape) {
    if (isSearchOpen()) {
      event.preventDefault();
      event.stopPropagation();
      closeSearch();
    }
    closeSidebar();
  }
}, { capture: true });

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  resultItems.forEach((item) => {
    item.hidden = !item.textContent.toLowerCase().includes(query);
    if (!item.hidden) visibleCount += 1;
  });
  dialog.querySelector('.search-empty').hidden = visibleCount > 0;
});
resultItems.forEach((item) => {
  item.addEventListener('click', closeSearch);
});

const WORKSPACE_STORAGE_KEY = 'uxkm-guidebook-workspace-tabs';
const WORKSPACE_MAX_TABS = 15;
const WORKSPACE_HOME_TAB_ID = 'overview';
const WORKSPACE_MOBILE_MQ = '(max-width: 760px)';

function isWorkspaceMobileViewport() {
  return window.matchMedia(WORKSPACE_MOBILE_MQ).matches;
}

function escapeWorkspaceText(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function getCurrentWorkspacePage() {
  const { page, pageLabel, pagePath } = document.body.dataset;
  if (!page) return null;
  return {
    id: page,
    label: pageLabel || page,
    path: pagePath ?? '',
  };
}

function isWorkspaceHomeTab(item) {
  return item?.id === WORKSPACE_HOME_TAB_ID;
}

function pinWorkspaceHomeTab(tabs) {
  const homeIndex = tabs.findIndex(isWorkspaceHomeTab);
  if (homeIndex <= 0) return tabs;
  const home = tabs[homeIndex];
  return [home, ...tabs.slice(0, homeIndex), ...tabs.slice(homeIndex + 1)];
}

function evictWorkspaceTabs(tabs, limit = WORKSPACE_MAX_TABS) {
  const next = [...tabs];
  while (next.length > limit) {
    // 소개(overview) 탭은 한도 초과 삭제 대상에서 항상 제외합니다.
    const removable = next.findIndex((item) => !isWorkspaceHomeTab(item));
    if (removable < 0) break;
    next.splice(removable, 1);
  }
  return next;
}

function readWorkspaceTabs() {
  try {
    const parsed = JSON.parse(sessionStorage.getItem(WORKSPACE_STORAGE_KEY) || '[]');
    if (!Array.isArray(parsed)) return [];
    return pinWorkspaceHomeTab(
      parsed.filter((item) => item && typeof item.id === 'string' && typeof item.label === 'string'),
    );
  } catch (_error) {
    return [];
  }
}

function writeWorkspaceTabs(tabs) {
  sessionStorage.setItem(WORKSPACE_STORAGE_KEY, JSON.stringify(pinWorkspaceHomeTab(tabs)));
}

function workspacePageHref(path = '') {
  return new URL(`${path}index.html`, guideRoot).href;
}

function ensureWorkspaceRoot() {
  let root = document.getElementById('docs-workspace');
  if (root) return root;

  root = document.createElement('div');
  root.id = 'docs-workspace';
  root.className = 'docs-workspace';
  root.hidden = true;
  root.innerHTML = `
    <div class="docs-workspace-bar" role="navigation" aria-label="열린 문서 탭">
      <div class="docs-workspace-list-wrap">
        <div class="docs-workspace-list" role="tablist"></div>
      </div>
      <div class="docs-workspace-controls">
        <button type="button" class="docs-workspace-nav" data-workspace-action="prev" aria-label="이전 탭" disabled>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
        </button>
        <div class="docs-workspace-more">
          <button type="button" class="docs-workspace-nav" data-workspace-action="more" aria-label="열린 탭 목록" aria-haspopup="menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
          <div class="docs-workspace-menu" role="menu" hidden></div>
        </div>
        <button type="button" class="docs-workspace-nav" data-workspace-action="next" aria-label="다음 탭" disabled>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
        </button>
      </div>
    </div>
  `;
  const shell = document.querySelector('.docs-shell');
  if (shell) shell.before(root);
  else document.body.append(root);
  return root;
}

function syncWorkspaceTabs(current) {
  let tabs = readWorkspaceTabs()
    .map((item) => ({
      id: item.id,
      label: item.label,
      path: typeof item.path === 'string' ? item.path : '',
    }))
    .filter((item) => item.id);

  const index = tabs.findIndex((item) => item.id === current.id);
  if (index >= 0) {
    tabs[index] = { ...tabs[index], ...current };
  } else {
    // 새 탭을 넣을 자리를 만들기 소개 탭은 삭제하지 않습니다.
    tabs = evictWorkspaceTabs(tabs, WORKSPACE_MAX_TABS - 1);
    if (isWorkspaceHomeTab(current)) tabs.unshift(current);
    else tabs.push(current);
  }

  tabs = pinWorkspaceHomeTab(evictWorkspaceTabs(tabs, WORKSPACE_MAX_TABS));
  writeWorkspaceTabs(tabs);
  return tabs;
}

function closeWorkspaceMenu(root) {
  const toggle = root.querySelector('[data-workspace-action="more"]');
  const menu = root.querySelector('.docs-workspace-menu');
  if (!toggle || !menu) return;
  menu.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
}

function scrollActiveWorkspaceTabIntoView(root) {
  const active = root.querySelector('.docs-workspace-item.is-active')
    || root.querySelector('.docs-workspace-tab.is-active');
  if (!active) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  active.scrollIntoView({
    inline: 'nearest',
    block: 'nearest',
    behavior: reduceMotion ? 'auto' : 'smooth',
  });
}

function renderWorkspaceTabs(root, tabs, activeId) {
  const list = root.querySelector('.docs-workspace-list');
  const menu = root.querySelector('.docs-workspace-menu');
  const prevButton = root.querySelector('[data-workspace-action="prev"]');
  const nextButton = root.querySelector('[data-workspace-action="next"]');
  if (!list || !menu || !prevButton || !nextButton) return;

  const canClose = tabs.length > 1;
  const activeIndex = tabs.findIndex((item) => item.id === activeId);

  list.innerHTML = tabs.map((item) => {
    const active = item.id === activeId;
    const closeButton = canClose
      ? `<button type="button" class="docs-workspace-close" data-workspace-close="${escapeWorkspaceText(item.id)}" aria-label="${escapeWorkspaceText(item.label)} 닫기"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>`
      : '';
    return `<div class="docs-workspace-item${active ? ' is-active' : ''}${canClose ? '' : ' is-solo'}">
      <a class="docs-workspace-tab${active ? ' is-active' : ''}" href="${workspacePageHref(item.path)}" data-workspace-id="${escapeWorkspaceText(item.id)}" role="tab" aria-selected="${active}"${active ? ' aria-current="page"' : ''}>
        <span class="docs-workspace-label">${escapeWorkspaceText(item.label)}</span>
      </a>
      ${closeButton}
    </div>`;
  }).join('');

  menu.innerHTML = tabs.map((item) => {
    const active = item.id === activeId;
    return `<a class="docs-workspace-menu-item${active ? ' is-active' : ''}" href="${workspacePageHref(item.path)}" role="menuitem" data-workspace-id="${escapeWorkspaceText(item.id)}">${escapeWorkspaceText(item.label)}</a>`;
  }).join('');

  prevButton.disabled = activeIndex <= 0;
  nextButton.disabled = activeIndex < 0 || activeIndex >= tabs.length - 1;
  root.hidden = tabs.length === 0;
  document.body.classList.toggle('has-workspace-tabs', tabs.length > 0);
  closeWorkspaceMenu(root);
  requestAnimationFrame(() => scrollActiveWorkspaceTabIntoView(root));
}

function closeWorkspaceTab(tabs, activeId, closeId) {
  if (tabs.length <= 1) return { tabs, navigateTo: null };
  const index = tabs.findIndex((item) => item.id === closeId);
  if (index < 0) return { tabs, navigateTo: null };

  const nextTabs = pinWorkspaceHomeTab(tabs.filter((item) => item.id !== closeId));
  writeWorkspaceTabs(nextTabs);

  if (closeId !== activeId) {
    return { tabs: nextTabs, navigateTo: null };
  }

  const fallback = tabs[index - 1] ?? nextTabs[nextTabs.length - 1] ?? null;
  return { tabs: nextTabs, navigateTo: fallback };
}

function disableWorkspaceTabs(root) {
  if (root) {
    root.hidden = true;
    closeWorkspaceMenu(root);
  }
  document.body.classList.remove('has-workspace-tabs');
}

function initWorkspaceTabs() {
  const current = getCurrentWorkspacePage();
  if (!current) return;

  const root = ensureWorkspaceRoot();
  const media = window.matchMedia(WORKSPACE_MOBILE_MQ);
  let tabs = readWorkspaceTabs();

  function enableDesktopWorkspace() {
    tabs = syncWorkspaceTabs(current);
    renderWorkspaceTabs(root, tabs, current.id);
  }

  function applyWorkspaceMode() {
    if (isWorkspaceMobileViewport()) disableWorkspaceTabs(root);
    else enableDesktopWorkspace();
  }

  applyWorkspaceMode();

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', applyWorkspaceMode);
  } else if (typeof media.addListener === 'function') {
    media.addListener(applyWorkspaceMode);
  }

  root.addEventListener('click', (event) => {
    if (isWorkspaceMobileViewport()) return;

    const closeButton = event.target.closest('[data-workspace-close]');
    if (closeButton && root.contains(closeButton)) {
      event.preventDefault();
      const result = closeWorkspaceTab(tabs, current.id, closeButton.dataset.workspaceClose);
      tabs = result.tabs;
      if (result.navigateTo) {
        window.location.href = workspacePageHref(result.navigateTo.path);
        return;
      }
      renderWorkspaceTabs(root, tabs, current.id);
      return;
    }

    const actionButton = event.target.closest('[data-workspace-action]');
    if (!actionButton || !root.contains(actionButton)) return;

    const action = actionButton.dataset.workspaceAction;
    const activeIndex = tabs.findIndex((item) => item.id === current.id);

    if (action === 'prev' && activeIndex > 0) {
      window.location.href = workspacePageHref(tabs[activeIndex - 1].path);
      return;
    }
    if (action === 'next' && activeIndex >= 0 && activeIndex < tabs.length - 1) {
      window.location.href = workspacePageHref(tabs[activeIndex + 1].path);
      return;
    }
    if (action === 'more') {
      event.preventDefault();
      event.stopPropagation();
      const menu = root.querySelector('.docs-workspace-menu');
      if (!menu) return;
      const open = menu.hidden;
      menu.hidden = !open;
      actionButton.setAttribute('aria-expanded', String(open));
    }
  });

  document.addEventListener('click', (event) => {
    if (isWorkspaceMobileViewport()) return;
    if (!root.contains(event.target)) closeWorkspaceMenu(root);
  });

  document.addEventListener('keydown', (event) => {
    if (isWorkspaceMobileViewport()) return;
    if (event.key === 'Escape' || event.key === 'Esc' || event.code === 'Escape') {
      closeWorkspaceMenu(root);
    }
  });
}

initWorkspaceTabs();
