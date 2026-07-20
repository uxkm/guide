import '../../../packages/ui/src/scss/main.scss';
import './docs-overrides.scss';
import { onMounted, onUpdated, ref } from 'vue';
import { initClickableCard } from '../../../packages/ui/src/utils/clickable-card';
import { initRipple } from '../../../packages/ui/src/utils/ripple';
import { initInputClearAll } from '../../../packages/ui/src/legacy/input-clear-init';
import { initTextareaCountAll } from '../../../packages/ui/src/legacy/textarea-count-init';
import { initOverlays } from '../../../packages/ui/src/legacy/overlay-init';
import '../../../packages/ui/src/legacy/demo.js';
import { GuideDocsPage } from './GuideDocsPage';

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
initClickableCard();
initRipple();

const SPACE_TOKENS = new Set(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']);

function toSpaceCSSValue(value) {
  if (!value) return undefined;
  if (value.startsWith('var(') || value.includes('(')) return value;
  return SPACE_TOKENS.has(value) ? `var(--space-${value})` : value;
}

function buildDemoPreviewStyle(demoPreview = {}) {
  const style = {};
  const gap = toSpaceCSSValue(demoPreview.gap);
  const stackGap = toSpaceCSSValue(demoPreview.stackGap);
  const paddingBlock = toSpaceCSSValue(demoPreview.paddingBlock);
  const paddingInline = toSpaceCSSValue(demoPreview.paddingInline);

  if (gap) {
    style['--demo-gap-x'] = gap;
    style['--demo-gap-y'] = gap;
  }
  if (stackGap) style['--demo-gap-stack'] = stackGap;
  if (paddingBlock) style['--demo-padding-block'] = paddingBlock;
  if (paddingInline) style['--demo-padding-inline'] = paddingInline;

  return style;
}

/** 가이드 DemoSection과 동일한 예시 간격 — 템플릿/소스에는 래퍼 없이 런타임만 적용 */
function demoPreviewDecorator(story, context) {
  const demoPreview = context.parameters?.demoPreview;
  if (!demoPreview) return story();

  const stackClass = demoPreview.stack ? ' sb-demo-layout_stack' : '';
  const style = buildDemoPreviewStyle(demoPreview);
  return {
    components: { story },
    setup() {
      return { style };
    },
    template: `<div class="sb-demo-layout${stackClass}" :style="style"><story /></div>`,
  };
}

/** input_clearable 래퍼 — Vue 마운트 후 클리어 버튼 표시/동작 초기화 */
function inputClearDecorator(story) {
  return {
    components: { story },
    setup() {
      const rootRef = ref(null);
      const init = () => initInputClearAll(rootRef.value);
      onMounted(init);
      onUpdated(init);
      return { rootRef };
    },
    template: '<div ref="rootRef" class="sb-demo-pass-through"><story /></div>',
  };
}

/** textarea_show-count 래퍼 — Vue 마운트 후 글자 수 카운터 초기화 */
function textareaCountDecorator(story) {
  return {
    components: { story },
    setup() {
      const rootRef = ref(null);
      const init = () => initTextareaCountAll(rootRef.value);
      onMounted(init);
      onUpdated(init);
      return { rootRef };
    },
    template: '<div ref="rootRef" class="sb-demo-pass-through"><story /></div>',
  };
}

/** Popover · Dropdown · Tooltip — Vue 마운트 후 overlay JS 초기화 */
function overlayDecorator(story) {
  return {
    components: { story },
    setup() {
      const rootRef = ref(null);
      const init = () => {
        if (rootRef.value) initOverlays(rootRef.value);
      };
      onMounted(init);
      onUpdated(init);
      return { rootRef };
    },
    template: '<div ref="rootRef" class="sb-demo-pass-through"><story /></div>',
  };
}

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  decorators: [overlayDecorator, textareaCountDecorator, inputClearDecorator, demoPreviewDecorator],
  parameters: {
    actions: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
    docs: {
      page: GuideDocsPage,
      canvas: {
        withToolbar: true,
      },
      controls: {
        expanded: true,
      },
      source: {
        type: 'code',
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
};

export default preview;
