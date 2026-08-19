export function initDropdown(root = document) {
  const groups = [...root.querySelectorAll('[data-dropdown]')];
  groups.forEach((dropdown) => {
    if (dropdown.dataset.dropdownReady === 'true') return;
    dropdown.dataset.dropdownReady = 'true';
    const trigger = dropdown.querySelector(':scope > .dropdown_trigger'); const menu = dropdown.querySelector(':scope > .dropdown_menu');
    if (!trigger || !menu) return;
    function items() { return [...menu.querySelectorAll('.menu_link:not(.is-disabled):not([aria-disabled="true"])')]; }
    function setOpen(open, focus = false) { if (dropdown.classList.contains('is-disabled') || trigger.disabled) return; dropdown.classList.toggle('is-open', open); trigger.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-hidden', String(!open)); if (focus) requestAnimationFrame(() => items()[0]?.focus()); }
    trigger.addEventListener('click', () => setOpen(!dropdown.classList.contains('is-open')));
    trigger.addEventListener('keydown', (event) => { if (event.key === 'ArrowDown') { event.preventDefault(); setOpen(true, true); } });
    menu.addEventListener('keydown', (event) => { const links = items(); const current = links.indexOf(document.activeElement); let next = current; if (event.key === 'ArrowDown') next = (current + 1) % links.length; else if (event.key === 'ArrowUp') next = (current - 1 + links.length) % links.length; else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = links.length - 1; else if (event.key === 'Escape') { setOpen(false); trigger.focus(); return; } else if (event.key === 'Tab') { setOpen(false); return; } else return; event.preventDefault(); links[next]?.focus(); });
    menu.addEventListener('click', (event) => { const item = event.target.closest('.menu_link'); if (!item || item.classList.contains('is-disabled') || item.getAttribute('aria-disabled') === 'true') return; dropdown.dispatchEvent(new CustomEvent('dropdown:select', { bubbles: true, detail: { value: item.dataset.value ?? item.textContent.trim() } })); if (dropdown.dataset.dropdownCloseOnSelect !== 'false') { setOpen(false); trigger.focus(); } });
    document.addEventListener('pointerdown', (event) => { if (!dropdown.contains(event.target)) setOpen(false); });
    menu.setAttribute('aria-hidden', String(!dropdown.classList.contains('is-open'))); trigger.setAttribute('aria-expanded', String(dropdown.classList.contains('is-open')));
  });
  return groups;
}
