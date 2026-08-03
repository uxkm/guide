import html from '../../src/components/snackbar.html?raw';
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
  title: 'Components/피드백/Snackbar',
  id: 'components-snackbar',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '작업 결과나 짧은 상태 변화를 화면 흐름을 방해하지 않고 일시적으로 전달합니다.',
      },
    },
  },
};

const demoNames = [
  '기본',
  '상태와 아이콘',
  '간단한 메시지',
  '형태',
  '호출 · 닫기 효과',
  '크기',
  '액션과 닫기',
  '표시와 위치',
  '여러 알림',
  '사용된 아이콘',
  '접근성',
];

export const Demo0 = {
  name: demoNames[0],
  render: () => renderDemo(demos[0]),
  parameters: { docs: { ...gulpSource(demos[0].previewHtml).docs, description: { story: demos[0].description } } },
};
export const Demo1 = {
  name: demoNames[1],
  render: () => renderDemo(demos[1]),
  parameters: { docs: { ...gulpSource(demos[1].previewHtml).docs, description: { story: demos[1].description } } },
};
export const Demo2 = {
  name: demoNames[2],
  render: () => renderDemo(demos[2]),
  parameters: { docs: { ...gulpSource(demos[2].previewHtml).docs, description: { story: demos[2].description } } },
};
export const Demo3 = {
  name: demoNames[3],
  render: () => renderDemo(demos[3]),
  parameters: { docs: { ...gulpSource(demos[3].previewHtml).docs, description: { story: demos[3].description } } },
};
export const Demo4 = {
  name: demoNames[4],
  render: () => renderDemo(demos[4]),
  parameters: { docs: { ...gulpSource(demos[4].previewHtml).docs, description: { story: demos[4].description } } },
};
export const Demo5 = {
  name: demoNames[5],
  render: () => renderDemo(demos[5]),
  parameters: { docs: { ...gulpSource(demos[5].previewHtml).docs, description: { story: demos[5].description } } },
};
export const Demo6 = {
  name: demoNames[6],
  render: () => renderDemo(demos[6]),
  parameters: { docs: { ...gulpSource(demos[6].previewHtml).docs, description: { story: demos[6].description } } },
};
export const Demo7 = {
  name: demoNames[7],
  render: () => renderDemo(demos[7]),
  parameters: { docs: { ...gulpSource(demos[7].previewHtml).docs, description: { story: demos[7].description } } },
};
export const Demo8 = {
  name: demoNames[8],
  render: () => renderDemo(demos[8]),
  parameters: { docs: { ...gulpSource(demos[8].previewHtml).docs, description: { story: demos[8].description } } },
};
export const Demo9 = {
  name: demoNames[9],
  render: () => renderDemo(demos[9]),
  parameters: {
    docs: {
      source: { code: null },
      canvas: { sourceState: 'none', withToolbar: false },
      description: { story: demos[9].description },
    },
  },
};
export const Demo10 = {
  name: demoNames[10],
  render: () => renderDemo(demos[10]),
  parameters: {
    docs: {
      ...gulpSource(demos[10].previewHtml).docs,
      source: { code: null },
      canvas: { sourceState: 'none', withToolbar: false },
      description: { story: demos[10].description },
    },
  },
};

export const ApiClasses = {
  name: '클래스 · 속성',
  tags: ['!dev'],
  render: () => renderDemo(apis[0]),
  parameters: {
    docs: {
      source: { code: null },
      description: { story: 'HTML 마크업과 데모 런타임에서 사용하는 클래스·속성입니다.' },
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
      description: { story: 'Snackbar의 크기·표면·위치·모션을 조절하는 CSS 변수입니다.' },
    },
  },
};
