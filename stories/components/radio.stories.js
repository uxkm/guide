import html from '../../src/components/radio.html?raw';
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
  title: 'Components/폼/Radio',
  id: 'components-radio',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '단일 선택을 위한 Radio 컴포넌트입니다. 기본 너비는 인라인(콘텐츠)이며, radio_block · radio_group_block으로 전체 너비를 사용합니다.',
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
  name: '레이블 뒤',
  render: () => renderDemo(demos[1]),
  parameters: { docs: { ...gulpSource(demos[1].previewHtml).docs, description: { story: demos[1].description } } },
};
export const Demo2 = {
  name: '기본',
  render: () => renderDemo(demos[2]),
  parameters: { docs: { ...gulpSource(demos[2].previewHtml).docs, description: { story: demos[2].description } } },
};
export const Demo3 = {
  name: '단독 사용',
  render: () => renderDemo(demos[3]),
  parameters: { docs: { ...gulpSource(demos[3].previewHtml).docs, description: { story: demos[3].description } } },
};
export const Demo4 = {
  name: '크기',
  render: () => renderDemo(demos[4]),
  parameters: { docs: { ...gulpSource(demos[4].previewHtml).docs, description: { story: demos[4].description } } },
};
export const Demo5 = {
  name: '너비',
  render: () => renderDemo(demos[5]),
  parameters: { docs: { ...gulpSource(demos[5].previewHtml).docs, description: { story: demos[5].description } } },
};
export const Demo6 = {
  name: '색상',
  render: () => renderDemo(demos[6]),
  parameters: { docs: { ...gulpSource(demos[6].previewHtml).docs, description: { story: demos[6].description } } },
};
export const Demo7 = {
  name: '상태',
  render: () => renderDemo(demos[7]),
  parameters: { docs: { ...gulpSource(demos[7].previewHtml).docs, description: { story: demos[7].description } } },
};
export const Demo8 = {
  name: '그룹',
  render: () => renderDemo(demos[8]),
  parameters: { docs: { ...gulpSource(demos[8].previewHtml).docs, description: { story: demos[8].description } } },
};
export const Demo9 = {
  name: '버튼형',
  render: () => renderDemo(demos[9]),
  parameters: { docs: { ...gulpSource(demos[9].previewHtml).docs, description: { story: demos[9].description } } },
};
export const Demo10 = {
  name: '카드형',
  render: () => renderDemo(demos[10]),
  parameters: { docs: { ...gulpSource(demos[10].previewHtml).docs, description: { story: demos[10].description } } },
};
export const Demo11 = {
  name: '폼 레이아웃',
  render: () => renderDemo(demos[11]),
  parameters: { docs: { ...gulpSource(demos[11].previewHtml).docs, description: { story: demos[11].description } } },
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
