export function initDrawer(root = document) {
  const drawers = [...root.querySelectorAll('[data-drawer], [data-component="Drawer"]')];
  const stack = [];
  const close = (drawer, reason = 'close', sourceEvent) => {
    drawer.classList.remove('is-open');
    drawer.hidden = true;
    const index = stack.indexOf(drawer);
    if (index >= 0) stack.splice(index, 1);
    stack.at(-1)?.classList.remove('is-stack-covered');
    if (!stack.length) drawer.ownerDocument.body.classList.remove('is-drawer-open');
    drawer._drawerTrigger?.setAttribute('aria-expanded', 'false');
    drawer._drawerTrigger?.focus();
    drawer.dispatchEvent(new CustomEvent('close', { bubbles: true, detail: { reason, sourceEvent } }));
  };
  const open = (drawer, trigger) => {
    drawer.hidden = false;
    drawer.classList.add('is-open');
    drawer._drawerTrigger = trigger;
    trigger?.setAttribute('aria-expanded', 'true');
    drawer.ownerDocument.body.classList.add('is-drawer-open');
    stack.at(-1)?.classList.add('is-stack-covered');
    if (!stack.includes(drawer)) stack.push(drawer);
    drawer.focus();
  };
  drawers.forEach((drawer) => {
    if (drawer.dataset.drawerReady) return;
    drawer.dataset.drawerReady = 'true';
    drawer.querySelectorAll('[data-drawer-close]').forEach((button) => button.addEventListener('click', (event) => close(drawer, button.classList.contains('drawer_backdrop') ? 'backdrop' : 'close', event)));
    if (drawer.dataset.drawerOpenOnLoad === 'true' || drawer.classList.contains('is-open')) open(drawer);
  });
  root.querySelectorAll('[data-drawer-trigger]').forEach((trigger) => trigger.addEventListener('click', () => {
    const drawer = drawers.find((item) => `#${item.id}` === trigger.dataset.drawerTrigger);
    if (drawer) open(drawer, trigger);
  }));
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && stack.length) close(stack.at(-1), 'escape', event);
  });
  let dragState = null;
  root.addEventListener('pointerdown', (event) => {
    if (event.button != null && event.button !== 0) return;
    const drawer = event.target.closest('[data-drawer][data-drawer-draggable="true"]');
    if (!drawer?.classList.contains('is-open') || event.target.closest('.drawer_close, .drawer_extra, a, input, textarea, select')) return;
    if (!event.target.closest('[data-drawer-drag-handle], .drawer_header')) return;
    const panel = drawer.querySelector('.drawer_panel.drawer_placement-bottom');
    if (!panel) return;
    const stored = Number.parseFloat(panel.dataset.collapsedHeight || '');
    const collapsed = panel.classList.contains('is-expanded') && stored > 0 ? stored : panel.getBoundingClientRect().height;
    panel.dataset.collapsedHeight = String(collapsed);
    dragState = { drawer, panel, target: event.target.closest('[data-drawer-drag-handle], .drawer_header'), pointerId: event.pointerId, startY: event.clientY, startHeight: panel.getBoundingClientRect().height, collapsed, expanded: Math.max(collapsed + 48, (panel.ownerDocument.defaultView?.innerHeight || collapsed) * 0.9), deltaY: 0 };
    panel.classList.add('is-dragging');
    dragState.target?.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  }, { passive: false });
  root.addEventListener('pointermove', (event) => {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    const deltaY = dragState.startY - event.clientY;
    dragState.deltaY = deltaY;
    dragState.panel.style.height = `${Math.min(dragState.expanded, Math.max(0, dragState.startHeight + deltaY))}px`;
    dragState.panel.style.transform = 'translateY(0)';
    event.preventDefault();
  }, { passive: false });
  const endDrag = (event) => {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    const state = dragState;
    dragState = null;
    state.panel.classList.remove('is-dragging');
    try { state.target?.releasePointerCapture?.(state.pointerId); } catch { /* 이미 해제됨 */ }
    const height = state.panel.getBoundingClientRect().height;
    const threshold = (state.collapsed + state.expanded) / 2;
    const startedExpanded = state.startHeight >= threshold;
    state.panel.style.height = '';
    state.panel.style.transform = '';
    if (height < state.collapsed * 0.55 || (!startedExpanded && state.deltaY < -state.collapsed * 0.4)) { state.panel.classList.remove('is-expanded'); close(state.drawer, 'drag', event); }
    else if (height >= threshold || (!startedExpanded && state.deltaY > 48)) state.panel.classList.add('is-expanded');
    else state.panel.classList.remove('is-expanded');
  };
  root.addEventListener('pointerup', endDrag);
  root.addEventListener('pointercancel', endDrag);
  return drawers;
}
