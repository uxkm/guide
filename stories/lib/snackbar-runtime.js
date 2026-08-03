/**
 * Snackbar 표시 · 자동 닫힘 · 일시 정지를 Storybook에서 재현한다.
 */

let initialized = false;

export function initSnackbarRuntime() {
  if (initialized) return;
  initialized = true;

  let openSnackbars = [];
  let snackbarSequence = 0;
  const motionDuration = 220;
  const placements = [
    'top-start', 'top-center', 'top-end',
    'middle-start', 'middle-end',
    'bottom-start', 'bottom-center', 'bottom-end',
  ];
  const placementLabels = {
    'top-start': '상단 좌측', 'top-center': '상단 가운데', 'top-end': '상단 우측',
    'middle-start': '중간 좌측', 'middle-end': '중간 우측',
    'bottom-start': '하단 좌측', 'bottom-center': '하단 가운데', 'bottom-end': '하단 우측',
  };
  const colors = ['info', 'success', 'warning', 'error'];
  const iconPaths = {
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    success: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>',
    warning: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
    error: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
  };

  const getScope = (element) => {
    const region = element?.closest?.('[data-snackbar-region]');
    return region?._snackbarOwner ||
      element?.closest?.('.sb-demo-layout, .demo_section-preview') ||
      document;
  };

  const getRegions = (scope) =>
    scope?._snackbarPortalRegions ||
    new Map(Array.from(scope?.querySelectorAll?.('[data-snackbar-region]') || []).map(
      (region) => [region.getAttribute('data-snackbar-region'), region],
    ));

  const getPlaygroundItems = (scope) =>
    Array.from(getRegions(scope).values()).flatMap((region) =>
      Array.from(region.querySelectorAll('[data-snackbar-playground-item]')),
    );

  const updatePlayground = (scope) => {
    if (!scope?.querySelectorAll) return;
    const count = getPlaygroundItems(scope).filter((snackbar) => !snackbar.hidden).length;
    scope.querySelectorAll('[data-snackbar-clear]').forEach((button) => {
      const label = button.querySelector('.btn_label');
      button.disabled = count === 0;
      if (label) label.textContent = `전체 닫기${count ? ` (${count})` : ''}`;
    });
  };

  const clearTimer = (snackbar) => {
    if (!snackbar?._snackbarTimer) return;
    clearTimeout(snackbar._snackbarTimer);
    snackbar._snackbarTimer = null;
  };

  const clearMotionTimer = (snackbar) => {
    if (!snackbar?._snackbarMotionTimer) return;
    clearTimeout(snackbar._snackbarMotionTimer);
    snackbar._snackbarMotionTimer = null;
  };

  const finishEnter = (snackbar) => {
    if (!snackbar || snackbar.hidden || snackbar.classList.contains('is-leaving')) return;
    clearMotionTimer(snackbar);
    snackbar.classList.remove('is-entering');
    snackbar.classList.add('is-open');
    schedule(snackbar, snackbar._snackbarDuration || 0);
  };

  const finishClose = (snackbar) => {
    const scope = getScope(snackbar);
    clearMotionTimer(snackbar);
    snackbar.classList.remove('is-entering', 'is-open', 'is-leaving');
    snackbar.hidden = true;
    if (snackbar.hasAttribute('data-snackbar-playground-item')) {
      snackbar.remove();
      updatePlayground(scope);
    }
  };

  const close = (snackbar) => {
    if (!snackbar || snackbar.hidden) return;
    clearTimer(snackbar);
    clearMotionTimer(snackbar);
    snackbar._snackbarRemaining = 0;
    snackbar.classList.remove('is-entering', 'is-open');
    openSnackbars = openSnackbars.filter((item) => item !== snackbar);
    if (snackbar.classList.contains('snackbar_motion-none')) {
      finishClose(snackbar);
      return;
    }
    snackbar.classList.add('is-leaving');
    snackbar._snackbarMotionTimer = window.setTimeout(() => finishClose(snackbar), motionDuration);
  };

  const schedule = (snackbar, duration) => {
    clearTimer(snackbar);
    if (duration <= 0) {
      snackbar._snackbarRemaining = 0;
      return;
    }
    if (snackbar._snackbarPauseReasons?.size) {
      snackbar._snackbarRemaining = duration;
      return;
    }
    snackbar._snackbarRemaining = duration;
    snackbar._snackbarDeadline = Date.now() + duration;
    snackbar._snackbarTimer = window.setTimeout(() => close(snackbar), duration);
  };

  const show = (snackbar) => {
    if (!snackbar) return;
    let duration = Number(snackbar.getAttribute('data-snackbar-duration'));
    if (!snackbar.hasAttribute('data-snackbar-duration') || Number.isNaN(duration)) {
      duration = 5000;
    }

    clearTimer(snackbar);
    clearMotionTimer(snackbar);
    snackbar._snackbarPauseReasons = new Set();
    snackbar._snackbarDuration = duration;
    snackbar.hidden = false;
    snackbar.classList.remove('is-entering', 'is-open', 'is-leaving');
    openSnackbars = openSnackbars.filter((item) => item !== snackbar);
    openSnackbars.push(snackbar);
    updatePlayground(getScope(snackbar));
    if (snackbar.classList.contains('snackbar_motion-none')) {
      finishEnter(snackbar);
      return;
    }
    requestAnimationFrame(() => {
      snackbar.classList.add('is-entering');
      snackbar._snackbarMotionTimer = window.setTimeout(() => finishEnter(snackbar), motionDuration);
    });
  };

  const pause = (snackbar, reason) => {
    if (!snackbar) return;
    snackbar._snackbarPauseReasons ||= new Set();
    snackbar._snackbarPauseReasons.add(reason);
    if (!snackbar._snackbarTimer) return;
    snackbar._snackbarRemaining = Math.max(0, snackbar._snackbarDeadline - Date.now());
    clearTimer(snackbar);
  };

  const resume = (snackbar, reason) => {
    if (!snackbar) return;
    snackbar._snackbarPauseReasons?.delete(reason);
    if (snackbar.hidden || snackbar._snackbarTimer || snackbar._snackbarPauseReasons?.size) return;
    schedule(snackbar, snackbar._snackbarRemaining || 0);
  };

  const createSnackbar = (scope, placement, sequence, round, motion) => {
    const region = getRegions(scope).get(placement);
    if (!region) return null;
    snackbarSequence += 1;
    const color = colors[(snackbarSequence - 1) % colors.length];
    const snackbar = document.createElement('div');
    const classes = [
      'snackbar',
      `color_${color}`,
      `snackbar_motion-${motion}`,
      `snackbar_placement-${placement}`,
    ];
    if (round) classes.push('snackbar_round');
    snackbar.className = classes.join(' ');
    snackbar.setAttribute('role', color === 'error' ? 'alert' : 'status');
    snackbar.setAttribute('aria-live', color === 'error' ? 'assertive' : 'polite');
    snackbar.setAttribute('aria-atomic', 'true');
    snackbar.setAttribute('aria-relevant', 'additions text');
    snackbar.setAttribute('data-snackbar-duration', '8000');
    snackbar.setAttribute('data-snackbar-playground-item', '');
    snackbar.hidden = true;
    snackbar.innerHTML =
      `<svg class="snackbar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">${iconPaths[color]}</svg>` +
      '<span class="snackbar_message"></span>' +
      '<span class="snackbar_action"><button type="button" class="btn btn_ghost btn_sm" data-snackbar-close><span class="btn_label">확인</span></button></span>' +
      '<button type="button" class="btn btn_ghost btn_icon-only snackbar_close" data-snackbar-close aria-label="알림 닫기"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>';
    snackbar.querySelector('.snackbar_message').textContent =
      `${placementLabels[placement]} 알림${sequence ? ` ${sequence}` : ''}`;
    region.appendChild(snackbar);
    show(snackbar);
    return snackbar;
  };

  const addSnackbars = (scope, placement, count = 1, round = false, motion = 'fade') => {
    if (!placements.includes(placement)) return;
    const resolvedCount = Math.min(10, Math.max(1, Number(count) || 1));
    Array.from({ length: resolvedCount }, (_, index) =>
      createSnackbar(
        scope,
        placement,
        resolvedCount > 1 ? index + 1 : 0,
        Boolean(round),
        motion === 'slide' ? 'slide' : 'fade',
      ));
  };

  const initOpenOnLoad = () => {
    document.querySelectorAll('[data-snackbar-open-on-load]').forEach((snackbar) => {
      if (snackbar._snackbarOpenedOnLoad) return;
      snackbar._snackbarOpenedOnLoad = true;
      show(snackbar);
    });
  };

  const portalizePlaygrounds = () => {
    document.querySelectorAll('.sb-demo-layout .snackbar_playground').forEach((playground) => {
      const scope = playground.closest('.sb-demo-layout');
      if (!scope || scope._snackbarPortal) return;

      const regions = Array.from(scope.querySelectorAll('[data-snackbar-region]'));
      if (regions.length === 0) return;

      const portal = document.createElement('div');
      portal.className = 'snackbar_storybook-portal';
      portal._snackbarOwner = scope;
      scope._snackbarPortal = portal;
      scope._snackbarPortalRegions = new Map();

      regions.forEach((region) => {
        const placement = region.getAttribute('data-snackbar-region');
        region._snackbarOwner = scope;
        scope._snackbarPortalRegions.set(placement, region);
        portal.appendChild(region);
      });

      document.body.appendChild(portal);
    });

    document.querySelectorAll('.snackbar_storybook-portal').forEach((portal) => {
      if (portal._snackbarOwner?.isConnected) return;
      portal.querySelectorAll('.snackbar').forEach((snackbar) => {
        clearTimer(snackbar);
        clearMotionTimer(snackbar);
      });
      portal.remove();
    });
  };

  const syncInteractiveDemos = () => {
    portalizePlaygrounds();
    initOpenOnLoad();
  };

  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-snackbar-add]');
    if (addButton) {
      addSnackbars(getScope(addButton), addButton.getAttribute('data-snackbar-add'));
      return;
    }

    const addAllButton = event.target.closest('[data-snackbar-add-all]');
    if (addAllButton) {
      const scope = getScope(addAllButton);
      placements.forEach((placement) => addSnackbars(
        scope,
        placement,
        addAllButton.getAttribute('data-snackbar-count') || 1,
        addAllButton.hasAttribute('data-snackbar-round'),
        addAllButton.getAttribute('data-snackbar-motion') || 'fade',
      ));
      return;
    }

    const clearButton = event.target.closest('[data-snackbar-clear]');
    if (clearButton) {
      getPlaygroundItems(getScope(clearButton)).forEach((snackbar) => close(snackbar));
      return;
    }

    const trigger = event.target.closest('[data-snackbar-trigger]');
    if (trigger) {
      let snackbar = null;
      try {
        snackbar = document.querySelector(trigger.getAttribute('data-snackbar-trigger'));
      } catch (error) {}
      show(snackbar);
      return;
    }

    const closeEl = event.target.closest('[data-snackbar-close]');
    if (closeEl) close(closeEl.closest('.snackbar'));
  });

  document.addEventListener('pointerover', (event) => pause(event.target.closest('.snackbar'), 'hover'));
  document.addEventListener('pointerout', (event) => {
    const snackbar = event.target.closest('.snackbar');
    if (snackbar && !snackbar.contains(event.relatedTarget)) resume(snackbar, 'hover');
  });
  document.addEventListener('focusin', (event) => pause(event.target.closest('.snackbar'), 'focus'));
  document.addEventListener('focusout', (event) => {
    const snackbar = event.target.closest('.snackbar');
    if (snackbar && !snackbar.contains(event.relatedTarget)) resume(snackbar, 'focus');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const snackbar = event.target.closest('.snackbar');
    if (!snackbar?.querySelector('[data-snackbar-close]')) return;
    event.preventDefault();
    close(snackbar);
  });
  document.addEventListener('animationend', (event) => {
    const snackbar = event.target.closest('.snackbar');
    if (!snackbar || event.target !== snackbar) return;
    if (snackbar.classList.contains('is-entering')) finishEnter(snackbar);
    if (snackbar.classList.contains('is-leaving')) finishClose(snackbar);
  });

  syncInteractiveDemos();

  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(syncInteractiveDemos);
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
}
