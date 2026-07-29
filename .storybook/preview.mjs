import '../src/scss/main.scss';
import './docs-overrides.scss';
import '../src/js/ripple.js';
import { initDrawerRuntime } from '../stories/lib/drawer-runtime.js';
import { initModalRuntime } from '../stories/lib/modal-runtime.js';
import { initAlertRuntime } from '../stories/lib/alert-runtime.js';
import { initPopovers } from '../stories/lib/popover-runtime.js';
import { initTooltips } from '../stories/lib/tooltip-runtime.js';
import { initDropdowns } from '../stories/lib/dropdown-runtime.js';
import { initMenus } from '../stories/lib/menu-runtime.js';
import { initNavbars } from '../stories/lib/navbar-runtime.js';
import { initTabs } from '../stories/lib/tabs-runtime.js';
import { initAccordions } from '../stories/lib/accordion-runtime.js';
import { initAffixes } from '../stories/lib/affix-runtime.js';
import { initBackTops } from '../stories/lib/back-top-runtime.js';
import { initCollapses } from '../stories/lib/collapse-runtime.js';
import { initCarousels } from '../stories/lib/carousel-runtime.js';
import { initInputClears } from '../stories/lib/input-clear-runtime.js';
import { initRates } from '../stories/lib/rate-runtime.js';
import { initTrees } from '../stories/lib/tree-runtime.js';

initDrawerRuntime();
initModalRuntime();
initAlertRuntime();

/**
 * Checkbox · Radio 카드 전체 클릭 + span.checkbox_control 클릭 위임
 * (src/js/demo.js의 해당 로직을 Storybook에서도 동작하도록 재현)
 */
