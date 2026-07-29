/**
 * Dropdown 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

let documentListenersBound = false;

function getDropdownItems(menu) {
  return Array.from(
    menu.querySelectorAll(
      '[role="menuitem"]:not(.is-disabled):not([aria-disabled="true"]), [role="option"]:not(.is-disabled):not([aria-disabled="true"])',
    ),
  );
}

function isDropdownStatic(dropdown) {
  return dropdown.hasAttribute('data-dropdown-static');
}

function setDropdownOpen(dropdown, open) {
  const trigger = dropdown.querySelector('.dropdown_trigger');
  const menu = dropdown.querySelector('.dropdown_menu');

  if (isDropdownStatic(dropdown) && !open) {
    return;
  }

  dropdown.classList.toggle('is-open', open);

  if (trigger) {
    trigger.setAttribute('aria-expanded', String(open));
    trigger.classList.toggle('is-open', open);
  }

  if (menu && open) {
    const items = getDropdownItems(menu);
    const active = items.find(
      (item) =>
        item.classList.contains('is-active') ||
        item.getAttribute('aria-selected') === 'true',
    );

    if (active) {
      active.focus();
    } else if (items[0]) {
      items[0].focus();
    }
  }
}

function closeAllDropdowns(except) {
  document
    .querySelectorAll('[data-dropdown].is-open:not([data-dropdown-static])')
    .forEach((dropdown) => {
      if (dropdown !== except) {
        setDropdownOpen(dropdown, false);
      }
    });
}

function initDropdown(dropdown) {
  if (dropdown._sbDropdownInit) return;
  dropdown._sbDropdownInit = true;

  const trigger = dropdown.querySelector('.dropdown_trigger');
  const menu = dropdown.querySelector('.dropdown_menu');

  if (
    !trigger ||
    !menu ||
    dropdown.classList.contains('is-disabled') ||
    trigger.disabled ||
    isDropdownStatic(dropdown)
  ) {
    return;
  }

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    const open = dropdown.classList.contains('is-open');

    if (open) {
      setDropdownOpen(dropdown, false);
    } else {
      closeAllDropdowns(dropdown);
      setDropdownOpen(dropdown, true);
    }
  });

  menu.addEventListener('click', (event) => {
    const item = event.target.closest('[role="menuitem"], [role="option"]');

    if (
      !item ||
      !menu.contains(item) ||
      item.classList.contains('is-disabled') ||
      item.getAttribute('aria-disabled') === 'true'
    ) {
      return;
    }

    if (item.getAttribute('role') === 'option') {
      menu.querySelectorAll('[role="option"]').forEach((el) => {
        el.classList.remove('is-active');
        el.setAttribute('aria-selected', 'false');
      });

      item.classList.add('is-active');
      item.setAttribute('aria-selected', 'true');

      const label = dropdown.querySelector('.dropdown_trigger .btn_label');
      if (label) {
        label.textContent = item.textContent.trim();
      }
    }

    if (dropdown.hasAttribute('data-dropdown-close-on-select')) {
      setDropdownOpen(dropdown, false);
      trigger.focus();
    }
  });

  menu.addEventListener('keydown', (event) => {
    const items = getDropdownItems(menu);
    const index = items.indexOf(document.activeElement);
    let next = null;

    if (event.key === 'ArrowDown') {
      next = items[index < 0 ? 0 : Math.min(index + 1, items.length - 1)];
    } else if (event.key === 'ArrowUp') {
      next = items[index <= 0 ? 0 : index - 1];
    } else if (event.key === 'Home') {
      next = items[0] || null;
    } else if (event.key === 'End') {
      next = items[items.length - 1] || null;
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setDropdownOpen(dropdown, false);
      trigger.focus();
      return;
    }

    if (next) {
      event.preventDefault();
      next.focus();
    }
  });
}

function bindDocumentListeners() {
  if (documentListenersBound) return;
  documentListenersBound = true;

  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-dropdown]')) {
      closeAllDropdowns();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllDropdowns();
    }
  });
}

/**
 * @param {ParentNode} [root=document]
 */
export function initDropdowns(root = document) {
  bindDocumentListeners();
  root.querySelectorAll('[data-dropdown]').forEach(initDropdown);
}
