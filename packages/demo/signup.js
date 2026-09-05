/** Shared page behavior; component rendering stays in each framework. */
export function initSignup(root, { openTerms, openHelp } = {}) {
  if (!root) return () => {};
  const controller = new AbortController();
  const listen = (node, type, handler) =>
    node?.addEventListener(type, handler, { signal: controller.signal });
  const form = root.querySelector('#join-form');
  const status = root.querySelector('#join-status');
  const password = form.querySelector('#join-password');
  const confirm = form.querySelector('#join-confirm');
  const name = form.querySelector('#join-name');
  let submitted = false;
  form.noValidate = true;
  password.minLength = 8;
  password.autocomplete = confirm.autocomplete = 'new-password';
  password.setAttribute('aria-describedby', 'join-password-hint');
  confirm.setAttribute('aria-describedby', 'join-status');
  name.autocomplete = 'name';
  form.querySelector('#join-email').autocomplete = 'email';
  for (const id of ['join-terms', 'join-privacy']) form.querySelector('#' + id).required = true;
  function validate() {
    name.setCustomValidity(name.value.trim() ? '' : '이름을 입력해 주세요.');
    confirm.setCustomValidity(
      confirm.value === password.value ? '' : '비밀번호가 일치하지 않습니다.',
    );
  }
  listen(form, 'input', () => {
    validate();
    if (submitted) {
      status.textContent = '정보가 변경되었습니다. 다시 확인한 후 가입을 완료해 주세요.';
      submitted = false;
    }
  });
  listen(form, 'submit', (event) => {
    event.preventDefault();
    validate();
    if (!form.checkValidity()) {
      status.textContent =
        '필수 항목, 이메일 형식, 8자 이상의 비밀번호와 약관 동의를 확인해 주세요.';
      const invalid = form.querySelector(':invalid');
      invalid?.scrollIntoView({ block: 'center' });
      form.reportValidity();
      return;
    }
    submitted = true;
    status.textContent =
      '가입 체험이 완료되었습니다! 실제 계정은 생성되지 않으며 입력 정보는 저장되지 않습니다.';
    status.tabIndex = -1;
    status.focus();
  });
  listen(root.querySelector('.join_terms-trigger'), 'click', () => openTerms?.());
  listen(root.querySelector('.join_help-trigger'), 'click', () => openHelp?.());
  const sections = [...root.querySelectorAll('.join_section')];
  const links = [...root.querySelectorAll('.join_toc a')];
  let frame;
  const update = () => {
    frame = undefined;
    let active = sections[0];
    for (const section of sections)
      if (section.getBoundingClientRect().top <= 160) active = section;
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4)
      active = sections.at(-1);
    links.forEach((link) => {
      if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  listen(window, 'scroll', () => {
    if (!frame) frame = requestAnimationFrame(update);
  });
  listen(window, 'resize', update);
  listen(root, 'click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    history.replaceState(null, '', link.hash);
    target.scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    });
    if (target.matches('.join_section, main')) target.focus({ preventScroll: true });
  });
  update();
  if (location.hash)
    requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
  return () => {
    controller.abort();
    if (frame) cancelAnimationFrame(frame);
  };
}
