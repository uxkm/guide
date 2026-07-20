export function initPageRoot(root) {
  if (!root?.querySelectorAll) return;

  root.querySelectorAll('.demo_code-toggle').forEach((btn) => {
    if (btn.dataset.pageInit) return;
    btn.dataset.pageInit = '1';

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const panel = btn.nextElementSibling;
      const section = btn.closest('.demo_section');
      const label = btn.querySelector('.demo_code-toggle-label');

      btn.setAttribute('aria-expanded', String(!expanded));

      if (panel) {
        panel.hidden = expanded;
      }

      if (label) {
        label.textContent = expanded ? '코드 보기' : '코드 숨기기';
      }

      if (section) {
        section.classList.toggle('is-code-open', !expanded);
      }
    });
  });
}
