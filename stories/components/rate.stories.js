import html from '../../src/components/rate.html?raw';
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
  title: 'Components/폼/Rate',
  id: 'components-rate',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '별점·만족도를 선택하는 Rate 컴포넌트입니다. fieldset과 input type="radio"로 폼 값을 전달하며, rate_allow-half로 반별, rate_clearable로 선택 해제를 지원합니다.',
      },
    },
  },
};

export const Demo0 = {
  name: '유형',
  render: () => renderDemo(demos[0]),
  parameters: { docs: { ...gulpSource(demos[0].previewHtml).docs, description: { story: demos[0].description } } },
};
export const Demo1 = {
  name: '기본',
  render: () => renderDemo(demos[1]),
  parameters: { docs: { ...gulpSource(demos[1].previewHtml).docs, description: { story: demos[1].description } } },
};
export const Demo2 = {
  name: '크기',
  render: () => renderDemo(demos[2]),
  parameters: { docs: { ...gulpSource(demos[2].previewHtml).docs, description: { story: demos[2].description } } },
};
export const Demo3 = {
  name: '색상',
  render: () => renderDemo(demos[3]),
  parameters: { docs: { ...gulpSource(demos[3].previewHtml).docs, description: { story: demos[3].description } } },
};
export const Demo4 = {
  name: '반별',
  render: () => renderDemo(demos[4]),
  parameters: { docs: { ...gulpSource(demos[4].previewHtml).docs, description: { story: demos[4].description } } },
};
export const Demo5 = {
  name: '선택 해제',
  render: () => renderDemo(demos[5]),
  parameters: { docs: { ...gulpSource(demos[5].previewHtml).docs, description: { story: demos[5].description } } },
};
export const Demo6 = {
  name: '읽기 전용',
  render: () => renderDemo(demos[6]),
  parameters: { docs: { ...gulpSource(demos[6].previewHtml).docs, description: { story: demos[6].description } } },
};
export const Demo7 = {
  name: '상태',
  render: () => renderDemo(demos[7]),
  parameters: { docs: { ...gulpSource(demos[7].previewHtml).docs, description: { story: demos[7].description } } },
};
export const Demo8 = {
  name: '폼 레이아웃',
  render: () => renderDemo(demos[8]),
  parameters: { docs: { ...gulpSource(demos[8].previewHtml).docs, description: { story: demos[8].description } } },
};

export const ApiClasses = {
  name: '클래스 · 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[0]),
  parameters: {
    docs: {
      source: { code: null },
      description: {
        story: 'HTML 마크업으로 직접 작성할 때 사용하는 OOCSS 클래스·속성입니다.',
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
        story: 'Rate 별 크기·간격·초기화 버튼에 사용하는 CSS 변수입니다.',
      },
    },
  },
};
