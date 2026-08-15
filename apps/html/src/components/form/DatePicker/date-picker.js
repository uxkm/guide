export function initDatePicker(root = document) {
  const pickers = root.querySelectorAll('[data-component="DatePicker"]');
  pickers.forEach((picker) => {
    const input = picker.querySelector('.date_picker_input');
    const toggle = picker.querySelector('.date_picker_btn');
    const clear = picker.querySelector('.date_picker_clear');
    const panel = picker.querySelector('.date_picker_panel');
    if (!input || !toggle || !panel || picker.dataset.datePickerReady) return;
    picker.dataset.datePickerReady = 'true';
    let value = picker.dataset.value || '';
    let month = /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T00:00:00`) : new Date();
    const pad = (part) => String(part).padStart(2, '0');
    const serialize = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const format = (next) => next ? new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(`${next}T00:00:00`)) : '';
    const setOpen = (open) => { picker.classList.toggle('is-open', open); panel.hidden = !open; input.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-expanded', String(open)); if (open) requestAnimationFrame(() => panel.querySelector('.is-selected:not(:disabled), .calendar_day:not(:disabled)')?.focus()); };
    const sync = () => { picker.dataset.value = value; input.value = format(value); if (clear) clear.hidden = !value; };
    const commit = (next) => { value = next; sync(); picker.dispatchEvent(new CustomEvent('change', { bubbles: true, detail: { value: next } })); };
    const render = () => {
      const first = new Date(month.getFullYear(), month.getMonth(), 1);
      const start = new Date(month.getFullYear(), month.getMonth(), 1 - first.getDay());
      const today = serialize(new Date());
      const cells = Array.from({ length: 42 }, (_, index) => { const date = new Date(start); date.setDate(start.getDate() + index); const next = serialize(date); const disabled = (picker.dataset.min && next < picker.dataset.min) || (picker.dataset.max && next > picker.dataset.max); return `<button type="button" class="calendar_day${date.getMonth() !== month.getMonth() ? ' is-other-month' : ''}${next === today ? ' is-today' : ''}${next === value ? ' is-selected' : ''}" data-date="${next}"${disabled ? ' disabled' : ''}${next === today ? ' aria-current="date"' : ''}${next === value ? ' aria-selected="true"' : ''}>${date.getDate()}</button>`; }).join('');
      panel.innerHTML = `<div class="calendar calendar_borderless"><div class="calendar_header"><button type="button" class="btn btn_ghost btn_icon-only btn_sm" data-date-prev aria-label="이전 달">‹</button><span class="calendar_title" aria-live="polite">${month.getFullYear()}년 ${month.getMonth() + 1}월</span><button type="button" class="btn btn_ghost btn_icon-only btn_sm" data-date-next aria-label="다음 달">›</button></div><div class="calendar_weekdays" aria-hidden="true">${['일','월','화','수','목','금','토'].map((day) => `<span class="calendar_weekday">${day}</span>`).join('')}</div><div class="calendar_grid">${cells}</div><div class="calendar_footer"><button type="button" class="btn btn_text color_primary btn_sm" data-date-today>오늘</button><div class="calendar_footer-actions"><button type="button" class="btn btn_ghost btn_sm" data-date-clear>초기화</button></div></div></div>`;
    };
    picker.addEventListener('click', (event) => {
      const target = event.target;
      if (target.closest('.date_picker_btn')) { setOpen(!picker.classList.contains('is-open')); return; }
      if (target.closest('.date_picker_input')) { setOpen(true); return; }
      if (target.closest('.date_picker_clear, [data-date-clear]')) { commit(''); render(); return; }
      if (target.closest('[data-date-prev], [data-date-next]')) { month = new Date(month.getFullYear(), month.getMonth() + (target.closest('[data-date-next]') ? 1 : -1), 1); render(); return; }
      if (target.closest('[data-date-today]')) { const next = serialize(new Date()); commit(next); month = new Date(); render(); setOpen(false); return; }
      const day = target.closest('[data-date]'); if (day && !day.disabled) { commit(day.dataset.date); month = new Date(`${day.dataset.date}T00:00:00`); render(); setOpen(false); }
    });
    picker.addEventListener('keydown', (event) => { if (event.key === 'Escape') setOpen(false); });
    document.addEventListener('pointerdown', (event) => { if (!picker.contains(event.target)) setOpen(false); });
    sync(); render(); setOpen(false);
  });
  return pickers;
}
