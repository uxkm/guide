/**
 * 라이트/다크 테마 전환
 * - 시스템 설정(prefers-color-scheme) 기본 반영
 * - 사용자 선택은 localStorage에 저장
 */
(function () {
  var STORAGE_KEY = 'guide-theme';

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getStoredTheme() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'light' || stored === 'dark' ? stored : null;
    } catch (e) {
      return null;
    }
  }

  function getActiveTheme() {
    var attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
    return getSystemTheme();
  }

  function applyTheme(theme, persist) {
    document.documentElement.setAttribute('data-theme', theme);
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) {
        /* ignore */
      }
    }
    updateToggle(theme);
  }

  function updateToggle(theme) {
    var btn = document.getElementById('guide-theme-btn');
    if (!btn) return;

    var isDark = theme === 'dark';
    btn.setAttribute('aria-label', isDark ? '라이트 모드로 전환' : '다크 모드로 전환');
    btn.setAttribute('title', isDark ? '라이트 모드' : '다크 모드');
    btn.dataset.theme = theme;
  }

  function toggleTheme() {
    var next = getActiveTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next, true);
  }

  function createToggleButton() {
    var header = document.querySelector('.guide_header');
    if (!header || document.getElementById('guide-theme-btn')) return;

    var actions = document.createElement('div');
    actions.className = 'guide_header-actions';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'guide_header-theme-btn';
    btn.id = 'guide-theme-btn';
    btn.innerHTML =
      '<svg class="guide_header-theme-icon guide_header-theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>' +
      '</svg>' +
      '<svg class="guide_header-theme-icon guide_header-theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
      '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>' +
      '</svg>';

    btn.addEventListener('click', toggleTheme);
    actions.appendChild(btn);
    header.appendChild(actions);

    updateToggle(getActiveTheme());
  }

  function init() {
    applyTheme(getStoredTheme() || getSystemTheme(), false);
    createToggleButton();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if (!getStoredTheme()) {
        applyTheme(getSystemTheme(), false);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GuideTheme = {
    getActiveTheme: getActiveTheme,
    toggleTheme: toggleTheme,
    applyTheme: applyTheme,
  };
})();
