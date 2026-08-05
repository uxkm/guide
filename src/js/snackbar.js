/**
 * Snackbar 데모 — 생성, 배치, 자동 닫기, 일시정지
 */
(function () {
  var regions = {};
  var colors = ['info', 'success', 'warning', 'danger'];
  var colorIndex = 0;
  var placementLabels = {
    'top-start': '상단 좌측',
    'top-center': '상단 가운데',
    'top-end': '상단 우측',
    'middle-start': '중간 좌측',
    'middle-end': '중간 우측',
    'bottom-start': '하단 좌측',
    'bottom-center': '하단 가운데',
    'bottom-end': '하단 우측',
  };

  var icons = {
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    success: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m22 4-10 10.01-3-3"/>',
    warning: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
    danger: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
  };

  function getRegion(placement) {
    if (regions[placement] && document.body.contains(regions[placement])) {
      return regions[placement];
    }

    var region = document.createElement('div');
    region.className = 'snackbar_region snackbar_region-' + placement;
    region.setAttribute('aria-label', placementLabels[placement] + ' Snackbar 영역');
    document.body.appendChild(region);
    regions[placement] = region;
    return region;
  }

  function dismiss(snackbar, reason) {
    if (!snackbar || snackbar.classList.contains('is-leaving')) return;

    window.clearTimeout(snackbar._dismissTimer);
    snackbar.classList.remove('is-entering', 'is-open');
    snackbar.classList.add('is-leaving');
    snackbar.dataset.closeReason = reason || 'close';

    function remove() {
      if (!snackbar.parentNode) return;
      var region = snackbar.parentNode;
      snackbar.remove();
      if (region.classList.contains('snackbar_region') && !region.children.length) {
        region.remove();
      }
    }

    if (snackbar.classList.contains('snackbar_motion-none')) remove();
    else window.setTimeout(remove, 250);
  }

  function startTimer(snackbar) {
    var duration = Number(snackbar.dataset.duration || 0);
    if (!duration || snackbar._paused) return;
    if (snackbar._remainingDuration === undefined) snackbar._remainingDuration = duration;
    if (snackbar._remainingDuration <= 0) return;
    window.clearTimeout(snackbar._dismissTimer);
    snackbar._timerStartedAt = Date.now();
    snackbar._dismissTimer = window.setTimeout(function () {
      snackbar._remainingDuration = 0;
      dismiss(snackbar, 'timeout');
    }, snackbar._remainingDuration);
  }

  function pauseTimer(snackbar, reason) {
    snackbar._pauseReasons = snackbar._pauseReasons || {};
    if (!snackbar._paused && snackbar._timerStartedAt) {
      snackbar._remainingDuration = Math.max(0, snackbar._remainingDuration - (Date.now() - snackbar._timerStartedAt));
    }
    snackbar._pauseReasons[reason] = true;
    snackbar._paused = true;
    window.clearTimeout(snackbar._dismissTimer);
  }

  function resumeTimer(snackbar, reason) {
    if (snackbar._pauseReasons) delete snackbar._pauseReasons[reason];
    if (snackbar._pauseReasons && Object.keys(snackbar._pauseReasons).length) return;
    snackbar._paused = false;
    startTimer(snackbar);
  }

  function bindSnackbar(snackbar) {
    if (snackbar._snackbarBound) return;
    snackbar._snackbarBound = true;
    var close = snackbar.querySelector('.snackbar_close');
    var action = snackbar.querySelector('.snackbar_action button');

    if (close) close.addEventListener('click', function () { dismiss(snackbar, 'close'); });
    if (action) action.addEventListener('click', function () { dismiss(snackbar, 'action'); });

    snackbar.addEventListener('mouseenter', function () {
      pauseTimer(snackbar, 'hover');
    });
    snackbar.addEventListener('mouseleave', function () {
      resumeTimer(snackbar, 'hover');
    });
    snackbar.addEventListener('focusin', function () {
      pauseTimer(snackbar, 'focus');
    });
    snackbar.addEventListener('focusout', function (event) {
      if (snackbar.contains(event.relatedTarget)) return;
      resumeTimer(snackbar, 'focus');
    });
    snackbar.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && close) dismiss(snackbar, 'close');
    });

    startTimer(snackbar);
  }

  function createSnackbar(options) {
    options = options || {};
    var placement = placementLabels[options.placement] ? options.placement : 'bottom-center';
    var color = options.color || colors[colorIndex++ % colors.length];
    var snackbar = document.createElement('div');
    var colorClass = color === 'danger' ? 'color_error' : 'color_' + color;
    snackbar.className = [
      'snackbar', colorClass,
      options.size === 'sm' ? 'snackbar_sm' : '',
      options.size === 'lg' ? 'snackbar_lg' : '',
      options.round ? 'snackbar_round' : '',
      'snackbar_motion-' + (options.motion || 'slide'),
      'snackbar_placement-' + placement,
      'is-entering',
    ].filter(Boolean).join(' ');
    snackbar.setAttribute('role', color === 'danger' ? 'alert' : 'status');
    snackbar.setAttribute('aria-live', color === 'danger' ? 'assertive' : 'polite');
    snackbar.setAttribute('aria-atomic', 'true');
    snackbar.dataset.duration = String(options.duration === undefined ? 8000 : options.duration);

    var iconWrap = document.createElement('span');
    iconWrap.className = 'snackbar_icon-wrap';
    iconWrap.setAttribute('aria-hidden', 'true');
    iconWrap.innerHTML = '<svg class="snackbar_icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + icons[color] + '</svg>';

    var message = document.createElement('div');
    message.className = 'snackbar_message';
    message.textContent = options.message || placementLabels[placement] + ' 알림';

    var action = document.createElement('div');
    action.className = 'snackbar_action';
    action.innerHTML = '<button type="button" class="btn btn_ghost btn_sm"><span class="btn_label">확인</span></button>';

    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'btn btn_ghost btn_icon-only snackbar_close';
    close.setAttribute('aria-label', '알림 닫기');
    close.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';

    if (options.showIcon !== false) snackbar.appendChild(iconWrap);
    snackbar.appendChild(message);
    if (options.action !== false) snackbar.appendChild(action);
    if (options.closable !== false) snackbar.appendChild(close);
    getRegion(placement).appendChild(snackbar);
    bindSnackbar(snackbar);
    return snackbar;
  }

  document.querySelectorAll('[data-snackbar-trigger]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var mode = trigger.dataset.snackbarTrigger;
      var placements = mode === 'all' ? Object.keys(placementLabels) : [mode || 'bottom-center'];
      var count = Number(trigger.dataset.count || 1);
      placements.forEach(function (placement) {
        for (var i = 0; i < count; i += 1) {
          createSnackbar({
            placement: placement,
            round: trigger.dataset.round === 'true',
            motion: trigger.dataset.motion || 'slide',
            size: trigger.dataset.size,
            color: trigger.dataset.color,
            duration: trigger.dataset.duration === undefined ? undefined : Number(trigger.dataset.duration),
            showIcon: trigger.dataset.showIcon !== 'false',
            action: trigger.dataset.action !== 'false',
            closable: trigger.dataset.closable !== 'false',
            message: trigger.dataset.message || placementLabels[placement] + ' 알림' + (count > 1 ? ' ' + (i + 1) : ''),
          });
        }
      });
    });
  });

  document.querySelectorAll('[data-snackbar-close-all]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.snackbar_region .snackbar').forEach(function (snackbar) {
        dismiss(snackbar, 'close');
      });
    });
  });

  document.querySelectorAll('[data-snackbar-open-on-load]').forEach(function (playground) {
    if (playground.dataset.snackbarOpened === 'true') return;
    playground.dataset.snackbarOpened = 'true';

    var placement = placementLabels[playground.dataset.placement]
      ? playground.dataset.placement
      : 'bottom-center';
    var count = Math.min(10, Math.max(1, Number(playground.dataset.count || 1)));

    for (var i = 0; i < count; i += 1) {
      createSnackbar({
        placement: placement,
        round: playground.dataset.round === 'true',
        motion: playground.dataset.motion || 'slide',
        duration: playground.dataset.duration === undefined ? 8000 : Number(playground.dataset.duration),
        message: placementLabels[placement] + ' 알림' + (count > 1 ? ' ' + (i + 1) : ''),
      });
    }
  });

  document.querySelectorAll('.snackbar[data-duration], .snackbar .snackbar_close, .snackbar .snackbar_action button').forEach(function (node) {
    var snackbar = node.classList.contains('snackbar') ? node : node.closest('.snackbar');
    if (snackbar && !snackbar._dismissTimer) bindSnackbar(snackbar);
  });

  window.SnackbarDemo = { show: createSnackbar, close: dismiss };
})();
