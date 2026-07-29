/**
 * Drawer 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

const DRAWER_CLOSE_MS = 380;

/** @type {HTMLElement[]} */
let openDrawerStack = [];
/** @type {null | {
 *   drawer: HTMLElement,
 *   panel: HTMLElement,
 *   handle: Element | null,
 *   pointerId: number,
 *   startY: number,
 *   startHeight: number,
 *   deltaY: number,
 *   snaps: { collapsed: number, expanded: number },
 * }} */
let drawerDragState = null;
let initialized = false;

function getDrawerTriggers(drawer) {
  if (!drawer.id) return [];
  return Array.from(
    document.querySelectorAll(
      `[data-drawer-trigger][aria-controls="${drawer.id}"]`,
    ),
  );
}

function setDrawerTriggersExpanded(drawer, expanded) {
  getDrawerTriggers(drawer).forEach((trigger) => {
    trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });
}

function updateDrawerStackLevels() {
  openDrawerStack.forEach((drawer, index) => {
    drawer.style.setProperty('--drawer-stack-level', String(index));
  });
}

function updateBodyDrawerLock() {
  const openDrawers = document.querySelectorAll(
    '[data-drawer].is-open:not([data-drawer-backdrop="false"])',
  );
  let hasPageOverlay = false;

  openDrawers.forEach((drawer) => {
    if (!drawer.closest('.drawer_demo-frame')) {
      hasPageOverlay = true;
    }
  });

  document.body.classList.toggle('is-drawer-open', hasPageOverlay);
}

function openDrawer(drawer, trigger) {
  if (
    !drawer ||
    drawer.classList.contains('is-open') ||
    drawer.classList.contains('is-closing') ||
    drawer.classList.contains('is-opening')
  ) {
    return;
  }

  drawer.classList.remove('is-closing');
  drawer.hidden = false;
  drawer.classList.add('is-opening');

  if (trigger) {
    drawer._drawerReturnFocus = trigger;
  }

  openDrawerStack.push(drawer);
  updateDrawerStackLevels();

  const panel = drawer.querySelector('.drawer_panel');
  let opened = false;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function finishOpen() {
    if (opened) return;
    opened = true;

    if (panel) {
      panel.removeEventListener('transitionend', onOpenTransitionEnd);
    }

    drawer.classList.remove('is-opening');
    updateBodyDrawerLock();

    if (panel && drawer.getAttribute('data-drawer-draggable') === 'true') {
      panel.classList.remove('is-expanded');
      panel.style.height = '';
      drawer._drawerCollapsedHeight = panel.getBoundingClientRect().height;
    }

    requestAnimationFrame(() => {
      const closeBtn = drawer.querySelector('.drawer_close');
      if (closeBtn) closeBtn.focus();
      else drawer.focus();
    });
  }

  function onOpenTransitionEnd(event) {
    if (event.target !== panel || event.propertyName !== 'transform') return;
    finishOpen();
  }

  function startOpenTransition() {
    drawer.classList.add('is-open');
    setDrawerTriggersExpanded(drawer, true);
    updateBodyDrawerLock();

    if (panel && !reduceMotion) {
      panel.addEventListener('transitionend', onOpenTransitionEnd);
      window.setTimeout(finishOpen, DRAWER_CLOSE_MS);
    } else {
      finishOpen();
    }
  }

  void drawer.offsetWidth;

  if (reduceMotion) {
    startOpenTransition();
    return;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(startOpenTransition);
  });
}

function finishCloseDrawer(drawer) {
  drawer.classList.remove('is-closing');
  drawer.hidden = true;
  drawer.style.removeProperty('--drawer-stack-level');
  setDrawerTriggersExpanded(drawer, false);

  const panel = drawer.querySelector('.drawer_panel');
  if (panel) {
    panel.classList.remove('is-expanded', 'is-dragging');
    panel.style.height = '';
    panel.style.transform = '';
  }

  openDrawerStack = openDrawerStack.filter((item) => item !== drawer);
  updateDrawerStackLevels();
  updateBodyDrawerLock();

  if (drawer._drawerReturnFocus) {
    drawer._drawerReturnFocus.focus();
    drawer._drawerReturnFocus = null;
  }
}

function closeDrawer(drawer) {
  if (
    !drawer ||
    !drawer.classList.contains('is-open') ||
    drawer.classList.contains('is-closing')
  ) {
    return;
  }

  drawer.classList.remove('is-open');
  drawer.classList.add('is-closing');

  const panel = drawer.querySelector('.drawer_panel');
  let closed = false;

  function completeClose() {
    if (closed) return;
    closed = true;
    if (panel) {
      panel.removeEventListener('transitionend', onTransitionEnd);
    }
    finishCloseDrawer(drawer);
  }

  function onTransitionEnd(event) {
    if (event.target !== panel || event.propertyName !== 'transform') return;
    completeClose();
  }

  if (panel && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    panel.addEventListener('transitionend', onTransitionEnd);
    window.setTimeout(completeClose, DRAWER_CLOSE_MS);
  } else {
    completeClose();
  }
}

function resolveDrawerSelector(trigger) {
  return (
    trigger.getAttribute('data-drawer-trigger') ||
    `#${trigger.getAttribute('aria-controls')}`
  );
}

function getDrawerDragContainerHeight(drawer) {
  const frame = drawer.closest('.drawer_demo-frame');
  if (frame) return frame.clientHeight;
  return window.innerHeight;
}

