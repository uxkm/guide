import {
  scheduleOverlayLayoutUpdates,
  updatePopoverLayout,
  updateTooltipLayout,
} from '@/legacy/overlay-layout';

let globalListenersBound = false;

function getDropdownItems(menu) {
  return Array.from(
    menu.querySelectorAll(
      '[role="menuitem"]:not(.is-disabled):not([aria-disabled="true"]), [role="option"]:not(.is-disabled):not([aria-disabled="true"])',
    ),
  );
}

function setDropdownOpen(dropdown, open) {
  const trigger = dropdown.querySelector('.dropdown_trigger');
  const menu = dropdown.querySelector('.dropdown_menu');

  dropdown.classList.toggle('is-open', open);

  if (trigger) {
    trigger.setAttribute('aria-expanded', String(open));
    trigger.classList.toggle('is-open', open);
  }

  if (menu && open) {
    const items = getDropdownItems(menu);
    const active = items.find(
      (item) => item.classList.contains('is-active') || item.getAttribute('aria-selected') === 'true',
    );

    if (active) {
      active.focus();
    } else if (items[0]) {
      items[0].focus();
    }
  }
}

function closeAllDropdowns(except) {
  document.querySelectorAll('[data-dropdown].is-open').forEach((dropdown) => {
    if (dropdown !== except) {
      setDropdownOpen(dropdown, false);
    }
  });
}

function initDropdown(dropdown) {
  if (dropdown.dataset.overlayInit) return;

  const trigger = dropdown.querySelector('.dropdown_trigger');
  const menu = dropdown.querySelector('.dropdown_menu');

  if (!trigger || !menu || dropdown.classList.contains('is-disabled') || trigger.disabled) {
    return;
  }

  dropdown.dataset.overlayInit = '1';

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

function setPopoverOpen(popover, open) {
  const trigger = popover.querySelector('.popover_trigger');
  const panel = popover.querySelector('.popover_panel');

  popover.classList.toggle('is-open', open);

  if (trigger) {
    trigger.setAttribute('aria-expanded', String(open));
  }

  if (panel) {
    if (open) {
      panel.removeAttribute('hidden');
      const closeBtn = panel.querySelector('.popover_close');
      if (closeBtn && popover.getAttribute('data-popover-trigger') !== 'hover') {
        closeBtn.focus();
      }
      updatePopoverLayout(popover);
    } else {
      panel.setAttribute('hidden', '');
    }
  }
}

function closeAllPopovers(except) {
  document.querySelectorAll('[data-popover].is-open').forEach((popover) => {
    if (popover !== except) {
      setPopoverOpen(popover, false);
    }
  });
}

function initPopover(popover) {
  if (popover.dataset.overlayInit) return;

  const trigger = popover.querySelector('.popover_trigger');
  const panel = popover.querySelector('.popover_panel');

  if (!trigger || !panel || popover.classList.contains('is-disabled') || trigger.disabled) {
    return;
  }

  popover.dataset.overlayInit = '1';

  const triggerMode = popover.getAttribute('data-popover-trigger') || 'click';
  let hoverTimer = null;

  function clearHoverTimer() {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
  }

  function scheduleClose() {
    clearHoverTimer();
    hoverTimer = setTimeout(() => {
      setPopoverOpen(popover, false);
    }, 120);
  }

  if (triggerMode === 'hover') {
    popover.addEventListener('mouseenter', () => {
      clearHoverTimer();
      setPopoverOpen(popover, true);
    });

    popover.addEventListener('mouseleave', scheduleClose);

    trigger.addEventListener('focus', () => {
      clearHoverTimer();
      setPopoverOpen(popover, true);
    });

    trigger.addEventListener('blur', scheduleClose);
  } else {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const open = popover.classList.contains('is-open');

      if (open) {
        setPopoverOpen(popover, false);
      } else {
        closeAllPopovers(popover);
        setPopoverOpen(popover, true);
      }
    });
  }

  popover.querySelectorAll('[data-popover-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setPopoverOpen(popover, false);
      trigger.focus();
    });
  });

  if (popover.classList.contains('is-open')) {
    updatePopoverLayout(popover);
  }
}

