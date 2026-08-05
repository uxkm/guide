/**
 * 컴포넌트 데모 코드 블록 펼침/접힘 · 휠 피커
 */
(function () {
  document.querySelectorAll('.demo_code-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var panel = btn.nextElementSibling;
      var section = btn.closest('.demo_section');
      var label = btn.querySelector('.demo_code-toggle-label');

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

  function getWheelItems(list) {
    return Array.prototype.slice.call(list.querySelectorAll('.calendar_wheel-item'));
  }

  function getSelectedWheelItem(list) {
    return list.querySelector('.calendar_wheel-item.is-selected');
  }

  function getWheelListCenter(list) {
    var listRect = list.getBoundingClientRect();

    return listRect.top + listRect.height / 2;
  }

  function getWheelItemCenter(item) {
    var itemRect = item.getBoundingClientRect();

    return itemRect.top + itemRect.height / 2;
  }

  function scrollWheelToItem(list, item, options) {
    options = options || {};

    if (!list || !item) {
      return;
    }

    getWheelItems(list).forEach(function (el) {
      el.classList.remove('is-selected');
      el.removeAttribute('aria-selected');
    });

    item.classList.add('is-selected');
    item.setAttribute('aria-selected', 'true');

    if (options.skipScroll) {
      return;
    }

    var delta = getWheelItemCenter(item) - getWheelListCenter(list);

    if (Math.abs(delta) <= 1) {
      return;
    }

    list._wheelSnapping = true;
    list.scrollTop += delta;

    requestAnimationFrame(function () {
      list._wheelSnapping = false;
    });
  }

  function getWheelItemAtCenter(list) {
    var items = getWheelItems(list);
    var listCenter = getWheelListCenter(list);
    var closest = null;
    var closestDist = Infinity;

    items.forEach(function (item) {
      var dist = Math.abs(getWheelItemCenter(item) - listCenter);

      if (dist < closestDist) {
        closestDist = dist;
        closest = item;
      }
    });

    return closest;
  }

  function updateWheelSelectionFromScroll(list, column, options) {
    options = options || {};
    var item = getWheelItemAtCenter(list);

    if (!item) {
      return;
    }

    var selected = getSelectedWheelItem(list);

    if (selected !== item) {
      scrollWheelToItem(list, item, { skipScroll: true });
      updateWheelStepButtons(column, list);
    }

    if (!options.skipSnap) {
      scrollWheelToItem(list, item);
      updateWheelStepButtons(column, list);
    }
  }

  function snapWheelToNearest(list, column) {
    updateWheelSelectionFromScroll(list, column);
  }

  function initWheelScroll(list, column) {
    var scrollTimer;

    list.addEventListener('scroll', function () {
      if (list._wheelSnapping) {
        return;
      }

      updateWheelSelectionFromScroll(list, column, { skipSnap: true });

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        snapWheelToNearest(list, column);
      }, 80);
    }, { passive: true });

    getWheelItems(list).forEach(function (item) {
      item.addEventListener('click', function () {
        scrollWheelToItem(list, item);
        updateWheelStepButtons(column, list);
      });
    });
  }

  function updateStaticWheelDims(list) {
    var items = getWheelItems(list);
    var selectedIndex = items.findIndex(function (el) {
      return el.classList.contains('is-selected');
    });

    items.forEach(function (el, index) {
      var diff = Math.abs(index - selectedIndex);

      el.classList.remove('is-selected', 'is-dim-1', 'is-dim-2');
      el.removeAttribute('aria-selected');
      el.setAttribute('tabindex', '-1');

      if (diff === 0) {
        el.classList.add('is-selected');
        el.setAttribute('aria-selected', 'true');
        el.removeAttribute('tabindex');
      } else if (diff === 1) {
        el.classList.add('is-dim-1');
      } else {
        el.classList.add('is-dim-2');
      }
    });
  }

  function updateWheelStepButtons(column, list) {
    var prevBtn = column.querySelector('.calendar_wheel-step-prev');
    var nextBtn = column.querySelector('.calendar_wheel-step-next');
    var items = getWheelItems(list);
    var selected = getSelectedWheelItem(list);
    var selectedIndex = items.indexOf(selected);

    if (prevBtn) {
      prevBtn.disabled = selectedIndex <= 0;
    }

    if (nextBtn) {
      nextBtn.disabled = selectedIndex < 0 || selectedIndex >= items.length - 1;
    }
  }

  function moveWheelSelection(list, direction) {
    var items = getWheelItems(list);
    var selected = getSelectedWheelItem(list);
    var selectedIndex = items.indexOf(selected);
    var nextIndex = selectedIndex + direction;

    if (nextIndex < 0 || nextIndex >= items.length) {
      return null;
    }

    return items[nextIndex];
  }

  function initWheelColumn(column) {
    var list = column.querySelector('[data-wheel], [data-wheel-static]');

    if (!list) {
      return;
    }

    var isStatic = list.hasAttribute('data-wheel-static');
    var selected = getSelectedWheelItem(list);

    if (isStatic) {
      updateStaticWheelDims(list);
    } else {
      if (selected) {
        requestAnimationFrame(function () {
          scrollWheelToItem(list, selected);
          updateWheelStepButtons(column, list);
        });
      }

      initWheelScroll(list, column);
    }

    updateWheelStepButtons(column, list);

    var prevBtn = column.querySelector('.calendar_wheel-step-prev');
    var nextBtn = column.querySelector('.calendar_wheel-step-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        var item = moveWheelSelection(list, -1);

        if (!item) {
          return;
        }

        if (isStatic) {
          getWheelItems(list).forEach(function (el) {
            el.classList.remove('is-selected');
          });
          item.classList.add('is-selected');
          updateStaticWheelDims(list);
        } else {
          scrollWheelToItem(list, item);
        }

        updateWheelStepButtons(column, list);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        var item = moveWheelSelection(list, 1);

        if (!item) {
          return;
        }

        if (isStatic) {
          getWheelItems(list).forEach(function (el) {
            el.classList.remove('is-selected');
          });
          item.classList.add('is-selected');
          updateStaticWheelDims(list);
        } else {
          scrollWheelToItem(list, item);
        }

        updateWheelStepButtons(column, list);
      });
    }
  }

  document.querySelectorAll('.calendar_wheel-column').forEach(initWheelColumn);

  document.querySelectorAll('.tree_toggle:not(.tree_toggle_placeholder)').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.disabled) {
        return;
      }

      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var item = btn.closest('.tree_item');

      btn.setAttribute('aria-expanded', String(!expanded));

      if (item) {
        item.setAttribute('aria-expanded', String(!expanded));
      }
    });
  });

  document.querySelectorAll('[data-demo-indeterminate]').forEach(function (input) {
    input.indeterminate = true;
  });

  document.querySelectorAll('.tree .tree_link').forEach(function (link) {
    link.addEventListener('click', function () {
      var tree = link.closest('.tree');
      var row = link.closest('.tree_row');

      if (!tree || !row || row.classList.contains('is-disabled')) {
        return;
      }

      tree.querySelectorAll('.tree_row.is-selected').forEach(function (el) {
        el.classList.remove('is-selected');
      });

      row.classList.add('is-selected');
    });
  });

  function getSliderStep(input) {
    var step = parseFloat(input.step);

    if (Number.isNaN(step) || step <= 0) {
      return 1;
    }

    return step;
  }

  function snapSliderValue(value, min, max, step) {
    var steps = Math.round((value - min) / step);
    var snapped = min + steps * step;
    snapped = Math.min(max, Math.max(min, snapped));

    var precision = (step.toString().split('.')[1] || '').length;

    return Number(snapped.toFixed(precision));
  }

  function formatSliderValue(input, value) {
    var prefix = input.getAttribute('data-slider-prefix') || '';
    var suffix = input.getAttribute('data-slider-suffix') || '';
    var formatted = value;

    if (input.getAttribute('data-slider-format') === 'number') {
      formatted = Number(value).toLocaleString('ko-KR');
    }

    return prefix + formatted + suffix;
  }

  function getSliderValueText(input, value) {
    var valueMap = input.getAttribute('data-slider-valuetext-map');

    if (valueMap) {
      var pairs = valueMap.split(',');
      var mapped = null;

      pairs.forEach(function (pair) {
        var parts = pair.split(':');

        if (parts.length === 2 && parts[0].trim() === String(value)) {
          mapped = parts.slice(1).join(':').trim();
        }
      });

      if (mapped) {
        return mapped;
      }
    }

    var template = input.getAttribute('data-slider-valuetext-template');

    if (template) {
      return template.replace(/\{\{value\}\}/g, formatSliderValue(input, value));
    }

    if (input.hasAttribute('data-slider-valuetext-suffix')) {
      return String(value) + input.getAttribute('data-slider-valuetext-suffix');
    }

    if (input.getAttribute('data-slider-suffix') || input.getAttribute('data-slider-prefix') || input.getAttribute('data-slider-format')) {
      return formatSliderValue(input, value);
    }

    return String(value);
  }

  function updateSlider(input) {
    var min = parseFloat(input.min);
    var max = parseFloat(input.max);
    var value = parseFloat(input.value);

    if (Number.isNaN(min)) {
      min = 0;
    }

    if (Number.isNaN(max)) {
      max = 100;
    }

    if (Number.isNaN(value)) {
      value = min;
    }

    var range = max - min;
    var percent = range === 0 ? 0 : ((value - min) / range) * 100;
    var displayValue = formatSliderValue(input, value);
    var spokenValue = getSliderValueText(input, value);

    input.style.setProperty('--slider-progress', percent + '%');
    input.setAttribute('aria-valuetext', spokenValue);

    if (input.id) {
      var output = document.querySelector('output.slider_value[for="' + input.id + '"]');

      if (output) {
        if (input.hasAttribute('data-slider-valuetext-map')) {
          output.textContent = spokenValue;
        } else {
          output.textContent = displayValue;
        }
      }
    }

    updateSliderStepButtons(input);
  }

  function updateSliderStepButtons(input) {
    var slider = input.closest('.slider');

    if (!slider || !slider.classList.contains('slider_stepper')) {
      return;
    }

    var min = parseFloat(input.min);
    var max = parseFloat(input.max);
    var value = parseFloat(input.value);

    if (Number.isNaN(min)) {
      min = 0;
    }

    if (Number.isNaN(max)) {
      max = 100;
    }

    if (Number.isNaN(value)) {
      value = min;
    }

    var decrease = slider.querySelector('.slider_step-decrease');
    var increase = slider.querySelector('.slider_step-increase');
    var isDisabled = input.disabled;

    if (decrease) {
      decrease.disabled = isDisabled || value <= min;
    }

    if (increase) {
      increase.disabled = isDisabled || value >= max;
    }
  }

  function stepSlider(input, direction) {
    if (input.disabled) {
      return;
    }

    var min = parseFloat(input.min);
    var max = parseFloat(input.max);
    var value = parseFloat(input.value);
    var step = getSliderStep(input);

    if (Number.isNaN(min)) {
      min = 0;
    }

    if (Number.isNaN(max)) {
      max = 100;
    }

    if (Number.isNaN(value)) {
      value = min;
    }

    var next = snapSliderValue(value + direction * step, min, max, step);

    if (next === value) {
      return;
    }

    input.value = String(next);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function initSliderStepper(slider) {
    var input = slider.querySelector('.slider_input');

    if (!input) {
      return;
    }

    var decrease = slider.querySelector('.slider_step-decrease');
    var increase = slider.querySelector('.slider_step-increase');

    if (decrease) {
      if (input.id) {
        decrease.setAttribute('aria-controls', input.id);
      }

      decrease.addEventListener('click', function () {
        stepSlider(input, -1);
      });
    }

    if (increase) {
      if (input.id) {
        increase.setAttribute('aria-controls', input.id);
      }

      increase.addEventListener('click', function () {
        stepSlider(input, 1);
      });
    }
  }

  document.querySelectorAll('.slider_input').forEach(function (input) {
    updateSlider(input);
    input.addEventListener('input', function () {
      updateSlider(input);
    });
  });

  document.querySelectorAll('.slider_stepper').forEach(initSliderStepper);

  function formatRateValue(value) {
    if (!value) {
      return '';
    }

    var num = parseFloat(value);

    if (Number.isNaN(num)) {
      return '';
    }

    if (num % 1 === 0) {
      return num + '점';
    }

    return num + '점';
  }

  function getRateValue(rate) {
    var checked = rate.querySelector('.rate_input:checked');

    return checked ? checked.value : '';
  }

  function updateRate(rate) {
    var value = getRateValue(rate);
    var output = rate.querySelector('[data-rate-output], .rate_value');

    if (output) {
      output.textContent = formatRateValue(value);
    }

    rate.classList.toggle('is-rated', Boolean(value));
  }

  function clearRate(rate) {
    rate.querySelectorAll('.rate_input').forEach(function (input) {
      input.checked = false;
    });

    updateRate(rate);
  }

  function initRateHalfStar(rate) {
    rate.querySelectorAll('.rate_star').forEach(function (star) {
      var halfInput = star.querySelector('.rate_input-half');
      var fullInput = star.querySelector('.rate_input:not(.rate_input-half)');
      var leftBtn = star.querySelector('.rate_star-half-left');
      var rightBtn = star.querySelector('.rate_star-half-right');

      if (!halfInput || !fullInput) {
        return;
      }

      if (leftBtn) {
        leftBtn.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopPropagation();

          if (halfInput.disabled) {
            return;
          }

          halfInput.checked = true;
          halfInput.dispatchEvent(new Event('change', { bubbles: true }));
        });
      }

      if (rightBtn) {
        rightBtn.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopPropagation();

          if (fullInput.disabled) {
            return;
          }

          fullInput.checked = true;
          fullInput.dispatchEvent(new Event('change', { bubbles: true }));
        });
      }
    });
  }

  function initRateClearable(rate) {
    var clearBtn = rate.querySelector('.rate_clear');

    rate.querySelectorAll('.rate_input').forEach(function (input) {
      input.addEventListener('mousedown', function () {
        input._rateWasChecked = input.checked;
      });

      input.addEventListener('click', function (event) {
        if (!rate.classList.contains('rate_clearable')) {
          return;
        }

        if (input._rateWasChecked) {
          input.checked = false;
          input._rateWasChecked = false;
          event.preventDefault();
          updateRate(rate);
        }
      });
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        clearRate(rate);
      });
    }
  }

  function initRate(rate) {
    if (rate.classList.contains('is-readonly')) {
      return;
    }

    updateRate(rate);

    rate.querySelectorAll('.rate_input').forEach(function (input) {
      input.addEventListener('change', function () {
        updateRate(rate);
      });
    });

    if (rate.classList.contains('rate_allow-half')) {
      initRateHalfStar(rate);
    }

    if (rate.classList.contains('rate_clearable')) {
      initRateClearable(rate);
    }
  }

  document.querySelectorAll('.rate').forEach(initRate);

  document.querySelectorAll('.menu_item-submenu > .menu_link[aria-expanded]').forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      if (btn.classList.contains('is-disabled') || btn.getAttribute('aria-disabled') === 'true') {
        return;
      }

      event.preventDefault();

      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var item = btn.closest('.menu_item-submenu');

      btn.setAttribute('aria-expanded', String(!expanded));

      if (item) {
        item.setAttribute('aria-expanded', String(!expanded));
      }
    });
  });

  document.querySelectorAll('[data-menu-selectable]').forEach(function (menu) {
    menu.addEventListener('click', function (event) {
      var link = event.target.closest('.menu_link');

      if (!link || !menu.contains(link) || link.classList.contains('is-disabled') || link.getAttribute('aria-disabled') === 'true') {
        return;
      }

      if (link.matches('[aria-expanded]')) {
        return;
      }

      var href = link.getAttribute('href');

      if (!href || href === '#') {
        event.preventDefault();
      }

      menu.querySelectorAll('.menu_link.is-active').forEach(function (el) {
        el.classList.remove('is-active');
        el.removeAttribute('aria-current');
      });

      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    });
  });

  document.querySelectorAll('[data-navbar-toggle]').forEach(function (btn) {
    var navbar = btn.closest('[data-navbar]');
    var targetId = btn.getAttribute('aria-controls');
    var collapse = targetId ? document.getElementById(targetId) : btn.nextElementSibling;

    if (!navbar || !collapse) {
      return;
    }

    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var nextExpanded = !expanded;

      btn.setAttribute('aria-expanded', String(nextExpanded));
      btn.setAttribute('aria-label', nextExpanded ? '메뉴 닫기' : '메뉴 열기');
      navbar.classList.toggle('is-open', nextExpanded);
      collapse.classList.toggle('is-open', nextExpanded);
    });
  });

  function initPagination(pagination) {
    var pageButtons = Array.prototype.slice.call(pagination.querySelectorAll('.pagination_link'));
    var prevButton = pagination.querySelector('.pagination_prev');
    var nextButton = pagination.querySelector('.pagination_next');
    var output = pagination.parentElement && pagination.parentElement.querySelector('[data-pagination-current-output]');
    var pages = pageButtons.map(function (button) {
      return Number.parseInt(button.textContent, 10);
    }).filter(Number.isFinite);

    if (!pages.length) {
      return;
    }

    var firstPage = Math.min.apply(Math, pages);
    var lastPage = Math.max.apply(Math, pages);

    function getCurrentPage() {
      var activeButton = pagination.querySelector('.pagination_link[aria-current="page"]');
      var page = activeButton ? Number.parseInt(activeButton.textContent, 10) : firstPage;
      return Number.isFinite(page) ? page : firstPage;
    }

    function setCurrentPage(page) {
      var target = pageButtons.find(function (button) {
        return Number.parseInt(button.textContent, 10) === page;
      });

      if (!target) {
        return;
      }

      pageButtons.forEach(function (button) {
        var isCurrent = button === target;
        button.classList.toggle('is-active', isCurrent);

        if (isCurrent) {
          button.setAttribute('aria-current', 'page');
        } else {
          button.removeAttribute('aria-current');
        }
      });

      if (prevButton) prevButton.disabled = page <= firstPage;
      if (nextButton) nextButton.disabled = page >= lastPage;
      if (output) output.textContent = '현재 페이지: ' + page;
    }

    pageButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        setCurrentPage(Number.parseInt(button.textContent, 10));
      });
    });

    if (prevButton) {
      prevButton.addEventListener('click', function () {
        setCurrentPage(getCurrentPage() - 1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function () {
        setCurrentPage(getCurrentPage() + 1);
      });
    }

    setCurrentPage(getCurrentPage());
  }

  document.querySelectorAll('[data-pagination]').forEach(initPagination);

  function initNavigableSteps(steps) {
    var items = Array.prototype.slice.call(steps.querySelectorAll(':scope > .steps_item'));

    function setCurrentStep(currentIndex) {
      items.forEach(function (item, index) {
        var trigger = item.querySelector(':scope > .steps_trigger');
        var status = index < currentIndex ? 'finished' : index === currentIndex ? 'active' : 'wait';
        var finishedIcon = item.querySelector('[data-steps-finished-icon]');
        var stepIndex = item.querySelector('[data-steps-index]');

        item.classList.remove('is-finished', 'is-active', 'is-wait', 'is-error');
        item.classList.add('is-' + status);

        if (trigger) {
          trigger.disabled = status === 'wait';

          if (status === 'active') {
            trigger.setAttribute('aria-current', 'step');
          } else {
            trigger.removeAttribute('aria-current');
          }
        }

        if (finishedIcon) finishedIcon.hidden = status !== 'finished';
        if (stepIndex) stepIndex.hidden = status === 'finished';
      });
    }

    items.forEach(function (item, index) {
      var trigger = item.querySelector(':scope > .steps_trigger');

      if (!trigger) {
        return;
      }

      trigger.addEventListener('click', function () {
        if (!trigger.disabled) {
          setCurrentStep(index);
        }
      });
    });
  }

  document.querySelectorAll('[data-steps-navigable]').forEach(initNavigableSteps);

  function isTabDisabled(tab) {
    return tab.disabled || tab.classList.contains('is-disabled') || tab.getAttribute('aria-disabled') === 'true';
  }

  function getTabsFromList(tablist) {
    return Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
  }

  function updateTabsIndicator(tabsRoot) {
    if (!tabsRoot.classList.contains('tabs_indicator-slide')) {
      return;
    }

    var list = tabsRoot.querySelector('.tabs_list');
    var indicator = list && list.querySelector('.tabs_indicator');

    if (!list || !indicator) {
      return;
    }

    var activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');

    if (!activeTab) {
      indicator.style.display = 'none';
      return;
    }

    var listRect = list.getBoundingClientRect();
    var tabRect = activeTab.getBoundingClientRect();
    var left = tabRect.left - listRect.left + list.scrollLeft;
    var top = tabRect.top - listRect.top + list.scrollTop;
    var width = tabRect.width;
    var height = tabRect.height;
    var thickness = 2;
    var isVertical = tabsRoot.classList.contains('tabs_vertical');
    var isPill = tabsRoot.classList.contains('tabs_pill');

    indicator.style.display = '';

    if (isVertical) {
      indicator.style.width = thickness + 'px';
      indicator.style.height = height + 'px';
      indicator.style.transform = 'translate3d(' + (left + width - thickness) + 'px, ' + top + 'px, 0)';
      return;
    }

    if (isPill) {
      indicator.style.width = width + 'px';
      indicator.style.height = height + 'px';
      indicator.style.transform = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      return;
    }

    indicator.style.width = width + 'px';
    indicator.style.height = thickness + 'px';
    indicator.style.transform = 'translate3d(' + left + 'px, ' + (top + height - thickness) + 'px, 0)';
  }

  function updateTabsScrollNav(tabsRoot) {
    if (!tabsRoot.classList.contains('tabs_scroll-nav')) {
      return;
    }

    var list = tabsRoot.querySelector('.tabs_list');
    var prevBtn = tabsRoot.querySelector('.tabs_nav_prev');
    var nextBtn = tabsRoot.querySelector('.tabs_nav_next');

    if (!list) {
      return;
    }

    var maxScroll = list.scrollWidth - list.clientWidth;
    var hasOverflow = maxScroll > 1;
    var canPrev = list.scrollLeft > 1;
    var canNext = list.scrollLeft < maxScroll - 1;

    if (prevBtn) {
      prevBtn.hidden = !hasOverflow;
      prevBtn.disabled = !canPrev;
    }

    if (nextBtn) {
      nextBtn.hidden = !hasOverflow;
      nextBtn.disabled = !canNext;
    }
  }

  function scrollTabsBy(tabsRoot, direction) {
    var list = tabsRoot.querySelector('.tabs_list');

    if (!list) {
      return;
    }

    var amount = Math.max(list.clientWidth * 0.75, 120);
    list.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }

  function scrollTabIntoView(tabsRoot, tab) {
    var list = tabsRoot.querySelector('.tabs_list');

    if (!list || !tab || !tabsRoot.classList.contains('tabs_scroll-nav')) {
      return;
    }

    var listRect = list.getBoundingClientRect();
    var tabRect = tab.getBoundingClientRect();
    var tabLeft = tabRect.left - listRect.left + list.scrollLeft;
    var target = tabLeft + tabRect.width / 2 - list.clientWidth / 2;
    var maxScroll = list.scrollWidth - list.clientWidth;

    list.scrollTo({
      left: Math.max(0, Math.min(target, maxScroll)),
      behavior: 'smooth',
    });
  }

  function activateDynamicPanel(tabsRoot, tab) {
    var key = tab.getAttribute('data-tabs-key');
    var panelId = tab.getAttribute('aria-controls');
    var panel = panelId ? document.getElementById(panelId) : null;

    if (!panel || !key) {
      return;
    }

    panel.querySelectorAll('[data-tabs-panel-key]').forEach(function (chunk) {
      var isActive = chunk.getAttribute('data-tabs-panel-key') === key;

      if (isActive) {
        chunk.removeAttribute('hidden');
      } else {
        chunk.setAttribute('hidden', '');
      }
    });

    panel.setAttribute('aria-labelledby', tab.id);
  }

  function activateTab(tabsRoot, tabs, panels, tab) {
    if (isTabDisabled(tab)) {
      return;
    }

    var panelId = tab.getAttribute('aria-controls');
    var isDynamic = tabsRoot.classList.contains('tabs_dynamic');

    tabs.forEach(function (item) {
      var isActive = item === tab;

      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', String(isActive));
      item.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    if (isDynamic) {
      activateDynamicPanel(tabsRoot, tab);
    } else {
      panels.forEach(function (panel) {
        var isActive = panel.id === panelId;

        panel.classList.toggle('is-active', isActive);

        if (isActive) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });
    }

    updateTabsIndicator(tabsRoot);
    updateTabsScrollNav(tabsRoot);
    scrollTabIntoView(tabsRoot, tab);
  }

  function findNextEnabledTab(tabs, startIndex, direction) {
    var index = startIndex;
    var attempts = 0;

    while (attempts < tabs.length) {
      index = (index + direction + tabs.length) % tabs.length;

      if (!isTabDisabled(tabs[index])) {
        return tabs[index];
      }

      attempts += 1;
    }

    return null;
  }

  function initTabs(tabsRoot) {
    var tablist = tabsRoot.querySelector('[role="tablist"]');

    if (!tablist) {
      return;
    }

    var tabs = getTabsFromList(tablist);
    var panels = Array.prototype.slice.call(tabsRoot.querySelectorAll('[role="tabpanel"]'));
    var isVertical = tabsRoot.classList.contains('tabs_vertical');
    var prevBtn = tabsRoot.querySelector('.tabs_nav_prev');
    var nextBtn = tabsRoot.querySelector('.tabs_nav_next');
    var list = tabsRoot.querySelector('.tabs_list');

    tablist.setAttribute('aria-orientation', isVertical ? 'vertical' : 'horizontal');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activateTab(tabsRoot, tabs, panels, tab);
      });

      tab.addEventListener('keydown', function (event) {
        var index = tabs.indexOf(tab);
        var nextTab = null;

        if (isVertical) {
          if (event.key === 'ArrowDown') {
            nextTab = findNextEnabledTab(tabs, index, 1);
          } else if (event.key === 'ArrowUp') {
            nextTab = findNextEnabledTab(tabs, index, -1);
          }
        } else if (event.key === 'ArrowRight') {
          nextTab = findNextEnabledTab(tabs, index, 1);
        } else if (event.key === 'ArrowLeft') {
          nextTab = findNextEnabledTab(tabs, index, -1);
        }

        if (event.key === 'Home') {
          nextTab = tabs.find(function (item) {
            return !isTabDisabled(item);
          }) || null;
        } else if (event.key === 'End') {
          for (var i = tabs.length - 1; i >= 0; i -= 1) {
            if (!isTabDisabled(tabs[i])) {
              nextTab = tabs[i];
              break;
            }
          }
        }

        if (nextTab) {
          event.preventDefault();
          nextTab.focus();
          activateTab(tabsRoot, tabs, panels, nextTab);
        }
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        scrollTabsBy(tabsRoot, -1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        scrollTabsBy(tabsRoot, 1);
      });
    }

    if (list) {
      list.addEventListener('scroll', function () {
        updateTabsScrollNav(tabsRoot);
        updateTabsIndicator(tabsRoot);
      }, { passive: true });
    }

    if (typeof ResizeObserver !== 'undefined') {
      var resizeObserver = new ResizeObserver(function () {
        updateTabsIndicator(tabsRoot);
        updateTabsScrollNav(tabsRoot);
      });

      if (list) {
        resizeObserver.observe(list);
        tabs.forEach(function (tab) {
          resizeObserver.observe(tab);
        });
      }
    }

    window.addEventListener('resize', function () {
      updateTabsIndicator(tabsRoot);
      updateTabsScrollNav(tabsRoot);
    });

    updateTabsIndicator(tabsRoot);
    updateTabsScrollNav(tabsRoot);
  }

  document.querySelectorAll('[data-tabs]').forEach(initTabs);

  function isAccordionItemDisabled(item) {
    var trigger = item.querySelector('.accordion_trigger');

    return (
      item.classList.contains('is-disabled') ||
      (trigger && (trigger.disabled || trigger.getAttribute('aria-disabled') === 'true'))
    );
  }

  function getAccordionItems(root) {
    return Array.prototype.slice.call(root.children).filter(function (child) {
      return child.classList.contains('accordion_item');
    });
  }

  function getAccordionTriggers(root) {
    return getAccordionItems(root).map(function (item) {
      return item.querySelector(':scope > .accordion_heading .accordion_trigger');
    }).filter(function (trigger) {
      return trigger && !isAccordionItemDisabled(trigger.closest('.accordion_item'));
    });
  }

  function getAccordionPanel(item, trigger) {
    var panelId = trigger ? trigger.getAttribute('aria-controls') : null;
    var directPanel = item.querySelector(':scope > .accordion_panel');

    if (directPanel && (!panelId || directPanel.id === panelId)) {
      return directPanel;
    }

    return panelId ? document.getElementById(panelId) : directPanel;
  }

  function usesSlideEffect(el) {
    return Boolean(el && el.getAttribute('data-effect') === 'slide');
  }

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function getSlideDurationMs(region) {
    var styles = getComputedStyle(region);
    var raw =
      styles.getPropertyValue('--accordion-slide-duration').trim() ||
      styles.getPropertyValue('--collapse-slide-duration').trim() ||
      '0.28s';
    var value = parseFloat(raw);

    if (!Number.isFinite(value)) {
      return 280;
    }

    return /ms$/i.test(raw) ? value : value * 1000;
  }

  function getSlideTransition(region) {
    var styles = getComputedStyle(region);
    var duration =
      styles.getPropertyValue('--accordion-slide-duration').trim() ||
      styles.getPropertyValue('--collapse-slide-duration').trim() ||
      '0.28s';
    var easing =
      styles.getPropertyValue('--accordion-slide-easing').trim() ||
      styles.getPropertyValue('--collapse-slide-easing').trim() ||
      'ease';

    return 'height ' + duration + ' ' + easing;
  }

  function clearSlideStyles(region) {
    region.classList.remove('is-sliding');
    region.style.height = '';
    region.style.overflow = '';
    region.style.transition = '';
  }

  function isSlideRegionOpen(region) {
    return !region.hasAttribute('hidden') && region.getAttribute('aria-hidden') !== 'true';
  }

  function runAfterSlide(region, onDone) {
    var finished = false;

    function finish() {
      if (finished) {
        return;
      }

      finished = true;

      if (region._slideCleanup) {
        region._slideCleanup();
        region._slideCleanup = null;
      }

      onDone();
    }

    function onEnd(event) {
      if (event.target !== region || event.propertyName !== 'height') {
        return;
      }

      finish();
    }

    region.addEventListener('transitionend', onEnd);

    var timer = window.setTimeout(finish, getSlideDurationMs(region) + 80);

    region._slideCleanup = function () {
      region.removeEventListener('transitionend', onEnd);
      window.clearTimeout(timer);
    };
  }

  function setSlideRegionOpen(region, open, animate) {
    // 이미 목표 상태면 스킵 — 닫힌 패널에 닫기 애니를 걸면 잠깐 펼침
    if (open === isSlideRegionOpen(region) && !region.classList.contains('is-sliding')) {
      region.classList.toggle('is-open', open);
      return;
    }

    region.classList.toggle('is-open', open);

    if (region._slideCleanup) {
      region._slideCleanup();
      region._slideCleanup = null;
      // 이전 애니 중단 시 닫히는 중이면 즉시 숨김
      if (region.getAttribute('aria-hidden') === 'true' && !open) {
        region.setAttribute('hidden', '');
        clearSlideStyles(region);
      } else if (region.getAttribute('aria-hidden') === 'true' && open) {
        clearSlideStyles(region);
      } else {
        clearSlideStyles(region);
      }
    }

    var shouldAnimate = animate !== false && !prefersReducedMotion();

    if (!shouldAnimate) {
      clearSlideStyles(region);

      if (open) {
        region.removeAttribute('hidden');
        region.removeAttribute('inert');
        region.setAttribute('aria-hidden', 'false');
      } else {
        region.setAttribute('hidden', '');
        region.setAttribute('inert', '');
        region.setAttribute('aria-hidden', 'true');
      }

      return;
    }

    if (open) {
      region.removeAttribute('hidden');
      region.removeAttribute('inert');
      region.setAttribute('aria-hidden', 'false');
      region.style.overflow = 'hidden';
      region.style.transition = 'none';
      region.style.height = '0px';
      region.classList.add('is-sliding');
      void region.offsetHeight;
      region.style.transition = getSlideTransition(region);
      region.style.height = region.scrollHeight + 'px';

      runAfterSlide(region, function () {
        clearSlideStyles(region);
      });
    } else {
      var fromHeight = region.scrollHeight;

      region.setAttribute('aria-hidden', 'true');
      region.setAttribute('inert', '');
      region.style.overflow = 'hidden';
      region.style.transition = 'none';
      region.style.height = fromHeight + 'px';
      region.classList.add('is-sliding');
      void region.offsetHeight;

      // 이미 높이가 0이면 transitionend가 안 올 수 있음
      if (fromHeight === 0) {
        region.setAttribute('hidden', '');
        clearSlideStyles(region);
        return;
      }

      region.style.transition = getSlideTransition(region);
      region.style.height = '0px';

      runAfterSlide(region, function () {
        region.setAttribute('hidden', '');
        clearSlideStyles(region);
      });
    }
  }

  function setAccordionItemOpen(item, open, slide, animate) {
    var trigger = item.querySelector('.accordion_trigger');
    var panel = getAccordionPanel(item, trigger);

    item.classList.toggle('is-open', open);

    if (trigger) {
      trigger.setAttribute('aria-expanded', String(open));
    }

    if (!panel) {
      return;
    }

    if (slide) {
      setSlideRegionOpen(panel, open, animate);
      return;
    }

    if (open) {
      panel.removeAttribute('hidden');
      panel.removeAttribute('aria-hidden');
      panel.removeAttribute('inert');
    } else {
      panel.setAttribute('hidden', '');
    }
  }

  function initAccordion(root) {
    var multiple = root.hasAttribute('data-accordion-multiple');
    var slide = usesSlideEffect(root);
    var items = getAccordionItems(root);

    items.forEach(function (item) {
      var trigger = item.querySelector('.accordion_trigger');

      if (!trigger) {
        return;
      }

      var panel = getAccordionPanel(item, trigger);

      if (!panel) {
        return;
      }

      // 초기 상태는 애니메이션 없이 맞춤 (닫힌 패널은 hidden 유지)
      setAccordionItemOpen(item, trigger.getAttribute('aria-expanded') === 'true', slide, false);

      trigger.addEventListener('click', function () {
        if (isAccordionItemDisabled(item)) {
          return;
        }

        var isOpen = trigger.getAttribute('aria-expanded') === 'true';

        if (!multiple && !isOpen) {
          items.forEach(function (other) {
            if (other === item || isAccordionItemDisabled(other)) {
              return;
            }

            var otherTrigger = other.querySelector('.accordion_trigger');
            var otherOpen = otherTrigger && otherTrigger.getAttribute('aria-expanded') === 'true';

            // 이미 닫힌 항목은 건너뜀 (닫기 애니가 hidden을 깨고 잠깐 펼침)
            if (otherOpen) {
              setAccordionItemOpen(other, false, slide, true);
            }
          });
        }

        setAccordionItemOpen(item, !isOpen, slide, true);
      });

      trigger.addEventListener('keydown', function (event) {
        if (event.defaultPrevented || isAccordionItemDisabled(item)) {
          return;
        }

        var triggers = getAccordionTriggers(root);
        var index = triggers.indexOf(trigger);
        var nextTrigger = null;

        if (index === -1 || !triggers.length) {
          return;
        }

        if (event.key === 'ArrowDown') {
          nextTrigger = triggers[(index + 1) % triggers.length];
        } else if (event.key === 'ArrowUp') {
          nextTrigger = triggers[(index - 1 + triggers.length) % triggers.length];
        } else if (event.key === 'Home') {
          nextTrigger = triggers[0] || null;
        } else if (event.key === 'End') {
          nextTrigger = triggers[triggers.length - 1] || null;
        }

        if (nextTrigger) {
          event.preventDefault();
          nextTrigger.focus();
        }
      });
    });
  }

  document.querySelectorAll('[data-accordion]').forEach(initAccordion);

  function isCollapsePanelDisabled(panel) {
    var trigger = panel.querySelector('.collapse_trigger');

    return (
      panel.classList.contains('is-disabled') ||
      (trigger && (trigger.disabled || trigger.getAttribute('aria-disabled') === 'true'))
    );
  }

  function getCollapsePanels(root) {
    return Array.prototype.slice.call(root.children).filter(function (child) {
      return child.classList.contains('collapse_panel');
    });
  }

  function getCollapseBody(panel, trigger) {
    var bodyId = trigger ? trigger.getAttribute('aria-controls') : null;
    var directBody = panel.querySelector(':scope > .collapse_body');

    if (directBody && (!bodyId || directBody.id === bodyId)) {
      return directBody;
    }

    return bodyId ? document.getElementById(bodyId) : directBody;
  }

  function setCollapseRegionOpen(region, open, slide, animate) {
    if (slide) {
      setSlideRegionOpen(region, open, animate);
      return;
    }

    region.classList.toggle('is-open', open);

    if (open) {
      region.removeAttribute('hidden');
      region.removeAttribute('aria-hidden');
      region.removeAttribute('inert');
    } else {
      region.setAttribute('hidden', '');
    }
  }

  function setCollapsePanelOpen(panel, open, slide, animate) {
    var trigger = panel.querySelector('.collapse_trigger');
    var body = getCollapseBody(panel, trigger);

    panel.classList.toggle('is-open', open);

    if (trigger) {
      trigger.setAttribute('aria-expanded', String(open));
    }

    if (body) {
      setCollapseRegionOpen(body, open, slide, animate);
    }
  }

  function initCollapseGroup(root) {
    var accordion = root.hasAttribute('data-collapse-accordion');
    var slide = usesSlideEffect(root);
    var panels = getCollapsePanels(root);

    panels.forEach(function (panel) {
      var trigger = panel.querySelector('.collapse_trigger');

      if (!trigger) {
        return;
      }

      var body = getCollapseBody(panel, trigger);

      if (!body) {
        return;
      }

      var isOpen = panel.classList.contains('is-open') || trigger.getAttribute('aria-expanded') === 'true';

      setCollapsePanelOpen(panel, isOpen, slide, false);

      trigger.addEventListener('click', function () {
        if (isCollapsePanelDisabled(panel)) {
          return;
        }

        var currentlyOpen = trigger.getAttribute('aria-expanded') === 'true';

        if (accordion && !currentlyOpen) {
          panels.forEach(function (other) {
            if (other === panel || isCollapsePanelDisabled(other)) {
              return;
            }

            var otherTrigger = other.querySelector('.collapse_trigger');
            var otherOpen = otherTrigger && otherTrigger.getAttribute('aria-expanded') === 'true';

            if (otherOpen) {
              setCollapsePanelOpen(other, false, slide, true);
            }
          });
        }

        setCollapsePanelOpen(panel, !currentlyOpen, slide, true);
      });
    });
  }

  function initCollapseTrigger(btn) {
    var targetId = btn.getAttribute('aria-controls');
    var target = targetId ? document.getElementById(targetId) : null;

    if (!target || !target.classList.contains('collapse')) {
      return;
    }

    var slide = usesSlideEffect(target) || usesSlideEffect(btn);

    setCollapseRegionOpen(target, btn.getAttribute('aria-expanded') === 'true', slide, false);

    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      var nextOpen = !open;

      btn.setAttribute('aria-expanded', String(nextOpen));
      setCollapseRegionOpen(target, nextOpen, slide, true);
    });
  }

  document.querySelectorAll('[data-collapse]').forEach(initCollapseGroup);
  document.querySelectorAll('[data-collapse-trigger]').forEach(initCollapseTrigger);

  var DROPDOWN_ITEM_SELECTOR =
    '.menu_link:not(.is-disabled):not([aria-disabled="true"]), ' +
    '[role="menuitem"]:not(.is-disabled):not([aria-disabled="true"]), ' +
    '[role="option"]:not(.is-disabled):not([aria-disabled="true"])';

  function getDropdownItems(menu) {
    return Array.prototype.slice.call(
      menu.querySelectorAll(DROPDOWN_ITEM_SELECTOR)
    );
  }

  function isDropdownStatic(dropdown) {
    return dropdown.hasAttribute('data-dropdown-static');
  }

  function setDropdownOpen(dropdown, open, focusPosition) {
    var trigger = dropdown.querySelector('.dropdown_trigger');
    var menu = dropdown.querySelector('.dropdown_menu');

    // 가이드 정적 펼침 데모는 로드 시 is-open을 유지한다
    if (isDropdownStatic(dropdown) && !open) {
      return;
    }

    dropdown.classList.toggle('is-open', open);

    if (trigger) {
      trigger.setAttribute('aria-expanded', String(open));
      trigger.classList.toggle('is-open', open);
    }

    if (menu) {
      menu.setAttribute('aria-hidden', String(!open));
    }

    if (menu && open && focusPosition) {
      var items = getDropdownItems(menu);
      var active = items.find(function (item) {
        return (
          item.classList.contains('is-active') ||
          item.getAttribute('aria-selected') === 'true' ||
          item.getAttribute('aria-current') === 'page'
        );
      });
      var target = focusPosition === 'last' ? items[items.length - 1] : active || items[0];

      if (target) target.focus();
    }
  }

  function closeAllDropdowns(except) {
    document.querySelectorAll('[data-dropdown].is-open:not([data-dropdown-static])').forEach(function (dropdown) {
      if (dropdown !== except) {
        setDropdownOpen(dropdown, false);
      }
    });
  }

  function initDropdown(dropdown) {
    var trigger = dropdown.querySelector('.dropdown_trigger');
    var menu = dropdown.querySelector('.dropdown_menu');

    if (trigger && menu) {
      var initiallyOpen = dropdown.classList.contains('is-open');
      trigger.setAttribute('aria-expanded', String(initiallyOpen));
      trigger.classList.toggle('is-open', initiallyOpen);
      menu.setAttribute('aria-hidden', String(!initiallyOpen));
    }

    // 정적 펼침(is-open) 데모는 토글·외부 클릭 닫기를 붙이지 않는다
    if (!trigger || !menu || dropdown.classList.contains('is-disabled') || trigger.disabled || isDropdownStatic(dropdown)) {
      return;
    }

    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      var open = dropdown.classList.contains('is-open');

      if (open) {
        setDropdownOpen(dropdown, false);
      } else {
        closeAllDropdowns(dropdown);
        setDropdownOpen(dropdown, true);
      }
    });

    trigger.addEventListener('keydown', function (event) {
      if (event.defaultPrevented || trigger.disabled || trigger.getAttribute('aria-disabled') === 'true') {
        return;
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        closeAllDropdowns(dropdown);
        setDropdownOpen(dropdown, true, event.key === 'ArrowUp' ? 'last' : 'active');
      } else if (event.key === 'Escape' && dropdown.classList.contains('is-open')) {
        event.preventDefault();
        setDropdownOpen(dropdown, false);
      }
    });

    menu.addEventListener('click', function (event) {
      var item = event.target.closest(DROPDOWN_ITEM_SELECTOR);

      if (!item || !menu.contains(item) || item.classList.contains('is-disabled') || item.getAttribute('aria-disabled') === 'true') {
        return;
      }

      if (item.getAttribute('role') === 'option') {
        menu.querySelectorAll('[role="option"]').forEach(function (el) {
          el.classList.remove('is-active');
          el.setAttribute('aria-selected', 'false');
        });

        item.classList.add('is-active');
        item.setAttribute('aria-selected', 'true');

        var label = dropdown.querySelector('.dropdown_trigger .btn_label');

        if (label) {
          label.textContent = item.textContent.trim();
        }
      }

      if (dropdown.hasAttribute('data-dropdown-close-on-select')) {
        setDropdownOpen(dropdown, false);
        trigger.focus();
      }
    });

    menu.addEventListener('keydown', function (event) {
      var items = getDropdownItems(menu);
      var index = items.indexOf(document.activeElement);
      var next = null;

      if (event.key === 'ArrowDown') {
        next = items[index < 0 ? 0 : Math.min(index + 1, items.length - 1)];
      } else if (event.key === 'ArrowUp') {
        next = items[index <= 0 ? 0 : index - 1];
      } else if (event.key === 'Home') {
        next = items[0] || null;
      } else if (event.key === 'End') {
        next = items[items.length - 1] || null;
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setDropdownOpen(dropdown, false);
        trigger.focus();
        return;
      }

      if (next) {
        event.preventDefault();
        next.focus();
      }
    });
  }

  document.querySelectorAll('[data-dropdown]').forEach(initDropdown);

  document.addEventListener('click', function (event) {
    if (!event.target.closest('[data-dropdown]')) {
      closeAllDropdowns();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeAllDropdowns();
    }
  });

  function getPopoverPlacementSide(root) {
    if (root.classList.contains('popover_placement-left')) return 'left';
    if (root.classList.contains('popover_placement-right')) return 'right';
    if (
      root.classList.contains('popover_placement-top') ||
      root.classList.contains('popover_placement-top-center')
    ) {
      return 'top';
    }
    return 'bottom';
  }

  function getPopoverTriggerElement(root, panel) {
    var matched = root.querySelector('.popover_trigger');
    if (!matched || panel.contains(matched)) {
      return Array.prototype.find.call(root.children, function (child) {
        return child !== panel && child.nodeType === 1;
      });
    }

    var focusable = matched.querySelector(
      'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled)',
    );

    return focusable || matched;
  }

  function clampPopoverValue(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function normalizePopoverArrowAlign(align, side) {
    if (align === 'start') {
      return side === 'left' || side === 'right' ? 'top' : 'left';
    }
    if (align === 'end') {
      return side === 'left' || side === 'right' ? 'bottom' : 'right';
    }
    return align;
  }

  function getPopoverTriggerAxisPoint(triggerRect, side, align) {
    var point = normalizePopoverArrowAlign(align, side);

    if (side === 'left' || side === 'right') {
      if (point === 'top') return triggerRect.top;
      if (point === 'bottom') return triggerRect.bottom;
      return triggerRect.top + triggerRect.height / 2;
    }

    if (point === 'left') return triggerRect.left;
    if (point === 'right') return triggerRect.right;
    return triggerRect.left + triggerRect.width / 2;
  }

  function usesPopoverArrowJs(root) {
    return (
      root.classList.contains('popover_arrow-anchor-target') ||
      root.classList.contains('popover_arrow-anchor-mixed')
    );
  }

  function usesPopoverPanelJs(root) {
    return root.classList.contains('popover_arrow-anchor-mixed');
  }

  function resetPopoverPanelInlineStyles(panel) {
    panel.style.left = '';
    panel.style.right = '';
    panel.style.top = '';
    panel.style.bottom = '';
    panel.style.transform = '';
  }

  function updatePopoverPanelPosition(root) {
    var panel = root.querySelector('.popover_panel');
    if (!panel) return;

    if (!usesPopoverPanelJs(root)) {
      resetPopoverPanelInlineStyles(panel);
      return;
    }

    var trigger = getPopoverTriggerElement(root, panel);
    if (!trigger) return;

    var panelAlign = root.getAttribute('data-panel-align') || 'start';
    var side = getPopoverPlacementSide(root);
    var triggerW = trigger.offsetWidth;
    var triggerH = trigger.offsetHeight;
    var panelW = panel.offsetWidth;
    var panelH = panel.offsetHeight;
    var left;
    var top;

    resetPopoverPanelInlineStyles(panel);

    if (side === 'bottom') {
      panel.style.top = 'calc(100% + var(--popover-offset-bottom) + var(--popover-arrow-clearance))';
      left = 0;
      if (panelAlign === 'center') left = (triggerW - panelW) / 2;
      if (panelAlign === 'end') left = triggerW - panelW;
      panel.style.left = left + 'px';
      return;
    }

    if (side === 'top') {
      panel.style.top = 'auto';
      panel.style.bottom = 'calc(100% + var(--popover-offset-top) + var(--popover-arrow-clearance))';
      left = 0;
      if (panelAlign === 'center') left = (triggerW - panelW) / 2;
      if (panelAlign === 'end') left = triggerW - panelW;
      panel.style.left = left + 'px';
      return;
    }

    if (side === 'left') {
      panel.style.top = 'auto';
      panel.style.bottom = 'auto';
      panel.style.left = 'auto';
      panel.style.right = 'calc(100% + var(--popover-offset-left) + var(--popover-arrow-clearance))';
      top = 0;
      if (panelAlign === 'center') top = (triggerH - panelH) / 2;
      if (panelAlign === 'end') top = triggerH - panelH;
      panel.style.top = top + 'px';
      return;
    }

    if (side === 'right') {
      panel.style.top = 'auto';
      panel.style.bottom = 'auto';
      panel.style.left = 'calc(100% + var(--popover-offset-right) + var(--popover-arrow-clearance))';
      top = 0;
      if (panelAlign === 'center') top = (triggerH - panelH) / 2;
      if (panelAlign === 'end') top = triggerH - panelH;
      panel.style.top = top + 'px';
    }
  }

  function getPopoverArrowEdgeInset(panel, arrowSize) {
    var inset = parseFloat(getComputedStyle(panel).getPropertyValue('--popover-arrow-edge-inset'));
    if (Number.isFinite(inset) && inset > 0) return inset;
    return arrowSize / 2 + 4;
  }

  function updatePopoverArrowPosition(root) {
    var panel = root.querySelector('.popover_panel');
    if (!panel) return;

    if (!usesPopoverArrowJs(root)) {
      panel.style.removeProperty('--popover-arrow-position');
      return;
    }

    var arrow = panel.querySelector('.popover_arrow');
    var trigger = getPopoverTriggerElement(root, panel);
    var visible = root.classList.contains('is-open') || !panel.hasAttribute('hidden');

    if (!arrow || !trigger || !visible) return;

    var triggerRect = trigger.getBoundingClientRect();
    var panelRect = panel.getBoundingClientRect();
    var side = getPopoverPlacementSide(root);
    var align = root.getAttribute('data-arrow-target-align') || 'center';
    var arrowSize = parseFloat(getComputedStyle(arrow).width) || 8;
    var inset = getPopoverArrowEdgeInset(panel, arrowSize);
    var position;

    if (side === 'left' || side === 'right') {
      position = getPopoverTriggerAxisPoint(triggerRect, side, align) - panelRect.top;
      position = clampPopoverValue(position, inset, panelRect.height - inset);
    } else {
      position = getPopoverTriggerAxisPoint(triggerRect, side, align) - panelRect.left;
      position = clampPopoverValue(position, inset, panelRect.width - inset);
    }

    panel.style.setProperty('--popover-arrow-position', position + 'px');
  }

  function updatePopoverLayout(popover) {
    updatePopoverPanelPosition(popover);
    updatePopoverArrowPosition(popover);
  }

  var popoverLayoutUpdateFrame = null;

  function schedulePopoverLayoutUpdates() {
    if (popoverLayoutUpdateFrame) return;

    popoverLayoutUpdateFrame = requestAnimationFrame(function () {
      popoverLayoutUpdateFrame = null;

      document
        .querySelectorAll(
          '.popover.popover_arrow-anchor-target.is-open, .popover.popover_arrow-anchor-mixed.is-open',
        )
        .forEach(updatePopoverLayout);
    });
  }

  function setPopoverOpen(popover, open) {
    var trigger = popover.querySelector('.popover_trigger');
    var panel = popover.querySelector('.popover_panel');

    popover.classList.toggle('is-open', open);

    if (trigger) {
      trigger.setAttribute('aria-expanded', String(open));
    }

    if (panel) {
      if (open) {
        panel.removeAttribute('hidden');
        updatePopoverLayout(popover);
        if (popover.getAttribute('data-popover-trigger') !== 'hover') {
          var closeBtn = panel.querySelector('.popover_close');
          if (closeBtn) {
            requestAnimationFrame(function () {
              closeBtn.focus();
            });
          }
        }
      } else {
        panel.setAttribute('hidden', '');
      }
    }
  }

  function closeAllPopovers(except) {
    document.querySelectorAll('[data-popover].is-open').forEach(function (popover) {
      if (popover !== except) {
        setPopoverOpen(popover, false);
      }
    });
  }

  function initPopover(popover) {
    var trigger = popover.querySelector('.popover_trigger');
    var panel = popover.querySelector('.popover_panel');

    if (!trigger || !panel || popover.classList.contains('is-disabled') || trigger.disabled) {
      return;
    }

    var triggerMode = popover.getAttribute('data-popover-trigger') || 'click';
    var hoverTimer = null;

    function clearHoverTimer() {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
    }

    function scheduleClose() {
      clearHoverTimer();
      hoverTimer = setTimeout(function () {
        setPopoverOpen(popover, false);
      }, 120);
    }

    if (triggerMode === 'hover') {
      popover.addEventListener('mouseenter', function () {
        clearHoverTimer();
        setPopoverOpen(popover, true);
      });

      popover.addEventListener('mouseleave', scheduleClose);

      trigger.addEventListener('focus', function () {
        clearHoverTimer();
        setPopoverOpen(popover, true);
      });

      trigger.addEventListener('blur', function () {
        scheduleClose();
      });
    } else {
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var open = popover.classList.contains('is-open');

        if (open) {
          setPopoverOpen(popover, false);
        } else {
          closeAllPopovers(popover);
          setPopoverOpen(popover, true);
        }
      });
    }

    popover.querySelectorAll('[data-popover-close]').forEach(function (btn) {
      btn.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        setPopoverOpen(popover, false);
        trigger.focus();
      });
    });

    if (popover.classList.contains('is-open')) {
      var openPanel = popover.querySelector('.popover_panel');
      if (openPanel) {
        openPanel.removeAttribute('hidden');
      }
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'true');
      }
      updatePopoverLayout(popover);
    }
  }

  document.querySelectorAll('[data-popover]').forEach(initPopover);

  document.addEventListener('click', function (event) {
    if (!event.target.closest('[data-popover]')) {
      closeAllPopovers();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeAllPopovers();
    }
  });

  window.addEventListener('resize', schedulePopoverLayoutUpdates);

  function getTooltipPlacementSide(root) {
    if (root.classList.contains('tooltip_placement-left')) return 'left';
    if (root.classList.contains('tooltip_placement-right')) return 'right';
    if (
      root.classList.contains('tooltip_placement-top') ||
      root.classList.contains('tooltip_placement-top-start') ||
      root.classList.contains('tooltip_placement-top-end')
    ) {
      return 'top';
    }
    return 'bottom';
  }

  function getTooltipTriggerElement(root, bubble) {
    var matched = root.querySelector('.tooltip_trigger');
    if (!matched || bubble.contains(matched)) {
      return Array.prototype.find.call(root.children, function (child) {
        return child !== bubble && child.nodeType === 1;
      });
    }

    var focusable = matched.querySelector(
      'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled)',
    );

    return focusable || matched;
  }

  function usesTooltipArrowJs(root) {
    return (
      root.classList.contains('tooltip_arrow-anchor-target') ||
      root.classList.contains('tooltip_arrow-anchor-mixed')
    );
  }

  function usesTooltipPanelJs(root) {
    return root.classList.contains('tooltip_arrow-anchor-mixed');
  }

  function resetTooltipBubbleInlineStyles(bubble) {
    bubble.style.left = '';
    bubble.style.right = '';
    bubble.style.top = '';
    bubble.style.bottom = '';
    bubble.style.transform = '';
  }

  function updateTooltipPanelPosition(root) {
    var bubble = root.querySelector('.tooltip_bubble');
    if (!bubble) return;

    if (!usesTooltipPanelJs(root)) {
      resetTooltipBubbleInlineStyles(bubble);
      return;
    }

    var trigger = getTooltipTriggerElement(root, bubble);
    if (!trigger) return;

    var panelAlign = root.getAttribute('data-panel-align') || 'center';
    var side = getTooltipPlacementSide(root);
    var triggerW = trigger.offsetWidth;
    var triggerH = trigger.offsetHeight;
    var panelW = bubble.offsetWidth;
    var panelH = bubble.offsetHeight;
    var left;
    var top;

    resetTooltipBubbleInlineStyles(bubble);

    if (side === 'bottom') {
      bubble.style.top = 'calc(100% + var(--tooltip-offset-bottom) + var(--tooltip-arrow-clearance))';
      left = (triggerW - panelW) / 2;
      if (panelAlign === 'start') left = 0;
      if (panelAlign === 'end') left = triggerW - panelW;
      bubble.style.left = left + 'px';
      return;
    }

    if (side === 'top') {
      bubble.style.top = 'auto';
      bubble.style.bottom = 'calc(100% + var(--tooltip-offset-top) + var(--tooltip-arrow-clearance))';
      left = (triggerW - panelW) / 2;
      if (panelAlign === 'start') left = 0;
      if (panelAlign === 'end') left = triggerW - panelW;
      bubble.style.left = left + 'px';
      return;
    }

    if (side === 'left') {
      bubble.style.top = 'auto';
      bubble.style.bottom = 'auto';
      bubble.style.left = 'auto';
      bubble.style.right = 'calc(100% + var(--tooltip-offset-left) + var(--tooltip-arrow-clearance))';
      top = (triggerH - panelH) / 2;
      if (panelAlign === 'start') top = 0;
      if (panelAlign === 'end') top = triggerH - panelH;
      bubble.style.top = top + 'px';
      return;
    }

    if (side === 'right') {
      bubble.style.top = 'auto';
      bubble.style.bottom = 'auto';
      bubble.style.left = 'calc(100% + var(--tooltip-offset-right) + var(--tooltip-arrow-clearance))';
      top = (triggerH - panelH) / 2;
      if (panelAlign === 'start') top = 0;
      if (panelAlign === 'end') top = triggerH - panelH;
      bubble.style.top = top + 'px';
    }
  }

  function getTooltipArrowEdgeInset(bubble, arrowSize) {
    var inset = parseFloat(getComputedStyle(bubble).getPropertyValue('--tooltip-arrow-edge-inset'));
    if (Number.isFinite(inset) && inset > 0) return inset;
    return arrowSize / 2 + 4;
  }

  function updateTooltipArrowPosition(root) {
    var bubble = root.querySelector('.tooltip_bubble');
    if (!bubble) return;

    if (!usesTooltipArrowJs(root)) {
      bubble.style.removeProperty('--tooltip-arrow-position');
      return;
    }

    var arrow = bubble.querySelector('.tooltip_arrow');
    var trigger = getTooltipTriggerElement(root, bubble);
    var visible = root.classList.contains('is-open') || !bubble.hasAttribute('hidden');

    if (!arrow || !trigger || !visible) return;

    var triggerRect = trigger.getBoundingClientRect();
    var panelRect = bubble.getBoundingClientRect();
    var side = getTooltipPlacementSide(root);
    var align = root.getAttribute('data-arrow-target-align') || 'center';
    var arrowSize = parseFloat(getComputedStyle(arrow).width) || 6;
    var inset = getTooltipArrowEdgeInset(bubble, arrowSize);
    var position;

    if (side === 'left' || side === 'right') {
      position = getPopoverTriggerAxisPoint(triggerRect, side, align) - panelRect.top;
      position = clampPopoverValue(position, inset, panelRect.height - inset);
    } else {
      position = getPopoverTriggerAxisPoint(triggerRect, side, align) - panelRect.left;
      position = clampPopoverValue(position, inset, panelRect.width - inset);
    }

    bubble.style.setProperty('--tooltip-arrow-position', position + 'px');
  }

  function updateTooltipLayout(tooltip) {
    updateTooltipPanelPosition(tooltip);
    updateTooltipArrowPosition(tooltip);
  }

  var tooltipLayoutUpdateFrame = null;

  function scheduleTooltipLayoutUpdates() {
    if (tooltipLayoutUpdateFrame) return;

    tooltipLayoutUpdateFrame = requestAnimationFrame(function () {
      tooltipLayoutUpdateFrame = null;

      document
        .querySelectorAll(
          '.tooltip.tooltip_arrow-anchor-target.is-open, .tooltip.tooltip_arrow-anchor-mixed.is-open',
        )
        .forEach(updateTooltipLayout);
    });
  }

  function focusTooltipTrigger(tooltip) {
    var triggerWrap = tooltip.querySelector('.tooltip_trigger');
    if (!triggerWrap) return;

    var focusable =
      triggerWrap.querySelector(
        'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
      ) || (triggerWrap.tabIndex >= 0 ? triggerWrap : null);

    if (focusable) {
      focusable.focus();
    }
  }

  function setTooltipOpen(tooltip, open) {
    var trigger = tooltip.querySelector('.tooltip_trigger');
    var bubble = tooltip.querySelector('.tooltip_bubble');

    tooltip.classList.toggle('is-open', open);

    if (trigger && tooltip.getAttribute('data-tooltip-trigger') === 'click') {
      trigger.setAttribute('aria-expanded', String(open));
    }

    if (bubble) {
      if (open) {
        bubble.removeAttribute('hidden');
        updateTooltipLayout(tooltip);
        if (tooltip.getAttribute('data-tooltip-trigger') === 'click') {
          var closeBtn = bubble.querySelector('.tooltip_close');
          if (closeBtn) {
            requestAnimationFrame(function () {
              closeBtn.focus();
            });
          }
        }
      } else {
        bubble.setAttribute('hidden', '');
      }
    }
  }

  function closeAllTooltips(except) {
    document.querySelectorAll('[data-tooltip].is-open').forEach(function (tooltip) {
      if (tooltip !== except) {
        setTooltipOpen(tooltip, false);
      }
    });
  }

  function initTooltip(tooltip) {
    var trigger = tooltip.querySelector('.tooltip_trigger');
    var bubble = tooltip.querySelector('.tooltip_bubble');

    if (!trigger || !bubble || tooltip.classList.contains('is-disabled')) {
      return;
    }

    var triggerMode = tooltip.getAttribute('data-tooltip-trigger') || 'hover';
    var hoverTimer = null;

    function clearHoverTimer() {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
    }

    function scheduleClose() {
      clearHoverTimer();
      hoverTimer = setTimeout(function () {
        setTooltipOpen(tooltip, false);
      }, 120);
    }

    if (triggerMode === 'click') {
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var open = tooltip.classList.contains('is-open');

        if (open) {
          setTooltipOpen(tooltip, false);
        } else {
          closeAllTooltips(tooltip);
          setTooltipOpen(tooltip, true);
        }
      });

      tooltip.querySelectorAll('[data-tooltip-close]').forEach(function (btn) {
        btn.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopPropagation();
          setTooltipOpen(tooltip, false);
          focusTooltipTrigger(tooltip);
        });
      });
    } else {
      tooltip.addEventListener('mouseenter', function () {
        clearHoverTimer();
        setTooltipOpen(tooltip, true);
      });

      tooltip.addEventListener('mouseleave', scheduleClose);

      trigger.addEventListener('focus', function () {
        clearHoverTimer();
        setTooltipOpen(tooltip, true);
      });

      trigger.addEventListener('blur', scheduleClose);
    }

    if (tooltip.classList.contains('is-open')) {
      bubble.removeAttribute('hidden');
      updateTooltipLayout(tooltip);
    }
  }

  document.querySelectorAll('[data-tooltip]').forEach(initTooltip);

  document.addEventListener('click', function (event) {
    if (!event.target.closest('[data-tooltip]')) {
      closeAllTooltips();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeAllTooltips();
    }
  });

  window.addEventListener('resize', scheduleTooltipLayoutUpdates);
  function parseAffixOffset(value, fallback) {
    var parsed = parseInt(value, 10);

    return Number.isFinite(parsed) ? parsed : fallback;
  }

  /** position:fixed의 containing block (transform/filter 등) 보정 */
  function getFixedContainingBlockRect(el) {
    var parent = el.parentElement;

    while (parent) {
      var style = getComputedStyle(parent);
      var transform = style.transform;
      var filter = style.filter;
      var backdropFilter = style.backdropFilter || style.webkitBackdropFilter;
      var perspective = style.perspective;
      var contain = style.contain;
      var willChange = style.willChange;
      var hasTransform = Boolean(transform && transform !== 'none');
      var hasFilter = Boolean(
        (filter && filter !== 'none') || (backdropFilter && backdropFilter !== 'none')
      );
      var hasPerspective = Boolean(perspective && perspective !== 'none');
      var hasContain = Boolean(contain && /paint|layout|strict|content/.test(contain));
      var hasWillChange = Boolean(willChange && /transform|filter|perspective/.test(willChange));

      if (hasTransform || hasFilter || hasPerspective || hasContain || hasWillChange) {
        return parent.getBoundingClientRect();
      }

      if (parent === document.documentElement) {
        break;
      }

      parent = parent.parentElement;
    }

    return {
      left: 0,
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  function initAffix(root) {
    if (root.dataset.affixInit) {
      return;
    }

    var targetSelector = root.getAttribute('data-target');
    var scrollContainer = null;

    if (targetSelector) {
      try {
        scrollContainer = document.querySelector(targetSelector);
      } catch (error) {
        scrollContainer = null;
      }
    }

    var offsetTop = parseAffixOffset(root.getAttribute('data-offset-top'), 0);
    var useBottom = root.hasAttribute('data-offset-bottom');
    var offsetBottom = useBottom ? parseAffixOffset(root.getAttribute('data-offset-bottom'), 0) : 0;
    var affixEl = root.querySelector(':scope > .affix_target');

    if (!affixEl) {
      return;
    }

    root.dataset.affixInit = '1';

    var placeholder = root.querySelector(':scope > .affix_placeholder');

    if (!placeholder) {
      placeholder = document.createElement('div');
      placeholder.className = 'affix_placeholder';
      placeholder.setAttribute('aria-hidden', 'true');
      root.insertBefore(placeholder, affixEl);
    }

    var affixed = false;
    var ticking = false;

    function getTargetRect() {
      if (scrollContainer) {
        return scrollContainer.getBoundingClientRect();
      }

      return {
        top: 0,
        bottom: window.innerHeight,
        left: 0,
        right: window.innerWidth,
      };
    }

    function clearAffixStyles() {
      affixEl.style.position = '';
      affixEl.style.top = '';
      affixEl.style.bottom = '';
      affixEl.style.left = '';
      affixEl.style.width = '';
      affixEl.style.zIndex = '';
    }

    function applyAffixStyles(targetRect, width, left) {
      var cb = getFixedContainingBlockRect(affixEl);
      var viewportTop = useBottom
        ? targetRect.bottom - affixEl.offsetHeight - offsetBottom
        : targetRect.top + offsetTop;

      affixEl.style.position = 'fixed';
      affixEl.style.width = width + 'px';
      affixEl.style.left = left - cb.left + 'px';
      affixEl.style.top = viewportTop - cb.top + 'px';
      affixEl.style.bottom = '';
      affixEl.style.zIndex = getComputedStyle(root).getPropertyValue('--affix-z-index').trim() || '10';
    }

    function setAffixed(next, metrics) {
      if (next === affixed) {
        if (next && metrics) {
          applyAffixStyles(metrics.targetRect, metrics.width, metrics.left);
        }

        return;
      }

      affixed = next;
      root.classList.toggle('is-affixed', affixed);
      affixEl.classList.toggle('is-fixed', affixed);

      if (affixed) {
        var height = affixEl.offsetHeight;
        placeholder.style.height = height + 'px';
        placeholder.style.width = metrics.width + 'px';
        placeholder.hidden = false;
        applyAffixStyles(metrics.targetRect, metrics.width, metrics.left);
      } else {
        placeholder.hidden = true;
        placeholder.style.height = '';
        placeholder.style.width = '';
        clearAffixStyles();
      }
    }

    function measure() {
      if (ticking) {
        return;
      }

      ticking = true;

      requestAnimationFrame(function () {
        ticking = false;

        var targetRect = getTargetRect();
        var rootRect = root.getBoundingClientRect();
        var referenceRect = affixed ? placeholder.getBoundingClientRect() : rootRect;
        var width = referenceRect.width || rootRect.width;
        var left = referenceRect.left;
        var metrics = { targetRect: targetRect, width: width, left: left };
        var nextAffixed = affixed;

        if (useBottom) {
          var bottomGap = targetRect.bottom - referenceRect.bottom;
          nextAffixed = bottomGap <= offsetBottom;

          if (nextAffixed && scrollContainer) {
            var affixHeightBottom = affixEl.offsetHeight;
            var containerTopGap = referenceRect.bottom - targetRect.top;

            if (containerTopGap < affixHeightBottom + offsetBottom) {
              nextAffixed = false;
            }
          }
        } else {
          var topGap = referenceRect.top - targetRect.top;
          nextAffixed = topGap <= offsetTop;

          if (nextAffixed && scrollContainer) {
            var affixHeight = affixEl.offsetHeight;
            var containerBottomGap = targetRect.bottom - referenceRect.top;

            if (containerBottomGap < affixHeight + offsetTop) {
              nextAffixed = false;
            }
          }
        }

        setAffixed(nextAffixed, metrics);
      });
    }

    var scrollTarget = scrollContainer || window;

    scrollTarget.addEventListener('scroll', measure, { passive: true });

    if (scrollContainer) {
      window.addEventListener('scroll', measure, { passive: true, capture: true });
    }

    window.addEventListener('resize', measure, { passive: true });
    measure();
  }

  document.querySelectorAll('[data-affix]').forEach(initAffix);

  function parseBackTopOffset(value, fallback) {
    var parsed = parseInt(value, 10);

    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function initBackTop(root) {
    if (root.dataset.backTopInit) {
      return;
    }

    var targetSelector = root.getAttribute('data-target');
    var scrollContainer = null;

    if (targetSelector) {
      try {
        scrollContainer = document.querySelector(targetSelector);
      } catch (error) {
        scrollContainer = null;
      }
    }

    var visibilityHeight = parseBackTopOffset(root.getAttribute('data-visibility-height'), 400);
    var btn = root.querySelector(':scope > .back_top_btn');

    if (!btn) {
      return;
    }

    root.dataset.backTopInit = '1';

    function getScrollTop() {
      if (scrollContainer) {
        return scrollContainer.scrollTop;
      }

      return window.scrollY || document.documentElement.scrollTop;
    }

    function scrollToTop() {
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    function updateVisibility() {
      root.classList.toggle('is-visible', getScrollTop() >= visibilityHeight);
    }

    btn.addEventListener('click', scrollToTop);

    var scrollTarget = scrollContainer || window;

    scrollTarget.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();
  }

  document.querySelectorAll('[data-back-top]').forEach(initBackTop);

  var openDrawerStack = [];
  var DRAWER_CLOSE_MS = 380;

  function getDrawerTriggers(drawer) {
    if (!drawer.id) {
      return [];
    }

    return Array.prototype.slice.call(
      document.querySelectorAll('[data-drawer-trigger][aria-controls="' + drawer.id + '"]')
    );
  }

  function setDrawerTriggersExpanded(drawer, expanded) {
    getDrawerTriggers(drawer).forEach(function (trigger) {
      trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  function updateDrawerStackLevels() {
    openDrawerStack.forEach(function (drawer, index) {
      drawer.style.setProperty('--drawer-stack-level', String(index));
      drawer.classList.toggle('is-stack-covered', index !== openDrawerStack.length - 1);
    });
  }

  function updateBodyDrawerLock() {
    var openDrawers = document.querySelectorAll(
      '[data-drawer].is-open:not([data-drawer-backdrop="false"])'
    );
    var hasPageOverlay = false;

    openDrawers.forEach(function (drawer) {
      // 프레임 안에 고정한 정적 미리보기만 페이지 스크롤 잠금에서 제외
      if (!drawer.classList.contains('drawer_demo-static')) {
        hasPageOverlay = true;
      }
    });

    document.body.classList.toggle('is-drawer-open', hasPageOverlay);
  }

  function openDrawer(drawer, trigger) {
    if (
      !drawer
      || drawer.classList.contains('is-open')
      || drawer.classList.contains('is-closing')
      || drawer.classList.contains('is-opening')
    ) {
      return;
    }

    drawer.classList.remove('is-closing', 'is-stack-covered');
    drawer.hidden = false;
    drawer.classList.add('is-opening');

    if (trigger) {
      drawer._drawerReturnFocus = trigger;
    }

    openDrawerStack.push(drawer);
    updateDrawerStackLevels();

    var panel = drawer.querySelector('.drawer_panel');
    var opened = false;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function finishOpen() {
      if (opened) {
        return;
      }

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

      requestAnimationFrame(function () {
        var closeBtn = drawer.querySelector('.drawer_close');

        if (closeBtn) {
          closeBtn.focus();
        } else {
          drawer.focus();
        }
      });
    }

    function onOpenTransitionEnd(event) {
      if (event.target !== panel || event.propertyName !== 'transform') {
        return;
      }

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

    // display:block(is-opening) 후 닫힌 위치를 한 프레임 그린 뒤 is-open으로 전환
    void drawer.offsetWidth;

    if (reduceMotion) {
      startOpenTransition();
      return;
    }

    requestAnimationFrame(function () {
      requestAnimationFrame(startOpenTransition);
    });
  }

  function finishCloseDrawer(drawer) {
    drawer.classList.remove('is-closing');
    drawer.hidden = true;
    drawer.style.removeProperty('--drawer-stack-level');
    setDrawerTriggersExpanded(drawer, false);

    var panel = drawer.querySelector('.drawer_panel');

    if (panel) {
      panel.classList.remove('is-expanded', 'is-dragging');
      panel.style.height = '';
      panel.style.transform = '';
    }

    openDrawerStack = openDrawerStack.filter(function (item) {
      return item !== drawer;
    });

    updateDrawerStackLevels();
    updateBodyDrawerLock();

    if (drawer._drawerReturnFocus) {
      drawer._drawerReturnFocus.focus();
      drawer._drawerReturnFocus = null;
    }
  }

  function closeDrawer(drawer) {
    if (!drawer || !drawer.classList.contains('is-open') || drawer.classList.contains('is-closing')) {
      return;
    }

    drawer.classList.remove('is-open', 'is-stack-covered');
    drawer.classList.add('is-closing');

    // 닫힘 시작 시 스택에서 제거해 하위 Drawer 백드롭을 바로 복원
    openDrawerStack = openDrawerStack.filter(function (item) {
      return item !== drawer;
    });
    updateDrawerStackLevels();
    updateBodyDrawerLock();

    var panel = drawer.querySelector('.drawer_panel');
    var closed = false;

    function completeClose() {
      if (closed) {
        return;
      }

      closed = true;

      if (panel) {
        panel.removeEventListener('transitionend', onTransitionEnd);
      }

      finishCloseDrawer(drawer);
    }

    function onTransitionEnd(event) {
      if (event.target !== panel || event.propertyName !== 'transform') {
        return;
      }

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
    return trigger.getAttribute('data-drawer-trigger') || ('#' + trigger.getAttribute('aria-controls'));
  }

  function getDrawerDragContainerHeight(drawer) {
    var frame = drawer.closest('.drawer_demo-frame');

    if (frame && drawer.classList.contains('drawer_demo-static')) {
      return frame.clientHeight;
    }

    return window.innerHeight;
  }

  function getDrawerSnapHeights(drawer, panel) {
    var collapsed = drawer._drawerCollapsedHeight;

    if (!collapsed || collapsed < 1) {
      var wasExpanded = panel.classList.contains('is-expanded');
      var prevHeight = panel.style.height;

      panel.classList.remove('is-expanded');
      panel.style.height = '';
      collapsed = panel.getBoundingClientRect().height;
      drawer._drawerCollapsedHeight = collapsed;

      if (wasExpanded) {
        panel.classList.add('is-expanded');
      }

      panel.style.height = prevHeight;
    }

    var expanded = Math.max(collapsed + 48, getDrawerDragContainerHeight(drawer) * 0.9);

    return { collapsed: collapsed, expanded: expanded };
  }

  function isDrawerDragStartTarget(event, drawer) {
    if (event.target.closest('[data-drawer-close], a, input, textarea, select, .drawer_extra')) {
      return false;
    }

    if (event.target.closest('[data-drawer-drag-handle]')) {
      return true;
    }

    var header = event.target.closest('.drawer_header');

    return Boolean(header && drawer.contains(header));
  }

  var drawerDragState = null;

  function endDrawerDrag(event) {
    if (!drawerDragState) {
      return;
    }

    var state = drawerDragState;
    var drawer = state.drawer;
    var panel = state.panel;

    drawerDragState = null;
    panel.classList.remove('is-dragging');

    if (state.pointerId != null && state.handle && state.handle.releasePointerCapture) {
      try {
        state.handle.releasePointerCapture(state.pointerId);
      } catch (_err) {
        // ignore
      }
    }

    var currentHeight = panel.getBoundingClientRect().height;
    var snaps = getDrawerSnapHeights(drawer, panel);
    var closeThreshold = snaps.collapsed * 0.55;
    var expandThreshold = (snaps.collapsed + snaps.expanded) / 2;
    var startedExpanded = state.startHeight >= expandThreshold;

    panel.style.height = '';
    panel.style.transform = '';

    // 기본 높이보다 충분히 낮게 내리면 닫기 (펼친 상태에서 접는 드래그와 구분)
    if (currentHeight < closeThreshold) {
      panel.classList.remove('is-expanded');
      closeDrawer(drawer);
      return;
    }

    // 접힌 상태에서 빠르게 아래로 쓸면 닫기
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

    if (event) {
      event.preventDefault();
    }
  }

  document.addEventListener('pointerdown', function (event) {
    if (event.button != null && event.button !== 0) {
      return;
    }

    var drawer = event.target.closest('[data-drawer][data-drawer-draggable="true"]');

    if (!drawer || !drawer.classList.contains('is-open') || drawer.classList.contains('is-closing')) {
      return;
    }

    if (!isDrawerDragStartTarget(event, drawer)) {
      return;
    }

    var panel = drawer.querySelector('.drawer_panel.drawer_placement-bottom');

    if (!panel) {
      return;
    }

    var handle = event.target.closest('[data-drawer-drag-handle]') || panel.querySelector('[data-drawer-drag-handle]');
    var snaps = getDrawerSnapHeights(drawer, panel);

    drawerDragState = {
      drawer: drawer,
      panel: panel,
      handle: handle,
      pointerId: event.pointerId,
      startY: event.clientY,
      startHeight: panel.getBoundingClientRect().height,
      deltaY: 0,
      snaps: snaps,
    };

    panel.classList.add('is-dragging');

    if (handle && handle.setPointerCapture && event.pointerId != null) {
      try {
        handle.setPointerCapture(event.pointerId);
      } catch (_err) {
        // ignore
      }
    }

    event.preventDefault();
  }, { passive: false });

  document.addEventListener('pointermove', function (event) {
    if (!drawerDragState) {
      return;
    }

    var state = drawerDragState;
    var deltaY = state.startY - event.clientY;
    var nextHeight = Math.min(
      state.snaps.expanded,
      Math.max(0, state.startHeight + deltaY)
    );

    state.deltaY = deltaY;
    state.panel.style.height = nextHeight + 'px';
    state.panel.style.transform = 'translateY(0)';
    event.preventDefault();
  }, { passive: false });

  document.addEventListener('pointerup', endDrawerDrag);
  document.addEventListener('pointercancel', endDrawerDrag);

  function initDrawerOpenOnLoad() {
    document.querySelectorAll('[data-drawer][data-drawer-open-on-load="true"]').forEach(function (drawer) {
      if (drawer.dataset.drawerOpenOnLoadDone === 'true') {
        return;
      }

      drawer.dataset.drawerOpenOnLoadDone = 'true';
      openDrawer(drawer, null);
    });
  }

  document.addEventListener('click', function (event) {
    var drawerTrigger = event.target.closest('[data-drawer-trigger]');

    if (drawerTrigger) {
      var drawerSelector = resolveDrawerSelector(drawerTrigger);
      var drawer = drawerSelector ? document.querySelector(drawerSelector) : null;

      if (drawer) {
        if (drawer.classList.contains('is-open')) {
          closeDrawer(drawer);
        } else {
          openDrawer(drawer, drawerTrigger);
        }
      }

      return;
    }

    var drawerCloseEl = event.target.closest('[data-drawer-close]');

    if (drawerCloseEl) {
      var drawerRoot = drawerCloseEl.closest('[data-drawer]');

      if (drawerRoot) {
        closeDrawer(drawerRoot);
      }
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && openDrawerStack.length) {
      closeDrawer(openDrawerStack[openDrawerStack.length - 1]);
    }
  });

  // Vue mount·라우트 전환 후에도 open-on-load 대상이 잡히도록 관찰
  initDrawerOpenOnLoad();

  if (typeof MutationObserver !== 'undefined') {
    var drawerOpenOnLoadObserver = new MutationObserver(function () {
      initDrawerOpenOnLoad();
    });

    drawerOpenOnLoadObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  var openModalStack = [];

  function updateModalStack() {
    openModalStack.forEach(function (modal, index) {
      modal.style.setProperty('--modal-stack-level', String(index));
      modal.classList.toggle('is-stack-covered', index < openModalStack.length - 1);
    });
  }

  function getModalTriggers(modal) {
    if (!modal.id) {
      return [];
    }

    return Array.prototype.slice.call(
      document.querySelectorAll('[data-modal-trigger][aria-controls="' + modal.id + '"]')
    );
  }

  function setModalTriggersExpanded(modal, expanded) {
    getModalTriggers(modal).forEach(function (trigger) {
      trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  function updateBodyModalLock() {
    var hasOpen = document.querySelector('[data-modal].is-open:not([data-modal-backdrop="false"])');

    document.body.classList.toggle('is-modal-open', Boolean(hasOpen));
  }

  function openModal(modal, trigger) {
    if (!modal || modal.classList.contains('is-open')) {
      return;
    }

    modal.hidden = false;
    modal.classList.add('is-open');
    setModalTriggersExpanded(modal, true);

    if (trigger) {
      modal._modalReturnFocus = trigger;
    }

    openModalStack.push(modal);
    updateModalStack();
    updateBodyModalLock();

    requestAnimationFrame(function () {
      var closeBtn = modal.querySelector('.modal_close');

      if (closeBtn) {
        closeBtn.focus();
      } else {
        modal.focus();
      }
    });
  }

  function closeModal(modal) {
    if (!modal || !modal.classList.contains('is-open')) {
      return;
    }

    modal.classList.remove('is-open');
    modal.hidden = true;
    setModalTriggersExpanded(modal, false);

    openModalStack = openModalStack.filter(function (item) {
      return item !== modal;
    });

    modal.classList.remove('is-stack-covered');
    modal.style.removeProperty('--modal-stack-level');
    updateModalStack();

    updateBodyModalLock();

    if (modal._modalReturnFocus) {
      modal._modalReturnFocus.focus();
      modal._modalReturnFocus = null;
    }
  }

  function resolveModalSelector(trigger) {
    return trigger.getAttribute('data-modal-trigger') || ('#' + trigger.getAttribute('aria-controls'));
  }

  document.addEventListener('click', function (event) {
    var modalTrigger = event.target.closest('[data-modal-trigger]');

    if (modalTrigger) {
      var modalSelector = resolveModalSelector(modalTrigger);
      var modal = modalSelector ? document.querySelector(modalSelector) : null;

      if (modal) {
        if (modal.classList.contains('is-open')) {
          closeModal(modal);
        } else {
          openModal(modal, modalTrigger);
        }
      }

      return;
    }

    var modalCloseEl = event.target.closest('[data-modal-close]');

    if (modalCloseEl) {
      var modalRoot = modalCloseEl.closest('[data-modal]');

      if (modalRoot) {
        closeModal(modalRoot);
      }
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && openModalStack.length) {
      closeModal(openModalStack[openModalStack.length - 1]);
    }
  });
})();

/**
 * Alert 닫기 — 데모용
 */
(function () {
  document.addEventListener('click', function (event) {
    var closeBtn = event.target.closest('.alert_close');

    if (!closeBtn) {
      return;
    }

    var alert = closeBtn.closest('.alert');

    if (alert) {
      alert.hidden = true;
    }
  });
})();

/**
 * 분할·OTP 입력 — 포커스 자동 이동 (데모용)
 */
(function () {
  function stripNonDigits(value) {
    return value.replace(/\D/g, '');
  }

  function initSegmentedInputs(container) {
    var inputs = container.querySelectorAll('input');
    var numericOnly = container.hasAttribute('data-input-numeric');

    inputs.forEach(function (input, index) {
      input.addEventListener('input', function () {
        if (numericOnly) {
          var digits = stripNonDigits(input.value);

          if (digits !== input.value) {
            input.value = digits;
          }
        }

        var maxLength = input.maxLength;

        if (maxLength > 0 && input.value.length >= maxLength && index < inputs.length - 1) {
          inputs[index + 1].focus();
          inputs[index + 1].select();
        }
      });

      input.addEventListener('keydown', function (event) {
        if (event.key === 'Backspace' && !input.value && index > 0) {
          inputs[index - 1].focus();
        }
      });

      input.addEventListener('paste', function (event) {
        var pasted = (event.clipboardData || window.clipboardData).getData('text');

        if (!pasted) {
          return;
        }

        if (numericOnly) {
          pasted = stripNonDigits(pasted);
        }

        if (!pasted) {
          return;
        }

        event.preventDefault();

        var cursor = index;

        pasted.split('').forEach(function (char) {
          if (cursor >= inputs.length) {
            return;
          }

          var target = inputs[cursor];
          var limit = target.maxLength > 0 ? target.maxLength : 1;
          var nextValue = (target.value + char).slice(0, limit);

          target.value = nextValue;

          if (nextValue.length >= limit) {
            cursor += 1;
          }
        });

        if (cursor < inputs.length) {
          inputs[cursor].focus();
          inputs[cursor].select();
        } else {
          inputs[inputs.length - 1].focus();
        }
      });
    });
  }

  function initOtpInputs(container) {
    var inputs = container.querySelectorAll('input');

    inputs.forEach(function (input, index) {
      input.addEventListener('input', function () {
        var digit = stripNonDigits(input.value).slice(-1);

        input.value = digit;

        if (digit && index < inputs.length - 1) {
          inputs[index + 1].focus();
          inputs[index + 1].select();
        }
      });

      input.addEventListener('keydown', function (event) {
        if (event.key === 'Backspace' && !input.value && index > 0) {
          inputs[index - 1].focus();
          return;
        }

        if (event.key === 'ArrowLeft' && index > 0) {
          inputs[index - 1].focus();
        }

        if (event.key === 'ArrowRight' && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('paste', function (event) {
        var pasted = stripNonDigits((event.clipboardData || window.clipboardData).getData('text'));

        if (!pasted) {
          return;
        }

        event.preventDefault();

        pasted.split('').forEach(function (char, offset) {
          var target = inputs[index + offset];

          if (target) {
            target.value = char;
          }
        });

        var nextIndex = Math.min(index + pasted.length, inputs.length - 1);

        inputs[nextIndex].focus();
        inputs[nextIndex].select();
      });
    });
  }

  document.querySelectorAll('[data-input-split]').forEach(initSegmentedInputs);
  document.querySelectorAll('[data-input-otp]').forEach(initOtpInputs);
})();

/**
 * Textarea 글자 수 카운터 — 데모용
 */
(function () {
  function formatTextareaCountVisual(current, max) {
    if (max > 0) {
      return current + '/' + max;
    }

    return String(current);
  }

  function formatTextareaCountAnnounce(current, max) {
    if (max > 0) {
      var message = current + '자 입력, 최대 ' + max + '자';

      if (current >= max) {
        message += ', 글자 수 제한에 도달했습니다';
      }

      return message;
    }

    return current + '자 입력';
  }

  function updateTextareaCount(wrap) {
    var textarea = wrap.querySelector('.textarea');
    var counter = wrap.querySelector('.textarea_count');
    var visual = counter ? counter.querySelector('.textarea_count_visual') : null;
    var announcer = counter ? counter.querySelector('.textarea_count_announcer') : null;

    if (!textarea || !counter) {
      return;
    }

    var current = textarea.value.length;
    var max = textarea.maxLength;
    var display = formatTextareaCountVisual(current, max);
    var announce = formatTextareaCountAnnounce(current, max);

    if (visual) {
      visual.textContent = display;
    } else {
      counter.textContent = display;
    }

    if (announcer) {
      announcer.textContent = announce;
    }

    counter.classList.toggle('is-limit', max > 0 && current >= max);
  }

  function initTextareaCount(wrap) {
    var textarea = wrap.querySelector('.textarea');

    if (!textarea) {
      return;
    }

    updateTextareaCount(wrap);
    textarea.addEventListener('input', function () {
      updateTextareaCount(wrap);
    });
  }

  document.querySelectorAll('.textarea_show-count').forEach(initTextareaCount);
})();

/**
 * Input 입력 삭제 — input_clearable 래퍼 (데모용)
 */
(function () {
  function canShowClear(input) {
    return !input.disabled && !input.readOnly;
  }

  function updateInputClear(wrap) {
    var input = wrap.querySelector('.input');
    var clearBtn = wrap.querySelector('.input_clear');

    if (!input || !clearBtn) {
      return;
    }

    var show = canShowClear(input) && input.value.length > 0;

    clearBtn.hidden = !show;
    wrap.classList.toggle('is-filled', show);
  }

  function initInputClear(wrap) {
    var input = wrap.querySelector('.input');
    var clearBtn = wrap.querySelector('.input_clear');

    if (!input || !clearBtn) {
      return;
    }

    updateInputClear(wrap);

    input.addEventListener('input', function () {
      updateInputClear(wrap);
    });

    clearBtn.addEventListener('click', function () {
      if (!canShowClear(input)) {
        return;
      }

      input.value = '';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      updateInputClear(wrap);
      input.focus();
    });
  }

  document.querySelectorAll('.input_clearable').forEach(initInputClear);
})();

/**
 * Checkbox · Radio 카드 전체 클릭 — clickable 카드 (데모용)
 * label은 phrasing content만 허용하므로 div + 클릭 위임으로 처리
 */
(function () {
  function initClickableCard(card) {
    var input = card.querySelector('.checkbox_input, .radio_input');

    if (!input) {
      return;
    }

    card.addEventListener('click', function (event) {
      if (input.disabled) {
        return;
      }

      if (event.target.closest('.checkbox_control, .radio_control')) {
        return;
      }

      if (input.type === 'checkbox') {
        input.checked = !input.checked;
      } else {
        input.checked = true;
      }

      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  document.querySelectorAll('.checkbox_card-clickable, .radio_card-clickable').forEach(initClickableCard);
})();

/**
 * span.checkbox_control · span.radio_control — 클릭을 input에 전달 (명시 label 분리 시)
 */
(function () {
  document.querySelectorAll('span.checkbox_control, span.radio_control').forEach(function (control) {
    control.addEventListener('click', function (event) {
      var input = control.querySelector('.checkbox_input, .radio_input');

      if (!input || input.disabled || event.target === input) {
        return;
      }

      if (input.type === 'checkbox') {
        input.checked = !input.checked;
      } else {
        input.checked = true;
      }

      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
})();