function getDrawerSnapHeights(drawer, panel) {
  let collapsed = drawer._drawerCollapsedHeight;

  if (!collapsed || collapsed < 1) {
    const wasExpanded = panel.classList.contains('is-expanded');
    const prevHeight = panel.style.height;

    panel.classList.remove('is-expanded');
    panel.style.height = '';
    collapsed = panel.getBoundingClientRect().height;
    drawer._drawerCollapsedHeight = collapsed;

    if (wasExpanded) panel.classList.add('is-expanded');
    panel.style.height = prevHeight;
  }

  const expanded = Math.max(
    collapsed + 48,
    getDrawerDragContainerHeight(drawer) * 0.9,
  );

  return { collapsed, expanded };
}

function isDrawerDragStartTarget(event, drawer) {
  if (
    event.target.closest(
      '[data-drawer-close], a, input, textarea, select, .drawer_extra',
    )
  ) {
    return false;
  }

  if (event.target.closest('[data-drawer-drag-handle]')) {
    return true;
  }

  const header = event.target.closest('.drawer_header');
  return Boolean(header && drawer.contains(header));
}

function endDrawerDrag(event) {
  if (!drawerDragState) return;

  const state = drawerDragState;
  const { drawer, panel } = state;

  drawerDragState = null;
  panel.classList.remove('is-dragging');

  if (state.pointerId != null && state.handle?.releasePointerCapture) {
    try {
      state.handle.releasePointerCapture(state.pointerId);
    } catch {
      // ignore
    }
  }

  const currentHeight = panel.getBoundingClientRect().height;
  const snaps = getDrawerSnapHeights(drawer, panel);
  const closeThreshold = snaps.collapsed * 0.55;
  const expandThreshold = (snaps.collapsed + snaps.expanded) / 2;
  const startedExpanded = state.startHeight >= expandThreshold;

  panel.style.height = '';
  panel.style.transform = '';

  if (currentHeight < closeThreshold) {
    panel.classList.remove('is-expanded');
    closeDrawer(drawer);
    return;
  }

  if (!startedExpanded && state.deltaY < -snaps.collapsed * 0.4) {
    panel.classList.remove('is-expanded');
    closeDrawer(drawer);
    return;
  }

  if (currentHeight >= expandThreshold || (!startedExpanded && state.deltaY > 48)) {
    panel.classList.add('is-expanded');
  } else {
    panel.classList.remove('is-expanded');
  }

  if (event) event.preventDefault();
}

function initDrawerOpenOnLoad() {
  document
    .querySelectorAll('[data-drawer][data-drawer-open-on-load="true"]')
    .forEach((drawer) => {
      if (drawer.dataset.drawerOpenOnLoadDone === 'true') return;
      drawer.dataset.drawerOpenOnLoadDone = 'true';
      openDrawer(drawer, null);
    });
}

/** Storybook에서 Drawer 클릭·드래그·Esc·자동 열기 동작을 활성화한다. */
export function initDrawerRuntime() {
  if (initialized) return;
  initialized = true;

  document.addEventListener(
    'pointerdown',
    (event) => {
      if (event.button != null && event.button !== 0) return;

      const drawer = event.target.closest(
        '[data-drawer][data-drawer-draggable="true"]',
      );

      if (
        !drawer ||
        !drawer.classList.contains('is-open') ||
        drawer.classList.contains('is-closing')
      ) {
        return;
      }

      if (!isDrawerDragStartTarget(event, drawer)) return;

      const panel = drawer.querySelector('.drawer_panel.drawer_placement-bottom');
      if (!panel) return;

      const handle =
        event.target.closest('[data-drawer-drag-handle]') ||
        panel.querySelector('[data-drawer-drag-handle]');
      const snaps = getDrawerSnapHeights(drawer, panel);

      drawerDragState = {
        drawer,
        panel,
        handle,
        pointerId: event.pointerId,
        startY: event.clientY,
        startHeight: panel.getBoundingClientRect().height,
        deltaY: 0,
        snaps,
      };

      panel.classList.add('is-dragging');

      if (handle?.setPointerCapture && event.pointerId != null) {
        try {
          handle.setPointerCapture(event.pointerId);
        } catch {
          // ignore
        }
      }

      event.preventDefault();
    },
    { passive: false },
  );

  document.addEventListener(
    'pointermove',
    (event) => {
      if (!drawerDragState) return;

      const state = drawerDragState;
      const deltaY = state.startY - event.clientY;
      const nextHeight = Math.min(
        state.snaps.expanded,
        Math.max(0, state.startHeight + deltaY),
      );

      state.deltaY = deltaY;
      state.panel.style.height = `${nextHeight}px`;
      state.panel.style.transform = 'translateY(0)';
      event.preventDefault();
    },
    { passive: false },
  );

  document.addEventListener('pointerup', endDrawerDrag);
  document.addEventListener('pointercancel', endDrawerDrag);

  document.addEventListener('click', (event) => {
    const drawerTrigger = event.target.closest('[data-drawer-trigger]');

    if (drawerTrigger) {
      const drawerSelector = resolveDrawerSelector(drawerTrigger);
      const drawer = drawerSelector
        ? document.querySelector(drawerSelector)
        : null;

      if (drawer) {
        if (drawer.classList.contains('is-open')) {
          closeDrawer(drawer);
        } else {
          openDrawer(drawer, drawerTrigger);
        }
      }
      return;
    }

    const drawerCloseEl = event.target.closest('[data-drawer-close]');
    if (drawerCloseEl) {
      const drawerRoot = drawerCloseEl.closest('[data-drawer]');
      if (drawerRoot) closeDrawer(drawerRoot);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && openDrawerStack.length) {
      closeDrawer(openDrawerStack[openDrawerStack.length - 1]);
    }
  });

  initDrawerOpenOnLoad();

  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(() => {
      initDrawerOpenOnLoad();
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }
}
