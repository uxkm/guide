export function initTabs(root = document) {
  const groups = [...root.querySelectorAll('[data-component="Tabs"]')];
  groups.forEach((tabs) => {
    if (tabs.dataset.tabsReady === 'true') return;
    tabs.dataset.tabsReady = 'true';
    const list = tabs.querySelector('[role="tablist"]');
    const indicator = list?.querySelector('.tabs_indicator');
    const prevButton = tabs.querySelector('[data-tabs-scroll="prev"]');
    const nextButton = tabs.querySelector('[data-tabs-scroll="next"]');
    const enabled = () => [...tabs.querySelectorAll('[role="tab"]:not(:disabled):not([aria-disabled="true"])')];
    function updateVisualState() {
      if (!list) return;
      const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');
      if (indicator && activeTab) {
        const listRect = list.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        const left = tabRect.left - listRect.left + list.scrollLeft;
        const top = tabRect.top - listRect.top + list.scrollTop;
        const vertical = tabs.classList.contains('tabs_vertical');
        const pill = tabs.classList.contains('tabs_pill');
        Object.assign(indicator.style, vertical
          ? { width: '2px', height: `${tabRect.height}px`, transform: `translate3d(${left + tabRect.width - 2}px, ${top}px, 0)` }
          : pill
            ? { width: `${tabRect.width}px`, height: `${tabRect.height}px`, transform: `translate3d(${left}px, ${top}px, 0)` }
            : { width: `${tabRect.width}px`, height: '2px', transform: `translate3d(${left}px, ${top + tabRect.height - 2}px, 0)` });
      }
      const max = list.scrollWidth - list.clientWidth;
      const overflow = tabs.classList.contains('tabs_scroll-nav') && max > 1;
      if (prevButton) { prevButton.hidden = !overflow; prevButton.disabled = !overflow || list.scrollLeft <= 1; }
      if (nextButton) { nextButton.hidden = !overflow; nextButton.disabled = !overflow || list.scrollLeft >= max - 1; }
    }
    function scrollTabIntoView(tab) { if (!list || !tabs.classList.contains('tabs_scroll-nav')) return; const listRect = list.getBoundingClientRect(); const tabRect = tab.getBoundingClientRect(); const tabLeft = tabRect.left - listRect.left + list.scrollLeft; const max = list.scrollWidth - list.clientWidth; list.scrollTo({ left: Math.max(0, Math.min(tabLeft - (list.clientWidth - tabRect.width) / 2, max)), behavior: 'smooth' }); }
    function select(tab) { enabled().forEach((item) => { const active = item === tab; item.classList.toggle('is-active', active); item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; const panel = document.getElementById(item.getAttribute('aria-controls')); if (panel) { panel.hidden = !active; panel.classList.toggle('is-active', active); } }); requestAnimationFrame(() => { updateVisualState(); scrollTabIntoView(tab); }); }
    list?.addEventListener('click', (event) => { const tab = event.target.closest('[role="tab"]'); if (tab && !tab.disabled && tab.getAttribute('aria-disabled') !== 'true') select(tab); });
    list?.addEventListener('keydown', (event) => { const tabsList = enabled(); const current = tabsList.indexOf(event.target.closest('[role="tab"]')); let next = current; const vertical = tabs.classList.contains('tabs_vertical'); if (event.key === (vertical ? 'ArrowDown' : 'ArrowRight')) next = (current + 1) % tabsList.length; else if (event.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) next = (current - 1 + tabsList.length) % tabsList.length; else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = tabsList.length - 1; else return; event.preventDefault(); select(tabsList[next]); tabsList[next].focus(); });
    prevButton?.addEventListener('click', () => list?.scrollBy({ left: -Math.max(list.clientWidth * 0.75, 120), behavior: 'smooth' }));
    nextButton?.addEventListener('click', () => list?.scrollBy({ left: Math.max(list.clientWidth * 0.75, 120), behavior: 'smooth' }));
    list?.addEventListener('scroll', updateVisualState, { passive: true });
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(() => requestAnimationFrame(updateVisualState));
    if (list) { observer?.observe(list); list.querySelectorAll('.tabs_tab').forEach((tab) => observer?.observe(tab)); list.setAttribute('aria-orientation', tabs.classList.contains('tabs_vertical') ? 'vertical' : 'horizontal'); }
    requestAnimationFrame(updateVisualState);
  });
  return groups;
}
