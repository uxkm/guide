import React, { useEffect, useRef } from 'react';
import type { Decorator, Preview } from '@storybook/react-vite';
import '../../../packages/ui/src/scss/main.scss';
import './docs-overrides.scss';
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

function toSpaceCSSValue(value: string | undefined) {
  if (!value) return undefined;
  if (value.startsWith('var(') || value.includes('(')) return value;
  return SPACE_TOKENS.has(value) ? `var(--space-${value})` : value;
}

function buildDemoPreviewStyle(demoPreview: Record<string, string> = {}) {
  const style: Record<string, string> = {};
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

function useDomInit(initFn: (root: HTMLElement | null) => void) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initFn(rootRef.current);
  });

  return rootRef;
}

const demoPreviewDecorator: Decorator = (Story, context) => {
  const demoPreview = context.parameters?.demoPreview;
  if (!demoPreview) return <Story />;

  const stackClass = demoPreview.stack ? ' sb-demo-layout_stack' : '';
  const style = buildDemoPreviewStyle(demoPreview);

  return (
    <div className={`sb-demo-layout${stackClass}`} style={style}>
      <Story />
    </div>
  );
};

const inputClearDecorator: Decorator = (Story) => {
  const rootRef = useDomInit(initInputClearAll);
  return (
    <div ref={rootRef} className="sb-demo-pass-through">
      <Story />
    </div>
  );
};

const textareaCountDecorator: Decorator = (Story) => {
  const rootRef = useDomInit(initTextareaCountAll);
  return (
    <div ref={rootRef} className="sb-demo-pass-through">
      <Story />
    </div>
  );
};

const overlayDecorator: Decorator = (Story) => {
  const rootRef = useDomInit((root) => {
    if (root) initOverlays(root);
  });
  return (
    <div ref={rootRef} className="sb-demo-pass-through">
      <Story />
    </div>
  );
};

const preview: Preview = {
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
