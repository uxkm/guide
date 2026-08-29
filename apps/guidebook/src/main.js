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

function alignActiveSidebarLink() {
  const activeLink = sidebar.querySelector('.nav-link[aria-current="page"]');
  if (!activeLink) return;

  const sidebarRect = sidebar.getBoundingClientRect();
  const activeRect = activeLink.getBoundingClientRect();
  const activeTop = activeRect.top - sidebarRect.top + sidebar.scrollTop;
  const max = sidebar.scrollHeight - sidebar.clientHeight;
  sidebar.scrollTo({
    top: Math.max(
      0,
      Math.min(activeTop - (sidebar.clientHeight - activeRect.height) / 2, max),
    ),
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  });
}

requestAnimationFrame(alignActiveSidebarLink);
window.addEventListener('resize', () => requestAnimationFrame(alignActiveSidebarLink));

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