function focusTooltipTrigger(tooltip) {
  const triggerWrap = tooltip.querySelector('.tooltip_trigger');
  if (!triggerWrap) return;

  const focusable =
    triggerWrap.querySelector(
      'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
    ) || (triggerWrap.tabIndex >= 0 ? triggerWrap : null);

  focusable?.focus();
}

function setTooltipOpen(tooltip, open) {
  const trigger = tooltip.querySelector('.tooltip_trigger');
  const bubble = tooltip.querySelector('.tooltip_bubble');

  tooltip.classList.toggle('is-open', open);

  if (trigger && tooltip.getAttribute('data-tooltip-trigger') === 'click') {
    trigger.setAttribute('aria-expanded', String(open));
  }

  if (bubble) {
    if (open) {
      bubble.removeAttribute('hidden');
      const closeBtn = bubble.querySelector('.tooltip_close');
      if (closeBtn && tooltip.getAttribute('data-tooltip-trigger') === 'click') {
        closeBtn.focus();
      }
      updateTooltipLayout(tooltip);
    } else {
      bubble.setAttribute('hidden', '');
    }
  }
}

function closeAllTooltips(except) {
  document.querySelectorAll('[data-tooltip].is-open').forEach((tooltip) => {
    if (tooltip !== except) {
      setTooltipOpen(tooltip, false);
    }
  });
}

function initTooltip(tooltip) {
  if (tooltip.dataset.overlayInit) return;

  const trigger = tooltip.querySelector('.tooltip_trigger');
  const bubble = tooltip.querySelector('.tooltip_bubble');

  if (!trigger || !bubble || tooltip.classList.contains('is-disabled')) {
    return;
  }

  tooltip.dataset.overlayInit = '1';

  const triggerMode = tooltip.getAttribute('data-tooltip-trigger') || 'hover';
  let hoverTimer = null;

  function clearHoverTimer() {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
  }

  function scheduleClose() {
    clearHoverTimer();
    hoverTimer = setTimeout(() => {
      setTooltipOpen(tooltip, false);
    }, 120);
  }

  if (triggerMode === 'click') {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const open = tooltip.classList.contains('is-open');

      if (open) {
        setTooltipOpen(tooltip, false);
      } else {
        closeAllTooltips(tooltip);
        setTooltipOpen(tooltip, true);
      }
    });

    tooltip.querySelectorAll('[data-tooltip-close]').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        setTooltipOpen(tooltip, false);
        focusTooltipTrigger(tooltip);
      });
    });
  } else {
    tooltip.addEventListener('mouseenter', () => {
      clearHoverTimer();
      setTooltipOpen(tooltip, true);
    });

    tooltip.addEventListener('mouseleave', scheduleClose);

    trigger.addEventListener('focus', () => {
      clearHoverTimer();
      setTooltipOpen(tooltip, true);
    });

    trigger.addEventListener('blur', scheduleClose);
  }

  if (tooltip.classList.contains('is-open')) {
    updateTooltipLayout(tooltip);
  }
}

function bindGlobalListeners() {
  if (globalListenersBound) return;
  globalListenersBound = true;

  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-dropdown]')) {
      closeAllDropdowns();
    }

    if (!event.target.closest('[data-popover]')) {
      closeAllPopovers();
    }

    if (!event.target.closest('[data-tooltip]')) {
      closeAllTooltips();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllDropdowns();
      closeAllPopovers();
      closeAllTooltips();
    }
  });

  window.addEventListener('resize', scheduleOverlayLayoutUpdates);
}

export function initDropdowns(root = document) {
  root.querySelectorAll('[data-dropdown]').forEach(initDropdown);
}

export function initPopovers(root = document) {
  root.querySelectorAll('[data-popover]').forEach(initPopover);
}

export function initTooltips(root = document) {
  root.querySelectorAll('[data-tooltip]').forEach(initTooltip);
}

export function initOverlays(root = document) {
  bindGlobalListeners();
  initDropdowns(root);
  initPopovers(root);
  initTooltips(root);
  scheduleOverlayLayoutUpdates();
}
