/**
 * 컴포넌트 데모 코드 블록 펼침/접힘 · 휠 피커
 */
import { initBackTopAll } from './back-top-init';
import { initOverlays } from './overlay-init';

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

      event.preventDefault();

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

  function isTabDisabled(tab) {
    return tab.disabled || tab.classList.contains('is-disabled') || tab.getAttribute('aria-disabled') === 'true';
  }

  function getTabsFromList(tablist) {
    return Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
  }

  function activateTab(tabs, panels, tab) {
    if (isTabDisabled(tab)) {
      return;
    }

    var panelId = tab.getAttribute('aria-controls');

    tabs.forEach(function (item) {
      var isActive = item === tab;

      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', String(isActive));
      item.setAttribute('tabindex', isActive ? '0' : '-1');
    });

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

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activateTab(tabs, panels, tab);
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
          activateTab(tabs, panels, nextTab);
        }
      });
    });
  }

  document.querySelectorAll('[data-tabs]').forEach(initTabs);

  function isAccordionItemDisabled(item) {
    var trigger = item.querySelector('.accordion_trigger');

    return item.classList.contains('is-disabled') || (trigger && trigger.disabled);
  }

  function getAccordionTriggers(root) {
    return Array.prototype.slice.call(root.querySelectorAll('.accordion_trigger')).filter(function (trigger) {
      var item = trigger.closest('.accordion_item');

      return item && !isAccordionItemDisabled(item);
    });
  }

  function setAccordionItemOpen(item, open) {
    var trigger = item.querySelector('.accordion_trigger');
    var panelId = trigger ? trigger.getAttribute('aria-controls') : null;
    var panel = panelId ? document.getElementById(panelId) : item.querySelector('.accordion_panel');

    item.classList.toggle('is-open', open);

    if (trigger) {
      trigger.setAttribute('aria-expanded', String(open));
    }

    if (panel) {
      if (open) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    }
  }

  function initAccordion(root) {
    var multiple = root.hasAttribute('data-accordion-multiple');
    var items = Array.prototype.slice.call(root.querySelectorAll('.accordion_item'));

    items.forEach(function (item) {
      var trigger = item.querySelector('.accordion_trigger');

      if (!trigger) {
        return;
      }

      var panelId = trigger.getAttribute('aria-controls');
      var panel = panelId ? document.getElementById(panelId) : item.querySelector('.accordion_panel');

      if (!panel) {
        return;
      }

      setAccordionItemOpen(item, trigger.getAttribute('aria-expanded') === 'true');

      trigger.addEventListener('click', function () {
        if (isAccordionItemDisabled(item)) {
          return;
        }

        var isOpen = trigger.getAttribute('aria-expanded') === 'true';

        if (!multiple && !isOpen) {
          items.forEach(function (other) {
            if (other !== item && !isAccordionItemDisabled(other)) {
              setAccordionItemOpen(other, false);
            }
          });
        }

        setAccordionItemOpen(item, !isOpen);
      });

      trigger.addEventListener('keydown', function (event) {
        var triggers = getAccordionTriggers(root);
        var index = triggers.indexOf(trigger);
        var nextTrigger = null;

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

    return panel.classList.contains('is-disabled') || (trigger && trigger.disabled);
  }

  function setCollapseRegionOpen(region, open) {
    region.classList.toggle('is-open', open);

    if (open) {
      region.removeAttribute('hidden');
    } else {
      region.setAttribute('hidden', '');
    }
  }

  function setCollapsePanelOpen(panel, open) {
    var trigger = panel.querySelector('.collapse_trigger');
    var bodyId = trigger ? trigger.getAttribute('aria-controls') : null;
    var body = bodyId ? document.getElementById(bodyId) : panel.querySelector('.collapse_body');

    panel.classList.toggle('is-open', open);

    if (trigger) {
      trigger.setAttribute('aria-expanded', String(open));
    }

    if (body) {
      setCollapseRegionOpen(body, open);
    }
  }

  function initCollapseGroup(root) {
    var accordion = root.hasAttribute('data-collapse-accordion');
    var panels = Array.prototype.slice.call(root.querySelectorAll('.collapse_panel'));

    panels.forEach(function (panel) {
      var trigger = panel.querySelector('.collapse_trigger');

      if (!trigger) {
        return;
      }

      var bodyId = trigger.getAttribute('aria-controls');
      var body = bodyId ? document.getElementById(bodyId) : panel.querySelector('.collapse_body');

      if (!body) {
        return;
      }

      var isOpen = panel.classList.contains('is-open') || trigger.getAttribute('aria-expanded') === 'true';

      setCollapsePanelOpen(panel, isOpen);

      trigger.addEventListener('click', function () {
        if (isCollapsePanelDisabled(panel)) {
          return;
        }

        var currentlyOpen = trigger.getAttribute('aria-expanded') === 'true';

        if (accordion && !currentlyOpen) {
          panels.forEach(function (other) {
            if (other !== panel && !isCollapsePanelDisabled(other)) {
              setCollapsePanelOpen(other, false);
            }
          });
        }

        setCollapsePanelOpen(panel, !currentlyOpen);
      });
    });
  }

  function initCollapseTrigger(btn) {
    var targetId = btn.getAttribute('aria-controls');
    var target = targetId ? document.getElementById(targetId) : null;

    if (!target || !target.classList.contains('collapse')) {
      return;
    }

    setCollapseRegionOpen(target, btn.getAttribute('aria-expanded') === 'true');

    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      var nextOpen = !open;

      btn.setAttribute('aria-expanded', String(nextOpen));
      setCollapseRegionOpen(target, nextOpen);
    });
  }

  document.querySelectorAll('[data-collapse]').forEach(initCollapseGroup);
  document.querySelectorAll('[data-collapse-trigger]').forEach(initCollapseTrigger);

  initOverlays(document);

  initBackTopAll(document);

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
    });
  }

  function updateBodyDrawerLock() {
    var hasOpen = document.querySelector('[data-drawer].is-open:not([data-drawer-backdrop="false"])');

    document.body.classList.toggle('is-drawer-open', Boolean(hasOpen));
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

    drawer.classList.remove('is-closing');
    drawer.hidden = false;
    drawer.classList.add('is-opening');

    if (trigger) {
      drawer._drawerReturnFocus = trigger;
    }

    openDrawerStack.push(drawer);
    updateDrawerStackLevels();
    updateBodyDrawerLock();

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

    drawer.classList.remove('is-open');
    drawer.classList.add('is-closing');

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

  function initDrawerOpenOnLoad() {
    document.querySelectorAll('[data-drawer][data-drawer-open-on-load="true"]').forEach(function (drawer) {
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

  initDrawerOpenOnLoad();

  var openModalStack = [];

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

