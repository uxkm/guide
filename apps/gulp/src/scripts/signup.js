import './main.js';
import { initSignup } from '../../../../packages/demo/signup.js';
import '../../../../packages/demo/signup.css';
import { initTabs } from '../components/navigation/Tabs/tabs.js';
import { initDropdown } from '../components/navigation/Dropdown/dropdown.js';
import { initPagination } from '../components/navigation/Pagination/pagination.js';
import { initTree } from '../components/data-display/Tree/tree.js';
import { initTooltip } from '../components/feedback/Tooltip/tooltip.js';
import { initPopover } from '../components/feedback/Popover/popover.js';
import { initModal } from '../components/feedback/Modal/modal.js';
import { initDrawer } from '../components/feedback/Drawer/drawer.js';

const root = document.querySelector('.join_demo');
root.querySelector('.join_terms-trigger').dataset.modalTrigger = '#join-terms-modal';
root.querySelector('.join_help-trigger').dataset.drawerTrigger = '#join-help-drawer';
initSignup(root);
[
  initTabs,
  initDropdown,
  initPagination,
  initTree,
  initTooltip,
  initPopover,
  initModal,
  initDrawer,
].forEach((init) => init(document));
const copy = [
  '프로필에서 나를 소개해 보세요.',
  '관심 분야를 선택해 콘텐츠를 찾아보세요.',
  '새로운 소식과 혜택을 만나 보세요.',
];
root.querySelector('#join-page-copy').textContent = copy[0];
root.addEventListener('pagination:change', (event) => {
  root.querySelector('#join-page-copy').textContent = copy[event.detail.current - 1];
});
// Keep keyboard focus within an open overlay, matching the framework components.
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Tab') return;
  const overlay = document.querySelector('#join-terms-modal.is-open, #join-help-drawer.is-open');
  if (!overlay) return;
  const items = [...overlay.querySelectorAll('button, a[href], input, [tabindex="0"]')].filter(
    (el) => !el.disabled && el.getClientRects().length,
  );
  const first = items[0],
    last = items.at(-1);
  if (!first) {
    event.preventDefault();
    overlay.focus();
  } else if (
    event.shiftKey &&
    (document.activeElement === first || document.activeElement === overlay)
  ) {
    event.preventDefault();
    last.focus();
  } else if (
    !event.shiftKey &&
    (document.activeElement === last || document.activeElement === overlay)
  ) {
    event.preventDefault();
    first.focus();
  }
});
