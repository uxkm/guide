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
