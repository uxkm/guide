import html from '../../src/components/flex.html?raw';
import {
  extractDemoSections,
  extractApiSections,
  renderDemo,
  gulpSource,
} from '../lib/gulp-demos.js';

const demos = extractDemoSections(html);
const apis = extractApiSections(html);

/** @type { import('@storybook/html-vite').Meta } */
export default {
  title: 'Components/레이아웃/Flex',
  id: 'components-flex',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'CSS Flexbox 기반의 1차원 레이아웃 시스템입니다. Grid와 같은 방식으로 균등 배치·비율·간격·반응형 크기를 제어합니다.',
      },
    },
  },
};

function demoStory(index) {
  return {
    render: () => renderDemo(demos[index]),
    parameters: {
      docs: {
        ...gulpSource(demos[index].previewHtml).docs,
        description: { story: demos[index].description },
      },
    },
  };
}

export const Demo0 = { name: '기본 페이지 레이아웃', ...demoStory(0) };
export const Demo1 = { name: '콘텐츠가 있는 페이지 레이아웃', ...demoStory(1) };
export const Demo2 = { name: '부모 클래스로 제어', ...demoStory(2) };
export const Demo3 = { name: '12열 전체 활용', ...demoStory(3) };
export const Demo4 = { name: '균등 항목', ...demoStory(4) };
export const Demo5 = { name: '비율 항목', ...demoStory(5) };
export const Demo6 = { name: '자식 일괄 span (12단위)', ...demoStory(6) };
export const Demo7 = { name: '자식별 span (혼합 레이아웃)', ...demoStory(7) };
export const Demo8 = { name: '간격', ...demoStory(8) };
export const Demo9 = { name: '반응형', ...demoStory(9) };
export const Demo10 = { name: '자동 배치', ...demoStory(10) };

export const ApiClasses = {
  name: '클래스 · 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[0]),
  parameters: {
    docs: {
      source: { code: null },
      description: {
        story: 'HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스입니다.',
      },
    },
  },
};

export const ApiTokens = {
  name: '디자인 토큰',
  tags: ['!dev'],
  render: () => renderDemo(apis[1]),
  parameters: {
    docs: {
      source: { code: null },
      description: {
        story: 'Flex 간격·자동 배치에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
