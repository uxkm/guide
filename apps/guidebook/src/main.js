import './style.css';

const guideRoot = new URL(import.meta.url);
guideRoot.pathname = guideRoot.pathname.replace(/\/(?:src|assets)\/[^/]+$/, '/');
document.querySelectorAll('[data-guide-path]').forEach((link) => {
  link.href = new URL(link.dataset.guidePath, guideRoot).href;
});

const storybookRoot = new URL(
  import.meta.env.VITE_STORYBOOK_URL || (import.meta.env.DEV ? 'http://localhost:6006/' : 'storybook/'),
  guideRoot
);
document.querySelectorAll('[data-storybook-path]').forEach((link) => {
  link.href = new URL(link.dataset.storybookPath, storybookRoot).href;
});

const dialog = document.querySelector('.search-dialog');
const searchInput = dialog.querySelector('input');
const resultItems = [...dialog.querySelectorAll('.search-result')];
const sidebar = document.querySelector('.docs-sidebar');
const backdrop = document.querySelector('.sidebar-backdrop');
const menuButton = document.querySelector('.menu-button');
const outlineLinks = [...document.querySelectorAll('.page-outline a[href^="#"]')];

function getOutlineTarget(link) {
  try {
    return document.getElementById(decodeURIComponent(link.hash.slice(1)));
  } catch {
    return null;
  }
}

const outlineItems = outlineLinks
  .map((link) => ({ link, target: getOutlineTarget(link) }))
  .filter(({ target }) => target);

function setActiveOutline(activeLink) {
  outlineLinks.forEach((link) => {
    const isActive = link === activeLink;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

function updateActiveOutline() {
  if (!outlineItems.length) return;

  const activationLine = 104;
  const reachedPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;
  if (reachedPageEnd) {
    setActiveOutline(outlineItems.at(-1).link);
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

  window.addEventListener('scroll', requestOutlineUpdate, { passive: true });
  window.addEventListener('resize', requestOutlineUpdate);
  window.addEventListener('hashchange', updateActiveOutline);
  updateActiveOutline();
}

function openSearch() {
  dialog.showModal();
  searchInput.focus();
}

function closeSidebar() {
  sidebar.classList.remove('open');
  backdrop.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

document.querySelector('.search-trigger').addEventListener('click', openSearch);
menuButton.addEventListener('click', () => {
  sidebar.classList.add('open');
  backdrop.classList.add('open');
  menuButton.setAttribute('aria-expanded', 'true');
});
backdrop.addEventListener('click', closeSidebar);

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openSearch();
  }
  if (event.key === 'Escape') closeSidebar();
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  resultItems.forEach((item) => {
    item.hidden = !item.textContent.toLowerCase().includes(query);
    if (!item.hidden) visibleCount += 1;
  });
  dialog.querySelector('.search-empty').hidden = visibleCount > 0;
});