function initFormControls(root) {
  // 카드 전체 클릭 위임
  root.querySelectorAll('.checkbox_card-clickable, .radio_card-clickable').forEach((card) => {
    if (card._sbClickInit) return;
    card._sbClickInit = true;

    const input = card.querySelector('.checkbox_input, .radio_input');
    if (!input) return;

    card.addEventListener('click', (event) => {
      if (input.disabled) return;
      if (event.target.closest('.checkbox_control, .radio_control')) return;

      input.checked = input.type === 'checkbox' ? !input.checked : true;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });

  // span.checkbox_control · span.radio_control 클릭 위임
  root.querySelectorAll('span.checkbox_control, span.radio_control').forEach((control) => {
    if (control._sbClickInit) return;
    control._sbClickInit = true;

    control.addEventListener('click', (event) => {
      const input = control.querySelector('.checkbox_input, .radio_input');
      if (!input || input.disabled || event.target === input) return;

      input.checked = input.type === 'checkbox' ? !input.checked : true;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
}

/**
 * Slider — 진행률 · output 갱신 · stepper ± 버튼
 * (src/js/demo.js 슬라이더 로직을 Storybook에서도 동작하도록 재현)
 */
function initSliders(root) {
  const getStep = (input) => {
    const step = parseFloat(input.step);
    return Number.isNaN(step) || step <= 0 ? 1 : step;
  };

  const snapValue = (value, min, max, step) => {
    const steps = Math.round((value - min) / step);
    let snapped = Math.min(max, Math.max(min, min + steps * step));
    const precision = (String(step).split('.')[1] || '').length;
    return Number(snapped.toFixed(precision));
  };

  const formatValue = (input, value) => {
    const prefix = input.getAttribute('data-slider-prefix') || '';
    const suffix = input.getAttribute('data-slider-suffix') || '';
    let formatted = value;
    if (input.getAttribute('data-slider-format') === 'number') {
      formatted = Number(value).toLocaleString('ko-KR');
    }
    return prefix + formatted + suffix;
  };

  const getValueText = (input, value) => {
    const valueMap = input.getAttribute('data-slider-valuetext-map');
    if (valueMap) {
      let mapped = null;
      valueMap.split(',').forEach((pair) => {
        const parts = pair.split(':');
        if (parts.length === 2 && parts[0].trim() === String(value)) {
          mapped = parts.slice(1).join(':').trim();
        }
      });
      if (mapped) return mapped;
    }

    const template = input.getAttribute('data-slider-valuetext-template');
    if (template) {
      return template.replace(/\{\{value\}\}/g, formatValue(input, value));
    }
    if (input.hasAttribute('data-slider-valuetext-suffix')) {
      return String(value) + input.getAttribute('data-slider-valuetext-suffix');
    }
    if (
      input.getAttribute('data-slider-suffix') ||
      input.getAttribute('data-slider-prefix') ||
      input.getAttribute('data-slider-format')
    ) {
      return formatValue(input, value);
    }
    return String(value);
  };

  const updateStepButtons = (input) => {
    const slider = input.closest('.slider');
    if (!slider || !slider.classList.contains('slider_stepper')) return;

    let min = parseFloat(input.min);
    let max = parseFloat(input.max);
    let value = parseFloat(input.value);
    if (Number.isNaN(min)) min = 0;
    if (Number.isNaN(max)) max = 100;
    if (Number.isNaN(value)) value = min;

    const decrease = slider.querySelector('.slider_step-decrease');
    const increase = slider.querySelector('.slider_step-increase');
    const isDisabled = input.disabled;

    if (decrease) decrease.disabled = isDisabled || value <= min;
    if (increase) increase.disabled = isDisabled || value >= max;
  };

  const updateSlider = (input) => {
    let min = parseFloat(input.min);
    let max = parseFloat(input.max);
    let value = parseFloat(input.value);
    if (Number.isNaN(min)) min = 0;
    if (Number.isNaN(max)) max = 100;
    if (Number.isNaN(value)) value = min;

    const range = max - min;
    const percent = range === 0 ? 0 : ((value - min) / range) * 100;
    const displayValue = formatValue(input, value);
    const spokenValue = getValueText(input, value);

    input.style.setProperty('--slider-progress', `${percent}%`);
    input.setAttribute('aria-valuetext', spokenValue);

    if (input.id) {
      const output = root.querySelector(`output.slider_value[for="${input.id}"]`);
      if (output) {
        output.textContent = input.hasAttribute('data-slider-valuetext-map')
          ? spokenValue
          : displayValue;
      }
    }

    updateStepButtons(input);
  };

  const stepSlider = (input, direction) => {
    if (input.disabled) return;

    let min = parseFloat(input.min);
    let max = parseFloat(input.max);
    let value = parseFloat(input.value);
    const step = getStep(input);
    if (Number.isNaN(min)) min = 0;
    if (Number.isNaN(max)) max = 100;
    if (Number.isNaN(value)) value = min;

    const next = snapValue(value + direction * step, min, max, step);
    if (next === value) return;

    input.value = String(next);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  };

  root.querySelectorAll('.slider_input').forEach((input) => {
    if (input._sbSliderInit) {
      updateSlider(input);
      return;
    }
    input._sbSliderInit = true;
    updateSlider(input);
    input.addEventListener('input', () => updateSlider(input));
  });

  root.querySelectorAll('.slider_stepper').forEach((slider) => {
    if (slider._sbStepperInit) return;
    slider._sbStepperInit = true;

    const input = slider.querySelector('.slider_input');
    if (!input) return;

    const decrease = slider.querySelector('.slider_step-decrease');
    const increase = slider.querySelector('.slider_step-increase');

    if (decrease) {
      if (input.id) decrease.setAttribute('aria-controls', input.id);
      decrease.addEventListener('click', () => stepSlider(input, -1));
    }
    if (increase) {
      if (input.id) increase.setAttribute('aria-controls', input.id);
      increase.addEventListener('click', () => stepSlider(input, 1));
    }
  });
}

/**
 * Textarea — 글자 수 카운터
 * (src/js/demo.js textarea_show-count 로직을 Storybook에서도 동작하도록 재현)
 */
function initTextareaCounts(root) {
  const formatVisual = (current, max) => (max > 0 ? `${current}/${max}` : String(current));

  const formatAnnounce = (current, max) => {
    if (max > 0) {
      let message = `${current}자 입력, 최대 ${max}자`;
      if (current >= max) message += ', 글자 수 제한에 도달했습니다';
      return message;
    }
    return `${current}자 입력`;
  };

  const updateCount = (wrap) => {
    const textarea = wrap.querySelector('.textarea');
    const counter = wrap.querySelector('.textarea_count');
    if (!textarea || !counter) return;

    const visual = counter.querySelector('.textarea_count_visual');
    const announcer = counter.querySelector('.textarea_count_announcer');
    const current = textarea.value.length;
    const max = textarea.maxLength;
    const display = formatVisual(current, max);
    const announce = formatAnnounce(current, max);

    if (visual) visual.textContent = display;
    else counter.textContent = display;

    if (announcer) announcer.textContent = announce;
    counter.classList.toggle('is-limit', max > 0 && current >= max);
  };

  root.querySelectorAll('.textarea_show-count').forEach((wrap) => {
    if (wrap._sbTextareaCountInit) {
      updateCount(wrap);
      return;
    }
    wrap._sbTextareaCountInit = true;

    const textarea = wrap.querySelector('.textarea');
    if (!textarea) return;

    updateCount(wrap);
    textarea.addEventListener('input', () => updateCount(wrap));
  });
}

function initGuideTheme() {
  try {
    const stored = localStorage.getItem('storybook-theme');
    const theme = stored === 'light' || stored === 'dark' ? stored : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

initGuideTheme();

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          '소개',
          '설치 및 사용',
          '디자인 토큰',
          'Components',
          ['레이아웃', '기본 요소', '데이터 표시', '폼', '피드백', '네비게이션', '기타'],
          '*',
        ],
      },
    },
  },
  decorators: [
    (story) => {
      const el = story();
      requestAnimationFrame(() => {
        if (typeof window.markAutoRippleTargets === 'function') {
          window.markAutoRippleTargets(document);
        }
        initFormControls(document);
        initSliders(document);
        initTextareaCounts(document);
        initInputClears(document);
        initRates(document);
        initTrees(document);
        initPopovers(document);
        initTooltips(document);
        initDropdowns(document);
        initMenus(document);
        initNavbars(document);
        initTabs(document);
        initAccordions(document);
        initAffixes(document);
        initBackTops(document);
        initCollapses(document);
        initCarousels(document);
      });
      return el;
    },
  ],
};

export default preview;
